import React, { useState, useEffect, useCallback } from 'react';
import { BlockType, blockService } from '../services/blockService';
import { pageService } from '../services/pageService';
import type { Block } from '../services/blockService';
import { GripVertical, Image as ImageIcon, Code as CodeIcon, List, ListOrdered, Minus, FileText } from 'lucide-react';
import './BlockEditor.css';

// Simple debounce utility
function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
    let timeout: any;
    return function (this: any, ...args: Parameters<T>) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

interface BlockEditorProps {
    pageId: number;
    onNavigate?: (pageId: number) => void;
}

const BlockEditor: React.FC<BlockEditorProps> = ({ pageId, onNavigate }) => {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Slash Menu State
    const [slashMenuOpen, setSlashMenuOpen] = useState(false);
    const [slashMenuBlockId, setSlashMenuBlockId] = useState<number | null>(null);
    const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 });

    // Drag and Drop State
    const [draggedBlockId, setDraggedBlockId] = useState<number | null>(null);

    // Fetch blocks on mount or pageId change
    useEffect(() => {
        const fetchBlocks = async () => {
            setIsLoading(true);
            try {
                const fetchedBlocks = await blockService.getByPage(pageId);
                if (fetchedBlocks.length === 0) {
                    // Create an initial empty block if none exist
                    const initialBlock = await blockService.create({
                        pageId,
                        type: BlockType.Text,
                        content: '',
                        order: 0
                    });
                    setBlocks([initialBlock]);
                } else {
                    setBlocks(fetchedBlocks);
                }
            } catch (error) {
                console.error('Failed to fetch blocks:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlocks();
    }, [pageId]);

    // Update block content (Debounced)
    const debouncedUpdate = useCallback(
        debounce(async (id: number, content: string) => {
            try {
                await blockService.update(id, { content });
            } catch (error) {
                console.error('Failed to save block:', error);
            }
        }, 1000),
        []
    );

    const handleContentChange = (id: number, newContent: string, e?: React.ChangeEvent<any>) => {
        setBlocks(prev => prev.map(b => b.id === id ? { ...b, content: newContent } : b));
        debouncedUpdate(id, newContent);

        // Slash command detection
        if (newContent.endsWith('/')) {
            if (e) {
                const rect = e.target.getBoundingClientRect();
                setSlashMenuPosition({
                    top: rect.bottom + window.scrollY + 5,
                    left: rect.left + window.scrollX
                });
                setSlashMenuBlockId(id);
                setSlashMenuOpen(true);
            }
        } else if (slashMenuOpen && slashMenuBlockId === id) {
            // Close if space typed or cleared, or slash removed
            if (newContent.includes(' ') || newContent === '' || !newContent.includes('/')) {
                setSlashMenuOpen(false);
            }
        }
    };

    const changeBlockType = async (blockId: number, newType: BlockType) => {
        const block = blocks.find(b => b.id === blockId);
        if (!block) return;

        let cleanContent = block.content.endsWith('/') ? block.content.slice(0, -1) : block.content;
        let metadata = block.metadata;

        // Custom logic for Page type
        if (newType === BlockType.Page) {
            // Create a new sub-page
            try {
                const newPage = await pageService.create({
                    title: 'Untitled',
                    parentPageId: pageId, // Parent is current page
                    teamspaceId: 1 // Default or derived from context (TODO: pass teamspaceId prop)
                });
                cleanContent = 'Untitled';
                metadata = JSON.stringify({ pageId: newPage.id });
            } catch (error) {
                console.error("Failed to create subpage:", error);
                return; // Abort
            }
        }

        // Optimistic update
        const updatedBlock = { ...block, type: newType, content: cleanContent, metadata };
        setBlocks(prev => prev.map(b => b.id === blockId ? updatedBlock : b));
        setSlashMenuOpen(false);
        setSlashMenuBlockId(null);

        // Persist
        try {
            await blockService.update(blockId, { type: newType, content: cleanContent, metadata });
        } catch (error) {
            console.error("Failed to update block type", error);
        }
    };

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = () => setSlashMenuOpen(false);
        if (slashMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [slashMenuOpen]);


    const handleKeyDown = async (e: React.KeyboardEvent, block: Block, index: number) => {
        if (slashMenuOpen && slashMenuBlockId === block.id) {
            if (e.key === 'Escape') {
                setSlashMenuOpen(false);
            }
            return;
        }

        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Create new block
            const newOrder = block.order + 1; // Simplification, ideally we resort
            try {
                const newBlock = await blockService.create({
                    pageId,
                    type: BlockType.Text,
                    content: '',
                    order: newOrder
                });

                const newBlocks = [...blocks];
                newBlocks.splice(index + 1, 0, newBlock);
                setBlocks(newBlocks);

                // Focus will be handled by auto-focusing the new input (requires refs, simplistic for now)
                setTimeout(() => {
                    const inputs = document.querySelectorAll('.block-input');
                    if (inputs[index + 1]) (inputs[index + 1] as HTMLElement).focus();
                }, 0);

            } catch (error) {
                console.error('Failed to create block:', error);
            }
        } else if (e.key === 'Backspace' && block.content === '') {
            // Handle backspace for empty blocks or merging logic could go here
            // For now, if empty, delete
            if (block.content === '' && blocks.length > 1) {
                e.preventDefault();
                try {
                    await blockService.delete(block.id);
                    const newBlocks = blocks.filter(b => b.id !== block.id);
                    setBlocks(newBlocks);

                    setTimeout(() => {
                        const inputs = document.querySelectorAll('.block-input');
                        if (inputs[index - 1]) (inputs[index - 1] as HTMLElement).focus();
                    }, 0);
                } catch (error) {
                    console.error('Failed to delete block:', error);
                }
            }
        }
    };

    // --- Drag and Drop Handlers ---

    const handleDragStart = (e: React.DragEvent, id: number) => {
        setDraggedBlockId(id);
        e.dataTransfer.effectAllowed = 'move';
        // Optional: set custom drag image
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // Necessary to allow dropping
        // Optional: add visual indicator of where it will drop
    };

    const handleDrop = async (e: React.DragEvent, targetId: number) => {
        e.preventDefault();
        if (draggedBlockId === null || draggedBlockId === targetId) return;

        const draggedBlockIndex = blocks.findIndex(b => b.id === draggedBlockId);
        const targetBlockIndex = blocks.findIndex(b => b.id === targetId);

        if (draggedBlockIndex === -1 || targetBlockIndex === -1) return;

        // Reorder array locally
        const newBlocks = [...blocks];
        const [movedBlock] = newBlocks.splice(draggedBlockIndex, 1);
        newBlocks.splice(targetBlockIndex, 0, movedBlock);

        // Update orders
        const updates = newBlocks.map((block, index) => ({
            id: block.id,
            order: index
        }));

        // Optimistic UI update
        const updatedBlocks = newBlocks.map((b, index) => ({ ...b, order: index }));
        setBlocks(updatedBlocks);
        setDraggedBlockId(null);

        // Persist to backend
        try {
            await blockService.batchUpdate(updates);
        } catch (error) {
            console.error("Failed to update block order", error);
            // Revert on failure? For now, we'll just log
        }
    };

    const handlePageClick = (block: Block) => {
        if (!block.metadata) return;
        try {
            const data = JSON.parse(block.metadata);
            if (data.pageId) {
                if (onNavigate) {
                    onNavigate(data.pageId);
                } else {
                    console.log("Navigating to page", data.pageId);
                }
            }
        } catch (e) {
            console.error("Invalid page metadata", e);
        }
    };

    if (isLoading) return <div>Loading blocks...</div>;

    return (
        <div className="block-editor" style={{ position: 'relative' }}>
            {blocks.map((block, index) => (
                <div
                    key={block.id}
                    className="block-wrapper"
                    draggable
                    onDragStart={(e) => handleDragStart(e, block.id)}
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, block.id)}
                    style={{
                        display: 'flex',
                        alignItems: block.type === BlockType.Divider ? 'center' : 'flex-start',
                        marginBottom: '4px',
                        opacity: draggedBlockId === block.id ? 0.5 : 1,
                        transition: 'opacity 0.2s'
                    }}
                >
                    <div className="block-controls" style={{ width: '24px', cursor: 'grab', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: block.type === BlockType.Divider ? '0' : '4px' }}>
                        <GripVertical size={16} color="#999" />
                    </div>
                    <div className="block-content-area" style={{ flex: 1, paddingLeft: '4px' }}>
                        {/* Headers */}
                        {block.type === BlockType.Heading1 && (
                            <input
                                className="block-input heading1"
                                value={block.content}
                                onChange={e => handleContentChange(block.id, e.target.value, e)}
                                onKeyDown={e => handleKeyDown(e, block, index)}
                                placeholder="Heading 1"
                                style={{ fontSize: '30px', fontWeight: 700, margin: '10px 0 4px', width: '100%', border: 'none', outline: 'none', background: 'transparent', color: 'inherit' }}
                            />
                        )}
                        {block.type === BlockType.Heading2 && (
                            <input
                                className="block-input heading2"
                                value={block.content}
                                onChange={e => handleContentChange(block.id, e.target.value, e)}
                                onKeyDown={e => handleKeyDown(e, block, index)}
                                placeholder="Heading 2"
                                style={{ fontSize: '24px', fontWeight: 600, margin: '8px 0 4px', width: '100%', border: 'none', outline: 'none', background: 'transparent', color: 'inherit' }}
                            />
                        )}
                        {block.type === BlockType.Heading3 && (
                            <input
                                className="block-input heading3"
                                value={block.content}
                                onChange={e => handleContentChange(block.id, e.target.value, e)}
                                onKeyDown={e => handleKeyDown(e, block, index)}
                                placeholder="Heading 3"
                                style={{ fontSize: '20px', fontWeight: 600, margin: '6px 0 4px', width: '100%', border: 'none', outline: 'none', background: 'transparent', color: 'inherit' }}
                            />
                        )}

                        {/* Standard Text */}
                        {block.type === BlockType.Text && (
                            <textarea
                                className="block-input text"
                                value={block.content}
                                onChange={e => handleContentChange(block.id, e.target.value, e)}
                                onKeyDown={e => handleKeyDown(e, block, index)}
                                placeholder="Type '/' for commands"
                                rows={1}
                                style={{
                                    fontSize: '16px',
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    background: 'transparent',
                                    color: 'inherit',
                                    resize: 'none',
                                    height: 'auto',
                                    minHeight: '24px',
                                    lineHeight: '1.5',
                                    padding: '2px 0'
                                }}
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = target.scrollHeight + 'px';
                                }}
                            />
                        )}

                        {/* Lists */}
                        {block.type === BlockType.BulletList && (
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ fontSize: '20px', lineHeight: '24px', color: '#37352f' }}>•</div>
                                <textarea
                                    className="block-input bullet-list"
                                    value={block.content}
                                    onChange={e => handleContentChange(block.id, e.target.value, e)}
                                    onKeyDown={e => handleKeyDown(e, block, index)}
                                    placeholder="List item"
                                    rows={1}
                                    style={{
                                        fontSize: '16px',
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        color: 'inherit',
                                        resize: 'none',
                                        height: 'auto',
                                        minHeight: '24px',
                                        lineHeight: '1.5',
                                        padding: '2px 0'
                                    }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                        )}

                        {block.type === BlockType.NumberedList && (
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ fontSize: '16px', lineHeight: '24px', color: '#37352f', minWidth: '20px' }}>1.</div>
                                <textarea
                                    className="block-input numbered-list"
                                    value={block.content}
                                    onChange={e => handleContentChange(block.id, e.target.value, e)}
                                    onKeyDown={e => handleKeyDown(e, block, index)}
                                    placeholder="List item"
                                    rows={1}
                                    style={{
                                        fontSize: '16px',
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        color: 'inherit',
                                        resize: 'none',
                                        height: 'auto',
                                        minHeight: '24px',
                                        lineHeight: '1.5',
                                        padding: '2px 0'
                                    }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                        )}

                        {/* Todo */}
                        {block.type === BlockType.Todo && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                                <input
                                    className="block-input todo"
                                    value={block.content}
                                    onChange={e => handleContentChange(block.id, e.target.value, e)}
                                    onKeyDown={e => handleKeyDown(e, block, index)}
                                    placeholder="To-do"
                                    style={{ fontSize: '16px', width: '100%', border: 'none', outline: 'none', background: 'transparent', color: 'inherit', textDecoration: block.metadata?.includes('checked') ? 'line-through' : 'none', padding: '2px 0' }}
                                />
                            </div>
                        )}

                        {/* Divider */}
                        {block.type === BlockType.Divider && (
                            <div style={{ padding: '8px 0', cursor: 'pointer' }} onClick={() => {/* ensure we can focus if needed */ }}>
                                <hr style={{ border: 'none', borderBottom: '1px solid #e1e1e0' }} />
                                <input
                                    style={{ position: 'absolute', opacity: 0, height: 0 }}
                                    onKeyDown={(e) => handleKeyDown(e, block, index)}
                                    autoFocus
                                />
                            </div>
                        )}

                        {/* Code */}
                        {block.type === BlockType.Code && (
                            <div style={{ background: '#f7f6f3', borderRadius: '4px', padding: '12px', fontFamily: 'monospace' }}>
                                <textarea
                                    className="block-input code"
                                    value={block.content}
                                    onChange={e => handleContentChange(block.id, e.target.value, e)}
                                    onKeyDown={e => handleKeyDown(e, block, index)}
                                    placeholder="Write code here..."
                                    style={{
                                        fontSize: '14px',
                                        fontFamily: 'monospace',
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        color: '#d44c47',
                                        resize: 'none',
                                        minHeight: '40px'
                                    }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                        )}

                        {/* Image */}
                        {block.type === BlockType.Image && (
                            <div>
                                {block.content ? (
                                    <div style={{ position: 'relative' }}>
                                        <img src={block.content} alt="Block" style={{ maxWidth: '100%', borderRadius: '4px', display: 'block' }} />
                                        <div style={{ position: 'absolute', top: 5, right: 5, background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '4px' }}>
                                            <input
                                                value={block.content}
                                                onChange={e => handleContentChange(block.id, e.target.value, e)}
                                                style={{ border: 'none', background: 'transparent', color: 'white', fontSize: '12px', width: '200px' }}
                                                placeholder="Image URL"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ background: '#f7f6f3', padding: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '10px', color: '#888' }}>
                                        <ImageIcon size={20} />
                                        <input
                                            className="block-input image-url"
                                            value={block.content}
                                            onChange={e => handleContentChange(block.id, e.target.value, e)}
                                            onKeyDown={e => handleKeyDown(e, block, index)}
                                            placeholder="Paste image URL here..."
                                            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px' }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Page Link */}
                        {block.type === BlockType.Page && (
                            <div
                                className="block-page-link"
                                onClick={() => handlePageClick(block)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '4px 0', cursor: 'pointer', color: '#37352f'
                                }}
                            >
                                <span style={{ fontSize: '20px' }}>📄</span>
                                <span style={{ textDecoration: 'underline', textDecorationColor: '#e0e0e0' }}>{block.content || 'Untitled'}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {slashMenuOpen && blocks.find(b => b.id === slashMenuBlockId) && (
                <div className="slash-command-menu" style={{
                    position: 'absolute',
                    top: slashMenuPosition.top - 200,
                    left: slashMenuPosition.left,
                }}>
                    <div className="sc-header">Basic Blocks</div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Text)}>
                        <div className="sc-item-icon">T</div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Text</div>
                            <div className="sc-item-desc">Just start writing with plain text.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Page)}>
                        <div className="sc-item-icon"><FileText size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Page</div>
                            <div className="sc-item-desc">Embed a sub-page inside this page.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Heading1)}>
                        <div className="sc-item-icon" style={{ fontSize: '20px', fontWeight: 'bold' }}>H1</div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Heading 1</div>
                            <div className="sc-item-desc">Big section heading.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Heading2)}>
                        <div className="sc-item-icon" style={{ fontSize: '18px', fontWeight: 'bold' }}>H2</div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Heading 2</div>
                            <div className="sc-item-desc">Medium section heading.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Heading3)}>
                        <div className="sc-item-icon" style={{ fontSize: '16px', fontWeight: 'bold' }}>H3</div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Heading 3</div>
                            <div className="sc-item-desc">Small section heading.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Todo)}>
                        <div className="sc-item-icon" style={{ background: '#2383e2', color: 'white' }}>✓</div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">To-do list</div>
                            <div className="sc-item-desc">Track tasks with a to-do list.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.BulletList)}>
                        <div className="sc-item-icon"><List size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Bulleted list</div>
                            <div className="sc-item-desc">Create a simple bulleted list.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.NumberedList)}>
                        <div className="sc-item-icon"><ListOrdered size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Numbered list</div>
                            <div className="sc-item-desc">Create a list with numbering.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Divider)}>
                        <div className="sc-item-icon"><Minus size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Divider</div>
                            <div className="sc-item-desc">Visually divide blocks.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Code)}>
                        <div className="sc-item-icon"><CodeIcon size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Code</div>
                            <div className="sc-item-desc">Capture a code snippet.</div>
                        </div>
                    </div>

                    <div className="sc-item" onClick={() => changeBlockType(slashMenuBlockId!, BlockType.Image)}>
                        <div className="sc-item-icon"><ImageIcon size={18} /></div>
                        <div className="sc-item-content">
                            <div className="sc-item-title">Image</div>
                            <div className="sc-item-desc">Upload or embed with a link.</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="new-block-trigger" onClick={async () => {
                const newBlock = await blockService.create({
                    pageId,
                    type: BlockType.Text,
                    content: '',
                    order: blocks.length
                });
                setBlocks([...blocks, newBlock]);
            }} style={{ padding: '8px 0', color: '#888', cursor: 'text', opacity: 0.5 }}>
                Click to add a block...
            </div>
        </div>
    );
};

export default BlockEditor;

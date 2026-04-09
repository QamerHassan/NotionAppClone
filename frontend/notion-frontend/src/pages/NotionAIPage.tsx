import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    ChevronDown,
    Plus,
    Users,
    Sparkles,
    Settings,
    ShoppingBag,
    Trash2,
    Mail,
    Monitor,
    Home,
    Inbox,
    ChevronRight,
    Send,
    Paperclip,
    Wand2,
    Calendar
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NotionAIPage.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const NotionAIPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedContext, setSelectedContext] = useState('Auto');
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const hasInitialMessageSent = useRef(false);

    useEffect(() => {
        const state = location.state as { initialMessage?: string };
        if (state?.initialMessage && !hasInitialMessageSent.current) {
            hasInitialMessageSent.current = true;
            handleSendMessage(state.initialMessage);
            // Clear the state to prevent resending on refresh/navigation
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleSendMessage = async (text: string = inputValue) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: text
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/ai/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: text,
                    context: selectedContext,
                    history: messages
                })
            });

            const data = await response.json();

            const aiMessage: Message = {
                role: 'assistant',
                content: data.response
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(inputValue);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [inputValue]);

    return (
        <div className="dashboard-page">
            {/* Left Sidebar */}
            <aside className="sidebar-left">
                <div className="sidebar-header" onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}>
                    <div className="workspace-selector">
                        <div className="workspace-icon">Q</div>
                        <span className="workspace-name">qamer hassan's Space</span>
                        <ChevronDown size={14} className="workspace-chevron" />
                    </div>
                </div>

                {isWorkspaceOpen && (
                    <div className="workspace-dropdown">
                        <div className="dropdown-header">
                            <div className="workspace-icon-large">Q</div>
                            <div className="dropdown-info">
                                <div className="dropdown-name">qamer hassan's Space</div>
                                <div className="dropdown-plan">Free Plan</div>
                            </div>
                        </div>
                        <div className="dropdown-actions">
                            <button className="dropdown-btn"><Settings size={14} /> Settings</button>
                            <button className="dropdown-btn"><Plus size={14} /> Invite members</button>
                        </div>
                        <div className="dropdown-section">
                            <div className="dropdown-email">qamerhassan@gmail.com</div>
                            <div className="dropdown-item">
                                <div className="item-left">
                                    <div className="workspace-icon-small">Q</div>
                                    <span>qamer hassan's Space</span>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-section">
                            <div className="dropdown-link" onClick={handleLogout}>
                                Log out
                            </div>
                        </div>
                    </div>
                )}

                <div className="sidebar-menu">
                    <div className="menu-item" onClick={() => setIsSearchOpen(true)}><Search size={16} /> <span>Search</span></div>
                    <div className="menu-item" onClick={() => navigate('/dashboard')}><Home size={16} /> <span>Home</span></div>
                    <div className="menu-item" onClick={() => navigate('/meetings')}><Users size={16} /> <span>Meetings</span></div>
                    <div className="menu-item active"><Sparkles size={16} /> <span>Notion AI</span></div>
                    <div className="menu-item" onClick={() => navigate('/dashboard?view=inbox')}><Inbox size={16} /> <span>Inbox</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">Private</div>
                    <div className="menu-item">
                        <ChevronRight size={14} className="item-chevron" />
                        <span className="page-icon">👋</span>
                        <span>Getting Started</span>
                    </div>
                    <div className="menu-item">
                        <ChevronRight size={14} className="item-chevron" />
                        <span className="page-icon">📝</span>
                        <span>To Do List</span>
                    </div>
                    <div className="menu-item add-new"><Plus size={14} /> <span>Add new</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">Teamspaces</div>
                    <div className="menu-item">
                        <span className="page-icon">
                            <Home size={12} fill="currentColor" />
                        </span>
                        <span>qamer hassan's Space HQ</span>
                    </div>
                    <div className="menu-item add-new"><Plus size={14} /> <span>Add new</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">Notion apps</div>
                    <div className="menu-item"><Mail size={16} /> <span>Notion Mail</span></div>
                    <div className="menu-item"><Calendar size={16} /> <span>Notion Calendar</span></div>
                    <div className="menu-item"><Monitor size={16} /> <span>Notion Desktop</span></div>
                </div>

                <div className="sidebar-footer">
                    <div className="menu-item"><Settings size={16} /> <span>Settings</span></div>
                    <div className="menu-item"><ShoppingBag size={16} /> <span>Marketplace</span></div>
                    <div className="menu-item"><Trash2 size={16} /> <span>Trash</span></div>
                </div>

                <div className="sidebar-bottom-help">
                    <div className="menu-item"><div className="help-icon">?</div></div>
                </div>
            </aside>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="search-modal-overlay" onClick={() => setIsSearchOpen(false)}>
                    <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="search-input-section">
                            <Search size={18} className="search-input-icon" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-modal-input"
                                autoFocus
                            />
                            <span className="keyboard-hint">ESC</span>
                        </div>
                        <div className="search-filter-bar">
                            <button className="filter-btn"><ChevronDown size={14} /> Sort</button>
                            <button className="filter-btn"><ChevronDown size={14} /> Title</button>
                            <button className="filter-btn"><ChevronDown size={14} /> In</button>
                            <button className="filter-btn"><ChevronDown size={14} /> Created by</button>
                            <button className="filter-btn"><ChevronDown size={14} /> Edited by</button>
                        </div>
                        <div className="search-results-area">
                            <div className="empty-search-state">Start typing to search...</div>
                        </div>
                        <div className="search-footer">
                            <div className="footer-keys">
                                <span>↑</span><span>↓</span> to navigate
                                <span>↵</span> to select
                                <span>ESC</span> to dismiss
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content - AI Chat */}
            <main className="main-content ai-main">
                <div className="ai-chat-container">
                    {messages.length === 0 ? (
                        <div className="ai-welcome-screen">
                            <div className="ai-icon-large">
                                <Wand2 size={48} />
                            </div>
                            <h1>How can I help you today?</h1>
                            <div className="suggested-prompts-grid">
                                <button className="suggested-prompt-btn" onClick={() => handleSendMessage("Summarize my recent meeting notes")}>
                                    <span className="prompt-icon">📝</span>
                                    <span>Summarize meeting notes</span>
                                </button>
                                <button className="suggested-prompt-btn" onClick={() => handleSendMessage("Help me write a blog post about...")}>
                                    <span className="prompt-icon">✍️</span>
                                    <span>Write a blog post</span>
                                </button>
                                <button className="suggested-prompt-btn" onClick={() => handleSendMessage("Create a project plan for...")}>
                                    <span className="prompt-icon">📋</span>
                                    <span>Create project plan</span>
                                </button>
                                <button className="suggested-prompt-btn" onClick={() => handleSendMessage("Explain quantum computing")}>
                                    <span className="prompt-icon">🧠</span>
                                    <span>Explain a topic</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="ai-messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.role}`}>
                                    <div className="message-avatar">
                                        {message.role === 'assistant' ? (
                                            <Sparkles size={20} />
                                        ) : (
                                            <div className="user-avatar">Q</div>
                                        )}
                                    </div>
                                    <div className="message-content">
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message assistant">
                                    <div className="message-avatar">
                                        <Sparkles size={20} />
                                    </div>
                                    <div className="message-content">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="ai-input-container">
                        <div className="ai-input-wrapper">
                            <div className="input-header">
                                <button className="context-btn">
                                    <Paperclip size={14} />
                                    Add context
                                </button>
                            </div>
                            <textarea
                                ref={inputRef}
                                className="ai-textarea"
                                placeholder="Ask, search, or make anything..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                rows={1}
                            />
                            <div className="input-footer">
                                <div className="input-actions-left">
                                    <button className="context-option active">
                                        <Sparkles size={12} />
                                        {selectedContext}
                                    </button>
                                    <button className="context-option" onClick={() => setSelectedContext('Research')}>
                                        <Search size={12} />
                                        Research
                                    </button>
                                    <button className="context-option" onClick={() => setSelectedContext('All sources')}>
                                        <Monitor size={12} />
                                        All sources
                                    </button>
                                </div>
                                <div className="input-actions-right">
                                    <div className="app-integrations">
                                        <span className="integration-icon">📊</span>
                                        <span className="integration-icon">📧</span>
                                        <span className="integration-icon">📅</span>
                                        <span className="integration-icon">🎨</span>
                                        <span className="integration-icon">💼</span>
                                        <span className="integration-icon">📁</span>
                                        <span className="integration-icon">🔗</span>
                                        <span className="integration-icon">❤️</span>
                                        <span className="integration-icon">🎯</span>
                                        <span className="integration-icon">✖️</span>
                                    </div>
                                    <button
                                        className="send-button"
                                        onClick={() => handleSendMessage(inputValue)}
                                        disabled={!inputValue.trim() || isLoading}
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ai-footer-text">
                            Get better answers from your apps
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Sidebar - Personalize */}
            <aside className="sidebar-right ai-sidebar">
                <div className="personalize-header">
                    <Wand2 size={16} />
                    <span>Personalize</span>
                </div>
                <div className="personalize-content">
                    <p>Customize your AI experience with preferences and settings.</p>
                </div>
            </aside>
        </div>
    );
};

export default NotionAIPage;

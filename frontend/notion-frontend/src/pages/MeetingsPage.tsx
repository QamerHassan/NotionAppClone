import React, { useState } from 'react';
import {
    Calendar,
    Search,
    ChevronDown,
    Plus,
    Users,
    Sparkles,
    MoreHorizontal,
    Settings,
    ShoppingBag,
    Trash2,
    Mail,
    Monitor,
    Home,
    Inbox,
    ChevronRight,
    Filter,
    SortAsc,
    LayoutGrid,
    Maximize2,
    Share2,
    ArrowUp,
    Volume2,
    Copy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MeetingsPage.css';

interface AiMessage {
    role: 'user' | 'assistant';
    content: string;
}

// Add SpeechRecognition types
interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start: () => void;
    stop: () => void;
    onresult: (event: any) => void;
    onerror: (event: any) => void;
}

interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
}

const MeetingsPage: React.FC = () => {
    const navigate = useNavigate();
    const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [aiMessages, setAiMessages] = useState<AiMessage[]>([]);
    const [aiInput, setAiInput] = useState('');
    const [aiLoading, setAiLoading] = useState(false);

    // New state for AI Meeting Notes
    const [activeView, setActiveView] = useState<'list' | 'detail'>('list');
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [interimTranscript, setInterimTranscript] = useState('');
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleSendAiMessage = async () => {
        if (!aiInput.trim() || aiLoading) return;

        const userMessage: AiMessage = { role: 'user', content: aiInput };
        setAiMessages(prev => [...prev, userMessage]);
        setAiInput('');
        setAiLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: aiInput,
                    context: 'Auto',
                    history: aiMessages
                })
            });

            const data = await response.json();
            const aiMessage: AiMessage = { role: 'assistant', content: data.response };
            setAiMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('AI Error:', error);
            const errorMessage: AiMessage = {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please make sure the AI service is running.'
            };
            setAiMessages(prev => [...prev, errorMessage]);
        } finally {
            setAiLoading(false);
        }
    };

    const handleStartTranscribing = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition is not supported in this browser. Please use Chrome.');
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognitionInstance = new SpeechRecognition();

        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = 'en-US';

        recognitionInstance.onresult = (event: any) => {
            let interim = '';
            let final = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }
            }

            if (final) {
                setTranscript(prev => prev + (prev ? ' ' : '') + final);
                setInterimTranscript('');
            } else {
                setInterimTranscript(interim);
            }
        };

        recognitionInstance.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setIsRecording(false);
        };

        recognitionInstance.start();
        setRecognition(recognitionInstance);
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (recognition) {
            recognition.stop();
            setIsRecording(false);
        }
    };

    const upcomingMeetings = [
        {
            title: 'Teamwide Morning Alignment',
            time: '8 - 10 AM',
            attendees: 5,
            status: 'upcoming',
            duration: '1 h'
        },
        {
            title: 'Project Progress Preview',
            time: '10 - 11 AM',
            attendees: 3,
            status: 'in-progress',
            duration: '2/3'
        },
        {
            title: 'Quarterly Strategy Update',
            time: '2:30 - 3:20 PM',
            attendees: 2,
            status: 'scheduled'
        },
        {
            title: 'Sprint Wrap-Up',
            time: '5:30 - 6:30 PM',
            attendees: 0,
            status: 'scheduled'
        }
    ];

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
                    <div className="menu-item active"><Users size={16} /> <span>Meetings</span></div>
                    <div className="menu-item" onClick={() => navigate('/notion-ai')}><Sparkles size={16} /> <span>Notion AI</span></div>
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

            {/* Main Content */}
            <main className="main-content">
                {activeView === 'list' ? (
                    <div className="meetings-container">
                        {/* Upcoming Meetings Section */}
                        <div className="meetings-section upcoming-section">
                            <div className="section-header">
                                <div className="section-title-row">
                                    <Calendar size={16} className="section-icon" />
                                    <h2>Upcoming meetings</h2>
                                </div>
                            </div>

                            <div className="upcoming-content">
                                <div className="upcoming-left-panel">
                                    <div className="calendar-promo">
                                        <div className="calendar-icon-box">
                                            <Calendar size={24} />
                                        </div>
                                        <h3>Start AI Meeting Notes automatically for your upcoming events.</h3>
                                        <a href="#" className="connect-calendar-link">Connect Calendar</a>
                                    </div>
                                </div>

                                <div className="upcoming-right-panel">
                                    {upcomingMeetings.map((meeting, index) => (
                                        <div key={index} className="meeting-item">
                                            <div className="meeting-title">{meeting.title}</div>
                                            <div className="meeting-meta">
                                                <span className="meeting-time">{meeting.time}</span>
                                                {meeting.attendees > 0 && (
                                                    <>
                                                        <span className="meta-dot">•</span>
                                                        <span className="meeting-attendees">
                                                            {Array(meeting.attendees).fill('●').join('')}
                                                        </span>
                                                    </>
                                                )}
                                                {meeting.duration && (
                                                    <>
                                                        <span className="meta-dot">•</span>
                                                        <span className="meeting-duration">{meeting.duration}</span>
                                                    </>
                                                )}
                                            </div>
                                            {meeting.title === 'Teamwide Morning Alignment' && (
                                                <button className="transcribe-btn" onClick={() => setActiveView('detail')}>Transcribe</button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* All Meeting Notes Section */}
                        <div className="meetings-section all-notes-section">
                            <div className="section-header">
                                <div className="section-title-row">
                                    <div className="notes-icon">📋</div>
                                    <h2>All meeting notes</h2>
                                </div>
                                <div className="section-actions">
                                    <button className="action-btn"><Filter size={16} /></button>
                                    <button className="action-btn"><SortAsc size={16} /></button>
                                    <button className="action-btn"><LayoutGrid size={16} /></button>
                                    <button className="action-btn"><Search size={16} /></button>
                                    <button className="action-btn"><Maximize2 size={16} /></button>
                                    <button className="action-btn"><Share2 size={16} /></button>
                                    <button className="new-btn" onClick={() => setActiveView('detail')}><Plus size={16} /> New</button>
                                </div>
                            </div>

                            <div className="empty-notes-state">
                                <div className="empty-icon">📋</div>
                                <p>Find all your AI Meeting Notes, including ones linked to meetings you attended, organized here for easy follow-up.</p>
                                <button className="new-ai-note-btn" onClick={() => setActiveView('detail')}>New AI meeting note</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="meeting-detail-view fade-in">
                        <button className="back-bread-btn" onClick={() => setActiveView('list')}>
                            Meetings / @Today 1:31 PM
                        </button>

                        <div className="detail-header">
                            <h1>@Today 1:31 PM</h1>
                            <div className="detail-meta">
                                <span className="meta-pill">Notes @Today</span>
                            </div>
                        </div>

                        <div className="recording-card">
                            <div className="card-top-row">
                                <div className="card-left">
                                    <div className="notes-icon-small">📝</div>
                                    <span>Notes</span>
                                </div>
                                <div className="card-right">
                                    <button className="icon-btn"><Share2 size={14} /></button>
                                    <button className="icon-btn"><Settings size={14} /></button>
                                    {isRecording ? (
                                        <button className="start-transcribing-btn recording" onClick={stopRecording}>
                                            <div className="recording-dot"></div>
                                            Stop transcribing
                                        </button>
                                    ) : (
                                        <button className="start-transcribing-btn" onClick={handleStartTranscribing}>
                                            Start transcribing <ChevronDown size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="card-body">
                                {transcript || interimTranscript ? (
                                    <div className="live-transcript">
                                        {transcript}
                                        {interimTranscript && <span className="interim-text"> {interimTranscript}</span>}
                                    </div>
                                ) : (
                                    <>
                                        <p className="ai-hint">Notion AI will summarize the notes and transcript</p>
                                        <p className="consent-hint">By starting, you confirm everyone being transcribed has given consent.</p>
                                    </>
                                )}
                            </div>

                            <div className="card-footer">
                                <div className="audio-controls">
                                    <Volume2 size={16} />
                                    <Copy size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Right Sidebar (AI) */}
            <aside className="sidebar-right">
                <div className="ai-header">
                    <span>AI</span>
                    <div className="ai-actions">
                        <button><MoreHorizontal size={16} /></button>
                    </div>
                </div>

                {aiMessages.length === 0 ? (
                    <>
                        <div className="ai-content">
                            <div className="ai-welcome">
                                <div className="ai-avatar">
                                    <Sparkles size={24} color="#000" fill="#fff" />
                                </div>
                                <h2>Get answers instantly</h2>
                                <p>Ask anything. Notion AI can generate text, summarize, and answer questions.</p>
                            </div>
                        </div>

                        <div className="ai-input-area">
                            <div className="ai-prompt-box-input">
                                <div className="ai-input-header">
                                    <Sparkles size={12} className="gold-sparkle" />
                                    <span>AI</span>
                                </div>
                                <textarea
                                    className="ai-textarea-sidebar"
                                    placeholder="Ask AI anything or try an example"
                                    value={aiInput}
                                    onChange={(e) => setAiInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendAiMessage();
                                        }
                                    }}
                                    rows={1}
                                />
                                <div className="ai-input-actions">
                                    <div className="left-actions">
                                        <button>@</button>
                                        <button>/</button>
                                    </div>
                                    <button
                                        className="send-btn"
                                        onClick={handleSendAiMessage}
                                        disabled={!aiInput.trim() || aiLoading}
                                    >
                                        <ArrowUp size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="ai-messages-container">
                            {aiMessages.map((msg, idx) => (
                                <div key={idx} className={`ai-message ${msg.role}`}>
                                    <div className="message-avatar">
                                        {msg.role === 'assistant' ? (
                                            <Sparkles size={20} />
                                        ) : (
                                            <div className="user-avatar-small">Q</div>
                                        )}
                                    </div>
                                    <div className="message-text">{msg.content}</div>
                                </div>
                            ))}
                            {aiLoading && (
                                <div className="ai-message assistant">
                                    <div className="message-avatar">
                                        <Sparkles size={20} />
                                    </div>
                                    <div className="message-text">
                                        <div className="typing-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="ai-input-area">
                            <div className="ai-prompt-box-input">
                                <div className="ai-input-header">
                                    <Sparkles size={12} className="gold-sparkle" />
                                    <span>AI</span>
                                </div>
                                <textarea
                                    className="ai-textarea-sidebar"
                                    placeholder="Ask AI anything or try an example"
                                    value={aiInput}
                                    onChange={(e) => setAiInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendAiMessage();
                                        }
                                    }}
                                    rows={1}
                                />
                                <div className="ai-input-actions">
                                    <div className="left-actions">
                                        <button>@</button>
                                        <button>/</button>
                                    </div>
                                    <button
                                        className="send-btn"
                                        onClick={handleSendAiMessage}
                                        disabled={!aiInput.trim() || aiLoading}
                                    >
                                        <ArrowUp size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
};

export default MeetingsPage;

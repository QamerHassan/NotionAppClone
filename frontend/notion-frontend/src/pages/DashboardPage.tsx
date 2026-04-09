import React, { useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    Search, Home, Users, Sparkles, Inbox,
    Settings, ShoppingBag, Plus, ChevronRight, ChevronDown,
    MoreHorizontal, CheckSquare, MessageSquare, Paperclip, ArrowUp,
    Calendar, Mail, Monitor, Trash2, Check, UserPlus, LogOut,
    ArrowUpDown, FileText, AlignLeft, Globe, Clock,
    BookOpen, Layers, Clapperboard, FilePlus, Target, Book, Layout, Edit2, ChevronsRight, Filter, CheckCheck, HelpCircle, ListTodo, Share,
    File, Trello, CalendarDays, Database, X, ArrowDown,
    Bell, Zap, User, Shield, Smile, Import as ImportIcon, UploadCloud, Lock, ExternalLink, Copy,
    Mic, ArrowUpRight, Github, Cloud, Maximize, Hash, Star, List, BarChart3, Link, ArrowLeft, Info, Megaphone
} from 'lucide-react';

const NotionIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
    <div style={{
        width: size,
        height: size,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900',
        fontSize: size * 0.7,
        fontFamily: 'Inter, sans-serif'
    }}>N</div>
);

import './DashboardPage.css';
import { pageService } from '../services/pageService';
import { teamspaceService } from '../services/teamspaceService';
import BlockEditor from '../components/BlockEditor';

interface AiMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface Teamspace {
    id: number | string;
    name: string;
    icon: string;
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
}

interface Page {
    id: number;
    title: string;
    icon?: string;
    content?: string;
    teamspaceId?: number;
    // other fields as needed
}


const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isAiOpen, setIsAiOpen] = useState(true);
    const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeView, setActiveView] = useState(searchParams.get('view') || 'home');
    const [aiMessages, setAiMessages] = useState<AiMessage[]>([]);
    const [aiInput, setAiInput] = useState('');
    const [aiLoading, setAiLoading] = useState(false);
    const [checklistState, setChecklistState] = useState({
        account: true,
        create: true,
        page: true,
        sidebar: true,
        todo: true
    });
    const [isToggleOpen, setIsToggleOpen] = useState(true);

    const toggleCheck = (key: keyof typeof checklistState) => {
        setChecklistState(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Task Detail States
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
    const [isPropertyMenuOpen, setIsPropertyMenuOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState('New task');
    const [taskDueDate, setTaskDueDate] = useState('Empty');
    const [taskStatus, setTaskStatus] = useState('Not started');
    const [taskAssignee, setTaskAssignee] = useState<string | null>(null);
    const [taskIcon, setTaskIcon] = useState<string | null>(null);
    const [taskCover, setTaskCover] = useState<string | null>(null);
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
    const [activeIconTab, setActiveIconTab] = useState<'emoji' | 'icons' | 'upload'>('emoji');
    const [isCoverPickerOpen, setIsCoverPickerOpen] = useState(false);
    const [activeCoverTab, setActiveCoverTab] = useState<'gallery' | 'upload' | 'link' | 'unsplash'>('gallery');
    const [isAddViewMenuOpen, setIsAddViewMenuOpen] = useState(false);
    const [isTableMenuOpen, setIsTableMenuOpen] = useState(false);
    const [newPageTitle, setNewPageTitle] = useState('New page');
    const [databaseTitle, setDatabaseTitle] = useState('New database');

    const [todoView, setTodoView] = useState<'todo' | 'done'>('todo');
    const [isNewPageModalOpen, setIsNewPageModalOpen] = useState(false);
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
    const [isBuildWithAIOpen, setIsBuildWithAIOpen] = useState(false);
    const [aiPrompt, setAiPrompt] = useState('');
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
    const [isTrashOpen, setIsTrashOpen] = useState(false);
    const [isAiBuilding, setIsAiBuilding] = useState(false);
    const [isAddMembersOpen, setIsAddMembersOpen] = useState(false);
    const [isInviteSent, setIsInviteSent] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isMoreHelpOpen, setIsMoreHelpOpen] = useState(false);
    const trashTriggerRef = useRef<HTMLDivElement>(null);
    const [activeSettingsTab, setActiveSettingsTab] = useState<'preferences' | 'notifications' | 'connections' | 'people' | 'teamspaces' | 'general' | 'security' | 'identity' | 'notion_ai' | 'public_pages' | 'emoji' | 'connections_workspace' | 'import_migrate' | 'upgrade_plan'>('general');

    // Theme and Language States
    const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');
    const [language, setLanguage] = useState('English (US)');
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isCreateTeamspaceModalOpen, setIsCreateTeamspaceModalOpen] = useState(false);
    const [createTeamspaceName, setCreateTeamspaceName] = useState('');
    const [createTeamspaceDescription, setCreateTeamspaceDescription] = useState('');
    const [createTeamspacePrivacy, setCreateTeamspacePrivacy] = useState<'open' | 'closed' | 'private'>('open');

    // Teamspace State
    const [teamspaces, setTeamspaces] = useState<Teamspace[]>([]);
    const [activeTeamspaceId, setActiveTeamspaceId] = useState<number | string>('default');
    const [isLoadingTeamspaces, setIsLoadingTeamspaces] = useState(true);
    // Pages State for active teamspace
    const [pages, setPages] = useState<Page[]>([]);
    const [isLoadingPages, setIsLoadingPages] = useState(false);
    const [isCreatePageModalOpen, setIsCreatePageModalOpen] = useState(false);
    const [createPageTitle, setCreatePageTitle] = useState('');
    const [activePageId, setActivePageId] = useState<number | null>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<Page[]>([]);
    const languages = [
        { label: 'العربية', sub: 'Arabic' },
        { label: 'Dansk', sub: 'Danish' },
        { label: 'Nederlands', sub: 'Dutch' },
        { label: 'English (UK)', sub: 'English (UK)' },
        { label: 'English (US)', sub: 'English (US)' },
        { label: 'Suomi', sub: 'Finnish' },
        { label: 'Français (France)', sub: 'French (France)' },
        { label: 'Deutsch', sub: 'German' },
        { label: 'עברית', sub: 'Hebrew' },
        { label: 'Bahasa Indonesia', sub: 'Indonesian' },
        { label: '日本語', sub: 'Japanese' }
    ];

    const translations: Record<string, Record<string, string>> = {
        'English (US)': { 'Search': 'Search', 'Home': 'Home', 'Meetings': 'Meetings', 'Inbox': 'Inbox', 'Settings': 'Settings', 'Trash': 'Trash', 'Private': 'Private' },
        'Français (France)': { 'Search': 'Rechercher', 'Home': 'Accueil', 'Meetings': 'Réunions', 'Inbox': 'Boîte de réception', 'Settings': 'Paramètres', 'Trash': 'Corbeille', 'Private': 'Privé' },
        'Deutsch': { 'Search': 'Suche', 'Home': 'Startseite', 'Meetings': 'Meetings', 'Inbox': 'Posteingang', 'Settings': 'Einstellungen', 'Trash': 'Papierkorb', 'Private': 'Privat' },
        '日本語': { 'Search': '検索', 'Home': 'ホーム', 'Meetings': '会議', 'Inbox': '受信トレイ', 'Settings': '設定', 'Trash': 'ゴミ箱', 'Private': 'プライベート' },
        'العربية': { 'Search': 'بحث', 'Home': 'الرئيسية', 'Meetings': 'الاجتماعات', 'Inbox': 'الوارد', 'Settings': 'الإعدادات', 'Trash': 'سلة المهملات', 'Private': 'خاص' }
        // ... more can be added later
    };

    const t = (key: string) => {
        return translations[language]?.[key] || translations['English (US)'][key] || key;
    };

    // Load settings from localStorage
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('notion-theme') as 'system' | 'light' | 'dark';
        const savedLanguage = localStorage.getItem('notion-language');
        if (savedTheme) setTheme(savedTheme);
        if (savedLanguage) setLanguage(savedLanguage);
    }, []);

    // Apply theme and save to localStorage
    React.useEffect(() => {
        document.body.classList.remove('light-theme');
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (!prefersDark) document.body.classList.add('light-theme');
        }
        localStorage.setItem('notion-theme', theme);
    }, [theme]);

    // Save language to localStorage
    React.useEffect(() => {
        localStorage.setItem('notion-language', language);
    }, [language]);

    // Fetch teamspaces on mount
    React.useEffect(() => {
        const fetchTeamspaces = async () => {
            try {
                setIsLoadingTeamspaces(true);
                const data = await teamspaceService.getAll();
                setTeamspaces(data);
                if (data.length > 0 && activeTeamspaceId === 'default') {
                    setActiveTeamspaceId(data[0].id);
                }
            } catch (error) {
                console.error('Failed to fetch teamspaces:', error);
                // Fallback to default teamspace
                setTeamspaces([{ id: 'default', name: "qamer hassan's Space HQ", icon: 'Q' }]);
            } finally {
                setIsLoadingTeamspaces(false);
            }
        };
        fetchTeamspaces();
    }, []);

    // Fetch pages when activeTeamspaceId changes
    React.useEffect(() => {
        const fetchPages = async () => {
            if (!activeTeamspaceId || activeTeamspaceId === 'default') {
                setPages([]);
                return;
            }
            try {
                setIsLoadingPages(true);
                const data = await pageService.getAll(Number(activeTeamspaceId));
                setPages(data);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
                setPages([]);
            } finally {
                setIsLoadingPages(false);
            }
        };
        fetchPages();
    }, [activeTeamspaceId]);

    // Fetch breadcrumbs when activePageId changes
    React.useEffect(() => {
        const fetchBreadcrumbs = async () => {
            if (activePageId) {
                try {
                    const crumbs = await pageService.getBreadcrumbs(activePageId);
                    setBreadcrumbs(crumbs);
                } catch (e) {
                    console.error("Failed to fetch breadcrumbs", e);
                    setBreadcrumbs([]);
                }
            } else {
                setBreadcrumbs([]);
            }
        };
        fetchBreadcrumbs();
    }, [activePageId]);

    const [todoTasks, setTodoTasks] = useState([
        { id: 1, text: 'New task', date: '', completed: false, placeholder: true },
        { id: 2, text: 'Check the box to mark items as done', date: 'Today', completed: true },
        { id: 3, text: 'Click the due date to change it', date: 'Today', completed: false },
        { id: 4, text: 'Click me to see even more detail', date: 'Today', completed: false },
        { id: 5, text: 'Click the blue New button to add a task', date: 'Today', completed: false },
        { id: 6, text: 'Click me to learn how to hide checked items', date: 'Today', completed: false },
        { id: 7, text: 'See finished items in the "Done" view', date: 'Today', completed: false },
        { id: 8, text: 'Click me to learn how to see your content your way', date: 'Tomorrow', completed: false },
    ]);

    const toggleTask = (id: number) => {
        setTodoTasks(prev => prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

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

    const handleSuggestedPrompt = () => {
        setAiInput('Build a project management hub in a new page');
        setTimeout(() => handleSendAiMessage(), 100);
    };

    // Close settings dropdowns on outside click
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as Element).closest('.dropdown-container')) {
                setIsThemeMenuOpen(false);
                setIsLanguageMenuOpen(false);
            }
        };

        if (isThemeMenuOpen || isLanguageMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isThemeMenuOpen, isLanguageMenuOpen]);

    return (
        <div className="dashboard-page">
            {/* Search Modal */}
            {isSearchOpen && (
                <div className="search-modal-overlay" onClick={() => setIsSearchOpen(false)}>
                    <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="search-input-section">
                            <Search size={20} className="search-input-icon" />
                            <input
                                type="text"
                                placeholder="Search or ask a question in qamer hassan's Space..."
                                className="search-modal-input"
                                autoFocus
                            />
                            <div className="search-input-actions">
                                <span className="keyboard-hint">esc</span>
                            </div>
                        </div>

                        <div className="search-filter-bar">
                            <button className="filter-btn"><ArrowUpDown size={14} /> Sort</button>
                            <button className="filter-btn"><AlignLeft size={14} /> Title only</button>
                            <button className="filter-btn"><Users size={14} /> Created by</button>
                            <button className="filter-btn"><Globe size={14} /> Teamspace</button>
                            <button className="filter-btn"><FileText size={14} /> In</button>
                            <button className="filter-btn"><Calendar size={14} /> Date</button>
                        </div>

                        <div className="search-results-area">
                            <div className="empty-search-state">
                                <p>Search for pages, databases, and more...</p>
                            </div>
                        </div>

                        <div className="search-footer">
                            <span>Search with AI</span>
                            <div className="footer-keys">
                                <span>↵</span> to select
                                <span>↑↓</span> to navigate
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Left Sidebar */}
            <aside className="sidebar-left">
                <div className="sidebar-header" onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}>
                    <div className="workspace-selector">
                        <span className="workspace-icon">Q</span>
                        <span className="workspace-name">qamer hassan's S...</span>
                        <ChevronDown size={14} className="workspace-chevron" />
                        <span className="edit-icon"><CheckSquare size={14} /></span>
                    </div>
                </div>

                {isWorkspaceOpen && (
                    <div className="workspace-dropdown">
                        <div className="dropdown-header">
                            <span className="workspace-icon-large">Q</span>
                            <div className="dropdown-info">
                                <div className="dropdown-name">qamer hassan's Space</div>
                                <div className="dropdown-plan">Free Plan · 1 member</div>
                            </div>
                        </div>

                        <div className="dropdown-actions">
                            <button className="dropdown-btn active">
                                <Settings size={14} /> Settings
                            </button>
                            <button className="dropdown-btn" onClick={() => {
                                setIsAddMembersOpen(true);
                                setIsWorkspaceOpen(false);
                            }}>
                                <UserPlus size={14} /> Invite members
                            </button>
                        </div>

                        <div className="dropdown-section">
                            <div className="dropdown-email">qamerhassan445@gmail.com</div>
                            <div className="dropdown-item active">
                                <div className="item-left">
                                    <span className="workspace-icon-small">Q</span>
                                    <span>qamer hassan's Space</span>
                                </div>
                                <Check size={16} />
                            </div>
                            <div className="dropdown-link"><Plus size={14} /> New workspace</div>
                        </div>

                        <div className="dropdown-section">
                            <div className="dropdown-link"><Plus size={14} /> Add another account</div>
                            <div className="dropdown-link" onClick={handleLogout}><LogOut size={14} /> Log out</div>
                        </div>

                        <div className="dropdown-section">
                            <div className="dropdown-link">Get Windows app</div>
                        </div>
                    </div>
                )}

                <div className="sidebar-menu">
                    <div className="menu-item" onClick={() => setIsSearchOpen(true)}><Search size={16} /> <span>{t('Search')}</span></div>
                    <div className={`menu-item ${activeView === 'home' ? 'active' : ''}`} onClick={() => setActiveView('home')}><Home size={16} /> <span>{t('Home')}</span></div>
                    <div className="menu-item" onClick={() => navigate('/meetings')}><Users size={16} /> <span>{t('Meetings')}</span></div>
                    <div className="menu-item" onClick={() => navigate('/notion-ai')}><Sparkles size={16} /> <span>Notion AI</span></div>
                    <div className={`menu-item ${activeView === 'inbox' ? 'active' : ''}`} onClick={() => setActiveView('inbox')}><Inbox size={16} /> <span>{t('Inbox')}</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">{t('Private')}</div>
                    <div className={`menu-item ${activeView === 'getting-started' ? 'active' : ''}`} onClick={() => setActiveView('getting-started')}>
                        <ChevronRight size={14} className="item-chevron" />
                        <span className="page-icon">👋</span>
                        <span>Getting Started</span>
                    </div>
                    <div className={`menu-item ${activeView === 'todo-list' ? 'active' : ''}`} onClick={() => setActiveView('todo-list')}>
                        <ChevronRight size={14} className="item-chevron" />
                        <span className="page-icon">📝</span>
                        <span>To Do List</span>
                    </div>
                    <div className="menu-item add-new" onClick={() => setIsNewTaskModalOpen(true)}><Plus size={14} /> <span>Add new</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">Teamspaces</div>
                    {teamspaces.map(ts => (
                        <div
                            key={ts.id}
                            className={`menu-item ${activeView === 'teamspace' && activeTeamspaceId === ts.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTeamspaceId(ts.id);
                                setActiveView(ts.id === 'default' ? 'home' : 'teamspace');
                            }}
                        >
                            <span className="page-icon">
                                {ts.id === 'default' ? <Home size={12} fill="currentColor" /> : <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{ts.icon}</span>}
                            </span>
                            <span>{ts.name}</span>
                        </div>
                    ))}
                    <div className="menu-item add-new" onClick={() => setIsCreateTeamspaceModalOpen(true)}><Plus size={14} /> <span>Add new</span></div>
                </div>

                <div className="sidebar-section">
                    <div className="section-title">Notion apps</div>
                    <div className="menu-item" onClick={() => window.open('https://mail.notion.so/inbox?from=appSwitcher', '_blank')}>
                        <Mail size={16} /> <span>Notion Mail</span>
                    </div>
                    <div className="menu-item" onClick={() => setIsCalendarModalOpen(true)}>
                        <Calendar size={16} /> <span>Notion Calendar</span>
                    </div>
                    <div className="menu-item"><Monitor size={16} /> <span>Notion Desktop</span></div>
                </div>

                <div className="sidebar-footer">
                    <div className="menu-item" onClick={() => setIsSettingsModalOpen(true)}><Settings size={16} /> <span>{t('Settings')}</span></div>
                    <div className={`menu-item ${activeView === 'marketplace' ? 'active' : ''}`} onClick={() => setActiveView('marketplace')}>
                        <ShoppingBag size={16} /> <span>Marketplace</span>
                    </div>
                    <div
                        className={`menu-item ${isTrashOpen ? 'active' : ''}`}
                        ref={trashTriggerRef}
                        onClick={() => setIsTrashOpen(!isTrashOpen)}
                    >
                        <Trash2 size={16} /> <span>{t('Trash')}</span>
                    </div>
                </div>

                <div className="sidebar-invite-box" onClick={() => setIsAddMembersOpen(true)}>
                    <div className="invite-content">
                        <div className="invite-top">
                            <UserPlus size={14} />
                            <span>Invite members</span>
                            <X size={14} className="close-invite" onClick={(e) => e.stopPropagation()} />
                        </div>
                        <div className="invite-subtext">Collaborate with your team.</div>
                    </div>
                </div>

                <div className="sidebar-bottom-help">
                    <div className="menu-item" onClick={() => setIsHelpOpen(!isHelpOpen)}>
                        <div className="help-icon">?</div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {activeView === 'marketplace' ? (
                    <div className="marketplace-view fade-in">
                        {/* Header */}
                        <div className="marketplace-header">
                            <div className="header-left">
                                <div className="marketplace-logo">
                                    <ShoppingBag size={20} color="#2383e2" fill="#2383e2" />
                                    <span>Marketplace</span>
                                </div>
                                <div className="marketplace-nav">
                                    <div className="nav-item active">Discover</div>
                                    <div className="nav-item">Work <ChevronDown size={14} /></div>
                                    <div className="nav-item">Life <ChevronDown size={14} /></div>
                                    <div className="nav-item">School <ChevronDown size={14} /></div>
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="marketplace-search">
                                    <Search size={14} />
                                    <input type="text" placeholder="Try 'holiday planning'" />
                                </div>
                                <div className="marketplace-actions">
                                    <div className="action-item"><Search size={16} /> Search</div>
                                    <div className="action-item"><User size={16} /> My profile</div>
                                    <div className="action-item"><ShoppingBag size={16} /> Purchased</div>
                                </div>
                            </div>
                        </div>

                        {/* Marketplace Content */}
                        <div className="marketplace-scroll-container">
                            {/* Quick Tags */}
                            <div className="marketplace-tags">
                                <div className="tag-item"><HelpCircle size={14} /> Forms</div>
                                <div className="tag-item"><Layers size={14} color="#2383e2" /> PR & Comms</div>
                                <div className="tag-item"><BookOpen size={14} color="#f06560" /> Lesson Plans</div>
                                <div className="tag-item"><CheckSquare size={14} color="#2383e2" /> PRD: Product Requirements Doc</div>
                                <div className="tag-item"><Home size={14} color="#faa53d" /> Home Renovations</div>
                                <div className="tag-item"><FileText size={14} color="#f06560" /> Thesis</div>
                                <div className="tag-item"><ArrowUpDown size={14} /> Formulas</div>
                                <div className="tag-item"><Layout size={14} color="#2383e2" /> Growth Marketing</div>
                            </div>

                            {/* Main Banner */}
                            <div className="marketplace-main-hero">
                                <div className="hero-text">
                                    <div className="hero-label"><MessageSquare size={14} /> Consulting</div>
                                    <h1>Work smarter with Notion experts</h1>
                                    <p>Get personalized 1:1 help for your Notion setup from certified Consulting Partners covering integrations, automations, and training.</p>
                                </div>
                                <div className="hero-visual">
                                    <div className="experts-illustration">
                                        {/* Mock illustration with avatars */}
                                        <div className="illustration-glow"></div>
                                        <div className="ill-person-1">👩‍💻</div>
                                        <div className="ill-person-2">👨‍🎨</div>
                                        <div className="ill-connection"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Banners */}
                            <div className="marketplace-secondary-banners">
                                <div className="banner-small build-2026">
                                    <div className="banner-content">
                                        <div className="banner-label">🎨 New Year</div>
                                        <h2>Build your 2026</h2>
                                        <p>Choose a pack to build your year around what matters most.</p>
                                    </div>
                                    <div className="banner-visual-mock calendar-mock">
                                        <div className="mock-grid"></div>
                                        <div className="mock-question">?</div>
                                    </div>
                                </div>
                                <div className="banner-small maro-creations">
                                    <div className="banner-content">
                                        <div className="banner-label"><User size={14} /> Top creator</div>
                                        <h2>Maro Creations</h2>
                                        <p>Simplifying life and boosting productivity through thoughtfully designed Notion templates.</p>
                                    </div>
                                    <div className="banner-avatar-large">
                                        <div className="avatar-circle">M</div>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Consultants */}
                            <div className="marketplace-section">
                                <div className="section-header">
                                    <h3><Users size={16} /> Featured consultants</h3>
                                    <div className="browse-all">Browse all</div>
                                </div>
                                <div className="consultants-grid">
                                    {[
                                        { name: 'Simone Smerilli', rating: '5.0 (13)', color: '#4d4d33' },
                                        { name: 'Workcraft | Workspac...', rating: '5.0 (20)', color: '#1a334d' },
                                        { name: 'aNotioneer', rating: '5.0 (6)', color: '#1a331a' },
                                        { name: 'Lou Attal Studio', rating: '5.0 (24)', color: '#331a33' }
                                    ].map((c, i) => (
                                        <div key={i} className="consultant-card" style={{ '--card-bg': c.color } as any}>
                                            <div className="consultant-avatar-box">
                                                <div className="avatar-circle">{c.name[0]}</div>
                                            </div>
                                            <div className="consultant-info-box">
                                                <div className="consultant-name">{c.name}</div>
                                                <div className="consultant-rating"><Check size={10} /> {c.rating}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Featured Templates */}
                            <div className="marketplace-section">
                                <div className="section-header">
                                    <h3><Sparkles size={16} /> Featured templates</h3>
                                </div>
                                <div className="templates-grid">
                                    {[
                                        { title: 'Projects & Tasks', author: 'Notion', price: 'Free', rating: '4.8', color: '#1a1a1a', id: 'projects-tasks', icon: <Target size={24} /> },
                                        { title: 'Meetings', author: 'Notion', price: 'Free', rating: '4.9', color: '#1a1a1a', icon: <Calendar size={24} /> },
                                        { title: 'Wiki', author: 'Notion', price: 'Free', rating: '4.7', color: '#1a1a1a', icon: <Book size={24} /> },
                                        { title: 'Startup in a Box', author: 'Notion', price: 'Free', rating: '4.8', color: '#fdf3e7' },
                                        { title: 'Simple Budget & Finance Tracker', author: 'Notion', price: 'Free', rating: '4.8', color: '#e6f3df' },
                                        { title: 'Year In Review 2026', author: 'Maro', price: 'Free', rating: '5.0', color: '#e7f3f3' }
                                    ].map((t, i) => (
                                        <div key={i} className={`template-card ${t.author === 'Notion' ? 'notion-official-card' : ''}`} onClick={() => {
                                            if (t.id === 'projects-tasks') setActiveView('projects-tasks-template');
                                            if (t.title === 'Meetings' && t.author === 'Notion') setActiveView('meetings-template');
                                            if (t.title === 'Wiki' && t.author === 'Notion') setActiveView('wiki-template');
                                        }}>
                                            {t.author === 'Notion' && (t.title === 'Projects & Tasks' || t.title === 'Meetings' || t.title === 'Wiki') ? (
                                                <>
                                                    <div className="card-header-top">
                                                        <div className="card-icon-box">{t.icon}</div>
                                                        <div className="card-title-box">
                                                            <div className="card-main-title">{t.title}</div>
                                                            <div className="card-author-tag">By {t.author}</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body-preview">
                                                        <div className="mock-skeleton-line long"></div>
                                                        <div className="mock-skeleton-line medium"></div>
                                                        <div className="mock-skeleton-line short"></div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="template-preview" style={{ backgroundColor: t.color }}>
                                                        <FileText size={40} color="rgba(0,0,0,0.1)" />
                                                        {t.price === 'Free' && <div className="template-badge">Free</div>}
                                                    </div>
                                                    <div className="template-details">
                                                        <div className="template-main">
                                                            <div className="author-icon">{t.author[0]}</div>
                                                            <div className="template-title">{t.title}</div>
                                                            <div className="template-price">{t.price}</div>
                                                        </div>
                                                        <div className="template-rating">★ {t.rating}</div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Become a Creator Banner */}
                            <div className="marketplace-footer-hero">
                                <h2>Become a Notion Creator today</h2>
                                <p>Submit your template to the Notion template gallery, get featured, and even get paid — all in just a few clicks</p>
                                <button className="get-started-btn">Get started</button>
                                <div className="footer-illustration">
                                    <div className="hand-n-icon">N</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'inbox' ? (
                    <div className="inbox-view fade-in">
                        <div className="inbox-header">
                            <h2>Inbox</h2>
                            <div className="inbox-filtering">
                                <button className="icon-btn" title="Filter"><Filter size={16} /></button>
                                <button className="icon-btn" title="Mark all as read"><CheckCheck size={16} /></button>
                                <button className="icon-btn" title="Close"><ChevronsRight size={16} /></button>
                            </div>
                        </div>
                        <div className="inbox-empty-state">
                            <div className="empty-state-icon">
                                <Check size={32} />
                            </div>
                            <h3>You&rsquo;re all caught up</h3>
                            <p>You&rsquo;ll be notified here for<br />@mentions, page activity, and more</p>
                        </div>
                    </div>
                ) : activeView === 'home' ? (
                    <div className="home-view fade-in">
                        <header className="home-header">
                            <h1 className="home-greeting">Good morning</h1>
                        </header>

                        <div className="home-section">
                            <div className="home-section-header">
                                <div className="home-section-title"><Clock size={14} /> Recently visited</div>
                            </div>
                            <div className="recent-grid">
                                <div className="recent-card" onClick={() => setActiveView('task-detail')}>
                                    <div className="recent-icon-wrapper"><File size={20} color="#666" /></div>
                                    <div className="recent-info">
                                        <span className="recent-title">New task</span>
                                        <div className="recent-meta">
                                            <span className="meta-icon-circle">Q</span>
                                            <span>7m ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-card" onClick={() => setActiveView('todo-list')}>
                                    <div className="recent-icon-wrapper"><ListTodo size={20} color="#0f7b6c" /></div>
                                    <div className="recent-info">
                                        <span className="recent-title">To Do List</span>
                                        <div className="recent-meta">
                                            <span className="meta-icon-circle">Q</span>
                                            <span>2d ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-card" onClick={() => setActiveView('getting-started')}>
                                    <div className="recent-icon-wrapper">👋</div>
                                    <div className="recent-info">
                                        <span className="recent-title">Getting Started</span>
                                        <div className="recent-meta">
                                            <span className="meta-icon-circle">Q</span>
                                            <span>2d ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-card" onClick={() => setActiveView('task-detail')}>
                                    <div className="recent-icon-wrapper"><File size={20} color="#666" /></div>
                                    <div className="recent-info">
                                        <span className="recent-title">New task</span>
                                        <div className="recent-meta">
                                            <span className="meta-icon-circle">Q</span>
                                            <span>2d ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-card new-page-card" onClick={() => setActiveView('new-page')}>
                                    <div className="recent-icon-wrapper"><Plus size={20} color="#666" /></div>
                                    <div className="recent-info">
                                        <span className="recent-title">New page</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="home-section">
                            <div className="home-section-header">
                                <div className="home-section-title"><BookOpen size={14} /> Learn</div>
                                <div className="section-actions">
                                    <button className="icon-btn"><MoreHorizontal size={14} /></button>
                                </div>
                            </div>
                            <div className="learn-scroll-container">
                                <div className="scroll-track">
                                    {[
                                        { title: "What is a block?", meta: "2m watch", type: "watch", icon: <Layers size={40} />, url: "https://www.youtube.com/watch?v=tefoC3wP8n0&t=1s" },
                                        { title: "Create your first page", meta: "2m watch", type: "watch", icon: <FileText size={40} />, url: "https://www.youtube.com/watch?v=tefoC3wP8n0" },
                                        { title: "Create a subpage", meta: "2m read", type: "read", icon: <FilePlus size={40} /> },
                                        { title: "Customize & style content", meta: "9m watch", type: "watch", icon: <Settings size={40} />, url: "https://www.youtube.com/watch?v=1rFGZMKaUK0" },
                                        { title: "What is a database?", meta: "2m read", type: "read", icon: <Database size={40} /> },
                                        { title: "Create a database", meta: "3m read", type: "read", icon: <Trello size={40} /> },
                                        { title: "Start with a template", meta: "4m watch", type: "watch", icon: <Layout size={40} /> },
                                        { title: "Share your work", meta: "2m read", type: "read", icon: <Globe size={40} /> }
                                    ].map((item, i) => (
                                        <div key={i} className="learn-card-new" onClick={() => {
                                            if (item.url) {
                                                window.open(item.url, '_blank');
                                                setActiveView('getting-started');
                                            } else if (item.title === "Create a subpage") {
                                                setActiveView('create-subpage');
                                            } else if (item.title === "What is a database?") {
                                                setActiveView('database-tutorial');
                                            } else {
                                                setActiveView('getting-started');
                                            }
                                        }}>
                                            <div className="learn-preview-box">
                                                <div className="preview-illustration">{item.icon}</div>
                                                <div className="learned-check-circle"><Check size={12} color="#fff" strokeWidth={3} /></div>
                                            </div>
                                            <div className="learn-footer">
                                                <span className="learn-title">{item.title}</span>
                                                <div className="learn-meta-row">
                                                    {item.type === 'read' ? <BookOpen size={12} /> : <Clapperboard size={12} />}
                                                    <span>{item.meta}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-btn right"><ChevronRight size={18} /></button>
                            </div>
                        </div>

                        <div className="home-section duo-section">
                            <div className="section-column">
                                <div className="home-section-header">
                                    <div className="home-section-title"><Calendar size={14} /> Upcoming events</div>
                                </div>
                                <div className="upcoming-events-container">
                                    <div className="calendar-connection">
                                        <div className="cal-icon-large"><CalendarDays size={20} /></div>
                                        <div className="cal-text">
                                            <h3>Connect AI Meeting Notes with your Calendar events</h3>
                                            <p>Join calls, transcribe audio, and summarize meetings all in Notion.</p>
                                            <span className="connect-link" onClick={() => setIsCalendarModalOpen(true)}>Connect Notion Calendar</span>
                                        </div>
                                    </div>
                                    <div className="events-timeline">
                                        <div className="event-date-row">
                                            <div className="date-label">Today <span className="date-sub">Jan 12</span></div>
                                            <div className="event-item-box">
                                                <div className="event-title">Team standup</div>
                                                <div className="event-meta">9 AM · Office</div>
                                                <button className="join-notes-btn" onClick={() => navigate('/meetings')}>
                                                    <Monitor size={12} /> Join and take notes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="event-date-row">
                                            <div className="date-label">Tue <span className="date-sub">Jan 13</span></div>
                                            <div className="event-item-box">
                                                <div className="event-title">Project check-in</div>
                                                <div className="event-meta">10 AM · Office</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-column">
                                <div className="home-section-header">
                                    <div className="home-section-title"><Layout size={14} /> Home views</div>
                                </div>
                                <div className="home-views-container">
                                    <div className="pin-database-promo">
                                        <div className="promo-icon"><Trello size={24} color="#666" /></div>
                                        <p>Pin a database view to quickly access it from Home.</p>
                                        <span className="select-db-link">Select database</span>
                                    </div>
                                    <div className="activity-list">
                                        <div className="activity-header">
                                            <span>Activity</span>
                                            <span>Status</span>
                                        </div>
                                        {[
                                            { name: "Wake up and freshen up", status: "Done", type: "done", icon: <Smile size={14} color="#faa53d" /> },
                                            { name: "Have breakfast", status: "In progress", type: "progress", icon: <Zap size={14} color="#888" /> },
                                            { name: "Work or study", status: "Not started", type: "todo", icon: <FileText size={14} color="#666" /> },
                                            { name: "Have lunch", status: "Not started", type: "todo", icon: <FileText size={14} color="#666" /> },
                                            { name: "Exercise", status: "Not started", type: "todo", icon: <FileText size={14} color="#666" /> }
                                        ].map((act, i) => (
                                            <div key={i} className="activity-row">
                                                <div className="act-name">
                                                    <span className="activity-icon-box">{act.icon}</span>
                                                    <span>{act.name}</span>
                                                </div>
                                                <div className={`act-status ${act.type}`}>{act.status}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="home-section">
                            <div className="home-section-header">
                                <div className="home-section-title"><Layout size={14} /> Featured templates</div>
                                <div className="section-actions">
                                    <button className="icon-btn"><MoreHorizontal size={14} /></button>
                                </div>
                            </div>
                            <div className="templates-scroll-container">
                                <div className="scroll-track">
                                    {[
                                        { title: "Projects & Tasks", author: "By Notion", icon: <Target size={24} /> },
                                        { title: "Meetings", author: "By Notion", icon: <Calendar size={24} /> },
                                        { title: "Wiki", author: "By Notion", icon: <Book size={24} /> },
                                        { title: "Presentation", author: "By Notion", icon: <Monitor size={24} /> },
                                        { title: "Vision and Strategy", author: "By Notion", icon: <Sparkles size={24} /> },
                                        { title: "To-do list", author: "By Notion", icon: <ListTodo size={24} /> }
                                    ].map((tmp, i) => (
                                        <div key={i} className="template-card-new" onClick={() => setActiveView('marketplace')}>
                                            <div className="template-top">
                                                <div className="template-icon-box">{tmp.icon}</div>
                                                <div className="template-info">
                                                    <span className="template-title">{tmp.title}</span>
                                                    <span className="template-author">{tmp.author}</span>
                                                </div>
                                            </div>
                                            <div className="template-preview-img">
                                                {/* Mock preview content */}
                                                <div className="mock-doc-visual">
                                                    <div className="mock-doc-line long"></div>
                                                    <div className="mock-doc-line mid"></div>
                                                    <div className="mock-doc-line short"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-btn left"><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                                <button className="scroll-btn right"><ChevronRight size={18} /></button>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'task-detail' ? (
                    <div className="task-detail-view fade-in">
                        {taskCover && (
                            <div className="detail-cover-image">
                                <img src={taskCover} alt="Task cover" />
                                <div className="cover-actions">
                                    <button className="cover-action-btn" onClick={() => setIsCoverPickerOpen(true)}>Change cover</button>
                                    <button className="cover-action-btn" onClick={() => { setTaskCover(null); setIsCoverPickerOpen(false); }}>Remove</button>
                                    <button className="cover-action-btn" onClick={() => setIsCoverPickerOpen(true)}>Reposition</button>
                                </div>
                            </div>
                        )}
                        <header className="detail-header">
                            <div className="detail-breadcrumbs">
                                <div className="breadcrumb-item" onClick={() => setActiveView('todo-list')}>
                                    <ListTodo size={14} color="#0f7b6c" />
                                    <span>To Do List</span>
                                </div>
                                <span className="breadcrumb-separator">/</span>
                                <div className="breadcrumb-item" onClick={() => setActiveView('todo-list')}>
                                    <span>Todo List</span>
                                </div>
                                <span className="breadcrumb-separator">/</span>
                                <div className="breadcrumb-item active">
                                    <span>{taskTitle}</span>
                                </div>
                            </div>
                            <div className="detail-actions">
                                <span className="edit-time">Edited 28m ago</span>
                                <button className="share-btn">Share</button>
                                <button className="icon-btn-lite"><Star size={16} /></button>
                                <button className="icon-btn-lite"><MoreHorizontal size={16} /></button>
                            </div>
                        </header>

                        {isCoverPickerOpen && (
                            <div className="cover-picker-overlay" onClick={() => setIsCoverPickerOpen(false)}>
                                <div className="cover-picker-modal" onClick={e => e.stopPropagation()}>
                                    <div className="cover-picker-header">
                                        <div className="cover-tabs">
                                            <button className={`cover-tab ${activeCoverTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveCoverTab('gallery')}>Gallery</button>
                                            <button className={`cover-tab ${activeCoverTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveCoverTab('upload')}>Upload</button>
                                            <button className={`cover-tab ${activeCoverTab === 'link' ? 'active' : ''}`} onClick={() => setActiveCoverTab('link')}>Link</button>
                                            <button className={`cover-tab ${activeCoverTab === 'unsplash' ? 'active' : ''}`} onClick={() => setActiveCoverTab('unsplash')}>🌄 Unsplash</button>
                                        </div>
                                        <button className="cover-remove-btn" onClick={() => { setTaskCover(null); setIsCoverPickerOpen(false); }}>Remove</button>
                                    </div>
                                    <div className="cover-picker-content">
                                        {activeCoverTab === 'gallery' ? (
                                            <div className="cover-gallery">
                                                <div className="cover-section">
                                                    <div className="cover-section-title">Color & Gradient</div>
                                                    <div className="color-grid">
                                                        {[
                                                            'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
                                                            'linear-gradient(135deg, #ffa500 0%, #ffb732 100%)',
                                                            'linear-gradient(135deg, #00bfff 0%, #33ccff 100%)',
                                                            'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                                                            'linear-gradient(135deg, #7fdbff 0%, #a3e7ff 100%)',
                                                            'linear-gradient(135deg, #ff69b4 0%, #ff8ec7 100%)',
                                                            'linear-gradient(135deg, #ff4500 0%, #ff6633 100%)',
                                                            'linear-gradient(135deg, #ffb6c1 0%, #ffc9d1 100%)',
                                                            'linear-gradient(135deg, #ff6b6b 0%, #9b59b6 100%)',
                                                            'linear-gradient(135deg, #9b59b6 0%, #c084fc 100%)',
                                                            'linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)'
                                                        ].map((gradient, i) => (
                                                            <div key={i} className="color-item" style={{ background: gradient }} onClick={() => { setTaskCover(gradient); setIsCoverPickerOpen(false); }}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="cover-section">
                                                    <div className="cover-section-title">James Webb Telescope</div>
                                                    <div className="image-grid">
                                                        {[
                                                            'https://www.notion.so/images/page-cover/webb1.jpg',
                                                            'https://www.notion.so/images/page-cover/webb2.jpg',
                                                            'https://www.notion.so/images/page-cover/webb3.jpg',
                                                            'https://www.notion.so/images/page-cover/webb4.jpg'
                                                        ].map((img, i) => (
                                                            <div key={i} className="image-item" onClick={() => { setTaskCover(img); setIsCoverPickerOpen(false); }}>
                                                                <img src={img} alt={`Webb ${i + 1}`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="cover-section">
                                                    <div className="cover-section-title">NASA Archive</div>
                                                    <div className="image-grid">
                                                        {[
                                                            'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg',
                                                            'https://www.notion.so/images/page-cover/nasa_space_shuttle_columbia_and_sunrise.jpg',
                                                            'https://www.notion.so/images/page-cover/nasa_earth_grid.jpg',
                                                            'https://www.notion.so/images/page-cover/nasa_buzz_aldrin_on_the_moon.jpg'
                                                        ].map((img, i) => (
                                                            <div key={i} className="image-item" onClick={() => { setTaskCover(img); setIsCoverPickerOpen(false); }}>
                                                                <img src={img} alt={`NASA ${i + 1}`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : activeCoverTab === 'upload' ? (
                                            <div className="cover-upload-tab">
                                                <div className="upload-area">
                                                    <div className="upload-title">Upload file</div>
                                                    <div className="upload-note">Images wider than 1500 pixels work best.</div>
                                                    <div className="upgrade-note">
                                                        <span className="info-icon">ⓘ</span>
                                                        <span className="upgrade-link">Upgrade</span> for files larger than 5MB
                                                    </div>
                                                </div>
                                            </div>
                                        ) : activeCoverTab === 'link' ? (
                                            <div className="cover-link-tab">
                                                <input type="text" className="link-input" placeholder="Paste an image link..." />
                                                <button className="submit-link-btn">Submit</button>
                                                <div className="link-note">Works with any image from the web.</div>
                                            </div>
                                        ) : (
                                            <div className="cover-unsplash-tab">
                                                <div className="unsplash-search">
                                                    <Search size={16} color="#666" />
                                                    <input type="text" placeholder="Search for an image..." />
                                                </div>
                                                <div className="image-grid unsplash-grid">
                                                    {[
                                                        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                                                        'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
                                                        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
                                                        'https://images.unsplash.com/photo-1519681393784-d120267933ba',
                                                        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                                                        'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
                                                        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
                                                        'https://images.unsplash.com/photo-1519681393784-d120267933ba'
                                                    ].map((img, i) => (
                                                        <div key={i} className="image-item unsplash-item" onClick={() => { setTaskCover(img); setIsCoverPickerOpen(false); }}>
                                                            <img src={img} alt={`Unsplash ${i + 1}`} />
                                                            <div className="unsplash-credit">by Photographer</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="detail-scroll-area">
                            <div className="detail-body">
                                {taskIcon && (
                                    <div className="detail-icon" onClick={() => setIsIconPickerOpen(true)}>
                                        <span dangerouslySetInnerHTML={{ __html: taskIcon }} />
                                    </div>
                                )}

                                <div className="detail-top-controls">
                                    {!taskIcon && <button className="control-btn-lite" onClick={() => setIsIconPickerOpen(true)}><Smile size={16} /> Add icon</button>}
                                    {!taskCover && <button className="control-btn-lite" onClick={() => setIsCoverPickerOpen(true)}><Clapperboard size={16} /> Add cover</button>}
                                    <button className="control-btn-lite"><AlignLeft size={16} /> Customize layout</button>
                                </div>

                                {isIconPickerOpen && (
                                    <div className="notion-popover icon-picker-popover" onClick={e => e.stopPropagation()}>
                                        <div className="picker-tabs">
                                            <button className={`tab-item ${activeIconTab === 'emoji' ? 'active' : ''}`} onClick={() => setActiveIconTab('emoji')}>Emoji</button>
                                            <button className={`tab-item ${activeIconTab === 'icons' ? 'active' : ''}`} onClick={() => setActiveIconTab('icons')}>Icons</button>
                                            <button className={`tab-item ${activeIconTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveIconTab('upload')}>Upload</button>
                                            <button className="remove-btn" onClick={() => { setTaskIcon(null); setIsIconPickerOpen(false); }}>Remove</button>
                                        </div>
                                        <div className="picker-search">
                                            <Search size={14} color="#666" />
                                            <input type="text" placeholder="Filter..." />
                                            <ArrowUpDown size={14} color="#666" />
                                            <Smile size={14} color="#666" />
                                        </div>
                                        <div className="picker-content">
                                            {activeIconTab === 'emoji' ? (
                                                <div className="emoji-grid">
                                                    {['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '🥱', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💣', '💬', '👁️‍🗨️', '🗨️', '🗯️', '💭', '💤'].map(e => (
                                                        <div key={e} className="emoji-item" onClick={() => { setTaskIcon(e); setIsIconPickerOpen(false); }}>{e}</div>
                                                    ))}
                                                </div>
                                            ) : activeIconTab === 'icons' ? (
                                                <div className="icons-grid">
                                                    {[Search, Home, Users, Sparkles, Inbox, Settings, ShoppingBag, Plus, MoreHorizontal, CheckSquare, MessageSquare, Paperclip, ArrowUp, Calendar, Mail, Monitor, Trash2, Check, UserPlus, LogOut, ArrowUpDown, FileText, AlignLeft, Globe, Clock, BookOpen, Layers, Clapperboard, FilePlus, Target, Book, Layout, Edit2, Filter, CheckCheck, HelpCircle, ListTodo, File, Trello, CalendarDays, Database, X, ArrowDown, Bell, Zap, User, Shield, Smile, Lock, ExternalLink, Copy, Mic, Github, Cloud, Maximize, Hash, Star].map((Icon, i) => (
                                                        <div key={i} className="icon-item" onClick={() => { setTaskIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><circle cx="12" cy="12" r="10"/></svg>`); setIsIconPickerOpen(false); }}>
                                                            <Icon size={20} />
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="upload-content">
                                                    <div className="upload-box">
                                                        <div className="upload-placeholder">
                                                            <UploadCloud size={32} color="#444" />
                                                            <span>Upload an image</span>
                                                            <span className="upload-meta">or Ctrl-V to paste an image or link</span>
                                                        </div>
                                                        <input type="file" style={{ display: 'none' }} id="icon-upload" />
                                                    </div>
                                                    <div className="upload-actions">
                                                        <button className="cancel-pill" onClick={() => setIsIconPickerOpen(false)}>Cancel</button>
                                                        <button className="save-pill">Save</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <input
                                    className="detail-title-input"
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    placeholder="New task"
                                />

                                <div className="detail-properties">
                                    <div className="property-row">
                                        <div className="property-label-box" onClick={() => setIsPropertyMenuOpen(!isPropertyMenuOpen)}>
                                            <Calendar size={14} /> Due date
                                            {isPropertyMenuOpen && (
                                                <div className="notion-popover property-context-menu">
                                                    <div className="popover-item"><Edit2 size={14} /> Rename</div>
                                                    <div className="popover-item"><Settings size={14} /> Edit property</div>
                                                    <div className="popover-divider"></div>
                                                    <div className="popover-item">Property visibility <ChevronRight size={14} /></div>
                                                    <div className="popover-item"><Copy size={14} /> Duplicate property</div>
                                                    <div className="popover-item"><AlignLeft size={14} /> Customize layout</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="property-value-box" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                                            <span className={`property-value ${taskDueDate === 'Empty' ? 'empty' : ''}`}>{taskDueDate}</span>
                                            {isDatePickerOpen && (
                                                <div className="notion-popover date-picker-popover" onClick={e => e.stopPropagation()}>
                                                    <div className="datepicker-header">
                                                        <div className="current-month">Jan 2026</div>
                                                        <div className="month-nav">
                                                            <ChevronRight size={14} style={{ transform: 'rotate(180deg)' }} />
                                                            <ChevronRight size={14} />
                                                        </div>
                                                    </div>
                                                    <div className="datepicker-grid">
                                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="day-name">{d}</div>)}
                                                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                                            <div
                                                                key={day}
                                                                className={`day-cell ${day === 12 ? 'active' : ''}`}
                                                                onClick={() => {
                                                                    setTaskDueDate(`Jan ${day}, 2026`);
                                                                    setIsDatePickerOpen(false);
                                                                }}
                                                            >
                                                                {day}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="datepicker-options">
                                                        <div className="option-row"><span>End date</span> <div className="toggle-lite"></div></div>
                                                        <div className="option-row"><span>Date format</span> <span className="gray-val">Relative <ChevronRight size={12} /></span></div>
                                                        <div className="option-row"><span>Include time</span> <div className="toggle-lite"></div></div>
                                                        <div className="option-row"><span>Remind</span> <span className="gray-val">None <ChevronRight size={12} /></span></div>
                                                    </div>
                                                    <div className="datepicker-footer">
                                                        <button className="clear-btn" onClick={() => { setTaskDueDate('Empty'); setIsDatePickerOpen(false); }}>Clear</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="property-row">
                                        <div className="property-label-box"><Zap size={14} /> Status</div>
                                        <div className="property-value-box" onClick={() => setIsStatusMenuOpen(!isStatusMenuOpen)}>
                                            <div className={`status-pill-${taskStatus === 'Done' ? 'done' : taskStatus === 'In progress' ? 'blue' : 'gray'}`}>
                                                <span className="pill-dot"></span>
                                                {taskStatus}
                                            </div>
                                            {isStatusMenuOpen && (
                                                <div className="notion-popover status-menu-popover">
                                                    <div className="status-group">
                                                        <div className="status-group-label">To-do</div>
                                                        <div className="status-item" onClick={() => { setTaskStatus('Not started'); setIsStatusMenuOpen(false); }}>
                                                            <div className="status-pill-gray"><span className="pill-dot"></span> Not started</div>
                                                        </div>
                                                    </div>
                                                    <div className="status-group">
                                                        <div className="status-group-label">In progress</div>
                                                        <div className="status-item" onClick={() => { setTaskStatus('In progress'); setIsStatusMenuOpen(false); }}>
                                                            <div className="status-pill-blue"><span className="pill-dot"></span> In progress</div>
                                                        </div>
                                                    </div>
                                                    <div className="status-group">
                                                        <div className="status-group-label">Complete</div>
                                                        <div className="status-item" onClick={() => { setTaskStatus('Done'); setIsStatusMenuOpen(false); }}>
                                                            <div className="status-pill-done"><span className="pill-dot"></span> Done</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="property-row">
                                        <div className="property-label-box"><Users size={14} /> Assignee</div>
                                        <div className="property-value-box" onClick={() => setTaskAssignee(taskAssignee ? null : 'qamer hassan')}>
                                            {taskAssignee ? (
                                                <div className="assignee-pill">
                                                    <span className="user-icon-tiny">Q</span>
                                                    <span>{taskAssignee}</span>
                                                </div>
                                            ) : (
                                                <span className="property-value empty">Empty</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="property-row clickable-row">
                                        <div className="property-label-box"><Plus size={14} /> Add a property</div>
                                    </div>

                                    <div className="property-row more-toggle">
                                        <ChevronDown size={14} /> Hide 1 property
                                    </div>
                                </div>

                                <div className="detail-comments-section">
                                    <div className="comments-header">Comments</div>
                                    <div className="comment-list">
                                        <div className="comment-item">
                                            <div className="user-avatar-small">Q</div>
                                            <div className="comment-content">
                                                <div className="comment-user-row">
                                                    <span className="comment-username">qamer hassan</span>
                                                    <span className="comment-timestamp">2m</span>
                                                </div>
                                                <div className="comment-text">do it</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-input-box">
                                        <div className="user-avatar-small">Q</div>
                                        <input type="text" placeholder="Add a comment..." />
                                    </div>
                                </div>

                                <div className="detail-editor-placeholder">
                                    <p>Press Enter to continue with an empty page, or <span className="blue-link">create a template</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'new-page' ? (
                    <div className="new-page-view fade-in">
                        <div className="new-page-header">
                            <input
                                type="text"
                                className="new-page-title-input"
                                value={newPageTitle}
                                onChange={(e) => setNewPageTitle(e.target.value)}
                                placeholder="Untitled"
                            />
                        </div>
                        <div className="new-page-body">
                            <div className="get-started-section">
                                <div className="get-started-label">Get started with</div>
                                <div className="action-buttons-grid">
                                    <button className="action-btn" onClick={() => alert('Ask AI clicked')}>
                                        <div className="action-icon">✨</div>
                                        <span>Ask AI</span>
                                    </button>
                                    <button className="action-btn" onClick={() => alert('AI Voice Notes clicked')}>
                                        <div className="action-icon">🎤</div>
                                        <span>AI Voice Notes</span>
                                    </button>
                                    <button className="action-btn" onClick={() => setActiveView('database')}>
                                        <div className="action-icon">📊</div>
                                        <span>Database</span>
                                    </button>
                                    <button className="action-btn" onClick={() => alert('Form clicked')}>
                                        <div className="action-icon">📝</div>
                                        <span>Form</span>
                                    </button>
                                    <button className="action-btn" onClick={() => alert('Templates clicked')}>
                                        <div className="action-icon">🎨</div>
                                        <span>Templates</span>
                                    </button>
                                    <button className="action-btn" onClick={() => alert('More options clicked')}>
                                        <div className="action-icon">•••</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'database' ? (
                    <div className="database-view fade-in">
                        <div className="database-header">
                            <input
                                type="text"
                                className="database-title-input"
                                value={databaseTitle}
                                onChange={(e) => setDatabaseTitle(e.target.value)}
                            />
                        </div>
                        <div className="database-controls">
                            <div className="view-tabs">
                                <div className="view-tab active" onClick={() => setIsTableMenuOpen(!isTableMenuOpen)}>
                                    <Database size={14} />
                                    <span>Table</span>
                                    {isTableMenuOpen && (
                                        <div className="table-context-menu" onClick={e => e.stopPropagation()}>
                                            <div className="menu-item-db"><Edit2 size={14} /> Rename</div>
                                            <div className="menu-item-db"><Settings size={14} /> Edit view</div>
                                            <div className="menu-item-db"><Trash2 size={14} /> Delete</div>
                                            <div className="menu-divider"></div>
                                            <div className="menu-item-db"><Link size={14} /> Copy link to view</div>
                                            <div className="menu-item-db"><Copy size={14} /> Duplicate</div>
                                        </div>
                                    )}
                                </div>
                                <button className="add-view-btn" onClick={() => setIsAddViewMenuOpen(!isAddViewMenuOpen)}>
                                    <Plus size={14} />
                                    {isAddViewMenuOpen && (
                                        <div className="add-view-menu" onClick={e => e.stopPropagation()}>
                                            <div className="add-view-label">Add a new view</div>
                                            <div className="view-options-grid">
                                                <div className="view-option" onClick={() => alert('Table view')}>
                                                    <Database size={20} />
                                                    <span>Table</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Board view')}>
                                                    <Trello size={20} />
                                                    <span>Board</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Gallery view')}>
                                                    <Layout size={20} />
                                                    <span>Gallery</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('List view')}>
                                                    <List size={20} />
                                                    <span>List</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Chart view')}>
                                                    <BarChart3 size={20} />
                                                    <span>Chart</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Timeline view')}>
                                                    <Clock size={20} />
                                                    <span>Timeline</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Feed view')}>
                                                    <FileText size={20} />
                                                    <span>Feed</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Map view')}>
                                                    <Globe size={20} />
                                                    <span>Map</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Calendar view')}>
                                                    <Calendar size={20} />
                                                    <span>Calendar</span>
                                                </div>
                                                <div className="view-option" onClick={() => alert('Form view')}>
                                                    <FileText size={20} />
                                                    <span>Form</span>
                                                </div>
                                            </div>
                                            <div className="menu-divider"></div>
                                            <div className="menu-item-db"><Database size={14} /> New data source</div>
                                        </div>
                                    )}
                                </button>
                            </div>
                            <div className="database-toolbar">
                                <button className="toolbar-btn"><Filter size={14} /></button>
                                <button className="toolbar-btn"><ArrowUpDown size={14} /></button>
                                <button className="new-btn-blue">New <ChevronDown size={14} /></button>
                            </div>
                        </div>
                        <div className="database-table">
                            <table className="notion-table">
                                <thead>
                                    <tr>
                                        <th className="table-header">
                                            <FileText size={14} />
                                            <span>Name</span>
                                        </th>
                                        <th className="table-header add-property">
                                            <Plus size={14} />
                                            <span>Add property</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="new-row" onClick={() => setActiveView('new-page')}>
                                        <td><Plus size={14} /> New page</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : activeView === 'teamspace' ? (
                    <div className="teamspace-view fade-in">
                        <header className="teamspace-header" style={{ padding: '60px 80px 20px', maxWidth: '900px', margin: '0 auto' }}>
                            <div className="teamspace-icon-large" style={{
                                width: '64px', height: '64px', background: '#333', borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '24px'
                            }}>
                                {teamspaces.find(t => t.id === activeTeamspaceId)?.icon}
                            </div>
                            <h1 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>
                                {teamspaces.find(t => t.id === activeTeamspaceId)?.name}
                            </h1>
                            <div className="teamspace-meta" style={{ display: 'flex', gap: '8px', color: '#888', fontSize: '14px' }}>
                                <span><Globe size={14} /> Open teamspace</span>
                                <span>·</span>
                                <span>1 member</span>
                            </div>
                        </header>
                        <div className="teamspace-content" style={{ padding: '0 80px', maxWidth: '900px', margin: '0 auto' }}>
                            <div className="empty-teamspace-state" style={{
                                marginTop: '40px', padding: '40px', border: '1px dashed #333', borderRadius: '8px',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: '#666'
                            }}>
                                <div style={{ fontSize: '24px' }}>👻</div>
                                <p>This teamspace is empty. Create a page to get started!</p>
                                <button className="create-btn-primary" onClick={() => setActiveView('new-page')}>Create a page</button>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'create-subpage' ? (
                    <div className="tutorial-view fade-in">
                        <header className="top-bar">
                            <div className="top-bar-left">
                                <div className="breadcrumb" onClick={() => setActiveView('home')}>
                                    <span className="page-icon"><BookOpen size={14} /></span>
                                    <span>Learn</span>
                                    <span className="breadcrumb-separator">/</span>
                                    <span>Create a subpage</span>
                                </div>
                            </div>
                            <div className="top-bar-right">
                                <button className="share-btn">Share</button>
                                <Sparkles size={16} />
                                <MessageSquare size={16} />
                                <MoreHorizontal size={16} />
                            </div>
                        </header>
                        <div className="tutorial-content">
                            <div className="tutorial-illustration-container">
                                <img src="/brain/0494a204-8137-4906-a426-c19f59214cc5/sticky_notes_illustration_1768209272182.png" alt="Sticky notes" className="tutorial-hero-img" />
                            </div>

                            <section className="tutorial-section">
                                <h1 className="tutorial-title">Create a subpage</h1>
                                <p className="tutorial-text">Subpages allow you to nest content and stay organized. Any page can contain any number of subpages.</p>

                                <div className="mock-interface-container shadow-vibrant">
                                    <div className="mock-window-header">
                                        <div className="mock-dots"><span></span><span></span><span></span></div>
                                        <div className="mock-nav-controls"><ChevronRight size={12} style={{ transform: 'rotate(180deg)' }} /><ChevronRight size={12} /><Plus size={12} /> <Home size={12} /> / New page</div>
                                    </div>
                                    <div className="mock-page-content">
                                        <h1 className="mock-h1">New page</h1>
                                        <p className="mock-p">Hello, world!</p>
                                        <div className="mock-subpage-link">
                                            <FileText size={16} /> <span>New subpage</span>
                                        </div>
                                    </div>
                                    <div className="mock-ai-button"><Sparkles size={12} /></div>
                                </div>
                            </section>

                            <section className="tutorial-section">
                                <h2 className="tutorial-h2">Navigate with your sidebar and breadcrumbs</h2>
                                <p className="tutorial-text">The sidebar shows your entire workspace hierarchy. Breadcrumbs at the top of any page help you keep track of where you are.</p>

                                <div className="mock-sidebar-breadcrumb-container">
                                    <div className="mock-interface-row">
                                        <div className="mock-sidebar-segment">
                                            <div className="mock-sidebar-item"><Home size={14} /> Home</div>
                                            <div className="mock-sidebar-item"><Inbox size={14} /> Inbox</div>
                                            <div className="mock-sidebar-group">
                                                <div className="mock-sidebar-item active">
                                                    <ChevronDown size={14} /> <FileText size={14} /> New page
                                                </div>
                                                <div className="mock-sidebar-subitem active">
                                                    <FileText size={14} /> New subpage
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mock-main-segment">
                                            <div className="mock-breadcrumbs-bar">
                                                <Home size={12} /> / General / New page / <span className="highlight-breadcrumb">New subpage</span> <ArrowLeft size={12} style={{ transform: 'rotate(180deg)', color: '#eb5757' }} />
                                            </div>
                                            <div className="mock-page-placeholder">
                                                <h1 className="mock-h1">New subpage</h1>
                                                <div className="mock-get-started-buttons">
                                                    <button><Sparkles size={12} /> Ask AI</button>
                                                    <button><CheckSquare size={12} /> To-do list</button>
                                                    <button><Calendar size={12} /> Weekly plan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="tutorial-section">
                                <h2 className="tutorial-h2">Rearrange your page structure</h2>
                                <p className="tutorial-text">Drag and drop pages in your sidebar to reorganize them. Moving a page also moves all its subpages.</p>

                                <div className="mock-rearrange-container">
                                    <div className="mock-interface-row">
                                        <div className="mock-sidebar-segment">
                                            <div className="mock-sidebar-item"><ChevronDown size={14} /> General</div>
                                            <div className="mock-sidebar-subitem active-drag">
                                                <FileText size={14} /> New subpage
                                            </div>
                                            <div className="mock-sidebar-subitem">
                                                <FileText size={14} /> New page
                                            </div>
                                        </div>
                                        <div className="mock-main-content-mini">
                                            <div className="mock-toast-notification">
                                                Moved New subpage to General <span className="undo-link">Undo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="tutorial-footer">
                                <button className="done-btn" onClick={() => setActiveView('home')}>Got it!</button>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'database-tutorial' ? (
                    <div className="tutorial-view fade-in">
                        <header className="top-bar">
                            <div className="top-bar-left">
                                <div className="breadcrumb" onClick={() => setActiveView('home')}>
                                    <span className="page-icon"><BookOpen size={14} /></span>
                                    <span>Learn</span>
                                    <span className="breadcrumb-separator">/</span>
                                    <span>What is a database?</span>
                                </div>
                            </div>
                            <div className="top-bar-right">
                                <button className="share-btn">Share</button>
                                <Sparkles size={16} />
                                <MessageSquare size={16} />
                                <MoreHorizontal size={16} />
                            </div>
                        </header>
                        <div className="tutorial-content">
                            <div className="tutorial-illustration-container">
                                <img src="/brain/0494a204-8137-4906-a426-c19f59214cc5/database_tutorial_hero_books_1768209692981.png" alt="Books" className="tutorial-hero-img" />
                            </div>

                            <section className="tutorial-section">
                                <h1 className="tutorial-title">What is a database?</h1>
                                <p className="tutorial-text">A database is a collection of pages that can be sorted, filtered, and viewed in many different ways.</p>

                                <div className="mock-database-container shadow-vibrant">
                                    <div className="mock-db-header">
                                        <div className="db-title-row">
                                            <Database size={24} style={{ color: '#448361' }} />
                                            <h2 className="db-name">Projects</h2>
                                            <Plus size={16} color="#888" />
                                        </div>
                                        <div className="db-tabs-row">
                                            <div className="db-tab active"><List size={14} /> Table</div>
                                            <Plus size={14} color="#888" />
                                            <div className="db-controls-right">
                                                <Filter size={14} /> <ArrowUpDown size={14} /> <Search size={14} />
                                                <div className="db-new-btn">New <ChevronDown size={14} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mock-db-table">
                                        <div className="db-table-header">
                                            <div className="col-name">Name</div>
                                            <div className="col-date">Start date</div>
                                            <div className="col-date">Due date</div>
                                            <div className="col-effort">Effort level <Info size={12} /></div>
                                        </div>
                                        <div className="db-table-row">
                                            <div className="col-name">📝 Improve website copy</div>
                                            <div className="col-date">May 14, 2025</div>
                                            <div className="col-date">February 21, 2025</div>
                                            <div className="col-effort"><span className="tag-medium">Medium</span></div>
                                        </div>
                                        <div className="db-table-row">
                                            <div className="col-name">🎨 Create new illustrations</div>
                                            <div className="col-date">May 14, 2025</div>
                                            <div className="col-date">February 17, 2025</div>
                                            <div className="col-effort"><span className="tag-small">Small</span></div>
                                        </div>
                                        <div className="db-table-row">
                                            <div className="col-name">🔗 Social media post</div>
                                            <div className="col-date">May 14, 2025</div>
                                            <div className="col-date">February 14, 2025</div>
                                            <div className="col-effort"><span className="tag-small">Small</span></div>
                                        </div>
                                        <div className="db-table-footer">
                                            <Plus size={14} /> New page
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="tutorial-section">
                                <h2 className="tutorial-h2">Databases are pages themselves</h2>
                                <p className="tutorial-text">Every item in a database is its own page where you can add as much content as you'd like.</p>

                                <div className="mock-item-page-container shadow-vibrant">
                                    <div className="mock-db-item-page">
                                        <div className="item-page-header">
                                            <span className="item-icon">📝</span>
                                            <h1 className="item-title">Improve website copy</h1>
                                        </div>
                                        <div className="item-properties">
                                            <div className="prop-row"><Calendar size={14} /> <span className="prop-label">Due date</span> <span className="prop-value">February 21, 2025</span></div>
                                            <div className="prop-row"><Calendar size={14} /> <span className="prop-label">Start date</span> <span className="prop-value">May 14, 2025</span></div>
                                            <div className="prop-row"><Target size={14} /> <span className="prop-label">Effort level</span> <span className="prop-value"><span className="tag-medium">Medium</span></span></div>
                                            <div className="prop-row"><Paperclip size={14} /> <span className="prop-label">Add a property</span></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="tutorial-section">
                                <h2 className="tutorial-h2">Databases have properties</h2>
                                <p className="tutorial-text">Properties add data to your pages—like dates, people, or status. You can use them to sort and filter your database.</p>

                                <div className="mock-menu-container">
                                    <div className="mock-property-menu shadow-vibrant">
                                        <div className="menu-group">
                                            <div className="menu-item highlight-blue"><ArrowUp size={14} /> Due date <span className="menu-badge">Ascending</span> <X size={14} /></div>
                                        </div>
                                        <div className="menu-item"><Plus size={14} /> Add sort</div>
                                        <div className="menu-item"><Trash2 size={14} /> Delete sort</div>
                                    </div>
                                </div>
                            </section>

                            <section className="tutorial-section">
                                <h2 className="tutorial-h2">Databases can display the same content in different ways</h2>
                                <p className="tutorial-text">You can view the same database as a table, a calendar, a board, or even a chart.</p>

                                <div className="mock-view-switcher shadow-vibrant">
                                    <div className="db-tabs-row">
                                        <div className="db-tab active"><List size={14} /> Table</div>
                                        <div className="db-tab"><Calendar size={14} /> Calendar</div>
                                        <div className="db-tab"><BarChart3 size={14} /> Chart</div>
                                        <Plus size={14} color="#888" />
                                    </div>
                                    <div className="mock-placeholder-content">
                                        <div className="db-table-header">
                                            <div className="col-name">Name</div>
                                            <div className="col-date">Start date</div>
                                            <div className="col-effort">Effort level</div>
                                        </div>
                                        <div className="db-table-row">
                                            <div className="col-name">📝 Improve website copy</div>
                                            <div className="col-date">May 14, 2025</div>
                                            <div className="col-effort"><span className="tag-medium">Medium</span></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="tutorial-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                                <section className="tutorial-section" style={{ width: '100%', marginBottom: '40px' }}>
                                    <h2 className="tutorial-h2">Databases can contain multiple sources</h2>
                                    <p className="tutorial-text" style={{ marginBottom: 0 }}>Create views that pull in data from different databases across your entire workspace.</p>
                                </section>
                                <button className="done-btn" onClick={() => setActiveView('home')}>Finish Tutorial</button>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'projects-tasks-template' ? (
                    <div className="template-detail-view fade-in">
                        <header className="marketplace-detail-header">
                            <div className="header-left">
                                <div className="breadcrumb-marketplace" onClick={() => setActiveView('marketplace')}>
                                    <ShoppingBag size={14} /> <span>Marketplace</span>
                                    <span className="breadcrumb-sep">/</span>
                                    <FileText size={14} /> <span>Projects & Tasks</span>
                                </div>
                            </div>
                            <div className="header-right">
                                <button className="add-btn-top">Add to workspace</button>
                                <button className="preview-btn-top">Preview</button>
                            </div>
                        </header>

                        <div className="template-detail-content">
                            <div className="template-hero-section">
                                <div className="hero-info">
                                    <div className="creator-row">
                                        <div className="notion-logo-small">N</div>
                                        <span>Notion</span>
                                    </div>
                                    <h1 className="template-title-large">Projects & Tasks</h1>
                                    <p className="template-desc-large">Track projects of any shape or size, and for any type of team.</p>
                                    <div className="hero-actions">
                                        <button className="hero-add-btn">+ Add</button>
                                        <button className="hero-preview-btn">Preview</button>
                                        <button className="hero-share-btn"><Share size={16} /></button>
                                    </div>

                                    <div className="template-stats-row">
                                        <div className="stat-item"><Star size={14} fill="currentColor" /> 4.8</div>
                                        <div className="stat-item">410K+ Downloads</div>
                                        <div className="stat-item">Free</div>
                                    </div>

                                    <div className="template-features-list">
                                        <div className="feature-item"><BarChart3 size={14} /> Charts</div>
                                        <div className="feature-item"><Layout size={14} /> Layouts</div>
                                        <div className="feature-item"><ArrowUpDown size={14} /> Formulas</div>
                                    </div>
                                </div>

                                <div className="hero-visual-preview">
                                    <div className="mock-notion-window shadow-vibrant">
                                        <div className="mock-window-top">
                                            <div className="window-dots"><span></span><span></span><span></span></div>
                                        </div>
                                        <div className="mock-window-body">
                                            <div className="tasks-db-preview">
                                                <div className="db-title-heading"><Target size={20} /> Projects & Tasks</div>
                                                <div className="db-subheading">Projects: This is your overview of all the projects in the pipeline.</div>
                                                <div className="db-subheading">Tasks: This is your detailed breakdown of every task under your projects.</div>

                                                <div className="db-view-tabs">
                                                    <div className="v-tab active">My projects</div>
                                                    <div className="v-tab">All</div>
                                                    <div className="v-tab">Weekly Tasks Throughput</div>
                                                </div>

                                                <div className="mock-tasks-table">
                                                    <div className="tasks-group">
                                                        <div className="group-header"><ChevronDown size={14} /> Marketing campaign</div>
                                                        <div className="task-row-mock header">
                                                            <div className="t-col-name">Task name</div>
                                                            <div className="t-col-status">Status</div>
                                                            <div className="t-col-assignee">Assignee</div>
                                                            <div className="t-col-date">Date</div>
                                                        </div>
                                                        <div className="task-row-mock">
                                                            <div className="t-col-name">Develop advertising plan</div>
                                                            <div className="t-col-status"><span className="st-badge st-done">Done</span></div>
                                                            <div className="t-col-assignee">S. Ann</div>
                                                            <div className="t-col-date">April 13, 2024</div>
                                                        </div>
                                                        <div className="task-row-mock">
                                                            <div className="t-col-name">Develop new creative assets</div>
                                                            <div className="t-col-status"><span className="st-badge st-done">Done</span></div>
                                                            <div className="t-col-assignee">S. Ann</div>
                                                            <div className="t-col-date">April 13, 2024</div>
                                                        </div>
                                                        <div className="task-row-mock">
                                                            <div className="t-col-name">Define target audience</div>
                                                            <div className="t-col-status"><span className="st-badge st-in-progress">In Progress</span></div>
                                                            <div className="t-col-assignee">D. Lang</div>
                                                            <div className="t-col-date">May 8, 2024</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="template-details-sections">
                                <div className="details-left">
                                    <section className="detail-section">
                                        <h3>About</h3>
                                        <p>Track projects of any shape or size, and for any type of team. View projects as a timeline, kanban board, or calendar — whatever works best for you. Then write planning docs, embed designs, and organize meeting notes in the same place.</p>
                                    </section>

                                    <section className="detail-section">
                                        <h3>Ratings & reviews</h3>
                                        <div className="ratings-overview">
                                            <div className="rating-score">4.8<span>/5</span></div>
                                            <div className="rating-bars">
                                                {[85, 10, 3, 1, 1].map((w, i) => (
                                                    <div key={i} className="rating-bar-row">
                                                        <div className="stars">{'★'.repeat(5 - i)}</div>
                                                        <div className="bar-bg"><div className="bar-fill" style={{ width: `${w}%` }}></div></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="reviews-list">
                                            <div className="review-item">
                                                <div className="review-meta">very professinal ★★★★★</div>
                                                <div className="review-text">very helpful and organizable .................................................</div>
                                                <div className="review-author">M A · Jan 8, 2026</div>
                                            </div>
                                            <div className="review-item">
                                                <div className="review-meta">Marketing manager ★★★★★</div>
                                                <div className="review-text">Managing marketing projects for a ride-hailing company include of 5 people in marketing team</div>
                                                <div className="review-author">Shima Shahandeh · Jan 7, 2026</div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="details-sidebar">
                                    <div className="sidebar-group">
                                        <div className="group-label">Categories</div>
                                        <div className="category-tags">
                                            <span>Agile</span> <span>Kanban</span> <span>Scrum Board</span> <span>Project Management</span> <span>Engineering</span> <span>Product</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="group-label">Creator</div>
                                        <div className="creator-card-mini">
                                            <div className="notion-logo-small">N</div>
                                            <div className="creator-mini-info">
                                                <div className="c-name">Notion</div>
                                                <div className="c-links">@ Notion</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="more-from-notion-section">
                                <div className="section-container">
                                    <h3 className="more-title">More from Notion</h3>
                                    <div className="templates-grid-horizontal">
                                        {[
                                            { title: 'Projects & Tasks', author: 'Notion', icon: <Target size={24} />, id: 'projects-tasks' },
                                            { title: 'Meetings', author: 'Notion', icon: <Calendar size={24} /> },
                                            { title: 'Wiki', author: 'Notion', icon: <Book size={24} /> }
                                        ].map((t, i) => (
                                            <div key={i} className="notion-official-card horizontal" onClick={() => {
                                                if (t.id === 'projects-tasks') {
                                                    setActiveView('projects-tasks-template');
                                                    window.scrollTo(0, 0);
                                                } else if (t.title === 'Meetings') {
                                                    setActiveView('meetings-template');
                                                    window.scrollTo(0, 0);
                                                } else if (t.title === 'Wiki') {
                                                    setActiveView('wiki-template');
                                                    window.scrollTo(0, 0);
                                                }
                                            }}>
                                                <div className="card-header-top">
                                                    <div className="card-icon-box">{t.icon}</div>
                                                    <div className="card-title-box">
                                                        <div className="card-main-title">{t.title}</div>
                                                        <div className="card-author-tag">By {t.author}</div>
                                                    </div>
                                                </div>
                                                <div className="card-body-preview">
                                                    <div className="mock-skeleton-line long"></div>
                                                    <div className="mock-skeleton-line medium"></div>
                                                    <div className="mock-skeleton-line short"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'meetings-template' ? (
                    <div className="template-detail-view fade-in">
                        <header className="marketplace-detail-header">
                            <div className="header-left">
                                <div className="breadcrumb-marketplace" onClick={() => setActiveView('marketplace')}>
                                    <ShoppingBag size={14} /> <span>Marketplace</span>
                                    <span className="breadcrumb-sep">/</span>
                                    <Calendar size={14} /> <span>Meetings</span>
                                </div>
                            </div>
                            <div className="header-right">
                                <button className="add-btn-top">Add to workspace</button>
                                <button className="preview-btn-top">Preview</button>
                            </div>
                        </header>

                        <div className="template-detail-content">
                            <div className="template-hero-section">
                                <div className="hero-info">
                                    <div className="creator-row">
                                        <div className="notion-logo-small">N</div>
                                        <span>Notion</span>
                                    </div>
                                    <h1 className="template-title-large">Meetings</h1>
                                    <p className="template-desc-large">Streamline your meeting workflow with centralized agendas, notes, and action items.</p>
                                    <div className="hero-actions">
                                        <button className="hero-add-btn">+ Add</button>
                                        <button className="hero-preview-btn">Preview</button>
                                        <button className="hero-share-btn"><Share size={16} /></button>
                                    </div>

                                    <div className="template-stats-row">
                                        <div className="stat-item"><Star size={14} fill="currentColor" /> 4.9</div>
                                        <div className="stat-item">250K+ Downloads</div>
                                        <div className="stat-item">Free</div>
                                    </div>

                                    <div className="template-features-list">
                                        <div className="feature-item"><Calendar size={14} /> Calendar</div>
                                        <div className="feature-item"><CheckSquare size={14} /> Tasks</div>
                                        <div className="feature-item"><Sparkles size={14} /> AI Notes</div>
                                    </div>
                                </div>

                                <div className="hero-visual-preview">
                                    <div className="mock-notion-window shadow-vibrant">
                                        <div className="mock-window-top">
                                            <div className="window-dots"><span></span><span></span><span></span></div>
                                        </div>
                                        <div className="mock-window-body">
                                            <div className="tasks-db-preview">
                                                <div className="db-title-heading"><Calendar size={20} /> Team Meetings</div>
                                                <div className="db-subheading">Centralized notes for all your recurring syncs and one-offs.</div>

                                                <div className="mock-meetings-list">
                                                    <div className="meeting-date-sep">Today</div>
                                                    <div className="mock-task-row pulse-hover">
                                                        <div className="t-col-name">Weekly Sync · Marketing</div>
                                                        <div className="t-col-status"><span className="st-badge st-done">Done</span></div>
                                                        <div className="t-col-assignee">S. Ann</div>
                                                    </div>
                                                    <div className="mock-task-row pulse-hover">
                                                        <div className="t-col-name">Product Q1 Planning</div>
                                                        <div className="t-col-status"><span className="st-badge st-in-progress">Scheduled</span></div>
                                                        <div className="t-col-assignee">D. Lang</div>
                                                    </div>
                                                    <div className="meeting-date-sep">Tomorrow</div>
                                                    <div className="mock-task-row pulse-hover">
                                                        <div className="t-col-name">Design Critique</div>
                                                        <div className="t-col-status"><span className="st-badge st-todo">Upcoming</span></div>
                                                        <div className="t-col-assignee">J. Doe</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="template-details-sections">
                                <div className="details-left">
                                    <section className="detail-section">
                                        <h3>About</h3>
                                        <p>Stop losing track of meeting outcomes. This template provides a structured way to capture everything from weekly syncs to board meetings. Features include automated task creation from notes, searchable archives, and integrated calendar views.</p>
                                    </section>
                                </div>

                                <div className="details-sidebar">
                                    <div className="sidebar-group">
                                        <div className="group-label">Categories</div>
                                        <div className="category-tags">
                                            <span>Productivity</span> <span>Meetings</span> <span>Coordination</span> <span>Team Docs</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="group-label">Creator</div>
                                        <div className="creator-card-mini">
                                            <div className="notion-logo-small">N</div>
                                            <div className="creator-mini-info">
                                                <div className="c-name">Notion</div>
                                                <div className="c-links">@ Notion</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="more-from-notion-section">
                                <div className="section-container">
                                    <h3 className="more-title">More from Notion</h3>
                                    <div className="templates-grid-horizontal">
                                        {[
                                            { title: 'Projects & Tasks', author: 'Notion', icon: <Target size={24} />, id: 'projects-tasks' },
                                            { title: 'Meetings', author: 'Notion', icon: <Calendar size={24} /> },
                                            { title: 'Wiki', author: 'Notion', icon: <Book size={24} /> }
                                        ].map((t, i) => (
                                            <div key={i} className="notion-official-card horizontal" onClick={() => {
                                                if (t.id === 'projects-tasks') setActiveView('projects-tasks-template');
                                                else if (t.title === 'Meetings') setActiveView('meetings-template');
                                                else if (t.title === 'Wiki') setActiveView('wiki-template');
                                                window.scrollTo(0, 0);
                                            }}>
                                                <div className="card-header-top">
                                                    <div className="card-icon-box">{t.icon}</div>
                                                    <div className="card-title-box">
                                                        <div className="card-main-title">{t.title}</div>
                                                        <div className="card-author-tag">By {t.author}</div>
                                                    </div>
                                                </div>
                                                <div className="card-body-preview">
                                                    <div className="mock-skeleton-line long"></div>
                                                    <div className="mock-skeleton-line medium"></div>
                                                    <div className="mock-skeleton-line short"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'wiki-template' ? (
                    <div className="template-detail-view fade-in">
                        <header className="marketplace-detail-header">
                            <div className="header-left">
                                <div className="breadcrumb-marketplace" onClick={() => setActiveView('marketplace')}>
                                    <ShoppingBag size={14} /> <span>Marketplace</span>
                                    <span className="breadcrumb-sep">/</span>
                                    <Book size={14} /> <span>Wiki</span>
                                </div>
                            </div>
                            <div className="header-right">
                                <button className="add-btn-top">Add to workspace</button>
                                <button className="preview-btn-top">Preview</button>
                            </div>
                        </header>

                        <div className="template-detail-content">
                            <div className="template-hero-section">
                                <div className="hero-info">
                                    <div className="creator-row">
                                        <div className="notion-logo-small">N</div>
                                        <span>Notion</span>
                                    </div>
                                    <h1 className="template-title-large">Wiki</h1>
                                    <p className="template-desc-large">The single source of truth for your team's knowledge, policies, and culture.</p>
                                    <div className="hero-actions">
                                        <button className="hero-add-btn">+ Add</button>
                                        <button className="hero-preview-btn">Preview</button>
                                        <button className="hero-share-btn"><Share size={16} /></button>
                                    </div>

                                    <div className="template-stats-row">
                                        <div className="stat-item"><Star size={14} fill="currentColor" /> 4.7</div>
                                        <div className="stat-item">180K+ Downloads</div>
                                        <div className="stat-item">Free</div>
                                    </div>

                                    <div className="template-features-list">
                                        <div className="feature-item"><Search size={14} /> Search</div>
                                        <div className="feature-item"><Layers size={14} /> Categories</div>
                                        <div className="feature-item"><Globe size={14} /> Internal</div>
                                    </div>
                                </div>

                                <div className="hero-visual-preview">
                                    <div className="mock-notion-window shadow-vibrant">
                                        <div className="mock-window-top">
                                            <div className="window-dots"><span></span><span></span><span></span></div>
                                        </div>
                                        <div className="mock-window-body">
                                            <div className="tasks-db-preview">
                                                <div className="db-title-heading"><Book size={20} /> Team Wiki</div>
                                                <div className="db-subheading">Important info, all in one place.</div>

                                                <div className="mock-wiki-grid">
                                                    <div className="wiki-card-mock">
                                                        <Smile size={24} color="#888" />
                                                        <div className="wiki-card-title">Employee Handbook</div>
                                                    </div>
                                                    <div className="wiki-card-mock">
                                                        <Users size={24} color="#888" />
                                                        <div className="wiki-card-title">Brand Guidelines</div>
                                                    </div>
                                                    <div className="wiki-card-mock">
                                                        <Zap size={24} color="#888" />
                                                        <div className="wiki-card-title">Onboarding</div>
                                                    </div>
                                                    <div className="wiki-card-mock">
                                                        <LogOut size={24} color="#888" />
                                                        <div className="wiki-card-title">Offboarding</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="template-details-sections">
                                <div className="details-left">
                                    <section className="detail-section">
                                        <h3>About</h3>
                                        <p>Build an internal encyclopedia for your company. This wiki template makes it easy to categorize and discover company-wide knowledge. From mission statements to benefit policies, give everyone a central place to find what they need.</p>
                                    </section>
                                </div>

                                <div className="details-sidebar">
                                    <div className="sidebar-group">
                                        <div className="group-label">Categories</div>
                                        <div className="category-tags">
                                            <span>Knowledge Management</span> <span>Wiki</span> <span>Culture</span> <span>Documentation</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="group-label">Creator</div>
                                        <div className="creator-card-mini">
                                            <div className="notion-logo-small">N</div>
                                            <div className="creator-mini-info">
                                                <div className="c-name">Notion</div>
                                                <div className="c-links">@ Notion</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="more-from-notion-section">
                                <div className="section-container">
                                    <h3 className="more-title">More from Notion</h3>
                                    <div className="templates-grid-horizontal">
                                        {[
                                            { title: 'Projects & Tasks', author: 'Notion', icon: <Target size={24} />, id: 'projects-tasks' },
                                            { title: 'Meetings', author: 'Notion', icon: <Calendar size={24} /> },
                                            { title: 'Wiki', author: 'Notion', icon: <Book size={24} /> }
                                        ].map((t, i) => (
                                            <div key={i} className="notion-official-card horizontal" onClick={() => {
                                                if (t.id === 'projects-tasks') setActiveView('projects-tasks-template');
                                                else if (t.title === 'Meetings') setActiveView('meetings-template');
                                                else if (t.title === 'Wiki') setActiveView('wiki-template');
                                                window.scrollTo(0, 0);
                                            }}>
                                                <div className="card-header-top">
                                                    <div className="card-icon-box">{t.icon}</div>
                                                    <div className="card-title-box">
                                                        <div className="card-main-title">{t.title}</div>
                                                        <div className="card-author-tag">By {t.author}</div>
                                                    </div>
                                                </div>
                                                <div className="card-body-preview">
                                                    <div className="mock-skeleton-line long"></div>
                                                    <div className="mock-skeleton-line medium"></div>
                                                    <div className="mock-skeleton-line short"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'generated-page' ? (
                    <div className="generated-page-view fade-in">
                        <header className="top-bar">
                            <div className="top-bar-left">
                                <div className="breadcrumb" onClick={() => setActiveView('home')}>
                                    <span className="page-icon"><Sparkles size={14} color="#2eaadc" /></span>
                                    <span>AI Generated</span>
                                    <span className="breadcrumb-separator">/</span>
                                    <span>{aiPrompt || 'Untitled'}</span>
                                </div>
                            </div>
                            <div className="top-bar-right">
                                <button className="share-btn">Share</button>
                                <Sparkles size={16} />
                                <MessageSquare size={16} />
                                <MoreHorizontal size={16} />
                            </div>
                        </header>
                        <div className="generated-content">
                            <div className="ai-gen-banner">
                                <div className="ai-stars-row"><Sparkles size={20} /> <Sparkles size={14} /> <Sparkles size={18} /></div>
                                <h2>Build completed!</h2>
                                <p>Notion AI has generated this workspace structure based on your request: <strong>"{aiPrompt}"</strong></p>
                                <div className="ai-gen-actions">
                                    <button className="keep-btn" onClick={() => setActiveView('home')}>Keep it</button>
                                    <button className="try-again-btn" onClick={() => setIsBuildWithAIOpen(true)}>Try again</button>
                                </div>
                            </div>

                            <div className="mock-generated-page shadow-vibrant">
                                <div className="mock-page-header-large">
                                    <div className="mock-icon-large">✨</div>
                                    <h1 className="mock-title-large">{aiPrompt || 'Generated Workspace'}</h1>
                                </div>

                                <div className="mock-db-section">
                                    <div className="mock-db-tabs">
                                        <div className="v-tab active">Table view</div>
                                        <div className="v-tab">Gallery</div>
                                        <div className="v-tab">Calendar</div>
                                    </div>
                                    <div className="mock-gen-table">
                                        <div className="gen-row header">
                                            <div className="gen-col">Name</div>
                                            <div className="gen-col">Status</div>
                                            <div className="gen-col">Priority</div>
                                            <div className="gen-col">Assignee</div>
                                        </div>
                                        <div className="gen-row">
                                            <div className="gen-col">Example Item 1</div>
                                            <div className="gen-col"><span className="st-badge st-todo">New</span></div>
                                            <div className="gen-col">High</div>
                                            <div className="gen-col">AI Bot</div>
                                        </div>
                                        <div className="gen-row">
                                            <div className="gen-col">Example Item 2</div>
                                            <div className="gen-col"><span className="st-badge st-in-progress">Building</span></div>
                                            <div className="gen-col">Medium</div>
                                            <div className="gen-col">AI Bot</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === 'todo-list' ? (
                    <div className="todo-view fade-in">
                        <div className="todo-header">
                            <div className="todo-header-icon">
                                <ListTodo size={78} />
                            </div>
                            <h1 className="page-title">To Do List</h1>
                        </div>

                        <div className="todo-controls">
                            <div className="todo-tabs">
                                <button
                                    className={`tab-btn ${todoView === 'todo' ? 'active' : ''}`}
                                    onClick={() => setTodoView('todo')}
                                >
                                    <ListTodo size={14} /> To Do
                                </button>
                                <button
                                    className={`tab-btn ${todoView === 'done' ? 'active' : ''}`}
                                    onClick={() => setTodoView('done')}
                                >
                                    <CheckSquare size={14} /> Done
                                </button>
                            </div>
                            <div className="todo-toolbar">
                                <button className="toolbar-btn"><Filter size={14} /></button>
                                <button className="toolbar-btn"><ArrowUpDown size={14} /></button>
                                <button className="toolbar-btn"><Search size={14} /></button>
                                <button className="toolbar-btn"><MoreHorizontal size={14} /></button>
                                <button className="new-btn-blue">New <ChevronDown size={14} /></button>
                            </div>
                        </div>

                        <div className="todo-list">
                            {todoTasks
                                .filter(task => todoView === 'todo' ? !task.completed : task.completed)
                                .map(task => (
                                    <div key={task.id} className="task-item" onClick={() => !task.placeholder && setActiveView('task-detail')}>
                                        <div className="task-left">
                                            <div
                                                className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                                                onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }}
                                            >
                                                {task.completed && <Check size={10} strokeWidth={4} />}
                                            </div>
                                            <span className={`task-text ${task.completed ? 'completed' : ''} ${task.placeholder ? 'placeholder' : ''}`}>
                                                {task.text}
                                            </span>
                                        </div>
                                        <div className="task-right">
                                            {task.date && (
                                                <span className={`task-date ${task.date === 'Today' || task.date === 'Tomorrow' ? 'highlight' : ''}`}>
                                                    {task.date}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            <div className="task-item new-task-row" onClick={() => setActiveView('task-detail')}>
                                <Plus size={14} /> New task
                            </div>
                        </div>
                    </div>
                ) : activeView === 'page' ? (
                    (() => {
                        const page = pages.find(p => p.id === activePageId);
                        if (!page) return <div className="page-loading">Page not found</div>;
                        return (
                            <div className="page-editor-view fade-in">
                                <header className="top-bar">
                                    <div className="top-bar-left">
                                        <div className="breadcrumb">
                                            <span className="link page-icon" onClick={() => setActiveView('teamspace')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {teamspaces.find(t => t.id === activeTeamspaceId)?.icon || <Home size={14} />}
                                            </span>
                                            <span className="breadcrumb-separator">/</span>
                                            <span className="link" onClick={() => setActiveView('teamspace')}>
                                                {teamspaces.find(t => t.id === page.teamspaceId || t.id === activeTeamspaceId)?.name || 'Teamspace'}
                                            </span>
                                            {breadcrumbs.map((crumb) => (
                                                <React.Fragment key={crumb.id}>
                                                    <span className="breadcrumb-separator">/</span>
                                                    <span className="link" onClick={() => setActivePageId(crumb.id)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <span style={{ fontSize: '14px' }}>{crumb.icon || '📄'}</span> {crumb.title || 'Untitled'}
                                                    </span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="top-bar-right">
                                        <button className="share-btn" onClick={async () => {
                                            try {
                                                // Only saving title here, blocks are auto-saved
                                                await pageService.update(page.id, { title: page.title });
                                                alert('Title saved!');
                                            } catch (e) {
                                                console.error(e);
                                                alert('Failed to save title');
                                            }
                                        }}>Save Title</button>
                                        <MoreHorizontal size={16} />
                                    </div>
                                </header>
                                <div className="page-body">
                                    <div className="page-cover-icon-large">{page.icon || '📄'}</div>
                                    <input
                                        className="page-title-input"
                                        style={{ fontSize: '32px', fontWeight: 700, border: 'none', background: 'transparent', color: 'inherit', width: '100%', marginBottom: '20px', outline: 'none' }}
                                        value={page.title}
                                        onChange={(e) => {
                                            const newVal = e.target.value;
                                            setPages(prev => prev.map(p => p.id === page.id ? { ...p, title: newVal } : p));
                                        }}
                                        placeholder="Untitled"
                                    />
                                    <BlockEditor
                                        pageId={page.id}
                                        onNavigate={(id) => {
                                            setActivePageId(id);
                                            setActiveView('page');
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })()
                ) : activeView === 'teamspace' ? (
                    (() => {
                        const currentTeamspace = teamspaces.find(t => t.id === activeTeamspaceId) || teamspaces[0];
                        return (
                            <div className="teamspace-view fade-in">
                                <header className="top-bar">
                                    <div className="top-bar-left">
                                        <div className="breadcrumb">
                                            <span className="page-icon">{currentTeamspace?.icon || 'T'}</span>
                                            <span>{currentTeamspace?.name || 'Teamspace'}</span>
                                        </div>
                                    </div>
                                    <div className="top-bar-right">
                                        <span className="share-btn">Share</span>
                                        <Sparkles size={16} />
                                        <MoreHorizontal size={16} />
                                    </div>
                                </header>
                                <div className="page-body">
                                    <div className="page-cover-icon-large">{currentTeamspace?.icon || 'T'}</div>
                                    <h1 className="page-title">{currentTeamspace?.name || 'Teamspace'}</h1>
                                    {pages.length === 0 ? (
                                        <div className="teamspace-welcome-box">
                                            <h3>Welcome to your new teamspace!</h3>
                                            <p>Teamspaces are where your team organizes pages, permissions, and members.</p>
                                            <div className="ts-actions-row">
                                                <button className="ts-action-btn" onClick={() => setIsCreatePageModalOpen(true)}><Plus size={14} /> New page</button>
                                                <button className="ts-action-btn"><Users size={14} /> Add members</button>
                                                <button className="ts-action-btn" onClick={() => { setIsSettingsModalOpen(true); setActiveSettingsTab('teamspaces'); }}><Settings size={14} /> Settings</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="teamspace-page-list">
                                            <div className="ts-actions-row" style={{ marginBottom: '20px' }}>
                                                <button className="ts-action-btn" onClick={() => setIsCreatePageModalOpen(true)}><Plus size={14} /> New page</button>
                                            </div>
                                            <div className="ts-pages-grid">
                                                {pages.map(page => (
                                                    <div key={page.id} className="ts-page-card" onClick={() => { setActivePageId(page.id); setActiveView('page'); }}>
                                                        <div className="page-icon-large">{page.icon || '📄'}</div>
                                                        <div className="page-title">{page.title}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })()
                ) : (
                    <>
                        <header className="top-bar">
                            <div className="top-bar-left">
                                <div className="breadcrumb">
                                    <span className="page-icon">👋</span>
                                    <span>Getting Started</span>
                                    <span className="private-badge">Private</span>
                                </div>
                            </div>
                            <div className="top-bar-right">
                                <span>Share</span>
                                <Sparkles size={16} />
                                <MessageSquare size={16} />
                                <MoreHorizontal size={16} />
                            </div>
                        </header>

                        <div className="page-body">
                            <div className="page-cover-icon">👋</div>
                            <h1 className="page-title">Getting Started</h1>

                            <div className="video-tutorial-section" style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-main)' }}>
                                    <Clapperboard size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                                    Watch: What is a block?
                                </h3>
                                <div className="video-embed-wrapper" style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-main)',
                                    background: '#000'
                                }}>
                                    <iframe
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        src="https://www.youtube.com/embed/tefoC3wP8n0"
                                        title="What is a block?"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p style={{ marginTop: '12px', fontSize: '14px', color: '#888' }}>
                                    Learn the basics of Notion blocks in 2 minutes. <a href="https://www.youtube.com/watch?v=tefoC3wP8n0&t=1s" target="_blank" rel="noopener noreferrer" style={{ color: '#2383e2', textDecoration: 'underline' }}>Watch on YouTube</a>
                                </p>
                            </div>

                            <div className="checklist-container">
                                <div className={`checklist-item ${checklistState.account ? 'checked' : ''}`} onClick={() => toggleCheck('account')}>
                                    <div className={`checkbox ${checklistState.account ? 'checked' : ''}`}>
                                        {checklistState.account && <CheckSquare size={14} />}
                                    </div>
                                    <span className={checklistState.account ? 'strikethrough' : ''}>Create an account with Notion</span>
                                </div>
                                <div className={`checklist-item ${checklistState.create ? 'checked' : ''}`} onClick={() => toggleCheck('create')}>
                                    <div className={`checkbox ${checklistState.create ? 'checked' : ''}`}>
                                        {checklistState.create && <CheckSquare size={14} />}
                                    </div>
                                    <span className={checklistState.create ? 'strikethrough' : ''}>Click anywhere below and type <span className="code">/</span> to see what you can create &ndash; headers, tables, to-do&rsquo;s, etc.</span>
                                </div>
                                <div className={`checklist-subitem ${checklistState.page ? 'checked' : ''}`} onClick={() => toggleCheck('page')}>
                                    <div className={`checkbox ${checklistState.page ? 'checked' : ''}`}>
                                        {checklistState.page && <CheckSquare size={14} />}
                                    </div>
                                    <span className={checklistState.page ? 'strikethrough' : ''}>Type <span className="code">/page</span> to add a <strong>new page</strong> and nest anything, anywhere</span>
                                </div>
                                <div className={`checklist-item ${checklistState.sidebar ? 'checked' : ''}`} onClick={() => toggleCheck('sidebar')}>
                                    <div className={`checkbox ${checklistState.sidebar ? 'checked' : ''}`}>
                                        {checklistState.sidebar && <CheckSquare size={14} />}
                                    </div>
                                    <span className={checklistState.sidebar ? 'strikethrough' : ''}><strong>Find, organize, and add new pages</strong> using the sidebar to the left 👉</span>
                                </div>
                                <div className={`checklist-item ${checklistState.todo ? 'checked' : ''}`} onClick={() => toggleCheck('todo')}>
                                    <div className={`checkbox ${checklistState.todo ? 'checked' : ''}`}>
                                        {checklistState.todo && <CheckSquare size={14} />}
                                    </div>
                                    <span className={checklistState.todo ? 'strikethrough' : ''}>Check out the <strong>Todo List on the left</strong> 👈 we added for you with some more tips and tricks to best use Notion</span>
                                </div>
                                <div className="toggle-block" onClick={() => setIsToggleOpen(!isToggleOpen)}>
                                    <div className={`toggle-chevron ${isToggleOpen ? 'open' : ''}`}>
                                        <ChevronRight size={16} />
                                    </div>
                                    <span>This is a toggle block. Click the little triangle to see a few more useful tips!</span>
                                </div>
                                {isToggleOpen && (
                                    <div className="toggle-content">
                                        <div className="toggle-list-item">
                                            <span className="bullet">&bull;</span>
                                            <span>Click on the <span className="inline-icon"><HelpCircle size={12} /></span> in the bottom left of your screen to find <span className="link">guides</span>, <span className="link">tutorials</span>, and more to get your digital space configured exactly to your needs</span>
                                        </div>
                                        <div className="toggle-list-item">
                                            <span className="bullet">&bull;</span>
                                            <span>Click <span className="inline-icon"><ShoppingBag size={12} /> Marketplace</span> in your sidebar to try setups from our incredible community</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )
                }
            </main >

            {/* Right Sidebar (AI) */}
            {
                isAiOpen && (
                    <aside className="sidebar-right">
                        <div className="ai-header">
                            <span>New AI chat</span>
                            <div className="ai-actions">
                                <button><Edit2 size={16} /></button>
                                <button><MoreHorizontal size={16} /></button>
                                <button onClick={() => setIsAiOpen(false)}><ChevronRight size={16} /></button>
                            </div>
                        </div>

                        {aiMessages.length === 0 ? (
                            <>
                                <div className="ai-content">
                                    <div className="ai-welcome">
                                        <div className="ai-avatar">
                                            <Sparkles size={24} color="#000" />
                                        </div>
                                        <h2>Welcome qamer hassan! 👋</h2>
                                        <p>I'm your Notion Agent and I'm here to help you get set up!</p>
                                        <p>Start by sending the prompt below to see what I can do.</p>
                                    </div>
                                </div>

                                <div className="ai-input-area">
                                    <div className="ai-prompt-box" onClick={handleSuggestedPrompt}>
                                        <div className="ai-input-header">
                                            <span className="ai-source-icon">@</span>
                                            {activeView === 'todo-list' ? (
                                                <>
                                                    <span className="page-icon-small">📝</span>
                                                    <span>To Do List</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="page-icon-small">👋</span>
                                                    <span>Getting Started</span>
                                                </>
                                            )}
                                        </div>
                                        <div className="ai-input-text">
                                            Build a project management hub <span className="underline">in a new page</span>.
                                        </div>
                                        <div className="ai-input-actions">
                                            <div className="left-actions">
                                                <button><Paperclip size={16} /></button>
                                                <button>Auto</button>
                                                <button>All sources</button>
                                            </div>
                                            <button className="send-btn"><ArrowUp size={16} /></button>
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
                )
            }

            {
                isNewPageModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsNewPageModalOpen(false)}>
                        <div className="new-page-modal" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <div className="header-left">
                                    <Plus size={14} /> Add to <strong>Private</strong> <ChevronDown size={12} />
                                </div>
                                <div className="header-search">
                                    Search
                                </div>
                                <button className="modal-close" onClick={() => setIsNewPageModalOpen(false)}>
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="top-actions-row">
                                    <div className="action-card">
                                        <File size={24} color="#999" />
                                        <span>Empty page</span>
                                    </div>
                                    <div className="action-card">
                                        <Database size={24} color="#999" />
                                        <span>Empty database</span>
                                    </div>
                                    <div className="action-card">
                                        <Sparkles size={24} color="#999" />
                                        <span>Build with AI</span>
                                    </div>
                                </div>

                                <div className="section-label">Suggested</div>
                                <div className="templates-grid">
                                    <div className="template-card theme-green">
                                        <div className="template-card-header">
                                            <div className="template-icon"><CheckSquare size={16} /></div>
                                            <div className="template-info">
                                                <h4>Tasks Tracker</h4>
                                                <p>Stay organized with tasks, your way.</p>
                                            </div>
                                        </div>
                                        {/* Mock preview elements */}
                                        <div className="template-preview" style={{ background: 'rgba(69, 191, 114, 0.1)' }}>
                                            <div style={{ width: '80%', height: '4px', background: '#45bf72', borderRadius: '2px' }}></div>
                                        </div>
                                    </div>

                                    <div className="template-card theme-blue">
                                        <div className="template-card-header">
                                            <div className="template-icon"><Trello size={16} /></div>
                                            <div className="template-info">
                                                <h4>Projects</h4>
                                                <p>Manage projects start to finish.</p>
                                            </div>
                                        </div>
                                        <div className="template-preview" style={{ background: 'rgba(35, 131, 226, 0.1)' }}>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                <div style={{ width: '20px', height: '10px', background: '#2383e2', borderRadius: '2px' }}></div>
                                                <div style={{ width: '20px', height: '10px', background: '#2383e2', borderRadius: '2px', opacity: 0.5 }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="template-card theme-red">
                                        <div className="template-card-header">
                                            <div className="template-icon"><FileText size={16} /></div>
                                            <div className="template-info">
                                                <h4>Document Hub</h4>
                                                <p>Collaborate on docs in one hub.</p>
                                            </div>
                                        </div>
                                        <div className="template-preview" style={{ background: 'rgba(223, 84, 82, 0.1)' }}>
                                            <div style={{ width: '60%', height: '4px', background: '#df5452', borderRadius: '2px', marginBottom: '4px' }}></div>
                                            <div style={{ width: '40%', height: '4px', background: '#df5452', borderRadius: '2px', opacity: 0.6 }}></div>
                                        </div>
                                    </div>

                                    <div className="template-card theme-orange">
                                        <div className="template-card-header">
                                            <div className="template-icon"><Sparkles size={16} /></div>
                                            <div className="template-info">
                                                <h4>Brainstorm Session</h4>
                                                <p>Spark new ideas together.</p>
                                            </div>
                                        </div>
                                        <div className="template-preview" style={{ background: 'rgba(217, 115, 13, 0.1)' }}>
                                            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d9730d' }}></div>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d9730d', opacity: 0.7 }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="template-card theme-yellow">
                                        <div className="template-card-header">
                                            <div className="template-icon"><CalendarDays size={16} /></div>
                                            <div className="template-info">
                                                <h4>Meeting Notes</h4>
                                                <p>Turn meetings into action.</p>
                                            </div>
                                        </div>
                                        <div className="template-preview" style={{ background: 'rgba(203, 145, 47, 0.1)' }}>
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <div style={{ width: '30px', height: '2px', background: '#cb912f' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="template-card theme-purple">
                                        <div className="template-card-header">
                                            <div className="template-icon"><Target size={16} /></div>
                                            <div className="template-info">
                                                <h4>Goals Tracker</h4>
                                                <p>Set team goals, achieve together.</p>
                                            </div>
                                        </div>
                                        <div className="template-preview" style={{ background: 'rgba(144, 101, 176, 0.1)' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                                <div style={{ width: '20px', height: '2px', background: '#9065b0' }}></div>
                                                <div style={{ width: '20px', height: '2px', background: '#9065b0', opacity: 0.5 }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                More templates
                            </div>
                        </div>
                    </div>
                )
            }

            {
                isSettingsModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsSettingsModalOpen(false)}>
                        <div className="settings-modal" onClick={e => e.stopPropagation()}>
                            <aside className="settings-sidebar">
                                <div className="settings-group-nav">
                                    <div className="settings-section-title">Account</div>
                                    <div className="user-item">
                                        <div className="user-avatar-tiny">Q</div>
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#d4d4d4', flex: 1 }}>qamer hassan</span>
                                    </div>
                                    <div className="settings-item"><Settings size={14} /> My settings</div>
                                    <div className={`settings-item ${activeSettingsTab === 'preferences' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('preferences')}>
                                        <Settings size={14} /> Preferences
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('notifications')}>
                                        <Bell size={14} /> Notifications
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'connections' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('connections')}>
                                        <Zap size={14} /> Connections
                                    </div>
                                </div>

                                <div className="settings-group-nav">
                                    <div className="settings-section-title">Workspace</div>
                                    <div className={`settings-item ${activeSettingsTab === 'general' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('general')}>
                                        <Settings size={14} /> General
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'people' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('people')}>
                                        <User size={14} /> People
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'teamspaces' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('teamspaces')}>
                                        <Users size={14} /> Teamspaces
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'security' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('security')}>
                                        <Lock size={14} /> Security
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'identity' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('identity')}>
                                        <Shield size={14} /> Identity
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'notion_ai' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('notion_ai')}>
                                        <Sparkles size={14} /> Notion AI
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'public_pages' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('public_pages')}>
                                        <Globe size={14} /> Public pages
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'emoji' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('emoji')}>
                                        <Smile size={14} /> Emoji
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'connections_workspace' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('connections_workspace')}>
                                        <Zap size={14} /> Connections
                                    </div>
                                    <div className={`settings-item ${activeSettingsTab === 'import_migrate' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('import_migrate')}>
                                        <ImportIcon size={14} /> Import
                                    </div>
                                    <div className={`settings-item upgrade-plan-item ${activeSettingsTab === 'upgrade_plan' ? 'active' : ''}`} onClick={() => setActiveSettingsTab('upgrade_plan')}>
                                        <ArrowUp size={14} /> Upgrade plan
                                    </div>
                                </div>
                            </aside>

                            <main className="settings-content">
                                {activeSettingsTab === 'preferences' ? (
                                    <>
                                        <h2>Preferences</h2>

                                        <div className="settings-group">
                                            <div className="group-title">Appearance</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-desc">Customize how Notion looks on your device.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="dropdown-container">
                                                        <button className="settings-select" onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}>
                                                            {theme === 'system' ? 'Use system setting' : theme === 'light' ? 'Light' : 'Dark'} <ChevronDown size={14} />
                                                        </button>
                                                        {isThemeMenuOpen && (
                                                            <div className="settings-dropdown">
                                                                <div className={`dropdown-option ${theme === 'system' ? 'active' : ''}`} onClick={() => { setTheme('system'); setIsThemeMenuOpen(false); }}>
                                                                    <span>Use system setting</span>
                                                                    {theme === 'system' && <Check size={14} />}
                                                                </div>
                                                                <div className={`dropdown-option ${theme === 'light' ? 'active' : ''}`} onClick={() => { setTheme('light'); setIsThemeMenuOpen(false); }}>
                                                                    <span>Light</span>
                                                                    {theme === 'light' && <Check size={14} />}
                                                                </div>
                                                                <div className={`dropdown-option ${theme === 'dark' ? 'active' : ''}`} onClick={() => { setTheme('dark'); setIsThemeMenuOpen(false); }}>
                                                                    <span>Dark</span>
                                                                    {theme === 'dark' && <Check size={14} />}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Language & Time</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Language</span>
                                                    <span className="label-desc">Change the language used in the user interface.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="dropdown-container">
                                                        <button className="settings-select" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
                                                            {language} <ChevronDown size={14} />
                                                        </button>
                                                        {isLanguageMenuOpen && (
                                                            <div className="settings-dropdown scrollable">
                                                                {languages.map((lang, idx) => (
                                                                    <div key={idx} className={`dropdown-option language-option ${language === lang.label ? 'active' : ''}`} onClick={() => { setLanguage(lang.label); setIsLanguageMenuOpen(false); }}>
                                                                        <div className="lang-text">
                                                                            <span className="lang-label">{lang.label}</span>
                                                                            <span className="lang-sub">{lang.sub}</span>
                                                                        </div>
                                                                        {language === lang.label && <Check size={14} />}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Always show text direction controls</span>
                                                    <span className="label-desc">Show options to change text direction (LTR/RTL) in the editor menu, even when your language is left-to-right.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Start week on Monday</span>
                                                    <span className="label-desc">This will change how all calendars in your app look.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Set timezone automatically using your location</span>
                                                    <span className="label-desc">Reminders, notifications and emails are delivered based on your time zone.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Timezone</span>
                                                    <span className="label-desc">Current timezone setting.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-select">(GMT+5:00) Karachi <ChevronDown size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Desktop app</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Open links in desktop app</span>
                                                    <span className="label-desc">You must have the <span className="underline">Windows app</span> installed.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Open on start</span>
                                                    <span className="label-desc">Choose what to show when Notion starts or when you switch workspaces.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-select">Last visited page <ChevronDown size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Privacy</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Cookie settings</span>
                                                    <span className="label-desc">Customize cookies. See <span className="underline">Cookie Notice</span> for details.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-select">Customize <ChevronDown size={14} /></button>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Show my view history</span>
                                                    <span className="label-desc">People with edit or full access will be able to see when you've viewed a page. <span className="underline">Learn more</span>.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Profile discoverability</span>
                                                    <span className="label-desc">Users with your email can see your name and profile picture when inviting you to a new workspace. <span className="underline">Learn more</span>.</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : activeSettingsTab === 'notifications' ? (
                                    <>
                                        <h2>In-app notifications</h2>

                                        <div className="settings-group">
                                            <div className="group-title">Live meeting activity</div>
                                            <div style={{ fontSize: '13px', color: '#888', marginBottom: '16px' }}>
                                                Configure which in-app popups appear throughout your video conferencing and AI meeting notes experience
                                            </div>

                                            <div className="settings-row">
                                                <div className="settings-label" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                                                    <span className="label-number" style={{ background: '#333', color: '#888', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>1</span>
                                                    <span className="label-main">Join video conferencing and start transcribing</span>
                                                    <HelpCircle size={12} color="#666" />
                                                </div>
                                                <div className="settings-control" style={{ gap: '12px' }}>
                                                    <Lock size={14} color="#666" />
                                                    <div className="toggle-switch" style={{ opacity: 0.5, cursor: 'not-allowed' }}><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                                                    <span className="label-number" style={{ background: '#333', color: '#888', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>2</span>
                                                    <span className="label-main">Actively transcribing</span>
                                                    <HelpCircle size={12} color="#666" />
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                                                    <span className="label-number" style={{ background: '#333', color: '#888', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>3</span>
                                                    <span className="label-main">Summarizing meeting note</span>
                                                    <HelpCircle size={12} color="#666" />
                                                </div>
                                                <div className="settings-control" style={{ gap: '12px' }}>
                                                    <Lock size={14} color="#666" />
                                                    <div className="toggle-switch" style={{ opacity: 0.5, cursor: 'not-allowed' }}><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Slack notifications</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Slack notifications</span>
                                                    <span className="label-desc">Receive notifications in your Slack workspace when you're mentioned in a page, database property, or comment</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-select">Off <ChevronDown size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Discord notifications</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Discord notifications</span>
                                                    <span className="label-desc">Receive notifications in Discord when you're mentioned in a page, database property, or comment</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-select">Off <ChevronDown size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Email notifications</div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Activity in your workspace</span>
                                                    <span className="label-desc">Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Always send email notifications</span>
                                                    <span className="label-desc">Receive emails about activity in your workspace, even when you're active on the app</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Page updates</span>
                                                    <span className="label-desc">Receive email digests for changes to pages you're subscribed to</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Workspace digest</span>
                                                    <span className="label-desc">Receive email digests of what's happening in your workspace</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Announcements and update emails</span>
                                                    <span className="label-desc">Receive occasional emails about product launches and new features from Notion</span>
                                                </div>
                                                <div className="settings-control">
                                                    <button className="settings-item" style={{ background: '#333', border: 'none', color: '#d4d4d4', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>
                                                        <ExternalLink size={12} /> Manage settings
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : activeSettingsTab === 'people' ? (
                                    <>
                                        <div className="settings-header-row">
                                            <h2>People <HelpCircle size={14} color="#666" style={{ marginLeft: '6px', cursor: 'pointer' }} /></h2>
                                            <div className="link-row" style={{ fontSize: '12px' }}>
                                                View People Directory <ExternalLink size={12} />
                                            </div>
                                        </div>

                                        <div className="invite-section">
                                            <div className="invite-header">
                                                <div className="invite-title">Invite link to add members</div>
                                                <div className="invite-actions">
                                                    <button className="copy-link-btn">Copy link</button>
                                                    <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                            <div className="invite-desc">
                                                Only people with permission to invite members can see this. You can also <span className="underline">generate a new link</span>
                                            </div>
                                        </div>

                                        <div className="people-tabs">
                                            <div className="tab-item active">Guests</div>
                                            <div className="tab-item">Members <span className="count-badge">1</span></div>
                                            <div className="tab-item">Groups</div>
                                            <div className="tab-item">Contacts</div>
                                            <div style={{ flex: 1 }}></div>
                                            <div className="search-icon"><Search size={14} /></div>
                                            <button className="add-members-btn">Add members <ChevronDown size={14} /></button>
                                        </div>

                                        <div className="people-list-empty">
                                            <div className="empty-icon-wrapper">
                                                <UserPlus size={24} color="#666" />
                                            </div>
                                            <div className="empty-text">No guests yet</div>
                                            <button className="import-contacts-btn">Import contacts</button>
                                        </div>
                                    </>
                                ) : activeSettingsTab === 'teamspaces' ? (
                                    <>
                                        <h2>Teamspace settings</h2>
                                        <div style={{ fontSize: '13px', color: '#888', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <HelpCircle size={13} /> Learn about teamspaces
                                        </div>

                                        <div className="settings-group">
                                            <div className="group-title">Default teamspaces</div>
                                            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                                                Choose teamspaces that all new and current workspace members will automatically join
                                            </div>
                                            <div className="input-row">
                                                <div className="input-wrapper">
                                                    <span className="hash-icon">#</span>
                                                    <input type="text" value="qamer hassan's Space HQ" readOnly className="settings-input" />
                                                </div>
                                                <button className="update-btn">Update</button>
                                            </div>
                                        </div>

                                        <div className="settings-group">
                                            <div className="settings-row">
                                                <div className="settings-label">
                                                    <span className="label-main">Limit teamspace creation to only workspace owners</span>
                                                    <span className="label-desc">Only allow workspace owners to create teamspaces</span>
                                                </div>
                                                <div className="settings-control">
                                                    <div className="toggle-switch"><div className="toggle-thumb"></div></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="manage-teamspaces">
                                            <div className="manage-header">
                                                <div className="group-title">Manage teamspaces</div>
                                                <button className="new-teamspace-btn" onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsSettingsModalOpen(false);
                                                    setIsCreateTeamspaceModalOpen(true);
                                                }}>New teamspace</button>
                                            </div>
                                            <div style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>
                                                Manage all teamspaces you have access to here
                                            </div>

                                            <div className="teamspace-filters">
                                                <div className="search-input-wrapper">
                                                    <Search size={14} color="#666" />
                                                    <input type="text" placeholder="Search teamspaces..." />
                                                </div>
                                                <div className="filter-actions">
                                                    <button className="filter-btn"><Layers size={14} /> Active <ChevronDown size={12} /></button>
                                                    <button className="filter-btn"><User size={14} /> Owner <ChevronDown size={12} /></button>
                                                    <button className="filter-btn"><Lock size={14} /> Access <ChevronDown size={12} /></button>
                                                    <button className="filter-btn"><Shield size={14} /> Security <ChevronDown size={12} /></button>
                                                </div>
                                            </div>

                                            <div className="teamspace-table-header">
                                                <div className="col-name">Teamspace</div>
                                                <div className="col-owners">Owners</div>
                                                <div className="col-access">Access</div>
                                                <div className="col-updated">Updated <ArrowDown size={12} /></div>
                                                <div className="col-more"></div>
                                            </div>

                                            <div className="teamspace-row">
                                                <div className="col-name">
                                                    <div className="teamspace-icon-sq"><Home size={14} /></div>
                                                    <div className="teamspace-info">
                                                        <div className="ts-name">qamer hassan's Space HQ</div>
                                                        <div className="ts-meta">1 member • Joined</div>
                                                    </div>
                                                </div>
                                                <div className="col-owners">
                                                    <div className="owner-chip">
                                                        <div className="owner-avatar">Q</div>
                                                        <span>qamer hassan</span>
                                                    </div>
                                                </div>
                                                <div className="col-access">
                                                    Default <ChevronDown size={12} />
                                                </div>
                                                <div className="col-updated">
                                                    1/9/26
                                                </div>
                                                <div className="col-more">
                                                    <MoreHorizontal size={14} color="#888" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : activeSettingsTab === 'general' ? (
                                    <div className="general-settings-container">
                                        <h2 className="workspace-settings-title">Workspace settings</h2>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Name</div>
                                            <input type="text" className="workspace-name-input" defaultValue="qamer hassan's Space" />
                                            <div className="section-info-text">You can use your organization or company name. Keep it simple.</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Icon</div>
                                            <div className="icon-upload-preview">
                                                <div className="preview-square">Q</div>
                                            </div>
                                            <div className="section-info-text">Upload an image or pick an emoji. It will show up in your sidebar and notifications.</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Custom landing page</div>
                                            <div className="section-info-text">When a new workspace member joins, a copy of this page will automatically be installed in their Private section.</div>
                                            <button className="settings-select-btn">
                                                Select page <ChevronDown size={14} />
                                            </button>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Sidebar</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Notion Apps section</div>
                                                    <div className="row-sub-label">Show Notion apps like Mail and Calendar in your sidebar.</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Trusted domain access</div>
                                            <div className="section-label-simple">Allowed email domains</div>
                                            <input type="text" className="workspace-domain-input" placeholder="Type an email domain..." />
                                            <div className="section-info-text">Anyone with email addresses at these domains can automatically join your workspace.</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Export</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Workspace content <HelpCircle size={14} color="#666" /></div>
                                                    <div className="row-sub-label">Export all pages in qamer hassan's Space as HTML, Markdown, CSV or PDF</div>
                                                </div>
                                                <button className="settings-action-btn">Export</button>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Members <HelpCircle size={14} color="#666" /></div>
                                                    <div className="row-sub-label"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to get a list of members and guests in your workspace</div>
                                                </div>
                                                <button className="settings-action-btn disabled">Export members as CSV</button>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Analytics</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Save and display page view analytics</div>
                                                    <div className="row-sub-label">People with edit or full access will be able to see how many views a page has. If this is turned off, page views will not be stored for all pages in qamer hassan's Space.</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">People</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">People directory</div>
                                                    <div className="row-sub-label">Enable the people directory and profile pages in Notion</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Recent activity on profile</div>
                                                    <div className="row-sub-label">Show recently created, edited, and commented pages on the profile page</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Hover cards</div>
                                                    <div className="row-sub-label">Show information on hover over name</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="settings-section danger-zone-section">
                                            <div className="section-label-bold">Danger zone</div>
                                            <button className="danger-zone-btn">Delete entire workspace</button>
                                            <div className="section-info-text"><HelpCircle size={14} color="#666" /> Learn about deleting workspaces.</div>
                                        </div>

                                        <div className="settings-section workspace-id-section">
                                            <div className="section-label-bold">Workspace ID</div>
                                            <div className="workspace-id-row">
                                                <span className="id-label">Workspace ID</span>
                                                <span className="id-value">118edf95-2686-8172-b637-0003161456c5</span>
                                                <button className="copy-id-btn"><Copy size={14} /></button>
                                            </div>
                                        </div>

                                        <div className="settings-footer-fixed">
                                            <button className="update-btn-blue">Update</button>
                                            <button className="cancel-btn">Cancel</button>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'security' ? (
                                    <div className="security-settings-container">
                                        <h2 className="workspace-settings-title">Security & data</h2>

                                        <div className="settings-sub-nav">
                                            <div className="sub-nav-item active">General</div>
                                            <div className="sub-nav-item">Members & guests</div>
                                            <div className="sub-nav-item">Data retention</div>
                                        </div>

                                        <div className="security-content">
                                            <div className="settings-row-simple align-start">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Disable publishing sites, forms, and public links</div>
                                                    <div className="row-sub-label"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to disable publishing sites, forms, and public links</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>

                                            <div className="settings-row-simple align-start">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Disable duplicating pages to other workspaces</div>
                                                    <div className="row-sub-label"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to prevent users from duplicating pages to other workspaces via Move To or Duplicate To</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>

                                            <div className="settings-row-simple align-start" style={{ borderBottom: 'none' }}>
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Disable export</div>
                                                    <div className="row-sub-label"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to prevent users from exporting as Markdown, CSV, or PDF</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>

                                            <div className="advanced-controls-banner">
                                                <div className="banner-left">
                                                    <h3>Advanced controls for your workspace</h3>
                                                    <p>Get the Enterprise plan to unlock all settings</p>
                                                    <button className="upgrade-now-btn">Upgrade now</button>
                                                </div>
                                                <div className="banner-graphic">
                                                    <div className="graphic-item shield"><Shield size={20} /></div>
                                                    <div className="graphic-item file"><FileText size={20} /></div>
                                                    <div className="graphic-item settings-big"><Settings size={40} /> <ArrowUp size={16} className="arrow-overlay" /></div>
                                                    <div className="graphic-item toggle"><AlignLeft size={20} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'identity' ? (
                                    <div className="identity-settings-container">
                                        <h2 className="workspace-settings-title">Domain management</h2>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Verified domains</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to verify email domain ownership for SSO and security features</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Workspace creation</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to customize who can create new workspaces</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Claim workspaces</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to claim workspaces with verified domains or set external domain requirements</div>
                                        </div>

                                        <h2 className="workspace-settings-title" style={{ marginTop: '32px' }}>User management</h2>
                                        <div className="section-info-text">These settings apply to all users with a verified domain, even if they are not a member of this workspace.</div>
                                        <div className="section-info-text" style={{ marginTop: '12px' }}><HelpCircle size={14} color="#666" /> Learn about managed users</div>

                                        <div className="settings-section" style={{ marginTop: '24px' }}>
                                            <div className="section-label-bold">Managed users dashboard</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to manage users with verified domains</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Allow managed users to change profile information</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to control managed user profile editing permissions</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">External workspace access</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to control external workspace access for managed users</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Prevent managed users from granting support access</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to control managed users' support access permissions</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Session duration</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to set managed user session duration before requiring re-authentication</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Log out all users</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to force log out managed users and require re-authentication</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Reset passwords for all users</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to force password reset for all managed users on next login</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Notion Mail</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to enable Notion Mail for company domain members</div>
                                        </div>

                                        <h2 className="workspace-settings-title" style={{ marginTop: '32px' }}>SAML single sign-on (SSO)</h2>
                                        <div className="section-info-text"><HelpCircle size={14} color="#666" /> Learn about SAML SSO</div>

                                        <div className="settings-section" style={{ marginTop: '24px' }}>
                                            <div className="section-label-bold">Enable SAML SSO</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to enable SAML SSO login for users with verified domains</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Login method</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to customize SAML SSO workspace access. Workspace owners retain password or passkey login options.</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Automatic account creation <HelpCircle size={14} color="#666" /></div>
                                                    <div className="row-sub-label">Automatically create Notion accounts for new users who log in via SAML SSO</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Linked workspaces</div>
                                            <div className="section-info-text">This SAML SSO configuration applies to the following other workspaces</div>
                                            <div className="linked-workspaces-table">
                                                <div className="table-header">
                                                    <span>Name</span>
                                                    <span>Members</span>
                                                    <span>Created at</span>
                                                </div>
                                                <div className="table-empty-state">No linked workspaces.</div>
                                            </div>
                                        </div>

                                        <h2 className="workspace-settings-title" style={{ marginTop: '32px' }}>SCIM provisioning</h2>
                                        <div className="settings-section">
                                            <div className="section-label-bold">SCIM tokens</div>
                                            <div className="section-info-text"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to generate a token to configure SCIM</div>
                                        </div>

                                        <h2 className="workspace-settings-title" style={{ marginTop: '32px' }}>Setup information</h2>
                                        <div className="workspace-id-row" style={{ width: '100%', maxWidth: 'none' }}>
                                            <span className="id-label">Workspace ID</span>
                                            <span className="id-value">118edf95-2686-8172-b637-0003161456c5</span>
                                            <button className="copy-id-btn" style={{ marginLeft: 'auto' }}><Copy size={14} /></button>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'notion_ai' ? (
                                    <div className="notion-ai-settings-container">
                                        <h2 className="workspace-settings-title">Notion AI</h2>

                                        <div className="ai-hero-banner">
                                            <div className="ai-hero-left">
                                                <h3>The AI workspace that works for you</h3>
                                                <p>Get the Business plan for the all-in-one AI that takes notes, searches apps, and builds workflows</p>
                                                <button className="upgrade-now-btn">Upgrade now</button>
                                            </div>
                                            <div className="ai-hero-right">
                                                <div className="ai-feature-chips">
                                                    <div className="ai-chip active"><Shield size={12} fill="#2383e2" /> All core AI features</div>
                                                    <div className="ai-chip"><Mic size={12} /> Meeting notes</div>
                                                    <div className="ai-chip secondary">Search across <ArrowUpRight size={10} /> <Globe size={10} /> <Zap size={10} /> + 2</div>
                                                    <div className="ai-chip"><Zap size={12} /> Research mode</div>
                                                </div>
                                                <div className="ai-face-avatar">
                                                    <div className="face-oval">
                                                        <div className="face-eyes">
                                                            <div className="eye"></div>
                                                            <div className="eye"></div>
                                                        </div>
                                                        <div className="face-nose"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Share data to improve Notion AI <HelpCircle size={14} color="#666" /></div>
                                                    <div className="row-sub-label">Help improve Notion AI by allowing data from this workspace to be shared with Notion. By enabling the Learning and Early Access Program you are agreeing to the <span style={{ textDecoration: 'underline' }}>Supplementary Terms</span>.</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">AI Connectors</h3>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Notion apps</div>
                                            <div className="section-info-text">Connect your personal knowledge across your Notion apps.</div>
                                            <div className="connector-row small-grid">
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box"><NotionIcon size={16} /></div>
                                                        <span className="connector-name">Notion Mail <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box"><Calendar size={16} /></div>
                                                        <span className="connector-name">Notion Calendar <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Workspace AI Connectors <HelpCircle size={14} color="#666" /></div>
                                            <div className="section-info-text">Workspace owners can connect all your team's knowledge, across all apps you use for work. <ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to Business</div>
                                            <div className="connector-row large-grid">
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#222' }}><Github size={16} /></div>
                                                        <span className="connector-name">GitHub</span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#ea4335' }}><Mail size={16} color="white" /></div>
                                                        <span className="connector-name">Gmail</span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#4285f4' }}><Calendar size={16} color="white" /></div>
                                                        <span className="connector-name">Google Calendar <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#4285f4' }}><Cloud size={16} color="white" /></div>
                                                        <span className="connector-name">Google Drive</span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#0052cc' }}><Zap size={16} color="white" /></div>
                                                        <span className="connector-name">Jira <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#000' }}><Maximize size={16} color="white" /></div>
                                                        <span className="connector-name">Linear</span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#4b70e2' }}><Users size={16} color="white" /></div>
                                                        <span className="connector-name">Microsoft Teams <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#0078d4' }}><Mail size={16} color="white" /></div>
                                                        <span className="connector-name">Outlook <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#0078d4' }}><Globe size={16} color="white" /></div>
                                                        <span className="connector-name">SharePoint <span className="beta-tag">Beta</span></span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                                <div className="connector-card">
                                                    <div className="connector-info">
                                                        <div className="connector-icon-box" style={{ background: '#e01e5a' }}><Hash size={16} color="white" /></div>
                                                        <span className="connector-name">Slack</span>
                                                    </div>
                                                    <button className="connector-add-btn"><Plus size={14} /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">AI Web Search</h3>
                                        <div className="settings-section">
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Enable web search for workspace</div>
                                                    <div className="row-sub-label">Allow AI to search the web for up-to-date information when answering questions.</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Require confirmation for web requests</div>
                                                    <div className="row-sub-label">Agent might try to load external web pages to get information not available through web search. Require AI to request user confirmation to view any web page.</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">Personalization</h3>
                                        <div className="personalization-container">
                                            <div className="personalization-info">
                                                <p className="section-info-text">Pick a name, choose an accessory, and set how Notion AI talks and helps you. Start from a template or build your own style.</p>
                                                <button className="settings-action-btn" style={{ width: 'fit-content' }}>Edit</button>
                                            </div>
                                            <div className="personalization-graphic">
                                                <div className="head-avatars">
                                                    <div className="head-avatar mustache">
                                                        <div className="avatar-face">
                                                            <div className="mustache-svg">~</div>
                                                        </div>
                                                    </div>
                                                    <div className="head-avatar duck">
                                                        <div className="avatar-face">
                                                            <div className="duck-svg">🦆</div>
                                                        </div>
                                                    </div>
                                                    <div className="head-avatar headset">
                                                        <div className="avatar-face">
                                                            <div className="headset-svg">🎧</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">AI Meeting Notes</h3>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Admin preferences</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Workspace availability</div>
                                                    <div className="row-sub-label">Allow everyone in your workspace to access AI Meeting Notes.</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Automatic transcript deletion</div>
                                                    <div className="row-sub-label"><ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to set transcript auto-deletion timing.</div>
                                                </div>
                                                <div className="select-dropdown-mock">Never <ChevronDown size={14} /></div>
                                            </div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Store audio locally</div>
                                                    <div className="row-sub-label">Allow members to temporarily store a local, on-device copy of their meeting audio for added reliability. <span style={{ textDecoration: 'underline' }}>Learn more</span></div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Your preferences</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Hide meetings tab</div>
                                                    <div className="row-sub-label">Hide the meetings tab from the sidebar.</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                            <div className="settings-section">
                                                <div className="section-label-bold">Default meetings database</div>
                                                <div className="section-info-text">Link or create a new database to store new AI meeting notes.</div>
                                                <div className="database-search-mock">
                                                    <span style={{ color: '#666' }}>Search for a database...</span>
                                                    <ChevronDown size={14} color="#666" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'public_pages' ? (
                                    <div className="public-pages-settings-container">
                                        <h2 className="workspace-settings-title">Public Pages</h2>

                                        <div className="stats-grid">
                                            <div className="stats-card">
                                                <div className="stats-label">Published sites</div>
                                                <div className="stats-value">0</div>
                                                <div className="stats-sub">No published sites</div>
                                            </div>
                                            <div className="stats-card">
                                                <div className="stats-label">Public forms</div>
                                                <div className="stats-value">0</div>
                                                <div className="stats-sub">No public forms</div>
                                            </div>
                                            <div className="stats-card">
                                                <div className="stats-label">Anyone with the link</div>
                                                <div className="stats-value">0</div>
                                                <div className="stats-sub">No public share links</div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-header-row">
                                                <div className="section-label-bold">Domains</div>
                                                <button className="settings-action-btn secondary">New domain</button>
                                            </div>
                                            <div className="section-info-text">Pages published to the web will be live under the domain below. <ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> for multiple domains</div>

                                            <div className="domains-table">
                                                <div className="table-header">
                                                    <span>Domain</span>
                                                    <span>Homepage</span>
                                                    <span>Status</span>
                                                </div>
                                                <div className="domain-row">
                                                    <div className="domain-name">
                                                        <span className="dot"></span> mulberry-plastic-8f4.notion.site <FileText size={12} color="#666" />
                                                    </div>
                                                    <div className="homepage-select">
                                                        <Search size={12} color="#666" /> Select a page
                                                    </div>
                                                    <div className="status-badge live">
                                                        <span className="status-dot"></span> Live
                                                    </div>
                                                    <button className="row-more-btn">···</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="section-label-bold">Settings</div>
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Always show published banner on sites</div>
                                                    <div className="row-sub-label">Published pages will display a blue banner at the top</div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'emoji' ? (
                                    <div className="emoji-settings-container">
                                        <h2 className="workspace-settings-title">Emoji</h2>
                                        <div className="settings-section">
                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Limit custom emoji creation to workspace owners</div>
                                                    <div className="row-sub-label">Existing emoji can still be edited or deleted by their creator</div>
                                                </div>
                                                <div className="toggle-switch off"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <div className="emoji-empty-state">
                                            <div className="emoji-graphic-circle">
                                                <Smile size={48} color="#666" />
                                            </div>
                                            <p className="emoji-empty-text">Custom emoji are available for everyone in your workspace</p>
                                            <button className="settings-action-btn primary">Add emoji</button>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'connections_workspace' ? (
                                    <div className="connections-workspace-container">
                                        <h2 className="workspace-settings-title">Connections</h2>
                                        <div className="settings-sub-nav">
                                            <div className="sub-nav-item">Member</div>
                                            <div className="sub-nav-item active">Workspace</div>
                                        </div>

                                        <div className="settings-section">
                                            <div className="settings-row-simple align-start">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Restrict members from adding connections</div>
                                                    <div className="row-sub-label">
                                                        <ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to control what workspace members can install
                                                    </div>
                                                </div>
                                                <div className="select-dropdown-mock">No restrictions <ChevronDown size={14} /></div>
                                            </div>

                                            <div className="settings-row-simple">
                                                <div className="row-text-group">
                                                    <div className="row-main-label">Allow webhooks in automations</div>
                                                    <div className="row-sub-label">
                                                        <ArrowUp size={12} color="#2383e2" /> <span style={{ color: '#2383e2' }}>Upgrade</span> to disable webhooks to third-party tools in database automations and buttons
                                                    </div>
                                                </div>
                                                <div className="toggle-switch on"><div className="toggle-thumb"></div></div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">All connections</h3>
                                        <div className="connections-list">
                                            <div className="connection-table-header">
                                                <span>Connection</span>
                                                <span>Users and access</span>
                                            </div>
                                            <div className="connection-row-item">
                                                <div className="connection-info-cell">
                                                    <div className="connection-icon-box small">
                                                        <NotionIcon size={14} />
                                                    </div>
                                                    <div className="connection-details">
                                                        <div className="connection-name">Notion MCP</div>
                                                        <div className="connection-meta">Notion <Check size={10} color="#0f7b6c" /></div>
                                                    </div>
                                                </div>
                                                <div className="connection-access-cell">
                                                    Anyone in <strong>qamer hassan's Space</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="connections-footer-links">
                                            <div className="footer-link-item"><div className="link-icon">↗</div> Browse connections in Gallery</div>
                                            <div className="footer-link-item"><div className="link-icon">↗</div> Develop or manage integrations</div>
                                            <div className="footer-link-item"><HelpCircle size={14} /> Learn more about connections</div>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'import_migrate' ? (
                                    <div className="import-settings-container">
                                        <h2 className="workspace-settings-title">Import or migrate</h2>
                                        <p className="section-info-text">Import data from other apps and files into Notion <span className="blue-link">Learn more</span></p>

                                        <div className="zip-converter-box">
                                            <div className="converter-content">
                                                <div className="upload-cloud-icon"><UploadCloud size={24} color="#666" /></div>
                                                <h4>Convert Zip to pages</h4>
                                                <p>Import a zip file that contains DOCX, CSV, Text, Markdown, HTML and EPUB files to convert to pages <strong>Drag and drop a Zip file</strong> or <span className="blue-link">Choose file</span></p>
                                                <div className="max-size-hint">Maximum zip file size: 5GB</div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">File-based imports</h3>
                                        <p className="section-info-text">Import a zip file that contains DOCX, CSV, Text, Markdown, HTML and EPUB files to convert to pages</p>

                                        <div className="import-grid">
                                            <div className="import-card-item">
                                                <div className="import-card-icon"><Database size={16} /></div>
                                                <div className="import-card-name">CSV</div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon"><FileText size={16} /></div>
                                                <div className="import-card-name">PDF</div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon"><AlignLeft size={16} /></div>
                                                <div className="import-card-name">Text & Markdown</div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon"><Monitor size={16} /></div>
                                                <div className="import-card-name">HTML</div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon"><File size={16} color="#4285f4" /></div>
                                                <div className="import-card-name">Word</div>
                                            </div>
                                        </div>

                                        <h3 className="settings-sub-title">3rd-party imports</h3>
                                        <p className="section-info-text">Migrate content from 3rd-party apps</p>

                                        <div className="import-grid">
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#f06560' }}><Target size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Asana</div>
                                                    <div className="import-card-sub">Migrate your projects and tasks</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#0052cc' }}><Layers size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Confluence</div>
                                                    <div className="import-card-sub">Transfer your team's documentation</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#0079bf' }}><Trello size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Trello</div>
                                                    <div className="import-card-sub">Move over your boards and cards</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#00a8ff' }}><Layout size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Workflowy</div>
                                                    <div className="import-card-sub">Import your outlines and lists</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#2db369' }}><Book size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Evernote</div>
                                                    <div className="import-card-sub">Bring your notes and notebooks</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#2684ff' }}><Zap size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Jira</div>
                                                    <div className="import-card-sub">Import your issues and projects</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#ff3d57' }}><Edit2 size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Monday.com</div>
                                                    <div className="import-card-sub">Migrate your workspaces and tasks</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#e51a2e' }}><FilePlus size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Quip</div>
                                                    <div className="import-card-sub">Import your collaborative documents</div>
                                                </div>
                                            </div>
                                            <div className="import-card-item">
                                                <div className="import-card-icon" style={{ color: '#4285f4' }}><FileText size={16} /></div>
                                                <div className="import-card-details">
                                                    <div className="import-card-name">Google Docs</div>
                                                    <div className="import-card-sub">Import your documents seamlessly</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSettingsTab === 'upgrade_plan' ? (
                                    <div className="upgrade-plan-settings-container">
                                        <h3 className="settings-sub-title">Active plan</h3>
                                        <div className="active-plan-banner">
                                            <div className="active-plan-info">
                                                <div className="plan-name-large">Free</div>
                                                <div className="plan-desc">For organizing every corner of your work and life</div>
                                                <div className="plan-limits">Unlimited blocks <HelpCircle size={12} /></div>
                                            </div>
                                            <div className="notion-ai-upgrade-card">
                                                <div className="ai-upgrade-icon"><Sparkles size={16} /></div>
                                                <div className="ai-upgrade-text">
                                                    <div className="ai-upgrade-title">Notion AI</div>
                                                    <div className="ai-upgrade-desc">Upgrade to search everywhere, automate meeting notes & more</div>
                                                </div>
                                                <button className="settings-action-btn primary blue-btn">Upgrade</button>
                                            </div>
                                        </div>

                                        <div className="all-plans-section">
                                            <h3 className="settings-sub-title">All plans <HelpCircle size={14} /></h3>
                                            <div className="plans-grid">
                                                <div className="plan-card">
                                                    <div className="plan-card-header">
                                                        <div className="plan-card-title">Free</div>
                                                        <div className="plan-card-price">$0 <span className="price-sub">per member / month</span></div>
                                                    </div>
                                                </div>
                                                <div className="plan-card">
                                                    <div className="plan-card-header">
                                                        <div className="plan-card-title">Plus</div>
                                                        <div className="plan-card-price">$10 <span className="price-sub">per member / month billed annually</span></div>
                                                        <div className="plan-card-price-monthly">$12 billed monthly</div>
                                                    </div>
                                                    <button className="settings-action-btn border-btn white-text">Upgrade</button>
                                                </div>
                                                <div className="plan-card active-card">
                                                    <div className="plan-card-header">
                                                        <div className="plan-card-title">Business <span className="popular-badge">Popular</span></div>
                                                        <div className="plan-card-price">$20 <span className="price-sub">per member / month billed annually</span></div>
                                                        <div className="plan-card-price-monthly">$24 billed monthly</div>
                                                    </div>
                                                    <button className="settings-action-btn primary blue-btn">Upgrade</button>
                                                </div>
                                                <div className="plan-card">
                                                    <div className="plan-card-header">
                                                        <div className="plan-card-title">Enterprise <span className="limited-badge">Limited</span></div>
                                                        <div className="plan-card-price">$26 <span className="price-sub">per member / month billed annually</span></div>
                                                        <div className="plan-card-price-monthly">$32 billed monthly</div>
                                                    </div>
                                                    <button className="settings-action-btn border-btn white-text">Upgrade</button>
                                                </div>
                                            </div>

                                            <div className="highlights-section">
                                                <div className="highlights-header">
                                                    <div className="highlights-label">Highlights</div>
                                                    <div className="highlights-cols">
                                                        <div className="highlight-col">
                                                            <div className="check-item"><Check size={12} /> Basic forms</div>
                                                            <div className="check-item"><Check size={12} /> Basic sites</div>
                                                            <div className="check-item"><Check size={12} /> Basic automations</div>
                                                            <div className="check-item"><Check size={12} /> Custom databases</div>
                                                            <div className="check-item"><Check size={12} /> Notion Calendar</div>
                                                            <div className="check-item"><Check size={12} /> Notion Mail</div>
                                                        </div>
                                                        <div className="highlight-col">
                                                            <div className="check-item"><Check size={12} /> Unlimited blocks</div>
                                                            <div className="check-item"><Check size={12} /> Unlimited charts</div>
                                                            <div className="check-item"><Check size={12} /> Custom forms</div>
                                                            <div className="check-item"><Check size={12} /> Custom sites</div>
                                                            <div className="check-item"><Check size={12} /> Basic integrations</div>
                                                            <div className="check-icons-row">
                                                                <Github size={12} /> <Mail size={12} /> <Calendar size={12} />
                                                            </div>
                                                        </div>
                                                        <div className="highlight-col">
                                                            <div className="check-item"><Check size={12} /> Notion AI included</div>
                                                            <div className="check-item"><Check size={12} /> SAML SSO</div>
                                                            <div className="check-item"><Check size={12} /> Verify any page</div>
                                                            <div className="check-item"><Check size={12} /> Enterprise search</div>
                                                            <div className="check-icons-row">
                                                                <Github size={12} /> <Cloud size={12} /> <Maximize size={12} /> +4
                                                            </div>
                                                            <div className="check-item"><Check size={12} /> Premium integrations</div>
                                                            <div className="check-icons-row">
                                                                <Zap size={12} color="#f06560" /> <Database size={12} /> <MessageSquare size={12} /> +5
                                                            </div>
                                                        </div>
                                                        <div className="highlight-col">
                                                            <div className="check-item"><Check size={12} /> Notion AI included</div>
                                                            <div className="check-item"><Check size={12} /> User provisioning</div>
                                                            <div className="check-item"><Check size={12} /> Audit log</div>
                                                            <div className="check-item"><Check size={12} /> Advanced security & controls</div>
                                                            <div className="check-item"><Check size={12} /> Enterprise search</div>
                                                            <div className="check-icons-row">
                                                                <Github size={12} /> <NotionIcon size={12} /> <Cloud size={12} /> +4
                                                            </div>
                                                            <div className="check-item"><Check size={12} /> Advanced integrations</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="compare-all-link">Compare all features <ChevronDown size={14} /></div>
                                            </div>
                                        </div>

                                        <div className="faq-section">
                                            <h3 className="faq-title">FAQ</h3>
                                            <div className="faq-subtitle">Plans, Billing & Payment</div>
                                            <button className="message-support-btn">Message support</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h2>Discover new connections</h2>

                                        <div className="connections-grid">
                                            <div className="connection-card">
                                                <div className="card-header">
                                                    <div className="card-icons">
                                                        <div style={{ marginRight: '-8px', zIndex: 1 }}><Sparkles size={16} /></div>
                                                        <Plus size={12} style={{ margin: '0 4px', color: '#666' }} />
                                                        <div style={{ marginLeft: '-8px' }}><UploadCloud size={16} /></div>
                                                    </div>
                                                    <div className="card-badge">+6</div>
                                                </div>
                                                <h3>Notion AI Connectors</h3>
                                                <p>Get search results, AI answers, summaries and more without leaving Notion.</p>
                                                <button className="card-action secondary">Explore</button>
                                            </div>

                                            <div className="connection-card">
                                                <div className="card-header">
                                                    <div className="card-icons">
                                                        <div style={{ marginRight: '-8px', zIndex: 1 }}><Layout size={16} /></div>
                                                        <Plus size={12} style={{ margin: '0 4px', color: '#666' }} />
                                                        <div style={{ marginLeft: '-8px' }}><Zap size={16} /></div>
                                                    </div>
                                                </div>
                                                <h3>Notion MCP</h3>
                                                <p>Connect Notion to your AI tools to summarize, search, and move faster.</p>
                                                <button className="card-action secondary">Explore</button>
                                            </div>

                                            <div className="connection-card">
                                                <div className="card-header">
                                                    <div className="card-icons">
                                                        <div className="slack-icon" style={{ width: '20px', height: '20px', background: '#E01E5A', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', color: 'white' }}>S</div>
                                                    </div>
                                                </div>
                                                <h3>Slack</h3>
                                                <p>Notifications, live links, and workflows between Notion and Slack</p>
                                                <div className="link-preview-tag">LINK PREVIEW</div>
                                                <button className="card-action primary">Connect</button>
                                            </div>
                                        </div>

                                        <div className="connections-links">
                                            <div className="link-heading">See all</div>
                                            <div className="link-row">
                                                <ExternalLink size={14} /> Browse connections in Gallery
                                            </div>
                                            <div className="link-row">
                                                <ExternalLink size={14} /> Develop or manage integrations
                                            </div>
                                            <div className="link-row">
                                                <HelpCircle size={14} /> Learn more about connections
                                            </div>
                                        </div>
                                    </>
                                )}
                            </main>

                            <button className="modal-close-abs" onClick={() => setIsSettingsModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: '#999', cursor: 'pointer' }}>
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                )
            }

            {
                isCalendarModalOpen && (
                    <div className="calendar-modal-overlay" onClick={() => setIsCalendarModalOpen(false)}>
                        <div className="calendar-modal-container" onClick={(e) => e.stopPropagation()}>
                            <div className="calendar-modal-image-container">
                                <img
                                    src="/C:/Users/Qamer%20Hassan/.gemini/antigravity/brain/a4073375-4182-4f0a-91c5-18f91d3a203b/uploaded_image_1768198260439.png"
                                    alt="Notion Calendar Illustration"
                                    className="calendar-modal-image"
                                />
                                <button className="calendar-modal-close-btn" onClick={() => setIsCalendarModalOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="calendar-modal-content">
                                <h1 className="calendar-modal-title">Meet Notion Calendar</h1>
                                <p className="calendar-modal-description">
                                    The beautifully designed calendar for your life and work. Integrated and synced with all your calendar events.
                                </p>
                                <div className="calendar-modal-footer">
                                    <a href="#" className="calendar-modal-learn-more">
                                        Learn more <ArrowUpRight size={14} />
                                    </a>
                                    <button
                                        className="calendar-modal-get-btn"
                                        onClick={() => window.open('https://calendar.notion.so/', '_blank')}
                                    >
                                        Get Notion Calendar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                isTrashOpen && (
                    <div className="trash-popover" onClick={(e) => e.stopPropagation()}>
                        <div className="trash-popover-header">
                            <div className="trash-search-container">
                                <Search size={14} className="trash-search-icon" />
                                <input type="text" placeholder="Search pages in Trash" className="trash-search-input" />
                            </div>
                            <div className="trash-filters">
                                <div className="trash-filter-chip">
                                    <User size={14} /> <span>Last edited by</span> <ChevronDown size={14} />
                                </div>
                                <div className="trash-filter-chip">
                                    <FileText size={14} /> <span>In</span> <ChevronDown size={14} />
                                </div>
                                <div className="trash-filter-chip">
                                    <Users size={14} /> <span>Teamspaces</span> <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>
                        <div className="trash-popover-content">
                            <div className="trash-no-results">
                                <Trash2 size={32} />
                                <span>No results</span>
                            </div>
                        </div>
                        <div className="trash-popover-footer">
                            <div className="footer-info">
                                <span>Pages in Trash for over 30 days will be automatically deleted</span>
                            </div>
                            <HelpCircle size={14} />
                        </div>
                    </div>
                )
            }
            {
                isAddMembersOpen && (
                    <div className="add-members-modal-overlay" onClick={() => setIsAddMembersOpen(false)}>
                        <div className="add-members-modal-container" onClick={(e) => e.stopPropagation()}>
                            {isInviteSent ? (
                                <div className="invite-success-view">
                                    <div className="invite-success-icon">
                                        <Check size={48} color="#2eaadc" />
                                    </div>
                                    <h2 className="success-msg">sent invite successfully</h2>
                                </div>
                            ) : (
                                <>
                                    <div className="add-members-modal-header">
                                        <div className="add-members-icon">
                                            <UserPlus size={24} />
                                        </div>
                                        <h2 className="add-members-title">Add members</h2>
                                        <p className="add-members-subtitle">Type or paste in emails below, separated by commas</p>
                                    </div>

                                    <div className="add-members-modal-body">
                                        <div className="email-input-container">
                                            <input
                                                type="text"
                                                placeholder="Search names or emails"
                                                className="member-email-input"
                                            />
                                        </div>

                                        <div className="role-selection-section">
                                            <label className="role-label">Select role</label>
                                            <div className="role-selector-card">
                                                <div className="role-info">
                                                    <div className="role-icon-box">
                                                        <User size={16} />
                                                    </div>
                                                    <div className="role-details">
                                                        <div className="role-name">Workspace owner</div>
                                                        <div className="role-desc">Can change workspace settings and invite new members to the workspace.</div>
                                                    </div>
                                                </div>
                                                <ChevronDown size={14} className="role-chevron" />
                                            </div>
                                        </div>

                                        <div className="message-section">
                                            <label className="message-label">Message</label>
                                            <textarea
                                                placeholder="Add a note to your invite..."
                                                className="member-message-input"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="add-members-modal-footer">
                                        <button
                                            className="send-invite-btn"
                                            onClick={() => {
                                                setIsInviteSent(true);
                                                setTimeout(() => {
                                                    setIsAddMembersOpen(false);
                                                    setIsInviteSent(false);
                                                }, 2000);
                                            }}
                                        >
                                            Send invite
                                        </button>
                                        <button className="cancel-invite-btn" onClick={() => setIsAddMembersOpen(false)}>Cancel</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )
            }
            {
                isHelpOpen && (
                    <div className="help-popover-container" onClick={(e) => e.stopPropagation()}>
                        <div className="help-popover-item">
                            <BookOpen size={16} />
                            <span>Documentation</span>
                        </div>
                        <div className="help-popover-item">
                            <MessageSquare size={16} />
                            <span>Get support</span>
                        </div>
                        <div
                            className={`help-popover-item more-item ${isMoreHelpOpen ? 'active' : ''}`}
                            onClick={() => setIsMoreHelpOpen(!isMoreHelpOpen)}
                        >
                            <div className="item-main">
                                <MoreHorizontal size={16} />
                                <span>More</span>
                            </div>
                            <ChevronRight size={14} className="more-chevron" />

                            {isMoreHelpOpen && (
                                <div className="help-sub-menu" onClick={(e) => e.stopPropagation()}>
                                    <div className="sub-menu-item">
                                        <span>Keyboard shortcuts</span>
                                        <span className="shortcut-hint">Ctrl+Alt+/</span>
                                    </div>
                                    <div className="sub-menu-item">
                                        <span>X (formerly Twitter)</span>
                                    </div>
                                    <div className="sub-menu-item">
                                        <span>Terms & privacy</span>
                                    </div>
                                    <div className="sub-menu-item">
                                        <span>Status</span>
                                    </div>
                                    <div className="sub-menu-item">
                                        <span>Clear page cache</span>
                                    </div>
                                    <div className="sub-menu-divider"></div>
                                    <div className="sub-menu-footer">
                                        <div className="version-info">Notion 3.1.23.13.20260109.1056</div>
                                        <div className="update-info">Updated 2 days ago</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="help-popover-divider"></div>

                        <div className="help-whats-new-section">
                            <div className="whats-new-header">What's new?</div>
                            <div className="whats-new-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-line"></div>
                                    <div className="timeline-content">Agent can build forms</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-line"></div>
                                    <div className="timeline-content">Gemini 3 Pro is live</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">Notion 3.1</div>
                                </div>
                            </div>
                        </div>

                        <div className="help-popover-item releases-link">
                            <Clapperboard size={16} />
                            <span>View all releases</span>
                        </div>
                    </div>
                )
            }

            {/* New Task Modal */}
            {
                isNewTaskModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsNewTaskModalOpen(false)}>
                        <div className="new-task-modal" onClick={e => e.stopPropagation()}>
                            <div className="new-task-header">
                                <div className="new-task-tabs">
                                    <button className="new-task-tab">
                                        <Plus size={14} />
                                        <span>Add to</span>
                                    </button>
                                    <button className="new-task-tab active">Private</button>
                                </div>
                                <div className="new-task-search">
                                    <Search size={14} />
                                    <input type="text" placeholder="Search" />
                                </div>
                                <button className="modal-close-btn" onClick={() => setIsNewTaskModalOpen(false)}>
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="new-task-body">
                                <div className="quick-options">
                                    <div className="quick-option" onClick={() => { setActiveView('new-page'); setIsNewTaskModalOpen(false); }}>
                                        <FileText size={24} />
                                        <span>Empty page</span>
                                    </div>
                                    <div className="quick-option" onClick={() => { setActiveView('database'); setIsNewTaskModalOpen(false); }}>
                                        <Database size={24} />
                                        <span>Empty database</span>
                                    </div>
                                    <div className="quick-option" onClick={() => { setIsBuildWithAIOpen(true); setIsNewTaskModalOpen(false); setAiPrompt(''); }}>
                                        <Sparkles size={24} />
                                        <span>Build with AI</span>
                                    </div>
                                </div>
                                <div className="suggested-section">
                                    <div className="suggested-label">SUGGESTED</div>
                                    <div className="template-cards">
                                        <div className="template-card" onClick={() => { setActiveView('todo-list'); setIsNewTaskModalOpen(false); }}>
                                            <div className="template-preview">
                                                <div className="preview-bar green"></div>
                                            </div>
                                            <div className="template-info">
                                                <div className="template-icon">📋</div>
                                                <div className="template-details">
                                                    <div className="template-title">Tasks Tracker</div>
                                                    <div className="template-desc">Stay organized with tasks, stay way.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="template-card" onClick={() => { setActiveView('database'); setIsNewTaskModalOpen(false); }}>
                                            <div className="template-preview">
                                                <div className="preview-bar blue"></div>
                                            </div>
                                            <div className="template-info">
                                                <div className="template-icon">📊</div>
                                                <div className="template-details">
                                                    <div className="template-title">Projects</div>
                                                    <div className="template-desc">Manage projects from start to finish.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="template-card" onClick={() => { setActiveView('new-page'); setIsNewTaskModalOpen(false); }}>
                                            <div className="template-preview">
                                                <div className="preview-bar red"></div>
                                            </div>
                                            <div className="template-info">
                                                <div className="template-icon">📄</div>
                                                <div className="template-details">
                                                    <div className="template-title">Document Hub</div>
                                                    <div className="template-desc">Collaborate on docs in one hub.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="more-templates-btn">More templates</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Build with AI Modal */}
            {
                isBuildWithAIOpen && (
                    <div className="modal-overlay" onClick={() => setIsBuildWithAIOpen(false)}>
                        <div className="ai-build-modal" onClick={e => e.stopPropagation()}>
                            <div className="ai-modal-header">
                                <button className="back-btn" onClick={() => setIsBuildWithAIOpen(false)}><ArrowLeft size={16} /></button>
                                <span className="info-icon"><Info size={16} /></span>
                            </div>
                            <div className="ai-modal-content">
                                <div className="ai-logo-large">
                                    <Sparkles size={32} />
                                </div>
                                <h2 className="ai-modal-title">What do you want to build today?</h2>

                                <div className="ai-input-container">
                                    <div className="ai-input-wrapper">
                                        <textarea
                                            placeholder="Make a customer feedback tracker with priority levels, status, and assignee..."
                                            value={aiPrompt}
                                            onChange={(e) => setAiPrompt(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    if (aiPrompt.trim()) {
                                                        setIsAiBuilding(true);
                                                        setIsBuildWithAIOpen(false);
                                                        setTimeout(() => {
                                                            setIsAiBuilding(false);
                                                            setActiveView('generated-page');
                                                        }, 5000);
                                                    }
                                                }
                                            }}
                                        />
                                        <div className="ai-input-footer">
                                            <button
                                                className="up-arrow-btn"
                                                onClick={() => {
                                                    if (aiPrompt.trim()) {
                                                        setIsAiBuilding(true);
                                                        setIsBuildWithAIOpen(false);
                                                        setTimeout(() => {
                                                            setIsAiBuilding(false);
                                                            setActiveView('generated-page');
                                                        }, 5000);
                                                    }
                                                }}
                                            >
                                                <ArrowUp size={14} />
                                            </button>
                                            <div className="ai-brand-badge">
                                                <Sparkles size={12} />
                                                <span>Notion AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ai-suggestions">
                                    <button className="ai-chip" onClick={() => setAiPrompt("Make a plan for ")}>
                                        <Calendar size={14} className="chip-icon green" /> Make a plan
                                    </button>
                                    <button className="ai-chip" onClick={() => setAiPrompt("Create a task management system for ")}>
                                        <CheckSquare size={14} className="chip-icon blue" /> Manage tasks
                                    </button>
                                    <button className="ai-chip" onClick={() => setAiPrompt("Build a feedback collection system for ")}>
                                        <MessageSquare size={14} className="chip-icon orange" /> Collect feedback
                                    </button>
                                    <button className="ai-chip" onClick={() => setAiPrompt("Create a sales pipeline tracker for ")}>
                                        <BarChart3 size={14} className="chip-icon purple" /> Track pipeline
                                    </button>
                                    <button className="ai-chip" onClick={() => setAiPrompt("Plan a marketing campaign for ")}>
                                        <Megaphone size={14} className="chip-icon yellow" /> Run campaign
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* AI Building Overlay */}
            {
                isAiBuilding && (
                    <div className="ai-building-overlay">
                        <div className="ai-building-card">
                            <div className="ai-stars-animation">
                                <Sparkles size={48} className="spinning-ai-sparkle" />
                            </div>
                            <h2 className="ai-building-title">Notion AI is building...</h2>
                            <p className="ai-building-prompt">"{aiPrompt}"</p>

                            <div className="ai-progress-container">
                                <div className="ai-progress-steps">
                                    <div className="progress-step-item active">
                                        <div className="step-dot"></div>
                                        <span>Designing workspace structure</span>
                                    </div>
                                    <div className="progress-step-item">
                                        <div className="step-dot"></div>
                                        <span>Configuring database properties</span>
                                    </div>
                                    <div className="progress-step-item">
                                        <div className="step-dot"></div>
                                        <span>Generating sample data</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ai-progress-bar-bg">
                                <div className="ai-progress-bar-fill"></div>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* Create Teamspace Modal */}
            {
                isCreateTeamspaceModalOpen && (
                    <div className="modal-overlay" style={{ zIndex: 3500 }} onClick={() => setIsCreateTeamspaceModalOpen(false)}>
                        <div className="create-teamspace-modal" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <div className="modal-title">Create a new teamspace</div>
                                <button className="modal-close-btn" onClick={() => setIsCreateTeamspaceModalOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="modal-subtitle">
                                Teamspaces are where your team organizes pages, permissions, and members
                            </div>

                            <div className="modal-form-group">
                                <label className="modal-label">Icon & name</label>
                                <div className="icon-input-row">
                                    <div className="teamspace-icon-picker">T</div>
                                    <input
                                        type="text"
                                        className="modal-input"
                                        placeholder="Acme Labs"
                                        value={createTeamspaceName}
                                        onChange={(e) => setCreateTeamspaceName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="modal-form-group">
                                <label className="modal-label">Description</label>
                                <textarea
                                    className="modal-textarea"
                                    placeholder="Details about your teamspace"
                                    value={createTeamspaceDescription}
                                    onChange={(e) => setCreateTeamspaceDescription(e.target.value)}
                                />
                            </div>

                            <div className="modal-form-group">
                                <label className="modal-label">Permissions</label>
                                <div className="permissions-select-box">
                                    <div className="selected-permission">
                                        <div className="perm-icon"><Globe size={16} /></div>
                                        <div className="perm-info">
                                            <div className="perm-title">Open</div>
                                            <div className="perm-desc">Anyone can see and join this teamspace</div>
                                        </div>
                                    </div>
                                    <ChevronDown size={14} className="perm-chevron" />
                                </div>
                            </div>

                            <div className="modal-footer-c">
                                <div className="learn-more-link">
                                    <HelpCircle size={14} /> Learn about teamspaces
                                </div>
                                <button className="create-btn-primary" onClick={async () => {
                                    const nameToUse = createTeamspaceName.trim() || "Acme Labs";

                                    try {
                                        // Create teamspace via API
                                        const newTeamspace = await teamspaceService.create({
                                            name: nameToUse,
                                            icon: nameToUse[0].toUpperCase()
                                        });

                                        // Update local state
                                        setTeamspaces(prev => [...prev, newTeamspace]);
                                        setActiveTeamspaceId(newTeamspace.id);
                                        setActiveView('teamspace');
                                        setIsCreateTeamspaceModalOpen(false);
                                        setIsSettingsModalOpen(false);

                                        // Reset form
                                        setCreateTeamspaceName('');
                                        setCreateTeamspaceDescription('');
                                    } catch (error) {
                                        console.error('Failed to create teamspace:', error);
                                        alert('Failed to create teamspace. Please try again.');
                                    }
                                }}>Create teamspace</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* Create Page Modal */}
            {isCreatePageModalOpen && (
                <div className="modal-overlay" style={{ zIndex: 3500 }} onClick={() => setIsCreatePageModalOpen(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()} style={{ width: '400px', padding: '24px' }}>
                        <h2 style={{ marginTop: 0 }}>Create New Page</h2>
                        <input
                            type="text"
                            placeholder="Page title"
                            className="modal-input"
                            style={{ width: '100%', marginBottom: '16px' }}
                            value={createPageTitle}
                            onChange={e => setCreatePageTitle(e.target.value)}
                            autoFocus
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <button className="cancel-btn" onClick={() => setIsCreatePageModalOpen(false)}>Cancel</button>
                            <button className="create-btn-primary" onClick={async () => {
                                if (!createPageTitle.trim()) return;
                                try {
                                    const created = await pageService.create({
                                        title: createPageTitle.trim(),
                                        teamspaceId: Number(activeTeamspaceId)
                                    });
                                    setPages(prev => [...prev, created]);
                                    setCreatePageTitle('');
                                    setIsCreatePageModalOpen(false);
                                } catch (error) {
                                    console.error('Failed to create page:', error);
                                    alert('Failed to create page');
                                }
                            }}>Create Page</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};

export default DashboardPage;

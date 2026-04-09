import React from 'react';
import './ITPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ChevronDown,
    Plus,
    ArrowRight,
    TrendingUp,
    School as SchoolIcon,
    User as UserIcon,
    Search as SearchIcon
} from 'lucide-react';

const ITPage: React.FC = () => {
    return (
        <div className="it-page">
            <Navbar />
            {/* Marketplace Sub-Header */}
            <div className="marketplace-subnav">
                <div className="it-container subnav-content">
                    <div className="marketplace-logo">
                        <span style={{ fontSize: '20px' }}>📁</span> Marketplace
                    </div>
                    <div className="subnav-actions">
                        <div className="subnav-tabs">
                            <span className="active"><TrendingUp size={16} /> Work</span>
                            <span><SchoolIcon size={16} /> School</span>
                            <span><UserIcon size={16} /> Life</span>
                        </div>
                        <div className="search-mini">
                            <SearchIcon size={14} color="#999" />
                            <input type="text" placeholder="Search 30,000+ templates" />
                        </div>
                    </div>
                </div>
            </div>

            <main className="it-container">
                {/* Hero */}
                <section className="it-hero">
                    <div className="breadcrumbs">Categories {'>'} Project Management {'>'} 🎫 Ticketing</div>
                    <div className="hero-icon-title">
                        <span className="hero-icon">🎫</span>
                        <h1>Ticketing templates</h1>
                    </div>
                    <p>Running an effective support desk requires a consistent and efficient workflow. Notion's ticketing templates help teams track ticket status, manage assigned tasks, and provide outstanding customer service. Whether you're managing a small team or a large enterprise, our robust templates can be tailored to match your specific needs.</p>
                    <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>Get Notion free</button>
                </section>

                {/* Categories */}
                <div className="category-row">
                    {[
                        { icon: '⚖️', title: 'New Hire Onboarding', count: '123 templates' },
                        { icon: '🎟️', title: 'Applicant Tracking', count: '57 templates' },
                        { icon: '🐞', title: 'Bug Tracking', count: '48 templates' },
                        { icon: '💬', title: 'Customer Feedback Tracker', count: '123 templates' },
                        { icon: '📄', title: 'IT Support', count: '53 templates' }
                    ].map((cat, i) => (
                        <div key={i} className="cat-card">
                            <div className="cat-icon">{cat.icon}</div>
                            <h4>{cat.title}</h4>
                            <span>{cat.count}</span>
                        </div>
                    ))}
                </div>

                {/* Toolbar */}
                <div className="template-toolbar">
                    <div className="toolbar-left">
                        <button className="filter-btn">Notion + creators <ChevronDown size={14} /></button>
                        <button className="filter-btn">Free + paid <ChevronDown size={14} /></button>
                        <button className="filter-btn">Popular <ChevronDown size={14} /></button>
                    </div>
                    <div style={{ fontSize: '13px', color: '#666' }}>450 Templates</div>
                </div>

                {/* Template Grid */}
                <div className="template-grid">
                    {[
                        { title: 'New Hire Onboarding', creator: 'Notion', tag: 'Free', featured: true },
                        { title: 'Applicant tracker', creator: 'Notion', tag: 'Free', featured: true },
                        { title: 'Report a Bug', creator: 'Notion', tag: 'Free', featured: true },
                        { title: "Mercer's Hiring Tracker", creator: 'Mercer', tag: 'Free' },
                        { title: 'UAT Tracker for Digital Health Startups', creator: 'Bluematrix Solutions', tag: 'Free' },
                        { title: 'Company Home & Employee Onboarding', creator: 'Murad', tag: 'Free' },
                        { title: 'Recruitment Candidate & Talents CRM', creator: 'Notion4Business', tag: 'Free' },
                        { title: 'Client Testimonial Manager', creator: 'That Vibe Coder', tag: 'Free' },
                        { title: 'Service Desk Ticket Management System', creator: 'Loud Minion', tag: 'Free' }
                    ].map((tpl, i) => (
                        <div key={i} className="template-card">
                            <div className="card-preview">
                                {tpl.featured && <span className="featured-badge">Featured</span>}
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                                    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '4px', border: '1px solid #eee' }}>
                                        <div style={{ padding: '8px' }}>
                                            <div style={{ height: '8px', width: '40%', background: '#f5f5f5', marginBottom: '8px' }}></div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                                                <div style={{ height: '20px', background: '#fafafa', borderRadius: '2px' }}></div>
                                                <div style={{ height: '20px', background: '#fafafa', borderRadius: '2px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{tpl.title}</h3>
                                <div className="card-meta">
                                    <div className="card-creator">
                                        <div className="creator-avatar"></div>
                                        {tpl.creator}
                                    </div>
                                    <div className="card-tags">{tpl.tag}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <section className="it-faq">
                    <h2>FAQs</h2>
                    {[
                        "Does Notion support project templates for different industries?",
                        "Do Notion project management tools allow custom workflow creation?",
                        "What does \"composable project management\" mean?",
                        "Is Notion good for project management?",
                        "What project management templates should I start with?",
                        "Can I manage Agile projects in Notion?",
                        "How do Notion templates compare to spreadsheets or docs?"
                    ].map((q, i) => (
                        <div key={i} className="faq-item">
                            <h4>{q}</h4>
                            <Plus size={18} color="#999" />
                        </div>
                    ))}
                </section>

                {/* Creator CTA */}
                <section className="creator-cta">
                    <div className="cta-visual">
                        <div style={{ width: '100%', maxWidth: '400px', display: 'inline-block' }}>
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="40" fill="#F7F6F3" />
                                <rect x="30" y="30" width="40" height="40" rx="4" stroke="#333" strokeWidth="2" />
                                <path d="M40 50L45 55L60 40" stroke="#007AFF" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <div className="cta-text">
                        <h2>Become a creator</h2>
                        <p>Submit your template to the Notion template gallery, get featured, and even get paid — all in just a few clicks.</p>
                        <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>Get started <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ITPage;

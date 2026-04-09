import React from 'react';
import './MarketingPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ChevronDown,
    Plus,
    ArrowRight,
    Search as SearchIcon,
    TrendingUp,
    School as SchoolIcon,
    User as UserIcon
} from 'lucide-react';

const MarketingPage: React.FC = () => {
    return (
        <div className="marketing-page">
            <Navbar />

            {/* Marketplace Sub-Header */}
            <div className="marketplace-subnav">
                <div className="marketing-container subnav-content">
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

            <main className="marketing-container">
                {/* Hero */}
                <section className="marketing-hero">
                    <div className="breadcrumbs">Categories {'>'} Work {'>'} 📢 Marketing</div>
                    <div className="hero-icon-title">
                        <span className="hero-icon">📢</span>
                        <h1>Marketing templates</h1>
                    </div>
                    <p>Elevate your marketing strategy with Notion's diverse templates, designed for campaign planning, content calendars, SEO tracking, and social media management. Tailored for teams and individuals, these tools streamline workflows, ensuring efficiency and growth.</p>
                    <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>Get Notion free</button>
                </section>

                {/* Categories */}
                <div className="category-row">
                    {[
                        { icon: '📅', title: 'Content Calendar', count: '773 templates' },
                        { icon: '🚀', title: 'Product Launch Plan', count: '165 templates' },
                        { icon: '📊', title: 'Marketing Strategy Doc', count: '206 templates' },
                        { icon: '🎨', title: 'Brand Guidelines', count: '185 templates' },
                        { icon: '💼', title: 'Campaign Brief', count: '45 templates' },
                        { icon: '📱', title: 'Social Media', count: '1,438 templates' }
                    ].map((cat, i) => (
                        <div key={i} className="cat-card">
                            <div className="cat-icon">{cat.icon}</div>
                            <h4>{cat.title}</h4>
                            <span>{cat.count}</span>
                        </div>
                    ))}
                </div>
                <div style={{ color: '#007AFF', fontWeight: 600, fontSize: '14px', marginBottom: '40px', cursor: 'pointer' }}>+ 16 more categories</div>

                {/* Toolbar */}
                <div className="template-toolbar">
                    <div className="toolbar-left">
                        <button className="filter-btn">Notion + creators <ChevronDown size={14} /></button>
                        <button className="filter-btn">Free + paid <ChevronDown size={14} /></button>
                        <button className="filter-btn">Popular <ChevronDown size={14} /></button>
                    </div>
                    <div style={{ fontSize: '13px', color: '#666' }}>3,633 Templates</div>
                </div>

                {/* Template Grid */}
                <div className="template-grid">
                    {[
                        { title: 'Content Calendar', creator: 'Notion', tag: 'Free', featured: true },
                        { title: 'Marketing Team In-a-Box', creator: 'Notion', tag: 'Free', featured: true },
                        { title: 'Social Media Content Planner', creator: 'Immi', tag: 'Free' },
                        { title: 'YouTube Planner', creator: 'Orion Crest', tag: 'Free' },
                        { title: 'Blog Content Management', creator: 'heyismail', tag: 'Free' },
                        { title: 'Simple shopping list', creator: 'Misa', tag: 'Free' }
                    ].map((tpl, i) => (
                        <div key={i} className="template-card">
                            <div className="card-preview">
                                {tpl.featured && <span className="featured-badge">Featured</span>}
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ width: '80%', height: '70%', background: '#fff', borderRadius: '4px', opacity: 0.8 }}></div>
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
                <section className="marketing-faq">
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

export default MarketingPage;

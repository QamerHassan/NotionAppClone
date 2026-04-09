import React from 'react';
import './TemplatesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Search,
    Briefcase,
    GraduationCap,
    Heart,
    ArrowRight
} from 'lucide-react';

const TemplatesPage: React.FC = () => {
    return (
        <div className="templates-page">
            <Navbar />

            <main className="tmp-container" style={{ paddingTop: '80px' }}>
                {/* Sub Header */}
                <div className="tmp-sub-nav">
                    <div className="tmp-sub-nav-left">
                        <span style={{ fontSize: '18px' }}>🕹️</span>
                        <span>Marketplace</span>
                    </div>
                    <div className="tmp-sub-nav-right">
                        <div className="tmp-sub-nav-item"><Briefcase size={16} color="#FF6347" /> Work</div>
                        <div className="tmp-sub-nav-item"><GraduationCap size={16} color="#9370DB" /> School</div>
                        <div className="tmp-sub-nav-item"><Heart size={16} color="#20B2AA" /> Life</div>
                    </div>
                </div>

                {/* Hero */}
                <section className="tmp-hero">
                    <div>
                        <h1>Discover</h1>
                        <p>Find all the best templates and set-ups built by Notion's community</p>
                    </div>
                    <div className="tmp-search-container">
                        <Search className="tmp-search-icon" size={18} />
                        <input type="text" className="tmp-search-input" placeholder="Search 30,000+ templates" />
                    </div>
                </section>

                {/* Promo Banner */}
                <section className="tmp-promo-banner">
                    <div className="tmp-promo-content">
                        <span className="tag">Consultants</span>
                        <h2>Work smarter with Notion experts</h2>
                        <p>Get personalized 1:1 help for your Notion setup from certified Consulting Partners covering integrations, automations, and training.</p>
                    </div>
                    <div className="tmp-promo-illustration">
                        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="200" height="120" rx="12" fill="#fff" stroke="#333" strokeWidth="2" />
                            <circle cx="100" cy="100" r="20" fill="#f7f6f3" stroke="#333" strokeWidth="2" />
                            <circle cx="200" cy="100" r="20" fill="#f7f6f3" stroke="#333" strokeWidth="2" />
                            <path d="M120 100H180" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>
                </section>

                {/* Categories */}
                <section className="tmp-category-row">
                    {[
                        { icon: '❄️', title: 'New Years', count: '5,455' },
                        { icon: '📅', title: 'Personal Planner', count: '8,065' },
                        { icon: '✅', title: 'Habit Tracking', count: '2,772' },
                        { icon: '❄️', title: 'Seasonal', count: '5,954' },
                        { icon: '🏃', title: 'Student Life', count: '5,930' }
                    ].map((c, i) => (
                        <div className="tmp-cat-card" key={i}>
                            <span className="icon">{c.icon}</span>
                            <h4>{c.title}</h4>
                            <span>{c.count} templates</span>
                        </div>
                    ))}
                </section>

                {/* Consultants */}
                <section>
                    <div className="tmp-section-header">
                        <h2>Featured consultants</h2>
                        <div className="tmp-browse-all">Browse 105 consultants <ArrowRight size={16} /></div>
                    </div>
                    <div className="tmp-consultant-grid">
                        {[
                            { name: 'Simone Smerilli', desc: '"Everything is built on sand, but we must build as if the sand were stone."' },
                            { name: 'Workcraft | Workspaces, Automation & AI for Teams', desc: 'As a Notion Certified Consultant, Dave has led workflow optimization...' },
                            { name: 'aNotioneer', desc: 'I\'m a full time self-employed Notion consultant with more than 5...' },
                            { name: 'Lou Attal Studio', desc: 'Consultante Notion Partenaire. Nous accompagnons les entreprises dans...' },
                            { name: 'Primary Goals', desc: 'As a business grows, processes become complex and start to break down.' },
                            { name: 'Nick Janes | iGeekuPlay', desc: 'Dev background meets Notion expertise. I architect custom...' },
                            { name: 'noxen+produteka', desc: 'Growth brings talent and ideas—and also chaos, friction, and wasted...' },
                            { name: 'Sanja Veletanlic', desc: 'Hi, I\'m Sanja. Since 2019, I\'ve worked with clients worldwide and...' }
                        ].map((c, i) => (
                            <div className="tmp-consultant-card" key={i}>
                                <div className="tmp-consultant-avatar"></div>
                                <h3>{c.name}</h3>
                                <p>{c.desc}</p>
                                <div className="tmp-consultant-actions">
                                    <button className="tmp-btn-sm tmp-btn-white">View profile</button>
                                    {i !== 3 && i !== 7 && <button className="tmp-btn-sm tmp-btn-blue">Book</button>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Templates Grid */}
                <section>
                    <div className="tmp-section-header">
                        <h2>Featured templates</h2>
                    </div>
                    <div className="tmp-templates-grid">
                        {[
                            { title: 'Goal Planner 2026 | Vision Board & Goal Setting', author: 'Sarah', price: 'Free' },
                            { title: 'The 2026 Ultimate Yearly Reset', author: 'Nika Erculj', price: '$7.99' },
                            { title: '2026 Goal Tracker', author: 'Jithin Rajiv', price: 'Free' },
                            { title: '2026 Journal & Planner', author: 'siddh', price: 'Free' },
                            { title: '75 Hard Challenge Tracker', author: 'DiaryOfAHotGirl', price: 'Free' },
                            { title: 'Budget & Finance Tracker PRO', author: 'Katia Creates', price: '$2.99' }
                        ].map((t, i) => (
                            <div className="tmp-template-card" key={i}>
                                <div className="tmp-template-preview"></div>
                                <div className="tmp-template-info">
                                    <div>
                                        <div className="tmp-template-title">{t.title}</div>
                                        <div className="tmp-template-meta">
                                            <div className="tmp-author-avatar"></div>
                                            <span className="tmp-template-author">{t.author}</span>
                                        </div>
                                    </div>
                                    <div className="tmp-template-price">{t.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Collections */}
                <section>
                    <div className="tmp-section-header">
                        <h2>Featured collections</h2>
                        <div className="tmp-browse-all">Browse 2,050 collections <ArrowRight size={16} /></div>
                    </div>
                    <div className="tmp-collections-row">
                        <div className="tmp-collection-card">
                            <div className="tmp-collection-content">
                                <span style={{ fontSize: '12px', color: '#ff6b6b' }}>📅 Holidays</span>
                                <h3>Holiday essentials</h3>
                                <p>Everything you need for hosting, parties, and celebrating the holiday season.</p>
                            </div>
                            <div style={{ fontSize: '48px' }}>🎁</div>
                        </div>
                        <div className="tmp-collection-card">
                            <div className="tmp-collection-content">
                                <span style={{ fontSize: '12px', color: '#ff6b6b' }}>🎯 Goals</span>
                                <h3>Habits that stick</h3>
                                <p>Habit tracking systems to help you stay consistent.</p>
                            </div>
                            <div style={{ fontSize: '48px' }}>👟</div>
                        </div>
                    </div>
                </section>

                {/* Creators */}
                <section>
                    <div className="tmp-section-header">
                        <h2>Featured creators</h2>
                        <div className="tmp-browse-all">Browse 17,829 creators <ArrowRight size={16} /></div>
                    </div>
                    <div className="tmp-consultant-grid">
                        {[
                            { name: 'Nika Erculj', desc: 'Sharing everything you need to change your life for the better ✨', meta: '3 templates' },
                            { name: 'She Notions', desc: 'I specialize in crafting aesthetically pleasing Notion templates that...', meta: '17 templates' },
                            { name: 'MindBlocks', desc: 'The Operating System for your mind > MoodOS! Understand yourself through...', meta: '48 templates' },
                            { name: 'Ben', desc: 'I love building things, and am trying my hand at creating beautifully...', meta: '9 templates' }
                        ].map((c, i) => (
                            <div className="tmp-consultant-card" key={i}>
                                <div className="tmp-consultant-avatar"></div>
                                <h3>{c.name}</h3>
                                <p>{c.desc}</p>
                                <span style={{ fontSize: '12px', color: '#999' }}>{c.meta}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Section */}
                <section className="tmp-become-creator">
                    <div className="tmp-promo-illustration">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="#f7f6f3" />
                            <path d="M60 140C70 110 130 110 140 140" stroke="#333" strokeWidth="4" />
                            <circle cx="80" cy="80" r="10" fill="#333" />
                            <circle cx="120" cy="80" r="10" fill="#333" />
                        </svg>
                    </div>
                    <div className="tmp-creator-content">
                        <h2>Become a creator</h2>
                        <p>Submit your template to the Notion template gallery, get featured, and even get paid — all in just a few clicks.</p>
                        <button className="btn-black" style={{ background: '#1a1a1a', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Get started →</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default TemplatesPage;

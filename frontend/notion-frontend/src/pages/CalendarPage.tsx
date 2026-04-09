import React from 'react';
import './CalendarPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Plus,
    Monitor,
    Smartphone,
    Clock,
    Globe,
    Zap
} from 'lucide-react';

const CalendarPage: React.FC = () => {
    return (
        <div className="calendar-page">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="calendar-hero">
                    <div className="floating-icons-container">
                        <div className="floating-icon icon-laptop">💻</div>
                        <div className="floating-icon icon-basketball">🏀</div>
                        <div className="floating-icon icon-cat">🐱</div>
                        <div className="floating-icon icon-doc">📄</div>
                        <div className="floating-icon icon-list">📋</div>
                        <div className="floating-icon icon-bike">🚲</div>
                        <div className="floating-icon icon-coffee">☕</div>
                    </div>

                    <div className="calendar-container">
                        <div className="calendar-hero-logo">
                            <div className="calendar-icon-wrapper">
                                <span style={{ fontSize: 14, fontWeight: 600, borderBottom: '2px solid #fff', width: '100%', textAlign: 'center' }}>JAN</span>
                                8
                            </div>
                            <span className="hero-subtitle">Notion Calendar</span>
                        </div>
                        <h1>It’s time.</h1>
                        <p>All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.</p>
                        <button className="calendar-btn-large">Get Notion Calendar free</button>

                        <div className="main-visual-mockup">
                            <div className="mockup-img-container">
                                <div style={{ background: '#fff', borderRadius: 12, height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 32, color: '#eee' }}>
                                    Calendar Interface Mockup
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simplified Section */}
                <section className="calendar-container">
                    <div className="simplified-section">
                        <h2>Time management, simplified.</h2>
                        <div className="menu-bar-mockup">
                            <div style={{ background: '#f7f6f3', height: 400, padding: 30 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#666', fontSize: 13, marginBottom: 20 }}>
                                    <Zap size={14} /> See your schedule at a glance
                                </div>
                                <div style={{ background: '#fff', borderRadius: 8, padding: 15, border: '1px solid #efefef', textAlign: 'left' }}>
                                    <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 13 }}>Upcoming in 45m</div>
                                    <div style={{ height: 1, background: '#eee', marginBottom: 12 }}></div>
                                    {[
                                        { time: '10:00 AM', label: 'All Hands' },
                                        { time: '11:00 AM', label: 'Tomas / Stephanie (6w)', active: true },
                                        { time: '12:00 PM', label: 'DS Quarterly Outreach' },
                                        { time: '12:30 PM', label: 'Data Science Team Meets' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: 12, background: item.active ? '#eef1f5' : 'transparent', margin: item.active ? '0 -15px' : '0', paddingLeft: item.active ? 15 : 0 }}>
                                            <span style={{ color: '#999' }}>{item.time}</span>
                                            <span style={{ fontWeight: 600 }}>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="calendar-features-grid">
                        <div className="feature-panel">
                            <Clock size={20} color="#4a90e2" />
                            <h3>Built-in scheduling</h3>
                            <p>Send your availability and scheduling link to let others book time with you. No separate app.</p>
                            <div className="feature-panel-visual" style={{ height: 200 }}></div>
                        </div>
                        <div className="feature-panel">
                            <Globe size={20} color="#4a90e2" />
                            <h3>Work across time zones</h3>
                            <p>Thoughtfully collaborate with global teams as you visualize your day across time zones.</p>
                            <div className="feature-panel-visual" style={{ height: 200 }}></div>
                        </div>
                        <div className="feature-panel">
                            <Zap size={20} color="#4a90e2" />
                            <h3>Modern design</h3>
                            <p>Use command menu and shortcuts for efficient workflows.</p>
                            <div className="feature-panel-visual" style={{ height: 200 }}></div>
                        </div>
                        <div className="feature-panel">
                            <Plus size={20} color="#4a90e2" />
                            <h3>Available in 12 languages</h3>
                            <p>Supports English, Japanese, Korean, French, German, Spanish, and more.</p>
                            <div className="feature-panel-visual" style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                                <span style={{ fontWeight: 700 }}>Deutsch</span>
                                <span style={{ fontWeight: 700, color: '#4a90e2' }}>Svenska</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration */}
                <section className="bg-light">
                    <div className="calendar-container integration-section">
                        <h2>Fully integrated with your Notion workspace.</h2>
                        <div style={{ height: 500, background: '#fff', borderRadius: 20, border: '1px solid #efefef' }}></div>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="calendar-container">
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2>Designed to work with your favorite tools.</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                        {[
                            { name: 'Notion', desc: 'Bring in important dates across workspaces into one calendar.' },
                            { name: 'Google Calendar', desc: 'Connect Google Calendar with your existing Notion workspace.' },
                            { name: 'Google Meet', desc: 'Available by default with Google Calendar.' },
                            { name: 'Zoom', desc: 'Create new Zoom meetings directly in Notion Calendar.' },
                            { name: 'Apple Calendar', desc: 'Create new Apple Calendar meetings directly in Notion.' },
                            { name: 'Other providers', desc: 'Add a custom link from other popular conferencing services.' }
                        ].map((tool, i) => (
                            <div key={i} style={{ background: '#fafafa', padding: 24, borderRadius: 12 }}>
                                <div style={{ width: 24, height: 24, background: '#eee', borderRadius: 4, marginBottom: 12 }}></div>
                                <h4 style={{ marginBottom: 8 }}>{tool.name}</h4>
                                <p style={{ fontSize: 12, color: '#666' }}>{tool.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Download */}
                <section className="download-section">
                    <div className="calendar-container">
                        <h2>Get Notion Calendar for free.</h2>
                        <a href="#" className="download-link">Get Notion Calendar free →</a>

                        <div className="download-grid">
                            <div className="download-card">
                                <h3><Monitor size={24} /> Desktop App</h3>
                                <div className="card-img-placeholder"></div>
                                <div className="btn-group">
                                    <button className="btn-outline">🍎 macOS</button>
                                    <button className="btn-outline">🪟 Windows</button>
                                </div>
                            </div>
                            <div className="download-card">
                                <h3><Smartphone size={24} /> Mobile App</h3>
                                <div className="card-img-placeholder"></div>
                                <div className="btn-group">
                                    <button className="btn-outline">🍎 Apple App Store</button>
                                    <button className="btn-outline">🤖 Google Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="calendar-container">
                    <h2 className="faq-title">Questions & answers</h2>
                    <div className="faq-container">
                        {[
                            "Which calendar provider(s) is Notion Calendar compatible with?",
                            "Is Notion Calendar available on mobile devices?",
                            "Does Notion Calendar bring Google Calendar sync to Notion?"
                        ].map((q, i) => (
                            <div className="faq-item" key={i}>
                                <div className="faq-question">
                                    {q} <Plus size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default CalendarPage;

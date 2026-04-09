import React from 'react';
import './EnterpriseSearchPage.css';
import Navbar from '../components/Navbar';
import logo from '../assets/notion-logo.png';
import { Search, ShieldCheck, Zap, Lock, Eye, Globe } from 'lucide-react';

const EnterpriseSearchPage: React.FC = () => {
    return (
        <div className="enterprise-search-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="es-hero es-container">
                    <h1>Enterprise Search<br />Every answer, one search.</h1>
                    <p>Answers in seconds and detailed reports delivered in minutes, right where your teams already work.</p>
                    <div className="es-hero-btns">
                        <button className="nav-btn-primary blue" style={{ padding: '12px 24px', fontSize: '16px' }}>Get Notion free</button>
                        <button className="nav-btn-text" style={{ fontSize: '16px', fontWeight: 600 }}>Watch demo video</button>
                    </div>

                    <div className="es-hero-visual">
                        <div className="es-search-box">
                            <Search size={24} />
                            <span>Ask anything across your tools...</span>
                        </div>
                        <div className="es-app-icons">
                            <div className="es-app-icon">📁</div>
                            <div className="es-app-icon">💬</div>
                            <div className="es-app-icon">📝</div>
                            <div className="es-app-icon">📅</div>
                            <div className="es-app-icon">🏷️</div>
                        </div>
                        <div style={{ position: 'absolute', top: '20px', right: '40px', background: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '14px', textAlign: 'left' }}>
                            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Found 3 results</div>
                            <div style={{ color: '#666' }}>Shared by Engineering team</div>
                        </div>
                    </div>
                </section>

                <section className="es-compare es-container">
                    <h2>How does Notion stack up?</h2>
                    <p style={{ fontSize: '20px', marginBottom: '16px' }}>See a side-by-side breakdown of features, security, and value to understand why teams choose Notion.</p>
                    <a href="#" className="es-compare-link">Compare Notion and Glean →</a>
                </section>

                <section className="es-features es-container">
                    <div className="es-feature-row">
                        <div className="es-feature-content">
                            <div style={{ color: '#007aff', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>AI Connectors</div>
                            <h3>Find answers, wherever they’re hiding.</h3>
                            <p>Search across apps. With AI connectors, you can integrate your favorite work tools. Notion AI will search across all of them to find exactly what you need.</p>
                            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <Zap size={24} color="#007aff" />
                                    <div>
                                        <div style={{ fontWeight: 700 }}>Instant answers</div>
                                        <div style={{ fontSize: '14px', color: '#666' }}>Get up-to-date answers with context to unblock work.</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <ShieldCheck size={24} color="#007aff" />
                                    <div>
                                        <div style={{ fontWeight: 700 }}>Results you can trust</div>
                                        <div style={{ fontSize: '14px', color: '#666' }}>Every answer includes verified content and citations.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="es-feature-visual">🔍</div>
                    </div>

                    <div className="es-feature-row reverse">
                        <div className="es-feature-content">
                            <div style={{ color: '#007aff', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>Research Mode</div>
                            <h3>Research Mode: search that does the work.</h3>
                            <p>Create detailed reports in minutes that you can save and share, pulling from all your sources and the web.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{ display: 'flex', gap: '8px', fontWeight: 600 }}>✓ Saves you days of time</li>
                                <li style={{ display: 'flex', gap: '8px', fontWeight: 600 }}>✓ Thinks hard for you</li>
                                <li style={{ display: 'flex', gap: '8px', fontWeight: 600 }}>✓ Writes ready-to-share reports</li>
                            </ul>
                        </div>
                        <div className="es-feature-visual">📑</div>
                    </div>
                </section>

                <section className="es-testimonials">
                    <div className="es-container">
                        <div className="es-testimonial-grid">
                            <div className="es-testimonial-card">
                                <div className="es-quote">"Notion AI is saving new employees days, if not weeks, of their onboarding to be able to find information quickly."</div>
                                <div className="es-author">Scott Entwistle</div>
                                <div className="es-role">Senior Recruiter, Remote</div>
                            </div>
                            <div className="es-testimonial-card">
                                <div className="es-quote">"We’re getting at least a day back every week! It quickly processes knowledge and provides accurate answers."</div>
                                <div className="es-author">Matthias Lambrecht</div>
                                <div className="es-role">Product Owner, ecosio</div>
                            </div>
                            <div className="es-testimonial-card">
                                <div className="es-quote">"It’s really powerful when Notion AI surfaces organizational knowledge that I didn’t know to look for."</div>
                                <div className="es-author">Faith Lierheimer</div>
                                <div className="es-role">Senior Technical Instructor, dbt Labs</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="es-security es-container">
                    <h2>Search safely.</h2>
                    <div className="es-security-grid">
                        <div className="es-security-item">
                            <Lock size={32} style={{ marginBottom: '20px' }} />
                            <h4>Follows permissions</h4>
                            <p>Notion AI only surfaces information that you have permission to access.</p>
                        </div>
                        <div className="es-security-item">
                            <Eye size={32} style={{ marginBottom: '20px' }} />
                            <h4>No training on your data</h4>
                            <p>We do not use customer data to train AI models.</p>
                        </div>
                        <div className="es-security-item">
                            <Globe size={32} style={{ marginBottom: '20px' }} />
                            <h4>Control where you search</h4>
                            <p>You choose which apps, sources, and AI models to search.</p>
                        </div>
                    </div>
                </section>

                <section className="es-cta-footer es-container">
                    <h2>The AI workspace that does it all.</h2>
                    <button className="nav-btn-primary blue" style={{ padding: '16px 32px', fontSize: '18px' }}>Try for free</button>
                </section>
            </main>

            {/* Reusing Footer from UseCases */}
            <footer className="es-container" style={{ padding: '80px 40px', borderTop: '1px solid #f1f1f1', marginTop: '80px' }}>
                <div style={{ display: 'flex', gap: '80px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '20px', marginBottom: '24px' }}>
                            <img src={logo} alt="" style={{ width: '24px' }} /> Notion
                        </div>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '20px', opacity: 0.6 }}>
                            📸 ✖️ 🔗 👤 🎥
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', flex: 1 }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Company</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>About us</span><span>Careers</span><span>Security</span><span>Status</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Download</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>iOS & Android</span><span>Mac & Windows</span><span>Calendar</span><span>Web Clipper</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Resources</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>Help center</span><span>Pricing</span><span>Blog</span><span>Community</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Notion for</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>Enterprise</span><span>Small business</span><span>Personal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '60px', fontSize: '12px', color: '#666' }}>
                    © 2026 Notion Labs, Inc.
                </div>
            </footer>
        </div>
    );
};

export default EnterpriseSearchPage;

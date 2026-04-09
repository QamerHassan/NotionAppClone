import React from 'react';
import './EngineeringProductPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Book,
    MessageSquare,
    Map,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';

const EngineeringProductPage: React.FC = () => {
    return (
        <div className="eng-product-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="eng-product-hero eng-product-container">
                    <div className="eng-product-hero-content">
                        <h1>Product development, simplified.</h1>
                        <p>Build better products faster by streamlining your entire development process in one connected hub.</p>
                        <div className="eng-product-hero-btns">
                            <button className="btn-primary btn-large">Request a Demo</button>
                            <button className="btn-secondary btn-large">Try for free</button>
                        </div>
                    </div>
                </section>

                {/* Logos Section */}
                <section className="eng-product-logos eng-product-container">
                    <div className="eng-product-logo-grid">
                        <span>OpenAI</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '20px', height: '20px', background: '#333', borderRadius: '4px' }}></div>
                            <span style={{ fontWeight: 800 }}>Figma</span>
                        </div>
                        <span style={{ color: '#00D1B2' }}>MatchGroup</span>
                        <span style={{ color: '#000' }}>cohere</span>
                        <span style={{ fontWeight: 800 }}>▲ Vercel</span>
                        <span style={{ fontWeight: 800 }}>ramp ⬘</span>
                    </div>
                </section>

                {/* Bento Grid Features */}
                <section className="eng-product-container" style={{ marginTop: '80px' }}>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <div className="bento-icon"><Book size={24} color="#007AFF" /></div>
                            <h3>Knowledge base</h3>
                            <p>One searchable home for your specs, OKRs, and legacy docs.</p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon"><MessageSquare size={24} color="#FF9500" /></div>
                            <h3>Customer Feedback</h3>
                            <p>Turn user feedback into actionable insights.</p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon"><Map size={24} color="#FF2D55" /></div>
                            <h3>Roadmap planning</h3>
                            <p>Build effective roadmaps your whole team can see, shape, and ship.</p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon"><CheckCircle2 size={24} color="#AF52DE" /></div>
                            <h3>Project and issue tracking</h3>
                            <p>Track every sprint, bug, launch across all your tools & teams.</p>
                        </div>
                    </div>
                </section>

                {/* Interaction Showcase Block */}
                <section className="eng-product-container" style={{ marginBottom: '120px' }}>
                    <div className="showcase-section">
                        <div className="showcase-header">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="showcase-content">
                            <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '20px', marginBottom: '20px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#F7F6F3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🚀</div>
                                <div>
                                    <h2 style={{ fontSize: '28px', fontWeight: 700 }}>Task Tracker</h2>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                {['Project', 'Priority', 'Status', 'GitHub PR'].map(header => (
                                    <div key={header} style={{ fontSize: '12px', fontWeight: 600, color: '#999', textTransform: 'uppercase' }}>{header}</div>
                                ))}
                                {/* Mock Data Rows */}
                                <div style={{ fontSize: '14px', fontWeight: 500 }}>Redesigned in-product help center</div>
                                <div><span style={{ padding: '2px 8px', background: '#FFE5E5', color: '#FF3B30', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>High</span></div>
                                <div><span style={{ padding: '2px 8px', background: '#E5FBF0', color: '#28CD41', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>Done</span></div>
                                <div style={{ color: '#007AFF', fontSize: '12px' }}>#104250 Merged</div>

                                <div style={{ fontSize: '14px', fontWeight: 500 }}>Mobile experience optimizations</div>
                                <div><span style={{ padding: '2px 8px', background: '#FFF7E5', color: '#FF9500', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>Medium</span></div>
                                <div><span style={{ padding: '2px 8px', background: '#F2F2F7', color: '#555', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>QA</span></div>
                                <div style={{ color: '#007AFF', fontSize: '12px' }}>#107341 Open</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect Workspace Section */}
                <section className="value-prop-section eng-product-container">
                    <h2>Ship better products faster with a connected workspace.</h2>
                    <div className="value-prop-grid">
                        <div className="value-prop-card">
                            <h3>End-to-end product development in one place</h3>
                            <p>Analyze customer feedback, write PRDs, track progress, and build launch plans in one connected workspace.</p>
                            <div className="mock-ui">
                                <div style={{ height: '100%', border: '1px solid #eee', borderRadius: '8px', padding: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        <div style={{ width: '20px', height: '20px', background: '#eee' }}></div>
                                        <div style={{ height: '12px', width: '100px', background: '#eee' }}></div>
                                    </div>
                                    <div style={{ height: '8px', width: '80%', background: '#f5f5f5', marginBottom: '8px' }}></div>
                                    <div style={{ height: '8px', width: '60%', background: '#f5f5f5' }}></div>
                                    <div style={{ marginTop: '20px', height: '120px', background: '#F7F6F3', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="value-prop-card">
                            <h3>One home for all your tools</h3>
                            <p>Connect essential apps and only see what you need. Less context-switching, more flow.</p>
                            <div className="mock-ui">
                                <div style={{ height: '100%', border: '1px solid #eee', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '24px', height: '24px', background: '#333', borderRadius: '4px' }}></div>
                                        <span style={{ fontWeight: 600 }}>Jira Issue Tracker</span>
                                    </div>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} style={{ display: 'flex', gap: '8px' }}>
                                            <div style={{ flex: 1, height: '24px', background: '#F7F6F3', borderRadius: '4px' }}></div>
                                            <div style={{ width: '40px', height: '24px', background: '#E5FBF0', borderRadius: '4px' }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Section */}
                <section className="value-prop-section eng-product-container" style={{ background: '#F7F6F3', margin: '80px auto', borderRadius: '40px' }}>
                    <div style={{ padding: '80px 40px' }}>
                        <div className="value-prop-grid">
                            <div style={{ textAlign: 'left' }}>
                                <span style={{ padding: '4px 12px', background: '#fff', borderRadius: '20px', fontSize: '14px', fontWeight: 600, display: 'inline-block', marginBottom: '20px' }}>AI</span>
                                <h3>AI-driven product development</h3>
                                <p>Speed up cycles with an all-in-one AI assistant designed to help you at every stage of product development.</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                        <ChevronRight size={16} color="#007AFF" /> <span>Draft PRDs and specs instantly</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                        <ChevronRight size={16} color="#007AFF" /> <span>Summarize customer feedback</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <ChevronRight size={16} color="#007AFF" /> <span>Automate status updates</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mock-ui" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <div style={{ height: '30px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                                    <div style={{ fontSize: '10px', color: '#999' }}>Notion AI Assistant</div>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <div style={{ height: '12px', width: '70%', background: '#007AFF', borderRadius: '2px', opacity: 0.1, marginBottom: '12px' }}></div>
                                    <div style={{ height: '12px', width: '90%', background: '#007AFF', borderRadius: '2px', opacity: 0.1, marginBottom: '12px' }}></div>
                                    <div style={{ height: '12px', width: '40%', background: '#007AFF', borderRadius: '2px', opacity: 0.1 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="eng-product-container testimonial-section">
                    <blockquote>“In fast-moving environments with lots of complexity, you need a way to capture all of that and make sense of it. Notion is pretty much the only tool that lets me do that.”</blockquote>
                    <div className="author-info">
                        <span style={{ fontWeight: 800, fontSize: '24px' }}>OpenAI</span>
                        <span style={{ fontWeight: 600 }}>John Allard</span>
                        <span style={{ color: '#666' }}>Engineering, OpenAI</span>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">#1</div>
                            <div className="stat-label">knowledge base and AI writing assistant (G2)</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">94%</div>
                            <div className="stat-label">of Forbes AI 50 teams use Notion</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">90%</div>
                            <div className="stat-label">of Forbes Cloud 100 teams use Notion</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="final-cta-section eng-product-container">
                    <div style={{ width: '100px', height: '100px', margin: '0 auto 40px', background: '#F7F6F3', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                        ⚙️
                    </div>
                    <h2>Welcome to the future of product development.</h2>
                    <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>Talk to an expert and see what’s possible when your product development lives in one connected place.</p>
                    <div className="eng-product-hero-btns">
                        <button className="btn-primary btn-large">Request a Demo</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default EngineeringProductPage;

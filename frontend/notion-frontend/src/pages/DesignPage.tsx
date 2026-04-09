import React, { useState } from 'react';
import './DesignPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Sparkles,
    FileText,
    Layout
} from 'lucide-react';

const DesignPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'wiki' | 'docs' | 'projects'>('projects');

    return (
        <div className="design-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="design-hero design-container">
                    <div className="design-hero-content">
                        <span className="category">Notion for design</span>
                        <h1>Free up time for creative design work</h1>
                        <p>House all your design assets, specs, and projects, and connect them in Notion. So your team can focus on designing.</p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>Get Notion free</button>
                            <button className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600, border: '1px solid #007AFF', color: '#007AFF', background: 'transparent' }}>Request a demo</button>
                        </div>
                    </div>
                    <div className="design-hero-visual">
                        <div style={{ textAlign: 'right' }}>
                            {/* Simple Abstract Design Illustration */}
                            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="150" r="100" fill="#F7F6F3" />
                                <rect x="150" y="100" width="100" height="100" rx="8" stroke="#333" strokeWidth="2" />
                                <path d="M180 150L200 170L240 130" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="300" cy="80" r="20" fill="#FFDADA" />
                                <path d="M280 180Q320 220 360 180" stroke="#333" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Showcase Section */}
                <section className="design-showcase">
                    <div className="design-container">
                        <div className="showcase-tabs">
                            <button
                                className={`tab-btn ${activeTab === 'wiki' ? 'active' : ''}`}
                                onClick={() => setActiveTab('wiki')}
                            >
                                <Sparkles size={18} /> Design wiki
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
                                onClick={() => setActiveTab('docs')}
                            >
                                <FileText size={18} /> Design docs
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                                onClick={() => setActiveTab('projects')}
                            >
                                <Layout size={18} /> Design projects
                            </button>
                        </div>

                        <div className="showcase-display">
                            <div className="browser-frame">
                                <div className="browser-top">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>
                                <div style={{ height: '500px', background: '#fff', padding: '40px' }}>
                                    {activeTab === 'projects' && (
                                        <div>
                                            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Client Projects</h2>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                                                {['Planning', 'In Progress', 'Waiting'].map(status => (
                                                    <div key={status} style={{ background: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
                                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '12px', display: 'block' }}>{status.toUpperCase()}</span>
                                                        <div style={{ background: '#fff', border: '1px solid #eee', padding: '12px', borderRadius: '6px', marginBottom: '8px' }}>
                                                            <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>WSJ Website Redesign</div>
                                                            <div style={{ fontSize: '12px', color: '#999' }}>Feb 1, 2026</div>
                                                        </div>
                                                        <div style={{ background: '#fff', border: '1px solid #eee', padding: '12px', borderRadius: '6px' }}>
                                                            <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Nike Product Spec</div>
                                                            <div style={{ fontSize: '12px', color: '#999' }}>Feb 10, 2026</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'wiki' && (
                                        <div>
                                            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '32px' }}>Design Wiki</h2>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                                <div>
                                                    <h4 style={{ marginBottom: '16px', color: '#666' }}>Guides & Processes</h4>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                        <span>💎 Design System</span>
                                                        <span>🍎 Design principles</span>
                                                        <span>🎨 Style Guide</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 style={{ marginBottom: '16px', color: '#666' }}>Assets</h4>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                        <span>📁 Brand Assets</span>
                                                        <span>📸 Office Photos</span>
                                                        <span>🧪 Experiments</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'docs' && (
                                        <div style={{ maxWidth: '600px' }}>
                                            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Product Requirement Doc</h2>
                                            <p style={{ color: '#666', marginBottom: '32px' }}>Created by Design Team • Feb 1, 2026</p>
                                            <div style={{ marginBottom: '24px' }}>
                                                <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px' }}>Objective</h4>
                                                <div style={{ height: '12px', width: '100%', background: '#f5f5f5', marginBottom: '8px' }}></div>
                                                <div style={{ height: '12px', width: '80%', background: '#f5f5f5' }}></div>
                                            </div>
                                            <div>
                                                <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px' }}>Timeline</h4>
                                                <div style={{ height: '12px', width: '100%', background: '#f5f5f5' }}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="phone-frame">
                                <div style={{ height: '100%', background: '#fff', padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 700 }}>9:41</div>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <div style={{ width: '12px', height: '8px', border: '1px solid #000' }}></div>
                                            <div style={{ width: '8px', height: '8px', background: '#000', borderRadius: '50%' }}></div>
                                        </div>
                                    </div>
                                    <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px' }}>{activeTab === 'wiki' ? 'Design Wiki' : activeTab === 'projects' ? 'Projects' : 'PRD'}</h4>
                                    <div style={{ height: '10px', background: '#F7F6F3', borderRadius: '2px', marginBottom: '8px' }}></div>
                                    <div style={{ height: '10px', background: '#F7F6F3', borderRadius: '2px', marginBottom: '8px', width: '80%' }}></div>
                                    <div style={{ height: '100px', background: '#f9f9f9', borderRadius: '8px', marginTop: '20px', border: '1px solid #eee' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logos Section */}
                <section className="design-logos design-container">
                    <h2>Design orgs of all sizes stay nimble in Notion</h2>
                    <div className="logo-grid">
                        <span>codecademy</span>
                        <span>MITSUBISHI</span>
                        <span>headspace</span>
                        <span>Curology</span>
                        <span>branch</span>
                        <span>MatchGroup</span>
                        <span>Typeform</span>
                        <span>mixpanel</span>
                        <span>monzo</span>
                        <span>1Password</span>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="design-quote design-container">
                    <blockquote>“If creative people spent more time organizing the ideas they've already got, they would make more of an impact. That's where Notion comes in.”</blockquote>
                    <div className="quote-author">
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>Scott Belsky</span>
                        <span style={{ color: '#666' }}>CPO of Adobe</span>
                    </div>
                </section>

                {/* Design System Section */}
                <section className="design-container section-split">
                    <div className="section-text">
                        <h2>Organize every part of your design system</h2>
                        <p>Instead of prototypes in Figma, logos in Google Drive, and tasks in Trello, create a visual hierarchy with all information — no matter the file type — side by side and easily searchable.</p>
                    </div>
                    <div className="section-visual">
                        <div style={{ background: '#f7f6f3', borderRadius: '24px', height: '400px', position: 'relative', overflow: 'hidden', padding: '40px' }}>
                            <div style={{ background: '#fff', borderRadius: '12px', height: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', padding: '24px' }}>
                                <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>✨ Design Wiki</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <div style={{ fontWeight: 600, marginBottom: '12px' }}>Guides</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '16px', height: '16px', background: '#eee' }}></div> Design System</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '16px', height: '16px', background: '#eee' }}></div> Design principles</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, marginBottom: '12px' }}>Assets</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '16px', height: '16px', background: '#eee' }}></div> Brand Assets</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '16px', height: '16px', background: '#eee' }}></div> Office Photos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kanban Section */}
                <section className="design-container section-split" style={{ flexDirection: 'row-reverse' }}>
                    <div className="section-text">
                        <h2>Scale your unique design process</h2>
                        <p>Whether you’re a product designer fielding requests from stakeholders or an agency juggling clients, Notion lets you create custom workflows for every project. So you can execute your particular brainstorming or research method, and change it up anytime.</p>
                    </div>
                    <div className="section-visual">
                        <div className="kanban-mockup">
                            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>✓ Design Tasks</h3>
                            <div className="kanban-cols">
                                <div className="kanban-col">
                                    <h4 style={{ background: '#FFE5E5', color: '#FF3B30' }}>Not Started</h4>
                                    <div className="kanban-item">Standardize Typography</div>
                                </div>
                                <div className="kanban-col">
                                    <h4 style={{ background: '#FFF7E5', color: '#FF9500' }}>Next Up</h4>
                                    <div className="kanban-item">Name colors in secondary palette</div>
                                    <div className="kanban-item">Audit button colors</div>
                                </div>
                                <div className="kanban-col">
                                    <h4 style={{ background: '#E5FBF0', color: '#28CD41' }}>In Progress</h4>
                                    <div className="kanban-item">Front end design system</div>
                                    <div className="kanban-item">Export logos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Migration Section */}
                <section className="design-container section-split">
                    <div className="section-text">
                        <h2>Migrate without the hours of manual work</h2>
                        <p>We have Confluence, Google Docs, Asana, and Trello importers that make it easy to move over all your files stress-free.</p>
                        <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 600, marginTop: '24px' }}>Get Notion free</button>
                    </div>
                    <div className="section-visual">
                        <div style={{ background: '#F7F6F3', borderRadius: '12px', padding: '40px' }}>
                            <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
                                <div style={{ background: '#f5f5f5', padding: '12px', fontSize: '12px', fontWeight: 700 }}>Import</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '16px' }}>
                                    {['Asana', 'Confluence', 'Evernote', 'Google Docs', 'Trello', 'Dropbox Paper'].map(tool => (
                                        <div key={tool} style={{ border: '1px solid #eee', padding: '8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{tool}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Section */}
                <section className="design-container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '40px' }}>A workflow for every team</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <div>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🚀</div>
                            <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Engineering</h4>
                            <p style={{ color: '#666', fontSize: '15px' }}>Ship features faster with sprint tasks, code guidelines, bug fixes & more, all in one place.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>⚙️</div>
                            <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Product</h4>
                            <p style={{ color: '#666', fontSize: '15px' }}>Get your work into the world quicker with user research and cross-functional projects in Notion.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>📋</div>
                            <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Managers</h4>
                            <p style={{ color: '#666', fontSize: '15px' }}>Create a mission control for your teams to plan projects, prep for 1:1s, and set goals.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Cards */}
                <section className="design-container">
                    <div className="testimonial-cards">
                        {[
                            { name: 'Josh Hemsley', role: 'joshhemsley', text: 'Our design team has been using @NotionHQ for pipelines, task assignments and design spec. Pretty rad to see a tool so flexible.' },
                            { name: 'Meng To', role: 'MengTo', text: 'We’re also using Notion. It’s Google Docs, Inspirations and Tasks in one place, for team. It’s a designer’s dream.' },
                            { name: 'Martina Sartor', role: 'design_byMarti', text: '@NotionHQ is becoming the go to tool for planning and organizing mine and my team planning. Is useful especially when the team and the clients are spread around the world.' }
                        ].map((t, i) => (
                            <div key={i} className="t-card">
                                <div className="t-header">
                                    <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                                        <div style={{ fontSize: '12px', color: '#999' }}>@{t.role}</div>
                                    </div>
                                </div>
                                <p>{t.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="design-container" style={{ padding: '120px 0', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px' }}>Get a custom demo</h2>
                    <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>If you’re a team of 100+, our Enterprise plan has advanced permissions and security features to give you more control over your workspace.</p>
                    <button className="btn-primary" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '18px' }}>Talk to Sales</button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DesignPage;

import React from 'react';
import './EnterprisePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Globe, Shield, Zap, Settings, Lock, Database, Users, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';

const EnterprisePage: React.FC = () => {
    return (
        <div className="enterprise-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="enterprise-hero enterprise-container">
                    <span className="badge">Notion for Enterprise</span>
                    <h1>Knowledge and work. Connected.</h1>
                    <p>One secure AI workspace where enterprise teams plan, collaborate, and build faster together.</p>
                    <button className="enterprise-btn-large">Request a demo</button>

                    <div className="enterprise-logos">
                        <span className="trust-text">Trusted by 98% of the Forbes Cloud 100</span>
                        <div className="logo-row">
                            <span className="logo-item" style={{ fontFamily: 'serif', fontWeight: 800 }}>OpenAI</span>
                            <span className="logo-item" style={{ fontWeight: 800 }}>Figma</span>
                            <span className="logo-item" style={{ fontWeight: 800 }}>MatchGroup</span>
                            <span className="logo-item" style={{ fontWeight: 800 }}>▲Vercel</span>
                            <span className="logo-item" style={{ fontWeight: 800 }}>ramp</span>
                            <span className="logo-item" style={{ fontWeight: 800 }}>VOLVO</span>
                        </div>
                    </div>
                </section>

                {/* Feature Grid & Main Mockup */}
                <section className="enterprise-container">
                    <div className="enterprise-features-grid">
                        <div className="feature-card-simple">
                            <h3>Company knowledge</h3>
                            <p>One home that’s organized, searchable, and accurate.</p>
                        </div>
                        <div className="feature-card-simple">
                            <h3>Enterprise search</h3>
                            <p>Instantly surface answers across Notion and connected apps.</p>
                        </div>
                        <div className="feature-card-simple">
                            <h3>Integrated projects</h3>
                            <p>Plan tasks, track progress, and align teams.</p>
                        </div>
                        <div className="feature-card-simple">
                            <h3>Workflows & integrations</h3>
                            <p>Automate any process and integrate your tools.</p>
                        </div>
                    </div>

                    <div className="ai-mockup-main">
                        <div className="mockup-window">
                            <div className="mockup-sidebar">
                                <div className="user-info">Acme Inc.</div>
                                <div className="sidebar-group">
                                    <div className="sb-item active">Roadmap</div>
                                    <div className="sb-item">Docs</div>
                                    <div className="sb-item">Engineering</div>
                                    <div className="sb-item">Marketing</div>
                                    <div className="sb-item">Design</div>
                                    <div className="sb-item">IT</div>
                                </div>
                            </div>
                            <div className="mockup-content">
                                <div className="automation-dialog">
                                    <div className="dialog-header">
                                        <h4>Generate Weekly Update</h4>
                                        <div className="toggle active"></div>
                                    </div>
                                    <div className="dialog-field">
                                        <label>When</label>
                                        <div className="select-box">Every week</div>
                                    </div>
                                    <div className="dialog-field">
                                        <label>Do</label>
                                        <div className="action-box">
                                            <span>Add doc to Docs as New Weekly Update</span>
                                            <div className="ai-badge">Weekly Update AI Time triggered</div>
                                        </div>
                                    </div>
                                    <div className="dialog-footer">
                                        <button className="btn-cancel">Cancel</button>
                                        <button className="btn-done">Done</button>
                                    </div>
                                </div>
                                <div className="automations-panel">
                                    <h5 style={{ marginBottom: 12 }}>Automations</h5>
                                    <div className="auto-card">
                                        <div style={{ fontWeight: 700 }}>Notify Eng Channel</div>
                                        <div style={{ fontSize: 10, color: '#666' }}>When Status set to QA or Blocked...</div>
                                    </div>
                                    <div className="auto-card">
                                        <div style={{ fontWeight: 700 }}>Blocked project</div>
                                        <div style={{ fontSize: 10, color: '#666' }}>When Status set to Blocked...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Stats Section */}
                <section className="enterprise-container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-val">#1</div>
                            <div className="stat-label">knowledge base and AI writing assistant (G2)</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-val">98%</div>
                            <div className="stat-label">of Forbes Cloud 100 teams use Notion</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-val">62%</div>
                            <div className="stat-label">of Fortune 100 companies use Notion</div>
                        </div>
                    </div>
                </section>

                {/* All-in-one AI Section */}
                <section className="bg-light">
                    <div className="enterprise-container">
                        <div className="section-header">
                            <h2>All-in-one AI, right where you work.</h2>
                        </div>
                        <div className="ai-dual-card">
                            <div className="ai-sub-card">
                                <h3>AI with all the right context</h3>
                                <p>Not just another generic AI tool—it’s AI powered by your team’s knowledge and workflows.</p>
                                <div className="mockup-mini-search">
                                    <div className="search-results">
                                        <div className="res-item">
                                            <strong>Dashboard Redesign Kickoff</strong>
                                            <span>Implementation / Docs</span>
                                        </div>
                                        <div className="res-item">
                                            <strong>To-do Dashboard Redesign</strong>
                                            <span>Design / Docs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ai-sub-card">
                                <h3>One AI tool for everything</h3>
                                <p>Brainstorm, write, code, search, and automate workflows, all in Notion. No need for multiple AI point solutions.</p>
                                <div className="ai-features-list">
                                    <div className="ai-feat-tag"><Search size={14} /> Enterprise Search</div>
                                    <div className="ai-feat-tag"><Database size={14} /> AI meeting notes</div>
                                    <div className="ai-feat-tag"><Zap size={14} /> AI writing assistant</div>
                                    <div className="ai-feat-tag"><Globe size={14} /> AI translation</div>
                                    <div className="ai-feat-tag"><ArrowRight size={14} /> AI chat</div>
                                    <div className="ai-feat-tag"><Shield size={14} /> Research mode</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powerful & Secure */}
                <section className="enterprise-container">
                    <div className="dual-feature-grid">
                        <div className="feature-card-detailed">
                            <h3>Fully integrated in your daily work</h3>
                            <p>No app jumping or context-switching—access AI directly where you plan, build, track, and collaborate.</p>
                            <div className="write-mockup">
                                <div className="prompt-box">
                                    Write me a weekly update in the style of <span>Weekly Syncs</span>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card-detailed">
                            <h3>Powerful and secure</h3>
                            <p>Enterprise-level AI governance, security, and admin controls with zero data retention or training on your data.</p>
                            <div className="security-mockup">
                                <div className="acme-card">
                                    <Globe size={40} color="#27ae60" />
                                    <div>
                                        <strong>Acme Inc.</strong>
                                        <div>Enterprise plan</div>
                                    </div>
                                    <div className="stats-mini">
                                        <div><strong>2,156</strong> members</div>
                                        <div><strong>16</strong> teamspaces</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Large Testimonial */}
                <section className="enterprise-container testimonial-hero">
                    <div className="quote-text">
                        “There’s power in a single platform where you can do all your work out of. Notion is that single place.”
                    </div>
                    <div className="quote-source">
                        <span style={{ fontWeight: 800, fontSize: 24 }}>OpenAI</span>
                        <div><strong>Nick Erdenberger</strong>, GTM, OpenAI</div>
                    </div>
                </section>

                {/* Empowering Section */}
                <section className="bg-light">
                    <div className="enterprise-container empowering-section">
                        <div className="empower-split">
                            <div className="empower-text">
                                <span className="label-top">Empowering</span>
                                <h2>Easy to start, delightful to use.</h2>
                                <p>Designed to feel powerful yet intuitive, Notion is a workspace teams actually want to use.</p>
                            </div>
                            <div className="empower-mockup">
                                <div className="stand-up-card">
                                    <div className="avatar-stack">💬 Stand-up @Today</div>
                                    <div className="attendees">
                                        <div>Sarah</div>
                                        <div>Amir</div>
                                        <div>Roman</div>
                                        <div>Stephanie</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="empower-split reverse">
                            <div className="empower-text">
                                <span className="label-top">Customizable</span>
                                <h2>Flexible design that grows with you.</h2>
                                <p>A customizable workspace that adapts and scales with your team's needs, reducing the need for point solutions, more tool sprawl, and extra costs.</p>
                            </div>
                            <div className="empower-mockup">
                                <div className="tasks-card">
                                    <div className="task-header">
                                        <CheckCircle2 size={32} color="#835c3b" />
                                        <h3>Tasks</h3>
                                    </div>
                                    <div className="sync-status">Sync in progress</div>
                                    <div className="task-item">Complete compliance audit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loved by teams grid */}
                <section className="enterprise-container">
                    <div className="section-header">
                        <h2>Loved by the most innovative teams.</h2>
                        <a href="#" className="link-arrow">Discover customer stories <ArrowRight size={18} /></a>
                    </div>
                    <div className="innovation-grid">
                        {[
                            { company: 'Figma', text: "Notion’s ease of use is one of its hallmarks. It helps you visually navigate content and remember where something is.", author: "Marie Szuts, Head of People Ops" },
                            { company: 'remote', text: "Notion is saving new employees days, if not weeks, of their onboarding to be able to find information and quickly learn from it.", author: "Scott Entwistle, Senior Recruiter" },
                            { company: 'MatchGroup', text: "Notion has been the most powerful and impactful way to streamline our workflow.", author: "Rahim Makani, Director of Product" },
                            { company: 'TOYOTA', text: "Not only do our streamlined workflows in Notion save us time, they also make it easier to stay up to date on task details.", author: "Taku Wakasugi, Research" },
                            { company: 'ramp', text: "Notion AI removes the often plague product teams, keeping them focused on what they're best at—building great products.", author: "Geoff Charles, CPO" },
                            { company: 'OpenAI', text: "What used to take hours of debugging can now be solved in minutes just by asking Notion AI.", author: "John Allard, Engineering" }
                        ].map((card, i) => (
                            <div className="innovation-card" key={i}>
                                <h4 className="card-logo">{card.company}</h4>
                                <p>“{card.text}”</p>
                                <div className="card-author">
                                    <strong>{card.author.split(',')[0]}</strong>
                                    <div>{card.author.split(',').slice(1).join(',')}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Integration Wheel */}
                <section className="bg-light">
                    <div className="enterprise-container integration-section">
                        <div className="wheel-container">
                            <div className="center-orb">
                                <div className="inner-orb"></div>
                            </div>
                            <div className="tool-icons">
                                <div className="tool icon-1">S</div>
                                <div className="tool icon-2">G</div>
                                <div className="tool icon-3">Z</div>
                                <div className="tool icon-4">M</div>
                                <div className="tool icon-5">B</div>
                                <div className="tool icon-6">P</div>
                            </div>
                        </div>
                        <div className="integration-text">
                            <span className="label-top">Integrations</span>
                            <h2>Connect all your essential tools.</h2>
                            <p>Bring all your tools together in one place. Integrate, sync, and automate workflows, embed rich information, and find answers across your apps.</p>
                            <a href="#" className="link-arrow">See all integrations <ArrowRight size={18} /></a>
                        </div>
                    </div>
                </section>

                {/* Security Grid */}
                <section className="enterprise-container security-section">
                    <div className="section-header">
                        <h2>Build boldly with best-in-class support and security.</h2>
                    </div>
                    <div className="security-grid">
                        {[
                            { title: 'Professional services', desc: 'Design, deploy, and automate your Notion workspace at scale with professional expertise.', icon: <Settings size={20} /> },
                            { title: 'Dedicated guidance', desc: 'Customer Success partners with you through workspace setup, onboarding, and best practices.', icon: <Users size={20} /> },
                            { title: 'Premium support', desc: 'Tailored, proactive around-the-clock support offerings for teams with more specialized needs.', icon: <Headphones size={20} /> },
                            { title: 'Identity management', desc: 'SAML-based SSO integration for secure employee access.', icon: <Lock size={20} /> },
                            { title: 'SCIM user provisioning', desc: 'Easily create, remove, update, or retrieve any user or group.', icon: <Users size={20} /> },
                            { title: 'Workspace and domain management', desc: 'Centralized security, compliance, analytics, and auditing tools.', icon: <Globe size={20} /> },
                            { title: 'Global compliance standards', desc: 'GDPR, CCPA, and HIPAA certifications.', icon: <Shield size={20} /> },
                            { title: 'Third-party security certifications', desc: 'SOC 2 Type 2, BSI C5, and ISO (27001, 27701, 27017, 27018)', icon: <CheckCircle2 size={20} /> },
                            { title: 'AI governance', desc: 'No training or storage of your data by LLM providers.', icon: <Zap size={20} /> },
                            { title: 'Robust data protection', desc: 'AES-256 encryption at rest and TLS 1.2+ in transit.', icon: <Shield size={20} /> },
                            { title: 'Data residency', desc: 'Options in EU and US data centers.', icon: <Database size={20} /> },
                            { title: 'Security & compliance partner integrations', desc: 'Integrate with your SIEM, DLP, and compliance platforms.', icon: <Lock size={20} /> }
                        ].map((item, i) => (
                            <div className="security-card" key={i}>
                                <div className="sec-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section className="bg-light">
                    <div className="enterprise-container">
                        <div className="section-header">
                            <h2>A few resources to get you started.</h2>
                        </div>
                        <div className="res-grid">
                            <div className="res-card">
                                <div className="res-img hbr"></div>
                                <h4>Harvard Report: How AI is Revolutionizing Knowledge Work</h4>
                                <a href="#" className="link-res">Read the report →</a>
                            </div>
                            <div className="res-card">
                                <div className="res-img guide"></div>
                                <h4>Your centralized product development hub in Notion</h4>
                                <a href="#" className="link-res">Read guide →</a>
                            </div>
                            <div className="res-card">
                                <div className="res-img tour"></div>
                                <h4>Take a self-guided demo of a Notion workspace.</h4>
                                <a href="#" className="link-res">Take a tour →</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="enterprise-container final-cta">
                    <h2>One AI workspace, tailored to every team.</h2>
                    <p>Connect with an expert to explore what's possible with Notion.</p>
                    <button className="enterprise-btn-large">Request a demo</button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default EnterprisePage;

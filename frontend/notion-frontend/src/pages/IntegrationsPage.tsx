import React from 'react';
import './IntegrationsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Plus,
    ChevronDown
} from 'lucide-react';

const IntegrationsPage: React.FC = () => {
    return (
        <div className="integrations-page">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="int-hero int-container">
                    <div className="int-hero-content">
                        <span className="category">Integrations</span>
                        <h1>Connect your favorite tools to Notion</h1>
                        <p>Stop switching between apps to get work done. Keep info flowing in and out of Notion and reduce overhead with our integrations.</p>
                        <button className="btn-black">Browse integrations →</button>
                    </div>
                    <div className="int-hero-illustration">
                        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="400" height="300" rx="20" fill="#fff" stroke="#333" strokeWidth="2" />
                            <circle cx="250" cy="200" r="100" stroke="#eee" strokeWidth="2" strokeDasharray="10 10" />
                            <rect x="220" y="170" width="60" height="60" rx="8" fill="#fff" stroke="#333" strokeWidth="2" />
                            <path d="M250 170V100" stroke="#333" strokeWidth="2" />
                            <path d="M280 200H350" stroke="#333" strokeWidth="2" />
                            <path d="M250 230V300" stroke="#333" strokeWidth="2" />
                            <path d="M220 200H150" stroke="#333" strokeWidth="2" />
                            <circle cx="250" cy="70" r="20" fill="#eee" />
                            <circle cx="380" cy="200" r="20" fill="#eee" />
                            <circle cx="250" cy="330" r="20" fill="#eee" />
                            <circle cx="120" cy="200" r="20" fill="#eee" />
                        </svg>
                    </div>
                </section>

                {/* Security & Compliance */}
                <section className="int-feature int-container">
                    <span className="category">Security and Compliance</span>
                    <h2>Make your Notion data observable and actionable</h2>
                    <p>Integrate with security and compliance platforms and give your team confidence to use Notion at scale.</p>
                    <div className="int-app-logos">
                        {['Panther', 'Splunk', 'Datadog', 'Nightfall AI'].map((name, i) => (
                            <div className="logo-badge" key={i}>
                                <div style={{ width: 20, height: 20, background: '#333', borderRadius: 4 }}></div>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="int-mockup">
                        <div style={{ width: '100%', height: 300, background: '#f7f6f3', borderRadius: 8 }}></div>
                    </div>
                </section>

                {/* Link Previews */}
                <section className="int-feature int-container bg-light">
                    <span className="category">Link Previews</span>
                    <h2>Get the context you need in one tool</h2>
                    <p>View the content and status of Jira tasks, Slack threads, GitHub issues, and more — without leaving Notion.</p>
                    <div className="int-app-logos">
                        {['Jira', 'Slack', 'GitHub', 'Asana'].map((name, i) => (
                            <div className="logo-badge" key={i}>
                                <div style={{ width: 20, height: 20, background: '#333', borderRadius: 4 }}></div>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="int-mockup">
                        <div style={{ width: '100%', height: 400, background: '#f7f6f3', borderRadius: 8 }}></div>
                    </div>
                </section>

                {/* Synced Databases */}
                <section className="int-feature int-container">
                    <span className="category">Synced Databases <span style={{ fontSize: 10, padding: '2px 6px', background: '#eee', borderRadius: 4, marginLeft: 8 }}>Beta</span></span>
                    <h2>Keep data from other tools in sync</h2>
                    <p>Want a live data stream for your external tools? Use Synced Databases to check the status of your Jira projects, GitHub pull requests or Asana tasks, right inside your Notion database.</p>
                    <div className="int-app-logos">
                        {['Jira', 'GitHub', 'Asana', 'GitLab'].map((name, i) => (
                            <div className="logo-badge" key={i}>
                                <div style={{ width: 20, height: 20, background: '#333', borderRadius: 4 }}></div>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="int-mockup">
                        <div style={{ width: '100%', height: 500, background: '#f7f6f3', borderRadius: 8 }}></div>
                    </div>
                </section>

                {/* Automations */}
                <section className="int-feature int-container bg-light">
                    <span className="category">Automations</span>
                    <h2>Automate your Notion workflows</h2>
                    <p>Make Notion the central nervous system for all your tools. Automatically update other apps, take actions, and keep information consistent so you can work more efficiently.</p>
                    <div className="int-app-logos">
                        {['Zapier', 'Make', 'Tray.io'].map((name, i) => (
                            <div className="logo-badge" key={i}>
                                <div style={{ width: 20, height: 20, background: '#333', borderRadius: 4 }}></div>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="int-automation-grid">
                        {[
                            { app: 'Slack', action: 'When an OKR is tagged Approved', result: 'Notify in Slack', tag: 'Approved', tagColor: 'green' },
                            { app: 'Jira', action: 'When a task is added to Eng Tasks', result: 'Create an issue in JIRA', tag: '', tagColor: '' },
                            { app: 'Calendar', action: 'When a lead from Sales CRM changes status to In Progress', result: 'Send Google Calendar Invite', tag: 'In Progress', tagColor: 'blue' },
                            { app: 'Email', action: 'When an update is added to Product Updates', result: 'Email team@acmeinc.com', tag: '', tagColor: '' }
                        ].map((a, i) => (
                            <div className="int-automation-card" key={i}>
                                <div className="logo" style={{ background: '#eee', borderRadius: 4 }}></div>
                                <p>{a.action}</p>
                                {a.tag && <span className={`int-status-tag ${a.tagColor}`}>{a.tag}</span>}
                                <div style={{ margin: '12px 0' }}><ChevronDown size={14} /></div>
                                <p style={{ fontWeight: 700 }}>{a.result}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Logo grid */}
                <section className="int-feature int-container">
                    <div style={{ marginBottom: 40 }}>
                        <svg viewBox="0 0 100 100" width="80" height="80">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="2" />
                            <path d="M50 20V80M20 50H80" stroke="#333" strokeWidth="2" />
                        </svg>
                    </div>
                    <h2>Customize Notion with dozens of integrations</h2>
                    <p>Explore the full integrations gallery and build the exact workflow you need.</p>
                    <button className="btn-black">Browse integrations →</button>

                    <div className="int-browse-grid">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div className="int-browse-item" key={i}>
                                <div style={{ width: 32, height: 32, background: '#eee', borderRadius: 6 }}></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="int-faq int-container">
                    <h2>Questions & answers</h2>
                    {[
                        "What is a Notion integration?",
                        "I'm a developer. How do I get my integration included in the directory?",
                        "Can I create my own integration?",
                        "Are all Notion integrations included in the directory?",
                        "Are integrations listed in the directory reviewed by Notion?",
                        "Do integrations cost money to use?",
                        "Do I need to upgrade my plan to install integrations?"
                    ].map((q, i) => (
                        <div className="int-faq-item" key={i}>
                            <div className="int-faq-header">
                                <span>{q}</span>
                                <Plus size={18} />
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default IntegrationsPage;

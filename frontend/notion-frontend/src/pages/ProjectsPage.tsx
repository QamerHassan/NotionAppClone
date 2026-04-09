import React from 'react';
import './ProjectsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Calendar,
    BarChart3,
    Eye,
    Zap,
    Table,
    Smile
} from 'lucide-react';

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="projects-hero projects-container">
                    <div className="projects-hero-content">
                        <span className="category">Projects</span>
                        <h1>Manage projects from beginning to end</h1>
                        <p>With Notion’s connected workspace, get your projects to the finish line faster and with less context switching.</p>
                        <div className="projects-hero-btns">
                            <button className="btn-primary btn-large">Get Notion free</button>
                            <button className="btn-secondary btn-large">Request a demo</button>
                        </div>
                    </div>
                    <div className="projects-hero-illustration">
                        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" rx="20" fill="#F7F6F3" />
                            <path d="M100 80C100 74.4772 104.477 70 110 70H290C295.523 70 300 74.4772 300 80V220C300 225.523 295.523 230 290 230H110C104.477 230 100 225.523 100 220V80Z" fill="white" stroke="#333" strokeWidth="2" />
                            <rect x="120" y="100" width="160" height="12" rx="2" fill="#EEE" />
                            <rect x="120" y="120" width="140" height="12" rx="2" fill="#EEE" />
                            <rect x="120" y="140" width="150" height="12" rx="2" fill="#EEE" />
                            <circle cx="150" cy="180" r="20" fill="#007AFF" fillOpacity="0.1" />
                            <path d="M145 180L148 183L155 176" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </section>

                {/* Logos Section */}
                <section className="projects-logos projects-container">
                    <p>Trusted by teams of 100 to 1000+</p>
                    <div className="projects-logo-grid">
                        <span>OpenAI</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '20px', height: '20px', background: '#333', borderRadius: '4px' }}></div> VOLVO
                        </span>
                        <span style={{ fontWeight: 800 }}>ramp ⬘</span>
                        <span>CURSOR</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '20px', height: '20px', background: 'linear-gradient(45deg, #FF3D00, #A259FF)', borderRadius: '4px' }}></div> Figma
                        </span>
                        <span style={{ color: '#76B900' }}>NVIDIA.</span>
                    </div>
                </section>

                {/* Video/Main Preview Placeholder */}
                <section className="projects-container" style={{ marginBottom: '120px' }}>
                    <div style={{ background: '#f7f6f3', borderRadius: '24px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', cursor: 'pointer' }}>
                                <div style={{ width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid white', marginLeft: '5px' }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Infinitely configurable section */}
                <section className="projects-container">
                    <h2 className="section-title">Infinitely configurable, so you can work the way you want</h2>
                    <div className="feature-card">
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', color: '#007AFF' }}>
                            <Table size={24} />
                            <span style={{ fontWeight: 600 }}>Capture every detail in a database</span>
                        </div>
                        <h3>Capture every detail in a database</h3>
                        <p>Track all your important information in one place, so nothing slips through the cracks. Combine multiple data sources and prevent information silos.</p>
                        <div className="mockup-img" style={{ height: '400px', background: '#fff', padding: '40px' }}>
                            {/* Database Mockup Placeholder */}
                            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '24px', height: '24px', background: '#FF3D00', borderRadius: '4px' }}></div>
                                <span style={{ fontSize: '24px', fontWeight: 700 }}>Issue Tracking</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <React.Fragment key={i}>
                                        <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                                        <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                                        <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                                        <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="feature-grid">
                        <div className="small-feature-card">
                            <Calendar size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>View projects as a timeline for a bird's eye view</h4>
                            <p>See the bigger picture of how projects fit together, so you can resolve dependencies and hit your deadlines.</p>
                            <div style={{ marginTop: '24px', height: '150px', background: '#fff', borderRadius: '12px', border: '1px solid #eee' }}></div>
                        </div>
                        <div className="small-feature-card">
                            <BarChart3 size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Visualize progress with charts</h4>
                            <p>Create a dashboard with charts from as many sources as you want.</p>
                            <div style={{ marginTop: '24px', height: '150px', background: '#fff', borderRadius: '12px', border: '1px solid #eee' }}></div>
                        </div>
                        <div className="small-feature-card">
                            <Eye size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Choose the exact info you want to track</h4>
                            <p>Create your own priority labels, status tags, and more, so they mean exactly what they should for your team.</p>
                        </div>
                        <div className="small-feature-card">
                            <Zap size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Automate your team workflows</h4>
                            <p>Spend less time on manual tasks with automations that scale your best workflows and keep everyone in sync.</p>
                        </div>
                    </div>
                </section>

                {/* Filter and Sort section */}
                <section className="projects-container">
                    <div className="feature-card" style={{ background: '#f7f6f3' }}>
                        <h3>Filter and sort info to see what you need</h3>
                        <p>Show only tasks assigned to you, or items marked as urgent. Break down any complex project in the way that's most helpful to you.</p>
                        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #eee' }}>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                                <div style={{ padding: '4px 12px', background: '#eef6ff', color: '#007AFF', borderRadius: '4px', fontSize: '14px' }}>Due Date ▾</div>
                                <div style={{ padding: '4px 12px', background: '#eef6ff', color: '#007AFF', borderRadius: '4px', fontSize: '14px' }}>Priority ▾</div>
                                <div style={{ padding: '4px 12px', background: '#eef6ff', color: '#007AFF', borderRadius: '4px', fontSize: '14px' }}>Status ▾</div>
                            </div>
                            <div style={{ height: '200px', display: 'flex', gap: '20px' }}>
                                <div style={{ flex: 1, background: '#f9f9f9', borderRadius: '8px', padding: '16px' }}>
                                    <div style={{ width: '40px', height: '12px', background: '#ddd', marginBottom: '12px' }}></div>
                                    <div style={{ height: '60px', background: '#fff', border: '1px solid #eee', borderRadius: '4px' }}></div>
                                </div>
                                <div style={{ flex: 1, background: '#f9f9f9', borderRadius: '8px', padding: '16px' }}>
                                    <div style={{ width: '40px', height: '12px', background: '#ddd', marginBottom: '12px' }}></div>
                                    <div style={{ height: '60px', background: '#fff', border: '1px solid #eee', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations section */}
                <section className="projects-container" style={{ marginTop: '100px' }}>
                    <h2 className="section-title">Integrations from GitHub, Slack, & more bring all your work together</h2>
                    <div className="integrations-grid">
                        <div className="integration-card">
                            <div className="icon-box">
                                <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #FF3D00, #A259FF)', borderRadius: '4px' }}></div>
                            </div>
                            <h4>Figma</h4>
                            <p>Always share the most updated designs with your team.</p>
                            <a href="#">Try now →</a>
                        </div>
                        <div className="integration-card">
                            <div className="icon-box">
                                <div style={{ width: '32px', height: '32px', background: '#4A154B', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', fontWeight: 800 }}>#</div>
                            </div>
                            <h4>Slack</h4>
                            <p>Simply paste a link to see the full message without switching tools.</p>
                            <a href="#">Try now →</a>
                        </div>
                        <div className="integration-card">
                            <div className="icon-box">
                                <div style={{ width: '32px', height: '32px', background: '#333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                                </div>
                            </div>
                            <h4>GitHub</h4>
                            <p>Bring pull requests, issues, and even repos directly into Notion.</p>
                            <a href="#">Try now →</a>
                        </div>
                    </div>
                </section>

                {/* G2 Proof section */}
                <section className="projects-container">
                    <h2 className="section-title" style={{ marginTop: '100px', textAlign: 'left' }}>Top teams run projects with Notion</h2>
                    <div className="g2-section">
                        <div className="g2-content">
                            <Smile size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Rated best on G2</h4>
                            <p>Notion consistently ranks as the G2 industry leader based on hundreds of customer reviews. But don’t take our word for it. Check out G2’s reviews for more info.</p>
                            <a href="#" style={{ color: '#007AFF', fontWeight: 600, textDecoration: 'none' }}>Get started →</a>
                        </div>
                        <div className="g2-badges">
                            <div className="g2-badge">
                                <div style={{ fontSize: '10px', color: '#FF3D00', marginBottom: '8px' }}>Summer 2025</div>
                                <div style={{ fontWeight: 800 }}>Grid Leader</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Enterprise</div>
                            </div>
                            <div className="g2-badge">
                                <div style={{ fontSize: '10px', color: '#FF3D00', marginBottom: '8px' }}>Summer 2025</div>
                                <div style={{ fontWeight: 800 }}>Momentum Leader</div>
                            </div>
                            <div className="g2-badge">
                                <div style={{ fontSize: '10px', color: '#FF3D00', marginBottom: '8px' }}>Summer 2025</div>
                                <div style={{ fontWeight: 800 }}>Grid Leader</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Mid-market</div>
                            </div>
                        </div>
                    </div>

                    <div className="quotes-grid">
                        <div className="quote-card">
                            <div style={{ width: '24px', height: '24px', background: 'linear-gradient(45deg, #FF3D00, #A259FF)', borderRadius: '4px', marginBottom: '16px' }}></div>
                            <blockquote>“Collaboration is not something you set and forget. It’s a muscle you have to keep flexing. Choosing a tool like Notion makes that easier and more enjoyable for everyone.”</blockquote>
                        </div>
                        <div className="quote-card">
                            <div style={{ width: '24px', height: '24px', background: '#00D1B2', borderRadius: '4px', marginBottom: '16px' }}></div>
                            <blockquote>“Having a single hub for every project has become our source of truth and eliminates the confusion of scattered information across multiple tools.”</blockquote>
                        </div>
                        <div className="quote-card">
                            <div style={{ width: '24px', height: '24px', background: '#000', borderRadius: '4px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '10px solid white' }}></div>
                            </div>
                            <blockquote>“The best part about Notion for a growing company is that it doesn’t lock you into a rigid one-size-fits-all system. Instead, you can adapt and iterate a custom-built solution.”</blockquote>
                        </div>
                    </div>
                </section>

                {/* Import section */}
                <section className="projects-container">
                    <div className="import-section">
                        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>Get started in seconds</h2>
                        <a href="#" style={{ color: '#007AFF', fontWeight: 600, textDecoration: 'none', display: 'block', marginBottom: '40px' }}>Explore the template gallery</a>
                        <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', border: '1px solid #eee' }}>
                            <div style={{ fontSize: '32px', marginBottom: '20px' }}>🍰</div>
                            <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>Just one click to set up. Import or start with a template.</h4>
                            <p style={{ color: '#666', marginBottom: '40px' }}>Get a fresh start with the tool that modern teams use to ship faster. All your work arrives perfectly formatted.</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                {['Asana', 'Confluence', 'Google Docs', 'PDF', 'CSV', 'Text & Markdown', 'HTML', 'Word', 'Dropbox Paper'].map(tool => (
                                    <div key={tool} style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '16px', height: '16px', background: '#eee', borderRadius: '2px' }}></div> {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wikis and Docs section */}
                <section className="projects-container" style={{ marginTop: '100px' }}>
                    <h2 className="section-title">Wikis and docs included, for the same price</h2>
                    <div className="feature-grid">
                        <div className="small-feature-card" style={{ background: '#fff', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '20px' }}>Wikis</h4>
                            <p style={{ fontSize: '14px' }}>It’s hard to move fast with a clunky & disorganized workspace. Centralize all your knowledge in Notion instead.</p>
                            <a href="#" style={{ color: '#007AFF', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
                            <div style={{ marginTop: '24px', height: '200px', background: '#f7f6f3', borderRadius: '8px' }}></div>
                        </div>
                        <div className="small-feature-card" style={{ background: '#fff', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '20px' }}>Docs</h4>
                            <p style={{ fontSize: '14px' }}>Simple. Powerful. Beautiful. Communicate more efficiently with flexible building blocks.</p>
                            <a href="#" style={{ color: '#007AFF', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
                            <div style={{ marginTop: '24px', height: '200px', background: '#f7f6f3', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="projects-container">
                    <div className="final-cta">
                        <div style={{ flex: 1 }}>
                            <h2>Get your projects organized</h2>
                            <p>Play around with it first. Pay and add your team later.</p>
                            <div className="projects-hero-btns">
                                <button className="btn-primary btn-large">Get Notion free</button>
                                <button className="btn-secondary btn-large">Request a demo</button>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ background: '#007AFF', borderRadius: '24px', height: '300px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '80%', height: '80%', background: '#fff', borderTopLeftRadius: '12px', padding: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '8px', marginBottom: '12px' }}></div>
                                    <div style={{ width: '80%', height: '12px', background: '#eee', marginBottom: '8px' }}></div>
                                    <div style={{ width: '60%', height: '12px', background: '#eee' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;

import React from 'react';
import './DocsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Code,
    ChevronRight,
    Play,
    Image,
    List,
    BarChart2,
    Plus,
    MessageSquare,
    Book,
    Briefcase,
    Zap
} from 'lucide-react';

const DocsPage: React.FC = () => {
    return (
        <div className="docs-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="docs-hero docs-container">
                    <div className="docs-hero-content">
                        <span className="category">Docs</span>
                        <h1>The next gen of notes & docs</h1>
                        <p>Simple. Powerful. Beautiful. Communicate more efficiently with Notion's flexible building blocks.</p>
                        <div className="docs-hero-btns">
                            <button className="nav-btn-primary blue large">Get Notion free</button>
                            <button className="nav-btn-text large" style={{ border: '1px solid #eee' }}>Request a demo →</button>
                        </div>
                    </div>
                    <div className="docs-hero-img">
                        <div style={{ position: 'relative' }}>
                            <div style={{ fontSize: '100px', transform: 'scaleX(-1)' }}>📑✍️🚀</div>
                        </div>
                    </div>
                </section>

                {/* Hero Cards */}
                <section className="docs-container" style={{ marginTop: '-40px' }}>
                    <div className="docs-hero-cards">
                        <div className="docs-card">
                            <h4>Meeting Notes</h4>
                            <p>Connect people & projects with updates & action items.</p>
                        </div>
                        <div className="docs-card">
                            <h4>Design System</h4>
                            <p>All your company's design assets in one place.</p>
                        </div>
                        <div className="docs-card">
                            <h4>Project requirements</h4>
                            <p>A customizable PRD that fits any type of project.</p>
                            <a href="#" style={{ fontSize: '12px', color: '#007aff', textDecoration: 'none', fontWeight: 600 }}>Duplicate Template →</a>
                        </div>
                        <div className="docs-card">
                            <h4>Pitch deck</h4>
                            <p>Tell your company's story in a dynamic way.</p>
                        </div>
                    </div>
                </section>

                {/* Main Visual Mockup */}
                <section className="docs-container" style={{ marginTop: '60px' }}>
                    <div className="docs-mockup" style={{ background: '#fff9f9', padding: '60px', borderRadius: '24px' }}>
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                            <div style={{ color: '#eb5757', fontWeight: 800, fontSize: '24px', marginBottom: '40px' }}>ACME</div>
                            <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Pitch deck</h2>
                            <p style={{ fontSize: '18px', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
                                It should be simple, easy, and safe to...
                            </p>
                            <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>Acme is a robust CRM for...</p>
                            <div style={{ fontSize: '16px', color: '#666' }}>Click into a use case for details 👇</div>
                            <div style={{ fontWeight: 700, fontSize: '24px', marginTop: '12px' }}>Opportunities</div>
                        </div>
                    </div>
                </section>

                {/* Way Beyond Text Section */}
                <h2 className="docs-section-title">Go way beyond text & bullet points</h2>
                <section className="docs-container">
                    <div className="docs-feature-grid">
                        <div className="docs-feature-item">
                            <Code className="icon" />
                            <h3>Code snippets</h3>
                            <p>Native syntax highlighting for dozens of languages.</p>
                            <div className="docs-mockup" style={{ padding: '12px', background: '#f9f9f9' }}>
                                <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>JavaScript</div>
                                <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                                    <span style={{ color: 'blue' }}>function</span> predicate(val) &#123;<br />
                                    &nbsp;&nbsp;<span style={{ color: 'green' }}>return</span> val;<br />
                                    &#125;
                                </div>
                            </div>
                        </div>
                        <div className="docs-feature-item">
                            <ChevronRight className="icon" />
                            <h3>Toggles</h3>
                            <p>Collapsible sections make your docs easy to read.</p>
                            <div className="docs-mockup" style={{ padding: '16px' }}>
                                <div style={{ color: '#888', marginBottom: '8px' }}>▶ Gunta Stölzl</div>
                                <div style={{ fontWeight: 600 }}>▼ Gui Bonsiepe</div>
                                <p style={{ fontSize: '11px', marginTop: '4px' }}>A German designer, teacher, and writer who studied and taught at HfG Ulm.</p>
                            </div>
                        </div>
                        <div className="docs-feature-item">
                            <Image className="icon" />
                            <h3>Images & videos</h3>
                            <p>Embed directly from Loom & YouTube, or upload your own.</p>
                            <div className="docs-mockup" style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '40px' }}>
                                <Play size={48} />
                            </div>
                        </div>
                        <div className="docs-feature-item">
                            <List className="icon" />
                            <h3>Table of contents</h3>
                            <p>Click to jump to a section. Updates automatically.</p>
                            <div style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
                                <div style={{ borderLeft: '2px solid blue', paddingLeft: '8px', marginBottom: '8px', color: '#000', fontWeight: 600 }}>Introduction</div>
                                <div style={{ paddingLeft: '10px', marginBottom: '8px' }}>Design principles</div>
                                <div style={{ paddingLeft: '10px' }}>Visual patterns</div>
                            </div>
                        </div>
                        <div className="docs-feature-item">
                            <BarChart2 className="icon" />
                            <h3>Charts</h3>
                            <p>Add live charts to any doc.</p>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', background: 'white', padding: '16px', borderRadius: '8px' }}>
                                <div style={{ flex: 1, height: '40%', background: 'pink' }}></div>
                                <div style={{ flex: 1, height: '80%', background: 'purple' }}></div>
                                <div style={{ flex: 1, height: '60%', background: 'blue' }}></div>
                            </div>
                        </div>
                        <div className="docs-feature-item">
                            <Plus className="icon" />
                            <h3>And 50+ more content types</h3>
                            <p>Like a bottomless box of building blocks.</p>
                            <div style={{ background: 'white', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                                Mention a person<br />
                                <span style={{ color: '#888' }}>Ping someone so they're notified.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sidebar Section */}
                <h2 className="docs-section-title">Store docs where people can easily find them</h2>
                <section className="docs-container docs-col-section">
                    <div className="docs-col-item">
                        <h3>Every team's files, at a glance</h3>
                        <p>Notion's sidebar keeps your workspace organized no matter how fast you grow.</p>
                        <div className="docs-mockup" style={{ padding: '0' }}>
                            <div style={{ display: 'flex', height: '300px' }}>
                                <div style={{ width: '100px', background: '#f7f6f3', padding: '12px' }}>
                                    <div style={{ height: '10px', width: '60px', background: '#ddd', marginBottom: '8px' }}></div>
                                    <div style={{ height: '10px', width: '50px', background: '#ddd', marginBottom: '8px' }}></div>
                                    <div style={{ height: '10px', width: '70px', background: '#ddd' }}></div>
                                </div>
                                <div style={{ flex: 1, padding: '24px' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 800 }}>Roadmap</div>
                                    <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                                        <div style={{ height: '100px', flex: 1, background: '#f9f9f9', borderRadius: '8px' }}></div>
                                        <div style={{ height: '100px', flex: 1, background: '#f9f9f9', borderRadius: '8px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="docs-col-item" style={{ background: '#fff', border: '1px solid #eee' }}>
                        <div style={{ color: 'red', fontWeight: 800, marginBottom: '24px' }}>TOYOTA</div>
                        <blockquote style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1.4, marginBottom: '40px' }}>
                            "Not only do our streamlined workflows in Notion save us time, they also make it easier to stay up to date on task details and progress."
                        </blockquote>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                            <div>
                                <div style={{ fontWeight: 600 }}>Taku Wakasugi</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Toyota Frontier Research Center, Toyota</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collaboration Section */}
                <h2 className="docs-section-title">Get your team on the same page, literally</h2>
                <section className="docs-container docs-col-section">
                    <div className="docs-col-item">
                        <h3><Zap color="blue" size={24} /> Collaborate or co-edit together</h3>
                        <p>Allow others to comment or suggest edits. Just type the @ key to get their attention.</p>
                        <div className="docs-mockup">
                            <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '12px' }}>🚀 Product launch plan</div>
                            <div style={{ fontSize: '13px', color: '#666' }}>
                                <strong>Goals</strong>
                                <ul style={{ marginLeft: '16px', marginTop: '4px' }}>
                                    <li>Ensure a smooth rollout</li>
                                    <li>Achieve high user adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="docs-col-item">
                        <h3><MessageSquare color="blue" size={24} /> Comments keep the ball rolling async</h3>
                        <p>A consolidated view of feedback makes it easy to iterate, even across time zones.</p>
                        <div className="docs-mockup">
                            <div style={{ background: '#fff', borderRadius: '8px', padding: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#ddd', borderRadius: '4px' }}></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600, fontSize: '13px' }}>Mirra Rui Jemenez <span style={{ fontSize: '11px', color: '#888' }}>5 minutes ago</span></div>
                                        <div style={{ fontSize: '13px' }}>Hi @Faye Rasmusson are we able to test multiple subject lines?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Big Quote */}
                <section className="docs-quote docs-container">
                    <blockquote>
                        "We can quickly build out a meeting agenda for a large group of people and still make it interactive and fun."
                    </blockquote>
                    <div style={{ fontWeight: 800, fontSize: '24px', marginBottom: '12px' }}>KIN + CARTA</div>
                    <div className="docs-quote-author">
                        <strong>Scott Stephens</strong><br />
                        <span style={{ color: '#666' }}>Design Operations Manager, Kin + Carta</span>
                    </div>
                </section>

                {/* For Roles */}
                <section className="docs-roles docs-container">
                    <div className="docs-roles-grid">
                        <div className="docs-role-item">
                            <h4>Product managers</h4>
                            <p>Connect the roadmap to goals, and keep folks aligned on what's shipping and when.</p>
                            <a href="#">See how PMs use Notion →</a>
                        </div>
                        <div className="docs-role-item">
                            <h4>Designers</h4>
                            <p>Move review rounds forward, prioritize requests, and hit all your creative deadlines.</p>
                            <a href="#">See how designers use Notion →</a>
                        </div>
                        <div className="docs-role-item">
                            <h4>Engineers</h4>
                            <p>Ship features faster with sprints, code guidelines, bug fixes & more, all in one place.</p>
                            <a href="#">See how engineers use Notion →</a>
                        </div>
                    </div>
                </section>

                {/* Wikis & Projects */}
                <h2 className="docs-section-title">Wikis and Projects included, for the same price</h2>
                <section className="docs-container docs-col-section">
                    <div className="docs-col-item">
                        <h3><Book size={20} color="blue" /> Wikis</h3>
                        <p>It's hard to move fast with a clunky & disorganized workspace. Centralize all your knowledge in Notion instead.</p>
                        <div className="docs-mockup">
                            <div style={{ fontWeight: 800, fontSize: '18px', color: '#eb5757', marginBottom: '20px' }}>Acme Inc.</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '12px' }}>
                                <div>
                                    <div style={{ fontWeight: 700, marginBottom: '8px' }}>Company</div>
                                    <div style={{ color: '#666' }}>▶ Mission, vision, values<br />▶ Office manual</div>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, marginBottom: '8px' }}>Locations</div>
                                    <div style={{ color: '#666' }}>📍 London<br />📍 New York</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="docs-col-item">
                        <h3><Briefcase size={20} color="blue" /> Projects</h3>
                        <p>Manage any type of project, no matter the team or size.</p>
                        <div className="docs-mockup">
                            <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '20px' }}>🚙 Roadmap</div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ flex: 1, padding: '8px', border: '1px solid #eee', borderRadius: '4px' }}>
                                    <div style={{ fontSize: '10px', color: 'purple', marginBottom: '4px' }}>Planning</div>
                                    <div style={{ fontSize: '11px' }}>Database groups</div>
                                </div>
                                <div style={{ flex: 1, padding: '8px', border: '1px solid #eee', borderRadius: '4px' }}>
                                    <div style={{ fontSize: '10px', color: 'orange', marginBottom: '4px' }}>Building</div>
                                    <div style={{ fontSize: '11px' }}>Link previews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <h2 className="docs-section-title">Info from Figma, GitHub & more. Easy to share, easy to see.</h2>
                <section className="docs-container">
                    <div className="docs-integrations-grid">
                        <div className="docs-int-card">
                            <div className="int-logo" style={{ color: '#F24E1E' }}>Figma</div>
                            <p>Always share the most updated designs with your team.</p>
                            <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try now →</a>
                            <div className="docs-mockup" style={{ background: '#000', height: '80px', marginTop: 'auto' }}></div>
                        </div>
                        <div className="docs-int-card">
                            <div className="int-logo" style={{ color: '#4A154B' }}>Amplitude</div>
                            <p>Track release metrics, experiment results, and more.</p>
                            <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try now →</a>
                            <div className="docs-mockup" style={{ height: '80px', marginTop: 'auto' }}></div>
                        </div>
                        <div className="docs-int-card">
                            <div className="int-logo" style={{ color: '#000' }}>Github</div>
                            <p>Bring pull requests, issues, and even repos directly into Notion.</p>
                            <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try now →</a>
                            <div className="docs-mockup" style={{ height: '80px', marginTop: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="#" style={{ color: '#007aff', fontWeight: 600, textDecoration: 'none' }}>See all integrations</a>
                    </div>
                </section>

                {/* Templates Section */}
                <h2 className="docs-section-title">Choose a template to get started</h2>
                <section className="docs-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    <div className="docs-card">
                        <h4 style={{ fontSize: '16px' }}>Mixpanel's daily standup & tasks</h4>
                        <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try template →</a>
                        <div style={{ height: '150px', background: '#f9f9f9', marginTop: '20px', borderRadius: '8px' }}></div>
                    </div>
                    <div className="docs-card">
                        <h4 style={{ fontSize: '16px' }}>Notion's product requirement doc</h4>
                        <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try template →</a>
                        <div style={{ height: '150px', background: '#f9f9f9', marginTop: '20px', borderRadius: '8px' }}></div>
                    </div>
                    <div className="docs-card">
                        <h4 style={{ fontSize: '16px' }}>Netflix's branding framework</h4>
                        <a href="#" style={{ fontSize: '14px', color: '#007aff', textDecoration: 'none' }}>Try template →</a>
                        <div style={{ height: '150px', background: '#f9f9f9', marginTop: '20px', borderRadius: '8px' }}></div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="docs-cta-bottom docs-container">
                    <div className="docs-cta-bottom-content">
                        <h2>Write your next doc in Notion</h2>
                        <p>Play around with it first. Pay and add your team later.</p>
                        <div className="docs-hero-btns">
                            <button className="nav-btn-primary blue large">Get Notion free</button>
                            <button className="nav-btn-text large" style={{ border: '1px solid #eee' }}>Request a demo →</button>
                        </div>
                    </div>
                    <div className="illustration" style={{ fontSize: '120px' }}>🖋️⚙️✨</div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DocsPage;

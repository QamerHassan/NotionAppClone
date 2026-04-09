import React from 'react';
import './WikisPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Home,
    Settings,
    UserPlus,
    Search,
    RefreshCw,
    Key,
    UserCheck,
    Globe,
    PenTool,
    Lock,
    Users,
    CheckCircle2
} from 'lucide-react';

const WikisPage: React.FC = () => {
    return (
        <div className="wikis-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="wikis-hero wikis-container">
                    <span className="category">Wikis</span>
                    <h1>The wiki that redefines ‘wiki’.</h1>
                    <p>It’s hard to move fast if you’ve got a clunky and disorganized workspace. Centralize all your knowledge in Notion instead.</p>

                    <div className="wikis-hero-btns">
                        <button className="nav-btn-primary blue large">Get Notion free</button>
                        <button className="nav-btn-text large" style={{ border: '1px solid #eee' }}>Request a demo →</button>
                    </div>

                    <div className="wikis-cat-grid">
                        <div className="wikis-cat-card">
                            <Home className="icon" color="#2eaadc" />
                            <span>Company home</span>
                        </div>
                        <div className="wikis-cat-card">
                            <PenTool className="icon" color="#2eaadc" />
                            <span>Brand guidelines</span>
                        </div>
                        <div className="wikis-cat-card">
                            <Settings className="icon" color="#2eaadc" />
                            <span>IT Hub</span>
                        </div>
                        <div className="wikis-cat-card">
                            <UserPlus className="icon" color="#2eaadc" />
                            <span>Employee onboarding</span>
                        </div>
                    </div>
                </section>

                {/* Proof Section */}
                <section className="wikis-proof wikis-container">
                    <h2>The new default for knowledge and documentation</h2>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '40px' }}>Powering startups and Fortune 500 companies around the world.</p>
                    <div className="wikis-proof-logos">
                        <span>OpenAI</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '28px', fontWeight: 700 }}>
                            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #A259FF, #F24E1E)', borderRadius: '4px' }}></div> Figma
                        </div>
                        <span style={{ color: '#76B900' }}>NVIDIA</span>
                    </div>

                    <div className="wikis-split">
                        <div className="wikis-split-card" style={{ background: '#fff', border: '1px solid #eee', textAlign: 'left' }}>
                            <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '16px' }}>Rated best on G2</div>
                            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Notion consistently ranks as the G2 industry leader based on hundreds of customer reviews. But don’t take our word for it. Check out G2’s reviews for more info.</p>
                            <a href="#" style={{ color: '#007aff', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Get started →</a>
                            <div style={{ marginTop: '40px', opacity: 0.5 }}>
                                <div style={{ height: '10px', width: '60px', background: '#ddd', marginBottom: '8px' }}></div>
                                <div style={{ height: '10px', width: '40px', background: '#ddd', marginBottom: '8px' }}></div>
                                <div style={{ height: '10px', width: '80px', background: '#ddd' }}></div>
                            </div>
                        </div>
                        <div className="wikis-split-card" style={{ background: '#fff', border: '1px solid #eee', textAlign: 'left' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '18px', marginBottom: '16px', color: '#007aff' }}>
                                <RefreshCw size={20} /> MatchGroup
                            </div>
                            <blockquote style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.4, marginBottom: '24px' }}>
                                “Notion adapts to your needs. It’s as minimal or as powerful as you need it to be.”
                            </blockquote>
                            <div>
                                <div style={{ fontWeight: 600 }}>Rahim Makani</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Director of Product, Match Group</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Sections */}
                <section className="wikis-container">
                    <h2 style={{ fontSize: '56px', fontWeight: 700, textAlign: 'center', marginBottom: '60px' }}>Find, edit, browse. We craft an experience you’ll love.</h2>

                    <div className="wikis-split">
                        <div className="wikis-split-card">
                            <h3>Every team’s files, at a glance</h3>
                            <p>Notion’s sidebar keeps your workspace organized no matter how fast you grow.</p>
                            <div className="wikis-mockup-full" style={{ padding: '0', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', height: '300px' }}>
                                    <div style={{ width: '100px', background: '#f7f6f3', borderRight: '1px solid #eee', padding: '16px' }}>
                                        <div style={{ width: '100%', height: '12px', background: '#ddd', borderRadius: '2px', marginBottom: '8px' }}></div>
                                        <div style={{ width: '80%', height: '12px', background: '#ddd', borderRadius: '2px', marginBottom: '8px' }}></div>
                                        <div style={{ width: '90%', height: '12px', background: '#ddd', borderRadius: '2px' }}></div>
                                    </div>
                                    <div style={{ flex: 1, padding: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                                            <div style={{ width: '32px', height: '32px', background: '#00b5d8', borderRadius: '4px' }}></div>
                                            <span style={{ fontSize: '24px', fontWeight: 800 }}>Roadmap</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                            <div style={{ height: '80px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}></div>
                                            <div style={{ height: '80px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}></div>
                                            <div style={{ height: '80px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wikis-split-card">
                            <h3>Search that actually works</h3>
                            <p>Powerful filters let anyone find data and decisions across teams in seconds.</p>
                            <div className="wikis-mockup-full" style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f7f6f3', padding: '12px', borderRadius: '8px', marginBottom: '16px', color: '#666' }}>
                                    <Search size={16} /> <span style={{ fontSize: '14px' }}>Search "Q4 Plan"...</span>
                                </div>
                                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '13px' }}>Q4 Marketing Plan</span>
                                    <span style={{ fontSize: '11px', color: '#888' }}>Last edited 2h ago</span>
                                </div>
                                <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '13px' }}>Product Roadmap 2024</span>
                                    <span style={{ fontSize: '11px', color: '#888' }}>Last edited 5h ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wikis-trio">
                        <div className="wikis-trio-item">
                            <h4>Beautiful out of the box</h4>
                            <p>Pick the perfect emoji and cover image for every page to reflect your company’s brand.</p>
                            <div className="wikis-trio-placeholder" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px' }}>
                                <div style={{ fontSize: '24px' }}>📚</div>
                                <div style={{ height: '12px', width: '60%', background: '#eee' }}></div>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ height: '8px', width: '30%', background: '#f0f0f0' }}></div>
                                    <div style={{ height: '8px', width: '40%', background: '#f0f0f0' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="wikis-trio-item">
                            <h4>Drag and drop organization</h4>
                            <p>Everyone can contribute to your knowledge base. No need to be tech-savvy just to update a page.</p>
                            <div className="wikis-trio-placeholder" style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ background: '#f7f6f3', border: '1px dashed #ccc', padding: '20px', borderRadius: '8px' }}>
                                    <RefreshCw size={24} color="#888" />
                                </div>
                            </div>
                        </div>
                        <div className="wikis-trio-item">
                            <h4>Link to other pages easily</h4>
                            <p>Everything is connected in your workspace — just type @ to link your notes or roadmap in a doc.</p>
                            <div className="wikis-trio-placeholder" style={{ padding: '16px' }}>
                                <div style={{ color: '#007aff', fontSize: '14px', marginBottom: '8px' }}>@Engineering Wiki</div>
                                <div style={{ fontSize: '11px', color: '#666' }}>Mention a page or person...</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Verification Section */}
                <section className="wikis-container wikis-verify">
                    <div className="wikis-verify-grid">
                        <div className="wikis-split-card" style={{ background: '#f7f6f3' }}>
                            <h3 style={{ fontSize: '24px' }}>Verification</h3>
                            <p style={{ fontSize: '18px' }}>Never wonder “is this the latest version?” Trust that the info you find is accurate and up-to-date.</p>
                            <div className="wikis-mockup-full" style={{ padding: '16px', border: '1px solid #3d9dfc' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#007aff', fontSize: '12px' }}>
                                    <CheckCircle2 size={14} /> Verified by Rahim Makani
                                </div>
                            </div>
                        </div>
                        <div className="wikis-split-card" style={{ background: '#4A154B', color: 'white' }}>
                            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>remote</div>
                            <blockquote style={{ fontSize: '20px', lineHeight: 1.4, marginBottom: '24px' }}>
                                “Notion is saving new employees days, if not weeks, of their onboarding to be able to find information and quickly learn from it.”
                            </blockquote>
                            <div>
                                <div style={{ fontWeight: 600 }}>Scott Entwistle</div>
                                <div style={{ fontSize: '13px', opacity: 0.8 }}>Senior Recruiter, Remote</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Welcome Home Section */}
                <section className="wikis-container wikis-welcome">
                    <h3>Welcome home</h3>
                    <p style={{ fontSize: '20px', color: '#666', marginBottom: '60px' }}>One space for your most relevant docs, notes, and tasks. Organized and updated, automatically.</p>
                    <div className="wikis-dashboard-mockup">
                        <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>Good afternoon, Emily Yang</div>
                        <div className="wikis-cat-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                            <div style={{ background: '#fff', border: '1px solid #eee', padding: '16px', borderRadius: '12px' }}>
                                <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>Recently visited</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#f7f6f3', borderRadius: '4px' }}></div>
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Random thoughts</span>
                                </div>
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eee', padding: '16px', borderRadius: '12px' }}>
                                <div style={{ height: '8px', width: '40px', background: '#eee', marginBottom: '8px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#f7f6f3', borderRadius: '4px' }}></div>
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Design system</span>
                                </div>
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eee', padding: '16px', borderRadius: '12px' }}>
                                <div style={{ height: '8px', width: '40px', background: '#eee', marginBottom: '8px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#f7f6f3', borderRadius: '4px' }}></div>
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Photography</span>
                                </div>
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eee', padding: '16px', borderRadius: '12px' }}>
                                <div style={{ height: '8px', width: '40px', background: '#eee', marginBottom: '8px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#f7f6f3', borderRadius: '4px' }}></div>
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Engineering wiki</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <section className="wikis-container" style={{ textAlign: 'center', margin: '100px auto' }}>
                    <h2 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '24px' }}>Easily share info from Slack, Figma, and Jira.</h2>
                    <a href="#" style={{ color: '#007aff', fontWeight: 600, textDecoration: 'none', fontSize: '18px' }}>See all integrations →</a>

                    <div className="wikis-security-grid">
                        <div className="wikis-security-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                <div style={{ width: '24px', height: '24px', background: 'linear-gradient(45deg, #A259FF, #F24E1E)', borderRadius: '4px' }}></div>
                                <span style={{ fontWeight: 700 }}>Figma</span>
                            </div>
                            <p>Always share the most updated designs with your team.</p>
                            <a href="#" style={{ color: '#007aff', textDecoration: 'none', fontSize: '14px' }}>Try now →</a>
                            <div className="wikis-trio-placeholder" style={{ marginTop: '24px' }}></div>
                        </div>
                        <div className="wikis-security-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                <div style={{ width: '24px', height: '24px', background: '#007aff', borderRadius: '4px' }}></div>
                                <span style={{ fontWeight: 700 }}>Amplitude</span>
                            </div>
                            <p>Track release metrics, experiment results, and more.</p>
                            <a href="#" style={{ color: '#007aff', textDecoration: 'none', fontSize: '14px' }}>Try now →</a>
                            <div className="wikis-trio-placeholder" style={{ marginTop: '24px' }}></div>
                        </div>
                        <div className="wikis-security-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                <div style={{ width: '24px', height: '24px', background: '#000', borderRadius: '4px' }}></div>
                                <span style={{ fontWeight: 700 }}>GitHub</span>
                            </div>
                            <p>Bring pull requests, issues, and even repos directly into Notion.</p>
                            <a href="#" style={{ color: '#007aff', textDecoration: 'none', fontSize: '14px' }}>Try now →</a>
                            <div className="wikis-trio-placeholder" style={{ marginTop: '24px' }}></div>
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="wikis-container">
                    <h2 style={{ fontSize: '56px', fontWeight: 700, textAlign: 'center' }}>Scales with the largest of companies.</h2>
                    <div className="wikis-security-grid">
                        <div className="wikis-security-card">
                            <Settings className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>Security & admin controls</h4>
                            <p>Keep your workspace safe with security, compliance, and auditing tools.</p>
                        </div>
                        <div className="wikis-security-card">
                            <UserCheck className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>Fine-grained admin roles</h4>
                            <p>Delegate admin-level users to manage workspace membership.</p>
                        </div>
                        <div className="wikis-security-card">
                            <Lock className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>Advanced permissions</h4>
                            <p>Specify who can do and create what, with granular precision.</p>
                        </div>
                        <div className="wikis-security-card">
                            <Key className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>SAML single sign-on</h4>
                            <p>Give employees access to Notion through your identity provider using SAML-based SSO.</p>
                        </div>
                        <div className="wikis-security-card">
                            <Users className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>SCIM user provisioning</h4>
                            <p>Easily create, remove, add, update, or retrieve any user or group.</p>
                        </div>
                        <div className="wikis-security-card">
                            <Globe className="icon" color="#2eaadc" style={{ marginBottom: '16px' }} />
                            <h4>Domain management tools</h4>
                            <p>Claim your domain and manage who can create workspaces using it, so you're in control.</p>
                        </div>
                    </div>
                </section>

                {/* Teams Section */}
                <section className="wikis-container" style={{ margin: '100px auto' }}>
                    <h2 style={{ fontSize: '56px', fontWeight: 700, textAlign: 'center' }}>Designed to be loved by every type of team.</h2>
                    <div className="wikis-teams-grid">
                        <div className="wikis-team-item">
                            <div style={{ fontSize: '40px' }}>⚙️</div>
                            <h4>Engineering</h4>
                            <p>Ship features faster with sprints, code guidelines, bug fixes & more, all in one place.</p>
                            <a href="#">See how engineers use Notion →</a>
                        </div>
                        <div className="wikis-team-item">
                            <div style={{ fontSize: '40px' }}>📦</div>
                            <h4>Product</h4>
                            <p>Connect the roadmap to goals, and keep folks aligned on what's shipping and when.</p>
                            <a href="#">See how PMs use Notion →</a>
                        </div>
                        <div className="wikis-team-item">
                            <div style={{ fontSize: '40px' }}>🎨</div>
                            <h4>Design</h4>
                            <p>Move review rounds forward, prioritize requests, and hit all your creative deadlines.</p>
                            <a href="#">See how designers use Notion →</a>
                        </div>
                    </div>
                </section>

                {/* Analytics Section */}
                <section className="wikis-container wikis-analytics">
                    <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>Analytics to inform what’s next</h2>
                    <p style={{ fontSize: '18px', color: '#666' }}>Notion’s Enterprise Plan gives admins a suite of tools to understand how employees are engaging with content.</p>
                    <div className="wikis-analytics-mockup">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 600 }}>
                                <span style={{ borderBottom: '2px solid black', paddingBottom: '12px' }}>Workspace analytics</span>
                                <span style={{ color: '#888' }}>Content engagement</span>
                            </div>
                            <div style={{ fontSize: '12px', color: '#888' }}>Last 7 Days ▾</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div style={{ padding: '24px', border: '1px solid #eee', borderRadius: '8px' }}>
                                <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Total views</div>
                                <div style={{ fontSize: '32px', fontWeight: 700 }}>88,763</div>
                            </div>
                            <div style={{ padding: '24px', border: '1px solid #eee', borderRadius: '8px' }}>
                                <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Pages created</div>
                                <div style={{ fontSize: '32px', fontWeight: 700 }}>18,429</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Templates Section */}
                <section className="wikis-container">
                    <h2 style={{ fontSize: '56px', fontWeight: 700, textAlign: 'center', marginBottom: '24px' }}>Just one click to set up. Import or start with a template.</h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <a href="#" style={{ color: '#007aff', fontWeight: 600, textDecoration: 'none' }}>Explore the template gallery →</a>
                    </div>
                    <div className="wikis-templates-grid">
                        <div className="wikis-template-card">
                            <h4>Buffer's OKR</h4>
                            <a href="#">Try now →</a>
                            <div className="wikis-template-img"></div>
                        </div>
                        <div className="wikis-template-card">
                            <h4>Pitch's onboarding checklist</h4>
                            <a href="#">Try now →</a>
                            <div className="wikis-template-img"></div>
                        </div>
                        <div className="wikis-template-card">
                            <h4>Blinkist hiring wiki</h4>
                            <a href="#">Try now →</a>
                            <div className="wikis-template-img"></div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="wikis-final-cta wikis-container">
                    <div style={{ fontSize: '120px' }}>🏢📑✨</div>
                    <h2>The wiki your team will actually use.</h2>
                    <p>Start with a template, or build your own from scratch.</p>
                    <div className="wikis-hero-btns" style={{ justifyContent: 'center' }}>
                        <button className="nav-btn-primary blue large">Get Notion free</button>
                        <button className="nav-btn-text large" style={{ border: '1px solid #eee' }}>Request a demo →</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WikisPage;

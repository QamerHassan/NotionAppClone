import React from 'react';
import './SitesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Sun,
    Smile,
    Zap,
    Database,
    LineChart,
    MousePointer2,
    Home,
    Calendar,
    Map,
    Briefcase,
    HelpCircle,
    Globe,
    Layout
} from 'lucide-react';

const SitesPage: React.FC = () => {
    return (
        <div className="sites-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="sites-hero sites-container">
                    <span className="category">Sites</span>
                    <h1>Publish anything, fast.</h1>
                    <p>The easiest way to get a website up and running.</p>
                    <button className="btn-black">Get Notion Sites free →</button>
                    <div className="sites-hero-illustration">
                        <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="300" fill="white" />
                            <path d="M100 250C120 200 180 150 250 150" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="280" cy="180" r="30" stroke="#333" strokeWidth="2" />
                            <path d="M280 180L300 160" stroke="#333" strokeWidth="2" />
                            <rect x="350" y="100" width="150" height="150" rx="10" stroke="#333" strokeWidth="2" />
                            <rect x="370" y="120" width="110" height="10" rx="2" fill="#EEE" />
                            <rect x="370" y="140" width="80" height="10" rx="2" fill="#EEE" />
                        </svg>
                    </div>
                </section>

                {/* Simple Steps Section */}
                <section className="sites-container">
                    <div className="sites-steps">
                        <div className="sites-step">
                            <div className="step-num">1</div>
                            <h3>Make a page</h3>
                            <p>Start with one of over 10,000 templates or build from scratch.</p>
                        </div>
                        <div className="sites-step">
                            <div className="step-num">2</div>
                            <h3>Personalize it</h3>
                            <p>Choose a domain, theme, and more to make it your own.</p>
                        </div>
                        <div className="sites-step">
                            <div className="step-num">3</div>
                            <h3>Publish it</h3>
                            <p>Just hit "publish", and you're live on the web in seconds.</p>
                        </div>
                    </div>
                </section>

                {/* Templates Section */}
                <section className="sites-container sites-templates">
                    <h2>Over 10,000 templates, from pitch decks to portfolios.</h2>
                    <div className="sites-templates-tabs">
                        <div className="sites-tab active"><Home size={16} /> Personal site</div>
                        <div className="sites-tab"><Calendar size={16} /> Event page</div>
                        <div className="sites-tab"><Map size={16} /> Travel guide</div>
                        <div className="sites-tab"><Briefcase size={16} /> Job board</div>
                        <div className="sites-tab"><HelpCircle size={16} /> Help center</div>
                    </div>

                    <div className="sites-template-preview">
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C940' }}></div>
                            </div>
                            <div style={{ background: '#f7f6f3', padding: '4px 100px', borderRadius: '20px', fontSize: '12px', color: '#666' }}>leedesignstudio.com</div>
                            <div style={{ width: '40px' }}></div>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>About</h3>
                            <p style={{ fontSize: '18px', color: '#333', marginBottom: '24px', fontWeight: 500 }}>Hi, I'm Stephanie Lee, a multidisciplinary designer based in San Francisco. With over 8 years of industry experience, I thrive at the intersection of UX/UI and brand identity.</p>
                            <div style={{ display: 'flex', gap: '80px' }}>
                                <div>
                                    <h4 style={{ marginBottom: '16px' }}>My hobbies...</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>🍩 Donuts tasting</li>
                                        <li style={{ marginBottom: '8px' }}>📸 Traveling</li>
                                        <li style={{ marginBottom: '8px' }}>📚 Reading</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '16px' }}>Ask me about...</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>• User research</li>
                                        <li style={{ marginBottom: '8px' }}>• Wireframes</li>
                                        <li style={{ marginBottom: '8px' }}>• UI design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sites-template-grid">
                        {[
                            { title: 'Notion Link in bio', author: 'Burk', icon: '🔗' },
                            { title: 'Simplicity Blog', author: 'Liyanne', icon: '✍️' },
                            { title: 'Pitch Deck Template', author: 'Maximilian Fleitmann', icon: '📊' },
                            { title: 'Recipe box', author: 'Kylie Stewart', icon: '🍳' },
                            { title: 'Minimalist Resume', author: "Nadine's Creations", icon: '📄' },
                            { title: 'Brand Style Guide', author: 'Kevan Lee', icon: '🎨' }
                        ].map((t, i) => (
                            <div className="sites-template-card" key={i}>
                                <div className="card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                                    {t.icon}
                                </div>
                                <h4>{t.title}</h4>
                                <div className="author">{t.author}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Editing Section */}
                <section className="sites-container sites-feature-row">
                    <h2>As simple as editing a page.</h2>
                    <div className="sites-feature-card">
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', color: '#007AFF' }}>
                            <Zap size={24} />
                            <span style={{ fontWeight: 600 }}>Save time with drag-and-drop building blocks that you already know</span>
                        </div>
                        <p style={{ color: '#666', marginBottom: '40px' }}>No complicated HTML or code needed. Always mobile-ready.</p>
                        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '20px' }}>Japan travel guide</h3>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div style={{ flex: 1, background: '#f7f6f3', aspectRatio: '4/3', borderRadius: '12px' }}></div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: 600, marginBottom: '20px' }}>🚉 Suica & Pasmo: Transportation cards are no longer available at the airport. As you travel, you will need to purchase a virtual Suica or Pasmo through Apple Pay.</p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '12px' }}>🏨 Hotels</li>
                                        <li style={{ marginBottom: '12px' }}>😎 Places</li>
                                        <li style={{ marginBottom: '12px' }}>🚄 Train</li>
                                        <li style={{ marginBottom: '12px' }}>🍜 Eats</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sites-small-grid">
                        <div className="sites-small-card">
                            <Database size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Effortless content management</h4>
                            <p>Keep your content tidy behind the scenes using databases.</p>
                        </div>
                        <div className="sites-small-card">
                            <Smile size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Fill in the blanks with AI</h4>
                            <p>Get a boost on your blog posts. Finally finish that about page.</p>
                        </div>
                        <div className="sites-small-card">
                            <MousePointer2 size={32} color="#007AFF" style={{ marginBottom: '20px' }} />
                            <h4>Search engine optimization</h4>
                            <p>Pro tools at your fingertips to boost your traffic.</p>
                        </div>
                    </div>
                </section>

                {/* Customization Section */}
                <section className="sites-container sites-feature-row">
                    <h2>Upgrade to make it your own.</h2>
                    <p style={{ color: '#666', marginBottom: '40px' }}>Included in Plus, Business, and Enterprise plans.</p>
                    <div className="sites-customize">
                        <div className="sites-customize-card">
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', color: '#007AFF' }}>
                                <Globe size={24} />
                                <span style={{ fontWeight: 600 }}>Custom domain name</span>
                            </div>
                            <p>Connect a custom domain, or choose a Notion domain for free.</p>
                            <div style={{ marginTop: '40px', background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #eee' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#eee', borderRadius: '4px' }}></div>
                                    <span style={{ fontWeight: 600 }}>New domain</span>
                                </div>
                                <div style={{ border: '1px solid #007AFF', padding: '12px', borderRadius: '8px', background: '#eef6ff', marginBottom: '12px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '14px' }}>Notion domain</div>
                                    <div style={{ fontSize: '12px' }}>Create a new .notion.site</div>
                                </div>
                                <div style={{ border: '1px solid #eee', padding: '12px', borderRadius: '8px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '14px' }}>Custom domain</div>
                                    <div style={{ fontSize: '12px' }}>Connect an existing domain</div>
                                </div>
                            </div>
                        </div>
                        <div className="sites-customize-card">
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', color: '#007AFF' }}>
                                <Layout size={24} />
                                <span style={{ fontWeight: 600 }}>Navigation bar</span>
                            </div>
                            <p>Design a custom nav bar with page links, search, breadcrumbs, and more.</p>
                            <div style={{ marginTop: '40px', background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #eee' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span>Breadcrumbs</span>
                                    <div style={{ width: '32px', height: '16px', background: '#007AFF', borderRadius: '12px' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span>Search</span>
                                    <div style={{ width: '32px', height: '16px', background: '#007AFF', borderRadius: '12px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sites-small-grid">
                        <div className="sites-small-card">
                            <Sun size={24} color="#007AFF" style={{ marginBottom: '16px' }} />
                            <h4>Theme</h4>
                            <p>Choose between light or dark mode.</p>
                        </div>
                        <div className="sites-small-card">
                            <Globe size={24} color="#007AFF" style={{ marginBottom: '16px' }} />
                            <h4>Favicon</h4>
                            <p>Make your site stand out with a custom favicon.</p>
                        </div>
                        <div className="sites-small-card">
                            <Smile size={24} color="#007AFF" style={{ marginBottom: '16px' }} />
                            <h4>Personal branding</h4>
                            <p>Remove the Notion logo to make it your own.</p>
                        </div>
                        <div className="sites-small-card">
                            <LineChart size={24} color="#007AFF" style={{ marginBottom: '16px' }} />
                            <h4>Google Analytics</h4>
                            <p>Integrate Google Analytics tracking in your site.</p>
                        </div>
                    </div>
                </section>

                {/* Launch Section */}
                <section className="sites-launch sites-container">
                    <div style={{ fontSize: '100px', marginBottom: '40px' }}>🕸️🚀✨</div>
                    <h2>Launch your site today.</h2>
                    <button className="btn-black btn-large">Get Notion Sites free →</button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SitesPage;

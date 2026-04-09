import React from 'react';
import './WebClipperPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Chrome,
    Compass,
    Twitter,
    Instagram,
    Monitor
} from 'lucide-react';

const WebClipperPage: React.FC = () => {
    return (
        <div className="web-clipper-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="wc-hero wc-container">
                    <div className="wc-hero-illustration">
                        <svg viewBox="0 0 400 300" width="280">
                            <circle cx="200" cy="150" r="100" fill="#f7f6f3" />
                            <path d="M150 150 Q175 100 250 150 T350 150" stroke="#333" strokeWidth="2" fill="none" />
                            <rect x="180" y="100" width="40" height="60" rx="4" fill="#fff" stroke="#333" strokeWidth="2" />
                            <path d="M190 120 H210 M190 130 H210 M190 140 H200" stroke="#333" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1>Notion Web Clipper</h1>
                    <p>Save any page on the web to Notion. We'll help you turn them into action.</p>
                    <div className="wc-install-buttons">
                        <button className="wc-btn"><Chrome size={20} /> Install for Chrome</button>
                        <button className="wc-btn"><Compass size={20} /> Install for Safari</button>
                        <button className="wc-btn"><Monitor size={20} /> Install for Firefox</button>
                    </div>
                </section>

                {/* Desktop Features */}
                <section className="wc-container">
                    <div className="wc-section-header">
                        <h2>On desktop</h2>
                        <p>One click to clip anything and view in Notion, online or off.</p>
                    </div>
                    <div className="wc-desktop-grid">
                        <div className="wc-feature-card">
                            <div className="wc-feature-image"></div>
                            <h3>Save it with one click</h3>
                            <p>Just hit the Notion logo to save any page you’re on.</p>
                        </div>
                        <div className="wc-feature-card">
                            <div className="wc-feature-image"></div>
                            <h3>Choose its destination</h3>
                            <p>Give it a home in Notion using the dropdown.</p>
                        </div>
                        <div className="wc-feature-card">
                            <div className="wc-feature-image"></div>
                            <h3>Make it actionable</h3>
                            <p>Add notes, share it, make it a task. Every item can be tagged, assigned and more.</p>
                        </div>
                        <div className="wc-feature-card">
                            <div className="wc-feature-image"></div>
                            <h3>Stay organized</h3>
                            <p>Keep a database of your clips for future reference and projects.</p>
                        </div>
                    </div>
                </section>

                {/* Mobile Section */}
                <section className="wc-container bg-light" style={{ background: '#fafafa' }}>
                    <div className="wc-section-header">
                        <h2>On iOS & Android</h2>
                        <p>Mobile app comes with built-in web clipper.</p>
                    </div>
                    <div className="wc-mobile-content">
                        <div>
                            <h3>Save anything with just two taps.</h3>
                            <p style={{ color: '#666', maxWidth: 300, fontSize: 16 }}>Now the share options in mobile browser include saving to Notion.</p>
                        </div>
                        <div className="wc-phone-mockup">
                            <div className="wc-phone-screen">
                                <div style={{ padding: 20 }}>
                                    <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Wikipedia</div>
                                    <div style={{ height: 10, width: '80%', background: '#eee', marginBottom: 8 }}></div>
                                    <div style={{ height: 10, width: '90%', background: '#eee', marginBottom: 8 }}></div>
                                    <div style={{ height: 10, width: '70%', background: '#eee', marginBottom: 20 }}></div>
                                    <div style={{ background: '#f7f6f3', padding: 15, borderRadius: 12, border: '1px solid #ddd' }}>
                                        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Notion</div>
                                        <div style={{ fontSize: 12, color: '#666' }}>Save Page</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wc-phone-mockup">
                            <div className="wc-phone-screen">
                                <div style={{ padding: 20 }}>
                                    <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>App Rebrand</div>
                                    <div style={{ height: 150, background: '#f7f6f3', borderRadius: 8, marginBottom: 20 }}></div>
                                    <div style={{ height: 10, width: '100%', background: '#eee', marginBottom: 8 }}></div>
                                    <div style={{ height: 10, width: '100%', background: '#eee', marginBottom: 8 }}></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Make it part of your flow.</h3>
                            <p style={{ color: '#666', maxWidth: 300, fontSize: 16 }}>Tag whatever you save, so you can easily find and use it later.</p>
                        </div>
                    </div>
                </section>

                {/* Site Logos */}
                <section className="wc-container wc-logo-wall">
                    <div className="wc-section-header">
                        <h2>Put the whole web into Notion</h2>
                        <p>Notion's Web Clipper supports the internet's top sites.</p>
                    </div>
                    <div className="wc-logo-group">
                        {[
                            { name: 'Wikipedia', icon: <Chrome size={40} /> },
                            { name: 'NYT', icon: <Chrome size={40} /> },
                            { name: 'Twitter', icon: <Twitter size={40} color="#1DA1F2" /> },
                            { name: 'Instagram', icon: <Instagram size={40} color="#E4405F" /> },
                            { name: 'Pinterest', icon: <Chrome size={40} /> }
                        ].map((site, i) => (
                            <div className="wc-logo-item" key={i}>
                                <div className="wc-logo-circle">{site.icon}</div>
                                <span style={{ fontSize: 14, color: '#666' }}>{site.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="wc-collage">
                        <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                            <div style={{ width: 300, height: 200, background: '#f7f6f3', borderRadius: 12, border: '1px solid #efefef' }}></div>
                            <div style={{ width: 300, height: 200, background: '#f7f6f3', borderRadius: 12, border: '1px solid #efefef', marginTop: 40 }}></div>
                            <div style={{ width: 300, height: 200, background: '#f7f6f3', borderRadius: 12, border: '1px solid #efefef' }}></div>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="wc-container bg-light" style={{ background: '#fafafa' }}>
                    <div className="wc-section-header">
                        <h2>New to Notion?</h2>
                        <p>It's easy to get started.</p>
                        <div className="wc-signup-form">
                            <input type="email" placeholder="Enter your email..." />
                            <button className="btn-black">Sign up</button>
                        </div>
                        <div className="wc-install-buttons">
                            <button className="wc-btn"><Chrome size={18} /> Install for Chrome</button>
                            <button className="wc-btn"><Compass size={18} /> Install for Safari</button>
                            <button className="wc-btn"><Monitor size={18} /> Install for Firefox</button>
                        </div>
                    </div>

                    <div className="wc-tweets-grid">
                        {[
                            { user: 'David Pierce', handle: '@pierce', content: "I've been a @NotionHQ user for over a year now, and they FINALLY released the update with like a half-dozen features I've been waiting for..." },
                            { user: 'Jonnie Hallman', handle: '@destroytoday', content: "Started blogging privately using @NotionHQ, where there's no save button and everything you write is live right away." },
                            { user: 'Maria Aldrey', handle: '@kirisima', content: "I get more excited every day with @NotionHQ. Not only it's an amazing platform for life organization, but their people and community are lovely..." },
                            { user: 'Harry Brignull', handle: '@harrybr', content: "I'm falling in love with @NotionHQ. As well as having wiki, kanban board and to-do list features, it basically has airtable built into it..." },
                            { user: 'David Weiner', handle: '@daweiner', content: "As someone who's failed to keep up with every single work/organizational app that's ever been recommended to or pushed on me, I'm amazed..." },
                            { user: 'Aswin Shibu', handle: '@ashwin_shabu', content: "Have to say that I absolutely love the CRM functionality that @NotionHQ provides. I use a CRM but always back everything up into a clean spreadsheet." }
                        ].map((t, i) => (
                            <div className="wc-tweet-card" key={i}>
                                <div className="wc-tweet-header">
                                    <div className="wc-tweet-avatar"></div>
                                    <div className="wc-tweet-user">
                                        <h4>{t.user}</h4>
                                        <span>{t.handle}</span>
                                    </div>
                                    <Twitter size={16} color="#1DA1F2" style={{ marginLeft: 'auto' }} />
                                </div>
                                <div className="wc-tweet-content">{t.content}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WebClipperPage;

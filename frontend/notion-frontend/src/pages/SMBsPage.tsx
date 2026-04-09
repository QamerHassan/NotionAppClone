import React from 'react';
import './SMBsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Quote } from 'lucide-react';

const SMBsPage: React.FC = () => {
    return (
        <div className="smbs-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="smbs-hero smbs-container">
                    <div className="smbs-hero-content">
                        <h1>Where teams work better, together</h1>
                        <p>Your projects, wikis and docs, all side by side. For small teams to large organizations.</p>
                        <div className="smbs-hero-btns">
                            <button className="btn-black">Get Notion free</button>
                            <button className="btn-white">Request a demo</button>
                        </div>
                    </div>
                    <div className="smbs-hero-illustration">
                        <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="400" height="200" rx="4" fill="white" stroke="black" strokeWidth="2" />
                            <circle cx="100" cy="120" r="30" stroke="black" strokeWidth="2" />
                            <circle cx="180" cy="110" r="35" stroke="black" strokeWidth="2" />
                            <circle cx="260" cy="125" r="25" stroke="black" strokeWidth="2" />
                            <path d="M350 100 L420 100 M350 130 L400 130 M350 160 L410 160" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <rect x="80" y="180" width="100" height="40" rx="2" stroke="black" strokeWidth="1" />
                            <rect x="200" y="180" width="80" height="40" rx="2" stroke="black" strokeWidth="1" />
                        </svg>
                    </div>
                </section>

                {/* Logo Cloud */}
                <section className="smbs-container">
                    <div className="logo-cloud-smbs">
                        <span style={{ fontWeight: 800, fontSize: 18 }}>codecademy</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>MITSUBISHI</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>headspace</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>Curology</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>branch</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>MatchGroup</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>mixpanel</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>Capgemini</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>figma</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>Spotify</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>TOYOTA</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>NETFLIX</span>
                        <span style={{ fontWeight: 800, fontSize: 18 }}>Discord</span>
                    </div>
                </section>

                {/* Ship projects faster */}
                <section className="smbs-feature smbs-container">
                    <h2>Ship projects faster</h2>
                    <p className="subtitle">Keep everyone aligned from scoping to launch day. Manage high-level projects and specific tasks with custom Gantt and Kanban setups.</p>

                    <div className="mockup-container">
                        <div className="project-list-mockup">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                                <span style={{ fontSize: '24px' }}>🚜</span>
                                <h3 style={{ fontSize: '24px', fontWeight: 800 }}>Projects</h3>
                            </div>
                            <div style={{ fontSize: '13px', color: '#666', borderBottom: '1px solid #efefef', paddingBottom: '8px', marginBottom: '16px' }}>List View</div>
                            {[
                                { name: 'Apple Login', status: 'P1', color: '#ff6b6b' },
                                { name: 'Performance Improvements', status: 'P1', color: '#ff6b6b' },
                                { name: 'Google Login', status: 'P3', color: '#feca57' },
                                { name: 'Improve Third Party Integrations', status: 'P3', color: '#feca57' },
                                { name: 'Evernote Import', status: 'P3', color: '#feca57' },
                                { name: 'Trello Import', status: 'P4', color: '#54a0ff' },
                                { name: 'Debug Slow Queries', status: 'P3', color: '#feca57' }
                            ].map((proj, i) => (
                                <div key={i} className="project-item">
                                    <div className="project-name">
                                        <div style={{ width: 12, height: 12, background: proj.color, borderRadius: '2px' }}></div>
                                        {proj.name}
                                    </div>
                                    <div className="project-status" style={{ background: proj.color + '20', color: proj.color }}>{proj.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="smbs-testimonial">
                        <Quote size={40} color="#efefef" style={{ marginBottom: '20px' }} />
                        <blockquote>“Notion helps us keep track of the 30+ projects we have going at once. We can click into any of them to get the full lay of the land right away.”</blockquote>
                        <div className="author-info">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <div className="author-name">Justin Watt</div>
                                <div className="author-title">Director of Ops & Marketing, MetaLab</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Your digital office */}
                <section className="smbs-feature smbs-container" style={{ backgroundColor: '#F7F6F3', borderRadius: '24px' }}>
                    <div style={{ padding: '80px' }}>
                        <h2>Your digital office</h2>
                        <p className="subtitle">Say goodbye to messy folders and different versions of the same doc. Keep everything in one central space, so everyone has what they need to do their best work.</p>

                        <div className="mockup-container" style={{ display: 'flex' }}>
                            <div style={{ width: '250px', backgroundColor: '#F7F6F3', padding: '24px', borderRight: '1px solid #efefef' }}>
                                <div style={{ fontWeight: 700, marginBottom: '20px' }}>All teamspaces</div>
                                <div style={{ fontSize: '13px', color: '#666' }}>
                                    <div style={{ padding: '4px 0' }}>General</div>
                                    <div style={{ padding: '4px 0' }}>Engineering</div>
                                    <div style={{ padding: '4px 0' }}>Sales</div>
                                    <div style={{ padding: '4px 0' }}>Marketing</div>
                                    <div style={{ backgroundColor: '#fff', borderRadius: '4px', padding: '8px', margin: '8px 0', fontWeight: 600 }}>Conference Planning</div>
                                </div>
                            </div>
                            <div style={{ flex: 1, padding: '40px' }}>
                                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🌍</div>
                                <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '32px' }}>Acme World 2023</h1>
                                <div style={{ background: '#fff9db', padding: '16px', borderRadius: '8px', marginBottom: '40px', fontSize: '14px' }}>
                                    👉 Use this space for meeting notes, planning docs, and project management for the upcoming Acme World conference!
                                </div>
                                <div style={{ display: 'flex', gap: '60px' }}>
                                    <div>
                                        <h4 style={{ marginBottom: '16px' }}>Planning</h4>
                                        <div style={{ fontSize: '14px' }}>
                                            <div style={{ padding: '4px 0' }}>Run of show schedule</div>
                                            <div style={{ padding: '4px 0' }}>Feature demos</div>
                                            <div style={{ padding: '4px 0' }}>Attendee emails</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '16px' }}>Resources</h4>
                                        <div style={{ fontSize: '14px' }}>
                                            <div style={{ padding: '4px 0' }}>Vendor list</div>
                                            <div style={{ padding: '4px 0' }}>Slide templates</div>
                                            <div style={{ padding: '4px 0' }}>Design System</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="smbs-testimonial" style={{ marginTop: '60px' }}>
                            <blockquote>“Before Notion, a lot of the team's knowledge was bottlenecked in the minds of a few. Now folks feel empowered to self serve and move at speed.”</blockquote>
                            <div className="author-info">
                                <div className="author-avatar"></div>
                                <div className="author-details">
                                    <div className="author-name">Sanjay Nand</div>
                                    <div className="author-title">Innovation Strategist, Capgemini</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Built for every team */}
                <section className="built-for-teams smbs-container">
                    <h2>Built for every team</h2>
                    <p className="subtitle">Notion solves problems unique to any function.</p>

                    <div className="team-grid">
                        <div className="team-card">
                            <div className="icon">⚙️</div>
                            <h4>Engineering</h4>
                            <p>Ship features faster with sprint tasks, code guidelines, bug fixes & more, all in one place.</p>
                            <a href="#" className="learn-more">Learn more <ArrowRight size={14} /></a>
                        </div>
                        <div className="team-card">
                            <div className="icon">🛍️</div>
                            <h4>Product</h4>
                            <p>Get your work into the world quicker with user research and cross-functional projects in Notion.</p>
                            <a href="#" className="learn-more">Learn more <ArrowRight size={14} /></a>
                        </div>
                        <div className="team-card">
                            <div className="icon">🎨</div>
                            <h4>Design</h4>
                            <p>Build a consistent design language by uniting assets, guides, and prototypes in Notion.</p>
                            <a href="#" className="learn-more">Learn more <ArrowRight size={14} /></a>
                        </div>
                    </div>
                </section>

                {/* Docs that keep everyone aligned */}
                <section className="smbs-feature smbs-container">
                    <div style={{ display: 'flex', gap: '80px' }}>
                        <div style={{ flex: 1 }}>
                            <h2>Docs that keep everyone aligned</h2>
                            <p className="subtitle">Meeting notes, goal planning, process docs — log all crucial decisions and give stakeholders visibility into who's doing what and when.</p>

                            <div className="mockup-container">
                                <div style={{ background: '#fff', padding: '32px' }}>
                                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎬</div>
                                    <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Marketing Wiki</h3>
                                    <div style={{ display: 'flex', gap: '40px' }}>
                                        <div>
                                            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Team & Process</h4>
                                            <div style={{ fontSize: '13px', color: '#666' }}>Marketing Tasks</div>
                                            <div style={{ fontSize: '13px', color: '#666' }}>Meeting Notes</div>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Assets</h4>
                                            <div style={{ fontSize: '13px', color: '#666' }}>Brand Assets</div>
                                            <div style={{ fontSize: '13px', color: '#666' }}>Social Media</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                            <div className="smbs-testimonial" style={{ textAlign: 'left', margin: 0 }}>
                                <blockquote>“We used to send meeting recap emails all the time. But now the team knows where to go if they have a question about scope or anything else.”</blockquote>
                                <div className="author-info" style={{ justifyContent: 'flex-start' }}>
                                    <div className="author-avatar"></div>
                                    <div className="author-details">
                                        <div className="author-name">Zoe Bachman</div>
                                        <div className="author-title">Curriculum Product Manager, Codecademy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Template Section */}
                <section className="template-section smbs-container">
                    <h2>Start with a template</h2>
                    <p style={{ color: '#666', marginBottom: '48px' }}>Add a pre-built setup to your team's workspace, then customize to serve your team's specific workflows.</p>

                    <div className="template-grid">
                        <div className="template-card">
                            <div style={{ width: 48, height: 48, backgroundColor: '#e67e22', borderRadius: '50%', marginBottom: '20px' }}></div>
                            <h4 style={{ fontWeight: 800, fontSize: 18, marginBottom: '8px' }}>Design system</h4>
                            <p style={{ fontSize: 13, color: '#666' }}>Every designer, new and old, should review this system and leave comments, feedback, or questions.</p>
                        </div>
                        <div className="template-card">
                            <div style={{ width: 48, height: 48, backgroundColor: '#3498db', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>m</div>
                            <h4 style={{ fontWeight: 800, fontSize: 18, marginBottom: '8px' }}>Match Group's roadmap</h4>
                            <p style={{ fontSize: 13, color: '#666' }}>Prioritize your big bets for the year to maintain vision.</p>
                        </div>
                    </div>
                </section>

                {/* Customer Love */}
                <section className="customer-love smbs-container">
                    <h2>See why customers love us</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
                        <div style={{ border: '1px solid #efefef', borderRadius: '12px', padding: '24px' }}>
                            <div style={{ color: '#ff4d4d', fontWeight: 800 }}>G2</div>
                            <div style={{ fontSize: 12, color: '#666' }}>Momentum Leader</div>
                            <div style={{ fontSize: 10, color: '#999' }}>SPRING 2023</div>
                        </div>
                        <div style={{ border: '1px solid #efefef', borderRadius: '12px', padding: '24px' }}>
                            <div style={{ color: '#ff4d4d', fontWeight: 800 }}>G2</div>
                            <div style={{ fontSize: 12, color: '#666' }}>Leader</div>
                            <div style={{ fontSize: 10, color: '#999' }}>SPRING 2023</div>
                        </div>
                        <div style={{ border: '1px solid #efefef', borderRadius: '12px', padding: '24px' }}>
                            <div style={{ color: '#ff4d4d', fontWeight: 800 }}>G2</div>
                            <div style={{ fontSize: 12, color: '#666' }}>Leader</div>
                            <div style={{ fontSize: 10, color: '#999' }}>SPRING 2023</div>
                        </div>
                    </div>
                    <div className="rating-grid">
                        <div className="rating-item">
                            <span className="val">86%</span>
                            <span className="label">Ease of use</span>
                        </div>
                        <div className="rating-item">
                            <span className="val">90%</span>
                            <span className="label">Ease of admin</span>
                        </div>
                        <div className="rating-item">
                            <span className="val">91%</span>
                            <span className="label">Meets requirements</span>
                        </div>
                        <div className="rating-item">
                            <span className="val">86%</span>
                            <span className="label">Ease of setup</span>
                        </div>
                    </div>
                </section>

                {/* Try Notion Today */}
                <section className="smbs-container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: '12px' }}>Try Notion today</h2>
                    <p style={{ color: '#666', marginBottom: '32px' }}>Get started for free, then add anyone you want.</p>
                    <button className="btn-black" style={{ padding: '16px 32px' }}>Get Notion free</button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SMBsPage;

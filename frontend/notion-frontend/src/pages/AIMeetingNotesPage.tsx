import React, { useState } from 'react';
import './AIMeetingNotesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Check,
    Video,
    MessageSquare,
    Calendar,
    User,
    Users,
    Phone,
    Briefcase,
    Lightbulb,
    Lock,
    Shield,
    FileText,
    History,
    PlusCircle,
    ChevronDown,
    Plus
} from 'lucide-react';

const AIMeetingNotesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        "How do I start using AI Meeting Notes in Notion?",
        "Does AI Meeting Notes work with Zoom, Google Meet, and Microsoft Teams?",
        "Can AI Meeting Notes create action items automatically?",
        "How fast are the summaries available after a meeting?",
        "Can I search across past meeting notes?",
        "Is my meeting data secure?",
        "Why use Notion's AI Meeting Notes instead of other meeting note apps?",
        "What languages does AI Meeting Notes support?",
        "Can I use AI Meeting Notes for any type of meeting?",
        "What should I look out for when buying meeting notes products?"
    ];

    return (
        <div className="meeting-notes-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="mn-hero mn-container">
                    <span className="category">AI Meeting Notes</span>
                    <h1>Perfect meeting memory.</h1>
                    <p>Your notetaker catches every detail and delivers actionable summaries, right where you work.</p>
                    <button className="nav-btn-primary blue large">Try for free</button>

                    <div className="mn-hero-visual">
                        <div className="mn-visual-header">
                            <div className={`mn-tab ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>
                                <FileText size={20} /> AI Summary
                            </div>
                            <div className={`mn-tab ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>
                                <FileText size={20} /> Notes
                            </div>
                            <div className={`mn-tab ${activeTab === 'transcript' ? 'active' : ''}`} onClick={() => setActiveTab('transcript')}>
                                <Video size={20} /> Transcript
                            </div>
                        </div>
                        <div className="mn-visual-content">
                            <div className="mn-step completed">
                                <div className="mn-check"><Check size={20} /></div>
                                <span>Analyzing the transcript and meeting context...</span>
                            </div>
                            <div className="mn-step completed">
                                <div className="mn-check"><Check size={20} /></div>
                                <span>Examining the users notes...</span>
                            </div>
                            <div className="mn-step">
                                <div className="mn-check" style={{ background: '#f1f1f1', color: '#666' }}><PlusCircle size={20} /></div>
                                <span style={{ opacity: 0.5 }}>Generating key takeaways and next steps...</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="mn-trust mn-container">
                    <p>Trusted by those at</p>
                    <div className="mn-trust-logos">
                        <span>OpenAI</span>
                        <span>Figma</span>
                        <span>deel.</span>
                        <span>perplexity</span>
                        <span>ramp</span>
                        <span>CURSOR</span>
                    </div>
                </section>

                {/* Tailored Section */}
                <section className="mn-tailored mn-container">
                    <h2>Tailored to every meeting.</h2>
                    <p className="subtitle">Every summary gives you exactly what you need to move work forward.</p>

                    <div className="mn-tailored-grid">
                        <div className="mn-tailored-card">
                            <User className="icon" />
                            <span>1:1s</span>
                        </div>
                        <div className="mn-tailored-card">
                            <Users className="icon" />
                            <span>Team syncs</span>
                        </div>
                        <div className="mn-tailored-card">
                            <Phone className="icon" />
                            <span>Client calls</span>
                        </div>
                        <div className="mn-tailored-card">
                            <Briefcase className="icon" />
                            <span>Interviews</span>
                        </div>
                        <div className="mn-tailored-card">
                            <Lightbulb className="icon" />
                            <span>Brainstorms</span>
                        </div>
                    </div>

                    <div className="mn-mockup-1-1">
                        <div className="mn-page-mockup">
                            <h3>1:1 Joyce & Sam @Today</h3>
                            <div className="mn-mockup-tabs">
                                <span>Summary</span>
                                <span>Notes</span>
                                <span>Transcript</span>
                            </div>
                            <div className="mn-mockup-text" style={{ marginTop: '20px' }}>
                                <p><strong>Key takeaways:</strong></p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#666' }}>
                                    <li>Joyce is happy with the progress on the Q3 roadmap</li>
                                    <li>Sam raised a concern about resource allocation for Page Editor</li>
                                    <li>Next week: Sam will demo the new drag-and-drop feature</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brainstorm Section (Yellow) */}
                <section className="mn-brainstorm" style={{ position: 'relative' }}>
                    <div className="mn-container">
                        <div className="mn-brainstorm-mockup">
                            <h3>Extreme Milkshake Launch Brainstorm</h3>
                            <div className="mn-mockup-tabs" style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #f1f1f1', paddingBottom: '12px' }}>
                                <span style={{ fontWeight: 600 }}>Summary</span>
                                <span style={{ opacity: 0.5 }}>Notes</span>
                                <span style={{ opacity: 0.5 }}>Transcript</span>
                            </div>
                            <div style={{ marginTop: '24px' }}>
                                <h4>Campaign Overview</h4>
                                <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 }}>
                                    The marketing team discussed ideas for an unconventional pop-up experience to launch the new "Cosmic Craze" milkshake, aiming to create viral social media buzz and drive brand awareness.
                                </p>
                                <h4>Concept Ideas</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
                                    <li>Zero-gravity milkshake experience in partnership with a flight provider that offers parabolic flights</li>
                                    <li>Interactive "Upside-Down Milkshake Lab" where customers hang from velcro boots while enjoying the shake</li>
                                    <li>Glow-in-the-dark pop-up shop with UV-reactive milkshakes that change color as you drink them</li>
                                </ul>
                            </div>
                            {/* Floating video window simulation */}
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '40px',
                                width: '300px',
                                background: '#1a1a1a',
                                borderRadius: '12px',
                                padding: '16px',
                                color: 'white',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}>
                                <div style={{ fontSize: '11px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
                                    <span>Launch Brainstorm w/ Marketing Team</span>
                                    <span>10:44 AM</span>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
                                    <div style={{ width: '60px', height: '60px', background: '#333', borderRadius: '50%', border: '2px solid #555' }}></div>
                                    <div style={{ width: '60px', height: '60px', background: '#333', borderRadius: '50%', border: '2px solid #555' }}></div>
                                    <div style={{ width: '60px', height: '60px', background: '#333', borderRadius: '50%', border: '2px solid #555' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                    <div style={{ width: '32px', height: '32px', background: '#444', borderRadius: '50%' }}></div>
                                    <div style={{ width: '32px', height: '32px', background: '#444', borderRadius: '50%' }}></div>
                                    <div style={{ width: '32px', height: '32px', background: '#444', borderRadius: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Works Everywhere */}
                <section className="mn-works mn-container">
                    <h2>Works everywhere you do.</h2>
                    <p className="center">Capture conversations anywhere. Sync your calendar, and note-taking happens automatically.</p>

                    <div className="mn-works-grid">
                        <div className="mn-work-card">
                            <Video className="icon" />
                            <h4>Works with any video tool</h4>
                            <p>It transcribes your system's audio and mic. No setup, no bots.</p>
                            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', opacity: 0.6 }}>
                                <span>Zoom</span>
                                <span>Teams</span>
                                <span>Meet</span>
                            </div>
                        </div>
                        <div className="mn-work-card">
                            <MessageSquare className="icon" />
                            <h4>Even for face-to-face</h4>
                            <p>Capture notes in person on any device.</p>
                            <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', marginTop: '20px', border: '1px solid #eee' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <strong>Design Weekly Jam</strong>
                                    <span style={{ fontSize: '10px', background: '#fee', color: '#f00', padding: '2px 6px', borderRadius: '10px' }}>REC</span>
                                </div>
                                <p style={{ fontSize: '12px', color: '#888' }}>Listening...</p>
                            </div>
                        </div>
                        <div className="mn-work-card">
                            <Calendar className="icon" />
                            <h4>Syncs with your calendar</h4>
                            <p>Notes get created, started, and shared with attendees for you.</p>
                            <button className="nav-btn-primary blue" style={{ marginTop: '20px', width: '100%' }}>Start AI Meeting Notes</button>
                        </div>
                    </div>
                </section>

                {/* Progress Section */}
                <section className="mn-progress mn-container">
                    <h2>The only place where notes turn into progress.</h2>
                    <p className="center">Act on meeting outcomes in Notion. Notion AI handles the follow-ups so you can focus on what's next.</p>

                    <div className="mn-progress-grid">
                        <div className="mn-progress-item">
                            <h3>Action items become your to-dos</h3>
                            <p>Your Notion Agent can help assign tasks with owners, priority levels and due dates, making sure they get done.</p>
                            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
                                <div style={{ fontWeight: 700, marginBottom: '16px' }}>Bug Tracking Dashboard</div>
                                <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '8px' }}>
                                    <div style={{ fontSize: '13px', color: '#555' }}>Progress Hub</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: '12px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
                                        <span>PDF export issues</span>
                                        <span style={{ color: '#eb5757', fontWeight: 600 }}>High</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: '8px' }}>
                                        <span>Back navigation broken</span>
                                        <span style={{ color: '#eb5757', fontWeight: 600 }}>High</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mn-progress-item">
                            <h3>Projects are updated automatically</h3>
                            <p>Get your Notion Agent to keep projects updated after meeting with new statuses, completed tasks, and revised timelines.</p>
                            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
                                <div style={{ fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '20px', height: '20px', background: 'blue', borderRadius: '4px' }}></div> Sales Meeting Updates
                                </div>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{ flex: 1, height: '60px', background: '#f5f5f5', borderRadius: '4px' }}></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="mn-security mn-container">
                    <h2>Security and privacy at the highest standards.</h2>
                    <div className="mn-security-grid">
                        <div className="mn-security-item">
                            <Lock className="icon" />
                            <h4>No training on your data</h4>
                            <p>We have contractual agreements with our AI subprocessors that prohibit the use of customer data to train their models.</p>
                        </div>
                        <div className="mn-security-item">
                            <History className="icon" />
                            <h4>Configurable transcript retention</h4>
                            <p>Workspace owners can set auto-transcript deletion windows and decide whether to store audio locally.</p>
                        </div>
                        <div className="mn-security-item">
                            <Shield className="icon" />
                            <h4>Built-in safeguards</h4>
                            <p>With audit logs, granular permissions, and SSO, your sensitive work stays secure.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing / Plan Section */}
                <section className="mn-pricing mn-container">
                    <h2>The Business plan is designed for your best work.</h2>
                    <div className="mn-pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '60px' }}>
                        <div className="mn-price-card" style={{ border: '1px solid #eee', borderRadius: '24px', padding: '40px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Free</div>
                            <div style={{ fontSize: '48px', fontWeight: 700 }}>$0</div>
                            <div style={{ color: '#666', marginBottom: '24px' }}>per member / month</div>
                            <button className="nav-btn-text" style={{ width: '100%', border: '1px solid #eee', padding: '12px', borderRadius: '8px', marginBottom: '32px' }}>Sign up</button>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                <li><Check size={14} color="green" /> Free for individual usage</li>
                                <li><Check size={14} color="green" /> Basic forms</li>
                                <li><Check size={14} color="green" /> Notion Calendar</li>
                                <li><Check size={14} color="green" /> Notion Mail (Syncs with Gmail)</li>
                            </ul>
                        </div>
                        <div className="mn-price-card" style={{ border: '2px solid #007aff', borderRadius: '24px', padding: '40px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '20px', right: '40px', background: '#eef6ff', color: '#007aff', fontSize: '10px', padding: '4px 10px', borderRadius: '10px', fontWeight: 700 }}>Recommended</div>
                            <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Business</div>
                            <div style={{ fontSize: '48px', fontWeight: 700 }}>$20</div>
                            <div style={{ color: '#666', marginBottom: '24px' }}>per member / month</div>
                            <button className="nav-btn-primary blue" style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '32px' }}>Get started</button>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                <li><Check size={14} color="green" /> SAML SSO</li>
                                <li><Check size={14} color="green" /> Granular database permissions</li>
                                <li><Check size={14} color="green" /> Private teamspaces</li>
                                <li><Check size={14} color="green" /> Domain verification</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Q&A Section */}
                <section className="mn-qa mn-container" style={{ padding: '100px 0' }}>
                    <h2>Questions & Answers</h2>
                    <div className="mn-qa-list" style={{ marginTop: '40px' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} className="mn-qa-item" style={{ borderBottom: '1px solid #f1f1f1' }}>
                                <div
                                    className="mn-qa-trigger"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}
                                >
                                    {faq}
                                    {openFaq === i ? <ChevronDown style={{ transform: 'rotate(180deg)' }} /> : <Plus size={20} />}
                                </div>
                                {openFaq === i && (
                                    <div style={{ paddingBottom: '24px', color: '#666', fontSize: '15px' }}>
                                        This is a placeholder answer for the question above. In the full version, you'll find detailed information here about Notion's AI Meeting Notes.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mn-testimonials mn-container" style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '48px', textAlign: 'center', marginBottom: '16px' }}>Stop splitting your attention in meetings.</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px' }}>Real takes from people who switched to AI meeting notes.</p>
                    <div className="mn-testimonial-grid">
                        <div className="mn-t-card">
                            <div style={{ fontSize: '24px', fontWeight: 800, color: '#333', marginBottom: '20px' }}>𝕏</div>
                            <div className="mn-t-content">"Loving Notion AI. My boss couldn't make a meeting today and was like 'hey... use they AI meeting notes that you used that one time'. Gladly 😎."</div>
                            <div className="mn-t-author">
                                <div className="mn-t-info">
                                    <div>Mark</div>
                                    <div>@miningmark48</div>
                                </div>
                            </div>
                        </div>
                        <div className="mn-t-card">
                            <div style={{ fontSize: '24px', fontWeight: 800, color: '#333', marginBottom: '20px' }}>𝕏</div>
                            <div className="mn-t-content">"Great additions to an already incredible platform. AI Meeting Notes and Research Mode alone can save teams hours each week. And having access to both GPT-4.1 and Claude 3.7 is really powerful."</div>
                            <div className="mn-t-author">
                                <div className="mn-t-info">
                                    <div>George Ralph</div>
                                    <div>@GeorgeNWRalph</div>
                                </div>
                            </div>
                        </div>
                        <div className="mn-t-card">
                            <div style={{ fontSize: '24px', fontWeight: 800, color: '#333', marginBottom: '20px' }}>𝕏</div>
                            <div className="mn-t-content">"The AI meeting notes feature is tooooooo goooood."</div>
                            <div className="mn-t-author">
                                <div className="mn-t-info">
                                    <div>Ankit Mhatre</div>
                                    <div>@ankitmhatree</div>
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

export default AIMeetingNotesPage;

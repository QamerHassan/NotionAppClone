import React from 'react';
import './MailPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Send,
    Inbox,
    Calendar,
    Heart,
    Briefcase,
    Plus,
    Shield,
    FileText,
    Search,
    Edit3
} from 'lucide-react';

const MailPage: React.FC = () => {
    return (
        <div className="mail-page">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="mail-hero mail-container">
                    <div className="mail-hero-logo">
                        <Send size={80} style={{ transform: 'rotate(-45deg)' }} />
                    </div>
                    <h1>The inbox that thinks like you</h1>
                    <p>Meet Notion Mail, the inbox that organizes itself, drafts emails, and schedules meetings any way you’d like.</p>
                    <button className="mail-btn-large">Get Notion Mail free</button>
                </section>

                {/* Main Mockup */}
                <div className="mail-container">
                    <div className="mail-mockup-wrapper">
                        <div className="mail-mockup-sidebar">
                            <div className="sidebar-user">
                                <div style={{ width: 20, height: 20, background: '#333', borderRadius: 4 }}></div>
                                <span>Doru</span>
                            </div>
                            <div className="sidebar-item"><Search size={16} /> Search</div>
                            <div className="sidebar-section" style={{ marginTop: 24 }}>
                                <h4>Views</h4>
                                <div className="sidebar-item active"><Inbox size={16} /> Inbox</div>
                                <div className="sidebar-item"><Calendar size={16} /> Calendar</div>
                                <div className="sidebar-item"><Briefcase size={16} /> Hiring</div>
                                <div className="sidebar-item"><Heart size={16} /> Support</div>
                                <div className="sidebar-item">✈️ Travel</div>
                            </div>
                            <div className="sidebar-section" style={{ marginTop: 24 }}>
                                <h4>Mail</h4>
                                <div className="sidebar-item"><Edit3 size={16} /> Sent</div>
                                <div className="sidebar-item"><FileText size={16} /> Drafts</div>
                            </div>
                        </div>
                        <div className="mail-mockup-content">
                            <div className="mail-list-header">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
                                    <Inbox size={16} /> Inbox
                                </div>
                                <div style={{ fontSize: 12, border: '1px solid #eee', padding: '4px 10px', borderRadius: 6 }}>✨ Auto Label</div>
                            </div>
                            {[
                                { sender: 'Andrew, Jason', subject: 'Next steps', tag: 'Hiring', tClass: 'tag-hiring' },
                                { sender: 'Jack Steadman', subject: "Can't find log out button", tag: 'Support', tClass: 'tag-support' },
                                { sender: 'Bud, Stephanie', subject: 'Product design role', tag: 'Hiring', tClass: 'tag-hiring' },
                                { sender: 'Natalie', subject: 'Dark mode looks off', tag: 'Support', tClass: 'tag-support' },
                                { sender: 'Kosta B', subject: 'Technical interview', tag: 'Hiring', tClass: 'tag-hiring' },
                                { sender: 'Sunny, Vaishnavi', subject: 'Re: Coffee', tag: 'Hiring', tClass: 'tag-hiring' },
                                { sender: 'Enabled MD', subject: 'Exciting new role', tag: 'Hiring', tClass: 'tag-hiring' },
                                { sender: 'Michal Louisa', subject: 'Pending: Your input on project scope', tag: 'Cold email', tClass: 'tag-cold' }
                            ].map((mail, i) => (
                                <div className="mail-row" key={i}>
                                    <span className="mail-sender">{mail.sender}</span>
                                    <span className="mail-subject">{mail.subject}</span>
                                    <span className={`mail-tag ${mail.tClass}`}>{mail.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Feature */}
                <section className="bg-light">
                    <div className="mail-container mail-features-grid">
                        <div className="mail-feature-text">
                            <h2>Every email organized, automatically.</h2>
                            <p>Tell Notion AI what types of emails are important to read, and it’ll automatically label and filter your inbox for you.</p>
                        </div>
                        <div className="mail-feature-visual">
                            <div style={{ background: '#fff', padding: 30, borderRadius: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                                    <Inbox size={20} color="#e91e63" />
                                    <span style={{ fontWeight: 700 }}>Inbox</span>
                                    <div style={{ marginLeft: 'auto', fontSize: 12, background: '#f7f6f3', padding: '4px 8px', borderRadius: 6 }}>Auto label</div>
                                </div>
                                <div style={{ background: '#eef1f5', height: 40, borderRadius: 8, marginBottom: 12, display: 'flex', alignItems: 'center', padding: '0 15px', fontWeight: 600 }}>Signature</div>
                                <div style={{ background: '#eef1f5', height: 40, borderRadius: 8, marginBottom: 12, display: 'flex', alignItems: 'center', padding: '0 15px', fontWeight: 600 }}>Signature</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mail-container mail-features-grid">
                        <div className="mail-feature-visual">
                            <div style={{ background: '#fff', padding: 30, borderRadius: 12, border: '1px solid #efefef' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                                    <div style={{ width: 24, height: 24, background: '#eee', borderRadius: 4 }}></div>
                                    <span style={{ fontWeight: 600, fontSize: 14 }}>Diana M</span>
                                </div>
                                <div style={{ height: 10, width: '90%', background: '#eee', marginBottom: 8 }}></div>
                                <div style={{ height: 10, width: '70%', background: '#eee', marginBottom: 20 }}></div>
                                <div style={{ background: '#fafafa', padding: 15, borderRadius: 8 }}>
                                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Partnership</div>
                                    <div style={{ fontSize: 13, color: '#333' }}>Hey Andrew, Hope you're doing well! Just wanted to introduce myself—I'm Alex, a designer at Acme Labs.</div>
                                </div>
                            </div>
                        </div>
                        <div className="mail-feature-text">
                            <h2>Every reply drafted, quickly.</h2>
                            <p>Write high-quality emails with Notion AI. Just give it a few words and it’ll turn them into a polished draft, using context from your workspace.</p>
                        </div>
                    </div>
                </section>

                {/* Sub Features */}
                <section className="bg-light">
                    <div className="mail-container mail-features-grid" style={{ gap: 40 }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ height: 200, background: '#fff', borderRadius: 16, marginBottom: 24, border: '1px solid #efefef' }}></div>
                            <h3>Split your inbox into custom views that match your focus areas.</h3>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ height: 200, background: '#fff', borderRadius: 16, marginBottom: 24, border: '1px solid #efefef' }}></div>
                            <h3>Group and filter emails by topic, sender, label—whatever you need.</h3>
                        </div>
                    </div>
                </section>

                {/* Availability */}
                <section className="mail-container">
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2>Available anywhere, even offline.</h2>
                    </div>
                    <div className="mail-download-grid">
                        <div className="mail-download-card">
                            <div style={{ height: 300, background: '#f7f6f3', borderRadius: 12, marginBottom: 24 }}></div>
                            <p>Email on the go with the iOS app.</p>
                            <button className="mail-btn-large" style={{ marginTop: 20 }}>Download for iOS →</button>
                        </div>
                        <div className="mail-download-card">
                            <div style={{ height: 300, background: '#f7f6f3', borderRadius: 12, marginBottom: 24 }}></div>
                            <p>Email without distractions. Get the Mac App.</p>
                            <button className="mail-btn-large" style={{ marginTop: 20 }}>Download for macOS →</button>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="bg-light">
                    <div className="mail-container" style={{ textAlign: 'center' }}>
                        <h2>Built with data security in mind.</h2>
                        <div className="mail-security-badges">
                            <div className="badge-item"><Shield size={24} color="#4a90e2" /> GDPR & CCPA compliant.</div>
                            <div className="badge-item"><Shield size={24} color="#4a90e2" /> No training on your data.</div>
                            <div className="badge-item"><Shield size={24} color="#4a90e2" /> HIPAA and SOC 2 (Type 1) certified.</div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mail-container mail-faq">
                    <h2>Questions & answers</h2>
                    {[
                        "Which email provider(s) are Notion Mail compatible with?",
                        "When will Notion Mail be available on mobile devices?",
                        "What languages are Notion Mail available in?",
                        "Can I manage multiple emails accounts on Notion Mail?",
                        "What are Notion Mail's security standards?"
                    ].map((q, i) => (
                        <div className="faq-item" key={i}>
                            <div className="faq-header">
                                <span>{q}</span>
                                <Plus size={20} />
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MailPage;

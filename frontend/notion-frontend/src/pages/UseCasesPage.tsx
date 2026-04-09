import React, { useState } from 'react';
import './UseCasesPage.css';
import Navbar from '../components/Navbar';
import logo from '../assets/notion-logo.png';
import heroLeft from '../assets/usecases-hero-left.png';
import aiHero from '../assets/ai-hero.png'; // Reusing for variety

const UseCasesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('For Work');

    const useCases = [
        {
            text: "Build an onboarding guide for a new engineer who is joining as a software engineer on the mobile team. Include a database of people to meet, a checklist of tools to get set up with, and links to...",
            title: "Onboard a new hire",
            source: "Notion",
            img: null
        },
        {
            text: "Certainly! I'd be happy to brainstorm some tips for training for a 10k race. Here are various ideas to help you prepare...",
            title: "Chat about anything",
            source: null,
            img: "https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/product/ai/use-cases/chat-mock.png"
        },
        {
            text: "I need to get back to this client with a scope and clear plan for the next couple of days of work together. Can you analyze this transcript as well as the proposal and previous meetings transcripts that are...",
            title: "Draft client scopes from transcripts and docs",
            source: null,
            img: null
        },
        {
            text: "Create a competitor analysis report of the top 5 health soda brands by revenue. Include a database with pricing, messaging, and target demographics. Identify market trends and opportunities.",
            title: "Create a competitor analysis report",
            source: "Notion",
            img: null
        },
        {
            text: "Create a study guide for CS101. Use the database below to capture notes for each week's lecture, then expand the sections below for expectations, policies, and...",
            title: "Create a study guide",
            source: "Notion",
            img: null
        },
        {
            text: "Turn these sticky notes from our brainstorm into a roadmap database. Group similar ideas and prioritize by importance.",
            title: "Go from brainstorm to roadmap",
            source: null,
            img: null
        }
    ];

    return (
        <div className="use-cases-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="uc-hero uc-container">
                    <div className="uc-hero-visuals">
                        <img src={heroLeft} alt="" className="uc-hero-img-left" />
                        <img src={aiHero} alt="" className="uc-hero-img-right" style={{ opacity: 0.6, transform: 'scaleX(-1)' }} />
                    </div>
                    <h1>What can Notion AI do?</h1>
                    <p>Ask it anything, or get started with our library of use cases.</p>
                    <div className="uc-learn-more">
                        <img src={logo} alt="" style={{ width: '20px' }} />
                        <span>Learn more</span>
                    </div>
                </section>

                <section className="uc-filters uc-container">
                    {['For Work', 'For Life', 'Community', 'Notion'].map(filter => (
                        <div
                            key={filter}
                            className={`uc-chip ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </div>
                    ))}
                </section>

                <section className="uc-grid uc-container">
                    {useCases.map((uc, i) => (
                        <div key={i} className="uc-card">
                            <div className="uc-card-content">
                                <div className="uc-card-text">{uc.text}</div>
                                <div className="uc-card-footer">
                                    <div className="uc-card-title">{uc.title}</div>
                                    {uc.source && (
                                        <div className="uc-card-source">
                                            <img src={logo} alt="" style={{ width: '14px' }} />
                                            <span>{uc.source}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {uc.img && <img src={uc.img} alt="" className="uc-card-img" />}
                        </div>
                    ))}
                </section>

                <div className="uc-pagination uc-container">
                    {[1, 2, 3, 4, 5, '→'].map((num, i) => (
                        <div key={i} className={`uc-page-num ${num === 1 ? 'active' : ''}`}>
                            {num}
                        </div>
                    ))}
                </div>

                <section className="uc-share uc-container">
                    <div className="uc-share-content">
                        <h2>Share your use case</h2>
                        <p>Have you discovered an amazing way to use Notion AI? Share your use case and help others unlock new possibilities.</p>
                        <ul className="uc-share-list">
                            <li>Get featured in our showcase and social channels</li>
                            <li>Promote your business</li>
                            <li>Earn community badges and recognition</li>
                        </ul>
                        <div className="uc-share-btns">
                            <button className="btn-uc-black">Submit</button>
                            <button className="btn-uc-plain">View guidelines</button>
                        </div>
                    </div>
                    <div className="uc-share-img">
                        <div style={{ background: '#f7f6f3', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
                            <div style={{ fontSize: '64px' }}>🖊️💻📈</div>
                            <div style={{ marginTop: '20px', fontWeight: 600, fontSize: '20px' }}>Community Showcase</div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Simple Footer Replica based on screenshot 4 */}
            <footer className="uc-container" style={{ padding: '80px 40px', borderTop: '1px solid #f1f1f1', marginTop: '80px' }}>
                <div style={{ display: 'flex', gap: '80px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '20px', marginBottom: '24px' }}>
                            <img src={logo} alt="" style={{ width: '24px' }} /> Notion
                        </div>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '20px', opacity: 0.6 }}>
                            📸 ✖️ 🔗 👤 🎥
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', flex: 1 }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Company</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>About us</span><span>Careers</span><span>Security</span><span>Status</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Download</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>iOS & Android</span><span>Mac & Windows</span><span>Calendar</span><span>Web Clipper</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Resources</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>Help center</span><span>Pricing</span><span>Blog</span><span>Community</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '16px' }}>Notion for</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666' }}>
                                <span>Enterprise</span><span>Small business</span><span>Personal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '60px', fontSize: '12px', color: '#666' }}>
                    © 2026 Notion Labs, Inc.
                </div>
            </footer>
        </div>
    );
};

export default UseCasesPage;

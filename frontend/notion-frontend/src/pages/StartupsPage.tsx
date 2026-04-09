import React, { useState } from 'react';
import './StartupsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Check, Sparkles, Layout, PenTool, Layers, Rocket, TrendingUp } from 'lucide-react';

const StartupsPage: React.FC = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [activeTab, setActiveTab] = useState('ideate');
    const [selectedTools, setSelectedTools] = useState<string[]>(['chatbot', 'wiki', 'project']);

    const toggleTool = (id: string) => {
        if (selectedTools.includes(id)) {
            setSelectedTools(selectedTools.filter(t => t !== id));
        } else {
            setSelectedTools([...selectedTools, id]);
        }
    };

    const monthlySavings = (selectedTools.length * 20 + 10) * teamSize;
    const annualSavings = monthlySavings * 12;

    return (
        <div className="startups-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="startups-hero startups-container">
                    <span className="badge">Notion for Startups</span>
                    <h1>One workspace.<br />Every startup tool.</h1>
                    <p>The AI workspace from idea to exit. Get up to 6 months free on the Business plan with Notion AI included.</p>
                    <button className="btn-blue">Get Started Free →</button>

                    <div className="logo-cloud">
                        <div className="logo-cloud-title">The fastest growing companies in history build on Notion</div>
                        <div className="logo-grid">
                            <span className="logo-item">OpenAI</span>
                            <span className="logo-item"><span style={{ color: '#0acf83' }}>◆</span> Figma</span>
                            <span className="logo-item">deel.</span>
                            <span className="logo-item"><span style={{ color: '#00d1ff' }}>✦</span> perplexity</span>
                            <span className="logo-item">ramp ↗</span>
                            <span className="logo-item">CURSOR</span>
                        </div>
                    </div>
                </section>

                {/* ROI Calculator */}
                <section className="roi-calculator-section startups-container">
                    <div style={{ textAlign: 'left' }}>
                        <h2>Move faster, cut costs.</h2>
                        <p className="subtitle">Go all-in-one with the AI workspace that scales with you. Get the Business plan free for up to 6 months and save $12,000.</p>
                        <a href="#get-started" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: 600 }}>Get Started Free →</a>
                    </div>

                    <div className="calc-card" style={{ marginTop: '48px' }}>
                        <div className="calc-title">Too many AI tools? Calculate potential savings here.</div>
                        <div className="tool-grid">
                            {[
                                { id: 'search', label: 'AI Search' },
                                { id: 'assistant', label: 'AI Writing Assistant' },
                                { id: 'calendar', label: 'Calendar Scheduling' },
                                { id: 'crm', label: 'Basic CRM' },
                                { id: 'chatbot', label: 'AI Chatbot', price: '$20/user' },
                                { id: 'email', label: 'AI Email App' },
                                { id: 'wiki', label: 'Team Wiki', price: '$10/user' },
                                { id: 'builder', label: 'Site Builder' },
                                { id: 'notes', label: 'AI Meeting Notes' },
                                { id: 'research', label: 'AI Research' },
                                { id: 'project', label: 'Project Management Tool', price: '$24/user' },
                                { id: 'forms', label: 'Forms' }
                            ].map(tool => (
                                <div key={tool.id} className="tool-checkbox">
                                    <input
                                        type="checkbox"
                                        id={tool.id}
                                        checked={selectedTools.includes(tool.id)}
                                        onChange={() => toggleTool(tool.id)}
                                    />
                                    <label htmlFor={tool.id}>{tool.label} {tool.price && <span style={{ color: '#999', fontSize: 12 }}>{tool.price}</span>}</label>
                                </div>
                            ))}
                        </div>

                        <div className="calc-inputs">
                            <div className="input-group">
                                <label>Team size</label>
                                <input
                                    type="number"
                                    className="team-size-input"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                                />
                            </div>
                            <div className="input-group savings-box">
                                <label>Monthly savings</label>
                                <div className="value">${monthlySavings.toLocaleString()}</div>
                            </div>
                            <div className="input-group savings-box">
                                <label>Annual savings</label>
                                <div className="value">${annualSavings.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tool of Choice Stats */}
                <section className="startups-container">
                    <h2 style={{ fontSize: '48px', fontWeight: 800, margin: '100px 0 60px' }}>The tool of choice for startups.</h2>
                    <div className="stats-section">
                        <div className="stat-item">
                            <span className="stat-value">94%</span>
                            <span className="stat-label">of Forbes AI 50 companies use Notion</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">50%</span>
                            <span className="stat-label">of YC companies use Notion</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">70%</span>
                            <span className="stat-label">of users replaced 2+ tools</span>
                        </div>
                    </div>
                </section>

                {/* Feature Tabs */}
                <section className="feature-tabs-section startups-container">
                    <h2>Build and scale your startup—all in one place.</h2>
                    <div className="tab-nav">
                        {[
                            { id: 'ideate', title: 'Ideate', desc: 'Go from idea to plan faster with AI help.', icon: <Layout size={20} /> },
                            { id: 'fundraise', title: 'Fundraise', desc: 'From pitch to close, organized in Notion.', icon: <TrendingUp size={20} /> },
                            { id: 'build', title: 'Build', desc: 'Ship and iterate rapidly.', icon: <PenTool size={20} /> },
                            { id: 'launch', title: 'Launch', desc: 'Plan and collaborate in one place.', icon: <Rocket size={20} /> },
                            { id: 'scale', title: 'Scale', desc: 'Keep teams focused and goals on track.', icon: <Layers size={20} /> }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div style={{ color: '#007AFF', marginBottom: '12px' }}>{tab.icon}</div>
                                <span className="tab-title">{tab.title}</span>
                                <span className="tab-desc">{tab.desc}</span>
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                <div style={{ width: '250px', background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #efefef' }}>
                                    <div style={{ fontWeight: 700, marginBottom: '16px' }}>Acme Inc.</div>
                                    <div style={{ fontSize: 13, color: '#666' }}>
                                        <div style={{ marginBottom: '8px' }}>Search</div>
                                        <div style={{ marginBottom: '8px' }}>Home</div>
                                        <div style={{ marginBottom: '8px' }}>Inbox</div>
                                    </div>
                                    <hr style={{ border: 'none', borderTop: '1px solid #efefef', margin: '16px 0' }} />
                                    <div style={{ fontWeight: 600, fontSize: 12, color: '#999', marginBottom: '12px' }}>TEAMSPACES</div>
                                    <div style={{ fontSize: 13 }}>
                                        <div style={{ marginBottom: '8px' }}>Company OS</div>
                                        <div style={{ marginBottom: '8px' }}>Product</div>
                                        <div style={{ marginBottom: '8px' }}>Engineering</div>
                                        <div style={{ marginBottom: '8px' }}>Marketing</div>
                                    </div>
                                </div>
                                <div style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '40px', border: '1px solid #efefef', position: 'relative' }}>
                                    <div style={{ height: '200px', background: 'url("https://www.notion.so/images/page-cover/met_tokyo_under_the_wave_off_kanagawa.jpg")', backgroundSize: 'cover', borderRadius: '4px', marginBottom: '32px' }}></div>
                                    <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: '24px' }}>Acme Inc.</h2>
                                    <div style={{ display: 'flex', gap: '40px' }}>
                                        <div>
                                            <h4 style={{ marginBottom: '16px' }}>Policies</h4>
                                            <div style={{ fontSize: 14 }}>
                                                <div>Expense Policy</div>
                                                <div>Vacation & PTO</div>
                                                <div>Employee Handbook</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style={{ marginBottom: '16px' }}>Company</h4>
                                            <div style={{ fontSize: 14 }}>
                                                <div>Annual Strategy</div>
                                                <div>What's New?</div>
                                                <div>Meetings</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* AI Popup Mockup */}
                                    <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '300px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', padding: '20px', border: '1px solid #efefef' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                            <Sparkles size={16} color="#007AFF" />
                                            <span style={{ fontWeight: 600, fontSize: 14 }}>Ask AI anything...</span>
                                        </div>
                                        <div style={{ fontSize: 13, color: '#666' }}>
                                            Where can I learn more about career goals at Acme Labs?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="startups-container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.4, marginBottom: '40px' }}>
                            “Having our technical documentation in Notion means that solutions we discover today become organizational knowledge tomorrow. What used to take hours of debugging can now be solved in minutes just by asking Notion AI.”
                        </p>
                        <div style={{ fontWeight: 800, fontSize: '24px', marginBottom: '8px' }}>OpenAI</div>
                        <div style={{ color: '#666' }}>John Allard, Engineering</div>
                    </div>
                </section>

                <section className="startups-container" style={{ padding: '80px 0' }}>
                    <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: '16px' }}>Get every AI tool you need —free for up to 6 months.</h2>
                    <a href="#get-started" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: 600 }}>Get Started Free →</a>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <h4 style={{ marginBottom: '16px' }}>Use AI to speed up work. Write, analyze, generate, anything—just ask Notion AI.</h4>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #efefef', marginTop: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <Sparkles size={16} color="#007AFF" />
                                    <span style={{ fontWeight: 600, fontSize: 14 }}>Notion AI</span>
                                </div>
                                <div style={{ fontSize: 13, border: '1px solid #efefef', padding: '12px', borderRadius: '8px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>OpenAI GPT-4o</span>
                                    <Check size={14} color="#007AFF" />
                                </div>
                                <div style={{ fontSize: 13, border: '1px solid #efefef', padding: '12px', borderRadius: '8px' }}>
                                    <span>Anthropic Claude 3.5</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <h4 style={{ marginBottom: '16px' }}>Capture meeting notes automatically where your team moves work forward.</h4>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #efefef', marginTop: '40px' }}>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: 14, height: 14, background: '#e03e3e', borderRadius: '2px' }}></div>
                                    <div style={{ fontWeight: 700, fontSize: 14 }}>Dashboard Redesign</div>
                                </div>
                                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>
                                    Centralize feedback into one place... Notion AI summarized the most important actionable items from the session...
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial 2 */}
                <section className="startups-container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.4, marginBottom: '40px' }}>
                            “We use Notion as our operating system for everything, from engineering specs to new hire onboarding. Our team tripled in size this past year, and Notion allowed us to keep all information central and quickly accessible.”
                        </p>
                        <div style={{ fontWeight: 800, fontSize: '24px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <span style={{ color: '#00D1FF' }}>●</span> clay
                        </div>
                        <div style={{ color: '#666' }}>Nashilu Mouen-Makoua, Growth & Operations</div>
                    </div>
                </section>

                {/* Eligibility & Benefits */}
                <section className="startups-container" style={{ padding: '80px 0' }}>
                    <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: '40px' }}>Eligibility & benefits.</h2>
                    <a href="#get-started" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: 600, display: 'block', marginBottom: '60px' }}>Get Started Free →</a>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ color: '#007AFF', marginBottom: '24px' }}><Sparkles size={32} /></div>
                            <h4 style={{ fontSize: 18, fontWeight: 800, marginBottom: '16px' }}>6 months free with Notion AI included</h4>
                            <p style={{ fontSize: 14, color: '#666' }}>For non-paying Notion customers with under 100 employees and are affiliated with one of our startup partners.</p>
                        </div>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ color: '#007AFF', marginBottom: '24px' }}><Sparkles size={32} /></div>
                            <h4 style={{ fontSize: 18, fontWeight: 800, marginBottom: '16px' }}>3 months free with Notion AI included</h4>
                            <p style={{ fontSize: 14, color: '#666' }}>For non-paying Notion customers with under 100 employees.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '32px' }}>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ color: '#007AFF', marginBottom: '24px' }}><Layout size={24} /></div>
                            <h4 style={{ fontWeight: 800, marginBottom: '12px' }}>Notion Perks</h4>
                            <p style={{ fontSize: 13, color: '#666', marginBottom: '20px' }}>Exclusive software discounts for each part of the founder's journey</p>
                            <a href="#" style={{ color: '#007AFF', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Apply to access →</a>
                        </div>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ color: '#007AFF', marginBottom: '24px' }}><TrendingUp size={24} /></div>
                            <h4 style={{ fontWeight: 800, marginBottom: '12px' }}>Champions Community</h4>
                            <p style={{ fontSize: 13, color: '#666', marginBottom: '20px' }}>Learn and connect with a community of Startup Champions who evangelize Notion at their companies.</p>
                            <a href="#" style={{ color: '#007AFF', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
                        </div>
                        <div style={{ background: '#F7F6F3', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ color: '#007AFF', marginBottom: '24px' }}><Layers size={24} /></div>
                            <h4 style={{ fontWeight: 800, marginBottom: '12px' }}>Notion Certified Consultants</h4>
                            <p style={{ fontSize: 13, color: '#666', marginBottom: '20px' }}>One complimentary session with a consultant to setup your Notion workspace.</p>
                            <a href="#" style={{ color: '#007AFF', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Apply to access →</a>
                        </div>
                    </div>
                </section>

                {/* Partner Network */}
                <section className="startups-container" style={{ padding: '80px 0', borderTop: '1px solid #efefef' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '80px' }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: '24px' }}>Join our partner network alongside top VCs and accelerators</h2>
                            <p style={{ color: '#666', marginBottom: '32px' }}>Offer your network Notion's Business plan free and additional perks!</p>
                            <a href="#" style={{ color: '#007AFF', fontWeight: 600, textDecoration: 'none' }}>Apply to become a partner →</a>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', alignItems: 'center' }}>
                                <div style={{ fontWeight: 800, fontSize: 18 }}>techstars_</div>
                                <div style={{ fontWeight: 800, fontSize: 24 }}>500</div>
                                <div style={{ fontWeight: 800, fontSize: 18 }}>[First Round]</div>
                                <div style={{ fontWeight: 800, fontSize: 16, color: '#e03e3e' }}>Index Ventures</div>
                                <div style={{ fontWeight: 800, fontSize: 18, color: '#666' }}>MERCURY</div>
                                <div style={{ fontWeight: 800, fontSize: 20, color: '#635bff' }}>stripe</div>
                                <div style={{ fontWeight: 800, fontSize: 24, padding: '4px 8px', background: '#ff6600', color: '#fff', width: 'fit-content' }}>Y</div>
                                <div style={{ fontWeight: 800, fontSize: 20, color: '#00cc66' }}>SEQUOIA</div>
                                <div style={{ fontWeight: 800, fontSize: 18, color: '#232f3e' }}>aws</div>
                                <div style={{ fontWeight: 800, fontSize: 16 }}>SVAngel</div>
                                <div style={{ fontWeight: 800, fontSize: 14, background: '#000', color: '#fff', padding: '4px 8px' }}>FLOODGATE</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="faq-section startups-container">
                    <h2>Questions & answers</h2>
                    {[
                        "Who is eligible?",
                        "Why is Notion offering a discount for startups?",
                        "How do I apply to receive the discount?",
                        "What is the offer worth?",
                        "How do I suggest a partner that Notion should work with?",
                        "I want this offer to be available to my portfolio companies. How can I become a partner?"
                    ].map((q, i) => (
                        <div className="faq-item" key={i}>
                            <h3>{q}</h3>
                            <Plus size={20} color="#999" />
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default StartupsPage;

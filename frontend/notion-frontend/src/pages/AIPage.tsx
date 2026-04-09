import React, { useState } from 'react';
import './AIPage.css';
import Navbar from '../components/Navbar';
import aiHero from '../assets/ai-hero.png';
import faceHat from '../assets/face-hat.png';
import faceEngineer from '../assets/face-engineer.png';
import agentIcons from '../assets/agent-icons.png';
import { Play } from 'lucide-react';

const AIPage: React.FC = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [selectedTools, setSelectedTools] = useState<string[]>([
        'AI Chatbot', 'Team Wiki', 'Project Management Tool'
    ]);

    const tools = [
        { name: 'AI Search', price: 20 },
        { name: 'AI Chatbot', price: 20 },
        { name: 'AI Meeting Notes', price: 20 },
        { name: 'AI Writing Assistant', price: 20 },
        { name: 'AI Email App', price: 15 },
        { name: 'AI Research', price: 25 },
        { name: 'Calendar Scheduling', price: 10 },
        { name: 'Team Wiki', price: 10 },
        { name: 'Project Management Tool', price: 24 },
        { name: 'Basic CRM', price: 30 },
        { name: 'Site Builder', price: 15 },
        { name: 'Forms', price: 12 },
    ];

    const handleToolToggle = (toolName: string) => {
        if (selectedTools.includes(toolName)) {
            setSelectedTools(selectedTools.filter(t => t !== toolName));
        } else {
            setSelectedTools([...selectedTools, toolName]);
        }
    };

    const calculateSavings = () => {
        const totalMonthlyPerUser = selectedTools.reduce((acc, toolName) => {
            const tool = tools.find(t => t.name === toolName);
            return acc + (tool?.price || 0);
        }, 0);

        // Notion AI is $10/user/month (roughly)
        // We'll calculate the gap
        const savingsPerUser = Math.max(0, totalMonthlyPerUser - 10);
        const monthlySavings = savingsPerUser * teamSize;
        const annualSavings = monthlySavings * 12;

        return { monthlySavings, annualSavings };
    };

    const { monthlySavings, annualSavings } = calculateSavings();

    return (
        <div className="ai-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="ai-hero ai-container">
                    <div className="ai-hero-content">
                        <h1>The AI workspace that works for you.</h1>
                        <p>All-in-one AI that takes notes, searches apps, and builds workflows, right where you work.</p>
                        <div className="ai-hero-cta">
                            <button className="btn-ai-primary">Get Notion free</button>
                            <button className="btn-ai-secondary">Request a demo</button>
                        </div>
                    </div>
                    <div className="ai-hero-img">
                        <img src={aiHero} alt="Notion AI Characters" />
                    </div>
                </section>

                {/* Trust Section */}
                <section className="trust-section ai-container">
                    <p>Trusted by teams at</p>
                    <div className="trust-logos">
                        {/* Using text for logos to ensure alignment if images are missing */}
                        <div style={{ fontWeight: 800, fontSize: 24 }}>OpenAI</div>
                        <div style={{ fontWeight: 800, fontSize: 24 }}>Figma</div>
                        <div style={{ fontWeight: 800, fontSize: 24 }}>ramp</div>
                        <div style={{ fontWeight: 800, fontSize: 24 }}>NVIDIA</div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="video-section">
                    <div className="video-container">
                        <div className="video-left">
                            <div style={{ background: '#f1f1f1', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                                Populate the bug tracker with feedback from Slack, Notion, and my emails.
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>Searched for "Find databases or pages..."</div>
                            <div style={{ marginTop: '20px', borderLeft: '4px solid #007aff', paddingLeft: '12px' }}>
                                I set up a Bug & Feedback Tracker on this page with the right fields and views...
                            </div>
                        </div>
                        <div className="video-right">
                            <img src={faceHat} alt="Face Icon" />
                            <div className="play-btn">
                                <Play fill='white' size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="quote-block ai-container">
                        <div className="quote-text">“Your AI everything app.”</div>
                        <div className="quote-source">Forbes</div>
                        <div className="quote-date">Spring 2024</div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="calculator-section ai-container">
                    <h2>All-in-one AI.</h2>
                    <a href="#" className="calc-link">Get started →</a>

                    <div className="calculator-card">
                        <div className="calc-header">Too many AI tools? Calculate potential savings here.</div>
                        <div className="calc-grid">
                            {tools.map(tool => (
                                <label key={tool.name} className="calc-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedTools.includes(tool.name)}
                                        onChange={() => handleToolToggle(tool.name)}
                                    />
                                    <span>{tool.name}</span>
                                    {selectedTools.includes(tool.name) && (
                                        <span className="price">${tool.price}/user</span>
                                    )}
                                </label>
                            ))}
                        </div>

                        <div className="calc-footer">
                            <div className="input-group">
                                <div className="input-label">Team size</div>
                                <input
                                    type="number"
                                    className="number-input"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                                />
                            </div>
                            <div className="result-group">
                                <div className="result-label">Monthly savings</div>
                                <div className="result-value">${monthlySavings.toLocaleString()}</div>
                            </div>
                            <div className="result-group">
                                <div className="result-label">Annual savings</div>
                                <div className="result-value">${annualSavings.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agent Section */}
                <section className="agent-section ai-container">
                    <div className="agent-content">
                        <h2>Your Notion Agent can build, edit, and take action.</h2>
                        <div className="agent-promo">
                            Most AI tools stop at ideas. Notion AI gets work across the finish line.
                        </div>
                        <div style={{ marginTop: '40px', padding: '40px', border: '1px solid #eee', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <img src={faceHat} style={{ width: '32px' }} alt="" />
                                <span style={{ fontWeight: 600 }}>How can I help you today?</span>
                            </div>
                            <div style={{ background: '#f7f6f3', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#666' }}>
                                @ Add context
                            </div>
                        </div>
                    </div>
                    <div className="agent-img">
                        <img src={faceEngineer} alt="Engineer face" />
                    </div>
                </section>

                {/* Features Grid */}
                <section className="ai-container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Respects custom permissions</h3>
                            <div className="feature-visual">
                                <div style={{ padding: '20px' }}>
                                    <div style={{ fontWeight: 600, marginBottom: '8px' }}>Share / Publish</div>
                                    <div style={{ background: '#f1f1f1', height: '100px', borderRadius: '8px' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <h3>Personalized to you</h3>
                            <div className="feature-visual">
                                <img src={faceHat} alt="" />
                            </div>
                        </div>
                        <div className="feature-card">
                            <h3>Connects to tools via MCP</h3>
                            <div className="feature-visual">
                                {/* Placeholder for tool icons */}
                                <div style={{ display: 'flex', gap: '12px', fontSize: '24px' }}>
                                    📦 ⚡ 🌟 ⬛
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="agent-cta-footer">
                        <h3>Create Custom Agents to automate specific workflows (coming soon)</h3>
                        <a href="#">Sign up to learn more →</a>
                        <img src={agentIcons} alt="Agent Icons" className="icons-group-img" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AIPage;

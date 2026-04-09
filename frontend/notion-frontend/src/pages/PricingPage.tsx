import React, { useState } from 'react';
import './PricingPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Plus,
    Check,
    Sparkles
} from 'lucide-react';

const PricingPage: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

    return (
        <div className="pricing-page">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="pricing-hero pricing-container">
                    <h1>One tool for your whole company.<br />Free for teams to try.</h1>

                    <div className="logos-box">
                        <span style={{ fontWeight: 800 }}>OpenAI</span>
                        <span style={{ fontWeight: 800 }}>Figma</span>
                        <span style={{ fontWeight: 800 }}>VOLVO</span>
                        <span style={{ fontWeight: 800, textTransform: 'uppercase' }}>ramp</span>
                        <span style={{ fontWeight: 800 }}>CURSOR</span>
                    </div>
                </section>

                <section className="pricing-container">
                    <div className="pricing-toggle-wrapper">
                        <div className="toggle-container">
                            <button
                                className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
                                onClick={() => setBillingPeriod('monthly')}
                            >
                                Pay monthly
                            </button>
                            <button
                                className={`toggle-btn ${billingPeriod === 'yearly' ? 'active' : ''}`}
                                onClick={() => setBillingPeriod('yearly')}
                            >
                                Pay yearly
                            </button>
                        </div>
                        <span className="save-badge">Save up to 20% with yearly</span>
                    </div>

                    <div className="pricing-grid">
                        {/* Free */}
                        <div className="pricing-card">
                            <h3>Free</h3>
                            <div className="price-box">
                                <span className="price-amount">$0</span>
                            </div>
                            <p>For individuals to organize personal projects and life.</p>
                            <button className="pricing-btn">Sign up</button>

                            <div className="ai-addon">
                                <div className="ai-header"><Sparkles size={14} /> Notion AI</div>
                                <div style={{ fontSize: 12, color: '#4a90e2', fontWeight: 600 }}>Trial of Notion AI</div>
                            </div>

                            <ul className="feature-summary">
                                <li><Check size={14} color="#666" /> Free for individual usage</li>
                                <li><Check size={14} color="#666" /> Basic forms</li>
                                <li><Check size={14} color="#666" /> Basic sites</li>
                                <li><Check size={14} color="#666" /> Notion Calendar</li>
                            </ul>
                        </div>

                        {/* Plus */}
                        <div className="pricing-card">
                            <h3>Plus</h3>
                            <div className="price-box">
                                <span className="price-amount">{billingPeriod === 'yearly' ? '$10' : '$12'}</span>
                                <span className="price-period"> per member / month</span>
                            </div>
                            <p>For small teams and professionals to work together.</p>
                            <button className="pricing-btn">Get started</button>

                            <div className="ai-addon">
                                <div className="ai-header"><Sparkles size={14} /> Notion AI</div>
                                <div style={{ fontSize: 12, color: '#4a90e2', fontWeight: 600 }}>Trial of Notion AI</div>
                            </div>

                            <ul className="feature-summary">
                                <li><strong>Everything in Free</strong></li>
                                <li><Check size={14} color="#666" /> Unlimited collaborative blocks</li>
                                <li><Check size={14} color="#666" /> Unlimited file uploads</li>
                                <li><Check size={14} color="#666" /> Custom sites</li>
                            </ul>
                        </div>

                        {/* Business */}
                        <div className="pricing-card recommended">
                            <div className="recommended-badge">Recommended</div>
                            <h3>Business</h3>
                            <div className="price-box">
                                <span className="price-amount">{billingPeriod === 'yearly' ? '$20' : '$25'}</span>
                                <span className="price-period"> per member / month</span>
                            </div>
                            <p>For growing businesses to streamline teamwork.</p>
                            <button className="pricing-btn blue">Get started</button>

                            <div className="ai-addon">
                                <div className="ai-header"><Sparkles size={14} /> Notion AI</div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 11, color: '#666' }}>
                                    <li>✓ Agent</li>
                                    <li>✓ Enterprise search</li>
                                    <li>✓ AI meeting notes</li>
                                </ul>
                            </div>

                            <ul className="feature-summary">
                                <li><strong>Everything in Plus</strong></li>
                                <li><Check size={14} color="#666" /> SAML SSO</li>
                                <li><Check size={14} color="#666" /> Granular database permissions</li>
                                <li><Check size={14} color="#666" /> Private teamspaces</li>
                            </ul>
                        </div>

                        {/* Enterprise */}
                        <div className="pricing-card">
                            <h3>Enterprise</h3>
                            <div className="price-box">
                                <span style={{ fontSize: 28, fontWeight: 800 }}>Custom</span>
                            </div>
                            <p>For organizations to operate with scalability, control, and security.</p>
                            <button className="pricing-btn">Contact Sales</button>

                            <div className="ai-addon">
                                <div className="ai-header"><Sparkles size={14} /> Notion AI</div>
                                <div style={{ fontSize: 11, color: '#666' }}>Advanced AI governance and data protection.</div>
                            </div>

                            <ul className="feature-summary">
                                <li><strong>Everything in Business</strong></li>
                                <li><Check size={14} color="#666" /> User provisioning (SCIM)</li>
                                <li><Check size={14} color="#666" /> Advanced security & controls</li>
                                <li><Check size={14} color="#666" /> Audit log</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Quote */}
                <section className="pricing-container" style={{ textAlign: 'center', borderTop: '1px solid #efefef' }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, margin: '60px 0 40px' }}>OpenAI</h2>
                    <p style={{ fontSize: 24, fontStyle: 'italic', maxWidth: 800, margin: '0 auto 40px' }}>“There’s power in a single platform where you can do all your work out of. Notion is that single place.”</p>
                    <div style={{ fontWeight: 700 }}>Nick Erdenberger</div>
                    <div style={{ color: '#666', fontSize: 14 }}>GTM, OpenAI</div>
                </section>

                {/* Features Table */}
                <section className="pricing-container comparison-section">
                    <h2 className="faq-title" style={{ textAlign: 'left' }}>Plans and features</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40%' }}>Feature</th>
                                <th>Free</th>
                                <th>Plus</th>
                                <th>Business</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="category-row">
                                <td colSpan={5}>Content</td>
                            </tr>
                            <tr>
                                <td>Pages & blocks</td>
                                <td>Unlimited for individuals</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>File uploads</td>
                                <td>Up to 5 MB</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Page history</td>
                                <td>7 days</td>
                                <td>30 days</td>
                                <td>90 days</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr className="category-row">
                                <td colSpan={5}>Sharing & collaboration</td>
                            </tr>
                            <tr>
                                <td>Guest seats</td>
                                <td>10</td>
                                <td>100</td>
                                <td>250</td>
                                <td>Starting at 250</td>
                            </tr>
                            <tr>
                                <td>Teamspaces</td>
                                <td><Check size={14} /></td>
                                <td><Check size={14} /></td>
                                <td><Check size={14} /></td>
                                <td><Check size={14} /></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* FAQ */}
                <section className="pricing-container pricing-faq">
                    <h2 className="faq-title">Questions & answers</h2>
                    {[
                        "How does Notion AI use my data?",
                        "Where can I find my invoices?",
                        "What are your accepted payment methods?",
                        "What is a block?",
                        "What happens when I go over the block storage limit on a Free Plan?",
                        "Do you offer student discounts?",
                        "How is pricing calculated for the paid plans?",
                        "How do I cancel my paid plan?"
                    ].map((q, i) => (
                        <div className="faq-item" key={i}>
                            <span>{q}</span>
                            <Plus size={18} />
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PricingPage;

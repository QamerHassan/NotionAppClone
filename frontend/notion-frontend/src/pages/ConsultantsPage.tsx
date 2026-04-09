import React, { useState } from 'react';
import './ConsultantsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    TrendingUp,
    LifeBuoy,
    Wrench,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const ConsultantsPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What's the process to become a Solutions Partner?",
            answer: "Apply online, complete the certification requirements, and sign the partnership agreement."
        },
        {
            question: "My application was approved, what should I do next?",
            answer: "Log in to the partner portal, access your resources, and start building your client pipeline."
        },
        {
            question: "What does it take to become a successful partner?",
            answer: "Deep knowledge of Notion, a strong service offering, and proactive client engagement are key."
        },
        {
            question: "I am a company looking to hire a Solution Partner, how do I get started?",
            answer: "Visit our Partner Directory to find certified experts who can help you with your specific needs."
        },
        {
            question: "What is the difference between a Sales Partner and a Consulting Partner?",
            answer: "Sales Partners focus on reselling licenses, while Consulting Partners focus on services, implementation, and training."
        }
    ];

    return (
        <div className="consultants-page">
            <Navbar />

            <main className="cons-main">
                {/* Hero Section */}
                <section className="cons-hero">
                    <div className="cons-hero-content">
                        <h1>Become a Solutions Partner.</h1>
                        <p className="cons-hero-subtitle">Build opportunities. Ship outcomes. Deliver value. All with Notion.</p>
                        <div className="cons-hero-buttons">
                            <button className="btn-cons-primary">Become a partner</button>
                            <button className="btn-cons-secondary">Find a partner</button>
                        </div>
                    </div>
                    <div className="cons-hero-image">
                        {/* Abstract Illustration Placeholder */}
                        <div className="cons-illustration-placeholder hero-ill">
                            <svg viewBox="0 0 200 200" className="abstract-hero-svg">
                                <path d="M40,100 Q80,20 120,100 T200,100" fill="none" stroke="black" strokeWidth="2" />
                                <circle cx="60" cy="80" r="10" fill="black" />
                                <rect x="140" y="70" width="20" height="20" fill="black" transform="rotate(45 150 80)" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="cons-engagement">
                    <div className="cons-engagement-header">
                        <h2>One program. Two ways to engage.</h2>
                        <p>Pick the engagement path that fits your practice — or do both.</p>
                        <div className="cons-scale-ill">
                            {/* Scale Illustration Placeholder */}
                            <div className="scale-icon">⚖️</div>
                        </div>
                    </div>

                    <div className="cons-cards-grid">
                        <div className="cons-card">
                            <div className="card-icon blue-icon">🛍️</div>
                            <h3>Sell</h3>
                            <p className="card-desc">You help customers choose Notion and buy with confidence. Designed for resellers, VARs, and sales-led consultancies focused on new and expansion deals.</p>

                            <h4>What you do:</h4>
                            <ul className="cons-list">
                                <li>Source new client opportunities</li>
                                <li>Help customers find the right Notion offering</li>
                                <li>Collaborate with Notion's team on co-selling</li>
                                <li>Guide deals through to completion</li>
                            </ul>

                            <a href="#" className="cons-link">Become a Sales Partner →</a>
                        </div>

                        <div className="cons-card">
                            <div className="card-icon blue-wrench">🔧</div>
                            <h3>Service</h3>
                            <p className="card-desc">You help customers unlock Notion's full potential — from start to finish. Designed for system integrators, agencies, and independent consultants.</p>

                            <h4>What you do:</h4>
                            <ul className="cons-list">
                                <li>Conduct discovery sessions and design planning</li>
                                <li>Execute implementation and data migration</li>
                                <li>Build integrations and workflow automations</li>
                                <li>Provide training and change management support</li>
                            </ul>

                            <a href="#" className="cons-link">Become a Consulting Partner →</a>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section className="cons-resources">
                    <h2>Get the resources<br />you need to succeed.</h2>

                    <div className="cons-resource-grid">
                        <div className="res-item">
                            <TrendingUp size={48} strokeWidth={1.5} />
                            <h3>Revenue</h3>
                            <p>Recurring partner margin on license resale, Notion-sourced projects and subcontracting</p>
                        </div>
                        <div className="res-item">
                            <LifeBuoy size={48} strokeWidth={1.5} />
                            <h3>Support</h3>
                            <p>Priority support, beta access to new features, and full API docs for custom integrations</p>
                        </div>
                        <div className="res-item">
                            <Wrench size={48} strokeWidth={1.5} />
                            <h3>Enablement</h3>
                            <p>Comprehensive training, sales tools, and a dedicated partner success manager</p>
                        </div>
                    </div>

                    {/* Second Row of Resources text-only/icons from screenshots if any... actually screenshot 3/5 shows 3 more items: Solutions Kits, Community, Marketing */}
                    <div className="cons-resource-grid" style={{ marginTop: '60px' }}>
                        <div className="res-item">
                            <div className="res-icon-text">📓</div>
                            <h3>Solutions Kits</h3>
                            <p>Prebuilt templates, implementation guides, and demo assets and workspaces</p>
                        </div>
                        <div className="res-item">
                            <div className="res-icon-text">👥</div>
                            <h3>Community</h3>
                            <p>Partner advisory councils, product feedback forums, and early access</p>
                        </div>
                        <div className="res-item">
                            <div className="res-icon-text">📢</div>
                            <h3>Marketing</h3>
                            <p>Joint campaigns, case studies, and inclusion in Notion's partner directory</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="cons-testimonial">
                    <blockquote>
                        “Working with our Solutions Partner helped us more effectively streamline tooling, eliminate redundancies, and enable every team to move faster.”
                    </blockquote>
                    <div className="test-logo">
                        <span style={{ color: '#0055ff', fontWeight: 'bold', fontSize: '24px' }}>affirm</span>
                    </div>
                    <div className="test-author">
                        <strong>Nora Grasham</strong>
                        <p>Senior Director, IT Engineering</p>
                    </div>
                </section>

                {/* Leading Companies */}
                <section className="cons-leading">
                    <div className="leading-content">
                        <h2>Leading companies get faster business results with an expert partner.</h2>
                        <p>From startups to enterprises, companies all around the world have turned Notion into working systems that scale with certified experts guiding the way.</p>
                        <a href="#" className="cons-link">See how →</a>
                    </div>
                    <div className="leading-illustration">
                        <div className="puzzle-ill">
                            {/* Simple Puzzle Placeholder */}
                            <svg viewBox="0 0 100 100" width="200" height="200">
                                <path d="M10,10 H50 V30 H70 V10 H90 V50 H70 V70 H90 V90 H50 V70 H30 V90 H10 Z" fill="none" stroke="black" strokeWidth="2" />
                                <circle cx="30" cy="30" r="5" fill="#007aff" />
                                <circle cx="70" cy="70" r="5" fill="#007aff" />
                            </svg>
                        </div>
                    </div>
                </section>


                {/* FAQ */}
                <section className="cons-faq">
                    <h2>Questions & answers</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default ConsultantsPage;

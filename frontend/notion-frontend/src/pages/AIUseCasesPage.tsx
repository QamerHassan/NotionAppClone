import React from 'react';
import './AIUseCasesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ChevronRight,
    FileText,
    CheckCircle2
} from 'lucide-react';

const AIUseCasesPage: React.FC = () => {
    const useCases = [
        {
            title: "Onboard a new hire",
            preview: "Build an onboarding guide for a new engineer who is joining as a software engineer on the mobile team. Include a database of people to meet, a checklist of tools to get set up with, and links to...",
            type: "Notion"
        },
        {
            title: "Chat about anything",
            preview: "Chat about anything you are thinking about. Ask it to write a 10k race training plan. Or ask it to summarize a long document. Notion AI is your right hand for everything.",
            type: "Notion",
            isImage: true
        },
        {
            title: "Draft client scopes from transcripts and docs",
            preview: "I need to get back to this client with a scope and clear plan for the next couple of days of work together. Can you analyze this transcript as well as the proposal and previous meetings transcripts that are...",
            type: "Notion"
        },
        {
            title: "Plan an offsite",
            preview: "Plan an offsite for our team of 15 people. We want to go somewhere in the mountains for 3 days in late Q4. Include a schedule, budget, and travel options.",
            type: "Notion"
        },
        {
            title: "Create a competitor analysis report",
            preview: "Compare our product to the top 3 competitors in the market. Analyze their features, pricing, and target demographics. Identify market trends and opportunities.",
            type: "Notion"
        },
        {
            title: "Analyze PDFs and Images",
            preview: "Upload a PDF or image and ask Notion AI to summarize it, extract key information, or translate it. It's the fastest way to understand complex documents.",
            type: "Notion",
            isImage: true
        },
        {
            title: "Finalize your OKRs",
            preview: "Revise these OKRs based on the feedback from the recent review meeting. Improve the key results and make sure they align to our company goals.",
            type: "Notion"
        },
        {
            title: "Create a study guide",
            preview: "Generating a study guide for CS101. Include key concepts, practice problems, and a summary of each chapter. Use the database below to track your progress.",
            type: "Notion",
            isImage: true
        },
        {
            title: "Go from brainstorm to roadmap",
            preview: "Turn these sticky notes from our brainstorm into a roadmap database. Group similar ideas and prioritize by importance.",
            type: "Notion"
        }
    ];

    return (
        <div className="ai-use-cases-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="auc-hero auc-container">
                    <div className="auc-hero-illustration left">
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="100" r="40" fill="#E6F4FF" stroke="#333" strokeWidth="2" />
                            <rect x="100" y="60" width="80" height="80" rx="10" fill="#FFF" stroke="#333" strokeWidth="2" />
                            <path d="M120 100L160 100" stroke="#333" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1>What can Notion AI do?</h1>
                    <p>Ask it anything, or get started with our library of use cases.</p>
                    <button className="learn-more">
                        <FileText size={18} />
                        Learn more
                    </button>
                    <div className="auc-hero-illustration right">
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="40" fill="#FFF5E6" stroke="#333" strokeWidth="2" />
                            <rect x="20" y="60" width="80" height="80" rx="40" fill="#FFF" stroke="#333" strokeWidth="2" />
                            <circle cx="60" cy="100" r="20" stroke="#333" strokeWidth="2" />
                        </svg>
                    </div>
                </section>

                {/* Tabs */}
                <section className="auc-container">
                    <div className="auc-tabs">
                        <div className="auc-tab">For Work</div>
                        <div className="auc-tab">For Life</div>
                        <div className="auc-tab active">Community</div>
                        <div className="auc-tab">Notion</div>
                    </div>
                </section>

                {/* Grid */}
                <section className="auc-container">
                    <div className="auc-grid">
                        {useCases.map((uc, i) => (
                            <div className="auc-card" key={i}>
                                <div className="auc-card-preview">
                                    {uc.isImage ? (
                                        <div style={{ width: '100%', height: '140px', background: '#eef1f5', borderRadius: '8px', border: '1px solid #ddd' }}></div>
                                    ) : (
                                        <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
                                            {uc.preview}
                                        </div>
                                    )}
                                </div>
                                <div className="auc-card-content">
                                    <h3>{uc.title}</h3>
                                    <div className="auc-card-footer">
                                        <div style={{ width: '16px', height: '16px', background: '#333', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>N</div>
                                        <span>{uc.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="auc-pagination">
                        <div className="auc-page-btn active">1</div>
                        <div className="auc-page-btn">2</div>
                        <div className="auc-page-btn">3</div>
                        <div className="auc-page-btn">4</div>
                        <div className="auc-page-btn">5</div>
                        <div className="auc-page-btn"><ChevronRight size={16} /></div>
                    </div>
                </section>

                {/* Share Section */}
                <section className="auc-share auc-container">
                    <div className="auc-share-content">
                        <h2>Share your use case</h2>
                        <p>Have you discovered an amazing way to use Notion AI? Share your use case and help others unlock new possibilities.</p>
                        <ul className="auc-share-list">
                            <li><CheckCircle2 size={20} color="#333" /> Get featured in our showcase and social channels</li>
                            <li><CheckCircle2 size={20} color="#333" /> Promote your business</li>
                            <li><CheckCircle2 size={20} color="#333" /> Earn community badges and recognition</li>
                        </ul>
                        <div className="auc-share-btns">
                            <button className="btn-black" style={{ background: '#1a1a1a', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Submit</button>
                            <button className="btn-white" style={{ background: '#fff', color: '#333', padding: '12px 24px', borderRadius: '8px', border: '1px solid #eee', fontWeight: 600, cursor: 'pointer' }}>View guidelines</button>
                        </div>
                    </div>
                    <div className="auc-share-illustration">
                        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="300" height="200" rx="12" fill="#fff" stroke="#333" strokeWidth="2" />
                            <circle cx="320" cy="150" r="40" fill="#f7f6f3" stroke="#333" strokeWidth="2" />
                            <path d="M100 100H250M100 130H200M100 160H220" stroke="#eee" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AIUseCasesPage;

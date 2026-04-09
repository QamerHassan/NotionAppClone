import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CustomerStoriesPage.css';
import { ChevronDown } from 'lucide-react';

const CustomerStoriesPage: React.FC = () => {
    const stories = [
        {
            id: 1,
            company: "Verity", // Using generic name as logo is hard to replicate exactly without asset
            logoText: "raw",
            title: "How Notion helped one agency consolidate tools and slash meeting overhead by 30%",
            color: "#fdfdfd"
        },
        {
            id: 2,
            company: "DOJO",
            logoText: "DOJO",
            title: "How Dojo consolidated dozens of tools with Notion for a faster way of working",
            color: "#f8f8f8"
        },
        {
            id: 3,
            company: "VIVA",
            logoText: "VIVA",
            title: "Notion saves hundreds of hours and thousands of dollars for Viva",
            color: "#ffffff"
        },
        {
            id: 4,
            company: "TOYOTA",
            logoText: "TOYOTA",
            title: "Toyota uses Notion to drive more efficient workflows with collaboration that comes standard",
            color: "#ffffff"
        },
        {
            id: 5,
            company: "Mangopay",
            logoText: "Mangopay",
            title: "The Mangopay wiki is home to all of our company's most important information",
            color: "#fff8f0"
        },
        {
            id: 6,
            company: "dbt Labs",
            logoText: "dbt Labs",
            title: "How dbt Labs manages their expert feature launch date",
            color: "#fdfdfd"
        },
        {
            id: 7,
            company: "Lyka",
            logoText: "lyka",
            title: "Lyka uses Notion to get their teams on the same page and save over $75k a year on their tool stack",
            color: "#f0f8f0"
        },
        {
            id: 8,
            company: "Formo",
            logoText: "Formo",
            title: "Formo increases business agility with Notion",
            color: "#f8f0ff"
        },
        {
            id: 9,
            company: "Forkies",
            logoText: "Home of the Forkies",
            title: "Our menu",
            color: "#ffffff"
        },
        {
            id: 10,
            company: "Sendbird",
            logoText: "sendbird learn",
            title: "Collections of the best technical practices and topics to deep dive",
            color: "#f4f0ff"
        },
        {
            id: 11,
            company: "Oyster",
            logoText: "Oyster",
            title: "Oyster's global team stays connected through hyper-scale with documentation in Notion",
            color: "#fffae0"
        },
        {
            id: 12,
            company: "Partiful",
            logoText: "partiful",
            title: "Partiful's product team ships more projects by prioritizing, scoping, and executing in Notion",
            color: "#ffffff"
        },
        {
            id: 13,
            company: "TPM",
            logoText: "Technical Program Management",
            title: "Welcome to the Technical Program Management Home!",
            color: "#f0f4f8"
        },
        {
            id: 14,
            company: "Meetings",
            logoText: "Meetings",
            title: "Product standup - 9/19/22",
            color: "#f0f6f0"
        },
        {
            id: 15,
            company: "PAPER",
            logoText: "PAPER",
            title: "Paper ships faster with crystal clear processes on Notion",
            color: "#e0f0ff"
        },
        {
            id: 16,
            company: "Genially",
            logoText: "genially",
            title: "Genially tackles cross-functional collaboration with Notion",
            color: "#fff0f0"
        },
        {
            id: 17,
            company: "Chipper",
            logoText: "CHIPPER",
            title: "Chipper Cash drives more intentional work with Notion",
            color: "#ffffff"
        },
        {
            id: 18,
            company: "Headspace",
            logoText: "headspace",
            title: "Headspace's product design team stays mission-focused with Notion",
            color: "#fff8e0"
        },
        {
            id: 19,
            company: "Karrot",
            logoText: "Karrot Company Home",
            title: "Everything you need to know about Karrot is here!",
            color: "#ffffff"
        },
        {
            id: 20,
            company: "Processes",
            logoText: "Processes",
            title: "How to request a testimonial",
            color: "#ffffff"
        },
        {
            id: 21,
            company: "Pitch",
            logoText: "Pitch",
            title: "Pitch's marketing system keeps output high and quality consistent",
            color: "#fff0e0"
        },
        {
            id: 22,
            company: "Base10",
            logoText: "Base10",
            title: "How Base10 uses Notion to power investment decisions that make a difference",
            color: "#ffffff"
        },
        {
            id: 23,
            company: "Rider",
            logoText: "Rider team members",
            title: "Engineering - Fullstack: Senior Data Analyst",
            color: "#f0f8ff"
        },
        {
            id: 24,
            company: "Sendbird",
            logoText: "Sendbird Learn",
            title: "How to use Sendbird Learn",
            color: "#f8f0ff"
        }
    ];

    const logos = [
        "TOYOTA", "mixpanel", "ramp", "OpenAI", "MatchGroup", "headspace",
        "Vercel", "Capgemini", "Figma", "perplexity", "TIME",
        "VOLVO", "NVIDIA", "1Password"
    ];

    const testimonials = [
        { name: "Adobe", quote: "\"If the most creative people spent a little less time on ideas and a little more on organizing the ideas they've already got, they would make more of an impact. And that's where Notion comes in.\"" },
        { name: "Privateaser", quote: "\"Notion saved our life given the complexity of what we're doing. There was so much replication and no single source of truth.\"" },
        { name: "SANDBOX", quote: "\"I think of Notion as the bones of our company knowledge. Google Docs doesn't provide that because it's not as easy to navigate all of text.\"" },
    ];

    return (
        <div className="customer-stories-page">
            <Navbar />

            {/* Hero Section */}
            <section className="cs-hero">
                <div className="cs-container hero-flex">
                    <div className="hero-content">
                        <h1>Customer stories</h1>
                        <p className="hero-suby">See how leading companies streamline workflows, consolidate tools, and bring everyone's knowledge into one connected workspace.</p>

                        <div className="hero-logos">
                            {logos.map((logo, i) => (
                                <span key={i} className="hero-logo-item">{logo}</span>
                            ))}
                        </div>
                    </div>
                    <div className="hero-illustration">
                        <div className="illus-wrapper">
                            {/* Simple CSS representation of the line art */}
                            <div className="illus-faces">
                                <span className="face face-1">👨‍💻</span>
                                <span className="face face-2">👩‍💼</span>
                                <span className="face face-3">👩‍🎨</span>
                            </div>
                            <div className="illus-bubbles">
                                <div className="bubble b1"></div>
                                <div className="bubble b2"></div>
                                <div className="bubble b3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="cs-filter">
                <div className="cs-container">
                    <button className="filter-btn">
                        Company size <ChevronDown size={16} />
                    </button>
                    {/* Additional filters could go here */}
                </div>
            </section>

            {/* Stories Grid */}
            <section className="cs-grid-section">
                <div className="cs-container">
                    <div className="stories-grid">
                        {stories.map((story) => (
                            <div key={story.id} className="story-card">
                                <div className="card-image" style={{ backgroundColor: story.color }}>
                                    <div className="mock-ui">
                                        <div className="mock-header">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </div>
                                        <div className="mock-body">
                                            <div className="mock-title">{story.logoText}</div>
                                            <div className="mock-lines">
                                                <div className="line l1"></div>
                                                <div className="line l2"></div>
                                                <div className="line l3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-logo-text">{story.logoText}</div>
                                    <h3 className="card-title">{story.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid (Partial) */}
            <section className="cs-testimonials">
                <div className="cs-container">
                    <div className="testimonial-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="test-card">
                                <div className="test-logo"><strong>{t.name}</strong></div>
                                <p className="test-quote">{t.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="cs-download">
                <div className="cs-container download-flex">
                    <div className="download-card">
                        <div className="dl-img-wrapper">
                            <div className="dl-mock web">
                                <div className="dl-header">Goals</div>
                                <div className="dl-body"></div>
                            </div>
                        </div>
                        <h3>Web app</h3>
                        <div className="dl-input-group">
                            <input type="email" placeholder="Enter your email..." />
                            <button className="btn-black">Sign up</button>
                        </div>
                        <div className="store-links">
                            <span> Apple App Store</span>
                            <span>🤖 Google Play Store</span>
                        </div>
                    </div>

                    <div className="download-card">
                        <div className="dl-img-wrapper">
                            <div className="dl-mock desktop">
                                <div className="dl-logo">ACME</div>
                                <div className="dl-body"></div>
                            </div>
                        </div>
                        <h3>Desktop app</h3>
                        <div className="dl-btns">
                            <button className="btn-outline"> Mac</button>
                            <button className="btn-outline">⊞ Windows</button>
                        </div>
                        <div className="store-links">
                            <a href="#">Using Notion at work? Request a demo</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CustomerStoriesPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PartnersPage.css';
import { Wrench, UserPlus, ShieldCheck, Lightbulb, Hammer, Brush, PenTool } from 'lucide-react';

const PartnersPage: React.FC = () => {
    const programs = [
        {
            icon: <Wrench size={24} color="#0066cc" />,
            title: "Technology Partner Program",
            description: "Notion works best when connected with other tools that power our work. Our technology partners make this possible by building integrations that connect workflows, drive productivity and delight our joint users.",
            link: "Become a technology partner →"
        },
        {
            icon: <UserPlus size={24} color="#0066cc" />,
            title: "Solutions Partner Program",
            description: "Help us support unique needs of Notion customers and grow your business. Solutions partners unlock new sales and services opportunities, get prioritized leads and benefit from dedicated support & resources.",
            link: "Become a solutions partner →"
        },
        {
            icon: <ShieldCheck size={24} color="#0066cc" />,
            title: "Security & Compliance Partner Program",
            description: "Join dozens of Security & Compliance partners around the globe and help us ensure security and compliance for Notion Enterprise customers.",
            link: "Become a security & compliance partner →"
        },
        {
            icon: <Lightbulb size={24} color="#0066cc" />,
            title: "Startup Partner Program",
            description: "Offer your startup network free Notion access and resources, including 6 months free of Business with Notion AI, exclusive software discounts and get access to our Startups Champions Community.",
            link: "Become a startup partner →"
        }
    ];

    const ecosystemStats = [
        {
            logo: "Figma",
            quote: "\"Figma's integrations on Notion offer a seamless and visual way to use our tools in concert, delighting our joint users and making work more collaborative.\"",
            author: "Anna Kohnen",
            role: "Head of Partnerships at Figma, Notion technology partner",
            bgColor: "#fbfaf9"
        },
        {
            logo: "INTERCOM",
            quote: "\"We are thrilled to be partnered with Notion. Intercom and Notion's startup programs deliver huge value to startups, empowering founders with the tools they need to scale their businesses.\"",
            author: "Pedro Muller",
            role: "Head of Startups at Intercom, Notion startup partner",
            bgColor: "#f5f7f9"
        },
        {
            logo: "Thomas Frank", // Placeholder for avatar
            quote: "\"I love sharing the tools I build inside of Notion. And Notion's affiliate program lets me get paid doing the things I already wanted to do.\"",
            author: "Thomas Frank",
            role: "Content creator, Notion affiliate partner",
            bgColor: "#fbfaf9"
        }
    ];

    const partnerLogos = [
        "slack", "zoom", "GitHub", "Google Drive", "Figma", "GitLab",
        "loom", "asana", "make", "Typeform", "_zapier", "Jira Software",
        "alegria", "NORTHSAND", "cprime", "Gubbins", "ignyte", "stripe"
    ];

    return (
        <div className="partners-page">
            <Navbar />

            {/* Hero Section */}
            <section className="partners-hero">
                <div className="partners-container hero-container">
                    <div className="hero-text">
                        <h1>Become a <br /> Notion partner.</h1>
                        <p>We are on a mission to make software toolmaking ubiquitous, but we can't do it alone. Become a Notion partner and grow with us.</p>
                    </div>
                    <div className="hero-illustration">
                        <div className="illus-people">
                            <div className="person p1"></div>
                            <div className="person p2"></div>
                            <div className="person p3"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Which partner program? */}
            <section className="partners-programs">
                <div className="partners-container">
                    <div className="section-header">
                        <h2>Which partner program <br /> is the right one for you?</h2>
                        <p>Find the partner program that works for you and enjoy the benefits of <br /> working with Notion.</p>
                    </div>

                    <div className="programs-grid">
                        {programs.map((prog, i) => (
                            <div key={i} className="program-card">
                                <div className="prog-icon">{prog.icon}</div>
                                <h3>{prog.title}</h3>
                                <p>{prog.description}</p>
                                <a href="#">{prog.link}</a>
                            </div>
                        ))}
                    </div>

                    {/* Builders Program Banner */}
                    <div className="builders-banner">
                        <div className="builders-content">
                            <div className="prog-icon"><UserPlus size={24} color="#0066cc" /></div> {/* Reusing standard icon for now */}
                            <h3>Builders Program</h3>
                            <p>For creators, founders, and innovators who are building the future on Notion. Amplify your voice in the startup ecosystem while offering your audience up to 3 free months of Notion Business with Notion AI included.</p>
                            <a href="#">Become a builder partner →</a>
                        </div>
                        <div className="builders-illus">
                            <div className="swiss-army-knife">
                                <div className="knife-body"></div>
                                <div className="tool t1"><Hammer size={24} /></div>
                                <div className="tool t2"><PenTool size={24} /></div>
                                <div className="tool t3"><Brush size={24} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="partners-ecosystem">
                <div className="partners-container">
                    <div className="ecosystem-header">
                        <h2>Join our ecosystem of <br /> 1,000+ Notion partners.</h2>
                    </div>

                    <div className="eco-testimonials">
                        {ecosystemStats.map((item, i) => (
                            <div key={i} className="eco-card" style={{ backgroundColor: item.bgColor }}>
                                <div className="eco-logo-header">
                                    {i === 2 ? (
                                        <div className="tf-avatar">TF</div>
                                    ) : (
                                        <strong>{item.logo}</strong>
                                    )}
                                </div>
                                <p className="eco-quote">{item.quote}</p>
                                <div className="eco-author">
                                    <div className="author-name">{item.author}</div>
                                    <div className="author-role">{item.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="partner-logo-grid">
                        {partnerLogos.map((logo, i) => (
                            <div key={i} className="pl-item">{logo}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More ways to get involved */}
            <section className="partners-involved">
                <div className="partners-container">
                    <div className="involved-header">
                        <h2>More ways to get involved.</h2>
                    </div>

                    <div className="involved-grid">
                        <div className="involved-card temlate-creator">
                            <div className="inv-content">
                                <div className="inv-label">Marketplace</div>
                                <h3>Become a template creator</h3>
                                <p>Have you built an amazing set-up to share? Publish and sell your templates on Notion's Marketplace.</p>
                                <a href="#">Submit a template →</a>
                            </div>
                            <div className="inv-image img-marketplace"></div>
                        </div>

                        <div className="involved-card hire-partner">
                            <div className="inv-image img-solutions"></div>
                            <div className="inv-content">
                                <div className="inv-label">Databases</div>
                                <h3>Hire a Solutions Partner</h3>
                                <p>Notion Solutions Partners are trusted productivity experts and solutions architects.</p>
                                <a href="#">Get started →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PartnersPage;

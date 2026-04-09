import React from 'react';
import './NotionAcademyPage.css';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';

const NotionAcademyPage: React.FC = () => {
    return (
        <div className="academy-page">
            <Navbar />

            {/* Sub Nav */}
            <div className="academy-subnav">
                <div className="ac-container subnav-inner">
                    <div className="subnav-left">
                        <div className="ac-logo">
                            <span className="logo-icon">N</span> Notion Academy
                        </div>
                        <nav className="subnav-links">
                            <a href="#" className="active">All Learning</a>
                            <a href="#">Earn Credentials</a>
                        </nav>
                    </div>
                    <div className="subnav-right">
                        <div className="ac-search">
                            <Search size={16} color="#666" />
                            <input type="text" placeholder="Search" />
                        </div>
                        <button className="btn-signin">Sign In</button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="ac-hero">
                <div className="ac-container hero-inner">
                    <div className="hero-text">
                        <h1>Welcome to Notion Academy</h1>
                        <p>Turn curiosity into capability — learn Notion, build smarter workflows, and validate your skills with badges & certifications.</p>
                        <div className="hero-btns">
                            <button className="ac-btn-black">All Learning</button>
                            <button className="ac-btn-outline">Earn Credentials</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        {/* Illustration placeholder based on screenshots */}
                        <div className="illustration-wrapper">
                            <div className="char-illustration">👩‍💻</div>
                            <div className="tea-illustration">🫖</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="ac-paths">
                <div className="ac-container">
                    <h2>Earn badges with Notion</h2>
                    <p className="section-sub">Choose a path or take them all—our curated Notion learning paths help you level up and earn badges, all at your own pace.</p>

                    <div className="paths-grid">
                        <div className="path-card">
                            <h3>Essentials Path →</h3>
                            <p>New to Notion? Gain the basic skills to create, collaborate, and organize your work efficiently.</p>
                            <span className="lesson-count">3 Lessons</span>
                        </div>
                        <div className="path-card">
                            <h3>Workflows Path →</h3>
                            <p>Create connected systems that unite teams and projects, with the help of AI.</p>
                            <span className="lesson-count">4 Lessons</span>
                        </div>
                        <div className="path-card">
                            <h3>Advanced Path →</h3>
                            <p>Start automating work, learn workspace architecture best practices, and harness Notion's more complex capabilities.</p>
                            <span className="lesson-count">5 Lessons</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admin Certification Banner */}
            <section className="ac-banner">
                <div className="ac-container banner-inner">
                    <div className="banner-text">
                        <h2>Become a Notion Certified Admin</h2>
                        <p>Get certified to run Notion at scale — build smarter workspaces, implement security best practices, and get recognized as a certified Notion Admin, for any plan type at any company.</p>
                        <button className="ac-btn-black">Get started</button>
                    </div>
                    <div className="banner-img">
                        <div className="banner-illustration">📚🔍</div>
                    </div>
                </div>
            </section>

            {/* Featured Lessons */}
            <section className="ac-featured">
                <div className="ac-container">
                    <div className="section-header">
                        <h2>Featured Lessons</h2>
                        <button className="ac-btn-black small">View All</button>
                    </div>

                    <div className="lessons-grid">
                        <div className="lesson-card">
                            <div className="lesson-thumb">💭</div>
                            <h3>Connecting knowledge in Notion</h3>
                            <p>Scale knowledge in Notion by learning to build systems that are consistent, connected, and reliable.</p>
                            <span className="lesson-meta">20 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">📂</div>
                            <h3>An issue tracker for any team</h3>
                            <p>Learn to build an intake system in Notion using forms, charts, and automations.</p>
                            <span className="lesson-meta">15 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">🧱</div>
                            <h3>Building basics</h3>
                            <p>Get started with Notion by learning how to navigate, create with blocks, build custom databases, and manage knowledge with Wikis.</p>
                            <span className="lesson-meta">20 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">⚖️</div>
                            <h3>Getting started with Notion AI</h3>
                            <p>Learn how to use Notion AI to search across apps, write better docs, manage projects, and more.</p>
                            <span className="lesson-meta">30 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">🚲</div>
                            <h3>Sharing & collaboration</h3>
                            <p>Learn how to share, collaborate, and brainstorm with your team members in Notion - both in person and remotely.</p>
                            <span className="lesson-meta">15 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">🎨</div>
                            <h3>Templates & marketplace</h3>
                            <p>Create, list, market, and sell templates in Notion's Marketplace — whether you're just starting out or looking to up-level your existing template business.</p>
                            <span className="lesson-meta">40 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">🃏</div>
                            <h3>Project management</h3>
                            <p>Learn how to set up projects & task databases in Notion to give you just the right amount of structure, with the flexibility to make it your own.</p>
                            <span className="lesson-meta">15 min</span>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson-thumb">🛠️</div>
                            <h3>Workspace design</h3>
                            <p>Learn best practices for designing your workspace—from choosing the right blocks for your use case to applying database organization strategies.</p>
                            <span className="lesson-meta">10 min</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Learning Section */}
            <section className="ac-resources">
                <div className="ac-container">
                    <h2>Still learning?</h2>
                    <div className="resource-grid">
                        <div className="ac-res-card">
                            <h3>Help Center</h3>
                            <p>Get quick answers to your most detailed questions, explore ways to use Notion for every use case, and follow step-by-step how-tos.</p>
                            <a href="#" className="link-arrow">Find answers →</a>
                        </div>
                        <div className="ac-res-card">
                            <h3>Attend a live webinar</h3>
                            <p>Level up your Notion skills with our live webinars and on-demand sessions, designed to help you make the most out of Notion.</p>
                            <a href="#" className="link-arrow">Register now →</a>
                        </div>
                        <div className="ac-res-card">
                            <h3>Join our community</h3>
                            <p>Connect with Notion users around the world, learn through real stories and events, and get inspired to create your own way.</p>
                            <a href="#" className="link-arrow">Get involved →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotionAcademyPage;

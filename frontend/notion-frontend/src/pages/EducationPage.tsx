import React from 'react';
import './EducationPage.css';
import {
    BookOpen,
    Users,
    Calendar,
    GraduationCap,
    Globe,
    ArrowRight,
    Mail,
    PenTool,
    Layout,
    Star
} from 'lucide-react';
import Navbar from '../components/Navbar';

const EducationPage: React.FC = () => {
    return (
        <div className="education-page">
            <Navbar />

            {/* Hero Section */}
            <section className="edu-hero">
                <div className="edu-container">
                    <div className="char-cloud">
                        {/* Character avatars - will be styled in CSS to float around */}
                        <div className="char char-1">👤</div>
                        <div className="char char-2">👩‍🎓</div>
                        <div className="char char-3">👨‍🎓</div>
                        <div className="char char-4">🎒</div>
                        <div className="char char-5">📝</div>
                        <div className="char char-6">🎨</div>
                        <div className="char char-7">💻</div>
                        <div className="char char-8">💡</div>
                        <div className="char icon-char zap">⚡</div>
                        <div className="char icon-char apple">🍎</div>
                        <div className="char icon-char book">📖</div>
                    </div>

                    <h1>Your space to do it all. Your way.</h1>
                    <p>One place to manage all your schoolwork, clubs, and side projects. In the classroom and beyond.</p>
                    <button className="edu-btn-primary">Get Notion free</button>

                    <div className="edu-feature-mini-grid">
                        <div className="edu-mini-card">
                            <Calendar size={20} className="icon-blue" />
                            <h3>Student planner</h3>
                            <p>Stay organized with a home base for your to-dos and activities.</p>
                        </div>
                        <div className="edu-mini-card">
                            <Users size={20} className="icon-blue" />
                            <h3>Club home</h3>
                            <p>Centralize your club's resources, projects, and events.</p>
                        </div>
                        <div className="edu-mini-card">
                            <GraduationCap size={20} className="icon-blue" />
                            <h3>Habit tracker</h3>
                            <p>Track and monitor your goals and habits to stay motivated.</p>
                        </div>
                        <div className="edu-mini-card">
                            <Globe size={20} className="icon-blue" />
                            <h3>Website</h3>
                            <p>Publish anything in just a few clicks.</p>
                        </div>
                        <div className="edu-mini-card">
                            <ArrowRight size={20} className="icon-blue" />
                            <h3>Job applications</h3>
                            <p>Prepare and keep track of your job application process.</p>
                            <a href="#" className="get-template-link">Get template →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Mockup Section */}
            <section className="edu-mockup-section">
                <div className="edu-container">
                    <div className="edu-browser-mockup">
                        <div className="mockup-header">
                            <div className="dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-sidebar">
                                <div className="sb-item active">Job Application Tracker</div>
                                <div className="sb-item">Reading List</div>
                                <div className="sb-item">Course Notes</div>
                                <div className="sb-item">Personal Budget</div>
                            </div>
                            <div className="mockup-content">
                                <h2>Job Application Tracker</h2>
                                <p className="mockup-desc">Your home base to organize and keep track of all your job applications.</p>

                                <div className="mockup-cols">
                                    <div className="mockup-col">
                                        <h4>Positions to apply to</h4>
                                        <div className="m-card">UX Researcher <span className="tag-applied">Applied</span></div>
                                        <div className="m-card">Creative Lead <span className="tag-offer">Offer</span></div>
                                    </div>
                                    <div className="mockup-col">
                                        <h4>Action items</h4>
                                        <div className="todo-item"><input type="checkbox" checked readOnly /> Update LinkedIn profile</div>
                                        <div className="todo-item"><input type="checkbox" checked readOnly /> Refine portfolio</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for full days Section */}
            <section className="full-days-section">
                <div className="edu-container">
                    <div className="section-header-side">
                        <h2>Built for full days.<br />And big plans.</h2>
                        <div className="char-illustration">👩‍💻</div>
                    </div>

                    <div className="edu-apps-grid">
                        <div className="app-card">
                            <BookOpen className="app-icon" />
                            <h3>Notion</h3>
                            <p>Your planner, notes, and projects. Designed by you.</p>
                            <a href="#" className="learn-link">Learn more →</a>
                            <div className="app-img-placeholder notion-img"></div>
                        </div>
                        <div className="app-card">
                            <Mail className="app-icon" />
                            <h3>Notion Mail</h3>
                            <p>Your inbox that automatically adapts to your priorities.</p>
                            <a href="#" className="learn-link">Learn more →</a>
                            <div className="app-img-placeholder mail-img"></div>
                        </div>
                        <div className="app-card">
                            <Calendar className="app-icon" />
                            <h3>Notion Calendar</h3>
                            <p>Schedule and keep track of your deadlines and activities with ease.</p>
                            <a href="#" className="learn-link">Learn more →</a>
                            <div className="app-img-placeholder cal-img"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Org Section */}
            <section className="student-org-section bg-light">
                <div className="edu-container">
                    <h2>Run your student org, for free</h2>
                    <p className="org-text">Got a club? Keep everyone in sync and collaborating in one place, with your club’s home page, meeting notes, onboarding docs, event calendar, and more.</p>
                    <a href="#" className="apply-link">Apply now →</a>

                    <div className="org-testimonials">
                        <div className="org-card">
                            <p>"Notion became our one-stop shop for all of our organization’s information — from our policies, to our resource docs, to our databases."</p>
                            <div className="org-source">
                                <strong>Alpha Theta Delta</strong>
                                <span>Member, University of Michigan, Ann Arbor</span>
                            </div>
                        </div>
                        <div className="org-card">
                            <p>"Bringing our org onto Notion unlocked major growth for us... Now we all rely on Notion as our internal source-of-truth."</p>
                            <div className="org-source">
                                <strong>Cyclone RoboSub</strong>
                                <span>Member, UC Santa Cruz</span>
                            </div>
                        </div>
                        <div className="org-card">
                            <p>"If we’re going to use any site builder, Notion Sites CLEARS — it’s already the home to tons of our internal leadership docs."</p>
                            <div className="org-source">
                                <strong>App Development Club</strong>
                                <span>Member, Oregon State University</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Play Section */}
            <section className="ways-to-play">
                <div className="edu-container">
                    <h2>Infinite ways to play</h2>
                    <div className="play-grid">
                        <div className="play-card large">
                            <div className="play-text">
                                <PenTool className="play-icon" />
                                <h3>Create anything</h3>
                                <p>Build what you want: your study planner or even your fitness tracker. And personalize it with charts, tables, custom calendars, and even gallery views.</p>
                            </div>
                            <div className="play-visual create-visual"></div>
                        </div>
                        <div className="play-card large">
                            <div className="play-text">
                                <Globe className="play-icon" />
                                <h3>Share your work with the world</h3>
                                <p>Publish a website in one-click. Create your portfolio, launch your club's website, or share your favorite spots on campus.</p>
                            </div>
                            <div className="play-visual share-visual">
                                <div className="publish-modal">
                                    <div className="modal-header">Share</div>
                                    <div className="modal-tabs">
                                        <span>Invite</span>
                                        <span className="active">Publish</span>
                                    </div>
                                    <div className="modal-body">
                                        <h4>Publish to web</h4>
                                        <p>Create a website with Notion</p>
                                        <div className="site-preview">
                                            <div className="site-info">
                                                <div className="site-icon">📌</div>
                                                <strong>Tipson thoughts</strong>
                                            </div>
                                            <button className="publish-btn">Publish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="play-grid-small">
                        <div className="play-card-small">
                            <Layout className="play-icon" />
                            <h3>Stay on top of it all</h3>
                            <p>Keep all of your to-do’s, tasks, notes, meetings, events, and more — all in one place.</p>
                        </div>
                        <div className="play-card-small">
                            <Users className="play-icon" />
                            <h3>Two’s a party</h3>
                            <p>Invite friends to collaborate on anything — from your group projects to organizing your student org's events.</p>
                        </div>
                        <div className="play-card-small">
                            <Star className="play-icon" />
                            <h3>Have fun with it</h3>
                            <p>Personalize your workspace and docs with embedded images, videos, and even your Spotify playlist.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Testimonials */}
            <section className="global-testimonials">
                <div className="edu-container">
                    <h2>Loved by students globally</h2>
                    <div className="testimonials-grid">
                        <div className="test-card">
                            <p>“I first used Notion three years ago. Now I use it daily to keep track of my to-dos, track my workouts and take notes during class. I’ve fallen completely in love.”</p>
                            <div className="test-auth">
                                <strong>Andrew</strong>
                                <span>Member, University of Waterloo</span>
                            </div>
                        </div>
                        <div className="test-card">
                            <p>“I use Notion as a digital workspace that seamlessly integrates into my daily routine. It's an indispensable tool for orchestrating my academic and organizational activities.”</p>
                            <div className="test-auth">
                                <strong>Andy</strong>
                                <span>Member, UC Berkeley</span>
                            </div>
                        </div>
                        <div className="test-card">
                            <p>“I love Notion. It has kept me organized and increased my productivity in college. I can't imagine not having it.”</p>
                            <div className="test-auth">
                                <strong>Nina Brenex</strong>
                                <span>Template creator, UC Davis</span>
                            </div>
                        </div>
                        <div className="test-card">
                            <p>“Notion is the one reason I'm able to stay organized across all my responsibilities and planning through my first year in university. And many of my friends who used my assignments/to-do templates were shocked at how easy it is to use.”</p>
                            <div className="test-auth">
                                <strong>Scarlett</strong>
                                <span>Member, University of Notre Dame</span>
                            </div>
                        </div>
                        <div className="test-card">
                            <p>“I was convinced that organization ‘isn’t my thing.’ Notion changed my perspective on that. Being organized is about following a system that helps you grow in the ways that you want. Notion’s flexibility makes it the perfect place to develop this system.”</p>
                            <div className="test-auth">
                                <strong>Samriddhi</strong>
                                <span>Member, UC Davis</span>
                            </div>
                        </div>
                        <div className="test-card">
                            <p>“My Notion evolved from a notes hub and into a hub for side projects; the sharing feature allowed me to collaborate with friends easily. Notion effectively became my second brain, a personal library I constantly reference. I'm head-over-heels in love.”</p>
                            <div className="test-auth">
                                <strong>Payton Rogers</strong>
                                <span>Template creator, University of Michigan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Section */}
            <section className="campus-section">
                <div className="edu-container text-center">
                    <div className="campus-illustration">👩‍🏫</div>
                    <h2>Join the fun on campus</h2>
                    <p>Get in on our global community of Campus Leaders’ events on campus — including template build-a-thon, student org workshops, Notion tutorials, and more.</p>
                    <a href="#" className="edu-btn-link">Find our campus events here →</a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="edu-faq bg-light">
                <div className="edu-container">
                    <h2>FAQs</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <div className="faq-q">Are there any discounts for students? <ArrowRight size={16} /></div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">How do I sign up for the free Education plan? <ArrowRight size={16} /></div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">What’s Notion’s student organization plan? <ArrowRight size={16} /></div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">What happens when I graduate or leave my educational institution? <ArrowRight size={16} /></div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">I’m a student who loves Notion. How can I get more involved? <ArrowRight size={16} /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta text-center">
                <div className="edu-container">
                    <h2>Try Notion for free</h2>
                    <p>Ready to get started? Join thousands of students using Notion every day.</p>
                    <button className="edu-btn-primary">Get Notion free</button>
                </div>
            </section>
        </div>
    );
};

export default EducationPage;

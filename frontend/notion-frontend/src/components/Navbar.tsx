import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/notion-logo.png';
import illustration from '../assets/notion_illustration_mockup.png';

const Navbar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="logo" onClick={() => setActiveDropdown(null)}>
                        <img src={logo} alt="Notion" className="logo-img" />
                        <span className="logo-text">Notion</span>
                    </Link>

                    <div className="nav-links">
                        <div
                            className={`nav-item ${activeDropdown === 'notion' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveDropdown('notion')}
                            onMouseLeave={() => setActiveDropdown(null)}
                            onClick={() => setActiveDropdown(activeDropdown === 'notion' ? null : 'notion')}
                        >
                            Notion <ChevronDown size={14} className={activeDropdown === 'notion' ? 'rotate' : ''} />

                            {activeDropdown === 'notion' && (
                                <div className="mega-menu" onClick={(e) => e.stopPropagation()}>
                                    <div className="mega-menu-content">
                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Features</h4>
                                            <div className="menu-group">
                                                <Link to="/product/ai" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Notion AI</div>
                                                        <div className="item-desc">Build, write, automate</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/ai/use-cases" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Agents <span className="badge-new">New</span></div>
                                                        <div className="item-desc">Handles manual tasks</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/enterprise-search" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Enterprise Search</div>
                                                        <div className="item-desc">Find answers instantly</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/ai-meeting-notes" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">AI Meeting Notes</div>
                                                        <div className="item-desc">Perfectly written by AI</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-col spacer">
                                            <div className="menu-group mt-large">
                                                <Link to="/product/docs" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Docs</div>
                                                        <div className="item-desc">Simple & powerful</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/wikis" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Knowledge Base</div>
                                                        <div className="item-desc">Centralize your knowledge</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/projects" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Projects</div>
                                                        <div className="item-desc">Manage any project</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/sites" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Sites</div>
                                                        <div className="item-desc">Publish anything, fast</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Get started</h4>
                                            <div className="menu-group">
                                                <Link to="/product/ai/use-cases" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Explore AI use cases <span className="badge-new">New</span></div>
                                                        <div className="item-desc">See what Notion AI can do</div>
                                                    </div>
                                                </Link>
                                                <Link to="/templates" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Browse marketplace</div>
                                                        <div className="item-desc">Templates for everything</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/integrations" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">View integrations</div>
                                                        <div className="item-desc">Connect your apps with Notion</div>
                                                    </div>
                                                </Link>
                                                <Link to="/product/web-clipper" className="menu-item-link" onClick={() => setActiveDropdown(null)}>
                                                    <div className="menu-item-large">
                                                        <div className="item-title">Download web clipper</div>
                                                        <div className="item-desc">Save from the web into Notion</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-cta">
                                            <div className="cta-card">
                                                <div className="cta-text">Try the Notion desktop app for a faster experience</div>
                                                <button className="cta-button">Download app</button>
                                                <img src={illustration} alt="Illustration" className="cta-illustration" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link to="/product/mail" className="nav-item" onClick={() => setActiveDropdown(null)}>Mail</Link>
                        <Link to="/product/calendar" className="nav-item" onClick={() => setActiveDropdown(null)}>Calendar</Link>
                        <Link to="/product/ai" className="nav-item" onClick={() => setActiveDropdown(null)}>AI</Link>
                        <Link to="/enterprise" className="nav-item" onClick={() => setActiveDropdown(null)}>Enterprise</Link>
                        <Link to="/pricing" className="nav-item" onClick={() => setActiveDropdown(null)}>Pricing</Link>
                        <div
                            className={`nav-item ${activeDropdown === 'explore' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveDropdown('explore')}
                            onMouseLeave={() => setActiveDropdown(null)}
                            onClick={() => setActiveDropdown(activeDropdown === 'explore' ? null : 'explore')}
                        >
                            Explore <ChevronDown size={14} className={activeDropdown === 'explore' ? 'rotate' : ''} />

                            {activeDropdown === 'explore' && (
                                <div className="mega-menu explore-menu" onClick={(e) => e.stopPropagation()}>
                                    <div className="mega-menu-content">
                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Teams</h4>
                                            <div className="menu-group">
                                                <Link to="/product/engineering-product" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Eng & Product
                                                </Link>
                                                <Link to="/product/design" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Design
                                                </Link>
                                                <Link to="/templates/marketing" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Marketing
                                                </Link>
                                                <Link to="/templates/it" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    IT
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Team size</h4>
                                            <div className="menu-group">
                                                <Link to="/startups" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Startups
                                                </Link>
                                                <Link to="/smbs" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    SMBs
                                                </Link>
                                                <Link to="/enterprise" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Enterprise
                                                </Link>
                                                <Link to="/product/education" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Education
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Learn</h4>
                                            <div className="menu-group">
                                                <div className="menu-item-simple">Help center</div>
                                                <Link to="/academy" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Notion Academy
                                                </Link>
                                                <Link to="/customers" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Customer stories
                                                </Link>
                                                <Link to="/blog" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Blog
                                                </Link>
                                                <a href="https://www.notion.so/notion/Notion-Community-04f306fbf59a413fae15f42e2a1ab029" target="_blank" rel="noopener noreferrer" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Community
                                                </a>
                                                <Link to="/partners" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Partner programs
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="mega-menu-col">
                                            <h4 className="column-title">Build</h4>
                                            <div className="menu-group">
                                                <Link to="/developers" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    API
                                                </Link>
                                                <Link to="/templates" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Templates
                                                </Link>
                                                <Link to="/security" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Security
                                                </Link>
                                                <Link to="/consultants" className="menu-item-simple" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onClick={() => setActiveDropdown(null)}>
                                                    Consultants
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="navbar-right">
                    <Link to="/contact-sales">
                        <button className="nav-btn-text">Request a demo</button>
                    </Link>
                    <Link to="/login" className="menu-item-link">
                        <button className="nav-btn-text">Log in</button>
                    </Link>
                    <Link to="/signup" className="menu-item-link">
                        <button className="nav-btn-primary blue">Get Notion free</button>
                    </Link>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-nav-item">Product</div>
                    <div className="mobile-nav-item">Download</div>
                    <div className="mobile-nav-item">Solutions</div>
                    <div className="mobile-nav-item">Resources</div>
                    <div className="mobile-nav-item">Pricing</div>
                    <hr />
                    <button className="mobile-btn-text">Log in</button>
                    <button className="mobile-btn-primary">Get Notion free</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

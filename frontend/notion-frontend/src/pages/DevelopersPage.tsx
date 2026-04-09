import React from 'react';
import './DevelopersPage.css';
import { Search, BookOpen, Code, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevelopersPage: React.FC = () => {
    return (
        <div className="developers-page">
            {/* Custom Dev Header */}
            <header className="dev-header">
                <div className="dev-container dev-nav">
                    <div className="dev-logo-area">
                        <Link to="/" className="dev-notion-link">
                            <span className="notion-n-icon">N</span>
                        </Link>
                        <span className="dev-brand">Developers</span>
                    </div>

                    <div className="dev-links-right">
                        <a href="#" className="dev-link">View my integrations ↗</a>
                    </div>
                </div>
                <div className="dev-container dev-subnav">
                    <div className="dev-sub-links">
                        <a href="#" className="active">Home</a>
                        <a href="#">Guides</a>
                        <a href="#">API Reference</a>
                    </div>
                    <div className="dev-search">
                        <Search size={16} color="#999" />
                        <span>Search</span>
                        <span className="kbd">CTRL K</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="dev-hero">
                <div className="dev-container hero-layout">
                    <div className="hero-content">
                        <h1>Start building with <br /> the Notion API</h1>
                        <p>Connect Notion pages and databases to the <br /> tools you use every day, creating powerful <br /> workflows.</p>
                        <button className="btn-dev-cta">Get started</button>
                    </div>
                    <div className="hero-illus">
                        <div className="construction-doodle">
                            <div className="crane-hook"></div>
                            <div className="workers">
                                <div className="worker w1"></div>
                                <div className="worker w2"></div>
                                <div className="worker w3"></div>
                            </div>
                            <div className="beam"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Blocks */}
            <section className="dev-blocks">
                <div className="dev-container blocks-layout">
                    <div className="code-showcase">
                        <div className="code-header">
                            <span className="code-title">curl https://api.notion.com/v1/users</span>
                            <span className="code-auth">-H "Authorization: Bearer secret_token"</span>
                        </div>
                        <div className="code-body">
                            <div className="line"><span className="p">{`{`}</span></div>
                            <div className="line indent"><span className="k">"name"</span>: <span className="s">"Ada Lovelace"</span>,</div>
                            <div className="line indent"><span className="k">"type"</span>: <span className="s">"person"</span>,</div>
                            <div className="line indent"><span className="k">"person"</span>: <span className="p">{`{`}</span></div>
                            <div className="line double-indent"><span className="k">"email"</span>: <span className="s">"ada@example.org"</span>,</div>
                            <div className="line indent"><span className="p">{`}`},</span></div>
                            <div className="line indent"><span className="c">...</span></div>
                            <div className="line"><span className="p">{`}`}</span></div>
                        </div>
                        <div className="dev-face"></div>
                    </div>

                    <div className="blocks-text-content">
                        <h2>Building blocks for <br /> developers</h2>
                        <p className="blocks-desc">Aggregate data from many sources into your team's workspace. Spend less time context switching, and increase visibility across the software and services you rely on.</p>

                        <div className="blocks-features">
                            <div className="bf-item">
                                <div className="bf-icon pink"><BookOpen size={20} /></div>
                                <h3>API reference</h3>
                                <p>A technical guide to querying, retrieving, and updating pages, databases, blocks, users and more.</p>
                                <a href="#">Jump to the reference →</a>
                            </div>
                            <div className="bf-item">
                                <div className="bf-icon dark"><Code size={20} /></div>
                                <h3>Examples</h3>
                                <p>A starting point to see what's possible with the API, so you can start bringing your own vision to life.</p>
                                <a href="#">Learn more →</a>
                            </div>
                            <div className="bf-item">
                                <div className="bf-icon yellow"><Heart size={20} /></div>
                                <h3>Partner with us</h3>
                                <p>Built a public Notion integration? Become a technology partner to grow its adoption.</p>
                                <a href="#">Learn more →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notion MCP */}
            <section className="dev-mcp">
                <div className="dev-container mcp-layout">
                    <div className="mcp-illus">
                        <div className="blueprint-people">
                            <div className="bp-person bp1"></div>
                            <div className="bp-person bp2"></div>
                            <div className="blueprint-paper"></div>
                        </div>
                    </div>
                    <div className="mcp-content">
                        <h2>Notion MCP</h2>
                        <p>Connect your Notion workspace to AI tools like ChatGPT, Claude, and Cursor. Read and write structured content with APIs designed for agentic workflows.</p>
                        <a href="#">Get started with Notion MCP →</a>
                    </div>
                </div>
            </section>

            {/* Stay in the Loop */}
            <section className="dev-loop">
                <div className="dev-container loop-layout">
                    <div className="loop-text">
                        <h2>Stay in the loop</h2>

                        <div className="loop-cols">
                            <div className="loop-col">
                                <h3>Twitter</h3>
                                <p>Spend more time on Twitter than your inbox? Us, too.</p>
                                <a href="#">Follow @NotionAPI →</a>
                            </div>
                            <div className="loop-col">
                                <h3>Slack community</h3>
                                <p>Meet other developers and connect with our team.</p>
                                <a href="#">Join here →</a>
                            </div>
                        </div>
                    </div>
                    <div className="loop-illus">
                        <div className="mailbox-drawing">
                            <div className="mailbox"></div>
                            <div className="letter"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Help */}
            <section className="dev-help">
                <div className="dev-container help-layout">
                    <div className="help-header">
                        <h2>Getting help</h2>
                        <div className="paper-plane-illus"></div>
                    </div>

                    <div className="help-grid">
                        <div className="hg-col">
                            <div className="hg-label">Resources</div>
                            <ul>
                                <li><a href="#">Frequently asked questions</a></li>
                                <li><a href="#">Postman collection ↗</a></li>
                            </ul>
                        </div>
                        <div className="hg-col">
                            <div className="hg-label">Community</div>
                            <ul>
                                <li><a href="#">#notion-api on Stack Overflow ↗</a></li>
                                <li><a href="#">Notion Devs Slack ↗</a></li>
                            </ul>
                        </div>
                        <div className="hg-col">
                            <div className="hg-label">Support</div>
                            <ul>
                                <li><a href="#">Contact Notion developer support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="dev-footer">
                <div className="dev-container footer-content">
                    <div className="footer-brand">
                        <div className="notion-logo-lg">N Notion</div>
                        <p>The all-in-one workspace for your <br /> notes, tasks, wikis, and databases.</p>
                        <p className="footer-credits">@NotionAPI <br /> ©2026 Notion Labs, Inc.</p>
                        <div className="footer-links-sm">Terms & Privacy</div>
                    </div>

                    <div className="footer-lists">
                        <div className="fl-col">
                            <h4>Developers</h4>
                            <a href="#">Guides</a>
                            <a href="#">API reference</a>
                            <a href="#">My integrations</a>
                            <a href="#">Developer terms</a>
                        </div>
                        <div className="fl-col">
                            <h4>Notion</h4>
                            <a href="#">Product</a>
                            <a href="#">Teams</a>
                            <a href="#">Enterprise</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className="fl-col">
                            <h4>Community</h4>
                            <a href="#">Slack</a>
                            <a href="#">Stack Overflow</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DevelopersPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BlogPage.css';
import { Play } from 'lucide-react';

interface BlogPost {
    id: number;
    category: string;
    title: string;
    description: string;
    author: string;
    role: string;
    authorImg?: string;
    image?: string; // CSS graphic or placeholder
    mediaType?: 'image' | 'video' | 'graphic';
    graphicClass?: string;
    videoData?: {
        name: string;
        role: string;
        company: string;
    }
}

const BlogPage: React.FC = () => {
    const posts: BlogPost[] = [
        {
            id: 1,
            category: "For Teams",
            title: "Why team size no longer matters",
            description: "Recently, I've been hearing the same thing from founders and leaders running lean teams alike: Limited resources, ambitious goals. So how do they compete?",
            author: "Andrew McCarthy",
            role: "Head of ANZ, SEA, and India",
            mediaType: 'graphic',
            graphicClass: 'graphic-balance',
            image: 'balance'
        },
        {
            id: 2,
            category: "For Teams",
            title: "How Merge brought together all it knows using Notion AI",
            description: "Merge noticed their company knowledge was everywhere, which made it nearly impossible to find what they needed. So they turned to Notion AI to be the librarian that brings all their knowledge together in one place.",
            author: "Shensi Ding",
            role: "Co-founder and CEO, Merge",
            mediaType: 'image', // Placeholder for screenshots
            image: 'merge-screens'
        },
        {
            id: 3,
            category: "Inspiration",
            title: "Steam, Steel, and Infinite Minds",
            description: "Every era is shaped by its miracle material. Steel forged the Gilded Age. Semiconductors switched on the Digital Age. Now AI has arrived as infinite minds. If history teaches us anything, those who master the material define the era.",
            author: "Ivan Zhao",
            role: "Co-founder & CEO",
            mediaType: 'image',
            image: 'steam-steel'
        },
        {
            id: 4,
            category: "Notion HQ",
            title: "Highlights and takeaways from Make with Notion Showcase Europe 2025",
            description: "From the arrival of Notion 3.0 to uncovering the hidden costs of siloed knowledge, our second annual European conference series brought together over 1,300 attendees across four cities.",
            author: "Áine Dundas",
            role: "Head of EMEA Marketing",
            mediaType: 'image',
            image: 'showcase'
        },
        {
            id: 5,
            category: "First Block",
            title: "First Block with Garrett Lord, Co-founder and CEO of Handshake",
            description: "In this episode, Garrett shares his journey from growing up in a working-class family to building a company that democratizes access to career opportunities.",
            author: "Anastasia Crew",
            role: "Startup Marketing Lead",
            mediaType: 'video',
            videoData: {
                name: "Garrett Lord",
                role: "Co-Founder & CEO of Handshake",
                company: "Handshake"
            }
        },
        {
            id: 6,
            category: "Tech",
            title: "How we made Notion available offline",
            description: "Offline Mode was Notion's most requested feature for years, but building it meant solving tough technical challenges around our unique block architecture. Here's the architecture and data model that made it possible.",
            author: "Raymond Xu",
            role: "Software Engineer, Notion",
            mediaType: 'graphic',
            graphicClass: 'graphic-globe'
        },
        {
            id: 7,
            category: "For Teams",
            title: "How Ramp built an AI operating system for scalable work",
            description: "Work is fundamentally changing with AI. But with the right mindset and approach to using AI, there's an opportunity to design the new version of how teams do their jobs.",
            author: "Drew Evans",
            role: "Marketing",
            mediaType: 'graphic',
            graphicClass: 'graphic-machine'
        },
        {
            id: 8,
            category: "First Block",
            title: "First Block with Jesse Zhang, Co-founder and CEO of Decagon",
            description: "In this episode, Jesse shares his journey from a painful first startup experience to building Decagon with intentional customer discovery, and why commercial thinking matters as much as technical excellence.",
            author: "Anastasia Crew",
            role: "Startup Marketing Lead",
            mediaType: 'video',
            videoData: {
                name: "Jesse Zhang",
                role: "Co-Founder & CEO of Decagon",
                company: "Decagon"
            }
        },
        {
            id: 9,
            category: "For Teams",
            title: "The hidden cost of disconnected knowledge",
            description: "The problem isn't your wiki—it's that your wiki is only a wiki. The companies moving fastest are building workflows around tools that are flexible, connected, and intelligent so they can shrink the distance between knowledge and action.",
            author: "Drew Evans",
            role: "Marketing",
            mediaType: 'graphic',
            graphicClass: 'graphic-alert'
        },
        {
            id: 10,
            category: "First Block",
            title: "First Block with Fabian Hedin, Co-founder and CTO of Lovable",
            description: "In this episode, we spoke with Fabian Hedin about Minecraft, the bold bet on democratizing software development, and why building for today's AI capabilities beats betting on tomorrow's.",
            author: "Anastasia Crew",
            role: "Startup Marketing Lead",
            mediaType: 'video',
            videoData: {
                name: "Fabian Hedin",
                role: "Co-Founder & CTO of Lovable",
                company: "Lovable"
            }
        }
    ];

    const menuItems = ["Notion HQ", "For Teams", "Tech", "Mail", "Inspiration", "Pioneers", "First Block"];

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-container">
                {/* Sidebar */}
                <aside className="blog-sidebar">
                    <div className="sidebar-header">
                        <h1>Tools <br /> <span>& Craft</span></h1>
                        <p>Thoughts on the future of work, from the people and teams creating it.</p>
                    </div>

                    <nav className="sidebar-nav">
                        <h3>Latest</h3>
                        <ul>
                            {menuItems.map((item, i) => (
                                <li key={i}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="blog-content">
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className={`card-media ${post.mediaType === 'video' ? 'video-card' : ''} ${post.graphicClass || ''}`}>
                                    {post.mediaType === 'video' && post.videoData && (
                                        <div className="video-overlay">
                                            <div className="vid-tag"> <span className="n-icon">N</span> First Block <span className="live-tag">Live</span></div>
                                            <div className="play-btn"><Play fill="white" size={24} /></div>
                                            <div className="vid-info">
                                                <h2>{post.videoData.name}</h2>
                                                <p>{post.videoData.role}</p>
                                            </div>
                                            <div className="vid-bg"></div> {/* Placeholder for person image */}
                                        </div>
                                    )}
                                    {post.mediaType === 'graphic' && (
                                        <div className="graphic-placeholder">
                                            {/* CSS Art Placeholders */}
                                            {post.graphicClass === 'graphic-balance' && (
                                                <div className="art-balance">
                                                    <div className="crane"></div>
                                                    <div className="blocks"></div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {post.mediaType === 'image' && (
                                        <div className="image-placeholder"></div>
                                    )}
                                </div>
                                <div className="card-text">
                                    <div className="card-meta">{post.category}</div>
                                    <h2>{post.title}</h2>
                                    <p className="card-desc">{post.description}</p>
                                    <div className="card-author">
                                        <div className="author-avatar"></div>
                                        <div className="author-info">
                                            <strong>{post.author}</strong>
                                            <span>{post.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="pagination">
                        <span className="current">1</span>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <span className="dots">...</span>
                        <a href="#">Next →</a>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default BlogPage;

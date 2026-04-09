import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
                {/* Additional sections like Features, Testimonials would go here */}
                <section className="features-simple">
                    <div className="section-container">
                        <h2>Millions run on Notion every day</h2>
                        <p>Powering the world's best teams, from next-generation startups <br /> to established enterprises.</p>
                        <div className="logo-grid">
                            {/* Placeholders for partner logos */}
                            <div className="partner">Figma</div>
                            <div className="partner">Pixar</div>
                            <div className="partner">Doordash</div>
                            <div className="partner">Nike</div>
                            <div className="partner">Amazon</div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-container">
                    <div className="footer-bottom">
                        &copy; 2026 Notion Clone. Built with ❤️ for the Notion community.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

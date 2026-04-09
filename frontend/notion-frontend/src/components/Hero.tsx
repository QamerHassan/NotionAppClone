import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">
                    Write. Plan. Organize. <br />
                    <span>Together.</span>
                </h1>
                <p className="hero-subtitle">
                    Notion is the connected workspace where <br />
                    better, faster work happens.
                </p>
                <div className="hero-ctas">
                    <button className="hero-btn-primary">
                        Get Notion free <ArrowRight size={18} />
                    </button>
                </div>

                <div className="hero-image-container">
                    <div className="hero-image-placeholder">
                        {/* I will replace this with a generated image or a mockup */}
                        <div className="mockup-header">
                            <div className="dots"><span></span><span></span><span></span></div>
                        </div>
                        <div className="mockup-content">
                            <div className="sidebar-mock"></div>
                            <div className="editor-mock">
                                <div className="line long"></div>
                                <div className="line med"></div>
                                <div className="line short"></div>
                                <div className="cards-mock">
                                    <div className="card"></div>
                                    <div className="card"></div>
                                    <div className="card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import './Footer.css';
import logo from '../assets/notion-logo.png';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Notion" />
                            <span>Notion</span>
                        </div>
                        <div className="footer-social">
                            <Instagram size={20} />
                            <Twitter size={20} />
                            <Linkedin size={20} />
                            <Facebook size={20} />
                            <Youtube size={20} />
                        </div>
                        <div className="footer-lang">
                            <select>
                                <option>English (US)</option>
                                <option>日本語</option>
                                <option>한국어</option>
                                <option>Français</option>
                            </select>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <a href="#">AI</a>
                            <a href="#">Docs</a>
                            <a href="#">Wiki</a>
                            <a href="#">Projects</a>
                            <a href="#">Calendar</a>
                            <a href="#">What's new</a>
                        </div>
                        <div className="footer-column">
                            <h4>Solutions</h4>
                            <a href="#">Enterprise</a>
                            <a href="#">Small business</a>
                            <a href="#">Personal use</a>
                            <a href="#">Remote work</a>
                            <a href="#">Startups</a>
                            <a href="#">Education</a>
                        </div>
                        <div className="footer-column">
                            <h4>Download</h4>
                            <a href="#">iOS & Android</a>
                            <a href="#">Mac & Windows</a>
                            <a href="#">Web Clipper</a>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <a href="#">Help center</a>
                            <a href="#">Pricing</a>
                            <a href="#">Blog</a>
                            <a href="#">Community</a>
                            <a href="#">Templates</a>
                            <a href="#">Affiliates</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-links">
                        <a href="#">Do not sell or share my personal information</a>
                        <span>•</span>
                        <a href="#">Privacy policy</a>
                        <span>•</span>
                        <a href="#">Terms & conditions</a>
                        <span>•</span>
                        <a href="#">Cookie settings</a>
                    </div>
                    <div className="footer-copyright">
                        © 2026 Notion Labs, Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

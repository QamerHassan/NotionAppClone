import React from 'react';
import './ContactSalesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactSalesPage: React.FC = () => {
    return (
        <div className="contact-sales-page">
            <Navbar />

            <main>
                <section className="contact-container">
                    <div className="contact-hero">
                        <div className="contact-left">
                            <h1>Contact our sales team</h1>
                            <p>Get help with pricing and plans, schedule a demo, explore use-cases for your team, and more.</p>

                            <div className="logo-wall-label">Millions run on Notion everyday</div>
                            <div className="logo-wall">
                                <span>Figma</span>
                                <span>Pinterest</span>
                                <span>amazon</span>
                                <span>TOYOTA</span>
                            </div>

                            <div className="testimonial-box">
                                <h2>OpenAI</h2>
                                <p>“People need an application to store knowledge for the team and keep pace with how quickly OpenAI moves. There’s power in a single platform where you can do all your work. Notion is that single place.”</p>
                                <div className="author">
                                    <strong>Nick Erdenberger</strong>
                                    <span>GTM, OpenAI</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-field">
                                        <label>First name *</label>
                                        <input type="text" placeholder="Ada" required />
                                    </div>
                                    <div className="form-field">
                                        <label>Last name *</label>
                                        <input type="text" placeholder="Lovelace" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <label>Work email *</label>
                                        <input type="email" placeholder="ada@lovelace.com" required />
                                    </div>
                                    <div className="form-field">
                                        <label>Job title *</label>
                                        <input type="text" placeholder="Software Engineer" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <label>Company name *</label>
                                        <input type="text" placeholder="Lovelace Inc." required />
                                    </div>
                                    <div className="form-field">
                                        <label>Company size *</label>
                                        <select required>
                                            <option value="">Select...</option>
                                            <option value="1-50">1-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-500">201-500 employees</option>
                                            <option value="501-1000">501-1000 employees</option>
                                            <option value="1000+">1000+ employees</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <label>Country or region *</label>
                                        <select required>
                                            <option value="PK">Pakistan</option>
                                            <option value="US">United States</option>
                                            <option value="GB">United Kingdom</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label>Phone number *</label>
                                        <input type="tel" placeholder="(123) 456-7891" required />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label>Reason for contact *</label>
                                    <select required>
                                        <option value="">Select...</option>
                                        <option value="pricing">Pricing & Plans</option>
                                        <option value="demo">Schedule a Demo</option>
                                        <option value="enterprise">Enterprise Solutions</option>
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label>Provide more details *</label>
                                    <textarea placeholder="How are you looking to use Notion?" required></textarea>
                                </div>

                                <div className="checkbox-field">
                                    <input type="checkbox" id="consent" />
                                    <label htmlFor="consent">I agree to Notion sending marketing communications about Notion</label>
                                </div>

                                <button type="submit" className="submit-btn">Contact sales</button>

                                <div className="form-footer">
                                    You may unsubscribe from receiving marketing communications any time. Notion's websites and communications are subject to our Privacy Policy.
                                </div>

                                <div className="form-support-msg">
                                    For technical or product support, email us at <a href="mailto:team@makenotion.com">team@makenotion.com</a> or visit our <a href="#">Help Center</a>.
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="secondary-testimonials">
                        <div className="testimonial-card-small">
                            <h3>MatchGroup</h3>
                            <p>“Notion has been the most powerful and impactful way to streamline our workflow.”</p>
                            <div className="author">
                                <strong>Rahim Makani</strong>
                                <div style={{ color: '#666' }}>Director of Product, MatchGroup</div>
                            </div>
                        </div>
                        <div className="testimonial-card-small">
                            <h3>TOYOTA</h3>
                            <p>“Not only do our streamlined workflows in Notion save us time, they also make it easier to stay up to date on task details and progress.”</p>
                            <div className="author">
                                <strong>Taku Wakasugi</strong>
                                <div style={{ color: '#666' }}>Toyota Frontier Research Center, Toyota</div>
                            </div>
                        </div>
                        <div className="testimonial-card-small">
                            <h3>ramp</h3>
                            <p>“Notion AI removes administrative tasks that often plague product teams, keeping them focused on what they're best at—building great products.”</p>
                            <div className="author">
                                <strong>Geoff Charles</strong>
                                <div style={{ color: '#666' }}>CPO, Ramp</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactSalesPage;

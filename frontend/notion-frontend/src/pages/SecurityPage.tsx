import React from 'react';
import './SecurityPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Handshake,
    Link as LinkIcon,
    FileCheck,
    Sparkles,
    Radio,
    Lock
} from 'lucide-react';

const SecurityPage: React.FC = () => {
    return (
        <div className="security-page">
            <Navbar />

            <main className="sec-container" style={{ paddingTop: '80px' }}>
                {/* Hero Section */}
                <section className="sec-hero">
                    <h1>Security & privacy</h1>
                    <p className="sec-subtitle">Your security, safety, and privacy is our top priority — and we build Notion accordingly.</p>
                </section>

                <hr className="sec-divider" />

                {/* Security Section */}
                <section className="sec-section-grid">
                    <div className="sec-content-col">
                        <h2>Security</h2>
                        <p>Notion takes a security-by-design approach to protecting your data. Our team continues to make investments so you can use Notion with confidence.</p>
                        <a href="#" className="sec-link">Our security practices →</a>
                    </div>
                    <div className="sec-illustration-col">
                        <div className="sec-illustration-placeholder">
                            <Handshake size={120} strokeWidth={1} />
                        </div>
                    </div>
                </section>

                <section className="sec-two-col-grid">
                    <div>
                        <h3>Security infrastructure</h3>
                        <p>Notion's infrastructure is designed with layers of protection to help ensure your data is secure while transmitted, stored, or processed. Protections include but are not limited to encryption, least privilege access, secure software development, and a <a href="#">public bug bounty program</a>.</p>
                    </div>
                    <div>
                        <h3>Operational security</h3>
                        <p>Our information security team continuously implements new security controls and monitors Notion for malicious activity across our infrastructure, networks, and assets.</p>
                    </div>
                </section>

                <section className="sec-full-width">
                    <h3>Product security</h3>
                    <p>Notion provides a robust set of in-product data protection and admin controls for greater visibility and control over our data. Enterprise admins can deploy Notion to their organizations with SSO via SAML 2.0, provision users through SCIM, and track activity with the audit log features. Enterprise admins can also fine tune permission controls and guests, and manage team organizations.</p>
                </section>

                <hr className="sec-divider" />

                {/* Privacy Section */}
                <section className="sec-section-grid">
                    <div className="sec-content-col">
                        <h2>Privacy</h2>
                        <p>Notion maintains a comprehensive privacy compliance program and is committed to partnering with its customers and vendors on privacy compliance efforts. <a href="#">This page</a> highlights some of the key aspects of our program.</p>
                    </div>
                    <div className="sec-illustration-col">
                        <div className="sec-illustration-placeholder">
                            <LinkIcon size={120} strokeWidth={1} />
                        </div>
                    </div>
                </section>

                <section className="sec-two-col-grid">
                    <div>
                        <h3>How we handle your data</h3>
                        <p>At Notion our team is dedicated to developing and implementing data privacy processes and safeguards that meet industry standards and best practices. We conduct ongoing training for our teams to ensure that they are up to speed with developments in legislation and essential privacy and security practices. Every Notion employee and contractor signs up to non-disclosure terms to maintain the confidentiality and security of your data. Notion also holds any vendors that handle personal data to the same data management, security, and privacy practices and standards to which we hold ourselves.</p>
                    </div>
                    <div>
                        <h3>Agreements</h3>
                        <p>At Notion we strive to keep all of our agreements up to date with the latest regulations and industry standards. Our Master Subscription Agreement and Data Processing Addendum describe in detail Notion’s data privacy processes, standards, safeguards and our compliance with data protection legislation. To ensure that our terms track with the GDPR, CCPA and other global privacy standards we continually have our terms assessed by leading privacy experts in multiple jurisdictions.</p>
                    </div>
                </section>

                <section className="sec-two-col-grid">
                    <div>
                        <h3>Data governance</h3>
                        <p>Data governance relates to the policies and procedures that dictate how data is procured and used throughout its life cycle. From creation and collection to processing, distribution, storage and deletion. Notion’s commitment to data governance is key to keeping our users data secure, private, accurate, and accessible.</p>
                    </div>
                    <div>
                        <h3>Policies</h3>
                        <p>At Notion we want to be as transparent as possible with our customers about how we collect, process, store, and use their personal data. In order to achieve this Notion maintains comprehensive and detailed policies regarding how we handle your personal information. These policies describe in detail how our users can exercise their rights with regard to their data.</p>
                    </div>
                </section>

                <section className="sec-full-width">
                    <h3>GDPR</h3>
                    <p>The General Data Protection Regulation (GDPR) is a comprehensive data protection law that governs the collection of and use of personal data of EU residents, and that allows data subjects to exercise control over their data. As the GDPR is widely considered to be the most stringent global privacy standard, we have mapped our privacy program to the GDPR and other global privacy regulations.</p>
                </section>

                <hr className="sec-divider" />

                {/* Compliance Section */}
                <section className="sec-section-grid">
                    <div className="sec-content-col">
                        <h2>Compliance</h2>
                        <p>Notion maintains a comprehensive security and privacy program to provide advanced security features in our Enterprise plan that are designed to protect your data in accordance with various regulatory and industry standards. Notion has been attested by independent third-party auditors. If you'd like a copy of the compliance reports, please reach out to <a href="mailto:team@makenotion.com">team@makenotion.com</a> for our Trust portal.</p>
                    </div>
                    <div className="sec-illustration-col">
                        <div className="sec-illustration-placeholder">
                            <FileCheck size={120} strokeWidth={1} />
                        </div>
                    </div>
                </section>

                {/* Certifications Grid */}
                <div className="sec-cert-grid">
                    <div className="sec-cert-card">
                        <div className="cert-logo soc2">
                            {/* Placeholder for SOC2 Logo - using text/css shape */}
                            <div className="logo-circle blue">AICPA<br />SOC</div>
                        </div>
                        <h3>SOC 2 Type 2</h3>
                        <p>The SOC 2 Type 2 is an audit report performed by an independent third-party certified by the American Institute of Certified Public Accountants (AICPA) to evaluate a service organization’s controls related to the Trust Services Criteria (TSC). The SOC 2 Type 2 report assesses the effectiveness of these controls over a period of time and is intended to provide assurance to customers and stakeholders that the organization has implemented adequate controls to protect their data.</p>
                    </div>
                    <div className="sec-cert-card">
                        <div className="cert-logo iso">
                            {/* Placeholder for ISO Logo */}
                            <div className="logo-circle purple"><Lock size={40} /></div>
                        </div>
                        <h3>ISO 27001, ISO 27701, ISO 27017, ISO 27018</h3>
                        <p>ISO is an international standard development organization, and Notion has achieved certifications for four ISO standards: ISO 27001, ISO 27701, ISO 27017, and ISO 27018. The standards outline requirements for establishing, implementing, and continuously improving Notion's Information Security Management System (ISMS) and Privacy Information Management System (PIMS).</p>
                    </div>
                    <div className="sec-cert-card">
                        <div className="cert-logo hipaa">
                            <div className="logo-circle plain-blue"><div style={{ fontSize: '40px' }}>⚕️</div></div>
                        </div>
                        <h3>HIPAA</h3>
                        <p>The Health Insurance Portability and Accountability Act (HIPAA) is a US federal law that was enacted in 1996 that requires the protection and confidential handling of protected health information (PHI) by covered entities such as healthcare providers, health plans, and healthcare clearinghouses, as well as their business associates. Provided businesses subject to HIPAA leverage the Notion Enterprise-grade security features described in our <a href="#">Help Center article here</a> and sign Notion's Business Associate Agreement they may process PHI within their Notion workspace.</p>
                    </div>
                    <div className="sec-cert-card">
                        <div className="cert-logo c5">
                            {/* Placeholder for C5 Logo */}
                            <div className="logo-cloud">C5</div>
                        </div>
                        <h3>BSI C5 (Cloud Computing Compliance Controls Catalogue)</h3>
                        <p>BSI C5 is a security standard developed by the German Federal Office for Information Security. It outlines baseline security controls for cloud service providers. C5 includes additional control requirements relating to data location, service provisioning, place of jurisdiction, existing certifications, information disclosure obligations, and a full-service description.</p>
                    </div>
                </div>

                <hr className="sec-divider" />

                {/* AI Governance */}
                <section className="sec-section-grid">
                    <div className="sec-content-col">
                        <h2>Artificial intelligence (AI) governance</h2>
                        <p>Notion leverages AI to improve the core product experience and provide real value to our users in their day-to-day work. We strive to do this in a way that’s trustworthy, reliable, and user-centric.</p>
                    </div>
                    <div className="sec-illustration-col">
                        <div className="sec-illustration-placeholder">
                            <Sparkles size={120} strokeWidth={1} />
                        </div>
                    </div>
                </section>

                <div className="sec-ai-grid">
                    <div>
                        <h3>Safe & secure:</h3>
                        <p>Notion takes a safety-first approach to artificial intelligence. Our AI features and partners undergo security and legal reviews prior to Notion utilizing their services. These security practices apply to our AI features and AI development process.</p>
                        <a href="#">Our security practices →</a>
                    </div>
                    <div>
                        <h3>Transparency:</h3>
                        <p>At Notion, we want to be transparent with our customers about our AI products. In order to achieve this Notion maintains a Help Center and Terms and Privacy page to outline how our AI products' functionality and privacy practices.</p>
                        <a href="#">Our terms & privacy policy →</a>
                    </div>
                    <div>
                        <h3>Empowering:</h3>
                        <p>We aim to create AI-enhanced experiences that aren't just interesting — but rather, genuinely useful in your day-to-day work. To achieve this, the development of our AI-powered features is grounded in extensive research to understand the needs of our users.</p>
                    </div>
                    <div>
                        <h3>Data governance:</h3>
                        <p>Your data is yours. Our AI Subprocessors are prohibited from using Customer Data to train models. The controls and permissions with respect to access and use of customer data will be respected.</p>
                    </div>
                </div>

                <hr className="sec-divider" />

                {/* Reliability */}
                <section className="sec-section-grid">
                    <div className="sec-content-col">
                        <h2>Reliability</h2>
                        <p>Notion is relied on from creatives to cooperations - as such, everyone deserves a platform they can count on. With robust uptime guarantees and multi-level redundancy, you can trust Notion will be there when you need it.</p>
                    </div>
                    <div className="sec-illustration-col">
                        <div className="sec-illustration-placeholder">
                            <Radio size={120} strokeWidth={1} />
                        </div>
                    </div>
                </section>

                <section className="sec-two-col-grid">
                    <div>
                        <h3>Enterprise-grade Infrastructure</h3>
                        <p>We partner with AWS and Cloudflare to build a world-class architecture and to ensure users that Notion is built for maximum business resilience.</p>
                    </div>
                    <div>
                        <h3>High availability & Failover</h3>
                        <p>Notion keeps your data safe by having multiple zones for redundancy, have a comprehensive backup program, and regularly testing our disaster recovery and business continuity program. Notion offers a guaranteed uptime of 99.9%, so users can trust that we’ll be there when you need us. For Notion’s service level terms, please refer <a href="#">here</a>.</p>
                    </div>
                </section>

                <section className="sec-full-width">
                    <h3>Service Status</h3>
                    <p>Notion makes it transparent and easy with a real-time view of Notion’s availability through the <a href="#">status page</a>.</p>
                </section>


                {/* Form Section */}
                <section className="sec-form-container">
                    <h2>Learn about our enterprise plan</h2>
                    <p>Interested in advanced security and control? Let us know your needs and we can help!</p>

                    <form className="sec-contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First name *</label>
                                <input type="text" placeholder="Ada" />
                            </div>
                            <div className="form-group">
                                <label>Last name *</label>
                                <input type="text" placeholder="Lovelace" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Work email *</label>
                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label>Job title *</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Company name *</label>
                                <input type="text" placeholder="Lovelace Inc." />
                            </div>
                            <div className="form-group">
                                <label>Company size *</label>
                                <select><option>Select...</option></select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Country or region *</label>
                                <select><option>Select...</option></select>
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <input type="text" placeholder="(123) 456-7891" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Reason for contact *</label>
                            <select><option>Select...</option></select>
                        </div>
                        <div className="form-group">
                            <label>Provide more details (optional)</label>
                            <textarea placeholder="How are you looking to use Notion?"></textarea>
                        </div>
                        <button type="button" className="btn-black">Contact sales</button>
                    </form>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default SecurityPage;

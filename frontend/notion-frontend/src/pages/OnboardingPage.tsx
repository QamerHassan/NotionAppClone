import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Building2, Home, School, Link, Plus, Sparkles, MessageSquare, Search, BookOpen, ShieldCheck } from 'lucide-react';
import notionLogo from '../assets/notion-logo.png';
import './OnboardingPage.css';

const OnboardingPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<'selection' | 'team' | 'plan' | 'download'>('selection');
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
        if (option === 'work') {
            setTimeout(() => setStep('team'), 300);
        } else {
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
    };

    const handleBack = () => {
        if (step === 'team') {
            setStep('selection');
            setSelected(null);
        } else if (step === 'plan') {
            setStep('team');
        } else if (step === 'download') {
            setStep('plan');
        } else {
            navigate('/login');
        }
    };

    const handleTeamContinue = () => {
        setStep('plan');
    };

    return (
        <div className="onboarding-page">
            <header className="onb-header">
                <button className="onb-back-btn" onClick={handleBack}>
                    <ChevronLeft size={16} />
                </button>
                <div className="onb-lang-selector">
                    <span>English (US)</span>
                    <ChevronDown size={14} />
                </div>
            </header>

            <main className="onb-container">
                {step === 'selection' && (
                    <div className="onb-content fade-in">
                        <h1>How do you want to use Notion?</h1>
                        <p className="onb-subtitle">This helps customize your experience</p>

                        <div className="onb-cards">
                            <button
                                className={`onb-card ${selected === 'work' ? 'selected' : ''}`}
                                onClick={() => handleSelect('work')}
                            >
                                <div className="onb-icon-container">
                                    <Building2 size={32} strokeWidth={1.5} />
                                </div>
                                <div className="onb-card-text">
                                    <h3>For work</h3>
                                    <p>Track projects, company goals, meeting notes</p>
                                </div>
                            </button>

                            <button
                                className={`onb-card ${selected === 'personal' ? 'selected' : ''}`}
                                onClick={() => handleSelect('personal')}
                            >
                                <div className="onb-icon-container">
                                    <Home size={32} strokeWidth={1.5} />
                                </div>
                                <div className="onb-card-text">
                                    <h3>For personal life</h3>
                                    <p>Write better, think more clearly, stay organized</p>
                                </div>
                            </button>

                            <button
                                className={`onb-card ${selected === 'school' ? 'selected' : ''}`}
                                onClick={() => handleSelect('school')}
                            >
                                <div className="onb-icon-container">
                                    <School size={32} strokeWidth={1.5} />
                                </div>
                                <div className="onb-card-text">
                                    <h3>For school</h3>
                                    <p>Keep notes, research, and tasks in one place</p>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'team' && (
                    <div className="onb-content fade-in" style={{ maxWidth: '500px' }}>
                        <h1>Start with your team</h1>
                        <p className="onb-subtitle" style={{ marginBottom: '32px' }}>Notion works best with your teammates</p>

                        <div className="onb-invite-section">
                            <label className="onb-label">Invite people</label>
                            <div className="onb-input-group">
                                <input type="email" className="onb-input" placeholder="Email" />
                                <input type="email" className="onb-input" placeholder="Email" />
                                <input type="email" className="onb-input" placeholder="Email" />
                            </div>

                            <button className="onb-text-btn">
                                <Plus size={16} /> Add more or bulk invite
                            </button>

                            <div className="onb-actions">
                                <button className="onb-btn-secondary">
                                    <Link size={16} /> Copy invite link
                                </button>
                                <button className="onb-btn-primary" onClick={handleTeamContinue}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 'plan' && (
                    <div className="onb-content fade-in" style={{ maxWidth: '900px' }}>
                        <h1>Choose your Plan</h1>
                        <p className="onb-subtitle" style={{ marginBottom: '40px' }}>Select the best Notion experience for your team</p>

                        <div className="onb-plan-grid">
                            <div className="onb-plan-card">
                                <h3>Free</h3>
                                <div className="plan-price">
                                    <span className="amount">$0</span>
                                    <span className="period">per member / month</span>
                                </div>
                                <button className="onb-plan-btn secondary" onClick={() => setStep('download')}>Continue</button>

                                <div className="plan-features">
                                    <div className="feature-item"><Building2 size={16} /> 1,000 blocks to collaborate</div>
                                    <div className="feature-item"><Sparkles size={16} /> Trial of Notion AI core</div>
                                    <div className="feature-item"><BookOpen size={16} /> Basic forms</div>
                                    <div className="feature-item"><Home size={16} /> Basic sites</div>
                                </div>
                            </div>

                            <div className="onb-plan-card featured">
                                <h3>Business</h3>
                                <div className="plan-price">
                                    <span className="amount strikethrough">$24</span>
                                    <span className="amount">$0</span>
                                    <span className="period">per member / month</span>
                                </div>
                                <button className="onb-plan-btn primary" onClick={() => setStep('download')}>Try for 30 days</button>

                                <div className="plan-features">
                                    <div className="feature-item"><Building2 size={16} /> Unlimited blocks for everyone</div>
                                    <div className="feature-item"><Sparkles size={16} /> Notion AI</div>
                                    <div className="feature-item"><ShieldCheck size={16} /> Secure & compliant collaboration</div>
                                    <div className="feature-item"><Search size={16} /> Enterprise Search</div>
                                    <div className="feature-item"><MessageSquare size={16} /> AI Meeting Notes</div>
                                    <div className="feature-item"><BookOpen size={16} /> Research Mode</div>
                                    <div className="feature-item" style={{ color: '#999' }}>... and more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 'download' && (
                    <div className="onb-content fade-in" style={{ maxWidth: '600px' }}>
                        <h1>Notion is 50% faster with the desktop app</h1>
                        <p className="onb-subtitle" style={{ marginBottom: '40px' }}>Plus access app-exclusive features</p>

                        <div className="onb-download-visual">
                            {/* Placeholder for the graphic */}
                            <div className="onb-app-icon-wrapper">
                                <img src={notionLogo} alt="Notion App" className="onb-app-icon" />
                            </div>
                        </div>

                        <div className="onb-features-list-center">
                            <div className="feature-item-center"><MessageSquare size={16} /> AI Meeting Notes</div>
                            <div className="feature-item-center"><Sparkles size={16} /> More reliable performance</div>
                            <div className="feature-item-center"><ShieldCheck size={16} /> Distraction free workflows</div>
                        </div>

                        <button className="onb-btn-primary large" onClick={() => navigate('/dashboard')}>
                            Install desktop app
                        </button>

                        <button className="onb-skip-link" onClick={() => navigate('/dashboard')}>
                            Skip
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default OnboardingPage;

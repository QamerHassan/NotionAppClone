import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSocialLogin = (provider: string) => {
        // Simulate social login
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (provider === 'Passkey' || provider === 'SSO') {
                // For Passkey/SSO we might typically redirect or show a specific modal
                alert(`${provider} login flow would start here.`);
                return;
            }
            // For OAuth providers
            const confirm = window.confirm(`This would redirect you to ${provider} OAuth. Simulate successful login?`);
            if (confirm) {
                localStorage.setItem('token', 'fake-jwt-token');
                localStorage.setItem('user', JSON.stringify({ email: 'user@example.com', name: 'Demo User' }));
                navigate('/onboarding');
            }
        }, 800);
    };

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        if (!showPassword) {
            // Simulate checking if email exists/SSO enabled
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setShowPassword(true);
            }, 600);
        } else {
            // Handle Password Login
            if (!password) {
                setError('Please enter your password.');
                return;
            }
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                // Simulate success
                localStorage.setItem('token', 'fake-jwt-token');
                localStorage.setItem('user', JSON.stringify({ email: email, name: email.split('@')[0] }));
                navigate('/onboarding');
            }, 1000);
        }
    };

    return (
        <div className="auth-page">
            <header className="auth-header">
                {/* Logo not shown in screenshot header? Actually screenshot crop cuts header. 
                    But standard Notion login has header. Keeping it minimal. */}
                {/* Notion usually has just the logo or nothing on login page, 
                     but previous implementation had it. Screenshot starts at "Your AI workspace". */}
                {/* I will keep the header but maybe simplified */}
            </header>

            <main className="auth-container">
                <div className="auth-content">
                    <h1>Your AI workspace.</h1>
                    <h2>Log in to your Notion account</h2>

                    <div className="social-btns">
                        <button className="social-btn google" onClick={() => handleSocialLogin('Google')}>
                            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" />
                            Continue with Google
                        </button>
                        <button className="social-btn" onClick={() => handleSocialLogin('Apple')}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
                            Continue with Apple
                        </button>
                        <button className="social-btn" onClick={() => handleSocialLogin('Microsoft')}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
                            Continue with Microsoft
                        </button>
                        <button className="social-btn" onClick={() => handleSocialLogin('Passkey')}>
                            <span className="btn-icon">👤</span>
                            Log in with passkey
                        </button>
                        <button className="social-btn" onClick={() => handleSocialLogin('SSO')}>
                            <span className="btn-icon">🏢</span>
                            Single sign-on (SSO)
                        </button>
                    </div>

                    <hr className="auth-separator" />

                    <form onSubmit={handleContinue} className="auth-form">
                        <div className="auth-input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={showPassword} // Disable email when showing password to mimic some flows or allow edit? Notion usually allows edit.
                            // Let's keep it editable but maybe focus password
                            />
                        </div>

                        {showPassword && (
                            <div className="auth-input-group fade-in">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="auth-input"
                                    placeholder="Enter your password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        )}

                        {error && <div className="auth-error">{error}</div>}

                        {!showPassword && (
                            <p className="auth-hint">
                                Use an organization email to easily collaborate with teammates
                            </p>
                        )}

                        <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Continue'}
                        </button>
                    </form>

                    <p className="auth-footer-text">
                        By continuing, you acknowledge that you understand and agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AuthPage;

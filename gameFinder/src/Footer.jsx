import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section about">
                <h3>About Gaming Log</h3>
                <p>Your ultimate solution for discovering free-to-play games across all platforms. Find your next adventure in our comprehensive gaming catalog.</p>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Browse Games</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section subscribe">
                <h3>Stay Updated</h3>
                <p>Subscribe to get updates on new games and features.</p>
                <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="email-input"
                />
                <button className="subscribe-btn">
                    Subscribe
                </button>
            </div>

            <div className="footer-section">
                <h3>Connect With Us</h3>
                <ul className="social-icons">
                    <li><img src="/x.svg" alt="X" className="social-icon" /></li>
                    <li><img src="/discord.svg" alt="Discord" className="social-icon" /></li>
                    <li><img src="/youtube.svg" alt="YouTube" className="social-icon" /></li>
                    <li><img src="/refinedgithub.svg" alt="GitHub" className="social-icon" /></li>
                </ul>
            </div>
            
            <hr className="footer-divider" />
            
            <div className="footer-bottom">
                <p>&copy; 2025 Gaming Log. All rights reserved.</p>
                <div className="footer-links-bottom">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
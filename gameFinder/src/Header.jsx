import './Header.css';

function Header({ onNavigate, currentPage }) {
    const handleNavigation = (page) => {
        if (onNavigate) {
            onNavigate(page)
        }
    }

    return (
        <header className="header">
            <div className="header-left">
                <h1>Game Finder</h1>
            </div>
            
            <h2 className="header-title">Bored? Find something to play for free!</h2>
            
            <nav className="header-nav">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} className={currentPage === 'home' ? 'active' : ''}>Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }} className={currentPage === 'about' ? 'active' : ''}>About</a>
            </nav>
        </header>
    )
}

export default Header;
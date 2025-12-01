import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Game from './Game.jsx'

const RAPIDAPI_KEY = 'e884d135bdmsh30a4fe3171795d4p1fe750jsn13f4920e4c40'
const RAPIDAPI_HOST = 'free-to-play-games-database.p.rapidapi.com'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [GameDB, setGameDB] = useState([])
  const [show, setShow] = useState(5)
  const [filter, setFilter] = useState('')
  const [selectedGame, setSelectedGame] = useState(null)
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname
    if (path === '/about') return 'about'
    if (path.startsWith('/game/')) return 'game'
    return 'home'
  })
  const [currentGameId, setCurrentGameId] = useState(() => {
    const path = window.location.pathname
    if (path.startsWith('/game/')) {
      return path.split('/game/')[1]
    }
    return null
  })

  useEffect(() => {
    // fetch game data into object, stores in local
    const saved = localStorage.getItem('gameDB')
    if (saved) {
      setGameDB(JSON.parse(saved))
    } else {
      fetch(`https://${RAPIDAPI_HOST}/api/games`, {
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Fetched games data:', data)
          setGameDB(data)
          localStorage.setItem('gameDB', JSON.stringify(data))
        })
        .catch(error => {
          console.error('Fetch error:', error)
          // Fallback to mock data if API fails
          const mockGames = [
            {id: 540, title: "Overwatch 2", thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg", short_description: "A hero-focused first-person team shooter.", game_url: "https://www.freetogame.com/overwatch-2", genre: "Shooter"},
            {id: 521, title: "Diablo Immortal", thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg", short_description: "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and Diablo III.", game_url: "https://www.freetogame.com/diablo-immortal", genre: "ARPG"},
            {id: 516, title: "PUBG: BATTLEGROUNDS", thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg", short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.", game_url: "https://www.freetogame.com/pubg", genre: "Shooter"},
            {id: 508, title: "Enlisted", thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg", short_description: "Get ready to command your own World War II military squad in Enlisted, a squad-based first person MMO shooter.", game_url: "https://www.freetogame.com/enlisted", genre: "Shooter"},
            {id: 475, title: "Genshin Impact", thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg", short_description: "Role-playing gacha game with anime-style characters and elemental magic combat system.", game_url: "https://www.freetogame.com/genshin-impact", genre: "MMORPG"},
            {id: 452, title: "Call of Duty: Warzone", thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg", short_description: "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.", game_url: "https://www.freetogame.com/call-of-duty-warzone", genre: "Shooter"},
            {id: 427, title: "Dota 2", thumbnail: "https://www.freetogame.com/g/427/thumbnail.jpg", short_description: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.", game_url: "https://www.freetogame.com/dota-2", genre: "MOBA"},
            {id: 365, title: "Lost Ark", thumbnail: "https://www.freetogame.com/g/365/thumbnail.jpg", short_description: "Smilegate's free-to-play multiplayer ARPG is full of demons, angels, and a lot of action.", game_url: "https://www.freetogame.com/lost-ark", genre: "ARPG"},
            {id: 345, title: "Forge of Empires", thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg", short_description: "A free to play 2D browser strategy game, become a leader and raise your city.", game_url: "https://www.freetogame.com/forge-of-empires", genre: "Strategy"},
            {id: 517, title: "Lost Light", thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg", short_description: "Realistic tactical extraction shooter for mobile devices and PC.", game_url: "https://www.freetogame.com/lost-light", genre: "Shooter"},
            {id: 110, title: "Crossfire", thumbnail: "https://www.freetogame.com/g/110/thumbnail.jpg", short_description: "A fast-paced military themed first-person shooter.", game_url: "https://www.freetogame.com/crossfire", genre: "Shooter"},
            {id: 523, title: "Fall Guys", thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg", short_description: "A free-to-play massively multiplayer party royale game.", game_url: "https://www.freetogame.com/fall-guys", genre: "Battle Royale"},
            {id: 1, title: "Dauntless", thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg", short_description: "A free-to-play co-op action RPG with gameplay similar to Monster Hunter.", game_url: "https://www.freetogame.com/dauntless", genre: "MMORPG"},
            {id: 5, title: "CrossFire", thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg", short_description: "A competitive tactical first-person shooter.", game_url: "https://www.freetogame.com/crossfire", genre: "Shooter"},
            {id: 9, title: "Splitgate", thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg", short_description: "A free-to-play multiplayer shooter that features player-controlled portals.", game_url: "https://www.freetogame.com/splitgate", genre: "Shooter"}
          ]
          setGameDB(mockGames)
          localStorage.setItem('gameDB', JSON.stringify(mockGames))
        })
    }
  }, [])

  // Game nav
  const handleLearnMore = (game) => {
    handleNavigation('game', game.id)
  }

  {/* getter and setter */}
  const handleNavigation = (page, gameId = null) => {
    setCurrentPage(page)
    setSelectedGame(null)
    setCurrentGameId(gameId)
    
    // Update browser URL
    if (page === 'about') {
      window.history.pushState({}, '', '/about')
    } else if (page === 'game' && gameId) {
      window.history.pushState({}, '', `/game/${gameId}`)
    } else {
      window.history.pushState({}, '', '/')
    }
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/*Clear cache button, and dark mode button*/}
      {/* <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'D' : 'N'}
      </button>
      <button onClick={() => {
        localStorage.removeItem('gameDB')
        setGameDB([])
        window.location.reload()
      }}>
        Clear Cache & Refresh
      </button> */}
      
      {/* Header start */}
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      {currentPage === 'home' && (
        <div className="homepageContent">
          <h1>Welcome to the homepage of Gaming Log!</h1>
          <div className="controls">
            {/* option window */}
            <div id="many" className="howMany">
              Show: 
              <select value={show} onChange={(e) => setShow(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            {/* Filter input */}
            <div className="howMany">
              Filter: 
              <input 
                type="text" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search games..."
              />
            </div>
          </div>
        </div>
      )}

      {currentPage === 'about' ? (
        <About />
      ) : currentPage === 'game' ? (
        <Game gameId={currentGameId} games={GameDB} />
      ) : selectedGame ? (
        <div className="game-detail">
          <button onClick={() => setSelectedGame(null)} className="back-button">Back to Games</button>
          <div className="aboutContainer">
            <div className="aboutCard">
              <h2>{selectedGame.title}</h2>
              <p className="aboutDescription">{selectedGame.short_description}</p>
                <img src={selectedGame.thumbnail} alt={selectedGame.title} className="game-icon" />
              <div className="aboutDetail">
                <ul className="gameList">
                  <li className="gameDetail">Status: Live</li>
                  <li className="gameDetail">Genre: {selectedGame.genre}</li>
                  <li className="gameDetail">Platform: PC/Web Browser</li>
                  <li className="gameDetail">Release: 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="gameContainer">
          <h2>Games ({GameDB.length})</h2>
          {GameDB.length === 0 ? (
            <p>Loading games...</p>
          ) : (
            <div className="gameBox">
              {GameDB
                .filter(game => 
                  game.title.toLowerCase().includes(filter.toLowerCase()) ||
                  game.genre.toLowerCase().includes(filter.toLowerCase())
                )
                .sort((a, b) => a.id - b.id)
                .slice(0, show)
                .map(game => (
                  <div key={game.id} className="gameCard">
                    <h3>{game.title}</h3>
                    <img src={game.thumbnail} alt={game.title} className="game-image" />
                    <p><strong>Genre:</strong> {game.genre}</p>
                    <p>{game.short_description}</p>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleLearnMore(game); }}>Learn More</a>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App

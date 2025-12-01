import './App.css'

function Game({ gameId, games }) {
  const game = games.find(g => g.id === parseInt(gameId))

  if (!game) {
    return (
      <div className="aboutSize">
        <h1>Game Not Found</h1>
        <p>The game with ID {gameId} could not be found.</p>
      </div>
    )
  }

  return (
    <div className="aboutSize">
      <h1>{game.title}</h1>
      <img src={game.thumbnail || game.thumb} alt={game.title} className="game-detail-image" />
      <p className="aboutDescription">{game.short_description || game.shortDesc}</p>
      <div className="aboutDetail">
        <ul className="gameList">
          <li className="gameDetail">ID: {game.id}</li>
          <li className="gameDetail">Genre: {game.genre}</li>
          <li className="gameDetail">Status: Live</li>
          <li className="gameDetail">Platform: PC/Web Browser</li>
        </ul>
      </div>
    </div>
  )
}

export default Game
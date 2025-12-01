import { useState, useEffect } from 'react'

function Fetcher() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return { games }
}

export default Fetcher
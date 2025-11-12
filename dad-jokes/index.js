url = "https://icanhazdadjoke.com";
// fetch dad jokes api

async function fetchJoke() {
    const jokeData = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const jokeObject = await jokeData.json();
    const jokeHolder = document.getElementById('jokeHolder');
    jokeHolder.innerHTML = `<p><b>Joke ID:</b> ${jokeObject.id}</p><p>${jokeObject.joke}</p>
    <img src="https://icanhazdadjoke.com/j/${jokeObject.id}.png">`;
}



//Joke Searcher
async function searchJokes() {
    const searchTerm = document.getElementById('search').value;
    const searchUrl = `https://icanhazdadjoke.com/search?term=${searchTerm}&limit=5`;
    
    const searchingFor = document.getElementById('searchingFor');
    
    //Appends search term
    searchingFor.innerHTML = `Searching for "${searchTerm}"`;
    
    //Joke fetcher
    const response = await fetch(searchUrl, {
        headers: {
            'Accept': 'application/json'
        }
    });
    
    const data = await response.json();
    const jokeHolder = document.getElementById('jokeHolder');
    
    if (data.results.length > 0) {
        jokeHolder.innerHTML = data.results.map(joke => 
            `<p><b>ID:</b> ${joke.id}</p>
            <p>${joke.joke}</p>
            <img src="https://icanhazdadjoke.com/j/${joke.id}.png"><hr>`
        ).join('');
    } else {
        jokeHolder.innerHTML = `<p>Term "${searchTerm}" does not yield any results</p>`;
    }
}



//adding event listeners
document.getElementById('Generate').addEventListener('click', fetchJoke);
document.getElementById('searchbutton').addEventListener('click', searchJokes);


/*
(async () => {
    const joke = await fetchJoke();
    console.log("Joke ID: " + joke.id);
    console.log("Joke: " + joke.joke);
})();
*/

// Display dad joke in


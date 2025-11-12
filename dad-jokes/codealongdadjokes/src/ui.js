const $jokeDescription = document.querySelector('[data-js="joke-ui"]');
const $jokeBtn = document.querySelector('[data-js="joke-btn"]');
const $searchForm = document.querySelector('[data-js="search-form"]');
const $searchFeedback = document.querySelector('[data-js="search-feedback"]');
const $searchBox = document.querySelector('[data-js="search-box"]')

function renderJokes(jokes = []) {
    console.log(jokes);
    
    const $listOfJokes = jokes.map(({joke, id}) => {
        if (id === -1) {
            return `<p>$[joke} Joke ID: ${id}</p>
            <img src="${apiConfig.ENDPOINTS.image}/${id}.png">`
        }
    })
    HTMLFormControlsCollection.log($listOfJokes);
}

export const UI = {
    renderJokes,
}
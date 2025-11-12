import {UI} from './ui.js';
import {jokeProvider, getJokesByTerm} from './api.js';

async function generateJoke() {
    const [joke, id] = await jokeProvider();

    UI.renderJokes([joke, id]);
}



init();

function init {
    generateJoke();
}



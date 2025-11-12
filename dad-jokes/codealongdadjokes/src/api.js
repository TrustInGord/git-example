const baseURL = "https://icanhazdadjoke.com";

const apiConfig = {
    baseURL,
    ENDPOINTS: {
        image: `${baseURL}/j`,
        search: `${baseURL}/search`
    },
}

console.log(apiConfig.ENDPOINTS);

const requestHeaders = {
    headers: {
        Accept: "application/json",
    },
}

async function getJokes() {
    try {
        const RESPONSE = await fetch(apiConfig.baseURL);
        const DATA = await RESPONSE.json();
        console.log(DATA);
        return await RESPONSE.json();
    }
    catch (error) {
        console.log(error);
    }
}

export function getJokesByTerm(){
    console.log('jokes by term');
}

export async function jokeProvider() {
    console.log('providing jokes');
    const jokes = await getJokes();

    const {joke, id} = await getJokes();

    console.log(jokes.id);
}
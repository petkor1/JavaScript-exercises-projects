const url = 'https://icanhazdadjokes.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    fetchDadJoke();
})

const fetchDadJoke = async () => {
    try {
        result.textContent = 'loading ...'
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json', 'User-Agent': 'learning app',
            }
        });
        if (!response.ok) {
            throw new Error('there was an error')
        }
        const data = await response.json();
        result.textContent = data.joke;
    } catch (error) {
        console.log(error);
        result.textContent = 'there was an error'

    }

}
fetchDadJoke();


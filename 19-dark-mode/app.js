const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles')

const articlesData = articles.map((article) => {
    const { title, date, length, snippet } = article

    const formatDate = moment(date).format('MMMM Do, YYYY')

    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} min</span>
    </div>
    <p>${snippet}</p>
</article>`
}).join('');

articlesContainer.innerHTML = articlesData;

toggleBtn.addEventListener('click', darkMode);

function darkMode() {
    document.documentElement.classList.toggle('dark-theme');
}
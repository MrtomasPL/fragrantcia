async function loadArticleData() {
    const response = await fetch('articles-data.json');
    const data = await response.json();
    return data.articles;
}

async function renderArticleDetails(articleId) {
    const articles = await loadArticleData();
    const article = articles.find(a => a.id === articleId);

    if (article) {
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-description').textContent = article.description;
    } else {
        document.getElementById('article-title').textContent = "Artykuł nie znaleziony";
        document.getElementById('article-description').textContent = "Przepraszamy, nie znaleziono żądanego artykułu.";
    }
}

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

if (articleId) {
    renderArticleDetails(articleId);
}

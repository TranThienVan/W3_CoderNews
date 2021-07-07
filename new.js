let url =
"https://newsapi.org/v2/top-headlines?country=us&apiKey=b5e906d4a18f46b8a16f90fdacdb71ce";

async function getArticles() {
    const response = await fetch(url);
    const json = await response.json();
    const { articles } = json
    // const x = json.articles[0].title

    console.log({ json });
    console.log(articles)
    // console.log(x)
    
    const articlesHTML = articles.map(renderArticle)
    document.getElementById("newsList").innerHTML = articlesHTML.join("");
}

getArticles()

function renderArticle(article) {
    return `
        <li class="mb-3 align-self-center article">
            ${article.title}
            <img src="${article.urlToImage}" alt="Snow" />
        
            <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
            <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
            <p><i class="fa fa-envelope"></i>${article.content}</p>
        </li>
    `;
}
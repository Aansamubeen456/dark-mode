const toggleBtn = document.querySelector(".btn");
const container = document.querySelector(".articles");

const elements = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format("MMMM Do, YYYY");

    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");

container.innerHTML = elements;
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

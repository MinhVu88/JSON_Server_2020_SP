const blogs = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async searchTerm => {
  // let uri = 'http://localhost:3000/posts';
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  if (searchTerm) uri += `&q=${searchTerm}`;

  const response = await fetch(uri);
  const posts = await response.json();

  console.log("\nindex.html | posts ->", posts);

  let html_template = "";

  // use query params to identify which post was clicked to access the details page
  // the query param is based on each post's id -> "/details.html?key=value"
  posts.forEach(post => {
    html_template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.content.slice(0, 200)}....</p>
                <a href="/details.html?id=${post.id}">Read More</a>
            </div>
        `;
  });

  blogs.innerHTML = html_template;
};

/*
- renderPosts() is wrapped within an arrow function to prevent the event object
  from being passed to it automatically when renderPosts is invoked

- The event object is not used in this case

- ('DOMContentLoaded', renderPosts) -> renderPosts automatically gets the event object
*/
window.addEventListener("DOMContentLoaded", () => renderPosts());

searchForm.addEventListener("submit", e => {
  e.preventDefault();

  const searchTerm = searchForm.term.value.trim();

  renderPosts(searchTerm);
});

const details = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const postId = new URLSearchParams(window.location.search).get("id");

console.log(
  "\ndetails.html | window.location.search ->",
  window.location.search
);

const renderDetails = async () => {
  let uri = `http://localhost:3000/posts/${postId}`;

  const response = await fetch(uri);
  const post = await response.json();

  console.log("\ndetails.html | post ->", post);

  const html_template = `
        <h1>${post.title}</h1>
        <p>${post.content}</p>
    `;

  details.innerHTML = html_template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());

deleteBtn.addEventListener("click", async () => {
  await fetch(`http://localhost:3000/posts/${postId}`, { method: "DELETE" });

  window.location.replace("/");
});

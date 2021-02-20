const form = document.querySelector("form");

const createPost = async e => {
  e.preventDefault();

  const newPost = {
    title: form.title.value,
    content: form.body.value,
    likes: 0
  };

  await fetch("http://localhost:3000/posts", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(newPost)
  });

  window.location.replace("/index.html");
};

// createPost() isn't wrapped within an arrow function as the function's supposed
// to take the event object automatically as its arg when it's invoked
form.addEventListener("submit", createPost);

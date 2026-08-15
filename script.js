const form = document.getElementById("blog-form");

const authorInput = document.getElementById("author");

const titleInput = document.getElementById("title");

const contentInput = document.getElementById("content");

const blogList = document.getElementById("blog-list");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newBlog = {
        author: authorInput.value,
        title: titleInput.value,
        content: contentInput.value
    };
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(newBlog);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

        blogCard.innerHTML = `
    <h2>${newBlog.title}</h2>
    <small>By ${newBlog.author}</small>
    <p>${newBlog.content}</p>
`;
    blogList.appendChild(blogCard);
      form.reset();
});
const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

savedBlogs.forEach(function (blog) {
    const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
        <h2>${blog.title}</h2>
        <small>By ${blog.author}</small>
        <p>${blog.content}</p>
    `;

    blogList.appendChild(blogCard);
});


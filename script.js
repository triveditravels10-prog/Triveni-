const form = document.getElementById("confessionForm");
const input = document.getElementById("confessionInput");
const list = document.getElementById("confessionList");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function displayPosts() {
    list.innerHTML = "";
    posts.forEach((post, index) => {
        list.innerHTML += `
        <div class="post">
            <p>${post.text}</p>
            <button onclick="likePost(${index})">❤️ ${post.likes}</button>
        </div>
        `;
    });
}

function likePost(index) {
    posts[index].likes++;
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    posts.push({text: input.value, likes: 0});
    localStorage.setItem("posts", JSON.stringify(posts));
    input.value = "";
    displayPosts();
});

displayPosts();

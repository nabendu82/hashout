//Fetch API async await
async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    console.log(posts)
    let output = '';
    posts.forEach(post => output += `<h3>${post.title}</h4><p>${post.body}</p>`)
    document.body.innerHTML = output;
}

fetchPosts()
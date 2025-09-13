const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            displayPost(json);
        })
};



const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    for(const post of posts){
        // console.log(post.title);
        const div = document.createElement('div');
        div.classList.add('border','p-3','m-3','rounded','bg-gray-200','shadow-lg');
        div.innerHTML = `
            <h2 class="text-2xl font-semibold">Post ID: ${post.id}</h2>
            <h3 class="text-xl font-bold">Title: ${post.title}</h3>
            <p class="text-base">Post: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
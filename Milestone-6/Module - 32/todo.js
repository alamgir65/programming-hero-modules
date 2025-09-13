const loadTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
            displayTodo(json);
        })
};



const displayTodo = (todos) => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    todos.forEach(todo => {
        // console.log(todo);
        const div = document.createElement('div');
        div.classList.add('border','p-3','m-3','rounded','bg-gray-200','shadow-lg','flex','items-center','gap-4');
        div.innerHTML = `
            <p>${!todo.completed ? `<i class="fa-regular fa-square-check"></i>` : `<i class="fa-solid fa-square-check"></i>`}</p>
            <h2 class="text-lg">Title: ${todo.title}</h2>
        `;

        todoContainer.appendChild(div);
    })
}

loadTodo();
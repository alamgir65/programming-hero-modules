function loadData(){
    console.log(1);
    console.log(2);
    console.log(3);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res)
        .then(data => console.log('Data got', data.length))
    
    console.log(4);
    console.log(5);
}
loadData();
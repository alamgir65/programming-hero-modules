const addObjToLS = () => {
    const obj = {name : 'Alamgir', ex : 'Fayeza akter', total : 3};
    const objStr = JSON.stringify(obj);
    console.log(obj, typeof obj);
    console.log(objStr, typeof objStr);
    localStorage.setItem('person' , objStr);
}


const readFromLS = () => {
    const json = localStorage.getItem('person');
    const data = JSON.parse(json);
    console.log(data, 'Type of data', typeof data);
}
const containers = document.getElementsByClassName('container');

for(const container of containers){
    container.classList.add('semester');
}


// Create child and apped a new element 
const newSub = document.createElement('li');
newSub.innerText = 'Data Structure and Algorithm';
const secondContainer = document.getElementById('second').childNodes[3];
secondContainer.appendChild(document.createElement('li')).innerText = 'Digital System Design';
secondContainer.appendChild(newSub);
console.log(secondContainer);


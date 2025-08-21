const allSub = document.getElementsByTagName('li');
// console.log(majorSub);

for(const sub of allSub){
    console.log(sub.innerHTML);
}

const majorSub = document.getElementsByClassName('major');
console.log(majorSub);
console.log(document.querySelectorAll('#major'));
console.log(document.querySelector('.major'));



for(const major of document.getElementsByClassName('major')){
    major.style.color = 'blue';
    // major.style.fontSize = '20px';
    // major.style.backgroundColor = 'yellow';
    major.style.fontWeight = 'bold';
}
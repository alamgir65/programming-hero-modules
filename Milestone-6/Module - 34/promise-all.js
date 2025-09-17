const getData1 = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log('Generated number 1: ',num);
    if(num > 1){
        resolve({num1 : num});
    }
    else{
        reject({Error : 'Error from 1'});
    }
});

const getData2 = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log('Generated number 2: ',num);
    if(num > 1){
        resolve({num2 : num});
    }
    else{
        reject({Error : 'Error from 2'});
    }
});

const getData3 = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log('Generated number 3: ',num);
    if(num > 1){
        resolve({num3 : num});
    }
    else{
        reject({Error : 'Error from 3'});
    }
});

Promise.all([getData1, getData2, getData3])
    .then(res => console.log(res))
    .catch(error => console.log(error));
const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log('Generated number : ',num);
    if(num > 5){
        resolve({num : num});
    }
    else{
        reject({Error : 'Value is not Valid'});
    }
});

getData
    .then(res => console.log('Promise Resolve ',res))
    .catch(error => console.log('Promise Reject', error));
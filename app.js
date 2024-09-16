const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user ={
    name:'kaizz',
    age:23

}

storeBtn.addEventListener('click', ()=>{
    localStorage.setItem('uid',userId);
    localStorage.setItem('user',JSON.stringify(user));
});

retrBtn.addEventListener('click', ()=>{
    const extractedId = localStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if(extractedId){
        console.log('extracted Id: '+extractedId);
        console.log(extractedUser)
    }else{
        console.log('Cannot find Id');
    }
});
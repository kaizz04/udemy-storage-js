const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', ()=>{
    const userId = 'u123';
    const user ={
        name:'kaizz',
        age:23
    };
    document.cookie = `uid=${userId}; max-age=360`;
    document.cookie =  `user=${JSON.stringify(user)}`;
  
});

retrBtn.addEventListener('click', ()=>{
    const cookieData =  document.cookie.split(';');
    const data = cookieData.map(i=>{
        return i.trim();
    });
    console.log(data[1].split('=')[1]); //user value not a proper way

});

// const userId = 'u123';
// const user ={
//     name:'kaizz',
//     age:23

// }

// storeBtn.addEventListener('click', ()=>{
//     sessionStorage.setItem('uid',userId);
//     localStorage.setItem('user',JSON.stringify(user));
// });

// retrBtn.addEventListener('click', ()=>{
//     const extractedId = sessionStorage.getItem('uid');
//     const extractedUser = JSON.parse(localStorage.getItem('user'));
//     if(extractedId){
//         console.log('extracted Id: '+extractedId);
//         console.log(extractedUser)
//     }else{
//         console.log('Cannot find Id');
//     }
// });


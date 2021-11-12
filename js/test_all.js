const btn_hidden = document.querySelector('.btn_hidden');
const menu = document.querySelector('.nav_hidden');

btn_hidden.addEventListener('click',()=>{
    menu.classList.toggle('active');
});
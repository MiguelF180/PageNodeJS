const menu=document.getElementById('menu');
const btn=document.getElementById('btn_menu')

btn.addEventListener('click',()=>{
    menu.classList.toggle('menuActivate')
    btn.classList.toggle('btnRotate')
})
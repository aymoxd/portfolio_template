const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");
const links = document.querySelectorAll("#menu a");


function openMenu(){
    menu.classList.remove('-translate-y-full');
    overlay.classList.remove('hidden');
}
function closeMenu(){
        menu.classList.add('-translate-y-full');
        overlay.classList.add('hidden');
}

openBtn.addEventListener('click', openMenu );
closeBtn.addEventListener('click', closeMenu );
overlay.addEventListener('click', closeMenu );
links.forEach((e)=>{
    e.addEventListener('click' , closeMenu);
});
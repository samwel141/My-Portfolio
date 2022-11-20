

const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");
const navList=document.querySelector(".nav--list");

menuBtn.addEventListener('click', () => {
    menuBtn.style.display="none";
    closeBtn.style.display="inline-block";
    navList.style.display="flex";
})

closeBtn.addEventListener('click', () => {
    menuBtn.style.display="inline-block";
    closeBtn.style.display="none";
    navList.style.display="none";
})
import homeTab from './home.js';
import aboutTab from './about.js';
import menuTab from './menu.js'

const homeTabBtn = document.querySelector("#home");
const aboutTabBtn = document.querySelector("#about");
const menuTabBtn = document.querySelector("#menu");


homeTabBtn.addEventListener("click", ()=>{
    homeTab();
});
aboutTabBtn.addEventListener("click", ()=>{
    aboutTab();
   
});
menuTabBtn.addEventListener("click", ()=>{
    menuTab();
});



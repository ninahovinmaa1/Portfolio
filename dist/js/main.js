//Element selectors, menu & hamburger
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger") 
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");


/*adds functionality to hamburger navigation when clicked. Open, close, add/remove classes.*/
//default value, showMenu is false
let showMenu = false;

//when menuBtn is clicked, invoke function toggleMenu
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    //if showMenu is false
    if(!showMenu) {     
        //add classes to selected elements    
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));

        //change showMenu to true
        showMenu = true;

    //if showMenu is true
    } else {
        //remove classes from selected elements
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));

        //change showMenu to false
        showMenu = false;
    }
}
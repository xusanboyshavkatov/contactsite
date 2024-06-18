let homeclass = document.querySelector(".home")
let aboutclass = document.querySelector(".about")
let kontaktclass = document.querySelector(".kontakt")

let homemenu = document.querySelector(".homemenu")
let usermenu = document.querySelector(".usermenu")
let worldmenu = document.querySelector(".worldmenu")

ishgatushur()
function ishgatushur() {
    setTimeout(() => {
        home() ;
    }, );
}


function home() {
    homeclass.classList.remove("display_none")
    aboutclass.classList.add("display_none")
    kontaktclass.classList.add("display_none")
    homemenu.classList.add("active_menu")
    usermenu.classList.remove("active_menu")
    worldmenu.classList.remove("active_menu")
    setTimeout(() => {
        user() ;
    }, 5000);
}
function user() {
    homeclass.classList.add("display_none")
    aboutclass.classList.remove("display_none")
    kontaktclass.classList.add("display_none")
    usermenu.classList.add("active_menu")
    homemenu.classList.remove("active_menu")
    worldmenu.classList.remove("active_menu")
    setTimeout(() => {
        kontakt() ;
    }, 5000);

}
function kontakt() {
    kontaktclass.classList.remove("display_none")
    homeclass.classList.add("display_none")
    aboutclass.classList.add("display_none")
    worldmenu.classList.add("active_menu")
    usermenu.classList.remove("active_menu")
    homemenu.classList.remove("active_menu")
    setTimeout(() => {
        home() ;
    }, 5000);
}
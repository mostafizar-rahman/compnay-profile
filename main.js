
const body = document.querySelector("body");

const modeToggle = document.querySelector(".drakLight-toggle")
const searchToggle = document.querySelector(".search-toggle")
const searchCloseBtn = document.querySelector(".search__close_btn")
const searchShowBtn = document.querySelector(".search__show_btn")
const searchField = document.querySelector(".navbar__search__field");

// console.log(searchShowBtn)
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// js code to toggle search box
let searchBtn = true
searchToggle.addEventListener("click", () => {
    searchField.classList.toggle("active__shearch__field");

    if (searchBtn === true) {
        searchCloseBtn.style.display = "block"
        searchShowBtn.style.display = "none"
        searchBtn = false
    } 
    else if(searchBtn === false){
        searchCloseBtn.style.display = "none"
        searchShowBtn.style.display = "block"
        searchBtn = true
    }

    
});


//   js code to toggle sidebar
const navbarMenu = document.querySelector(".navbar__menu")
const menuIcon = document.querySelector(".navbar__menu__icon")
const menuCloseIcon = document.querySelector(".navbar__close__icon")

menuIcon.addEventListener("click", () => {
    navbarMenu.classList.add("active");
});
menuCloseIcon.addEventListener("click", ()=>{
    navbarMenu.classList.remove("active");
})
// body.addEventListener("click", e => {
//     let clickedElm = e.target;
//     if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
//         nav.classList.remove("active");
//     }
// });



// init Isotope elements
var $box = $(".portfolio__items").isotope({
    itemSelector: ".portfolio__card"
  });
  // filter functions
  // bind filter button click
  $(".portfolio__tollbar").on("click", "li", function () {
    var filterValue = $(this).attr("data-type");
    $(".portfolio__tollbar__btn").removeClass("tollbar__active");
    $(this).addClass("tollbar__active");
    if (filterValue !== "*") {
      filterValue = '[data-type="' + filterValue + '"]';
    }
    console.log(filterValue);
    $box.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  
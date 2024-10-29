const navTogleIcon = document.querySelector(".nav-toggle-icon");
let isExpanded = false;
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    if(isExpanded){
        navTogleIcon.src = "images/icon-hamburger.svg";
        isExpanded = false;
    }else{
        navTogleIcon.src = "images/icon-close.svg";
        isExpanded = true;
    }
})
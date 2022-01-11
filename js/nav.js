const navList = document.querySelector(".navList");
const navToggle = document.querySelector(".navList__toggle");

navToggle.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");

    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("area-expanded", true)
    } 
    else {
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("area-expanded", false)
    }
});
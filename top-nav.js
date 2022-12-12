const navButton = document.querySelector(".nav-logo i")
const navLists = document.querySelector(".nav-lists")
const navListEl = document.querySelectorAll(".nav-list")

navButton.addEventListener("click", () => {
    navLists.classList.toggle("active")
    navButton.classList.toggle("active")

    navButton.classList.contains("active") ? navButton.classList.replace("fa-bars", "fa-times") : navButton.classList.replace("fa-times", "fa-bars");
})

navListEl.forEach((navList) => {
    navList.addEventListener("click", (e) => {
        let currentList = e.currentTarget
        !currentList.classList.contains("active") ? navListEl.forEach((List) => {
            List.classList.remove("active")
        }) : null;
        currentList.classList.toggle("active")
    })
})

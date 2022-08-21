const changeThemeBtn = document.querySelector("#change-theme")
//Toggle dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

//Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark")

    if (darkMode) {
        toggleDarkMode()
    }
}
loadTheme()

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode()

    //Save or remove dark Mode
    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }


})



document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    //if we are clicking on button and link, close or open 
    let currentDropdown 
    if (isDropdownButton && e.target.closest("[data-dropdown]") != null) {
        currentDropdown = e.target.closest("[data-dropdown]") 
        currentDropdown.classList.toggle('active');
    }

    //close other dropdowns 
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})
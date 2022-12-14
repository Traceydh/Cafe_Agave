//drop down bar 
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    //if we are clicking on button and link, close or open 
    let currentDropdown 
    let button = document.querySelector("[data-dropdown-button]");
    if (isDropdownButton && e.target.closest("[data-dropdown]") != null) {
        currentDropdown = e.target.closest("[data-dropdown]") 
        currentDropdown.classList.toggle('active');
        button.classList.toggle('active');
    }

    //close other dropdowns 
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
        button.classList.remove('active');
    })
})


//Menu 
const menus = document.querySelectorAll(".menu");
const mapImage = document.querySelector("map-image");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.toggle("fade-in");
            observer.unobserve(entry.target);
        } else {
            return;
        }
    })
}, {
    threshold: 0.5
})

menus.forEach(menu => {
    observer.observe(menu)
})

//smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');
const toggleMenu = document.querySelector('#toggle-menu')
const navbar = document.querySelector('#navbar')




toggleMenu.addEventListener('click', (e) => {
    navbar.classList.toggle('hidden')
   
})
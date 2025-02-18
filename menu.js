let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

//adiciona a classe menu
btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

// remove a classe menu
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

// remove a classe menu ao clicar no overlay
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})


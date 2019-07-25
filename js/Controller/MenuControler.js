function openDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu .5s ease-in'
    document.querySelector('.drawer').style.display = 'flex'
    document.querySelector('.drawer').style.animation = 'escurecer-div .5s'
    document.querySelector('body').style.overflowY = 'hidden'

}

function closeDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu .5s ease'
    document.querySelector('.drawer').style.animation = 'clarear-div .5s'
    document.querySelector('body').style.overflowY = 'auto'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
    }, 500)

}
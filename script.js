var myNavbar= document.getElementById('myNavbar')
var offcanvas= document.getElementById('offCanvas')
var resetClass= document.getElementById('resetClass')
const stickyTop = document.querySelector('.sticky-top')

function mulai() {
    myNavbar.style.minHeight = "100vh"
}
function reset(){
    myNavbar.removeAttribute('style')
    stickyTop.style.overFlow='hidden'
}

function disableScroll(){
    scrollTop = window.pageYOffset || documentElement.scrollTop
    scrollLeft = window.pageXOffset || documentElement.scrollKLeft

    window.onscroll= function(){
        window.scrolltoo(scrollTop, scrollLeft)
    }
}

disableScroll()
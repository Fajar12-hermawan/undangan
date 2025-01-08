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

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("kinfirmasi kehadiran berhasik dikirim!");
    })
  });
});



const rootElement = document.querySelector(':root')
const Music = document.querySelector('#music')
const musicIcon = document.querySelector('.music-icon')
const icon = document.querySelector('.music-icon i')

function disableScroll(){
  const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  let isPlay = false
  window.onscroll = function (){
    window.scrollTo(scrolltop, scrollLeft);
  }
  rootElement.style.scrollBehavior = 'auto'
  
}

function enableScroll(){
  window.onscroll = function () { }
  rootElement.style.scrollBehavior = 'smooth'
  playAudio();
  
}
function playAudio () {
  musicIcon.style.display = 'flex'
  Music.play()
  isPlay = true
}

musicIcon.onclick = function(){
if(isPlay === true){
  icon.classList.remove('bi-play-circle')
  icon.classList.add('bi-pause-circle')
  music.pause()
  
}else{
 icon.classList.add('bi-play-circle')
  icon.classList.remove('bi-pause-circle')
  music.play()
}
 isPlay = !isPlay
}

disableScroll()


const urlParams = new URLSearchParams(window.location.search)
const nama = urlParams.get('n')
const pronoun = urlParams.get('p')
const namaContainer = document.querySelector('.hero span h4')
console.log(nama)
namaContainer.innerText = (`${pronoun} ${nama}`);
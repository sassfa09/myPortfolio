//vedios on project
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign=document.querySelector( ".hover-sign");

//sidebae element
const sideBar=document.querySelector('.sidebar');
const menu=document.querySelector('.menu-icon');
const close=document.querySelector(".close-icon");

const videoList=[ video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})

//sidebae element
menu.addEventListener("click",function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})

close.addEventListener("click",function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})

// Typing animation using Typed.js
new Typed('#typed-text', {
    strings: ['Computer Science Student', 'Web Developer', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
});


  
  
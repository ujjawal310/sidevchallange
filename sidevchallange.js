let burger=document.querySelector(".burger")
let navbar=document.querySelector(".navbar")
let rightnav=document.querySelector(".right_nav")
let leftnav=document.querySelector(".left_nav")
let middlenav=document.querySelector(".middle_nav")

burger.addEventListener("click",()=>{
    rightnav.classList.toggle("v-class")
    leftnav.classList.toggle("v-class")
    middlenav.classList.toggle("v-class")
    navbar.classList.toggle("h-nav")
})
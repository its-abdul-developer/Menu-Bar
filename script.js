let tl = gsap.timeline();

tl.to("#full ",{
    right:0,
    duration: 0.3,
})

tl.from("#full h3", {
    x:150,
    opacity:0,
    duration:0.3,
    stagger: 0.3,
})
tl.from("#full i", {
    opacity:0,
})

tl.pause()

let menu = document.querySelector("#nav i")
let cross = document.querySelector("#full i")

menu.addEventListener("click", function(){
    tl.play()
})
cross.addEventListener("click", function(){
    tl.reverse()
})
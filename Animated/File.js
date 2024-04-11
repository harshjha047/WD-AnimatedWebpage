function navAnimation(){
    document.querySelector("nav").addEventListener("mouseenter",function(){
    var tl = gsap.timeline()
    gsap.to("#nav-bottom",{
        height:"20vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})
document.querySelector("nav").addEventListener("mouseleave",function(){
    var tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
        tl.to(".nav-part2 h5",{
        display:"noun",
        duration:0.1
    })
     tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })})
};navAnimation();

function page2Animation(){
    let rightelem = document.querySelectorAll(".right-elem");

rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
       }) 
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
           }) 
        })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-40,
            y:dets.y-elem.getBoundingClientRect().y-130
        })
    })
})

};
page2Animation();





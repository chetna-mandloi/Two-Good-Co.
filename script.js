// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// locomotive lge ga scrolldirger km nhi krgea isliye ye wali comment out krna hoga //
function LocomotiveScrollAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
LocomotiveScrollAnimation()

  function navbarAnimation(){
    gsap.to(".nav-part svg",{
        transform:"translateY(-100%)",
        ScrollTrigger:{
            trigger:".page1",
            scroller:".main",
            //  markers:true,
             start:"top 0",
             end:"top -4%",
             scrub:true
            
    
    
        }
    })
    
    gsap.to(".nav-part1 .links",{
        transform:"translateY(-100%)",
        ScrollTrigger:{
            trigger:".page1",
            scroller:".main",
             markers:true,
             start:"top 0",
             end:"top -4%",
             scrub:true
            
    
    
        }
    })
    
    
}
navbarAnimation()


function videoconAnimation(){
    


var videocon = document.querySelector(".video-container")
var playbtn= document.querySelector(".play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity: 1,
        scale: 1

    })
// playbtn.style.opacity = 1,
// playbtn.style.scale = 1
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity: 0,
        scale: 0
    })
})
videocon.addEventListener("mousemove",function(dets){
gsap.to(playbtn,{
    left:dets.x-50,
    top:dets.y-80
})
})
 
}
videoconAnimation() 

function loadinganimation(){
    gsap.from(".page1 h1",{
        y:30,
        opacity: 0,
        delay:0.5,
        durtions:0.9,
        stagger:0.3
    })

    gsap.from(".page1 .video-container",{
        opacity: 0,
        delay:1.3,
        scale:0.9,
        durtions:0.3,
        stagger:0.3
    })
    
}
loadinganimation()

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    // document.querySelector(".child1").addEventListener("mouseenter",function(){
    //     gsap.to(".cursor",{
    //         transform: 'translate(-50%,-50% scale(1))'
    
    //     })
    // })
    // document.querySelector(".child1").addEventListener("mouseleave",function(){
    //     gsap.to(".cursor",{
    //         transform: 'translate(-50%,-50% scale(0))'
    
    //     })
    // })
    
    
     document.querySelectorAll(".child") .forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
      gsap.to(".cursor",{
      transform:'translate(-50%,-50%) scale(1)'
        });
        });
        elem.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(0)",
              });
              });
     });
     
}
 cursorAnimation()

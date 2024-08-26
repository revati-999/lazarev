//locomotive high jacks scrolltrigger. so below code is used to make them work together
function locomotiveAnimation(){ 
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
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
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
//when clicked the nav-bottom div height hdould increase from 0 thats default to 21vh
function page1NavAnimation() {
    const nav = document.querySelector('nav');
    nav.addEventListener('mouseenter', function () {
        let time = gsap.timeline(); /* timeline makes code sybchronous.. loads one after other. so first hright gets 21vh n then elements load due to block prop**/
        time.to("#nav-bottom", {
            height: "23vh"
        })
        time.to(".navs h5", {
            display: "block"
        })
        time.to(".navs h5 span", {
            y: 0, /*elements are moved upwards after step 2 thats block property elements are displayed */
            // duration:0.3,
            stagger: {
                amount: 0.5 /*elements move up ,one after other n not at same time. means there is delat of 0.6 
            sec from start elem to cons.. 0.6 1.2 1.8,, */
            }
        })
    })

    nav.addEventListener('mouseleave', function () {
        let time = gsap.timeline(); /* timeline makes code sybchronous.. loads one after other. so first hright gets 21vh n then elements load due to block prop**/
        time.to(".navs h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        time.to("#nav-bottom h5", {
            display: "none",
            duration: 0.1
        })
        time.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })

}

function page2Animation() {
    const rightElems = document.querySelectorAll('.right-elem'); //returns nodeList which are similar to array n uses arr methods.
    rightElems.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            //    el.childNodes[3].style.opacity=1; //display img on mouseenter
            gsap.to(el.childNodes[3], {
                opacity: 1,
                scale: 1 //for bigger n smaller size effect  
            })
        })
        el.addEventListener("mouseleave", function () {
            // el.childNodes[3].style.opacity=0; //remove img 
            gsap.to(el.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        el.addEventListener("mousemove", function (dets) {
            //dets return mouse dimensions on screen
            //el returns div and getboundingClientRect method returns rect dimensions
            gsap.to(el.childNodes[3], {
                x: dets.x - el.getBoundingClientRect().x - 30, //x position of mouse - x posirion of rect
                y: dets.y - el.getBoundingClientRect().y - 90
            })
        })
    })
}

function page3VideoAnimation(){
    const page3 = document.querySelector('.page3-center');
    const vid = document.querySelector('#page-3 video');
    
    page3.addEventListener('click',function(){
        vid.play();
        gsap.to(vid,{
            transform:"scaleX(1 ) scaleY(1)",
            opacity:1,
            borderRadius:1
        })
    })
    vid.addEventListener('click',function(){
        vid.pause();
        gsap.to(vid,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
            
        })
    })
}

function page5Video(){
    const sec = document.querySelectorAll('.sec-right');
  
    sec.forEach(function(el){
        el.addEventListener('mouseenter',function(){
            // console.log(el.childNodes[3 ]);
            el.childNodes[3].style.opacity = 1;
            el.childNodes[3].play();
    })
    el.addEventListener('mouseleave',function(){
        // console.log(el.childNodes[3 ]);
        el.childNodes[3].style.opacity = 0;
        el.childNodes[3].load(); //load to restart cause pause method resumes same duration 
})
    });
  
}

function uiuxToggle(){
    const up_arr = document.querySelector(".uiux .arrow i");
    const uiux = document.querySelector(".uiux");
    uiux.addEventListener('click',()=>{
        up_arr.classList.toggle("ri-arrow-up-s-line");
        up_arr.classList.toggle('ri-arrow-down-s-line');
        // up_arr.classList.toggle('ri-arrow-up-s-line');
    })
}

function productToggle(){
    const down_arr = document.querySelector(".product .arrow i");
    const product = document.querySelector(".product");
    product.addEventListener('click',()=>{
        down_arr.classList.toggle("ri-arrow-down-s-line");
        down_arr.classList.toggle('ri-arrow-up-s-line');
        // up_arr.classList.toggle('ri-arrow-up-s-line');
    })
}

function page6Animation(){
    gsap.from('.btm7_parts h4',{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm7_parts", //target fr animations
            scroller:"#main", //enabling scrolling
            start:"top 80%" , //start from top 80%
            end:"top 10%",
            //  markers:true //enabling markers start n end 
            scrub:true  //to let animation work only on scroll
        }
    });
}



function loadingAnimation(){
    var tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.3,
        delay:0.2
    })
    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0.2) translateY(-10%) ",
        borderRadius:"100px",
        duration:1,
        ease:"expo.out"
    })
    tl.from("nav",{
        opacity:0
    })
    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
}



locomotiveAnimation();
page1NavAnimation();
page2Animation();
page3VideoAnimation();
page5Video();
uiuxToggle();
productToggle();
page6Animation();
loadingAnimation();
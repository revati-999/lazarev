//when clicked the nav-bottom div height hdould increase from 0 thats default to 21vh
function animation(){
const nav = document.querySelector('nav');
nav.addEventListener('mouseenter',function(){
    let time = gsap.timeline(); /* timeline makes code sybchronous.. loads one after other. so first hright gets 21vh n then elements load due to block prop**/
    time.to("#nav-bottom",{
        height:"23vh"
    })
    time.to(".navs h5",{
        display:"block"
    })
    time.to(".navs h5 span",{
        y:0, /*elements are moved upwards after step 2 thats block property elements are displayed */
        // duration:0.3,
        stagger:{
            amount:0.5 /*elements move up ,one after other n not at same time. means there is delat of 0.6 
            sec from start elem to cons.. 0.6 1.2 1.8,, */
        }
    })
})

nav.addEventListener('mouseleave',function(){
    let time = gsap.timeline(); /* timeline makes code sybchronous.. loads one after other. so first hright gets 21vh n then elements load due to block prop**/
    time.to(".navs h5 span",{
        y:25, 
        stagger:{
            amount:0.2 
        }
    })
    time.to("#nav-bottom h5",{
        display:"none",
        duration:0.1
    })
    time.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})

}
animation();

 

/////////////Animation

function startAd() {
//    
    
    /*========================  CLICKTAG  =============================*/
    
    // var clickTag = "http://www.merrilledge.com/";
    // var adBtn = document.getElementById("ad");

    // function OPENW(){
    //     window.open(clickTag);
    // }

    // adBtn.addEventListener("click", OPENW, false);
    /*================================================================*/
    var screen = document.getElementById('screen');
    
    //Set positions and attributes
     TweenLite.set(xfinity_logo, {opacity:1});
     TweenLite.set([slide1Copy,copy1,copy2,copy3,copy4,bar], {opacity:1});
     TweenLite.set([copy5,copy6,copy7,slide1CopySmall, cta], {opacity:0});
     TweenLite.set(disclaimer, {opacity:0});
     TweenLite.set(cta, {opacity:0});
     

    
    var adContainer = document.getElementById("container");
    var ctaShimmer = document.getElementById("ctaShimmer");
    
    TweenMax.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();
    
    function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }
    
    function ctaOver(){
        TweenLite.to(shine, .45, {left:200, ease:Sine.easeIn});
       
    }
    
    function ctaOut(){
        TweenLite.to(shine, 0, {left:-67, ease:Sine.easeIn});
    }
}



function init(){
    setTimeout (function(){slide1()}, 100);
};


function slide1(){
   
   TweenLite.to(copy5, .2, {delay:1.3, opacity:1, ease:Back.easeNone, onComplete:slide2});
   


    
}

function slide2(){
   TweenLite.to(copy5, .5, {delay:0, top:11, opacity:1, ease:Back.easeNone});
   TweenLite.to(slide1Copy, .5, {delay:0, left:-64, ease:Back.easeNone});
   TweenLite.to(bar, .5, {delay:0, left:360, top:10, ease:Back.easeNone});
   TweenLite.to(copy2, .5, {delay:0,  left:255, ease:Back.easeNone});
   TweenLite.to(copy3, .5, {delay:0, scale:.61, left:272,top:43, ease:Back.easeNone});
   

  TweenLite.to(copy3, 0, {delay:.5, opacity:0, ease:Back.easeNone});
  TweenLite.to(slide1CopySmall, 0, {delay:.5, opacity:1, ease:Back.easeNone, onComplete:slide3});
    
}

function slide3(){
    
    TweenLite.to([slide1CopySmall, bar, copy5, slide1Copy ], .4, {delay:3, opacity:0, ease:Back.easeNone});
    TweenLite.to([copy6, disclaimer], .4, {delay:3.5, opacity:1, ease:Back.easeNone});
    TweenLite.to(devices, .2, {delay:3.7, top:9, ease:Back.easeNone,  onComplete:slide4});
    
    
  
}

function slide4(){
    TweenLite.to([copy6, disclaimer ], .4, {delay:2, opacity:0, ease:Back.easeNone});
    TweenLite.to(devices, .4, {delay:2, top:-100, ease:Expo.easeInOut});

    TweenLite.to(copy7, .4, {delay:2.6, opacity:1, ease:Back.easeNone});
    TweenLite.to(arrow, .4, {delay:2.6, top:0,ease:Bounce.easeOut});
    TweenLite.to(grey_flag_container, .4, {delay:3, width:209, ease:Back.easeNone});
    TweenLite.to(cta, .4, {delay:3, opacity:1, ease:Back.easeNone});
    TweenLite.to(shine, .55, {delay:3.6,left:200, ease:Sine.easeIn});
    TweenLite.to(shine, 0, {delay:4.15, left:-67, ease:Sine.easeIn});
    
    
}

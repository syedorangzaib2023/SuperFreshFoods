let mobileNav = document.getElementById("mobile-nav-links");

function openMenu(){
    mobileNav.classList.toggle("sticky");
}

//  Sticky NavBar
let stickyNav = document.getElementById("nav-inner");

function scrolldown(){
  if(window.scrollY >= 0.1 ){
   stickyNav.classList.add("fixed");
  }
  else{
   stickyNav.classList.remove("fixed");
  }
}

// Brands Slider Slick

window.onload=function(){
  $('.slider').slick({
  autoplay:true,
  autoplaySpeed:1500,
  arrows:false,
  //prevArrow:'<button type="button" class="slick-prev"></button>',
  //nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:1,
  slidesToScroll:1
  });
};


// Brand Sneak Menu Slider Slick
$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '0px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
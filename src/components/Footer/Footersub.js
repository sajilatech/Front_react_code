import $ from 'jquery';
const Footersub = ()=>{
 
  $(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 0,

      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
  responsiveClass:true,
responsive:{
0:{
  items:1,
  nav:false,
dots:true
},
600:{
  items:2,
  nav:false,
dots:true
},
1000:{
  items:4,
  nav:true,
dots:false
}
}
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay')
    })
  })
 }

 
  




export default Footersub
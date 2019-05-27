


  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
$('#carouselExample').on('slide.bs.carousel', function (e) {
 

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});


$('#carouselExample').carousel({ 
              interval: 2000
      });


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
  $('a.thumb').click(function(event){
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
      var title = $(this).attr("title");
      $('.modal-title').html(title);        
      content.html($(this).html());
      $(".modal-profile").modal({show:true});
  });

});
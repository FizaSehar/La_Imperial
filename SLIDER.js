
	<script type="text/javascript">


$(function(){

var currentSlide=1;
var $slider=$('#slider');
var $slideContainer=$slider.find('.slides');
var $slides=$slideContainer.find('.slide');
setInterval(function() {
  $('.slides').animate({marginLeft:"-=1200"},1000,function(){
    currentSlide++;
    if(currentSlide===$slides.length){
      currentSlide=1;
      $slideContainer.css('marginLeft',0);
    }

    });
    
}, 2000);


});

	</script>
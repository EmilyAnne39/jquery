//$('#circle').click(function() {
// alert('Clicked!'); 
//});

$( "button" ).click(function() {
  $( "div.square" ).delay( 5000 ).hide( 400 );
})

//$( "button" ).click(function() {
  //$( "div.oval" ).show( "slow", function() {
    // Animation complete.
 // });
//});
$(document).ready(function(){  //hmm...why do we need the (document) here but not above for this to work?
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
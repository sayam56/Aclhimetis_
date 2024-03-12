//Changes the price when the switch button is clicked.
$(".slider").click(function() {
  $(".price").toggle();
});

//arrow left = 37
//arrow right = 39

document.addEventListener("keydown", function(event){
  changePrice(event.key)
});

function changePrice(key){
  switch(key){
    case 'a':
    $(".price").toggle();
    break;

    case 's':
    $(".price").toggle();
    break;
  }
}

$(".sideblack").hide();
 $(".sidewhite").animate({ left:0 }, 500);

//npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch

document.querySelector(".open").addEventListener("click", function (e) {
  e.preventDefault();
//   $(".sideblack").animate({ width: '236px' }, 500);
$('.sideblack').show(500);
  $(".sidewhite").animate({ left:236 }, 500);
  $('.open').css('display' , 'none')
  $('.close').css('display' , 'block')
});
document.querySelector(".close").addEventListener("click", function (e) {
  e.preventDefault();
//   $(".sideblack").animate({ width: '236px' }, 500);
$(".sidewhite").animate({ left:0 }, 500);
$(".sideblack").hide();
  $('.open').css('display' , 'block')
  $('.close').css('display' , 'none')
});


$(".sideblack").hide();
$(".sidewhite").animate({ left: 0 }, 500);


document.querySelector(".open").addEventListener("click", function (e) {
  e.preventDefault();
  //   $(".sideblack").animate({ width: '236px' }, 500);
  $(".sideblack").show(500);
  $(".sidewhite").animate({ left: 236 }, 500);
  $(".open").css("display", "none");
  $(".close").css("display", "block");
});
document.querySelector(".close").addEventListener("click", function (e) {
  e.preventDefault();
  //   $(".sideblack").animate({ width: '236px' }, 500);
  $(".sidewhite").animate({ left: 0 }, 500);
  $(".sideblack").hide();
  $(".open").css("display", "block");
  $(".close").css("display", "none");
});

let allcategry=[];
async function show(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let final=await response.json();
    allcategry=final.meals;
    console.log(allcategry);
    display();
}
function display(){
    let x='';
    for (let i = 0; i < allcategry.length; i++) {
        x+=` <a class="relative cursor-pointer text-center mt-6 px-3 col-span-3">
        <i class="fa-solid fa-house-laptop fa-4x rounded-2xl w-full text-white"></i>
        <h3 class="pb-2 text-[28px] font-medium text-white text-center">
          ${allcategry[i].strArea}
        </h3>
      </a>` 
    }
    document.getElementById("cat").innerHTML=x;
}
show();
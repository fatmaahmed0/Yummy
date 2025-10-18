//npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch
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




let allmeals = [];
async function showmeals() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let final = await response.json();
  allmeals = final.meals;
  console.log(allmeals);
  display();
}

function display() {
  let x = "";
  for (let i = 0; i < allmeals.length; i++) {
    x += `<a href="./details.html " class="relative col-span-3 mt-6 px-3 rounded-lg cursor-pointer group overflow-hidden">
            <img src="${allmeals[i].strMealThumb}" class="rounded-lg w-full " alt="">
            <div
              class="light absolute top-[150%] bottom-0 right-0 left-0  bg-[#f9f6f6ca] flex items-center p-2 text-black  group-hover:rounded-lg mx-3 transition-all duration-[800ms] group-hover:top-0">
              <h3 class="pb-2  text-[28px] font-medium">${allmeals[i].strMeal}</h3>
            </div>
          </a>`;
  }
  document.getElementById("smeal").innerHTML= x;
}

let allcategry = [];
async function show_cat() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let final = await response.json();
  allcategry = final.categories;
  console.log(allcategry);
  display_cat();
}
function display_cat(e) {
  let x = " ";
  console.log(allcategry[0].strCategoryDescription.split(" ", 20).join(" "));
  for (let i = 0; i < allcategry.length; i++) {
    x += `  <a  id="meal" class=" relative col-span-3 mt-6 px-3 rounded-lg cursor-pointer  group overflow-hidden">
    <img src="${
      allcategry[i].strCategoryThumb
    }" class="rounded-2xl w-full" alt="" />
    <div class="absolute top-[150%] bottom-0 right-0 left-0 transition-all duration-[800ms] rounded-lg group-hover:top-0">
    <div class="light  bg-[#f9f6f6ca] flex flex-col items-center justify-center p-2 text-black overflow-hidden  group-hover:rounded-lg mx-3 " >
    <h3 class="pb-2 text-[28px] font-medium text-center ">${
      allcategry[i].strCategory
    }</h3>
    <p class="pb-4 text-center">
    ${allcategry[i].strCategoryDescription.split(" ", 20).join(" ")}
    </p>
    </div>
    </div>
    </a>`;
  }
  document.getElementById("cat").innerHTML= x;
  let details_meal=document.querySelectorAll("#meal");
  for (let i = 0; i < details_meal.length; i++) {
    details_meal[i].addEventListener('click',()=>{
      let x=allcategry[i].strCategory;
      console.log(x);
      category_details(x);
      //  window.location.href = './index.html';
  
    })
  }
}
let cat_details=[];
async function category_details(x){
  let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
  let final=await response.json();
  allmeals=final.meals;
  console.log("llll");
  
  console.log(allmeals);

  display();
}
showmeals();
show_cat();

let allsearch=[];
let name_search=document.getElementById("name_search");
name_search.addEventListener('keyup',()=>{
  let term= name_search.value;
  console.log(term);
  show_name_search(term);
  
})
async function show_name_search(data){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`);
    let final=await response.json();
    allsearch=final.meals;
if(allsearch!=null){
    display_name_search();
  }
}
function display_name_search(){
  x='';
  for (let i = 0; i < allsearch.length; i++) {
  x+=`<a href="./details.html " class="relative col-span-3 mt-6 px-3 rounded-lg cursor-pointer group overflow-hidden">
            <img src="${allsearch[i].strMealThumb}" class="rounded-lg w-full " alt="">
            <div
              class="light absolute top-[150%] bottom-0 right-0 left-0  bg-[#f9f6f6ca] flex items-center p-2 text-black  group-hover:rounded-lg mx-3 transition-all duration-[800ms] group-hover:top-0">
              <h3 class="pb-2  text-[28px] font-medium">${allsearch[i].strMeal}</h3>
            </div>
          </a>`
  }
  document.getElementById("search").innerHTML=x;
} 

let first_c=[];
let first_search=document.getElementById("first_search");
first_search.addEventListener('keyup',()=>{
  let fterm= first_search.value;
  show_first_search(fterm);
  console.log(fterm);
})
async function show_first_search(fdata){
  let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fdata}`);
  let final=await response.json();
  first_c=final.meals;
  if(first_c!=null){
  display_first_search();}
}
function display_first_search(){
  x='';
  for (let i = 0; i < first_c.length; i++) {
  x+=`<a href="./details.html " class="relative col-span-3 mt-6 px-3 rounded-lg cursor-pointer group overflow-hidden">
            <img src="${first_c[i].strMealThumb}" class="rounded-lg w-full " alt="">
            <div
              class="light absolute top-[150%] bottom-0 right-0 left-0  bg-[#f9f6f6ca] flex items-center p-2 text-black  group-hover:rounded-lg mx-3 transition-all duration-[800ms] group-hover:top-0">
              <h3 class="pb-2  text-[28px] font-medium">${first_c[i].strMeal}</h3>
            </div>
          </a>`
  }
  document.getElementById("search").innerHTML=x;
} 




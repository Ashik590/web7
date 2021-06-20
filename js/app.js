const dot = document.querySelector("#dot");
const nav3 = document.querySelector("#nav3");




dot.addEventListener("click", function () {
    console.log("ok")

    if (!nav3.classList.contains("yoyoAf")) {
        nav3.classList.add("yoyoAf")
        nav3.classList.remove("yoyoend")
    } else {
        nav3.classList.remove("yoyoAf");
        nav3.classList.add("yoyoend")
    }
})


// scroll fixed navbar

const nav = document.getElementById("nav2");
const navLis = document.querySelectorAll("#nav2 li");
const navbtn = document.querySelector("#nav2 button");
const navI = document.querySelector(".extra i");

window.addEventListener("scroll", function(){
    let xAhis = scrollY;
    console.log(xAhis);
    if(xAhis>=100){
      
        // nav.style.display="flex"
        nav.classList.add("navFlex");
        nav.classList.remove("navNone");
        console.log("OK");
        for(const navLi of navLis){
            navLi.classList.add("fixedNavLi")
        }
        navbtn.classList.add("fixedNavBtn");
        navI.classList.add("fixedNavI")
    }else{
        // nav.style.display="none"
        nav.classList.remove("navFlex");
        nav.classList.add("navNone");
       
        for(const navLi of navLis){
            navLi.classList.remove("fixedNavLi")
        }
        navbtn.classList.remove("fixedNavBtn")
        navI.classList.remove("fixedNavI")
    }
    
    
})


// counter up section

const count1 = document.querySelectorAll(".things h1")[0];
const count2 = document.querySelectorAll(".things h1")[1];
const count3 = document.querySelectorAll(".things h1")[2];
const count4 = document.querySelectorAll(".things h1")[3];
let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;

window.addEventListener("scroll", function(){
  let rect = count1.getBoundingClientRect().top;
  let height = innerHeight/1.05;

  if(rect<height){
    setInterval(() => {
      
      a1 = a1+2;
      if(a1<=844){
        console.log(a1);
       

      }else{
        a1= 844;
      }
      count1.innerHTML=a1;
    }, 7);
  }


  if(rect<height){
    setInterval(() => {
      
      a2 = a2+2;
      if(a2<=1240){
      }else{
        a2= 1240;
      }
      count2.innerHTML=a2;
    }, 3);
  }

  if(rect<height){
    setInterval(() => {
      
      a3 = a3+35;
      if(a3<=15419){
      }else{
        a3= 15419;
      }
      count3.innerHTML=a3;
    }, 2);
  }
  if(rect<height){
    setInterval(() => {
      
      a4 = a4+1;
      if(a4<=67){
      }else{
        a4= 67;
      }
      count4.innerHTML=a4;
    }, 30);
  }

})



        // alert("Let’s Try Again")
let  knife = () => {
let a = document.getElementById("knife");
let b = document.querySelector(".knifeee");
a.addEventListener("mouseenter",function(){
b.style.transform='rotate(-60deg)'})
a.addEventListener("mouseleave",function(){
b.style.transform='rotate(0deg)'})
}
knife()
let  heart = () => {
let a = document.getElementById("heart");
let b = document.querySelector(".heart");
a.addEventListener("mouseenter",function(){
b.style.transform='rotate(90deg)'})
a.addEventListener("mouseleave",function(){
b.style.transform='rotate(0deg)'})
}
heart()
    
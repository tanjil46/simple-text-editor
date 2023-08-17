
const inputValue=document.getElementById("value-text");


document.getElementById("font-bold-btn").addEventListener("click",function(){

    inputValue.style.fontWeight="bold";



});





document.getElementById("font-italic-btn").addEventListener("click",function(){

    inputValue.style.fontFamily="italic";



});




document.getElementById("font-underline-btn").addEventListener("click",function(){

    inputValue.style.textDecoration="underline";



});






document.getElementById("text-left-btn").addEventListener("click",function(){

    inputValue.style.textAlign="left";



});





document.getElementById("text-right-btn").addEventListener("click",function(){

    inputValue.style.textAlign="right";



});





document.getElementById("text-center-btn").addEventListener("click",function(){

    inputValue.style.textAlign="center";



});





document.getElementById("text-justify-btn").addEventListener("click",function(){

    inputValue.style.textAlign="justify";



});





document.getElementById("text-xl-btn").addEventListener("click",function(){

    inputValue.style.fontSize="20px";



});




document.getElementById("text-2xl-btn").addEventListener("click",function(){

    inputValue.style.fontSize="24px";



});




document.getElementById("text-3xl-btn").addEventListener("click",function(){

    inputValue.style.fontSize="30px";



});


const inputcolor= document.getElementById("favcolor");
 
   




      inputcolor.addEventListener("click",function(){
    const colorValue=inputcolor.value

    inputValue.style.color=colorValue;

});







document.getElementById("clear-btn").addEventListener("click",function(){

    inputValue.value="";



});

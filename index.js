const input = document.getElementById("demo");
input.addEventListener("input",(event)=>{
   const result =document.getElementById("result");
   result.innerText= event.target.value;
});
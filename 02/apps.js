//nada
var num1=document.getElementById("num1");

num1.oninput=()=>{
    document.getElementById("vnum1").textContent=num1.value;
}
let m = document.getElementById("m");
let p1= document.getElementById("p1");
let p2 = document.getElementById("p2");
let t = document.getElementById("t");
 p1. onclick =()=>{
   m.innerHTML=t.value;
   localStorage.setItem("rt",t.value);
};
p2.onclick=()=>{
   m.innerHTML="";

};
onload=()=>{
    t.value=localStorage.getItem("rt");
    m.innerHTML=t.value;
 };
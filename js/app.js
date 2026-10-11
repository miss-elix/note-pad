const createbtn=document.querySelector(".create-button");
const modalscreen=document.querySelector(".modal-screen");
const editor=document.querySelector("#editor");
const closemodal=document.querySelector(".close");
const createmodal=document.querySelector(".continue");
const xmodal=document.querySelector(".close-x-btn");
const container=document.querySelector(".container");
const colorboxs=document.querySelectorAll(".color-box");
const inputsearch=document.querySelector(".input-search");
const btnsearch=document.querySelector(".btn-search");
let article=document.createElement("article");
article.classList.add("article1");
let notetitle=document.createElement("p");
notetitle.classList.add("title");


function openmodal(){
    modalscreen.classList.remove("hidden");
}
function closemodal1(){
     modalscreen.classList.add("hidden");
}
function closemodalkey(event){
    if(event.key=="Escape"){
        closemodal1();
    }
}
 let backgroundcolornote=" ";
colorboxs.forEach(function(colorbox){
colorbox.addEventListener("click" , function(event){
 event.target.classList.add("selected");
backgroundcolornote=event.target.dataset.color;
})
})
function createnote(){
let article=document.createElement("article");
article.classList.add("article1");
let notetitle=document.createElement("p");
notetitle.classList.add("title");
let notebtn=document.createElement("div");
notebtn.classList.add("icon");
let trashicon=document.createElement("i");
trashicon.className="fa-solid fa-trash delete";
notebtn.append(trashicon);
notetitle.innerHTML=editor.value;
article.append(notetitle);
article.append(notebtn);
article.style.backgroundColor=backgroundcolornote;
container.append(article);
colorboxs.forEach(function(colorbox){
colorbox.classList.remove("selected");
})
 modalscreen.classList.add("hidden"); 
 function removenote(){
    
    article.remove();
 }

 editor.value=" ";
 notebtn.addEventListener("click" , removenote)
} 
  
function searchinarticle(){
    let usersearch=inputsearch.value;
    let articles=document.querySelectorAll("article"); 
   articles.forEach(function(article){
    const ptitle=article.querySelector(".title");
    if(ptitle.innerHTML.includes(usersearch)){
        article.style.display="flex";
    }
    else{
       article.style.display="none";
    }
   })
}

createbtn.addEventListener("click" ,openmodal);
closemodal.addEventListener("click" ,closemodal1);
xmodal.addEventListener("click" ,closemodal1);
document.body.addEventListener("keydown" , closemodalkey);
createmodal.addEventListener("click" ,createnote );
btnsearch.addEventListener("click",searchinarticle);
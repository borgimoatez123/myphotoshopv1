let saturate =document.getElementById("saturate");
let contrast =document.getElementById("contrast");
let sepia =document.getElementById("sepia");
let  brightness=document.getElementById("brightness");
let grayscale =document.getElementById("grayscale");
let blur=document.getElementById("blur");

let upload=document.getElementById("upload");
let download=document.getElementById("download");
let img=document.getElementById("img");
let reste=document.querySelector("span");
let imgbox=document.querySelector(".img-box");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');
function restevaluer(){
    img.style.filter='none';
    // les par defaut 
    saturate.value='100';
    contrast.value='100';
    sepia.value='100';
    brightness.value='100';

    grayscale.value='0';
    blur.value='10';


}
window.onload=function(){
    restevaluer();
    download.style.display='none';
    reste.style.display='none';
    imgbox.style.display='none';
}
upload.onchange=function(){
    download.style.display='block';
    reste.style.display='block';
    imgbox.style.display='block';
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]); // el read t3 imag
     file.onload=function(){
        img.src=file.result; 
     }
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);// drw in this etar 
        img.style.display='none';
    }
}
let filtres=document.querySelectorAll("ul il input"); 

filtres.forEach(filter=>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        contrast(${contrast.value}%)
        saturate(${saturate.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
       
        `
           ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})
// dowlonad function 
function downloader(){
    download.herf=canvas.toDataURL();
}
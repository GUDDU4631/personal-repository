const newText = ["Web Developer. ","Content Creator.","Video Editor."];
let currentTextIds = 0;
let charText = 0;
let typingSpeed = 100;
const textBox = document.querySelector("#text-change");
function type(){
    if (charText<newText[currentTextIds].length){
        textBox.innerHTML += newText[currentTextIds].charAt(charText)
        charText++;
        setTimeout(type,typingSpeed);
    }else {
        setTimeout(erase , 1000);
    }
}
function erase() {
    if (charText > 0) {
        textBox.innerHTML = newText[currentTextIds].substring(0, charText - 1);
        charText--;
        setTimeout(erase, typingSpeed);
    } else {
        currentTextIds = (currentTextIds + 1) % newText.length;
        setTimeout(type, 1000); // Pause before typing new text
    }
}
type();
const HomeBtn =document.querySelector("#HOME");
const paragraph = document.querySelector(".HOME");
HomeBtn.addEventListener("mouseover",()=>{
    paragraph.classList.remove("home-content")
})
HomeBtn.addEventListener("mouseout",()=>{
    paragraph.classList.add("home-content")
})
const AboutBtn =document.querySelector("#ABOUT");
const AboutPara = document.querySelector(".ABOUT");
AboutBtn.addEventListener("mouseover",()=>{
    AboutPara.classList.remove("about-content")
})
AboutBtn.addEventListener("mouseout",()=>{
    AboutPara.classList.add("about-content")
})
const projectBtn =document.querySelector("#project-btn");
const projectPara = document.querySelector(".PROJECTS");
projectBtn.addEventListener("mouseover",()=>{
    projectPara.classList.remove("project-content")
})
projectBtn.addEventListener("mouseout",()=>{
    projectPara.classList.add("project-content")
})
projectBtn.addEventListener("click",function(){
    window.scrollBy({
        top:1020,
        left:0,
        behavior:"smooth"
    })
})
const contactBtn = document.querySelector("#contact");
const contactPara =document.querySelector(".contact-container")
contactBtn.addEventListener("mouseover",()=>{
    contactPara.classList.remove("CONTACT")
})
contactBtn.addEventListener("mouseout",()=>{
    contactPara.classList.add("CONTACT")
})

const backBtn =document.querySelector(".back-btn");
const scrollAmt = -1020;
backBtn.addEventListener("click",()=>{
    window.scrollBy({
        top:scrollAmt,
        left:0,
        behavior:"smooth"
    })
})

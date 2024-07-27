
const textElement = ["an Engineer.","a Video editor.","a Youtuber.","a content creator."];
let charIdx = 0;
const textBox =document.querySelector("#text-animation");
let currentELementIdx = 0;
 function type (){
    if(charIdx < textElement[currentELementIdx].length){
        textBox.innerHTML += textElement[currentELementIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, 100);
    }else{
        setTimeout(erase, 1000);
    }
}
function erase(){
    if(charIdx>0){
        textBox.innerHTML = textElement[currentELementIdx].substring(0 , charIdx - 1);
        charIdx--;
        setTimeout(erase,100)
    }else{
        currentELementIdx = (currentELementIdx + 1) % textElement.length;
        setTimeout(type,100)
    }
}
type()

const about_btn =document.querySelector(".about-btn");
about_btn.addEventListener("click",function scroll(){
window.scrollBy({
    top:650,
    left:0,
    behavior:"smooth"
})
})

const contactBtn=document.querySelector(".contact-btn");
contactBtn.addEventListener("click",()=>{
window.scrollBy({
    top:1700,
    left:0,
    behavior:"smooth"
})
})
const contact=document.querySelector("#footer-contactBtn");
contact.addEventListener("click",()=>{
    window.scrollBy({
        top:-400,
        left:0,
        behavior:"smooth"
    })
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_uicuSIliGvwGnqfidHTajqR3QCeR5ebb0RsQxDhPX9Lm8IwN0VEd0-D67jQXtetzaw/exec'
			const form = document.forms['formName']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
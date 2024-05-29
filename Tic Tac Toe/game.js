let boxes =document.querySelectorAll(".box");
let reset_btn =document.querySelector(".reset-btn");
let new_btn =document.querySelector(".new-btn");
let msg_container=document.querySelector(".win-msg");
let msg =document.querySelector("#msg");
turnO=true;
let winningpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true;
        chickwinner();
    })

});
const chickwinner=()=>{
    for(let pattren of winningpatterns){
        let pos1val=boxes[pattren[0]].innerText;
        let pos2val=boxes[pattren[1]].innerText;
        let pos3val=boxes[pattren[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val)

            }
        }
    }
}
const showwinner=((winner)=>{
    msg.innerText=`Congratulation , The Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disablebtn();
});
const disablebtn=(()=>{
    for(let box of boxes){
        box.disabled=true;
    }
})
const enablebtn=(()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg_container.classList.add("hide");
    }
});
const reset=(()=>{
    enablebtn();
    
})
new_btn.addEventListener("click",reset);
reset_btn.addEventListener("click",reset)
let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".mwg-container");
let msg=document.querySelector("#msg");


let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    enableboxs();
    msgcontainer.classList.add("hide");
};


boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    checkwinner();
    });
});
const disableboxs=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableboxs=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxs();
}


const checkwinner=()=>{
for(pattern of winpatterns){
    console.log(pattern[0],pattern[1],pattern[2]);
     console.log(boxs[pattern[0]].innerText,boxs[pattern[1]].innerText,boxs[pattern[2]].innerText);


     let pos1val=boxs[pattern[0]].innerText;
     let pos2val=boxs[pattern[1]].innerText;
     let pos3val=boxs[pattern[2]].innerText;

     if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            
            showwinner(pos1val);
        }
     }

    }

};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

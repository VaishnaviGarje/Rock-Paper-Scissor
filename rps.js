let userscore=1;
let compscore=1;

let choices=document.querySelectorAll(".choice");
let drawmessage=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");

const countscore=(userWin)=>{
 if(userWin){
    userscore++;
    uscore.innerText=`${userscore}`;
 }else{
    compscore++;
    cscore.innerText=`${compscore}`;
 }
};

const gencompchoice=()=>{
    let compchoices=["rock","paper","scissor"];
    let randindx =Math.floor(Math.random()*3);
    return compchoices[randindx];
}
const drawgame=()=>{
    drawmessage.innerText="Game draw play again";
     drawmessage.style.backgroundColor="red";
     drawmessage.style.color="yellow";   
     uscore.innerText="0";
     cscore.innerText="0";
     userscore = 0;
     compscore = 0;
}
const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        drawmessage.innerText=`your ${userChoice} beats computer ${compchoice}`;
        drawmessage.style.backgroundColor="green";
        drawmessage.style.color="yellow";
    }else{
        drawmessage.innerText=`computers ${compchoice} beats your ${userChoice}`;
        drawmessage.style.backgroundColor="yellow";
        drawmessage.style.color="black";
    }
};
const playgame= ((userChoice) =>{
    console.log(`user choice=${userChoice}`);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userChoice===compchoice){
     drawgame();
    }else{
       let userWin=true;
        if(userChoice=="rock"){
           userWin= compchoice==="paper"?false:true;
        }else  if(userChoice=="paper"){
            userWin= compchoice==="scissor"?false:true;
         }else{
            userWin=compchoice==="rock"?false:true;
         }
         showWinner(userWin,userChoice,compchoice);
         countscore(userWin);
    }
});

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
     let userChoice=choice.getAttribute("id");  
       playgame(userChoice);
    });
});


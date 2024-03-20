let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg-box");
let msgDisplay=document.querySelector(".msg");
let myRank=document.querySelector("#my-rank");
let CompRank=document.querySelector("#comp-rank");
let rank1=0;
let rank2=0;
choices.forEach((choice) => {
    choice.addEventListener("click",(e)=>{
        let userChoice=choice.getAttribute("id");
        console.log(userChoice)
        let number=Math.floor(Math.random()*3);
        console.log(number)
        if (userChoice==="rock" && number==0) {
            msg.innerText="It was Draw";
            msgDisplay.style.backgroundColor="#08415C";
        }
        else if (userChoice==="paper" && number==1) {
            msg.innerText="It was Draw";
            msgDisplay.style.backgroundColor="#08415C";
        }
        else if (userChoice==="scissor" && number==2) {
            msg.innerText="It was Draw";
            msgDisplay.style.backgroundColor="#08415C";
        }
        else if (userChoice==="rock" && number==2) {
            rank1++;
            msg.innerText="You win, Rock beats Scissors";
            msgDisplay.style.backgroundColor="green";
            myRank.innerText=rank1;
        }
        else if (userChoice==="scissor" && number==1) {
            rank1++;
            msg.innerText="You win, Scissor beats Paper";
            msgDisplay.style.backgroundColor="green";
            myRank.innerText=rank1;
        }
        else if (userChoice==="paper" && number==0) {
            rank1++;
            msg.innerText="You win, Paper beats Rock";
            msgDisplay.style.backgroundColor="green";
            myRank.innerText=rank1;
        }
        else if (userChoice==="rock" && number==1) {
            msg.innerText="You lost, Paper beats Rock";
            msgDisplay.style.backgroundColor="red";
            rank2++;
            CompRank.innerText=rank2;
        }
        else if (userChoice==="scissor" && number==0) {
            msg.innerText="You lost, Rock beats Scissor";
            msgDisplay.style.backgroundColor="red";
            rank2++;
            CompRank.innerText=rank2;
        }
        else if (userChoice==="paper" && number==2) {
            msg.innerText="You lost, Scissor beats Paper";
            msgDisplay.style.backgroundColor="red";
            rank2++;
            CompRank.innerText=rank2;
        }
    });
});
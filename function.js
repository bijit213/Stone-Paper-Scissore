let userScore = 0 ;
let compScore = 0 ;
 
let userName = document.querySelector(".userName")
let userScorePara = document.querySelector("#comp-score");
let compScorePara = document.querySelector("#user-score")
let massage = document.querySelector("#msg");
let msgContainer = document.querySelectorAll(".msg-container");
let massage1 = document.querySelector("#msg1");
let result = document.querySelector(".Result");
let Result = document.querySelector(".result")

const choice = document.querySelectorAll(".choice");
 
const genCompChoice=()=>{
    let options=["stone","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=(userChoice)=>{
    console.log(`Match was Draw`);
    result.innerHTML=`You & Comp = ${userChoice}`;
    Result.classList.remove("red","green");
    Result.classList.add("gold");
}

// const stopFnc=(winCount)=>{
//     if(winCount>2){
//         disabled(choice);
//     }
// }

// const disabled=(choice)=>{
//     choice.disabled=true;
// }

const restart = ()=>{
    userScore=0;
    userScorePara.innerText=userScore;
    compScore=0;
    compScorePara.innerText=compScore;
}


const showWinner=(winCount,userChoice,compChoice)=>{
    if(winCount){
        compScore++;
        compScorePara.innerText=compScore;
        console.log(`You Win`);
        result.innerHTML=`You = ${userChoice} | Comp = ${compChoice}`
        Result.classList.add("green");
        Result.classList.remove("red","gold");

    }else{
        userScore++;
        userScorePara.innerText=userScore;
        console.log(`You lose`);
        result.innerHTML=`You = ${userChoice} | Comp = ${compChoice}`;
        Result.classList.add("red");
        Result.classList.remove("green","gold");

    }

}

const playGame=(userChoice)=>{
        console.log(`userChoice=${userChoice}`);
        //generate computer choice --> modular way of function
        const compChoice = genCompChoice();
        console.log(`compChoice=${compChoice}`);
        if(userChoice===compChoice){
            //drawGame
            drawGame(userChoice);

        }else{
            let winCount=true;
            if(userChoice=="stone"){
                //paper:scissor
                winCount= compChoice=="paper"?false:true;
            }else if(userChoice=="paper"){
                //paper:scissor
                winCount= compChoice=="scissor"?false:true;
            }else if(userChoice=="scissor"){
                //paper:scissor
                winCount= compChoice=="stone"?false:true;
            }
            showWinner(winCount,userChoice,compChoice);

            
        }
}



choice.forEach((choice)=>{
        // console.log(choice);    
        
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        })
        
}) 

userName.innerText=prompt("PLAYER NAME");

massage.addEventListener("click",()=>{
    compScore=0;
    compScorePara.innerText=compScore;
    userScore=0;
    userScorePara.innerText=userScore;
    choice.disabled=false;
    Result.classList.remove("red","green","gold");
    result.innerText=`Result`;
})

massage1.addEventListener("click",()=>{
    userName.innerText=prompt("PLAYER NAME");
})


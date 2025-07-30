
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const five = document.querySelector("#fifth");
const six = document.querySelector("#sixth");
const seven = document.querySelector("#seventh");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const boxes = [first, second, third, fourth, five, six, seven, eight, nine];


let player = "player_1";
let gameContinue = true;
let a = 0;
let b = 0;

function score(a,b){
let X_score = document.querySelector(".x_score").innerHTML=a;
let Y_score = document.querySelector(".o_score").innerHTML=b;
}



boxes.forEach(
    (box) => {
        box.addEventListener(
            "click", () => {

                if (gameContinue) {
                    if (player === "player_1") {
                        box.textContent = "X";

                        player = "player_2"
                    } else {
                        box.textContent = "O";
                        player = "player_1"
                    }
                    
                    check();
                    
                    

                }else{
                        console.log("Draw")
                    }

            }
        ) 

    }
)

function check(){
    
    //Row conditions checking

                    if ((first.textContent === "X" &&second.textContent === "X" &&third.textContent === "X")
                    ||(first.textContent === "O" &&second.textContent === "O" &&third.textContent === "O")) {
                        alert(first.textContent+ " -Won");
                        
                        first.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } else if ((fourth.textContent =="X"&& five.textContent== "X" && six.textContent == "X")||(fourth.textContent =="O"&& five.textContent== "O" && six.textContent == "O")) {
                        alert(fourth.textContent+" -Won");
                        fourth.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } else if ((seven.textContent =="X"&& eight.textContent =="X" && nine.textContent =="X")||(seven.textContent =="O"&& eight.textContent =="O" && nine.textContent =="O")) {
                        alert(seven.textContent+ " -Won");
                        seven.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    }
//Cloumn conditions
                    else if ((first.textContent === "X" &&fourth.textContent === "X" &&seven.textContent === "X")
                    ||(first.textContent === "O" &&fourth.textContent === "O" &&seven.textContent === "O")) {
                        alert(first.textContent +" -Won");
                        first.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } else if ((second.textContent =="X"&& five.textContent== "X" && eight.textContent == "X")||(second.textContent =="O"&& five.textContent== "O" && eight.textContent == "O")) {
                        alert(second.textContent+ "-Won");
                        second.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } else if ((third.textContent =="X"&& six.textContent =="X" && nine.textContent =="X")||(third.textContent =="O"&& six.textContent =="O" && nine.textContent =="O")) {
                        alert(third.textContent +"-Won");
                        third.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    }
//cross conditions
                     else if ((first.textContent === "X" &&five.textContent === "X" &&nine.textContent === "X")
                    ||(first.textContent === "O" &&five.textContent === "O" &&nine.textContent === "O")) {
                        alert(first.textContent+ " -Won");
                       first.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } else if ((third.textContent =="X"&& five.textContent== "X" && seven.textContent == "X")||(third.textContent =="O"&& five.textContent== "O" && seven.textContent == "O")) {
                        alert(third.textContent+" -Won");
                        third.textContent == "X" ?a++: b++;
                        score(a,b);
                        gameContinue = false;
                        return gameContinue;
                    } 



}
score(a,b);

let restart = document.querySelector(".nwgame");
restart.addEventListener("click",()=>{
    for(box of boxes){
        box.textContent=""
    }
    gameContinue = true;
})






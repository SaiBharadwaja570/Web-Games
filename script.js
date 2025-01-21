let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset');
let msg = document.getElementById('msg');



let turnO= true;//playerX, playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        console.log('Box as clicked');
        if(box.innerText === ""){
            box.innerText = turnO ? "O" : "X";
            turnO =! turnO;
            checkWinner();
        }
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}



const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg.style.display = 'none';
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val =  boxes[pattern[0]].innerText   
        let pos2Val =  boxes[pattern[1]].innerText
        let pos3Val =  boxes[pattern[2]].innerText     
        
        if(pos1Val!== "" && pos1Val === pos2Val && pos2Val === pos3Val ){
            console.log("Winnner is ", pos1Val);
            msg.style.display = 'block';
            msg.innerText = "Congratulations! Winner is " + pos1Val; 
            disableBoxes();
            return;
        }

        if([...boxes].every((box) => box.innerText !== "")){
            msg.style.display = 'block';
            msg.innerText = "It's a draw" ; 
        }
    }
}

document.getElementById('reset').addEventListener('click', () => {
    turnO = true;
    enableBoxes();
})
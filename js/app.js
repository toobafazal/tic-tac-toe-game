// x => <i class="fas fa-times"></i>
// 0 => <i class="fas fa-circle-notch"></i>
// Selecting All "Starting Page " Tags

let startingpage = document.querySelector("#startingpage");
let choose = document.querySelectorAll(".choose");
// Selecting All mian page tags 
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showchange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All winner page tags 
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");



// How can we change turns
// False => x's turns
// True => o's Turns
let changeTurn = null;


// select which you want to be 
// x or o 
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "playerx"){
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left ="0px"
        }else{
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left ="160px"
        }
        startingpage.style.display ="none";
        mainPage.style.display ="block";

     })
});

boxes.forEach(items => {
    items.addEventListener("click" , ()=>{
        // Add x ixon if "changeturn "= false
      // Add o ixon if "changeturn "= true
      if(changeTurn == false){
          items.innerHTML = `<i class="fas fa-times"></i>`;
          items.id = "X";
          items.style.pointerEvents = "none";
          showChange.style.left =  '160px';
        // Change the changeturn value false into true

        changeTurn = true;
      }else{
            items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left =  '0px';
          // Change the changeturn value false into true
  
          changeTurn = false;
        
      }
      winningfunction();
      drawfunc();
    })
});
    // All possible 
    let winningCombination =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
let winningfunction = ()=>{
for(let i = 0; i < 7 ; i++){
    let a = winningCombination[i];
    console.log(a);
    if(boxes[a[0]].id == "" || boxes[a[1]].id == "" || boxes[a[2]].id == ""){
        continue;
    }
    else if(boxes[a[0]].id == "X" && boxes[a[1]].id == "X" && boxes[a[2]].id == "X"){
        // console.log("X is the winner");
        winnerName.innerText = `"Player X win the Game!"`;
        mainPage.style.display= "none";
        winner.style.display = "block";
    }
    
    else if(boxes[a[0]].id == "O" && boxes[a[1]].id == "O" && boxes[a[2]].id == "O"){
        // console.log("O is the winner");
        winnerName.innerText = `"Player O win the Game!"`;
        mainPage.style.display= "none";
        winner.style.display = "block";
    }
    else{
        continue;
    }
}
}

let drawfunc =() =>{
    if (boxes[0].id != "" && boxes[1].id != "" &&
    boxes[2].id != "" && boxes[3].id != "" &&
    boxes[4].id != "" && boxes[5].id != "" &&
    boxes[6].id != "" && boxes[7].id != "" &&
    boxes[8].id != ""){

    winnerName.innerText = `"Match Draw"`;
        mainPage.style.display= "none";
        winner.style.display = "block";

    }
}
quit.addEventListener("click" , ()=>{
    window.location.reload();
})
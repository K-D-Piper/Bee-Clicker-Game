//Total Bee Count START
let count = 0;
let queenButton = document.getElementById("clickQueen")
let totalBees = document.getElementById("totalDisplay")


queenButton.addEventListener('click', () => 
    {
        count+= 1;
        totalBees.innerHTML = count
    })
console.log(queenButton)
//Total Bee Count END

let beesAvaliable = document.getElementById("avaliableDisplay")


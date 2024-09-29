//Total Bee Count START

let count = 0; //this is starting count 
let queenButton = document.getElementById("clickQueen") //The Queen Button

//TopTotals
let totalBees = document.getElementById("totalDisplay")
let totalPollen = document.getElementById("pollenDisplay")
let totalHoney = document.getElementById("honeyDisplay")
//Total Bee Count END (also has avilableBees count)

//Store Count START
let beesAvaliable = document.getElementById("avaliableDisplay")
let getPollenDisplay = document.getElementById("displayGetPollen")
let getPollenButton = document.getElementById("orderGetPollen")
//Store Count END

//My Queen START
queenButton.addEventListener('click', () => 
    { //Event Listener START
        count+= 1; //What Counts It / what makes the numbers go up

        //Top Totals DISPLAYS START
        totalBees.innerHTML = count //Total Bees 
        totalPollen.innerHTML =Math.floor(count / 5) //Total Pollen
        /* Note: Total Pollen reliant on POLLENATING bees. Not Total Bees*/
        totalHoney.innerHTML = Math.floor(count / 10) //Total Honey
        /* Note: Total Honey reliant on HONEYING bees. Not Total Bees.*/

        //Top Totals DISPLAYS END

        //BeeStore START
        beesAvaliable.innerHTML = count //Is the total of Bees
        /* Note:
        Available needs to be: Bees - (NumberOfBeesGettingPollen + NumberOfBeesGettingHoney)
        */

        /* 
        Pollen Equation:
            It takes 5 bees to get 1 pollen. 
            When you send out your 5 bees, you now have 5 less bees avaliabled in your hive. 
            5 Bees = 1 Pollen 
            5x = 1y 
        */

        //Pollen Count START
        //previous attempt commented out
        //getPollenDisplay.innerHTML = Math.floor(beesAvaliable.innerHTML / 5)
        //beesAvaliable.innerHTML / getPollenDisplay.innerHTML

        getPollenDisplay = beesAvaliable * 5 //5 bees = 1 pollen

        getPollenDisplay.innerHTML = (beesAvaliable.innerHTML * 5) //5 Bees = 1 Pollen
        //above reads pollen  = bees * 5 
        //There are currently 5 bees pollenating. 

        

        //Pollen Count END


        //BeeStore END








    })//EventListener END (DO NOT TOUCH)
//My Queen END
console.log(queenButton)


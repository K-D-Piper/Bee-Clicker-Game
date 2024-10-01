//Total Bee Count START
let count = 0; //this is starting count 
let queenButton = document.getElementById("clickQueen") //The Queen Button
let totalBees = document.getElementById("totalDisplay") //Total Bees post clicks
//Total Bee Count END

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MY QUEEN (the everything Button) START
queenButton.addEventListener('click', () => 
    { //Event Listener START
        count+= 1; //What Counts It / what makes the numbers go up
        totalBees.innerHTML = count //Total Bees 

    })//EventListener END (DO NOT TOUCH)
//MY QUEEN (the everything button) END
console.log(queenButton.innerHTML) //i don't think i need this?
console.log(totalBees.innerHTML) //total bees/ times clicked
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//Top Totals NAMING START
let totalHoney = document.getElementById("honeyDisplay")
//Top Totals NAMING END
//TOP TOTALS MATH START 
        totalHoney.innerHTML = Math.floor(count / 10) //Total Honey
        /* Note: Total Honey reliant on HONEYING bees. Not Total Bees.*/
//TOP TOTALS MATH END


//BeeStore START =======================================================

//Bees Avaliable START
let beesAvaliable = document.getElementById("avaliableDisplay")
/* Note:
Available needs to be: Bees - (NumberOfBeesGettingPollen + NumberOfBeesGettingHoney)
*/  
beesAvaliable.innerHTML = totalBees.innerHTML //Is the total of Bees

//Bees Avaliable END

//Pollen
let getPollenButton = document.getElementById("orderGetPollen")
let getPollenDisplay = document.getElementById("beesPollenating")

//Total Pollen Count START
let totalPollen = document.getElementById("pollenDisplay")

totalPollen.innerHTML =Math.floor(count / 5) //Total Pollen
/* Note: Total Pollen reliant on POLLENATING bees. Not Total Bees*/
//Total Pollen Count END

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
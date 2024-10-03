// Variable Names: Total Bee Count START
let count = 0; //this is starting count 
let queenButton = document.getElementById("clickQueen") //The Queen Button
let totalBees = document.getElementById("totalDisplay") //Total Bees post clicks
//Total Bee Count END

//Variable Names : Bee Store START
//Bees Avaliable Count START
let avaliableCount = 0;
let beesAvaliable = document.getElementById("avaliableDisplay")
//Bees Avaliable Count END 

//Pollen START 
    //top total 
let pollenCount = 0
let totalPollen = document.getElementById("pollenDisplay")

    //store
let pollenBeeCount = 0
let getPollenButton = document.getElementById("orderGetPollen")
let getPollenDisplay = document.getElementById("beesPollenating")
//Pollen END

//Honey START
    //Top Totals
let honeyCount = 0;
let totalHoney = document.getElementById("honeyDisplay")

    //store
let honeyBeeCount = 0;
let makeHoneyButton = document.getElementById("orderMakeHoney")
let makeHoneyDisplay = document.getElementById("beesHoneying")
//Honey END
//Bee Store Names END

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MY QUEEN (the everything Button) START
queenButton.addEventListener('click', () => 
    { //Event Listener START
        count+= 1; //What Counts It / what makes the numbers go up
        totalBees.innerHTML = count //Total Bees 

        avaliableCount += 1 //need fix
        beesAvaliable.innerHTML = avaliableCount //Is the total of Bees made / avaliable

    })//EvrentListener END (DO NOT TOUCH)
//MY QUEEN (the everything button) END
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//BeeStore START ==========================================
//Get Pollen event listener START ++++++++++++++++++++
getPollenButton.addEventListener('click', () => 
    {  
        if (beesAvaliable.innerHTML >= 5) {
            //beesAvaliable.innerHTML //calls beesavaliable  (might not need)
    let numBeesAval = Number(beesAvaliable.innerHTML) //turns this into a number
    let availResult = numBeesAval - 5  //bees avaliable with subtraction 
    beesAvaliable.innerHTML = availResult //subtracts
    console.log(availResult)

    pollenBeeCount += 5; //What Counts It / what makes the numbers go up
    getPollenDisplay.innerHTML = pollenBeeCount //Total Bees 

    pollenCount += 1
    totalPollen.innerHTML = pollenCount
        }else{
            alert("You need more Bees, My Queen!")
        }    

}) //GetPollen Event Listener END ++++++++++++++++++

//Make Honey event listener START *******************************************
makeHoneyButton.addEventListener('click', () => 
    {  
        if (beesAvaliable.innerHTML >= 10 && totalPollen.innerHTML >= 1) {
    beesAvaliable.innerHTML //calls beesavaliable  (might not need)
    let numBeesAval = Number(beesAvaliable.innerHTML) //turns this into a number
    let availResult = (numBeesAval - 10) //bees avaliable with subtraction 
    beesAvaliable.innerHTML = availResult //subtracts
    console.log(availResult)

    getPollenDisplay.innerHTML = pollenBeeCount //Total Bees 

    pollenCount -= 1
    totalPollen.innerHTML = pollenCount

    honeyBeeCount += 10; //What Counts It / what makes the numbers go up
    makeHoneyDisplay.innerHTML = honeyBeeCount //Total Bees 

    honeyCount += 1
    totalHoney.innerHTML = honeyCount
        }else if (beesAvaliable.innerHTML < 10){
            alert("You need more Bees, My Queen!")
        } else if (totalPollen.innerHTML < 1){
            alert("You need more Pollen, My Queen!")
        }


}) //Make Honey Event Listener END**********************
 //BeeStore END

 /* OOOOOOOO   MAIN SECTION END   OOOOOOOOOOOOOOOOOO*/
 /*XXXXXXXXXXXX   BOSS SECTION START   XXXXXXXXXXXXXXX*/ 

//Okay. So. The best way it seems for me to avoid a feak out is to write it out so, lets begin. How does the boss work?

/* The final boss of this game will take place on a seperate HTML foulder. Here the main objective will be to fight the Honey Bunny. 
    HB works by clicking the hive. When HB clicks the hive in increases the honey. 
    HB's objective is to get the hive to have more bees and fall down. 

    HIVE's objective is to defend its hive. It can do that in 2 ways. 
        Attacking HB (by clicking HB)
        Adding Bees (by clicking hive.)
        Consuming Honey (by clicking on the hive)

*/

let hiveHealthBar = document.getElementById("hiveHealthBar") //health scale
let bossHiveButton = document.getElementById("hiveDefense") //hive button 

let bunnyBossBar = document.getElementById("bunnyHealthBar") //bunny health bar
let honeyBunnyButton = document.getElementById("honeyBoss") //Honey Bunny Button 

bossHiveButton.addEventListener('click' , () => {
    let health = 0;
    let hiveHealthBar = "im exhagusted"

})
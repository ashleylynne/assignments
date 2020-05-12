const readline = require('readline-sync');

// Greeting

console.log("Hello!");
const whatName = readline.question('What is your name? ');
const firstName = whatName.valueOf().toUpperCase();

// Type play to start
const play = readline.question("Hello " + firstName + " Are you ready? Let's play! Type 'play' to continue.");

// function gameStart() {
//     if (play.valueOf() === "play") {
//         return commandKey + isPlaying;
//     } 
// }


// function commandOptions() {

//     for (let i = 0; i < defaultOptions.length; i++) {
//         if (currentDefaultOptions.valueOf() === "r") {
//             console.log("You are running away!")
//         } else if (currentDefaultOptions.valueOf() === "a") {
//             console.log("Attack Enemy!")
//         } else if (currentDefaultOptions.valueOf() === "j") {
//             console.log("Jump command!")
//         }
         
    
//     }

// }



let commandKey = readline.keyIn("hi. Type c for 'commands' if you get stuck " )
if (commandKey.valueOf() === "c") {
    let commands = readline.keyIn("COMMANDS:" + ["'WALK' = 'W', 'RUN' = 'R', 'ATTACK' = 'A', 'JUMP' = 'J' 'HELP' = 'H'"])
}


const defaultOptions = ["W", "R", "A", "J", "H", "C"];
const currentDefaultOptions = readline.setDefaultOptions({limit: defaultOptions})


















// let runKey = command.keyIn("")
// if (runKey.valueOf() === "r") {
//     return "You are running";
// }


// function gameOn() {
//     while (isPlaying) {
//         // Player is not dead
//     }
// }








// Type "help" to understand premise of the game

// function helpKey() {
//     if (commands.valueOf() === "h") {
//         console.log("This is some help")
//     }
// }

// Walking

// Every time the player walks, a random algorithm will be run that determines 
// if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

const walkCommand = readline.question('Please enter the letter "w" to walk');
    let isWalking = true;


function walk() {
    if (walkCommand.valueOf() === "w") {
        console.log("Now walking forward... ")
        console.log("An enemy is approaching!")   
        
    } 
}
    
    


const enemies = ["Staff", "Mad Dr", "Deranged Patient"]

function enemyCreation() {
    while(isWalking) {
        
           
        for (let i = 0; i < enemies.length; i++) {
            console.log(enemies[i]); 
    //I really just guessed here. I have no idea how to generate an algorithm that just choses an enemy at random
        }
    }

function enemyAttack() {

    if (enemyAlert.valueOf() === "a") {
        return "ENEMY ATTACK";
    }
    else if (enemyAlert.valueOf() === "r") {
        return "RUNNING AWAY";
    }
    
}

    let enemyAlert = readline.keyIn("Enemy Alerted! Type 'A' to ATTACK. Type 'R' to RUN")
    enemyAlert.enemyAttack();
}


// If a wild enemy appears:







// The user can decide to attack or run
// If attacking, a random amount of damage will be delt between a min and max
// If running, there will be a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
// If the enemy kills the player the console prints a cool death message and the game ends







// actions needed:

// character creation
// walking
// running from a fight
// fighting
// enemy creation
// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying
// should I add a text inventory section? (keys, weapons, stuff you drink for "health")

// functions needed:


// function run(){

// }

// function fight(){

// }

// function attackEnemy(){

// }

// function enemyAttack(){

// }

// function die(){

// }

// function enemyDie(){

// }

// function enemyCreation(){

// }

// So, how to we continue walking after we fight a monster or run away with it?

// A while loop.

// I'd put one that calls walk:

// ask user for name and give greeting 

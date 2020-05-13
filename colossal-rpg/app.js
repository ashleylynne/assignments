const readline = require('readline-sync');

// Greeting

console.log("Hello!");
const whatName = readline.question('What is your name? ');
const firstName = whatName.toUpperCase();

// Type play to start
const play = readline.question("Hello " + firstName + " Are you ready? Let's play! Type 'play' to continue.");
    if (play === "play") {
        console.log("You have just woken up in a hotel where a murderer is on the loose... (for example)")
         
        // Here will go the beginning of the game story. (Type 's' to skip)
    }


const skip = readline.keyIn("Type 'S' to SKIP")

skipHandler(skip);

function skipHandler() {
    if (skip === "s") {
        console.log("Game started!")
    }
}

// function commandOptions() {

//     for (let i = 0; i < defaultOptions.length; i++) {
//         if (currentDefaultOptions === "r") {
//             console.log("You are running away!")
//         } else if (currentDefaultOptions === "a") {
//             console.log("Attack Enemy!")
//         } else if (currentDefaultOptions === "j") {
//             console.log("Jump command!")
//         }
         
    
//     }

// }



let commandKey = readline.keyIn("Type c for 'commands' if you get stuck " )
    if (commandKey === "c") {
        let commands = readline.keyIn("COMMANDS:" + ["'WALK' = 'W', 'RUN' = 'R', 'ATTACK' = 'A', 'JUMP' = 'J' 'HELP' = 'H', 'SKIP' = 'S'"])
        skipHandler(commands)
    }


const defaultOptions = ["W", "R", "A", "J", "H", "C", "S"];
const currentDefaultOptions = readline.setDefaultOptions({limit: defaultOptions})




// Type "help" to understand premise of the game

// function helpKey() {
//     if (commands === "h") {
//         console.log("This is some help")
//     }
// }

// Walking

// Every time the player walks, a random algorithm will be run that determines 
// if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

let gameRunning = true;
let inBattle = false;

let walkCommand = readline.keyIn('Please enter the letter "W" to WALK')    
    walkHandler(walkCommand)


function walkHandler() {
    if(walkCommand === "w") {
        console.log("Walking... How tf do we get out of here?")
    }
}

// Enemy Appears

const enemyAhead = readline.keyIn("Be careful! There's an enemy ahead! Type 'R' to 'RUN' or 'H' to 'HIDE");


    enemyAheadHandler(enemyAhead)

function enemyAheadHandler() {
    if(enemyAhead === "r") {
        console.log("Hurry! He's much faster than you!")
    } else if(enemyAhead === "h") {
        console.log("Good job hiding from the enemy")
    }
}

const enemies = ["Staff", "Mad Dr", "Deranged Patient"]
    enemyCreation(enemies)

// Enemy Alerted

const enemyAlert = readline.keyIn(enemies + "alerted! Type 'R' to 'RUN' or 'A' to 'ATTACK'") 
    enemyAlertHandler(enemyAlert)

// The user can decide to attack or run
// If attacking, a random amount of damage will be delt between a min and max

// If running, there will be a 50% chance of escaping



function enemyAlertHandler() {
    if(enemyAlert === "r") {
        console.log("You're running away!")
        
    } else if(enemyAlert === "a") {
        console.log("Enemy hit!")
    }
}


function enemyAttack() {

    enemyAlertHandler(enemyAlert)
    
}

function enemyCreation() {
    for(var i = 0; i < enemies.length; i++) {
        Math.random(enemies[i])
    } if (inBattle) {
        enemyAheadHandler(enemyAlert)
    }
}













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

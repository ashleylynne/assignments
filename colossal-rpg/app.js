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

// Skip button
const skip = readline.keyIn("Type 'S' to SKIP")

skipHandler(skip);

function skipHandler() {
    if (skip === "s") {
        console.log("Game started!")
    }
}

// Commandkey

let commandKey = readline.keyIn("Type c for 'commands' if you get stuck " )
    if (commandKey === "c") {
        let commands = readline.keyIn("COMMANDS:" + ["'WALK' = 'W', 'RUN' = 'R', 'ATTACK' = 'A', 'JUMP' = 'J' 'HELP' = 'H', 'SKIP' = 'S'"])
        skipHandler(commands)
    }

    const defaultOptions = ["W", "R", "A", "J", "H", "C", "S"];
    const currentDefaultOptions = readline.setDefaultOptions({limit: defaultOptions})


// Walking

// Every time the player walks, a random algorithm will be run that determines 


let gameRunning = true;
let inBattle = false;
let isAlive = true;

let walkCommand = readline.keyIn('Please enter the letter "W" to WALK')    
    walkHandler(walkCommand)    

function walkHandler(walkCommand) {
    if(walkCommand === "w") {
        // Does the enemy appear?
        console.log("Walking... How tf do we get out of here?")
        return willEnemyAttack(); 
    }
}

// Enemy Ahead


function enemyAheadHandler() {
    if(enemyAhead === "r") {
        console.log("Hurry! He's much faster than you!")
    } else if(enemyAhead === "h") {
        console.log("Good job hiding from the enemy")
    }
}

const enemyAhead = readline.keyIn("Be careful! There's an enemy ahead! Type 'R' to 'RUN' or 'H' to 'HIDE");

enemyAheadHandler(enemyAhead);

// Random enemy algorithm

function willEnemyAttack() {
    const chance = Math.floor(Math.random()* 4)
    return chance > 2
}


// Enemy Appears

const enemies = ["Staff", "Mad Dr", "Deranged Patient"];
const enemyIndex = Math.floor(Math.random() * enemies.length);

// Enemy created
const enemyCreate = enemies[enemyIndex]

const enemyAlert = readline.keyIn(enemyCreate + " alerted! Type 'R' to 'RUN' or 'A' to 'ATTACK'")
enemyAlertHandler(enemyAlert)
    
// Enemy Alerted while walking

// if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

while(gameRunning) {
    // Walking
    let walkCommand = readline.keyIn('Please enter the letter "W" to WALK')    
    const isAttacked = walkHandler(walkCommand)
    // Fight sequence
    if (isAttacked) {
        // The user can decide to attack or run
        const enemyAlert = readline.keyIn(enemyCreate + " alerted! Type 'R' to 'RUN' or 'A' to 'ATTACK'")
        enemyAlertHandler(enemyAlert)
    } 


}

const isRunning = false;
const underAttack = false;

function enemyAlertHandler() {
    if(enemyAlert === "r") { 
        // If running, there will be a 50% chance of escaping
        isRunning = true;
        const running = console.log("You're running away!")
        const escape = console.log("You escaped! Good job!")
        const caught = console.log("You've been caught by the enemy! You're under attack")
        const escapeChance = Math.floor(Math.random() * 2)
        while(isRunning === true) { // How do I do this without it constantly running
            if (escapeChance==="1") {
                console.log(running + escape);
                isRunning = false;
            }
            else {
                    console.log(caught);
                    isRunning = false;
            }
        }
    } else if(enemyAlert === "a") {
        isRunning = false;
        underAttack = true;
        while(underAttack === true) { //How do I leave this as a while loop but get it to not constantly run
            console.log("Enemy hit!")
        // After the player attacks or runs the enemy attacks back for a random damage amount
        // If attacking, a random amount of damage will be delt between a min and max
        const damage = Math.floor(Math.random() * 100)
        console.log("You've been hit! Your health is at " + damage + "%!")
            if(damage < "25") {
                console.log("Low health alert!")
            // If the enemy kills the player the console prints a cool death message and the game ends
            } else if (damage === "0") {
                underAttack = false;
                gameRunning = false;
                console.log("You're dead! GAME OVER")
            }
        }
        

        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory.

    }
} 


// To do now:
// 1) Write inBattle code so that player gets hit while in battle with an enemy (this calulates the damage between min and max example: your health is at XY%)
// 2) Write "END GAME" code for when an enemy kills the player
// 3) Write code for when the player is running (50/50 chance of getting attacked)

// To do tomorrow 5/20:
// 1) Find out how to create the inventory
// 2) Enemy dying and dropping an item
// 3) Collect inventory

// To do by end of week:
// Finish writing game story






let isAttacked = false;
while(isAttacked) {
    enemyAlertHandler(enemyAlert)

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



// Type "help" to understand premise of the game

// function helpKey() {
//     if (commands === "h") {
//         console.log("This is some help")
//     }
// }




























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

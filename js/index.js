/********** Classes ************/
class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 0;

        this.updateUI() // Invoke the method updateUI() to the constructor to set the DOM element player's properties to the initial value
    }

    updateUI() {
        // Get the div#player from the DOM
        const playerElm = document.getElementById("player")
        // Pass the Player properties position X and Y to the DOM element player's properties left and bottom
        playerElm.style.left = this.positionX + 'vw'
        playerElm.style.bottom = this.positionY + 'vh'
        // Pass the Player properties width and height to the DOM element player's properties width and height
        playerElm.style.width = this.width + 'vw'
        playerElm.style.height = this.height + 'vh'
    }

    moveLeft() {
        if (this.positionX >= 0) { // Check if the positionX it's not below 0 to avoid outborder
            this.positionX--; // Decrement the Player class propertie positionX to move to the right
            // Invoke the updateUI() method to update the DOM elements players's properties with the Player class properties
            this.updateUI()
        }
    }


    moveRight() {
        if ((this.positionX + this.width) < 100) { // Check if the positionX it's not above the width of the board element considering the size of the DOM element player width to avoid outborder
            this.positionX++; // Increment the Player class propertie positionX to move to the right
            // Invoke the updateUI() method to update the DOM elements players's properties with the Player class properties
            this.updateUI()
        }
    }
}


class Obstacle {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // random a number between 0 and (100 - width)
        this.positionY = 100;
        this.obstacleElm = null // Create a property that will refer to the new DOM element obstacle created

        this.createObstacle() // Invoke the method to create a new DOM element every time the constructor method it calls
        this.updateUI() // Update the UI to show the DOM element obstacle intially
    }

    createObstacle() {
        // Create a DOM element obstacle
        this.obstacleElm = document.createElement("div")

        // Create a class for the new DOM element obstacle
        this.obstacleElm.className = "obstacle"

        // Append the new element to the DOM element board
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }

    updateUI() {
        // Pass the Obstacle properties position X and Y to the DOM element obstacle's properties left and bottom
        this.obstacleElm.style.left = this.positionX + 'vw'
        this.obstacleElm.style.bottom = this.positionY + 'vh'
        // Pass the Obstacle properties width and height to the DOM element obstacle's properties width and height
        this.obstacleElm.style.width = this.width + 'vw'
        this.obstacleElm.style.height = this.height + 'vh'
    }

    moveDown() {
        this.positionY-- // Move the position of the Obstacle instance down based on the bottom position

        // Invoke the updateUI() method to update the DOM elements obstacle's
        this.updateUI()
    }

}


/********** Variables ************/
const player = new Player() // Creating an instance of the class Player

const obstacleArr = []
let obstacle = null


/********** Intervals ************/

// Create every 3s an instance of the class Obstacle 
setInterval(function () {
    obstacle = new Obstacle()
    obstacleArr.push(obstacle) // Store the obstacles instances to an array
}, 3000)


setInterval(function () {
    obstacleArr.forEach((obstacle) => {
        obstacle.moveDown() // moveDown() every obstacles instances stored in the array 
    })
}, 40) // Obstacles move down every 40ms 


/********** Event Listeners ************/

// Create the eventListener for the keydown arrows
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
    } else if (e.code === "ArrowRight") {
        player.moveRight()
    }
})



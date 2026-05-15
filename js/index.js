class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;

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


const player = new Player() // Creating an instance of the class Player

// Create the eventListener for the keydown arrows
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
    } else if (e.code === "ArrowRight") {
        player.moveRight()
    }
})

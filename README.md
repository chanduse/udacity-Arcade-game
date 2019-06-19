# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

### Clone or download file given by Udacity

-   Read all the information and coding engine provided by Udacity
-   Clone or download zip file
-   After that extracting the zip file , I observed file structure a(`Arcade game`, `CSS/style.css`,
                                                                    `img/char-boy.png`, and on soon....)

-   I follow the below steps to accomplished the Project :

### In Html file

-   Adding the icon using link tag and also title
-   Title of the page **Arcade game**
    ### In  app.js file
-   initial calling x,y,move and sprite using **this keyword**
-   Enemy is randomly coming in canvas when using mathematical calculation using random functions
-   After that player are placed in canvas and moves are done using moves variable
-   In enemy position `x > 500` then it is multiply with 520 \* random function
     enemy position 'x > 0' then it is multiply with 30 and 100 == random function
-   After that char-horn-girl.png is moving in canvas
-   Implemented the below functions for Player.
     1.render()
     2.update() and
     3.handleInput().

    1.  render() is for placing a player sprite on the canvas.
    2.  update() is used for updating the position of the player
    3.  handleInput() is used handle the left-arrow , right-arrow and up and down arrow are handling

-   After All function are working score are displayed in top corner in the canvas
-   If girl are touch enemy then score will appear Zero

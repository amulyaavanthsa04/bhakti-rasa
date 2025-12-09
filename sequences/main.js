/* grab buttons */
let introButton = document.getElementById("intro-button");
let mainButton = document.getElementById("main-button");
let stairsButton = document.getElementById("stairs-button");
let doorButton = document.getElementById("door-button");
let insideButton = document.getElementById("inside-button");
let shrineButton = document.getElementById("shrine-button");
/* grab panels */
let intro = document.getElementById("intro");
let main = document.getElementById("main");
let stairs = document.getElementById("stairs");
let door = document.getElementById("door");
let inside = document.getElementById("inside");
let shrine = document.getElementById("shrine");

/****************************************************/
/* when user selects next button, update the panels */
/****************************************************/

/* when someone clicks the intro button, show the first-selection panel */
introButton.addEventListener("click", function(){
    /* hide the intro */
    intro.classList.toggle("hide");
    /* show the first-selection panel */
    main.classList.toggle("hide");
})

mainButton.addEventListener("click", function(){
    /* hide the main */
    main.classList.toggle("hide");
    /* show the first-selection panel */
    stairs.classList.toggle("hide");

})
stairsButton.addEventListener("click", function(){
    /* hide the stairs */
    stairs.classList.toggle("hide");
    /* show the first-selection panel */
    door.classList.toggle("hide");

})

doorButton.addEventListener("click", function(){
    /* hide the door */
    door.classList.toggle("hide");
    /* show the first-selection panel */
    inside.classList.toggle("hide");

})

insideButton.addEventListener("click", function(){
    /* hide the inside */
    inside.classList.toggle("hide");
    /* show the first-selection panel */
    shrine.classList.toggle("hide");

})

shrineButton.addEventListener("click", function(){
    /* hide the shrine */
    shrine.classList.toggle("hide");
    /* show the first-selection panel */
    intro.classList.toggle("hide");

})
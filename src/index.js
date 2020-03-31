// JS file which is outputted in main.js, through the Webpack config and imported into our html through the script tag at the bottom of the page
// ==========================================================================

// SELECTING AN ELEMENT FROM THE DOM

// QUERY SELECTOR - HTML tags, CSS classes, IDs
const list = document.querySelector("#players");
// document is the whole web page, the whole html, so we query on the whole html doc

// ==========================================================================

// GET ELEMENT BY ID - GRAB IDs only
const list = document.getElementById("players");
console.log(list);
// ==========================================================================


// APPENDING HTML
list.insertAdjacentHTML('beforeend', "<li>Iri</li><li>Edvar</li>");
// ==========================================================================


// SELECTING SEVERAL ELEMENTS FROM THE PAGE - QUERYSELECTORALL
const ol = document.querySelectorAll("#fifa-wins li");
console.log(ol); // -> NodeList(5) [li, li, li, li, li]
// returns a node list which behaves EXACTLY like an array
// ==========================================================================


// ITERATING THROUGH ARRAY TO PERFORM SOME FUNCTION ON IT - USE FOREACH
// LEARN THE SYNTAX! Put your brackets in before doing anything else
ol.forEach(() => {

});

ol.forEach((li) => {
  console.log(li.innerText);
});
// ==========================================================================


// APPENDING FRANCE TO THE LIST
const list = document.querySelector("#fifa-wins");
list.insertAdjacentHTML("beforeend", "<li>France (2 Wins)</li>")
// ==========================================================================


// SETTIMEOUT --> Perform some code after 3 seconds: after 3 seconds, append France to list
setTimeout(() => {
  list.insertAdjacentHTML("beforeend", "<li>France (2 Wins)</li>")
}, 3000)
// ==========================================================================


// HIDE MY ELEMENT
list.style.display = "none";

// SHOW MY ELEMENT
list.style.display = "";
// ==========================================================================


// ADD /REMOVE/ TOGGLE A CLASS - GIVES US ACCESS TO THE CLASSES OF THE PAGE IN STYLE.CSS
list.classList.add("red"); //-> add the class
list.classList.remove("red");// -> remove the class
list.classList.toggle("red");//-> If class exists, remove it, if it doesn't add it!

// ADDING ANY CSS STYLE PROPERTY THAT EXISTS - NOT A CLASS
list.style.backgroundColor = "blue";
// ==========================================================================


// GRABBING VALUE OF AN INPUT AND CHANGING IT

const email = document.querySelector("#email"); //1. select the input
email.value = "irina@gmail.com"; //2. grab the value of the input and set it as something else
console.log(email.value);
// ==========================================================================



// EXTRACT TEXT / HTML

const link = document.querySelector("#home"); //1. select the input
link.innerText = "Le Wagon is ze bestttt " // --> Changing the inner text of the element
link.innerHTML = "Le Wagon is <strong>ze bestttt</strong> " // --> Changing the inner html of the element
// ==========================================================================



// LISTENING TO AN EVENT


//1. We select the element
const romain = document.querySelector("#romain");
console.log(romain);


//2. We add an event listener on the element and we listen to a click
romain.addEventListener("click", () => {
  // PERFORM THE CALLBACK
  //when the click happens the callback is triggered and the .img-circle class is toggled
  romain.classList.toggle("img-circle")
});
// ==========================================================================



// SELECTING SEVERAL ELEMENTS AND BINDING EVENT LISTENERS TO THEM
const images = document.querySelectorAll(".image");
console.log(images); // this is a node list of 2 elements which behaves like an array

// 1. We iterate over the array, and for each image we attach an event listener
images.forEach((pic) => {
  pic.addEventListener("click", (event) => {
    //2. when someone clicks one of the images, the callback is triggered and the .img-circle class is toggled on the element
    pic.classList.toggle("img-circle")
    //3. another way to select the image would be to target it with event.currenTarget

    // console.log(event); // event is a js mousevent obj {}
    // event.currentTarget is what the event listener is attached to --> pic
    // this code would work the same as no 2.

    // event.currentTarget.classList.toggle("img-circle")
  })
});
// ==========================================================================



// REFACTOR CODE - EXTRACT CALLBACK

// 2. Extract the event callback and make it a function of its own called imageToggler()
const imageToggler = (event) => {
  // The fuction receives the event argument from the even listener!
    event.currentTarget.classList.toggle("img-circle")
  };

// 1. First add an event listener on each pic
images.forEach((pic) => {
  // 2. When a click happens, perform the callback which is imageToggler function from above.
  // The event listener will still send the event argument!
  pic.addEventListener("click", imageToggler)
});







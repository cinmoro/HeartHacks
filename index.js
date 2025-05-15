//  https://courses.codepath.org/courses/web101/unit/6#!projects
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  console.log("toggle Dark mode - booya!");
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;

const addParticipant = (person) => {
  // create new p
  const newP = document.createElement("p");
  newP.textContent = `💗 ${person.name} from ${person.state} has been struck by cupid.`;

  // find rsvp-participants and add new participant to list
  document.querySelector(".rsvp-participants").appendChild(newP);

  // update rsvp-count
  count += 1;
  const newCount = document.getElementById("rsvp-count");
  newCount.textContent = `💘 ${count} lovers are getting ready to hack into our hearts!`;
};

const validateForm = (event) => {
  event.preventDefault(); // prevent form from refreshing

  let containsErrors = false;
  const rsvpInputs = document.getElementById("rsvp-form").elements;

  const person = {
    name: rsvpInputs["name"].value.trim(),
    state: rsvpInputs["state"].value.trim(),
    email: rsvpInputs["email"].value.trim()
  };

  // Loop through all inputs
  for (let key in person) {
    const input = rsvpInputs[key];
    
    // Skip button and submit fields
    if (input.type !== "button" && input.type !== "submit") {
      // Check if input value length is less than 2 (invalid)
      if (person[key].length < 2) {
        containsErrors = true;
        input.classList.add("error"); // add error class
      } else {
        input.classList.remove("error"); // remove error class
      }
    }
  }

  // If no errors, add participant and clear inputs
  if (!containsErrors) {
    addParticipant(person); // call addParticipant() to update the list
    toggleModal(person);
    // Clear form inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
      const input = rsvpInputs[i];
      if (input.type !== "button" && input.type !== "submit") {
        input.value = ""; // clear input value
      }
    }
  }
};
 // Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalText = document.getElementById("modal-text");
  // TODO: Update modal display to flex
  modal.style.display = "flex";
  // TODO: Update modal text to personalized message
  modalText.textContent = `You're in, ${person.name}! Your heart's been successfully compiled — welcome to Love @ First Byte 💘🐻`;
  // Set modal timeout to 5 seconds
  let intervalId = setInterval(animateImage, 500);

  setTimeout (() => {
    modal.style.display = "none";
    clearInterval(intervalId);
    // modalImage.style.transform = `rotate(0deg)`; // reset rotation
  }, 5000);
};

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.querySelector(".modal-img");
const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}
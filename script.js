const emailInput = document.querySelector(`[name="Email"]`); // Declaram un emailInput unde introducem emailul.
const emailText = document.querySelector(`.email-adress-text`); // declaram un emailText unde vom vedea emailul introdus.
const firstNameInput = document.querySelector('[name="first-name"]');
const firstNameText = document.querySelector('.first-name-text');
const lastNameInput = document.querySelector(`[name="last-name"]`);
const lastNameText = document.querySelector(`.last-name-text`);
const locationInput = document.querySelector(`[name="user_location"]`);
const locationText = document.querySelector(`.location-text`);
const linkedInInput = document.querySelector(`[name="linkedin"]`);
const linkedInText = document.querySelector(`.linkedin-text`);

const handleEmailAdressInput = () => {           // cu functia respectiva vom rezolva problema
    emailText.innerText = emailInput.value;
}

const handleFirstNameInput = () => {
    firstNameText.innerText = firstNameInput.value;
};

const handleLastNameInput = () => {
    lastNameText.innerText = lastNameInput.value;
}

const handleLocationInput = () => {
    locationText.innerText = locationInput.value;
}

const handleLinkedInInput = () => {
    linkedInText.innerText = linkedInInput.value;
}


emailInput.addEventListener(`input`, handleEmailAdressInput); // declaram eventlistener pentru emailul introdus
firstNameInput.addEventListener('input', handleFirstNameInput);
lastNameInput.addEventListener(`input`, handleLastNameInput);
locationInput.addEventListener(`input`, handleLocationInput);
linkedInInput.addEventListener(`input`, handleLinkedInInput);

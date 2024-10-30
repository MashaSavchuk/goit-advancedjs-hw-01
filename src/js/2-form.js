import "../css/2-form.css";

const storageKey = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};

const locStorage = window.localStorage;
const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMsg = form.elements.message;

const fData = locStorage.getItem(storageKey);

if (fData) { 
    formData = JSON.parse(fData);
    formEmail.value = formData.email;
    formMsg.value = formData.message;
}

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value;
    locStorage.setItem(storageKey, JSON.stringify(formData));
  });
  
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
    if (formEmail.value && formMsg.value) { 
        console.log(formData);
        locStorage.removeItem(storageKey);
        formData.email = "";
        formData.message = "";
        form.reset();
    } else {
        window.alert("Fill please all fields");
    }
  });

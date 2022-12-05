import getEl from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = getEl('.btn')

const showUSer = async () => {
    // get user fro api 
    const person = await getUser();
    // display user
    displayUser(person);
}

window.addEventListener('DOMContentLoaded', showUSer);
btn.addEventListener('click', showUSer)
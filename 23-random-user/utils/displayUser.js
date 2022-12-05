import getEl from "./getElement.js";
import removeActive from "./removeActive.js";

const userImg = getEl('.user-img');
const title = getEl('.user-title');
const value = getEl('.user-value');
const btns = [...document.querySelectorAll('.icon')]


const displayUser = (person) => {
    userImg.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    removeActive(btns);
    btns[0].classList.add('active');
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            removeActive(btns);
            btn.classList.add('active');
        });
    })
}

export default displayUser;
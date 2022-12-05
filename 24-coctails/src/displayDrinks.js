import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
    const section = getElement('.section-center');
    const title = getElement('.title');

    if (!drinks) {
        // hide loading
        hideLoading();
        title.textContent = 'sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map(drink => {
        const { strDrinkThumb: img, idDrink: id, strDrink: name } = drink;
        return `<a href="drink.html">
                <article class="cocktail" data-id=${id}>
                    <img src="${img}" alt="${name}">
                    <h3>${name}</h3>
                </article>
                </a>`
    }).join('');
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section
}

export default displayDrinks;
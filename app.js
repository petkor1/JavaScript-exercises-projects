// const xhr = new XMLHttpRequest();
// const btn = document.querySelector('.btn');
// const url = './api/people.json'

// btn.addEventListener('click', () => {
//     getData(url);
// })

// function getData(url) {
//     xhr.open('GET', url);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             const displayData = data.map((item) => {
//                 return `<p>name: ${item.name}</p>`
//             }).join('')
//             const element = document.createElement('div');
//             element.innerHTML = displayData;
//             document.body.appendChild(element);
//         } else {
//             console.log({
//                 status: xhr.status,
//                 text: xhr.statusText
//             });
//         }
//     }
//     xhr.send();
// }
const url = './api/people.json';
// const response = fetch(url);
// console.log(response);

// fetch(url).then((resp) => {
//     // response obcject
//     // useful prop and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // return promise
//     return resp.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err));

// fetch(url)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => displayItems(data))
//         .catch(err => console.log(err));
// })

// const displayItems = (items) => {
//     const displayData = items.map((item) => {
//         const { name } = item
//         return `<p>${name}</p>`
//     }).join('')
//     const element = document.createElement('div');
//     element.innerHTML = displayData;
//     document.body.appendChild(element);
// }

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayItems(data);
    } catch (error) {
        console.log(
            error
        );
    }
})

const displayItems = (items) => {
    const displayData = items.map((item) => {
        const { name } = item
        return `<p>${name}</p>`
    }).join('')
    const element = document.createElement('div');
    element.innerHTML = displayData;
    document.body.appendChild(element);
}

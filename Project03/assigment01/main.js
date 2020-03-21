// tutaj rozwiązanie


const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let fontSize = 10;

//FOR

// btn.addEventListener("click", function () {
//     console.log("działa");
//     fontSize++;
//     for (let i = 0; i < liItems.length; i++) {
//         liItems[i].style.display = "block";
//         liItems[i].style.fontSize = `${fontSize}px`;
//     }
// })


//FOREACH

btn.addEventListener("click", () => {
    liItems.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = fontSize + "px"
    })
    fontSize++
})
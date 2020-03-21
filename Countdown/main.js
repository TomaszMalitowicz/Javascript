const display = document.querySelector('span.t');
const form = document.querySelector('form');
const input = document.querySelector('input');
const video = document.querySelector('.giphy-embed');
// let counter = 10;

// const countDownToTheAtomArmagedon = setInterval(function () {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//         console.log("Uwaga Uwaga Rozpoczeła się nuklearana zagłada!!! BOOOOM");
//         clearInterval(countDownToTheAtomArmagedon);
//     }
//     display.textContent = counter
// }, 1000);


const addTime = (e) => {
    e.preventDefault()
    const time = input.value;
    console.log(time);
    let counter = 0;
    counter = time;
    const countDownToTheAtomArmagedon = setInterval(function () {
        console.log(counter);
        counter--;
        if (counter === 0) {

            clearInterval(countDownToTheAtomArmagedon);
            console.log("Uwaga Uwaga Rozpoczeła się nuklearana zagłada!!! BOOOOM!!");
            // alert("Uwaga Uwaga Rozpoczeła się nuklearana zagłada!!! BOOOOM!!");
            document.querySelector('.giphy-embed').style.display = "block";

        }
        display.textContent = counter
    }, 1000);


}


form.addEventListener('submit', addTime);


// var newYearCountdown = setInterval(function () {
//     console.log(counter);
//     counter--
//     if (counter === 0) {
//         console.log("HAPPY NEW YEAR!!");
//         clearInterval(newYearCountdown);
//     }
// }, 1000);
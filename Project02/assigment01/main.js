const square = document.createElement('div');
document.body.appendChild(square);
let size = 10; //wielkosc kwadratu
square.style.width = `${size}px`;
square.style.height = `${size}px`;

let grow = true;


window.addEventListener("scroll", function () {
    if (size >= window.innerHeight / 2) {
        grow = false
    } else if (size <= 0) {
        grow = true;
    }
    if (grow) {
        size += 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    } else {
        size -= 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    }

})
let bodyHeight = 10000
let height = -10
let grow = true
document.body.style.height = `${bodyHeight}vh`
const div = document.createElement('div');
document.body.appendChild(div);
div.style.width = `100%`;
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = "green";
div.style.height = `${height}px`


const changeHeight = function () {
    if (height >= window.innerHeight / 2) {
        grow = false
    } else if (height <= 0) {
        grow = true
    }
    if (grow) {
        height += 10
        div.style.backgroundColor = "green"
        div.style.height = `${height}px`
    } else {
        height -= 10
        div.style.backgroundColor = "red"
        div.style.height = `${height}px`
    }
}


window.addEventListener("scroll", changeHeight)
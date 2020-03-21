const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + "px";
div.style.top = `${divY}px`;
let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    console.log('mouse pressed');
    div.style.backgroundColor = 'gray';
    drawActive = true;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);
})
div.addEventListener('mousemove', (e) => {
    console.log('mouse move');
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX - 50}px`
        div.style.top = `${divY - 50}px`
    }

})
div.addEventListener('mouseup', () => {
    console.log('mouse let go');
    div.style.backgroundColor = 'black';
    drawActive = false;
})
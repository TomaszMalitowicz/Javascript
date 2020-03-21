// let number = 0;
// const add = () => {
//     number++;
//     document.body.textContent = `aktualny stan licznikia to ${number}`;
// }

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika kliknięc to ${number}`;
    }
}

const counter = add();
document.addEventListener('click', counter);
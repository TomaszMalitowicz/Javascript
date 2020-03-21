const btnAdd = document.querySelector('button.add')
const btnReset = document.querySelector('button.clean')
const btnShowAdvice = document.querySelector('button.showAdvice')
const btnShowOptions = document.querySelector('button.showOptions')
let answer = document.querySelector('h1');


let advices = [' walcz', ' przemyś to jeszcze raz', ' przeżyj to sam']

const addPosibility = function (e) {
    e.preventDefault();
    console.log("dodaje");
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (input.value.length) {
        for (advice of advices) {
            if (advice === newAdvice) {
                alert("You have alredy added that value, can't add it again, sorry bro!");
                return
            }
        }
    }
    advices.push(newAdvice);
    console.log(advices);
    input.value = "";
    alert("Dodałeś " + newAdvice)
}


const resetPosibility = function (e) {
    e.preventDefault();
    console.log("czyszczę")
    advices = [' walcz', ' przemyś to jeszcze raz', ' przeżyj to sam']
    answer.textContent = '';

}


const showAdvice = function (e) {
    e.preventDefault();
    console.log('pokazuje radę')
    const indexAdvice = Math.floor(Math.random() * advices.length);
    answer.textContent = `${advices[indexAdvice]}`
}

// for (let i = 0; i < codesNumber; i++) {
//     let code = '';
//     for (let i = 0; i < charsNumber; i++) {
//         const index = Math.floor(Math.random() * chars.length)
//         code += chars[index];
//     }


const showOptions = function (e) {
    e.preventDefault();
    console.log('pokazuje możliwości');
    alert(advices.join(' <<< >>> '))
}

btnAdd.addEventListener('click', addPosibility);
btnReset.addEventListener('click', resetPosibility);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', showOptions);
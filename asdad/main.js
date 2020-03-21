const userAge = [20, 21, 23, 43, 55, 68];
const section = document.createElement('section')
userAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1> Użytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`
    )
    if (index === array.length - 1) {
        document.body.appendChild(section);
    }
})
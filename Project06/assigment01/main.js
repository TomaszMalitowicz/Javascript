const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Stasiu", "Mati", "Kosa", "Atus", "Bohen", "Krzysiu", "Tomasz", "Chudy", "Komor", "10", "11", "12", "13", "14", "15"]
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze myślę", "Na 100% twierdzę", "Jestem pewnie", "Szczerze uważam", "Najfajniejsze imię to"]




const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefixs = Math.floor(Math.random() * prefixs.length);
    // console.log(names[index]);
    div.textContent = `${prefixs[indexPrefixs]}, że najlepsze będzie imię ${names[indexName]}`
}

btn.addEventListener("click", nameGenerator);
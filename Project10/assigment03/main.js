const cloak = () => {
    let seconds = 0;
    document.body.textContent = 0 + "sekund";
    const timer = () => {
        seconds++;
        document.body.textContent = seconds + "sekund";
    }
    return timer
}
const start = cloak()

setInterval(start, 1000);
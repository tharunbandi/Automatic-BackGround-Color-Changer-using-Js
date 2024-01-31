function Bgcolor() {
    let color = "#";

    let colors = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color = color + colors[index];
    }
    document.body.style.background = color;
}
setInterval(Bgcolor, 1000);
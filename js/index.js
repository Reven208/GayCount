const txt = document.getElementById("out")
const lds = document.getElementById("load")
//No vengas a mamar con el codigo isaacx gei :Rage:

async function rand() {
setTimeout(function () {
    console.log(`EASTER EGG: Macc Es Peruano`);
    lds.remove();  
    txt.textContent = `Usted es  ${Math.floor(Math.random() * 100)}% Gay`
}, 2000);
}


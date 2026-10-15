let textStatus = document.getElementById("textStatus")

function run(){
    console.log("TUN!");
    
    textStatus.innerText = "Status: Loaded"
}

window.addEventListener('message', (event) => {
    console.log("New message...", event)

    textStatus.innerText = "Nachricht: " + event.data

    if (event.origin !== 'https://aufziehn-frei.de') {
        return;
    }

    console.log("Erfolgreich authentifiziert als aufziehn-frei")
});

run()
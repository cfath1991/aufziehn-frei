let textStatus = document.getElementById("textStatus")

function run(){
    textStatus.innerText = "Status: Loaded"
}

window.addEventListener('message', (event) => {
    console.log("New message", event)

    textStatus.innerText = "Nachricht: " + event.toString()

    if (event.origin !== 'https://meine-wix-domain.de') return;

    // Im sessionStorage des GitHub-Domain-Ursprungs speichern:
    sessionStorage.setItem('meineDaten', JSON.stringify(event.data));
});

run()

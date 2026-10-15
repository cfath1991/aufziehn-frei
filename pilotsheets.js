let textStatus = document.getElementById("textStatus")

function run(){
    console.log("run...");
    
    textStatus.innerText = "Status: Loaded"
}

window.addEventListener('message', (event) => {
    console.log("New message...", event)

    textStatus.innerText = "Message: " + event.data

    if (event.origin !== 'https://aufziehn-frei.de') {
        console.warn("ERROR: event.origin failure");
        
        return;
    }

    console.log("Erfolgreich authentifiziert als aufziehn-frei")

    // Im sessionStorage des GitHub-Domain-Ursprungs speichern:
    //sessionStorage.setItem('meineDaten', JSON.stringify(event.data));
});

run()

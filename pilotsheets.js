let textStatus = document.getElementById("textStatus")

window.addEventListener('message', (event) => {
    console.log("New message...", event)

    //textStatus.innerText = "Message: " + event.data

    console.log("event.origin check:" + event.origin);
    

    if (event.origin !== 'https://aufziehn-frei.de') {
        console.warn("ERROR: event.origin failure");
        
        return;
    }

    console.log("Erfolgreich authentifiziert als aufziehn-frei")

    // Im sessionStorage des GitHub-Domain-Ursprungs speichern:
    //sessionStorage.setItem('meineDaten', JSON.stringify(event.data));
});

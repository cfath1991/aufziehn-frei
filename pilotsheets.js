let textStatus = document.getElementById("textStatus")

console.log("pilotsheet.js");


window.addEventListener('message', (event) => {
    console.log("New message...", event)

    //textStatus.innerText = "Message: " + event.data

    console.log("event.origin check: " + event.origin);
    
    if (event.origin.replace("https://","") != "aufziehn-frei.de") {
        console.warn("ERROR: event.origin failure");
        return
    }

    console.log("Erfolgreich authentifiziert als Aufziehn-frei")

    // Im sessionStorage des GitHub-Domain-Ursprungs speichern:
    //sessionStorage.setItem('meineDaten', JSON.stringify(event.data));
});

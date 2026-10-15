let textStatus = document.getElementById("textStatus")

function run() {
    console.log("run...");

    window.addEventListener('message', (event) => {
        console.log("New message...", event)

        //textStatus.innerText = "Message: " + event.data

        const origin = event.origin.replace("https://", "")

        console.log("origin check: " + origin);

        if (origin != "www.aufziehn-frei.de") {
            console.warn("ERROR: event.origin failure");
            return
        }

        console.log("Erfolgreich authentifiziert als Aufziehn-frei")
        const json = JSON.parse(event.data)
        console.log("JSON", json);
        
    });
}

run()
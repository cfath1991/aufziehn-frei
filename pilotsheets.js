let textStatus = document.getElementById("textStatus")

function run() {
    console.log("run...");

    window.addEventListener('message', (event) => {
        console.log("New message...", event)

        const origin = event.origin.replace("https://", "")

        if (origin != "www.aufziehn-frei.de") {
            console.warn("ERROR: event.origin failure");
            return
        }

        console.log("...erfolgreich authentifiziert")

        const data = JSON.parse(event.data)
        console.log("data", data);
    });
}

run()
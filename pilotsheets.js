window.addEventListener('message', (event) => {
    console.log("New message", event)

    if (event.origin !== 'https://meine-wix-domain.de') return;

    // Im sessionStorage des GitHub-Domain-Ursprungs speichern:
    sessionStorage.setItem('meineDaten', JSON.stringify(event.data));
});
const textStatus = document.getElementById("textStatus")

let data

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

        data = JSON.parse(event.data)
        console.log("data", data);

        createPdf()
    });
}

function createPdf(){
    console.log("createPdf...");

    let doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    })

    let docLineArray = [
        {
            fontSize: 10,
            text: UrlData.company_details.name,
            align: "right",
            lineGap: 4,
            x: xOffsetRight,
            y: null,
        },
        {
            fontSize: 8,
            text: UrlData.company_details.strasse,
            align: "right",
            lineGap: 4,
            x: xOffsetRight,
            y: null,
        },
        {
            fontSize: 8,
            text: UrlData.company_details.plz_ort,
            align: "right",
            lineGap: 4,
            x: xOffsetRight,
            y: null,
        },
        {
            fontSize: 8,
            text: "Tel. " + UrlData.company_details.tel,
            align: "right",
            lineGap: 4,
            x: xOffsetRight,
            y: null,
        },
        {
            fontSize: 8,
            text: UrlData.company_details.email,
            align: "right",
            lineGap: 4,
            x: xOffsetRight,
            y: null,
        },
        {
            fontSize: 6,
            text: UrlData.company_details.name + ", " + UrlData.company_details.strasse + ", " + UrlData.company_details.plz_ort,
            align: null,
            lineGap: 10,
            x: xOffset,
            y: 54,
        },
        {
            fontSize: 6,
            text: "_______________________________________",
            align: null,
            lineGap: 1,
            x: xOffset,
            y: null,
        }]
    
}

run()
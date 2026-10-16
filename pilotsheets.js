const isPublished = false
const testData = ''

const textStatus = document.getElementById("textStatus")

let data
let doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    })
let docLineArray = []

const xOffset = 15
const xOffsetRight = doc.internal.pageSize.width - xOffset
const centerLine = doc.internal.pageSize.width / 2
const first_line = 15
const last_line = doc.internal.pageSize.height - 18

function run() {
    console.log("run...");

    if (!isPublished) {
        console.log("...isTestData");

        data = JSON.parse(testData)
        createPdf()
        return
    }

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
        return
    });
}

function createPdf() {
    console.log("createPdf...");

    if (!Array.isArray(data)) {
        console.log("!isArray(data)");
        data = [data]
        console.log(data);
    }

    data.forEach(d => {
        try {
            createSheet(d)
        } catch (error) {
            console.error(error);
        }
    });

    renderPdf(docLineArray)

    let imgWidth = 40
    //doc.addImage(imgSign, 'JPG', xOffsetRight - imgWidth, 252, imgWidth, 13);
    doc.save("Pilotsheet" + ".pdf", { returnPromise: true })
}

function createSheet(data) {
    console.log("createSheet...");

    docLineArray = [
        {
            fontSize: 20,
            text: "Pilotenblatt",
            align: "center",
            lineGap: null,
            x: xOffset,
            y: null,
        },
        {
            fontSize: 10,
            text: data.temp_contact.first_name.trim() + " " + data.temp_contact.last_name.trim(),
            align: "center",
            lineGap: 6,
            x: xOffset,
            y: null,
        }
    ]
}

run()
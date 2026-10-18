const textStatus = document.getElementById("textStatus")

const isPublished = true

const testData = {
    tour: {
        title: "Testtitle",
        dates_formatted: "01.01.1900 - 99.99.9999"
    },
    booked_by: [
        {
            temp_contact: {
                first_name: "Testname",
                last_name: "Test Nachname",
                birthday_formatted: "01.01.2020",
            },
            temp_pilotsheet: {

                glider: "Gleitschirm einer Firma in Grün (CCC)",
                total_flights: "1000-1500",
                recent_flights: "50-100",
                health_info: "Testname"
            }
        },
        {
            temp_contact: {
                first_name: "Testname",
                last_name: "Test Nachname",
                birthday_formatted: "01.01.2020",
            },
            temp_pilotsheet: {

                glider: "Gleitschirm einer Firma in Grün (CCC)",
                total_flights: "1000-1500",
                recent_flights: "50-100",
                health_info: "Testname"
            }
        },
    ]
}

let data

function run() {
    console.log("[run...]");

    if (!isPublished) {
        createPdf(testData)
    }

    window.addEventListener('message', (event) => {
        console.log("New message...", event)

        const origin = event.origin.replace("https://", "")

        if (origin != "www.aufziehn-frei.de") {
            console.warn("ERROR: event.origin failure");
            return
        }

        console.log("...erfolgreich authentifiziert")
        textStatus.text = "...erfolgreich authentifiziert"

        data = JSON.parse(event.data)
        createPdf(data)
    });
}

function createPdf(data) {
    console.log("[createPdf...]", data);
    textStatus.text = "Erstelle PDF..."

    let pdf = new myPDF("a4", "l")
    pdf.addText(data.tour.title, 25, "center", "bold")
    pdf.addText(data.tour.dates_formatted, 18, "center")

    const table = pdf.table(10, null, null, null, null, [pdf.offsets.left, 108, 180, 250, 400, 480])
    console.log("table", table);

    pdf.setNextLine()
    pdf.blockY()
    pdf.addText("Name", 9, null, "bold", null, null, table[0].cell_x)
    pdf.addText("Nachname", 9, null, "bold", null, null, table[1].cell_x)
    pdf.addText("Geburtstag", 9, null, "bold", null, null, table[2].cell_x)
    pdf.addText("Gleitschirm", 9, null, "bold", null, null, table[3].cell_x)
    pdf.addText("Flugerfahrung", 9, null, "bold", null, null, table[4].cell_x)
    pdf.addText("Sonstiges", 9, null, "bold", null, null, table[5].cell_x)
    pdf.releaseY()
    pdf.setNextLine(null, 0.5)
    pdf.addLine()

    for (let i = 0; i < data.booked_by.length; i++) {
        const person = data.booked_by[i].temp_contact;
        const sheet = data.booked_by[i].temp_pilotsheet;

        pdf.setNextLine()
        pdf.blockY()
        pdf.addText(person.first_name, 8, null, null, null, null, table[0].cell_x, null, table[0].cell_w)
        pdf.addText(person.last_name, 8, null, null, null, null, table[1].cell_x, null, table[1].cell_w)
        pdf.addText(person.birthday_formatted, 8, null, null, null, null, table[2].cell_x, null, table[2].cell_w)
        pdf.addText(sheet?.glider || "", 8, null, null, null, null, table[3].cell_x, null, table[3].cell_w)
        pdf.addText((sheet?.total_flights || "") + "\n(" + (sheet?.recent_flights || "") + ")", 8, null, null, null, null, table[4].cell_x, null, table[4].cell_w)
        pdf.addText(sheet?.health_info || "", 8, null, null, null, null, table[5].cell_x, null, table[5].cell_w)
        pdf.releaseY()
    }
    pdf.addNewPage()
    pdf.addImage("https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png", "png")
    pdf.download("Teilnehmer " + data.tour.title || "Teilnehmerliste")
}

run()
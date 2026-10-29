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
                phone1: "012301230123"
            },
            temp_pilotsheet: {

                glider: "Gleitschirm einer Firma in Grün (CCC)",
                total_flights: "1000-1500",
                recent_flights: "50-100",
                health_info: "Testname: (Nur zur Erklärung: Flugschein  Flugschein wurde zwar 2011 (?wurde zwar 2011 (?) Flugschein wurde zwar 2011 (? abs Flugschein wurde zwar 2011 (?olv Flugschein wurde zwar 2011 (?iert (siehe Datumar 2011 (?) absolviert (siehe Datum im Flugschein), im Flugschein), ich bin abaktiv seit 2026 am Fliegen (Auffrischungskurs w"
            }
        },
        {
            temp_contact: {
                first_name: "Testname",
                last_name: "Test Nachname",
                birthday_formatted: "01.01.2020",
                phone1: "012301230123"
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
    pdf.addImage("https://i.ibb.co/nqX7MygR/Aufziehen-frei.jpg", "jpg", pdf.w - 100, 10, 78, 60)
    pdf.addText(data.tour.title, 25, "center", "bold")
    pdf.addText(data.tour.dates_formatted, 18, "center")


    const table = pdf.getTable(
        ["Nr","Vorname","Nachname","Geb.","Telefonnr.","Gleitschirm","Flüge","Startgw.","Sonstiges"],
        [pdf.offsets.left, 70, 130, 200, 260, 350, 510, 580]
    )
    console.log("table", table);

    pdf.setNextLine()
    pdf.blockY()
    pdf.addText(table[0].name, 9, null, "bold", null, null, table[0].cell_x)
    pdf.addText(table[1].name, 9, null, "bold", null, null, table[1].cell_x)
    pdf.addText(table[2].name, 9, null, "bold", null, null, table[2].cell_x)
    pdf.addText(table[3].name, 9, null, "bold", null, null, table[3].cell_x)
    pdf.addText(table[4].name, 9, null, "bold", null, null, table[4].cell_x)
    pdf.addText(table[5].name, 9, null, "bold", null, null, table[5].cell_x)
    pdf.addText(table[6].name, 9, null, "bold", null, null, table[6].cell_x)
    pdf.addText(table[7].name, 9, null, "bold", null, null, table[7].cell_x)
    pdf.addText(table[8].name, 9, null, "bold", null, null, table[8].cell_x)
    pdf.releaseY()
    pdf.setNextLine(null, 0.5)
    pdf.addLine()

    for (let i = 0; i < data.booked_by.length; i++) {
        const person = data.booked_by[i].temp_contact;
        const sheet = data.booked_by[i].temp_pilotsheet;

        pdf.setNextLine()
        pdf.blockY()
        pdf.addText((i + 1 )+ "", 8, null, null, null, null, table[0].cell_x, null, table[0].cell_w * 0.9)
        pdf.addText(person.first_name, 8, null, null, null, null, table[1].cell_x, null, table[1].cell_w * 0.9)
        pdf.addText(person.last_name, 8, null, null, null, null, table[2].cell_x, null, table[2].cell_w * 0.9)
        pdf.addText(person.birthday_formatted || "", 8, null, null, null, null, table[3].cell_x, null, table[3].cell_w * 0.9)
        pdf.addText(person.phone1 || "", 8, null, null, null, null, table[4].cell_x, null, table[4].cell_w * 0.9)
        pdf.addText(sheet?.glider || "", 8, null, null, null, null, table[5].cell_x, null, table[5].cell_w * 0.9)
        pdf.addText((sheet?.total_flights || "") + "\n" + (sheet?.recent_flights || "") + "", 8, null, null, null, null, table[6].cell_x, null, table[6].cell_w * 0.9)
        pdf.addText(sheet?.takeoff_weight || "", 8, null, null, null, null, table[7].cell_x, null, table[7].cell_w * 0.9)
        pdf.addText(sheet?.health_info || "", 8, null, null, null, null, table[8].cell_x, null, table[8].cell_w * 0.9)
        pdf.releaseY()
    }
    //pdf.addNewPage()
    //pdf.addImage("https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png", "png")
    pdf.download("Teilnehmer " + data.tour.title || "Teilnehmerliste")
}

run()
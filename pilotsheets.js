const textStatus = document.getElementById("textStatus")

let data

function run() {
    console.log("[run...]");

    window.addEventListener('message', (event) => {
        console.log("New message...", event)

        const origin = event.origin.replace("https://", "")

        if (origin != "www.aufziehn-frei.de") {
            console.warn("ERROR: event.origin failure");
            return
        }

        console.log("...erfolgreich authentifiziert")

        data = JSON.parse(event.data)
        createPdf(data)
    });
}

function createPdf(data) {
    console.log("[createPdf...]", data);

    let pdf = new myPDF("a4", "l")
    pdf.addText(data.tour.title, 25, "center", "bold")
    pdf.addText(data.tour.dates_formatted, 18, "center")

    const table = pdf.table(6, null, null, null, null, [pdf.offsets.x, 40, 72, 105, 140, 180])
    console.log("table", table);

    pdf.setNextLine()
    pdf.blockY()
    pdf.addText("Name", null, null, null, null, null, table[0].cell_x)
    pdf.addText("Nachname", null, null, null, null, null, table[1].cell_x)
    pdf.addText("Geburtstag", null, null, null, null, null, table[2].cell_x)
    pdf.addText("Gleitschirm", null, null, null, null, null, table[3].cell_x)
    pdf.addText("Flugerfahrung", null, null, null, null, null, table[4].cell_x)
    pdf.addText("Sonstiges", null, null, null, null, null, table[5].cell_x)
    pdf.releaseY()
    pdf.setNextLine(null, 0.5)
    pdf.addLine()

    for (let i = 0; i < data.booked_by; i++) {
        const person = data.booked_by[i].temp_contact;
        const sheet = data.booked_by[i].temp_pilotsheet;

        pdf.setNextLine()
        pdf.blockY()
        pdf.addText(person.first_name, null, null, null, null, null, table[0].cell_x)
        pdf.addText(person.last_name, null, null, null, null, null, table[1].cell_x)
        pdf.addText(person.birthday_formatted, null, null, null, null, null, table[2].cell_x)
        pdf.addText(sheet?.glider || "", null, null, null, null, null, table[3].cell_x)
        pdf.addText(sheet?.total_flights || "", null, null, null, null, null, table[4].cell_x)
        pdf.addText(sheet?.health_info || "", null, null, null, null, null, table[5].cell_x)
        pdf.releaseY()
    }
    pdf.addNewPage()
    pdf.addImage("https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png", "png")
    pdf.download("testname")
}


run()
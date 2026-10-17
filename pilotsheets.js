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
        createPdf(data)
    });
}

function createPdf(data) {
    console.log("createPdf...", data);

    let pdf = new myPDF("a4", "l")
    pdf.addText(data.temp_tour.title, 25, "center", "bold")
    pdf.addText(data.temp_tour.dates_formatted, 18, "center")

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

    for (let i = 0; i < 11; i++) {
        const d = data[i];
        console.log(d);

        pdf.setNextLine()
        pdf.blockY()
        pdf.addText("Name", null, null, null, null, null, table[0].cell_x)
        pdf.addText("Nachname", null, null, null, null, null, table[1].cell_x)
        pdf.addText("Geburtstag", null, null, null, null, null, table[2].cell_x)
        pdf.addText("Gleitschirm", null, null, null, null, null, table[3].cell_x)
        pdf.addText("Flugerfahrung", null, null, null, null, null, table[4].cell_x)
        pdf.addText("Sonstiges", null, null, null, null, null, table[5].cell_x)
        pdf.releaseY()
    }
    pdf.addNewPage()
    pdf.addImage("https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png", "png")
    pdf.download("testname")
}


run()
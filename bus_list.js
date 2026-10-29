const textStatus = document.getElementById("textStatus")

const isPublished = false

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
                takeoff_weight: "76kg",
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
                phone1: "012301230123"
            },
            temp_pilotsheet: {

                glider: "Gleitschirm einer Firma in Grün (CCC)",
                total_flights: "1000-1500",
                recent_flights: "50-100",
                health_info: "Testname: (Nur zur Erklärung: Flugschein  Flugschein wurde zwar 2011 (?wurde zrung: Flugschein  Flugschein wurde zwar 20rung: Flugschein  Flugschein wurde zwar 20war 2011 (?) Flugschein wurde zwar 2011 (? abs Flugschein wurde zwar 2011 (?olv Flugschein wurde zwar 2011 (?iert (siehe Datumar 2011 (?) absolviert (siehe Datum im Flugschein), im Flugschein), ich bin abaktiv seit 2026 am Fliegen (Auffrischungskurs w"
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
                takeoff_weight: "76kg",
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
                phone1: "012301230123"
            },
            temp_pilotsheet: {

                glider: "Gleitschirm einer Firma in Grün (CCC)",
                total_flights: "1000-1500",
                recent_flights: "50-100",
                health_info: "Testname: (Nur zur Erklärung: Flugschein  Flugschein wurde zwar 2011 (?wurde zwar 2011 (?) Flugschein wurde zwar 2011 (? abs Flugschein wurde zwar 2011 (?olv Flugschein wurung: Flugschein  Flugschein wurde zwar 20rung: Flugschein  Flugschein wurde zwar 20rde zwar 2011 (?iert (siehe Datumar 2011 (?) absolviert (siehe Datum im Flugschein), im Flugschein), ich bin abaktiv seit 2026 am Fliegen (Auffrischungskurs w"
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
                takeoff_weight: "76kg",
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
                takeoff_weight: "76kg",
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
                takeoff_weight: "76kg",
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
                takeoff_weight: "76kg",
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
        ["Nr", "Name", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Zw.Summe", "Hinfahrt", "Rückfahrt", "Total"],
        [pdf.offsets.left, 70, 200, 250, 300, 350, 400, 450, 500, 570, 640, 710]
    )
    console.log("table", table);

    pdf.skipLines()

    pdf.blockY()
    for (let i = 0; i < table.length; i++) {
        pdf.addText(table[i].name, 10, null, "bold", null, null, table[i].cell_x)
    }
    pdf.releaseY()
    
    pdf.addLine()

    const startLine = pdf.getNextLine()

    pdf.skipLines()

    for (let i = 0; i < data.booked_by.length; i++) {
        const person = data.booked_by[i].temp_contact;
        const sheet = data.booked_by[i].temp_pilotsheet;

        let takeoff_weight = ""
        if (sheet?.takeoff_weight) {
            takeoff_weight = sheet?.takeoff_weight.replace("kg", "") + "kg"
        }

        pdf.setNextLine()
        pdf.blockY()
        pdf.addText((i + 1) + "", 10, null, null, null, null, table[0].cell_x, null, table[0].cell_w * 0.9)
        pdf.addText(person.first_name + " " + person.last_name, 10, null, null, null, null, table[1].cell_x, null, table[1].cell_w * 0.9)
        pdf.releaseY()
    }

    const endLine = pdf.getNextLine()
    for (let i = 2; i < table.length; i++) {
        const offset = 5
        pdf.addLine(table[i].cell_x - offset, startLine, table[i].cell_x - offset, endLine)
    }

    pdf.addLine()

    pdf.skipLines(3)

    pdf.addText("Gesamt: ____________________", 15, "right", "bold", null, null, pdf.offsets.right)


    pdf.addLine(null, pdf.offsets.bottom - 16, null, pdf.offsets.bottom - 16)

    const table_prices = pdf.getTable(["","",""])
    pdf.blockY()
    pdf.addInput("Preis Auffahrt:", null, table_prices[0].cell_x, pdf.offsets.bottom)
    pdf.addInput("Preis Hinfahrt:", null, table_prices[1].cell_x,pdf.offsets.bottom)
    pdf.addInput("Preis Rückfahrt:", null, table_prices[2].cell_x,pdf.offsets.bottom)
    pdf.releaseY()

    pdf.download("Busliste " + data.tour.title || "Busliste")
}

run()
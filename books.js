//https://cfath1991.github.io/aufziehn-frei/books.html

const isPublished = true

const FONT = "helvetica"

const text = document.getElementById("text")
const btn = document.getElementById("btn")
const gifWait = document.getElementById("gifWait")

const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true
})

const xOffset = 15
const xOffsetRight = doc.internal.pageSize.width - xOffset
const centerLine = doc.internal.pageSize.width / 2
const first_line = 10
const last_line = doc.internal.pageSize.height - 18

let UrlData
var imgWarten = document.getElementById("imgWarten")
let lineSitelength = "__________________________________________________________________________________________________________"

let dla = []
let header
let bilanz = {}
let journal = []
let konten = []

let GuV

class Text {
    constructor(text, fontSize, fontWeight, align, lineGap, x, y) {
        this.text = text;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight,
            this.align = align;
        this.lineGap = lineGap;
        this.x = x;
        this.y = y;
    }
}

class Konto {
    constructor(skr04, name, slug, betrag, seite) {
        this.name = name
        this.slug = slug
        this.betrag = betrag
        this.seite = seite
        this.skr04 = skr04
    }
}

$(document).ready(function () {
    console.log("...document loaded");
});

function startProgram(){
    console.log("startProgram...");
    decodeURL()
    closeBilanz()
    bilanz = getBilanz()
    console.log("bilanz", bilanz);
    createPdf()

    
}

function decodeURL() {
    console.log("decodeUrl...");

    let qUrl = text.value //window.location.search
    let result = qUrl.split("?data=")[1]

    UrlData = JSON.parse(decodeURIComponent(result))
    console.log(UrlData);
    header = UrlData.header

    journal = UrlData.journal
    konten = UrlData.konten
    GuV = UrlData.GuV
}

function closeBilanz() {
    console.log("closeBilanz...", GuV.saldo);

    let GUV = getKonto("GuV") // GuV erstellen
    let EKP = getKonto("2900") // Eigenkapital um Gewinn / Verlust ergänzen

    const buchung = {
        beschreibung: "Abschlussbuchung GuV",
        betrag: Math.abs(GuV.saldo),
        datum_formatted: header.to_formatted,
        buchungssatz: "...",
        soll_konto: null,
        haben_konto: null
    }

    GUV.betrag = buchung.betrag
    EKP.betrag = buchung.betrag

    if (GuV.saldo > 0) {
        buchung.buchungssatz = "GuV an Eigenkapital"
        buchung.soll_konto = GUV
        buchung.haben_konto = EKP

    } else if (GuV.saldo < 0) {
        buchung.buchungssatz = "Eigenkapital an GuV"
        buchung.soll_konto = EKP
        buchung.haben_konto = GUV

    } else if (GuV.saldo === 0) {
        console.log("Eigenkapital (2900) bleibt identisch")
    } else {
        throw "GuV.saldo Fehler"
    }

    journal.push(buchung)

    // pop() SB des Kontos
    EKP.t_konto.pop()

    update_T_Konten(buchung.soll_konto, buchung.haben_konto)

    EKP.t_konto.push({
        gegenkonto: "SB",
        soll: EKP.saldo,
        haben: null
    })
}

function getKonto(skr04) {
    console.log("getKonto...");

    for (let i = 0; i < konten.length; i++) {
        const konto = konten[i];
        if (konto.skr04 === skr04) {
            return konto
        }
    }
    console.error("ERROR: No konto found for skr04 ", skr04);

}

function getSaldo(konto) {
    //console.log("[getSaldo...]", konto);

    let t_konto = konto.t_konto

    let total_soll = 0.0
    let total_haben = 0.0

    for (let i = 0; i < t_konto.length; i++) {
        const element = t_konto[i];

        if (!element.soll && !element.haben) {
            console.warn("(getSaldo) element hat weder soll noch haben gebucht");
        }

        if (element.soll) {
            total_soll += element.soll
        }

        if (element.haben) {
            total_haben += element.haben
        }
    }

    let saldo = 0

    // AUFWAND && AKTIV ist okay - weil es gleich eingebucht wird
    if (konto.seite === "AKTIV" || konto.seite === "AUFWAND") {
        saldo = total_soll - total_haben
    } else {
        saldo = total_haben - total_soll
    }

    return saldo
}

function update_T_Konten(SOLL, HABEN) {
    //console.log("[update_T_Konten...]", SOLL, HABEN);

    if (!SOLL.t_konto) {
        SOLL.t_konto = []
    }

    if (!HABEN.t_konto) {
        HABEN.t_konto = []
    }


    SOLL.t_konto.push({
        //buchungs_id: SOLL.buchungs_id,
        gegenkonto: HABEN.skr04 + " " + HABEN.slug,
        soll: SOLL.betrag,
        haben: null
    })

    HABEN.t_konto.push({
        //buchungs_id: HABEN.buchungs_id,
        gegenkonto: SOLL.skr04 + " " + SOLL.slug,
        soll: null,
        haben: HABEN.betrag
    })

    SOLL.saldo = getSaldo(SOLL)
    HABEN.saldo = getSaldo(HABEN)

    updateKonto(SOLL)
    updateKonto(HABEN)
}

function updateKonto(KONTO) {
    //console.log("updateKonto...", KONTO);

    for (let i = 0; i < konten.length; i++) {

        if (konten[i].skr04 === KONTO.skr04) {
            konten[i] = KONTO
            return
        }
    }
    console.error("(updateKonto) ERROR: No konto found for skr04 ", KONTO.skr04);
}

function createPdf() {
    console.log("createPdf...");

    addTitlepage()
    addJournal()
    addBilanz()
    addGuV()
    for (let i = 0; i < konten.length; i++) {
        if (konten[i].name != "GuV") {
            addTKonto(konten[i])
        }
    }

    drawToPaper(dla)

    doc.save("buchhaltung.pdf", { returnPromise: true })
    setTimeout(() => {
        imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
        window.close()
    }, 5000);
}

function addTitlepage() {
    console.log("addTitlepage...");

    dla.push(
        new Text("Buchhaltung", 20, "normal", "center", null, xOffset, 100),
        new Text("Flugschule 'Aufzieh'n frei!'", 30, "normal", "center", null, xOffset, null),
        new Text("Zeitraum", 15, "normal", "center", null, xOffset, 150),
        new Text(header.from_formatted + " - " + header.to_formatted, 15, "normal", "center", null, xOffset, null)
    )


}

function addJournal() {
    console.log("addJournal...", journal);

    const column = [xOffset, 24, 44, 64, 76, 90, (xOffsetRight - 15), xOffsetRight]

    dla.push(
        new Text("\p"),
        new Text("Journal", 20, "normal", "center", null, xOffset, null)
    )

    y = 30
    dla.push(
        new Text("Nr", 8, "bold", null, null, column[0], y),
        new Text("Datum", 8, "bold", null, null, column[1], y),
        new Text("Belegnr", 8, "bold", null, null, column[2], y),
        new Text("SOLL", 8, "bold", null, null, column[3], y),
        new Text("HABEN", 8, "bold", null, null, column[4], y),
        new Text("Buchungssatz", 8, "bold", null, null, column[5], y),
        new Text("Betrag", 8, "bold", "right", null, column[6], y),
        new Text("dav. St.", 8, "bold", "right", null, xOffsetRight, y)
    )

    for (let i = 0; i < journal.length; i++) {
        const e = journal[i];
        const fS = 7
        y += 7

        dla.push(
            new Text(i + "", fS, "normal", null, null, column[0], y), // Lfd.Nr
            new Text(e.datum_formatted, fS, "normal", null, null, column[1], y), //Datum
            new Text("ABC-0000", fS, "normal", null, null, column[2], y), //Belegnr
            new Text(e.soll_konto.skr04, fS, "normal", null, null, column[3], y), //Soll
            new Text(e.haben_konto.skr04, fS, "normal", null, null, column[4], y), //Haben
            new Text(wrapText(e.buchungssatz, fS, 190), fS, "normal", null, null, column[5], y), //Buchungssatz
            new Text(e.betrag.toFixed(2) + " €", fS, "normal", "right", null, column[6], y), //Betrag
            e.steuer_konto ? new Text(e.steuer_konto.betrag.toFixed(2) + " €", fS, "normal", "right", null, xOffsetRight, y) : null //dav. Steuer
        )

        if (y >= last_line) {
            dla.push(
                new Text("\p")
            )
            y = first_line
        }
    }
}

function addBilanz() {
    console.log("addBilanz...");

    const gap = 5
    const padding = 40
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 2, xOffsetRight - padding]

    dla.push(
        new Text("\p"),
        new Text("Bilanz", 20, "normal", "center", null, xOffset, null),
        new Text(header.from_formatted + " - " + header.to_formatted, 10, "normal", "center", null, xOffset, null)
    )

    y = 40
    dla.push(
        new Text("Aktiva", 9, "normal", null, null, column_b[0], y),
        new Text("Passiva", 9, "normal", "right", null, column_b[3], y),
    )
    drawLine(column_b[0], 42, column_b[3], 42) // vertical Line

    y = 50
    for (let i = 0; i < bilanz.aktiva.length; i++) {
        const konto = bilanz.aktiva[i];
        //if (konto.saldo < 0.01) { continue }

        dla.push(
            new Text(konto.name, 10, "normal", null, null, column_b[0], y),
            new Text(konto.saldo.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], y),
        )
        y += gap
    }

    const last_line = y
    drawLine(centerLine, 42, centerLine, y) // Mittellinie
    drawLine(column_b[0], last_line, centerLine, last_line) // Schlusslinie

    y = 50
    for (let i = 0; i < bilanz.passiva.length; i++) {
        const konto = bilanz.passiva[i];
        //if (konto.saldo < 0.01) { continue }

        dla.push(
            new Text(konto.saldo.toFixed(2) + " €", 10, "normal", null, null, column_b[2], y),
            new Text(konto.name, 10, "normal", "right", null, column_b[3], y)
        )
        y += gap
    }

    const width = column_b[3] - centerLine
    drawNose("RECHTS", last_line, y, width)

    dla.push(
        new Text(bilanz.total_active.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(bilanz.total_passive.toFixed(2) + " €", 10, "normal", null, null, column_b[2], last_line + gap)
    )

}

function addGuV() {
    console.log("addGuV...");
    addTKonto(GuV)
}

function addTKonto(konto) {
    console.log("addTKonto...", konto);

    if (konto.seite != "AKTIV" && konto.seite != "PASSIV" && konto.slug != "GuV") {
        console.log("not GuV, not AKTIV or PASSIV");
        return
    }

    if (!konto.t_konto) {
        return
    }

    const gap = 5
    const padding = 40
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 2, xOffsetRight - padding]
    let last_line = first_line

    dla.push(
        new Text("\p"),
        new Text(konto.name, 16, "normal", "center", null, xOffset, null),
        new Text("SKR04: " + konto.skr04, 12, "normal", "center", null, xOffset, null)
    )

    y = 40
    dla.push(
        new Text("Soll", 9, "normal", null, null, column_b[0], y),
        new Text("Haben", 9, "normal", "right", null, column_b[3], y),
    )
    drawLine(column_b[0], 42, column_b[3], 42) // vertical Line

    let total_soll = 0

    y = 50
    for (let i = 0; i < konto.t_konto.length; i++) {
        const element = konto.t_konto[i];
        const soll = parseFloat(element.soll)

        if (soll > 0) {
            total_soll += soll
            dla.push(
                new Text(element.gegenkonto, 10, "normal", null, null, column_b[0], y),
                new Text(soll.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], y),
            )
            y += gap
        }
    }

    last_line = y

    let total_haben = 0

    y = 50
    for (let i = 0; i < konto.t_konto.length; i++) {
        const element = konto.t_konto[i];
        const haben = parseFloat(element.haben)

        if (haben > 0) {
            total_haben += haben
            dla.push(
                new Text(haben.toFixed(2) + " €", 10, "normal", null, null, column_b[2], y),
                new Text(element.gegenkonto, 10, "normal", "right", null, column_b[3], y),
            )
            y += gap
        }
    }

    const width = column_b[3] - centerLine

    if (y > last_line) {
        // Haben ist länger

        drawLine(centerLine, y, column_b[3], y) // Schlusslinie Haben
        drawNose("LINKS", y, last_line, width)
        last_line = y

    } else if (y < last_line) {
        // Soll ist länger

        drawLine(column_b[0], last_line, centerLine, last_line) // Schlusslinie Soll
        drawNose("RECHTS", last_line, y, width)

    } else {
        console.log("Doppellinie");
        drawLine(column_b[0], last_line, column_b[3], last_line) // Doppelte Schlusslinie
        drawLine(column_b[0], last_line + 1, column_b[3], last_line + 1) // Doppelte Schlusslinie
    }

    drawLine(centerLine, 42, centerLine, last_line) // Mittellinie

    dla.push(
        new Text(total_soll.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(total_soll.toFixed(2) + " €", 10, "normal", null, null, column_b[2], last_line + gap)
    )

}

function drawNose(site, lower_line, upper_line, width) {
    //console.log("drawNose...", site);

    if (site === "LINKS") {
        drawLine(centerLine - 15, lower_line, centerLine, lower_line)
        drawLine(centerLine - 15, lower_line, centerLine - width + 10, upper_line)
        drawLine(centerLine - width + 10, upper_line, centerLine - width, upper_line)

    } else if (site === "RECHTS") {
        drawLine(centerLine, lower_line, centerLine + 15, lower_line)
        drawLine(centerLine + 15, lower_line, centerLine + width - 10, upper_line)
        drawLine(centerLine + width - 10, upper_line, centerLine + width, upper_line)
    } else {
        throw "No site provided AKTIVE || PASSIVE"
    }

}

function drawLine(xS, yS, xE, yE) {
    //console.log("drawLine...");

    const line = { xS: xS, yS: yS, xE: xE, yE: yE }
    dla.push(new Text("line=" + JSON.stringify(line)))

}

function getBilanz() {
    console.log("getBilanz...");

    const bilanz = {
        aktiva: [],
        passiva: []
    }

    let total_active = 0
    let total_passive = 0

    for (let i = 0; i < konten.length; i++) {
        const konto = konten[i];
        console.log("konto", konto);

        if (!konto.saldo) {
            continue;
        }
        if (konto.seite === "AKTIV") {
            bilanz.aktiva.push({
                name: konto.skr04 + " " + konto.slug,
                saldo: konto.saldo
            })
            total_active += konto.saldo
        }

        if (konto.seite === "PASSIV") {
            bilanz.passiva.push({
                name: konto.slug + " " + konto.skr04,
                saldo: konto.saldo
            })
            total_passive += konto.saldo
        }
    }

    bilanz.total_active = total_active
    bilanz.total_passive = total_passive

    return bilanz
}

function drawToPaper(dla) {
    console.log("drawToPaper...", dla);

    try {

        let y = first_line

        for (let i = 0; i < dla.length; i++) {

            if (!dla[i]) {
                continue;
            }
            const element = dla[i];

            if (!element.text) {
                continue
            }

            if (element.text.startsWith("line")) {
                const line = JSON.parse(element.text.replace("line=", ""))
                doc.line(line.xS, line.yS, line.xE, line.yE);
                continue
            }

            if (element.text === "\p") {
                doc.addPage();
                y = 10
                continue;
            }

            if (element.text != null && element.text != "") {
                let x = element.x
                let lineGap = element.lineGap ? element.lineGap : element.fontSize * 0.5

                doc.setFont(FONT, element.fontWeight)
                doc.setFontSize(element.fontSize)

                if (element.align === "center") {
                    x = (doc.internal.pageSize.width / 2)
                }

                if (element.y === null) {
                    y += lineGap
                } else {
                    y = element.y
                }

                doc.text(element.text, x, y, element.align)
            }
        }

    } catch (error) {
        console.error(error);

    }
}

function wrapText(text, fontsize, maxWidth) {
    //console.log("wrapText...", text);
    //console.log("maxWidth: " + maxWidth);

    try {
        let breakLines = text.split("\n")
        let words
        let wrappedText = ""

        for (let i = 0; i < breakLines.length; i++) {
            const breakLine = breakLines[i];
            words = breakLine.split(" ")
            let tempLine = ""

            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                if (tempLine === "") {
                    tempLine = word
                } else {
                    tempLine = tempLine + " " + word
                }

                let textWidth = getTextWidth(tempLine, fontsize)
                //console.log(textWidth + " VS " + maxWidth);
                //console.log("");

                if (textWidth >= maxWidth) {
                    wrappedText += "\n" + tempLine
                    tempLine = ""
                }
            }

            wrappedText += "\n" + tempLine
        }



        //console.log("********** wrappedText:");
        //console.log(wrappedText);
        return wrappedText.slice(1)

    } catch (error) {
        return "ERROR"
    }
}

function getTextWidth(inputText, fontSize) {
    //console.log("getTextWidth...");
    let font = fontSize + "px arial";

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = font;
    let width = context.measureText(inputText).width;
    let formattedWidth = Math.ceil(width);
    return formattedWidth
}

btn.addEventListener('click', () => {
    console.log(text.value);

    if(text.value.trim().length === 0){
        console.warn("No text passed");
        text.style.borderColor = "red"
        return
    }

    text.style.display = "none"
    btn.style.display = "none"
    gifWait.style.width = "100px"
    
    startProgram()
  });

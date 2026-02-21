//https://cfath1991.github.io/aufziehn-frei/books.html

const isPublished = true

const FONT = "helvetica"
const errorImg = "data:image/png;base64,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"

const testURL = ""
    
const text = document.getElementById("text")
const btn = document.getElementById("btn")
const gifWait = document.getElementById("gifWait")
const textProgress = document.getElementById("textProgress")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

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

let errorCount

let UrlData
var imgWarten = document.getElementById("imgWarten")
let lineSitelength = "__________________________________________________________________________________________________________"

let lineArray = []
let header
let bilanz = {}
let journal = []
let konten = []
let belege = []

let GuV

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
    if (!isPublished) {
        startProgram()
    }
});

function startProgram() {
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

    if (!isPublished) { qUrl = testURL }

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

    let EKP = getKonto("2900") // Eigenkapital um Gewinn / Verlust ergänzen

    const buchung = {
        beschreibung: "Abschlussbuchung GuV",
        betrag: Math.abs(GuV.saldo),
        datum_formatted: header.to_formatted,
        buchungssatz: "...",
        soll_konto: null,
        haben_konto: null
    }

    GuV.betrag = buchung.betrag
    EKP.betrag = buchung.betrag

    if (GuV.saldo > 0) {
        buchung.buchungssatz = "GuV an Eigenkapital"
        buchung.soll_konto = GuV
        buchung.haben_konto = EKP

    } else if (GuV.saldo < 0) {
        buchung.buchungssatz = "Eigenkapital an GuV"
        buchung.soll_konto = EKP
        buchung.haben_konto = GuV

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

    GuV.t_konto.push({
        gegenkonto: "SB",
        soll: GuV.saldo,
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
    console.log("[update_T_Konten...]", SOLL, HABEN);

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

async function createPdf() {
    console.log("createPdf...");

    await addTitlepage()
    await addJournal()
    await addBilanz()
    await addGuV()
    
    for (let i = 0; i < konten.length; i++) {
        if (konten[i].name != "GuV") {
            addTKonto(konten[i])
        }
    }

    await renderPdf(lineArray)
    await addBelege()

    await doc.save("buchhaltung.pdf", { returnPromise: true })
    setTimeout(() => {
        imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
        window.close()
    }, 5000);
}

function addTitlepage() {
    console.log("addTitlepage...");

    lineArray.push(
        new Text("Buchhaltung", 20, "normal", "center", null, xOffset, 100),
        new Text("Flugschule 'Aufzieh'n frei!'", 30, "normal", "center", null, xOffset, null),
        new Text("Zeitraum", 15, "normal", "center", null, xOffset, 150),
        new Text(header.from_formatted + " - " + header.to_formatted, 15, "normal", "center", null, xOffset, null)
    )
}

function addJournal() {
    console.log("addJournal...", journal);

    const column = [xOffset, 24, 44, 64, 76, 90, (xOffsetRight - 15), xOffsetRight]

    lineArray.push(
        new Text("\p"),
        new Text("Journal", 20, "normal", "center", null, xOffset, null)
    )

    y = 30
    lineArray.push(
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
        const beleg = e.beleg

        if (beleg) {
            belege.push(beleg)
        }

        const fS = 7
        y += 7

        lineArray.push(
            new Text(i + "", fS, "normal", null, null, column[0], y), // Lfd.Nr
            new Text(e.datum_formatted, fS, "normal", null, null, column[1], y), //Datum
            new Text(beleg ? beleg.nr : "", fS, "normal", null, null, column[2], y), //Belegnr
            new Text(e.soll_konto.skr04, fS, "normal", null, null, column[3], y), //Soll
            new Text(e.haben_konto.skr04, fS, "normal", null, null, column[4], y), //Haben
            new Text(wrapText(e.buchungssatz, fS, 190), fS, "normal", null, null, column[5], y), //Buchungssatz
            new Text(e.betrag.toFixed(2) + " €", fS, "normal", "right", null, column[6], y), //Betrag
            e.steuer_konto ? new Text(e.steuer_konto.betrag.toFixed(2) + " €", fS, "normal", "right", null, xOffsetRight, y) : null //dav. Steuer
        )

        if (y >= last_line) {
            lineArray.push(
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
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 20, xOffsetRight - padding]

    lineArray.push(
        new Text("\p"),
        new Text("Bilanz", 20, "normal", "center", null, xOffset, null),
        new Text(header.from_formatted + " - " + header.to_formatted, 10, "normal", "center", null, xOffset, null)
    )

    y = 40
    lineArray.push(
        new Text("Aktiva", 9, "normal", null, null, column_b[0], y),
        new Text("Passiva", 9, "normal", "right", null, column_b[3], y),
    )
    drawLine(column_b[0], 42, column_b[3], 42) // vertical Line

    y = 50
    for (let i = 0; i < bilanz.aktiva.length; i++) {
        const konto = bilanz.aktiva[i];

        lineArray.push(
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

        lineArray.push(
            new Text(konto.saldo.toFixed(2) + " €", 10, "normal", "right", null, column_b[2], y),
            new Text(konto.name, 10, "normal", "right", null, column_b[3], y)
        )
        y += gap
    }

    const width = column_b[3] - centerLine
    drawNose("RECHTS", last_line, y, width)

    lineArray.push(
        new Text(bilanz.total_active.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(bilanz.total_passive.toFixed(2) + " €", 10, "normal", "right", null, column_b[2], last_line + gap)
    )

}

function addGuV() {
    console.log("addGuV...", GuV);
    addTKonto(GuV)
}

function addTKonto(konto) {
    //console.log("addTKonto...", konto);

    if (konto.seite != "AKTIV" && konto.seite != "PASSIV" && konto.slug != "GuV") {
        //console.log("not GuV, not AKTIV or PASSIV");
        return
    }

    if (!konto.t_konto) {
        return
    }

    const gap = 5
    const padding = 40
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 20, xOffsetRight - padding]
    let last_line = first_line

    lineArray.push(
        new Text("\p"),
        new Text(konto.name, 16, "normal", "center", null, xOffset, null),
        new Text("SKR04: " + konto.skr04, 12, "normal", "center", null, xOffset, null)
    )

    y = 40
    lineArray.push(
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
            lineArray.push(
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
            lineArray.push(
                new Text(haben.toFixed(2) + " €", 10, "normal", "right", null, column_b[2], y),
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

    lineArray.push(
        new Text(total_soll.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(total_soll.toFixed(2) + " €", 10, "normal", "right", null, column_b[2], last_line + gap)
    )
}

async function addBelege() {
    console.log("addBelege...");

    for (let i = 0; i < belege.length; i++) {
        const beleg = belege[i];
        console.log("beleg", beleg);
        
        textProgress.innerHTML = "Belege werden geladen (" + (i + 1) + "/" + belege.length + ")"
        if (errorCount > 0) {
            textProgress.innerHTML = "Belege werden geladen (" + (i + 1) + "/" + belege.length + ")" + "\n" + " - Fehlerhafter Download: " + errorCount
        }

        try {
            if (beleg.imgs && beleg.imgs.length > 0) {

                for (let j = 0; j < beleg.imgs.length; j++) {
                    const r = extractUrl(beleg.imgs[j].src, "img")
                    const imgUrl = r.imgUrl
                    const fileExt = r.fileExt

                    console.log("imgUrl", imgUrl);

                    //TODO: Timer falls nicht geladen
                    doc.addPage();
                    doc.text("Beleg: " + beleg.nr + " (" + (j + 1) + "/" + beleg.imgs.length + ")", centerLine, 8, "center")
                    await doc.addImage(imgUrl, fileExt, xOffset, xOffset, 100, 100);
                }
            }

        } catch (error) {
            console.error(error);
        }

        if (beleg.pdfs && beleg.pdfs.length > 0) {
            for (let j = 0; j < beleg.pdfs.length; j++) {
                const pdfUrl = await extractUrl(beleg.pdfs[j].src, "pdf")
                const dataurls = await getCanvasDataUrl(pdfUrl)

                for (let k = 0; k < dataurls.length; k++) {
                    const dataUrl = dataurls[k];
                    //TODO: Timer falls nicht geladen
                    doc.addPage();
                    doc.text("Beleg: " + beleg.nr + " (" + (j + 1) + "/" + beleg.pdfs.length + ")", centerLine, 8, "center")
                    await doc.addImage(dataUrl, "JPEG", 10, 10, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10);
                }
            }
        }
    }
}

async function getCanvasDataUrl(url) {
    console.log("getCanvasDataUrl...", url);

    let doc = await pdfjsLib.getDocument(url).promise
    const minPage = 1
    const maxPage = doc._pdfInfo.numPages;
    console.log("    numberOfPages:" + maxPage);

    let dataUrls = []

    for (let i = 1; i <= maxPage; i++) {
        const currentPage = i

        const page = await doc.getPage(currentPage)
        const viewport = await page.getViewport({ scale: 3 })

        canvas.height = viewport.height
        canvas.width = viewport.width
        let renderOptions = {
            canvasContext: ctx,
            viewport: viewport
        }
        await page.render(renderOptions).promise

        dataUrls.push(await canvas.toDataURL("image/jpeg"))
    }
    return dataUrls
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
    lineArray.push(new Text("line=" + JSON.stringify(line)))

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
        //console.log("konto", konto);

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

btn.addEventListener('click', () => {
    console.log(text.value);

    if (text.value.trim().length === 0) {
        console.warn("No text passed");
        text.style.borderColor = "red"
        return
    }

    text.style.display = "none"
    btn.style.display = "none"
    gifWait.style.width = "100px"
    textProgress.style.display = "flex"

    startProgram()
});

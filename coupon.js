const isPublished = true

const imgBackground = "https://static.wixstatic.com/media/6c76f1_c61fed2f744342a183bc11d6a34c88a5~mv2.jpg"
const FONT_FAMILY = "helvetica"

let UrlData
var imgWarten = document.getElementById("imgWarten")
let lineSitelength = "__________________________________________________________________________________________________________"

$(document).ready(function () {
    console.log("document loaded");
    decodeURL()
    createPdf()
});

function decodeURL() {
    console.log("decodeUrl...");
    let qUrl = window.location.search

    let result = qUrl.split("?data=")[1]
    console.log(result)
    UrlData = JSON.parse(decodeURIComponent(result))
    console.log(UrlData);
}

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // required for canvas usage
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

async function createPdf() {
    console.log("createPdf...");

    let doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    })

    let xOffset = 22
    let xOffsetRight = doc.internal.pageSize.width - xOffset

    const background = await loadImage(imgBackground);
    await doc.addImage(background, 'JPG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

    const logo = await loadImage(UrlData.company_details.logo_bunt);
    const logo_file = UrlData.company_details.logo_bunt.split(".")
    let logo_file_ext = logo_file[logo_file.length - 1].toUpperCase()
    console.log("logo_file_ext",logo_file_ext);
    
    const logoWidth = 60;
    const logoHeight = logoWidth * (logo.height / logo.width);

    console.log("logoHeight", logoHeight);

    await doc.addImage(logo, logo_file_ext, xOffsetRight - logoWidth + 5, 10, logoWidth, logoHeight);

    let docLineArray = []

    docLineArray.push(
        {
            fontSize: 58,
            text: "Gutschein",
            fontWeight: "bold",
            align: "center",
            lineGap: 0,
            x: xOffset,
            y: 94,
        },
        {
            fontSize: 22,
            text: "Einlösbar bei deiner nächsten Buchung",
            fontWeight: "normal",
            align: "center",
            lineGap: 0,
            x: xOffset,
            y: 106,
        },
        {
            fontSize: 44,
            text: UrlData.code,
            fontWeight: "normal",
            align: "center",
            lineGap: 0,
            x: xOffset,
            y: 154,
        },
    )

    if (UrlData.type === "amount") {
        docLineArray.push(
            {
                fontSize: 58,
                text: UrlData.amount.toFixed(2) + "€",
                fontWeight: "bold",
                align: "center",
                lineGap: 0,
                x: xOffset,
                y: 208,
            },
        )
    }

    if (UrlData.type === "percentage") {
        docLineArray.push(
            {
                fontSize: 58,
                text: (UrlData.percentage * 100).toFixed(0) + "%",
                fontWeight: "bold",
                align: "center",
                lineGap: 0,
                x: xOffset,
                y: 208,
            },
        )
    }

    docLineArray.push(
        {
            fontSize: 22,
            text: "(gültig bis " + UrlData.valid_till_formatted + ")",
            fontWeight: "italic",
            align: "center",
            lineGap: 0,
            x: xOffset,
            y: 220,
        },
        {
            fontSize: 18,
            text: UrlData.company_details.website,
            fontWeight: "bold",
            align: "center",
            lineGap: 0,
            x: xOffset,
            y: doc.internal.pageSize.height - 16,
        },
    )

    let y = 10 // erste Zeile
    for (let i = 0; i < docLineArray.length; i++) {
        const element = docLineArray[i];
        if (element.text != null && element.text != "") {
            doc.setFontSize(element.fontSize)
            doc.setFont(FONT_FAMILY, element.fontWeight)

            let x = element.x
            if (element.align === "center") {
                x = (doc.internal.pageSize.width / 2)
            }

            if (element.y === null) {
                y += element.lineGap
            } else {
                y = element.y
            }

            doc.text(element.text, x, y, element.align)
        }
    }

    doc.save("Aufziehn_frei_Gutschein.pdf", { returnPromise: true })
    setTimeout(() => {
        imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
        window.close()
    }, 5000);
}

function wrapText(text, fontsize, maxWidth) {
    console.log("wrapText...", text);
    console.log("maxWidth: " + maxWidth);

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
                console.log(textWidth + " VS " + maxWidth);
                console.log("");

                if (textWidth >= maxWidth) {
                    wrappedText = wrappedText + "\n" + tempLine
                    tempLine = ""
                }
            }
            wrappedText = wrappedText + "\n" + tempLine
        }

        console.log("********** wrappedText:");
        console.log(wrappedText);
        return wrappedText

    } catch (error) {
        return ""
    }
}

function getTextWidth(inputText, fontSize) {
    console.log("getTextWidth...");
    let font = fontSize + "px arial";

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = font;
    let width = context.measureText(inputText).width;
    let formattedWidth = Math.ceil(width);
    return formattedWidth
}

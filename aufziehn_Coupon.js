const isPublished = false

const testURL = "http://pfgenerator.classic-brass.de/AufziehnFrei/aufziehn_Coupon.html?data=%7B%22history%22%3A%5B%5D%2C%22valid_till%22%3A%222027-01-18T18%3A05%3A54.315Z%22%2C%22_id%22%3A%22f675b5d1-acc3-44d9-b2f8-00c6d37df05f%22%2C%22_owner%22%3A%226c76f11b-095f-405d-a85e-109945f4d566%22%2C%22_createdDate%22%3A%222026-01-17T18%3A05%3A54.791Z%22%2C%22usable_by%22%3A%5B%2261827d08-6f1c-4212-a551-53503bcbacbd%22%5D%2C%22valid_from_formatted%22%3A%2217.01.2026%22%2C%22_updatedDate%22%3A%222026-01-17T18%3A05%3A54.791Z%22%2C%22valid_till_formatted%22%3A%2218.01.2027%22%2C%22amount%22%3A15%2C%22code%22%3A%22WBXN-XVU1%22%2C%22valid_from%22%3A%222026-01-17T18%3A05%3A54.315Z%22%2C%22max_use_count%22%3A1%2C%22type%22%3A%22amount%22%2C%22company_details%22%3A%7B%22website%22%3A%22www.aufziehn-frei.de%22%2C%22name%22%3A%22Flugschule%20Aufzieh%27n%20frei!%22%2C%22tel%22%3A%220155%20%2F%2065%2080%2070%2055%22%2C%22logo_bunt%22%3A%22https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F6c76f1_3f5973ff4f18417ba7868fe0943242ec~mv2.png%22%2C%22email%22%3A%22FS-Emailadresse%40web.de%22%2C%22_id%22%3A%2279c8447f-6f91-4560-8587-ff9bcbf7940c%22%2C%22_owner%22%3A%226c76f11b-095f-405d-a85e-109945f4d566%22%2C%22_createdDate%22%3A%222026-01-15T17%3A51%3A42.240Z%22%2C%22steuernummer%22%3A%22000%200000%200000%200000%22%2C%22bic%22%3A%22XX%20XXXX%20XXX%22%2C%22plz_ort%22%3A%2283674%20Gaißach%22%2C%22_updatedDate%22%3A%222026-01-17T18%3A01%3A23.467Z%22%2C%22unterzeichnetVon%22%3A%22Christian%20Fath%20%26%20Tobias%20Weller%22%2C%22steuer_id%22%3A%22000%2000%2000%20000%22%2C%22strasse%22%3A%22Anger%201%22%2C%22iban%22%3A%22XX00%200000%200000%200000%200000%22%7D%7D"

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

    if (!isPublished) { qUrl = testURL }

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
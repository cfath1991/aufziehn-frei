
function wrapText(text, fontsize, maxWidth) {
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

                if (textWidth >= maxWidth) {
                    wrappedText += "\n" + tempLine
                    tempLine = ""
                }
            }

            wrappedText += "\n" + tempLine
        }

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

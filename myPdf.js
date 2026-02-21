
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

function renderPdf(lineArray) {
    console.log("renderPdf...", lineArray);

    try {
        let y = first_line
        for (let i = 0; i < lineArray.length; i++) {

            if (!lineArray[i]) {
                continue;
            }
            //console.log(lineArray[i])
            const element = lineArray[i];

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

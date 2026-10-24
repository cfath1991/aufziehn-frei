const url_error_img = "https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png"
const urL_missing_img = "https://i.ibb.co/XxzGWX5N/missing-img.png"

class myPDF {
  constructor(format, orientation) {
    this.jsPdf = new jsPDF({
      orientation: orientation,
      unit: 'pt', //'mm',
      format: format.toLowerCase() + "",
      putOnlyUsedFonts: true
    })
    this.w = this.jsPdf.internal.pageSize.width
    this.h = this.jsPdf.internal.pageSize.height
    this.dla = []
    this.white_border = 50
    this.offsets = {
      top: this.white_border,
      bottom: this.h - this.white_border,
      left: this.white_border,
      right: this.w - this.white_border
    }
    this.current_y = this.offsets.top
    this.nextLine = this.offsets.top
    this.lineGap = 0
    this.isFixedY = false
    this.cache = {
      linecount: 0,
      x: 0,
      y: 0
    }
    this.font = {
      family: "Arial",
      weight: "normal",
      size: 10
    }
  }

  saveCurrentY() {
    console.log("[myPdfMaker] saveCurrentY()", this.current_y);
    this.cache.y = this.current_y
    return this.cache.y
  }

  restoreCurrentY() {
    this.nextLine = this.cache.y
    this.current_y = this.nextLine
    return this.cache.y
  }

  addText(text, fontSize, align, fontWeight, fontFamily, lineGap, x, y, max_length) {
    //console.log("[myPdfMaker.js] addText()", text);

    if (!text) {
      return
    }
    if (!fontSize) {
      fontSize =  this.font.size
    }
    if (!fontWeight) {
      fontWeight = "normal"
    }
    if (!fontFamily) {
      fontFamily = this.font.family
    }
    if (!align) {
      align = "left"
    }
    if (!lineGap) {
      lineGap = this.lineGap
    }
    if (!x) {
      x = this.offsets.left
    }
    if (!y) {
      y = this.nextLine
    }
    if (y === 0) {
      y = this.offsets.top
    }
    if (max_length) {
      try {
        text = wrapText(text, fontSize, max_length, fontFamily, fontWeight)
      } catch (error) {
        console.error(error);
      }
    }

    this.dla.push({
      type: "text",
      text: text,
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontFamily: fontFamily,
      align: align.toLowerCase(),
      lineGap: lineGap,
      x: x,
      y: y
    })

    this.current_y = y

    this.jsPdf.setFont(fontFamily, fontWeight)
    this.jsPdf.setFontSize(fontSize)

    const lineHeight = this.jsPdf.getLineHeight() / this.jsPdf.internal.scaleFactor
    const textLines = text.split("\n").length

    if (this.isFixedY) {
      if (this.cache.linecount < textLines) {
        this.cache.linecount = textLines
        this.cache.y = this.nextLine + (lineHeight * textLines)
      }
      return
    }

    this.nextLine += lineHeight * textLines + this.lineGap
  }

  addLine(xStart, yStart, xEnd, yEnd) {
    if (!xStart) {
      console.warn("(addLine) no xStart provided");

      xStart = this.offsets.left
    }
    if (!yStart) {
      console.warn("(addLine) no yStart provided");
      yStart = this.nextLine
    }
    if (!xEnd) {
      console.warn("(addLine) no xEnd provided");
      xEnd = this.offsets.right
    }
    if (!yEnd) {
      console.warn("(addLine) no yEnd provided");
      yEnd = this.nextLine
    }

    this.current_y = yStart

    this.dla.push({
      type: "line",
      value: {
        xStart: xStart,
        yStart: yStart,
        xEnd: xEnd,
        yEnd: yEnd
      }
    })
  }

  addNewPage() {
    this.dla.push({
      type: "newPage"
    })

    this.nextLine = this.offsets.top
  }

  addImage(imgUrl, fileExt, x, y, w, h) {
    if (!imgUrl) {
      console.warn("(addImage) ...no imgUrl provided");
      imgUrl = urL_missing_img
    }

    const orig_ext = imgUrl.split(".")[imgUrl.split(".").length - 1]
    if (orig_ext.toLowerCase() != "png"
      && orig_ext.toLowerCase() != "jpeg"
      && orig_ext.toLowerCase() != "jpg") {
      console.error("[myPdfMaker] addImage() provided image must be type of png, jpeg or jpg. found instead: ", orig_ext);
    }

    if (!fileExt) {
      console.warn("(addImage) ...no fileExt provided");
      fileExt = "PNG"
    }

    if (!x) {
      console.warn("(addImage) ...no x provided");
      x = this.offsets.left
    }
    if (!y) {
      console.warn("(addImage) ...no y provided");
      y = this.nextLine + 1
    }
    if (!w) {
      console.warn("(addImage) ...no w provided");
      w = 100
    }
    if (!h) {
      console.warn("(addImage) ...no h provided");
      h = 100
    }

    this.current_y = y + h

    this.dla.push({
      type: "image",
      value: {
        imgUrl: imgUrl.replace(/\.[^./]+$/, ""), // drops the very last .ext ending of that url
        fileExt: fileExt.replace(".", ""),
        x: x,
        y: y,
        w: w,
        h: h
      }
    })
  }

  addInput(label, value, x, y, w, fontSize, line_count) {
    const tmp_lg = this.lineGap
    this.lineGap = 1

    if (!label) {
      label = "label"
    }

    if (!x) {
      x = this.offsets.left
    }

    if (!y) {
      y = this.nextLine
    }

    if (!w) {
      w = 150
    }

    if (!fontSize) {
      fontSize = this.font.size
    }

    if (!line_count) {
      line_count = 1
    }

    if (value) {
      value = wrapText(value, fontSize, w * 0.95, this.fontFamily, this.fontWeight)
    } else {
      value = ""
    }

    this.addText(label, fontSize, "left", "bold", null, null, x, y)

    const text_arr = value.split("\n")

    const offset_y = fontSize + 4
    for (let i = 0; i < line_count; i++) {
      this.addText(text_arr[i] || "  ", fontSize, "left", null, null, null, x, this.current_y + offset_y)
      this.addLine(x, this.current_y + 4, x + w, this.current_y + 4)

    }
    this.lineGap = tmp_lg

    if (!this.isFixedY) {
      this.setNextLine(this.current_y + offset_y)
    }
  }

  addCheckbox(label, isChecked, x, y, w, h, fontSize) {
    console.log("addCheckbox...");

    const start_y = this.nextLine

    if (!x) {
      x = this.offsets.left
    }
    if (!y) {
      y = this.nextLine
    }
    if (!fontSize) {
      fontSize =  this.font.size
    }
    if (!w) {
      w = this.w - this.white_border * 2 - x
    }

    this.dla.push({
      type: "checkbox",
      value: {
        x: x,
        y: y,
        w: fontSize * 0.7,
        h: fontSize * 0.7,
        isChecked: isChecked
      }
    })

    this.addText(label, fontSize, "left", "bold", null, null, x + fontSize * 2, y + fontSize * 0.6, w * 0.9)

    if (h) {
      this.setNextLine(start_y + h)
    }
  }

  blockY() {
    //console.log("[blockY...]");
    this.isFixedY = true
  }

  releaseY() {
    //console.log("[releaseY...]");

    this.isFixedY = false
    this.nextLine = this.cache.y
    this.cache.linecount = 0
  }

  skipLines(count) {
    if (!count) {
      count = 1
    }

    const value = this.nextLine + ((this.jsPdf.getLineHeight() / this.jsPdf.internal.scaleFactor) * count);
    this.nextLine = Math.floor(value)
  }

  setNextLine(value, scaleFactor) {
    if (value && scaleFactor) {
      console.error("only value or scalefactor can be chosen");
      scaleFactor = 1
    }

    if (!scaleFactor) {
      scaleFactor = 1
    }

    if (!value) {
      value = this.nextLine + (this.jsPdf.getLineHeight() / this.jsPdf.internal.scaleFactor) * scaleFactor;
    }

    this.nextLine = Math.floor(value)
  }

  setLineGap(value) {
    if (!value) {
      console.warn("[myPdfMaker] myPdf setLineGap() no value provided")
      value = 0
    }
    this.lineGap = value
  }

  getNextLine() {
    return this.nextLine
  }

  getTable(name_array, spacing, x, y, w, h) {
    if (!name_array || !Array.isArray(name_array)) {
      console.warn("[myPdfMaker] getTable() No name_array provided");
      name_array = []
    }
    const cell_count = name_array.length
    if (!x) {
      x = this.offsets.left
    }
    if (!y) {
      y = this.nextLine
    }
    if (!w) {
      w = this.w - this.white_border * 2
    }
    if (!h) {
      h = this.h
    }

    const r = []

    if (spacing) {
      for (let i = 0; i < spacing.length; i++) {
        const cell_w = (spacing[i + 1] - spacing[i]) || (w - spacing[i])
        r.push({
          name: name_array[i] || "title",
          cell_x: spacing[i],
          cell_y: y,
          cell_w: cell_w
        })
      }
    } else {
      const cell_w = w / cell_count
      for (let i = 0; i < cell_count; i++) {
        r.push({
          name: name_array[i] || "title",
          cell_x: x + i * cell_w,
          cell_y: y,
          cell_w: cell_w
        })
      }
    }

    return r
  }

  async download(name) {
    //console.log("[myPdfMaker.js] download()");

    await this.renderPdf(this.dla)

    if (!name) {
      name = "myPdf"
    }

    this.jsPdf.save(name.replace(".pdf", "") + ".pdf", { returnPromise: true })
  }

  async renderPdf(lineArray) {
    console.log("[myPdfMaker] renderPdf()", lineArray);

    try {
      for (let i = 0; i < lineArray.length; i++) {
        const element = lineArray[i];

        if (element.type === "line") {
          //console.log("...add line");

          this.jsPdf.line(
            element.value.xStart,
            element.value.yStart,
            element.value.xEnd,
            element.value.yEnd
          );
          continue
        }

        if (element.type === "checkbox") {
          this.jsPdf.rect(
            element.value.x,
            element.value.y,
            element.value.w,
            element.value.h,
            "S" // stroke only
          );

          if (element.value.isChecked) {
            this.jsPdf.setFont("Arial", "bold")
            this.jsPdf.setFontSize(element.value.h * 1.4)
            this.jsPdf.text("X", element.value.x, element.value.y + element.value.h)
          }
          continue
        }

        if (element.type === "newPage") {
          console.log("...add new page");
          this.jsPdf.addPage();
          continue;
        }

        if (element.type === "image") {
          //console.log("...add image", element.value);

          const img = await loadImage(element.value.imgUrl + "." + element.value.fileExt.toLowerCase())
          //console.log("...img loaded", img);

          //const ratio = img.width / img.height

          await this.jsPdf.addImage(
            img,
            element.value.fileExt.toUpperCase(),
            element.value.x,
            element.value.y,
            element.value.w,
            element.value.h,
          );
        }

        if (element.type === "text") {
          this.jsPdf.setFont(element.fontFamily, element.fontWeight)
          this.jsPdf.setFontSize(element.fontSize)

          if (element.align === "center") {
            element.x = (this.jsPdf.internal.pageSize.width / 2)
          }

          if (element.align != "center" && element.align != "right") {
            element.align = null
          }

          this.jsPdf.text(element.text, element.x, element.y, element.align)
        }
      }

    } catch (error) {
      console.error(error);
    }
  }
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

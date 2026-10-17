const url_error_img = "https://i.ibb.co/SDfYwZ5H/Aufziehn-Frei-Icons.png"
const urL_missing_img = "https://i.ibb.co/XxzGWX5N/missing-img.png"

class myPDF {
  constructor(format, orientation) {
    this.jsPdf = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: format.toLowerCase() + "",
      putOnlyUsedFonts: true
    })
    this.w =  this.jsPdf.internal.pageSize.width - 15
    this.h =  this.jsPdf.internal.pageSize.height - 15
    this.dla = []
    this.offsets = {
      top: 20,
      bottom: this.h - 20,
      left: 15,
      right: this.w
    }
    this.nextLine = this.offsets.top
    this.isFixedY = false
    this.font = {
      family: "Arial",
      weight: "normal",
      size: 10
    }
  }

  addText(text, fontSize, align, fontWeight, fontFamily, lineGap, x, y) {
    console.log("[myPdfMaker.js] addText()", x);

    if (!text) {
      return
    }
    if (!fontSize) {
      fontSize = 12
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
      lineGap = fontSize * 0.5
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

    if(this.isFixedY){
      return
    }

    this.jsPdf.setFont(fontFamily, fontWeight)
    this.jsPdf.setFontSize(fontSize)

    const lineHeight = this.jsPdf.getLineHeight() / this.jsPdf.internal.scaleFactor;
    const textLines = text.split("\n").length
    this.nextLine += lineHeight * textLines
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
      imgUrl = urL_missing_img.replace(".png", "")
    }

    const orig_ext = imgUrl.split(".")[imgUrl.split(".").length - 1]
    if (orig_ext.toLowerCase() != "png"
      && orig_ext.toLowerCase() != "jpeg"
      && orig_ext.toLowerCase() != "jpg") {
        console.error("[myPdfMaker] addImage() provided image must be type of png, jpeg or jpg");
        return
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

  blockY(){
    this.isFixedY = true
  }

  releaseY(){
    this.isFixedY = false
  }

  setNextLine(value, scaleFactor){
    if(value && scaleFactor){
      console.error("only value or scalefactor can be chosen");
      scaleFactor = 1
    }
    
    if(!scaleFactor){
      scaleFactor = 1
    }

    if(!value){
      value = this.nextLine + ( this.jsPdf.getLineHeight() / this.jsPdf.internal.scaleFactor) * scaleFactor;
    }

    this.nextLine = value
  }

  table(cell_count, x, y, w, h, spacing){
    if(!cell_count){
      console.warn("...no cell_count provided");
      cell_count = 2
    }
    if(!x){
      x = this.offsets.left
    }
    if(!y){
      y = this.nextLine
    }
    if(!w){
      w = this.w
    }
    if(!h){
      h = this.h
    }

    if(spacing && spacing.length != cell_count){
      console.error("...spacing[] must be length of cell count");
      cell_count = spacing.length
    }

    if(spacing){
      return spacing.map((s)=>{
        return {
          cell_x: s,
          cell_y: y
        }
      })
    }

    const cell_w = w / cell_count
    const array = []
    
    for (let i = 0; i < cell_count; i++) {
      array.push({
        cell_x: x + i * cell_w,
        cell_y: y
      })
    }

    return array
  }

  async download(name) {
    console.log("[myPdfMaker.js] download()");

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
          console.log("...add line");

          this.jsPdf.line(
            element.value.xStart,
            element.value.yStart,
            element.value.xEnd,
            element.value.yEnd
          );
          continue
        }

        if (element.type === "newPage") {
          console.log("...add new page");
          this.jsPdf.addPage();
          continue;
        }

        if (element.type === "image") {
          console.log("...add image", element.value);

          const img = await loadImage(element.value.imgUrl + "." + element.value.fileExt.toLowerCase())
          console.log("...img loaded", img);

          const ratio = img.width / img.height
          console.log("ratio", ratio);

          await this.jsPdf.addImage(
            img,
            element.value.fileExt.toUpperCase(),
            element.value.x,
            element.value.y,
            element.value.w,
            element.value.h,
          );

          console.log("...img added to pdf");
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

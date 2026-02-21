

function extractUrl(wixUrl, type){
    console.log("extractUrl...");

    if(type.toLowerCase() === "pdf"){
        return extractPdfUrl(wixUrl)
    } else if (type.toLowerCase() === "img"){
        return extractImgUrl(wixUrl)
    } else {
        throw "No type provided: type || img"
    }
}

function extractImgUrl(wixUrl) {
    console.log("extractImgUrl...", wixUrl);

    if(!wixUrl){
        return null
    }

    let url = wixUrl.replace("wix:image://v1/", "")
    url = url.replace("https://static.wixstatic.com/media/", "")
    let root = "https://static.wixstatic.com/media/"

    let ext = ""

    try {
        if (url.split(".jpeg").length > 1) {
            url = url.split(".jpeg")[0] + ".jpeg"
            ext = "JPEG"
        }
        if (url.split("jpg").length > 1) {
            url = url.split(".jpg")[0] + ".jpg"
            ext = "JPG"
        }
        if (url.split(".png").length > 1) {
            url = url.split(".png")[0] + ".png"
            ext = "PNG"
        }
        img = url
    } catch (error) {
        console.error("    splitpain:", element);
    }
    return {
        imgUrl: root + img,
        fileExt: ext
    }
}

function extractPdfUrl(wixUrl) {
    console.log("extractPdfUrl...", wixUrl);

    if(!wixUrl){
        return null
    }
    
    let pdfUrl

    let u = "https://bf1167dd-8507-4041-98ee-7620c782c1e5.usrfiles.com/"
    //console.log("   " + Pdf);

    let pLink = wixUrl.split("v1/")[1].split(".pdf/")[0] + ".pdf"
    if (pLink.slice(0, 3) != "ugd") {
        pLink = "ugd/" + pLink
    }
    pdfUrl = u + pLink

    return pdfUrl
}

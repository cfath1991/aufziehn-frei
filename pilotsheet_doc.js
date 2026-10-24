const textStatus = document.getElementById("textStatus")

const isPublished = true
const testData = '[{"emailHotelSent":"1789747260869","booking_nr":"WPUcmETaBwhpNNQK","timestamp":"2026-09-18T14:51:36.835Z","_id":"e8f62c2f-77ac-4a8e-a895-55bf5cbda2fa","_owner":"6c76f11b-095f-405d-a85e-109945f4d566","_createdDate":"2026-09-18T14:51:37.155Z","ref_pilotsheet":"b62b1972-cfb9-41c3-9e28-c8595a6786cf","emailPilotsheetSent":"1790443462493","timestamp_formatted":"18.09.2026 16:51","_updatedDate":"2026-10-22T11:50:19.791Z","isPayed":true,"payment_method":"Barzahlung","ref_tour":"ed132113-9bd3-4596-bdf2-2f301220272d","emailChecklistSent":"1792669793964","contact_id":"db4d28ca-be70-4310-b00a-942a84f97b72","isPersondetails":true,"invoice_id":"5efb4220-694a-4030-8a7d-a825af61a2dd","isPdfUpload":true,"temp_contact":{"phone1":"01714757552","birthday":"1993-09-20T22:00:00.000Z","organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","backups":[{"phone1":"01714757552","birthday":"1993-09-20T22:00:00.000Z","organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-10-15T16:49:57.064Z","isOkNewsletter":true,"longitude":11.371854,"phone1_plain":"01714757552","gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","birthday_formatted":"21.09.1993","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"notes":"","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"},null,null,{"organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-09-18T14:51:34.974Z","isOkNewsletter":true,"longitude":11.371854,"gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"notes":"","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"}],"academic_title":"","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-10-15T16:50:16.575Z","isOkNewsletter":true,"longitude":11.371854,"phone1_plain":"01714757552","gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","birthday_formatted":"21.09.1993","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"phone2":"01714757552","phone2_plain":"01714757552","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"},"temp_pilotsheet":{"krankenkasse":"AOK","isCompability":{"isChecked":true,"text":"Die Auslösung des Rettungsgerätes wurde im Rahmen einer K-Probe positiv getestet."},"_id":"b62b1972-cfb9-41c3-9e28-c8595a6786cf","_owner":"8bdad504-d9e3-4f39-b6e6-6fd2638e940a","_createdDate":"2026-10-15T16:49:57.405Z","isRescuePacked":{"isChecked":true,"text":"Dein Rettungsgerät wurde entsprechend des vom Hersteller vorgegebenen Intervalls gelüftet und gepackt."},"_updatedDate":"2026-10-15T16:49:57.405Z","total_flights":"200-500","glider_norm":"B","isInsurance":{"isChecked":true,"text":"Ich bin im Besitz einer gültigen Flug-Haftpflichtversicherung, die auch das entsprechende Reiseziel umfasst."},"glider":"Skywalk Arak Air 12 Petrol (dunkelblau und weiss)","takeoff_weight":"70","licence_type":"B","recent_flights":"1-5","emergency_contact_name":"Tanja Huber ","licence_year":"2022","isGearChecked":{"isChecked":true,"text":"Deine gesamte Ausrüstung befindet sich während unserer Reise in einem, vom jeweiligen Hersteller definierten, flugfähigen Zustand."},"ref_contact":"db4d28ca-be70-4310-b00a-942a84f97b72","isHealthOk":{"isChecked":true,"text":"Ich fühle mich gesundheitlich dazu in der Lage an dieser Flugreise teilzunehmen."},"licence_number":"77480","emergency_contact_number":"017623153055","authority":"DHV"},"temp_tour":{"title":"4 Tage Meduno","dates_formatted":"31.10.2026 - 03.11.2026"}},{"emailHotelSent":"1789747260869","booking_nr":"WPUcmETaBwhpNNQK","timestamp":"2026-09-18T14:51:36.835Z","_id":"e8f62c2f-77ac-4a8e-a895-55bf5cbda2fa","_owner":"6c76f11b-095f-405d-a85e-109945f4d566","_createdDate":"2026-09-18T14:51:37.155Z","ref_pilotsheet":"b62b1972-cfb9-41c3-9e28-c8595a6786cf","emailPilotsheetSent":"1790443462493","timestamp_formatted":"18.09.2026 16:51","_updatedDate":"2026-10-22T11:50:19.791Z","isPayed":true,"payment_method":"Barzahlung","ref_tour":"ed132113-9bd3-4596-bdf2-2f301220272d","emailChecklistSent":"1792669793964","contact_id":"db4d28ca-be70-4310-b00a-942a84f97b72","isPersondetails":true,"invoice_id":"5efb4220-694a-4030-8a7d-a825af61a2dd","isPdfUpload":true,"temp_contact":{"phone1":"01714757552","birthday":"1993-09-20T22:00:00.000Z","organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","backups":[{"phone1":"01714757552","birthday":"1993-09-20T22:00:00.000Z","organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-10-15T16:49:57.064Z","isOkNewsletter":true,"longitude":11.371854,"phone1_plain":"01714757552","gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","birthday_formatted":"21.09.1993","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"notes":"","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"},null,null,{"organization":"","first_name":"Nino","latitude":47.7548409,"history":[{"timestamp":"2026-07-17T14:27:37.141Z","_id":"1784298457142","icon":"wix:image://v1/6c76f1_ea9edcd01c5345d390d993386f15c773~mv2.png/Subscribing.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Newsletter-Anmeldung","author_name":"not available","author_id":"not available","type":"Subscribing"},{"timestamp":"2026-07-17T14:27:27.926Z","_id":"1784298447930","icon":"wix:image://v1/6c76f1_ef95049fc2084d56a5e1a6deb34e5acd~mv2.png/System.png#originWidth=300&originHeight=300","timestamp_formatted":"17.07.2026 16:27","info":"Contact was created","author_name":"not available","author_id":"not available","type":"System"}],"isOkData":true,"_id":"db4d28ca-be70-4310-b00a-942a84f97b72","_owner":"fd467d06-212d-4362-aa89-f112489a35ad","_createdDate":"2026-07-17T14:27:27.659Z","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-09-18T14:51:34.974Z","isOkNewsletter":true,"longitude":11.371854,"gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"notes":"","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"}],"academic_title":"","city_formatted":"Penzberg","country_formatted":"Deutschland","email1":"nino_utopia@yahoo.de","categorie":["Kunde"],"_updatedDate":"2026-10-15T16:50:16.575Z","isOkNewsletter":true,"longitude":11.371854,"phone1_plain":"01714757552","gallery":[],"licence":{"authority":"","number":"","type":"","year":""},"pilotSheets":[],"last_name":"Huber","street_formatted":"Am Museum 5","postalcode_formatted":"82377","birthday_formatted":"21.09.1993","salutation":"Lieber Nino","emergency_contact":{"name":"","phone":""},"phone2":"01714757552","phone2_plain":"01714757552","DOI":{"_id":"C4sYMDA4zyE","completed":false,"timestamp":"","timestamp_formatted":""},"gender":"Herr"},"temp_pilotsheet":{"krankenkasse":"AOK","isCompability":{"isChecked":true,"text":"Die Auslösung des Rettungsgerätes wurde im Rahmen einer K-Probe positiv getestet."},"_id":"b62b1972-cfb9-41c3-9e28-c8595a6786cf","_owner":"8bdad504-d9e3-4f39-b6e6-6fd2638e940a","_createdDate":"2026-10-15T16:49:57.405Z","isRescuePacked":{"isChecked":true,"text":"Dein Rettungsgerät wurde entsprechend des vom Hersteller vorgegebenen Intervalls gelüftet und gepackt."},"_updatedDate":"2026-10-15T16:49:57.405Z","total_flights":"200-500","glider_norm":"B","isInsurance":{"isChecked":true,"text":"Ich bin im Besitz einer gültigen Flug-Haftpflichtversicherung, die auch das entsprechende Reiseziel umfasst."},"glider":"Skywalk Arak Air 12 Petrol (dunkelblau und weiss)","takeoff_weight":"70","licence_type":"B","recent_flights":"1-5","emergency_contact_name":"Tanja Huber ","licence_year":"2022","isGearChecked":{"isChecked":true,"text":"Deine gesamte Ausrüstung befindet sich während unserer Reise in einem, vom jeweiligen Hersteller definierten, flugfähigen Zustand."},"ref_contact":"db4d28ca-be70-4310-b00a-942a84f97b72","isHealthOk":{"isChecked":true,"text":"Ich fühle mich gesundheitlich dazu in der Lage an dieser Flugreise teilzunehmen."},"licence_number":"77480","emergency_contact_number":"017623153055","authority":"DHV"},"temp_tour":{"title":"4 Tage Meduno","dates_formatted":"31.10.2026 - 03.11.2026"}}]'
let data

function run() {
    console.log("[run...]");

    if (!isPublished) {
        createPdf(JSON.parse(testData))
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

async function createPdf(data) {
    console.log("[createPdf...]", data);
    textStatus.text = "Erstelle PDF..."

    let pdf = new myPDF("a4", "p")

    for (let i = 0; i < data.length; i++) {
        const d = data[i]
        i > 0 ? pdf.addNewPage() : null
        await addDocument(pdf, d)

    }

    let save_name = ""
    data.length === 1 ? save_name = data[0].temp_contact.first_name + " " + data[0].temp_contact.last_name : save_name = "Pilotenblätter " + data[0].temp_tour.title
    await pdf.download(save_name)

}

function addDocument(pdf, data) {
    console.log("addDocument...", data);

    let contact = data.temp_contact
    if (!contact) {
        contact = {}
    }
    let sheet = data.temp_pilotsheet
    if (!sheet) {
        sheet = {}
    }

    pdf.setLineGap(0)
    pdf.addImage("https://i.ibb.co/nqX7MygR/Aufziehen-frei.jpg", "jpg", pdf.w - 100, 10, 78, 60)
    pdf.addText("Pilotenblatt", 25, "center", "bold")
    pdf.addText(data.temp_tour.title, 16, "center", "normal")
    pdf.addText("(" + data.temp_tour.dates_formatted + ")", 12, "center", "normal")
    pdf.setLineGap(10)

    const table_person = pdf.getTable(["", "", ""])

    pdf.setNextLine()
    pdf.addText("1. Pilotendaten:", 12, "left", "bold")

    pdf.addImage(null, null, null, null, 100, 100)

    pdf.blockY()
    pdf.addInput("Name:", contact.first_name + " " + contact.last_name, table_person[1].cell_x)
    pdf.addInput("Geburtstag", contact.birthday_formatted, table_person[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(2)
    pdf.blockY()
    pdf.addInput("Straße:", contact.street_formatted, table_person[1].cell_x)
    pdf.addInput("Email:", contact.email1, table_person[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(2)
    pdf.blockY()
    pdf.addInput("Postleitzahl / Stadt:", contact.postalcode_formatted + " " + contact.city_formatted, table_person[1].cell_x)
    pdf.addInput("Tel.:", contact.phone1, table_person[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(2)
    pdf.addInput("Land:", contact.city_formatted, table_person[1].cell_x)

    pdf.skipLines(2)
    pdf.addText("2. Ausrüstung:", 12, "left", "bold")

    const table_sheet = pdf.getTable(["", "", ""])

    pdf.blockY()

    let glider = ""
    if(sheet.glider && sheet.glider_norm){
        glider = sheet.glider + " | EN-" + sheet.glider_norm
    }

    let weight = ""
    if(sheet.takeoff_weight){
        weigth = sheet.takeoff_weight + "kg"
    }

    pdf.addInput("Gleitschirm (Modell & Farbe) + EN-Norm:", glider, table_sheet[0].cell_x, null, 315)
    pdf.addInput("Startgewicht:", weight, table_sheet[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(2)

    pdf.blockY()
    pdf.addInput("Lizenznummer:", sheet.licence_number, table_sheet[0].cell_x)
    pdf.addInput("Ausstellungsjahr:", sheet.licence_year, table_sheet[1].cell_x)
    pdf.addInput("Behörde:", sheet.authority, table_sheet[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(2)

    pdf.blockY()
    pdf.addInput("Scheinart:", sheet.licence_type, table_sheet[0].cell_x)
    pdf.addInput("Flüge gesamt (ungefähr):", sheet.total_flights, table_sheet[1].cell_x)
    pdf.addInput("Flüge (letzte 6 Monate):", sheet.recent_flights, table_sheet[2].cell_x)
    pdf.releaseY()

    pdf.skipLines(5)
    const y_emergency = pdf.getNextLine()
    pdf.addText("3. Notfallkontakt:", 12, "left", "bold", null, null, null, y_emergency)
    pdf.addInput("Name", sheet.emergency_contact_name, table_sheet[1].cell_x, y_emergency - 15)
    pdf.addInput("Telefonnummer", sheet.emergency_contact_number, table_sheet[2].cell_x, y_emergency - 15)

    pdf.skipLines(3)
    pdf.addText("4. Besondere Informationen:", 12, "left", "bold")
    
    pdf.addInput("Möchtest du uns noch etwas Wichtiges mitteilen?", sheet.health_info, null, null, pdf.w - pdf.white_border * 2, null, 4)

    pdf.skipLines(1)
    const cbxX = 120
    const cbxHeight = 26
    const cbxWidth = 320

    pdf.addCheckbox(sheet.isGearChecked?.text || "", sheet.isGearChecked?.isChecked || false, cbxX, null, cbxWidth, cbxHeight)
    pdf.addCheckbox(sheet.isRescuePacked?.text || "", sheet.isRescuePacked?.isChecked || false, cbxX, null, cbxWidth, cbxHeight)
    pdf.addCheckbox(sheet.isCompability?.text || "", sheet.isCompability?.isChecked || false, cbxX, null, cbxWidth, cbxHeight)
    pdf.addCheckbox(sheet.isInsurance?.text || "", sheet.isInsurance?.isChecked || false, cbxX, null, cbxWidth, cbxHeight)
    pdf.addCheckbox(sheet.isHealthOk?.text || "", sheet.isHealthOk?.isChecked || false, cbxX, null, cbxWidth, cbxHeight)

    pdf.skipLines(3)
    const y_sign = pdf.getNextLine()
    pdf.addLine(null, y_sign, 250, y_sign)
    pdf.addLine(pdf.offsets.right + pdf.white_border - 250, y_sign, pdf.offsets.right, y_sign)
    pdf.addText("Ort, Datum", 6, "left", "bold", null, null, null, y_sign + 6)
    pdf.addText("Unterschrift", 6, "right", "bold", null, null, pdf.offsets.right, y_sign + 6)
}

run()
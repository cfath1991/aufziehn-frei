//https://cfath1991.github.io/aufziehn-frei/books.html

const isPublished = true

const FONT = "helvetica"
const errorImg = "data:image/png;base64,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"

const testURL = "?data=%5B%7B%22ust_out%22%3A28.5%2C%22date_formatted%22%3A%2205.05.2026%22%2C%22full_name%22%3A%22WIX.COM%20LUXEMBOURG%20S.A.R.L%22%2C%22description%22%3A%22Homepage%20Premium%20Core%20Paket%22%2C%22skr04%22%3A%226810%22%2C%22netto_out%22%3A150%2C%22buchungs_id%22%3A%221783348038938%22%2C%22payment_method%22%3A%22PayPal%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_67f644d0a488472d870644b513595def.pdf%2Fwix_premium_core.pdf%22%5D%2C%22skr03%22%3A%224925%22%2C%22brutto_out%22%3A178.5%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Internetkosten%22%2C%22ref_contact%22%3A%22ff1ca1c4-0b95-438a-abb9-3507ed87ddfe%22%7D%2C%7B%22ust_out%22%3A0%2C%22date_formatted%22%3A%2221.05.2026%22%2C%22full_name%22%3A%22GEMEINDE%20GAISSACH%22%2C%22description%22%3A%22Geb%C3%BChr%20Gewerbeanmeldung%22%2C%22skr04%22%3A%226430%22%2C%22netto_out%22%3A40%2C%22buchungs_id%22%3A%221783348190047%22%2C%22payment_method%22%3A%22Kasse%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-05-20T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_a448a6905fc64e2aa49b550f4be0bb0b.pdf%2FBelege%2520Geb%25C3%25BChren%2520Gewerbeanmeldung.pdf%22%5D%2C%22skr03%22%3A%224390%22%2C%22brutto_out%22%3A40%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Sonstige%20Abgaben%22%2C%22ref_contact%22%3A%2261e33f41-42b5-408d-8614-aab25692ba3d%22%7D%2C%7B%22ust_out%22%3A0.56%2C%22date_formatted%22%3A%2210.07.2026%22%2C%22full_name%22%3A%22IONOS%20SE%22%2C%22description%22%3A%22IONOS%20Webhosting%20Plus%22%2C%22skr04%22%3A%226810%22%2C%22netto_out%22%3A2.94%2C%22buchungs_id%22%3A%221783666328292%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-07-10T06%3A50%3A57.482Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_357587163b2a42a29f85b9e2f4b9d342.pdf%2FIONOS%2520Rechnung%25202026-07-03%2520-%2520RG_100189947631.pdf%22%5D%2C%22skr03%22%3A%224925%22%2C%22brutto_out%22%3A3.5%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Internetkosten%22%2C%22ref_contact%22%3A%22a75b3994-7a99-465e-aba5-08489da90c2d%22%7D%2C%7B%22ust_out%22%3A24.5%2C%22date_formatted%22%3A%2214.07.2026%22%2C%22full_name%22%3A%22DHV%20E.V%22%2C%22description%22%3A%22Flugschulzulassung%22%2C%22skr04%22%3A%226304%22%2C%22netto_out%22%3A350%2C%22buchungs_id%22%3A%221784458350995%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-07-13T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F54819f_ab874b9cea414f37b64835a64476a8bd.pdf%2FCamScanner%252019.07.2026%252012.51.pdf%22%5D%2C%22skr03%22%3A%224980%22%2C%22brutto_out%22%3A374.5%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Sonstiger%20Betriebsbedarf%22%2C%22ref_contact%22%3A%220bc43b5d-8df5-4bf4-bc9f-b9279bdd7c53%22%7D%2C%7B%22date_formatted%22%3A%2205.08.2026%22%2C%22full_name%22%3A%22Pierre%20Stirnweiss%22%2C%22description%22%3A%22Rechnung%202026-0001%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A880%2C%22buchungs_id%22%3A%221785941933809%22%2C%22payment_method%22%3A%22%C3%9Cberweisung%22%2C%22ust_in%22%3A140.5%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-04T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_b8d573da7be94e9a9770a26472f49a4c.pdf%2F2026-0001.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A739.5%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%227bb9460b-c0e5-400b-bac4-2969a5fd1af5%22%7D%2C%7B%22ust_out%22%3A2.07%2C%22date_formatted%22%3A%2210.08.2026%22%2C%22full_name%22%3A%22IONOS%20SE%22%2C%22description%22%3A%22Webhosting%20Plus%22%2C%22skr04%22%3A%226810%22%2C%22netto_out%22%3A10.92%2C%22buchungs_id%22%3A%221788193284337%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-09T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_873234144c80471fbddc5ff528ff0f27.pdf%2FIONOS%2520Rechnung%25202026-08-03%2520-%2520RG_100191600508.pdf%22%5D%2C%22skr03%22%3A%224925%22%2C%22brutto_out%22%3A13%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Internetkosten%22%2C%22ref_contact%22%3A%22a75b3994-7a99-465e-aba5-08489da90c2d%22%7D%2C%7B%22ust_out%22%3A35.25%2C%22date_formatted%22%3A%2217.08.2026%22%2C%22full_name%22%3A%22GERMANY%20RETEVIS%20TECHNOLOGY%20GMBH%22%2C%22description%22%3A%22Retevis%20RT668H%20Funkger%C3%A4te%20Set%20mit%20Headset%2C%2010-1%20Ladeger%C3%A4t%2CRadio%20mit%20Display%22%2C%22skr04%22%3A%220670%22%2C%22netto_out%22%3A185.53%2C%22buchungs_id%22%3A%221787721185711%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-16T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_8ec31882e5544617a60cd78c63ece2e7.pdf%2Finvoice_retevis.pdf%22%5D%2C%22skr03%22%3A%220480%22%2C%22brutto_out%22%3A220.78%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Geringwertige%20Wirtschaftsg%C3%BCter%22%2C%22ref_contact%22%3A%2217a5d1a0-76c9-401a-ad98-7a8018cb7431%22%7D%2C%7B%22ust_out%22%3A5.45%2C%22date_formatted%22%3A%2220.08.2026%22%2C%22full_name%22%3A%22SAXOPRINT%20GMBH%22%2C%22description%22%3A%22Aufkleber%20pink%22%2C%22skr04%22%3A%226601%22%2C%22netto_out%22%3A28.67%2C%22buchungs_id%22%3A%221788192825021%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-19T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_16f5168f647847afaf818fa811658404.pdf%2FR701457906.pdf%22%5D%2C%22skr03%22%3A%224651%22%2C%22brutto_out%22%3A34.12%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Sonstige%20Betriebsausgaben%20(abziehbarer%20Anteil)%22%2C%22ref_contact%22%3A%229445bd2a-d7dc-4de2-9e6a-0fde9d06e12e%22%7D%2C%7B%22ust_out%22%3A5.45%2C%22date_formatted%22%3A%2220.08.2026%22%2C%22full_name%22%3A%22SAXOPRINT%20GMBH%22%2C%22description%22%3A%22Aufkleber%20blau%22%2C%22skr04%22%3A%226601%22%2C%22netto_out%22%3A28.67%2C%22buchungs_id%22%3A%221788192902310%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-19T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_83de9fb35f3a41ccaa1a6f7c10415af6.pdf%2FR701457908.pdf%22%5D%2C%22skr03%22%3A%224651%22%2C%22brutto_out%22%3A34.12%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Sonstige%20Betriebsausgaben%20(abziehbarer%20Anteil)%22%2C%22ref_contact%22%3A%229445bd2a-d7dc-4de2-9e6a-0fde9d06e12e%22%7D%2C%7B%22date_formatted%22%3A%2225.08.2026%22%2C%22full_name%22%3A%22Bianka%20%20Bachinger%22%2C%22description%22%3A%22Rechnung%202026-0002%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A1%2C%22buchungs_id%22%3A%221787647419038%22%2C%22payment_method%22%3A%22Barzahlung%22%2C%22ust_in%22%3A0.16%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-24T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_494fc100988b447a90094bfc06ca876f.pdf%2F2026-0002.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A0.84%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%22a1531c66-623a-4380-ac1b-faa6e2cdebff%22%7D%2C%7B%22ust_out%22%3A3.33%2C%22date_formatted%22%3A%2230.08.2026%22%2C%22full_name%22%3A%22SAXOPRINT%20GMBH%22%2C%22description%22%3A%22Flyer%20Erste%20Hilfe%20Kurs%22%2C%22skr04%22%3A%226601%22%2C%22netto_out%22%3A17.51%2C%22buchungs_id%22%3A%221788379490008%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-08-29T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_a56b1d9043ce4604894e74b572eb61ab.pdf%2F2026-09-03_Saxoprint_Flyer.pdf%22%5D%2C%22skr03%22%3A%224651%22%2C%22brutto_out%22%3A20.84%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Sonstige%20Betriebsausgaben%20(abziehbarer%20Anteil)%22%2C%22ref_contact%22%3A%229445bd2a-d7dc-4de2-9e6a-0fde9d06e12e%22%7D%2C%7B%22ust_out%22%3A0.96%2C%22date_formatted%22%3A%2208.09.2026%22%2C%22full_name%22%3A%22IONOS%20SE%22%2C%22description%22%3A%22Webhosting%20Plus%22%2C%22skr04%22%3A%226810%22%2C%22netto_out%22%3A5.04%2C%22buchungs_id%22%3A%221789044775886%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-07T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_ecae59cd56ab40088c5c4f5d61cd1f4f.pdf%2FIONOS%2520Rechnung%25202026-09-03%2520-%2520RG_100193062832.pdf%22%5D%2C%22skr03%22%3A%224925%22%2C%22brutto_out%22%3A6%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Internetkosten%22%2C%22ref_contact%22%3A%22a75b3994-7a99-465e-aba5-08489da90c2d%22%7D%2C%7B%22date_formatted%22%3A%2210.09.2026%22%2C%22full_name%22%3A%22Daniel%20Herrmann%22%2C%22description%22%3A%22Rechnung%202026-0003%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A1%2C%22buchungs_id%22%3A%221789067773027%22%2C%22payment_method%22%3A%22Barzahlung%22%2C%22ust_in%22%3A0.16%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-09T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_4e4356de245c45c3bb27d1e17f77bdec.pdf%2F2026-0003-5.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A0.84%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%22e51021ab-e359-4841-963c-960a306aedb3%22%7D%2C%7B%22date_formatted%22%3A%2217.09.2026%22%2C%22full_name%22%3A%22FINANZAMT%20WEILHEIM-SCHONGAU%22%2C%22description%22%3A%22USt.%20R%C3%BCckzahlung%22%2C%22skr04%22%3A%221420%22%2C%22brutto_in%22%3A28.5%2C%22buchungs_id%22%3A%221789713735461%22%2C%22payment_method%22%3A%22Bank%22%2C%22ust_in%22%3A0%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-16T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%5D%2C%22skr03%22%3A%221546%22%2C%22netto_in%22%3A28.5%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22USt%20-%20R%C3%BCckerstattung%22%2C%22ref_contact%22%3A%226deca8bf-1aca-4bce-887f-44f9da548aaf%22%7D%2C%7B%22date_formatted%22%3A%2218.09.2026%22%2C%22full_name%22%3A%22Nino%20Huber%22%2C%22description%22%3A%22Rechnung%202026-0004%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A1%2C%22buchungs_id%22%3A%221789746455799%22%2C%22payment_method%22%3A%22Barzahlung%22%2C%22ust_in%22%3A0.16%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-17T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_70fc5368c8e6449e861ca8d89bec80ee.pdf%2F2026-0004-1.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A0.84%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%22db4d28ca-be70-4310-b00a-942a84f97b72%22%7D%2C%7B%22ust_out%22%3A67.92%2C%22date_formatted%22%3A%2223.09.2026%22%2C%22full_name%22%3A%22KLEIN%20%26%20WAHL%20PARTG%22%2C%22description%22%3A%22Beratungsleistung%202026%22%2C%22skr04%22%3A%226830%22%2C%22netto_out%22%3A357.5%2C%22buchungs_id%22%3A%221790234028524%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-22T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_b601007342a14129aa201c3f04a4d782.pdf%2FRechnung%2520Nr.%25202026-1327%2520vom%252011.09.2026.pdf%22%5D%2C%22skr03%22%3A%224955%22%2C%22brutto_out%22%3A425.43%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Buchf%C3%BChrungskosten%22%2C%22ref_contact%22%3A%222e4066ee-2e4b-4ae7-90b2-8b3bea27a2fa%22%7D%2C%7B%22date_formatted%22%3A%2224.09.2026%22%2C%22full_name%22%3A%22Dorothea%20Neu%22%2C%22description%22%3A%22Rechnung%202026-0005%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A500%2C%22buchungs_id%22%3A%221790319916488%22%2C%22payment_method%22%3A%22%C3%9Cberweisung%22%2C%22ust_in%22%3A79.83%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-23T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_66f12b6ae5f645f998612a52679e3f58.pdf%2F2026-0005.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A420.17%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%228cb3b393-cacd-4be0-aae0-6a0eecca148b%22%7D%2C%7B%22date_formatted%22%3A%2225.09.2026%22%2C%22full_name%22%3A%22Birgit%20Laszlo%22%2C%22description%22%3A%22Rechnung%202026-0007%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A500%2C%22buchungs_id%22%3A%221790319932335%22%2C%22payment_method%22%3A%22%C3%9Cberweisung%22%2C%22ust_in%22%3A79.83%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-24T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_fcad41fc3e5a4ddaad9e83cd84e7fd8a.pdf%2F2026-0007.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A420.17%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%221367b5b5-364b-4416-a81b-c11a560dfcc0%22%7D%2C%7B%22date_formatted%22%3A%2228.09.2026%22%2C%22full_name%22%3A%22Melanie%20%20Bachem%22%2C%22description%22%3A%22Rechnung%202026-0009%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A500%2C%22buchungs_id%22%3A%221790586797639%22%2C%22payment_method%22%3A%22%C3%9Cberweisung%22%2C%22ust_in%22%3A79.83%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-27T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_e0eee4e55e3143f2adf547589f612fb3.pdf%2F2026-0009.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A420.17%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%223b849a33-750d-477a-abae-fd0ea81fdad0%22%7D%2C%7B%22ust_out%22%3A39.92%2C%22date_formatted%22%3A%2229.09.2026%22%2C%22full_name%22%3A%22RETEVIS%20TRADING%20GMBH%22%2C%22description%22%3A%22Retevis%20RT668H%20Funkger%C3%A4te%2010x%22%2C%22skr04%22%3A%220670%22%2C%22netto_out%22%3A210.08%2C%22buchungs_id%22%3A%221791020842788%22%2C%22payment_method%22%3A%22Bank%22%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-09-28T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_1dceeea53b65444e96315c7f33e34796.pdf%2FKauflRechRetevis.pdf%22%5D%2C%22skr03%22%3A%220480%22%2C%22brutto_out%22%3A249.99%2C%22type%22%3A%22Ausgabe%22%2C%22main_category%22%3A%22Geringwertige%20Wirtschaftsg%C3%BCter%22%2C%22ref_contact%22%3A%222229b3f8-3623-4eee-ae67-7375d58794c7%22%7D%2C%7B%22date_formatted%22%3A%2202.10.2026%22%2C%22full_name%22%3A%22Verena%20Mayer%22%2C%22description%22%3A%22Rechnung%202026-0008%22%2C%22skr04%22%3A%224000%22%2C%22brutto_in%22%3A500%2C%22buchungs_id%22%3A%221790947143618%22%2C%22payment_method%22%3A%22%C3%9Cberweisung%22%2C%22ust_in%22%3A79.83%2C%22notice%22%3A%22%22%2C%22date%22%3A%222026-10-01T22%3A00%3A00.000Z%22%2C%22belege%22%3A%5B%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_7e3006a63acf48adac5dd548947b21d8.pdf%2F2026-0008.pdf%22%5D%2C%22skr03%22%3A%228000%22%2C%22netto_in%22%3A420.17%2C%22type%22%3A%22Einnahme%22%2C%22main_category%22%3A%22Umsatzerl%C3%B6se%20allgemein%22%2C%22ref_contact%22%3A%2284cae82f-01e7-496f-8717-3db58e8c0a69%22%7D%5D"

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

let qUrl
let UrlData
var imgWarten = document.getElementById("imgWarten")

$(document).ready(function () {
    console.log("Version: 03.Okt.2026 - 14:10")
    console.log("...document loaded");

    startProgram()
});

function startProgram() {
    console.log("startProgram...");

    qUrl = text.value
    if (!isPublished) { qUrl = testURL }

    decodeURL()
    createPdf()
}

function decodeURL() {
    console.log("decodeUrl...");

    let result = qUrl.split("?data=")[1]

    UrlData = JSON.parse(decodeURIComponent(result))
    console.log("UrlData", UrlData);
}

async function createPdf() {
    console.log("createPdf...");

    await addBelege()

    await doc.save("eur.pdf", { returnPromise: true })

    setTimeout(() => {
        //imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
        window.close()
    }, 5000);
}

async function extractBelege(){
    console.log("extractBelege...");

    let result = []

    for (let i = 0; i < UrlData.length; i++) {
        const data = UrlData[i];

        if(!data.belege){
            continue;
        }

        for (let j = 0; j < data.belege.length; j++) {
            const beleg = data.belege[j];
            result.push(beleg)
        }
    }

    return result
}

async function addBelege() {
    console.log("addBelege...");

    const belege = await extractBelege()

    for (let i = 0; i < belege.length; i++) {
        const beleg = belege[i];
        console.log("beleg", beleg);

        textProgress.innerHTML = "Belege werden geladen (" + (i + 1) + "/" + belege.length + ")"
        if (errorCount > 0) {
            textProgress.innerHTML = "Belege werden geladen (" + (i + 1) + "/" + belege.length + ")" + "\n" + " - Fehlerhafter Download: " + errorCount
        }

        try {
                const pdfUrl = await extractUrl(beleg, "pdf")
                const dataurls = await getCanvasDataUrl(pdfUrl)

                for (let k = 0; k < dataurls.length; k++) {
                    const dataUrl = dataurls[k];
                    //TODO: Timer falls nicht geladen
                    doc.addPage();
                    doc.setFontSize(8)
                    doc.text("Beleg: " + beleg.nr + " (" + (k + 1) + "/" + dataurls.length + ")", xOffset, 8, "left")
                    doc.text("Buchungsdatum: " + beleg.date, xOffsetRight, 8, "right")
                    await doc.addImage(dataUrl, "JPEG", 10, 10, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10);
                }
            
        } catch (error) {
            console.error(error);
            errorCount++
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

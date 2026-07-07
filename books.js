//https://cfath1991.github.io/aufziehn-frei/books.html

const isPublished = true

const FONT = "helvetica"
const errorImg = "data:image/png;base64,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"

const testURL = "?data=%7B%22header%22%3A%7B%22date_from%22%3A%222026-03-31T22%3A00%3A00.000Z%22%2C%22from_formatted%22%3A%2201.04.2026%22%2C%22date_to%22%3A%222026-07-07T22%3A00%3A00.000Z%22%2C%22to_formatted%22%3A%2208.07.2026%22%7D%2C%22prev_bilanz%22%3Anull%2C%22journal%22%3A%5B%7B%22betrag%22%3A178.5%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22betrag%22%3A28.5%2C%22_id%22%3A%22080c84a8-d17d-4337-986b-8216b520bd97%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22PayPal%22%2C%22betrag%22%3A178.5%2C%22_id%22%3A%22c2d5a662-e838-4eff-9ff6-82efd4028bbc%22%2C%22skr04%22%3A%221810%22%2C%22slug%22%3A%22PayPal%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Internetkosten%22%2C%22betrag%22%3A150%2C%22_id%22%3A%22d1da2415-2712-438a-a1a1-e882d30fa0a5%22%2C%22skr04%22%3A%226810%22%2C%22slug%22%3A%22Internet%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221783348038938%22%2C%22buchungssatz%22%3A%22Internetkosten%20an%20PayPal%20%2B%20VSt.%2019%25%22%2C%22beschreibung%22%3A%22Homepage%20Premium%20Core%20Paket%22%2C%22datum_formatted%22%3A%2205.05.2026%22%2C%22belege%22%3A%5B%7B%22nr%22%3A1%2C%22date%22%3A%2205.05.2026%22%2C%22url%22%3A%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_67f644d0a488472d870644b513595def.pdf%2Fwix_premium_core.pdf%22%2C%22type%22%3A%22pdf%22%7D%5D%7D%2C%7B%22betrag%22%3A178.5%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%20Fath%22%2C%22betrag%22%3A178.5%2C%22_id%22%3A%222c89233a-3d0e-410b-97b2-17e6997da08d%22%2C%22skr04%22%3A%222902%22%2C%22slug%22%3A%22E.Kpl%20C.F.%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22PayPal%22%2C%22betrag%22%3A178.5%2C%22_id%22%3A%22c2d5a662-e838-4eff-9ff6-82efd4028bbc%22%2C%22skr04%22%3A%221810%22%2C%22slug%22%3A%22PayPal%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221783348093124%22%2C%22buchungssatz%22%3A%22PayPal%20an%20Eigenkapital%20Fath%22%2C%22beschreibung%22%3A%22Christian%20Fath%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2205.05.2026%22%2C%22belege%22%3A%5B%5D%7D%2C%7B%22betrag%22%3A40%2C%22haben_konto%22%3A%7B%22name%22%3A%22Kasse%22%2C%22betrag%22%3A40%2C%22_id%22%3A%2261a403d6-6a48-4ccf-bc91-1503f50b1c1a%22%2C%22skr04%22%3A%221600%22%2C%22slug%22%3A%22Kasse%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Sonstige%20Abgaben%22%2C%22betrag%22%3A40%2C%22_id%22%3A%223ef6b9c8-5f27-4d4a-af65-6989c3efaadc%22%2C%22skr04%22%3A%226430%22%2C%22slug%22%3A%22Stg.%20Abg.%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221783348190047%22%2C%22buchungssatz%22%3A%22Sonstige%20Abgaben%20an%20Kasse%22%2C%22beschreibung%22%3A%22Geb%C3%BChr%20Gewerbeanmeldung%22%2C%22datum_formatted%22%3A%2221.05.2026%22%2C%22belege%22%3A%5B%7B%22nr%22%3A2%2C%22date%22%3A%2221.05.2026%22%2C%22url%22%3A%22wix%3Adocument%3A%2F%2Fv1%2F6c76f1_a448a6905fc64e2aa49b550f4be0bb0b.pdf%2FBelege%2520Geb%25C3%25BChren%2520Gewerbeanmeldung.pdf%22%2C%22type%22%3A%22pdf%22%7D%5D%7D%2C%7B%22betrag%22%3A40%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%20Fath%22%2C%22betrag%22%3A40%2C%22_id%22%3A%222c89233a-3d0e-410b-97b2-17e6997da08d%22%2C%22skr04%22%3A%222902%22%2C%22slug%22%3A%22E.Kpl%20C.F.%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Kasse%22%2C%22betrag%22%3A40%2C%22_id%22%3A%2261a403d6-6a48-4ccf-bc91-1503f50b1c1a%22%2C%22skr04%22%3A%221600%22%2C%22slug%22%3A%22Kasse%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221783348939031%22%2C%22buchungssatz%22%3A%22Kasse%20an%20Eigenkapital%20Fath%22%2C%22beschreibung%22%3A%22Christian%20Fath%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2221.05.2026%22%2C%22belege%22%3A%5B%5D%7D%2C%7B%22betrag%22%3A250%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%20Weller%22%2C%22betrag%22%3A250%2C%22_id%22%3A%2236e59b0a-697e-49fe-8201-200a42759ef8%22%2C%22skr04%22%3A%222901%22%2C%22slug%22%3A%22E.Kpl%20T.W.%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A250%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221783348996166%22%2C%22buchungssatz%22%3A%22Bank%20an%20Eigenkapital%20Weller%22%2C%22beschreibung%22%3A%22Tobias%20Weller%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2201.07.2026%22%2C%22belege%22%3A%5B%5D%7D%2C%7B%22betrag%22%3A1250%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%20Weller%22%2C%22betrag%22%3A1250%2C%22_id%22%3A%2236e59b0a-697e-49fe-8201-200a42759ef8%22%2C%22skr04%22%3A%222901%22%2C%22slug%22%3A%22E.Kpl%20T.W.%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A1250%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221783349044062%22%2C%22buchungssatz%22%3A%22Bank%20an%20Eigenkapital%20Weller%22%2C%22beschreibung%22%3A%22Tobias%20Weller%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2202.07.2026%22%2C%22belege%22%3A%5B%5D%7D%2C%7B%22betrag%22%3A1281.5%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%20Fath%22%2C%22betrag%22%3A1281.5%2C%22_id%22%3A%222c89233a-3d0e-410b-97b2-17e6997da08d%22%2C%22skr04%22%3A%222902%22%2C%22slug%22%3A%22E.Kpl%20C.F.%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A1281.5%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221783349113929%22%2C%22buchungssatz%22%3A%22Bank%20an%20Eigenkapital%20Fath%22%2C%22beschreibung%22%3A%22Christian%20Fath%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2202.07.2026%22%2C%22belege%22%3A%5B%5D%7D%2C%7B%22betrag%22%3A200%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22betrag%22%3A31.93%2C%22_id%22%3A%22080c84a8-d17d-4337-986b-8216b520bd97%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A200%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Fahrzeug-Reparaturen%22%2C%22betrag%22%3A168.07%2C%22_id%22%3A%2261566f61-c728-4cb9-a66c-833ee980b51f%22%2C%22skr04%22%3A%226540%22%2C%22slug%22%3A%22Fzg.%20Rep.%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221783431138113%22%2C%22buchungssatz%22%3A%22Fahrzeug-Reparaturen%20an%20Bank%20%2B%20VSt.%2019%25%22%2C%22beschreibung%22%3A%22och%20eine%20reparatur%22%2C%22datum_formatted%22%3A%2207.07.2026%22%2C%22belege%22%3A%5B%7B%22nr%22%3A3%2C%22date%22%3A%2207.07.2026%22%2C%22url%22%3A%22wix%3Aimage%3A%2F%2Fv1%2F6c76f1_28b06e5456724e7d9581b1e0387bd79b~mv2.png%2FSubscribed.png%22%2C%22type%22%3A%22png%22%7D%5D%7D%5D%2C%22konten%22%3A%5B%7B%22kategorie%22%3A%22Eigenkapital%22%2C%22name%22%3A%22Eigenkapital%20Fath%22%2C%22skr04%22%3A%222902%22%2C%22slug%22%3A%22E.Kpl%20C.F.%22%2C%22info%22%3A%22Gezeichnetes%20Kapital%20ist%20das%20von%20Gesellschaftern%20eingebrachte%20und%20in%20der%20Bilanz%20ausgewiesene%20Kapital%20einer%20Kapitalgesellschaft%20(z.B.%20Stammkapital%20bei%20der%20GmbH%2C%20Grundkapital%20bei%20der%20AG)%22%2C%22saldo%22%3A1500%2C%22skr03%22%3A%220802%22%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348093124%22%2C%22gegenkonto%22%3A%221810%20PayPal%22%2C%22haben%22%3A178.5%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-05-20T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348939031%22%2C%22gegenkonto%22%3A%221600%20Kasse%22%2C%22haben%22%3A40%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-07-01T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783349113929%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3A1281.5%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A1500.00001%7D%5D%7D%2C%7B%22kategorie%22%3A%22Eigenkapital%22%2C%22name%22%3A%22Eigenkapital%20Weller%22%2C%22skr04%22%3A%222901%22%2C%22slug%22%3A%22E.Kpl%20T.W.%22%2C%22info%22%3A%22Gezeichnetes%20Kapital%20ist%20das%20von%20Gesellschaftern%20eingebrachte%20und%20in%20der%20Bilanz%20ausgewiesene%20Kapital%20einer%20Kapitalgesellschaft%20(z.B.%20Stammkapital%20bei%20der%20GmbH%2C%20Grundkapital%20bei%20der%20AG)%22%2C%22saldo%22%3A1500%2C%22skr03%22%3A%220801%22%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-06-30T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348996166%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3A250%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-07-01T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783349044062%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3A1250%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A1500.00001%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Umsatzsteuer%207%25%22%2C%22slug%22%3A%22USt.%207%25%22%2C%22skr04%22%3A%223800%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Werkzeuge%20und%20Kleinger%C3%A4te%22%2C%22slug%22%3A%22Werkzg.%22%2C%22skr04%22%3A%220620%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Geringwertige%20Wirtschaftsg%C3%BCter%22%2C%22slug%22%3A%22GWG%22%2C%22skr04%22%3A%220670%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Wirtschaftsg%C3%BCter%20(Sammelposten)%22%2C%22slug%22%3A%22W-G%C3%BCter%22%2C%22skr04%22%3A%220675%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Wareneingang%207%20%25%20Vorsteuer%22%2C%22slug%22%3A%22Ware%207%25%22%2C%22skr04%22%3A%225300%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Wareneingang%20ohne%20Vorsteuerabzug%22%2C%22slug%22%3A%22Ware%20allg%22%2C%22skr04%22%3A%225349%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Wareneingang%2019%20%25%20Vorsteuer%22%2C%22slug%22%3A%22Ware%2019%25%22%2C%22skr04%22%3A%225400%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22L%C3%B6hne%20und%20Geh%C3%A4lter%20(ohne%20Rechnung)%22%2C%22slug%22%3A%22L%C3%B6hne%22%2C%22skr04%22%3A%226000%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Personalaufwendungen%22%2C%22name%22%3A%22Gesch%C3%A4ftsf%C3%BChrergeh%C3%A4lter%20(ohne%20Rechnung)%22%2C%22skr04%22%3A%226027%22%2C%22slug%22%3A%22GF-Ghlt%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%224127%22%2C%22isChoosable%22%3Atrue%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Beitr%C3%A4ge%20zur%20BG%22%2C%22slug%22%3A%22BG%22%2C%22skr04%22%3A%226120%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Aufwendungen%20zur%20Altersvorsorge%22%2C%22slug%22%3A%22A-Vsg%22%2C%22skr04%22%3A%226140%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstiger%20Betriebsbedarf%22%2C%22slug%22%3A%22Bedarf%22%2C%22skr04%22%3A%226304%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Miete%20(unbewegliche%20Wirtschaftsg%C3%BCter)%22%2C%22slug%22%3A%22Miete%22%2C%22skr04%22%3A%226310%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Pacht%20(unbewegliche%20Wirtschaftsg%C3%BCter)%22%2C%22slug%22%3A%22Pacht%22%2C%22skr04%22%3A%226315%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Heizung%22%2C%22slug%22%3A%22Heizung%22%2C%22skr04%22%3A%226320%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Gas%20%2F%20Strom%20%2F%20Wasser%22%2C%22slug%22%3A%22Nebenkst.%22%2C%22skr04%22%3A%226325%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Reinigung%22%2C%22slug%22%3A%22Reinig%2C%22%2C%22skr04%22%3A%226330%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstige%20Raumkosten%22%2C%22slug%22%3A%22Stg%20Raumk.%22%2C%22skr04%22%3A%226345%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Versicherungen%22%2C%22slug%22%3A%22Vers.%22%2C%22skr04%22%3A%226400%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Sonstige%20betriebliche%20Aufwendungen%22%2C%22name%22%3A%22Sonstige%20Abgaben%22%2C%22skr04%22%3A%226430%22%2C%22slug%22%3A%22Stg.%20Abg.%22%2C%22saldo%22%3A40%2C%22skr03%22%3A%224390%22%2C%22isChoosable%22%3Atrue%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A40%2C%22datum%22%3A%222026-05-20T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348190047%22%2C%22gegenkonto%22%3A%221600%20Kasse%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A40.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Fahrzeug-Versicherungen%22%2C%22slug%22%3A%22Fzg%20Vers.%22%2C%22skr04%22%3A%226520%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Laufende%20Fahrzeug-Betriebskosten%22%2C%22slug%22%3A%22Fzg.%20B-kst.%22%2C%22skr04%22%3A%226530%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Fahrzeugkosten%22%2C%22name%22%3A%22Fahrzeug-Reparaturen%22%2C%22skr04%22%3A%226540%22%2C%22slug%22%3A%22Fzg.%20Rep.%22%2C%22saldo%22%3A168.07%2C%22skr03%22%3A%224540%22%2C%22isChoosable%22%3Atrue%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A168.07%2C%22datum%22%3A%222026-07-07T13%3A31%3A49.725Z%22%2C%22buchungs_id%22%3A%221783431138113%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A168.07001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Garagenmiete%22%2C%22slug%22%3A%22Fzg.%20Grg.%22%2C%22skr04%22%3A%226550%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Mietleasing%20Kfz%22%2C%22slug%22%3A%22Leasing%22%2C%22skr04%22%3A%226560%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstige%20Fahrzeugkosten%22%2C%22slug%22%3A%22Stg%20Fzg%22%2C%22skr04%22%3A%226570%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Mautgeb%C3%BChren%22%2C%22slug%22%3A%22Maut%22%2C%22skr04%22%3A%226580%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Kosten%20f%C3%BCr%20betrieblich%20genutzte%20zum%20Privatverm%C3%B6gen%20geh%C3%B6rende%20Fahrzeuge%22%2C%22slug%22%3A%22Pvt%20Fzg%22%2C%22skr04%22%3A%226590%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstige%20Betriebsausgaben%20(abziehbarer%20Anteil)%22%2C%22slug%22%3A%22Stg.%20BA%22%2C%22skr04%22%3A%226601%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Reisekosten%22%2C%22slug%22%3A%22Reise%20K.%22%2C%22skr04%22%3A%226670%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Verpflegungsmehraufwand%22%2C%22slug%22%3A%22Verpfl.K.%22%2C%22skr04%22%3A%226674%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22%C3%9Cbernachtungsaufwand%20und%20Reisenebenkosten%22%2C%22slug%22%3A%22%C3%9Cbern.K.%22%2C%22skr04%22%3A%226680%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Versandkosten%22%2C%22slug%22%3A%22Versand%22%2C%22skr04%22%3A%226705%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Verpackungsmaterial%22%2C%22slug%22%3A%22Verpack.%22%2C%22skr04%22%3A%226710%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Transportversicherungen%22%2C%22slug%22%3A%22Trapo.%22%2C%22skr04%22%3A%226760%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Verkaufsprovisionen%22%2C%22slug%22%3A%22Provision%22%2C%22skr04%22%3A%226770%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Porto%22%2C%22slug%22%3A%22Porto%22%2C%22skr04%22%3A%226800%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Telefon%22%2C%22slug%22%3A%22Tel%22%2C%22skr04%22%3A%226805%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Sonstige%20betriebliche%20Aufwendungen%22%2C%22name%22%3A%22Internetkosten%22%2C%22skr04%22%3A%226810%22%2C%22slug%22%3A%22Internet%22%2C%22saldo%22%3A150%2C%22skr03%22%3A%224925%22%2C%22isChoosable%22%3Atrue%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A150%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348038938%22%2C%22gegenkonto%22%3A%221810%20PayPal%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A150.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22B%C3%BCrobedarf%22%2C%22slug%22%3A%22B%C3%BCro%22%2C%22skr04%22%3A%226815%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Zeitschriften%20%2F%20B%C3%BCcher%20%2F%20digitale%20Medien%20(Fachliteratur)%22%2C%22slug%22%3A%22Medien%22%2C%22skr04%22%3A%226820%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Fortbildungskosten%22%2C%22slug%22%3A%22Fortbild.%22%2C%22skr04%22%3A%226821%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Freiwillige%20Sozialleistungen%22%2C%22slug%22%3A%22Frwlg%20Soz.%22%2C%22skr04%22%3A%226822%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Buchf%C3%BChrungskosten%22%2C%22slug%22%3A%22Buchf%C3%BChrg.%22%2C%22skr04%22%3A%226830%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Mieten%20f%C3%BCr%20Einrichtungen%20(bewegliche%20Wirtschaftsg%C3%BCter)%22%2C%22slug%22%3A%22Mieten%22%2C%22skr04%22%3A%226835%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Gewerbesteuer%22%2C%22slug%22%3A%22Gw.St.%22%2C%22skr04%22%3A%227610%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstige%20Betriebssteuern%22%2C%22slug%22%3A%22Stg.%20St.%22%2C%22skr04%22%3A%227650%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Kfz-Steuer%22%2C%22slug%22%3A%22Kfz-St.%22%2C%22skr04%22%3A%227685%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Gew%C3%A4hrte%20Rabatte%200%25%22%2C%22slug%22%3A%22Rabatt%200%25%22%2C%22skr04%22%3A%224770%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Gew%C3%A4hrte%20Rabatte%207%25%22%2C%22slug%22%3A%22Rabatt%207%25%22%2C%22skr04%22%3A%224780%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Erl%C3%B6sschm%C3%A4lerungen%22%2C%22name%22%3A%22Gew%C3%A4hrte%20Rabatte%2019%25%22%2C%22skr04%22%3A%224790%22%2C%22slug%22%3A%22Rabatt%2019%25%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%228790%22%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Rechts-%20%26%20Beratungskosten%22%2C%22slug%22%3A%22Rechts-K.%22%2C%22skr04%22%3A%226825%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Kapitalertragssteuer%2025%25%22%2C%22slug%22%3A%22Kp-ESt%2025%25%22%2C%22skr04%22%3A%227630%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Sonstige%20Zinsen%20und%20%C3%A4hnliche%20Ertr%C3%A4ge%22%2C%22slug%22%3A%22Zinsertr.%22%2C%22skr04%22%3A%227100%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Nebenkosten%20des%20Geldverkehrs%22%2C%22slug%22%3A%22NK%20d.%20GV%22%2C%22skr04%22%3A%226855%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22name%22%3A%22GuV%22%2C%22skr04%22%3A%22GuV%22%2C%22slug%22%3A%22GuV%22%2C%22info%22%3A%22GuV%22%2C%22saldo%22%3A-358.07%2C%22seite%22%3A%22GuV%22%2C%22t_konto%22%3A%5B%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Abziehbare%20Vorsteuer%20(allg.)%22%2C%22skr04%22%3A%221400%22%2C%22slug%22%3A%22VSt.%22%2C%22info%22%3A%22F%C3%BCr%20erhaltene%20Rechung%20mit%20gemischtem%20Steuerprozentsatz%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221570%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22slug%22%3A%22BW-Kosten%22%2C%22skr04%22%3A%226640%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Nicht%20abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22slug%22%3A%22n.a.%20BW-K%22%2C%22skr04%22%3A%226644%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22PayPal%22%2C%22skr04%22%3A%221810%22%2C%22slug%22%3A%22PayPal%22%2C%22info%22%3A%22PayPal%20als%20Nebenkonto%20zum%20normalen%20Bankkonto%20der%20Firma%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221250%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348038938%22%2C%22gegenkonto%22%3A%226810%20Internet%22%2C%22haben%22%3A150%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348038938%22%2C%22gegenkonto%22%3A%221406%20VSt.%2019%25%22%2C%22haben%22%3A28.5%7D%2C%7B%22soll%22%3A178.5%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348093124%22%2C%22gegenkonto%22%3A%222902%20E.Kpl%20C.F.%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Kasse%22%2C%22skr04%22%3A%221600%22%2C%22slug%22%3A%22Kasse%22%2C%22info%22%3A%22Bargeld%20im%20Besitz%20der%20Firmeninhaber%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221000%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-05-20T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348190047%22%2C%22gegenkonto%22%3A%226430%20Stg.%20Abg.%22%2C%22haben%22%3A40%7D%2C%7B%22soll%22%3A40%2C%22datum%22%3A%222026-05-20T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348939031%22%2C%22gegenkonto%22%3A%222902%20E.Kpl%20C.F.%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Umsatzsteuer%207%25%22%2C%22slug%22%3A%22USt.%207%25%22%2C%22skr04%22%3A%223801%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Verbindlichkeiten%22%2C%22name%22%3A%22Umsatzsteuer%2019%25%22%2C%22skr04%22%3A%223806%22%2C%22slug%22%3A%22USt.%2019%25%22%2C%22info%22%3A%22F%C3%BCr%20Rechnungen%20an%20unsere%20Kunden%20mit%20einem%20USt.-Satz%20von%2019%25%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221776%22%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Abziehbare%20Vorsteuer%207%20%25%22%2C%22slug%22%3A%22VSt.%207%25%22%2C%22skr04%22%3A%221401%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22info%22%3A%22F%C3%BCr%20erhaltene%20Rechnungen%20mit%2019%25%20ausgewiesener%20Umsatzsteuer%22%2C%22saldo%22%3A60.43%2C%22skr03%22%3A%221576%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A28.5%2C%22datum%22%3A%222026-05-04T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348038938%22%2C%22gegenkonto%22%3A%221810%20PayPal%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A31.93%2C%22datum%22%3A%222026-07-07T13%3A31%3A49.725Z%22%2C%22buchungs_id%22%3A%221783431138113%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A60.43001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22kategorie%22%3A%22Umsatzerl%C3%B6se%22%2C%22name%22%3A%22Umsatzerl%C3%B6se%22%2C%22skr04%22%3A%224000%22%2C%22slug%22%3A%22Umsatz%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%228000%22%2C%22seite%22%3A%22ERTRAG%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Forderungen%20aus%20L%26L%22%2C%22skr04%22%3A%221200%22%2C%22slug%22%3A%22F.%20a.%20L%26L%22%2C%22info%22%3A%22Rechnung%20die%20wir%20an%20einen%20Kunden%20stellen%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221400%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22kategorie%22%3A%22Personalaufwendungen%22%2C%22name%22%3A%22Fremdleistungen%20(D)%22%2C%22skr04%22%3A%225900%22%2C%22slug%22%3A%22F-Lstg.%20(D)%22%2C%22info%22%3A%22Fremdleistungen%20von%20inl%C3%A4ndischen%20Rechnungsstellern%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%223100%22%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22kategorie%22%3A%22Verbindlichkeiten%22%2C%22name%22%3A%22Verbindlichkeiten%20aus%20L%26L%22%2C%22skr04%22%3A%223300%22%2C%22slug%22%3A%22V.%20a.%20L%26L%22%2C%22info%22%3A%22Bspw.%20eine%20erhaltene%20Rechnung%20mit%20regul%C3%A4rem%20USt.-Satz%22%2C%22saldo%22%3A0%2C%22skr03%22%3A%221600%22%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22B%C3%BCro-%20und%20Gesch%C3%A4ftsausstattung%22%2C%22slug%22%3A%22BGA%22%2C%22skr04%22%3A%220635%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22name%22%3A%22Eigenkapital%22%2C%22slug%22%3A%22E.Kpl%22%2C%22skr04%22%3A%222900%22%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Bank%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22info%22%3A%22%5C%22Bank%5C%22%20ist%20ein%20aktives%20Bestandskonto%20(meist%20Konto%201800%20oder%20%C3%A4hnliche%2C%20das%20alle%20liquiden%20Mittel%20eines%20Unternehmens%20auf%20seinen%20betrieblichen%20Bankkonten%20erfasst%20und%20Bewegungen%20wie%20Einzahlungen%2C%20Abhebungen%20und%20%C3%9Cberweisungen%20abbildet.%20Es%20spiegelt%20die%20verf%C3%BCgbaren%20Geldmittel%20wider%20und%20wird%20in%20der%20Bilanz%20auf%20der%20Aktivseite%20ausgewiesen.%20%22%2C%22saldo%22%3A2581.5%2C%22skr03%22%3A%221200%22%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A250%2C%22datum%22%3A%222026-06-30T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783348996166%22%2C%22gegenkonto%22%3A%222901%20E.Kpl%20T.W.%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A1250%2C%22datum%22%3A%222026-07-01T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783349044062%22%2C%22gegenkonto%22%3A%222901%20E.Kpl%20T.W.%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A1281.5%2C%22datum%22%3A%222026-07-01T22%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221783349113929%22%2C%22gegenkonto%22%3A%222902%20E.Kpl%20C.F.%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-07-07T13%3A31%3A49.725Z%22%2C%22buchungs_id%22%3A%221783431138113%22%2C%22gegenkonto%22%3A%226540%20Fzg.%20Rep.%22%2C%22haben%22%3A168.07%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-07-07T13%3A31%3A49.725Z%22%2C%22buchungs_id%22%3A%221783431138113%22%2C%22gegenkonto%22%3A%221406%20VSt.%2019%25%22%2C%22haben%22%3A31.93%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A2581.50001%2C%22soll%22%3Anull%7D%5D%7D%5D%2C%22GuV%22%3A%7B%22name%22%3A%22GuV%22%2C%22skr04%22%3A%22GuV%22%2C%22slug%22%3A%22GuV%22%2C%22info%22%3A%22GuV%22%2C%22saldo%22%3A-358.07%2C%22seite%22%3A%22GuV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%225300%20Ware%207%25%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%225349%20Ware%20allg%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%225400%20Ware%2019%25%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226000%20L%C3%B6hne%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226027%20GF-Ghlt%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226120%20BG%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226140%20A-Vsg%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226304%20Bedarf%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226310%20Miete%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226315%20Pacht%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226320%20Heizung%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226325%20Nebenkst.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226330%20Reinig%2C%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226345%20Stg%20Raumk.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226400%20Vers.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226430%20Stg.%20Abg.%22%2C%22haben%22%3Anull%2C%22soll%22%3A40%7D%2C%7B%22gegenkonto%22%3A%226520%20Fzg%20Vers.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226530%20Fzg.%20B-kst.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226540%20Fzg.%20Rep.%22%2C%22haben%22%3Anull%2C%22soll%22%3A168.07%7D%2C%7B%22gegenkonto%22%3A%226550%20Fzg.%20Grg.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226560%20Leasing%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226570%20Stg%20Fzg%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226580%20Maut%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226590%20Pvt%20Fzg%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226601%20Stg.%20BA%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226670%20Reise%20K.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226674%20Verpfl.K.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226680%20%C3%9Cbern.K.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226705%20Versand%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226710%20Verpack.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226760%20Trapo.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226770%20Provision%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226800%20Porto%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226805%20Tel%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226810%20Internet%22%2C%22haben%22%3Anull%2C%22soll%22%3A150%7D%2C%7B%22gegenkonto%22%3A%226815%20B%C3%BCro%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226820%20Medien%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226821%20Fortbild.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226822%20Frwlg%20Soz.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226830%20Buchf%C3%BChrg.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226835%20Mieten%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%227610%20Gw.St.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%227650%20Stg.%20St.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%227685%20Kfz-St.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%224770%20Rabatt%200%25%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%224780%20Rabatt%207%25%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%224790%20Rabatt%2019%25%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226825%20Rechts-K.%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%227100%20Zinsertr.%22%2C%22haben%22%3A0%2C%22soll%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%226855%20NK%20d.%20GV%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226640%20BW-Kosten%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226644%20n.a.%20BW-K%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%2C%7B%22gegenkonto%22%3A%224000%20Umsatz%22%2C%22haben%22%3A0%2C%22soll%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%225900%20F-Lstg.%20(D)%22%2C%22haben%22%3Anull%2C%22soll%22%3A0%7D%5D%7D%7D"

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
    console.log("Version: 07.Juli.2026 - 13:28")
    console.log("...document loaded");
    if (!isPublished) {
        startProgram()
    }
});

function startProgram() {
    console.log("startProgram...");

    text.value = localStorage.getItem("myLocalStorage");
    
    decodeURL()
    closeBilanz()
    bilanz = getBilanz()
    console.log("bilanz", bilanz);
    createPdf()
}

function decodeURL() {
    console.log("decodeUrl...");

    let qUrl = text.value
    if (!isPublished) { qUrl = testURL }
    if (text.value === "local") {
        console.log("...try to fetch local storage...")
        qUrl = localStorage.getItem("myLocalStorage");
        console.log(qUrl);
    }

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
        //imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
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

        let beleg_nr = ""

        e.belege?.forEach(beleg => {
            if (beleg) {
                belege.push(beleg)
                beleg_nr += beleg.nr + " "
            }
        })

        const fS = 7
        y += 7

        lineArray.push(
            new Text(i + "", fS, "normal", null, null, column[0], y), // Lfd.Nr
            new Text(e.datum_formatted, fS, "normal", null, null, column[1], y), //Datum
            new Text(beleg_nr, fS, "normal", null, null, column[2], y), //Belegnr
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

            if (beleg.type.toLowerCase() === "pdf") {
                const pdfUrl = await extractUrl(beleg.url, "pdf")
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
            } else {
                const r = extractUrl(beleg.url, "img")
                const imgUrl = r.imgUrl
                const fileExt = r.fileExt

                console.log("imgUrl", imgUrl);

                //TODO: Timer falls nicht geladen
                doc.addPage();
                doc.setFontSize(8)
                doc.text("Beleg: " + beleg.nr, xOffset, 8, "left")
                doc.text("Buchungsdatum: " + beleg.date, xOffsetRight, 8, "right",)
                await doc.addImage(imgUrl, fileExt, xOffset, xOffset, 100, 100);
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

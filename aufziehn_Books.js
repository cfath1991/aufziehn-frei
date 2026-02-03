const isPublished = false

const FONT = "helvetica"

const testURL = "%7B%22header%22%3A%7B%22date_from%22%3A%222025-12-31T23%3A00%3A00.000Z%22%2C%22from_formatted%22%3A%2201.01.2026%22%2C%22date_to%22%3A%222026-02-02T23%3A00%3A00.000Z%22%2C%22to_formatted%22%3A%2203.02.2026%22%7D%2C%22prev_bilanz%22%3Anull%2C%22journal%22%3A%5B%7B%22betrag%22%3A1000%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%22%2C%22betrag%22%3A1000%2C%22_id%22%3A%2200eba0be-2f12-4f37-bb6b-3219a6971c38%22%2C%22skr04%22%3A%222900%22%2C%22slug%22%3A%22E.Kpl%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A1000%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221769677043638%22%2C%22buchungssatz%22%3A%22Bank%20an%20Eigenkapital%22%2C%22beschreibung%22%3A%22Ersteinzahlung%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2201.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22Ersteinzahlung%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%2270a519c1-20b0-483b-b48d-7339b525c331%22%7D%7D%2C%7B%22betrag%22%3A150%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A150%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Nebenkosten%20des%20Geldverkehrs%22%2C%22betrag%22%3A150%2C%22_id%22%3A%221a34c5ab-577e-4d98-9773-eed933ce380a%22%2C%22skr04%22%3A%226855%22%2C%22slug%22%3A%22NK%20d.%20GV%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769677190957%22%2C%22buchungssatz%22%3A%22Nebenkosten%20des%20Geldverkehrs%20an%20Bank%22%2C%22beschreibung%22%3A%22Hausbank%3A%20Kontof%C3%BChrungskosten%22%2C%22datum_formatted%22%3A%2202.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22Hausbank%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22a956e104-6db5-4dae-b279-cf90b1ba427b%22%7D%7D%2C%7B%22betrag%22%3A178.5%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22betrag%22%3A28.5%2C%22_id%22%3A%22080c84a8-d17d-4337-986b-8216b520bd97%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Verbindlichkeiten%20aus%20L%26L%22%2C%22betrag%22%3A178.5%2C%22_id%22%3A%22a07d831b-10a2-4581-b1ea-2adf89b9b4b4%22%2C%22skr04%22%3A%223300%22%2C%22slug%22%3A%22V.%20a.%20L%26L%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Fremdleistungen%20(D)%22%2C%22betrag%22%3A150%2C%22_id%22%3A%22bcbe29f9-b198-4e3c-8087-98babded5e26%22%2C%22skr04%22%3A%225900%22%2C%22slug%22%3A%22F-Lstg.%20(D)%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769677206283%22%2C%22buchungssatz%22%3A%22Fremdleistung%20%2B%20VSt.%2019%25%20an%20vL%26L%22%2C%22beschreibung%22%3A%22Eingangsrechnung%3A%200111A%20(Flugschule%20%5C%22Aufzieh'n%20frei!%5C%22)%22%2C%22datum_formatted%22%3A%2205.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22ER-0111A%22%2C%22database%22%3A%22R_Invoices%22%2C%22_id%22%3A%22c27d10b5-e411-48aa-8f3e-7290d214f1d0%22%7D%7D%2C%7B%22betrag%22%3A130%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%20(allg.)%22%2C%22betrag%22%3A29.8%2C%22_id%22%3A%22443fa5cb-f913-4847-a5bc-6fa16b5ac42d%22%2C%22skr04%22%3A%221400%22%2C%22slug%22%3A%22VSt.%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A130%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Rechts-%20%26%20Beratungskosten%22%2C%22betrag%22%3A100.2%2C%22_id%22%3A%222dec105b-b61f-4f82-86a1-d97f0bec9dda%22%2C%22skr04%22%3A%226825%22%2C%22slug%22%3A%22Rechts-K.%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769677677544%22%2C%22buchungssatz%22%3A%22Rechts-%20%26%20Beratungskosten%20an%20Bank%22%2C%22beschreibung%22%3A%22Anwalt%3A%20Gr%C3%BCndungskosten%22%2C%22datum_formatted%22%3A%2208.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22Anwalt%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22f5408e95-aea2-4293-854a-04571c30cf63%22%7D%7D%2C%7B%22betrag%22%3A250%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22betrag%22%3A39.92%2C%22_id%22%3A%22080c84a8-d17d-4337-986b-8216b520bd97%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A250%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Telefon-%20%26%20Internetkosten%22%2C%22betrag%22%3A210.07999999999998%2C%22_id%22%3A%22d16773aa-cb64-4a18-b0be-cd906377ef69%22%2C%22skr04%22%3A%226810%22%2C%22slug%22%3A%22Tel%20%26%20Web%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769677140992%22%2C%22buchungssatz%22%3A%22Internetkosten%20%2B%20VSt.%2019%25%20an%20Bank%22%2C%22beschreibung%22%3A%22Wix.de%3A%20Hostingkosten%22%2C%22datum_formatted%22%3A%2229.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22Wix.de%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22df275d12-1c97-4459-908d-3c3c25d924ff%22%7D%7D%2C%7B%22betrag%22%3A900%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Umsatzsteuer%2019%25%22%2C%22betrag%22%3A143.7%2C%22_id%22%3A%226dfc440a-b8ed-40ca-a842-3018b995cd39%22%2C%22skr04%22%3A%223806%22%2C%22slug%22%3A%22USt.%2019%25%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Umsatzerl%C3%B6se%22%2C%22betrag%22%3A756.3%2C%22_id%22%3A%225ca0015d-f259-40d3-a359-073fafd543fa%22%2C%22skr04%22%3A%224000%22%2C%22slug%22%3A%22Umsatz%22%2C%22seite%22%3A%22ERTRAG%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Forderungen%20aus%20L%26L%22%2C%22betrag%22%3A900%2C%22_id%22%3A%22f7962f95-d3c0-4ae2-906f-b6f2a02b42a8%22%2C%22skr04%22%3A%221200%22%2C%22slug%22%3A%22F.%20a.%20L%26L%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221769677319016%22%2C%22buchungssatz%22%3A%22Forderung%20aus%20L%26L%20an%20Umsatzerl%C3%B6se%20%2B%20Umsatzsteuer%2019%25%22%2C%22beschreibung%22%3A%22Rechnung%20an%20Kunden%3A%202026-0001%22%2C%22datum_formatted%22%3A%2229.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%222026-0001%22%2C%22database%22%3A%22Invoices%22%2C%22_id%22%3A%22935f4ae9-8465-48a1-9a72-687618c02e55%22%7D%7D%2C%7B%22betrag%22%3A86.1%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%20(allg.)%22%2C%22betrag%22%3A13%2C%22_id%22%3A%22443fa5cb-f913-4847-a5bc-6fa16b5ac42d%22%2C%22skr04%22%3A%221400%22%2C%22slug%22%3A%22VSt.%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A86.1%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22betrag%22%3A73.1%2C%22_id%22%3A%22c2466409-3f39-4d46-b3c1-c93317568fc3%22%2C%22skr04%22%3A%226640%22%2C%22slug%22%3A%22BW-Kosten%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769868853283%22%2C%22buchungssatz%22%3A%22Bewirtungskosten%20(70%25)%20%2B%20VSt.%20(allg.)%20%20an%20Bank%22%2C%22beschreibung%22%3A%22asdfsdfdasfasdf%3A%20dsfsadfdsfasdfa%22%2C%22datum_formatted%22%3A%2231.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22asdfsdfdasfasdf%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22501bdd3e-e658-41a3-91b2-1997bc554e4a%22%7D%7D%2C%7B%22betrag%22%3A36.9%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%20(allg.)%22%2C%22betrag%22%3A12%2C%22_id%22%3A%22443fa5cb-f913-4847-a5bc-6fa16b5ac42d%22%2C%22skr04%22%3A%221400%22%2C%22slug%22%3A%22VSt.%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A36.9%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Nicht%20abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22betrag%22%3A24.9%2C%22_id%22%3A%224893f243-ac28-482a-9640-a471673e4c18%22%2C%22skr04%22%3A%226644%22%2C%22slug%22%3A%22n.a.%20BW-K%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769868857664%22%2C%22buchungssatz%22%3A%22Nicht%20abzgf.%20Bewirtungskosten%20(30%25)%20%2B%20VSt.%20(allg.)%20%20an%20Bank%22%2C%22beschreibung%22%3A%22asdfsdfdasfasdf%3A%20dsfsadfdsfasdfa%22%2C%22datum_formatted%22%3A%2231.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22asdfsdfdasfasdf%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22501bdd3e-e658-41a3-91b2-1997bc554e4a%22%7D%7D%2C%7B%22betrag%22%3A1785%2C%22steuer_konto%22%3A%7B%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22betrag%22%3A285%2C%22_id%22%3A%22080c84a8-d17d-4337-986b-8216b520bd97%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22haben_konto%22%3A%7B%22name%22%3A%22Verbindlichkeiten%20aus%20L%26L%22%2C%22betrag%22%3A1785%2C%22_id%22%3A%22a07d831b-10a2-4581-b1ea-2adf89b9b4b4%22%2C%22skr04%22%3A%223300%22%2C%22slug%22%3A%22V.%20a.%20L%26L%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Fremdleistungen%20(D)%22%2C%22betrag%22%3A1500%2C%22_id%22%3A%22bcbe29f9-b198-4e3c-8087-98babded5e26%22%2C%22skr04%22%3A%225900%22%2C%22slug%22%3A%22F-Lstg.%20(D)%22%2C%22seite%22%3A%22AUFWAND%22%7D%2C%22buchungs_id%22%3A%221769868949902%22%2C%22buchungssatz%22%3A%22Fremdleistung%20%2B%20VSt.%2019%25%20an%20vL%26L%22%2C%22beschreibung%22%3A%22Eingangsrechnung%3A%201010%20(Flugschule%20%5C%22Aufzieh'n%20frei!%5C%22)%22%2C%22datum_formatted%22%3A%2231.01.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22ER-1010%22%2C%22database%22%3A%22R_Invoices%22%2C%22_id%22%3A%2223a92fce-1d14-496d-8f2d-1157ca9974b0%22%7D%7D%2C%7B%22betrag%22%3A2000%2C%22haben_konto%22%3A%7B%22name%22%3A%22Eigenkapital%22%2C%22betrag%22%3A2000%2C%22_id%22%3A%2200eba0be-2f12-4f37-bb6b-3219a6971c38%22%2C%22skr04%22%3A%222900%22%2C%22slug%22%3A%22E.Kpl%22%2C%22seite%22%3A%22PASSIV%22%7D%2C%22soll_konto%22%3A%7B%22name%22%3A%22Bank%22%2C%22betrag%22%3A2000%2C%22_id%22%3A%22076e0ea7-4e9c-4bb3-b3fe-2244677c944c%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22seite%22%3A%22AKTIV%22%7D%2C%22buchungs_id%22%3A%221770128983814%22%2C%22buchungssatz%22%3A%22Bank%20an%20Eigenkapital%22%2C%22beschreibung%22%3A%22Christian%20Fath%3A%20Einzahlung%20privater%20Geldmittel%22%2C%22datum_formatted%22%3A%2203.02.2026%22%2C%22beleg%22%3A%7B%22title%22%3A%22Christian%20Fath%22%2C%22database%22%3A%22Belege%22%2C%22_id%22%3A%22e85aadff-fad4-484d-994c-87725cfb083a%22%7D%7D%5D%2C%22konten%22%3A%5B%7B%22name%22%3A%22Rechts-%20%26%20Beratungskosten%22%2C%22skr04%22%3A%226825%22%2C%22slug%22%3A%22Rechts-K.%22%2C%22saldo%22%3A100.2%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A100.2%2C%22datum%22%3A%222026-01-07T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677677544%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A100.20001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22Telefon-%20%26%20Internetkosten%22%2C%22skr04%22%3A%226810%22%2C%22slug%22%3A%22Tel%20%26%20Web%22%2C%22info%22%3A%22Kosten%20f%C3%BCr%20Telefon%20und%20Internet%22%2C%22saldo%22%3A210.08%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A210.07999999999998%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677140992%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A210.08001000000002%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22name%22%3A%22Nebenkosten%20des%20Geldverkehrs%22%2C%22skr04%22%3A%226855%22%2C%22slug%22%3A%22NK%20d.%20GV%22%2C%22info%22%3A%22Zu%20zahlende%20Geb%C3%BChren%20im%20Zusammenhang%20mit%20Bankkonto%22%2C%22saldo%22%3A150%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A150%2C%22datum%22%3A%222026-01-01T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677190957%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A150.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22GuV%22%2C%22skr04%22%3A%22GuV%22%2C%22slug%22%3A%22GuV%22%2C%22info%22%3A%22GuV%22%2C%22saldo%22%3A2178.27%2C%22seite%22%3A%22GuV%22%2C%22t_konto%22%3A%5B%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Abziehbare%20Vorsteuer%20(allg.)%22%2C%22skr04%22%3A%221400%22%2C%22slug%22%3A%22VSt.%22%2C%22info%22%3A%22F%C3%BCr%20erhaltene%20Rechung%20mit%20gemischtem%20Steuerprozentsatz%22%2C%22saldo%22%3A54.8%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A29.8%2C%22datum%22%3A%222026-01-07T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677677544%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A13%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868853283%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A12%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868857664%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A54.80001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22Abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22skr04%22%3A%226640%22%2C%22slug%22%3A%22BW-Kosten%22%2C%22info%22%3A%22Bewirtungskosten%20Anteil%2C%20der%20steuerlich%20ber%C3%BCcksichtig%20werden%20kann%20(70%25%20der%20Gesamtbuchung)%22%2C%22saldo%22%3A73.1%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A73.1%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868853283%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A73.10001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22Nicht%20abzugsf%C3%A4hige%20Bewirtungskosten%22%2C%22skr04%22%3A%226644%22%2C%22slug%22%3A%22n.a.%20BW-K%22%2C%22info%22%3A%22Bewirtungskosten%20Anteil%2C%20der%20nicht%20steuerlich%20abgezogen%20werden%20kann%20(30%25%20der%20Gesamtbuchung)%22%2C%22saldo%22%3A24.9%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A24.9%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868857664%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A24.900009999999998%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Verbindlichkeiten%22%2C%22name%22%3A%22Umsatzsteuer%2019%25%22%2C%22skr04%22%3A%223806%22%2C%22slug%22%3A%22USt.%2019%25%22%2C%22info%22%3A%22F%C3%BCr%20Rechnungen%20an%20unsere%20Kunden%20mit%20einem%20USt.-Satz%20von%2019%25%22%2C%22saldo%22%3A833.45%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A689.75001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677319016%22%2C%22gegenkonto%22%3A%224000%20Umsatz%22%2C%22haben%22%3A143.7%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A833.45001%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Abziehbare%20Vorsteuer%2019%20%25%22%2C%22skr04%22%3A%221406%22%2C%22slug%22%3A%22VSt.%2019%25%22%2C%22info%22%3A%22F%C3%BCr%20erhaltene%20Rechnungen%20mit%2019%25%20ausgewiesener%20Umsatzsteuer%22%2C%22saldo%22%3A353.42%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A39.92%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677140992%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A28.5%2C%22datum%22%3A%222026-01-04T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677206283%22%2C%22gegenkonto%22%3A%223300%20V.%20a.%20L%26L%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A285%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868949902%22%2C%22gegenkonto%22%3A%223300%20V.%20a.%20L%26L%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A353.42001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22Umsatzerl%C3%B6se%22%2C%22skr04%22%3A%224000%22%2C%22slug%22%3A%22Umsatz%22%2C%22saldo%22%3A4386.55%2C%22seite%22%3A%22ERTRAG%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A3630.25001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677319016%22%2C%22gegenkonto%22%3A%221200%20F.%20a.%20L%26L%22%2C%22haben%22%3A756.3%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A4386.55001%7D%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Forderungen%20aus%20L%26L%22%2C%22skr04%22%3A%221200%22%2C%22slug%22%3A%22F.%20a.%20L%26L%22%2C%22info%22%3A%22Rechnung%20die%20wir%20an%20einen%20Kunden%20stellen%22%2C%22saldo%22%3A5220%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A4320.00001%7D%2C%7B%22soll%22%3A756.3%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677319016%22%2C%22gegenkonto%22%3A%224000%20Umsatz%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A143.7%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677319016%22%2C%22gegenkonto%22%3A%223806%20USt.%2019%25%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A5220.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22name%22%3A%22Fremdleistungen%20(D)%22%2C%22skr04%22%3A%225900%22%2C%22slug%22%3A%22F-Lstg.%20(D)%22%2C%22info%22%3A%22Fremdleistungen%20von%20inl%C3%A4ndischen%20Rechnungsstellern%22%2C%22saldo%22%3A1650%2C%22seite%22%3A%22AUFWAND%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A150%2C%22datum%22%3A%222026-01-04T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677206283%22%2C%22gegenkonto%22%3A%223300%20V.%20a.%20L%26L%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3A1500%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868949902%22%2C%22gegenkonto%22%3A%223300%20V.%20a.%20L%26L%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A1650.00001%2C%22soll%22%3Anull%7D%5D%7D%2C%7B%22kategorie%22%3A%22Verbindlichkeiten%22%2C%22name%22%3A%22Verbindlichkeiten%20aus%20L%26L%22%2C%22skr04%22%3A%223300%22%2C%22slug%22%3A%22V.%20a.%20L%26L%22%2C%22info%22%3A%22Bspw.%20eine%20erhaltene%20Rechnung%20mit%20regul%C3%A4rem%20USt.-Satz%22%2C%22saldo%22%3A1963.5%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-04T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677206283%22%2C%22gegenkonto%22%3A%225900%20F-Lstg.%20(D)%22%2C%22haben%22%3A150%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-04T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677206283%22%2C%22gegenkonto%22%3A%221406%20VSt.%2019%25%22%2C%22haben%22%3A28.5%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868949902%22%2C%22gegenkonto%22%3A%225900%20F-Lstg.%20(D)%22%2C%22haben%22%3A1500%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868949902%22%2C%22gegenkonto%22%3A%221406%20VSt.%2019%25%22%2C%22haben%22%3A285%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A1963.50001%7D%5D%7D%2C%7B%22t_konto%22%3A%5B%5D%2C%22prev_saldo%22%3A0%7D%2C%7B%22kategorie%22%3A%22Eigenkapital%22%2C%22name%22%3A%22Eigenkapital%22%2C%22skr04%22%3A%222900%22%2C%22slug%22%3A%22E.Kpl%22%2C%22info%22%3A%22Gezeichnetes%20Kapital%20ist%20das%20von%20Gesellschaftern%20eingebrachte%20und%20in%20der%20Bilanz%20ausgewiesene%20Kapital%20einer%20Kapitalgesellschaft%20(z.B.%20Stammkapital%20bei%20der%20GmbH%2C%20Grundkapital%20bei%20der%20AG)%22%2C%22saldo%22%3A3000%2C%22seite%22%3A%22PASSIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3A0.00001%2C%22soll%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222025-12-31T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677043638%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3A1000%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-02-02T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221770128983814%22%2C%22gegenkonto%22%3A%221800%20Bank%22%2C%22haben%22%3A2000%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3Anull%2C%22soll%22%3A3000.00001%7D%5D%7D%2C%7B%22kategorie%22%3A%22Umlaufverm%C3%B6gen%22%2C%22name%22%3A%22Bank%22%2C%22skr04%22%3A%221800%22%2C%22slug%22%3A%22Bank%22%2C%22info%22%3A%22%5C%22Bank%5C%22%20ist%20ein%20aktives%20Bestandskonto%20(meist%20Konto%201800%20oder%20%C3%A4hnliche%2C%20das%20alle%20liquiden%20Mittel%20eines%20Unternehmens%20auf%20seinen%20betrieblichen%20Bankkonten%20erfasst%20und%20Bewegungen%20wie%20Einzahlungen%2C%20Abhebungen%20und%20%C3%9Cberweisungen%20abbildet.%20Es%20spiegelt%20die%20verf%C3%BCgbaren%20Geldmittel%20wider%20und%20wird%20in%20der%20Bilanz%20auf%20der%20Aktivseite%20ausgewiesen.%20%22%2C%22saldo%22%3A2347%2C%22seite%22%3A%22AKTIV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%22AB%22%2C%22haben%22%3Anull%2C%22soll%22%3A0.00001%7D%2C%7B%22soll%22%3A1000%2C%22datum%22%3A%222025-12-31T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677043638%22%2C%22gegenkonto%22%3A%222900%20E.Kpl%22%2C%22haben%22%3Anull%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677140992%22%2C%22gegenkonto%22%3A%226810%20Tel%20%26%20Web%22%2C%22haben%22%3A210.07999999999998%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-28T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677140992%22%2C%22gegenkonto%22%3A%221406%20VSt.%2019%25%22%2C%22haben%22%3A39.92%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-01T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677190957%22%2C%22gegenkonto%22%3A%226855%20NK%20d.%20GV%22%2C%22haben%22%3A150%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-07T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677677544%22%2C%22gegenkonto%22%3A%226825%20Rechts-K.%22%2C%22haben%22%3A100.2%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-07T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769677677544%22%2C%22gegenkonto%22%3A%221400%20VSt.%22%2C%22haben%22%3A29.8%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868853283%22%2C%22gegenkonto%22%3A%226640%20BW-Kosten%22%2C%22haben%22%3A73.1%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868853283%22%2C%22gegenkonto%22%3A%221400%20VSt.%22%2C%22haben%22%3A13%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868857664%22%2C%22gegenkonto%22%3A%226644%20n.a.%20BW-K%22%2C%22haben%22%3A24.9%7D%2C%7B%22soll%22%3Anull%2C%22datum%22%3A%222026-01-30T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221769868857664%22%2C%22gegenkonto%22%3A%221400%20VSt.%22%2C%22haben%22%3A12%7D%2C%7B%22soll%22%3A2000%2C%22datum%22%3A%222026-02-02T23%3A00%3A00.000Z%22%2C%22buchungs_id%22%3A%221770128983814%22%2C%22gegenkonto%22%3A%222900%20E.Kpl%22%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%22SB%22%2C%22haben%22%3A2347.00001%2C%22soll%22%3Anull%7D%5D%7D%5D%2C%22GuV%22%3A%7B%22name%22%3A%22GuV%22%2C%22skr04%22%3A%22GuV%22%2C%22slug%22%3A%22GuV%22%2C%22info%22%3A%22GuV%22%2C%22saldo%22%3A2178.27%2C%22seite%22%3A%22GuV%22%2C%22t_konto%22%3A%5B%7B%22gegenkonto%22%3A%226825%20Rechts-K.%22%2C%22soll%22%3A100.2%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%226810%20Tel%20%26%20Web%22%2C%22soll%22%3A210.08%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%227100%20Zinsertr.%22%2C%22soll%22%3Anull%2C%22haben%22%3A0%7D%2C%7B%22gegenkonto%22%3A%226855%20NK%20d.%20GV%22%2C%22soll%22%3A150%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%226640%20BW-Kosten%22%2C%22soll%22%3A73.1%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%226644%20n.a.%20BW-K%22%2C%22soll%22%3A24.9%2C%22haben%22%3Anull%7D%2C%7B%22gegenkonto%22%3A%224000%20Umsatz%22%2C%22soll%22%3Anull%2C%22haben%22%3A4386.55%7D%2C%7B%22gegenkonto%22%3A%225900%20F-Lstg.%20(D)%22%2C%22soll%22%3A1650%2C%22haben%22%3Anull%7D%5D%7D%7D"

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

let UrlData
var imgWarten = document.getElementById("imgWarten")
let lineSitelength = "__________________________________________________________________________________________________________"

let dla = []
let header
let bilanz = {}
let journal = []
let konten = []

let GuV

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
    console.log("...document loaded");
    decodeURL()
    closeBilanz()
    bilanz = getBilanz()
    console.log("bilanz", bilanz);
    createPdf()
});

function decodeURL() {
    console.log("decodeUrl...");

    let qUrl = window.location.search

    if (!isPublished) { qUrl = "?data=" + testURL }

    let result = qUrl.split("?data=")[1]

    UrlData = JSON.parse(decodeURIComponent(result))
    console.log(UrlData);
    header = UrlData.header

    //prev_bilanz = UrlData.prev_bilanz
    journal = UrlData.journal
    konten = UrlData.konten
    GuV = UrlData.GuV
}

function closeBilanz() {
    console.log("closeBilanz...", GuV.saldo);

    let GUV = getKonto("GuV") // GuV erstellen
    let EKP = getKonto("2900") // Eigenkapital um Gewinn / Verlust ergänzen

    const buchung = {
        beschreibung: "Abschlussbuchung GuV",
        betrag: Math.abs(GuV.saldo),
        datum_formatted: header.to_formatted,
        buchungssatz: "...",
        soll_konto: null,
        haben_konto: null
    }

    GUV.betrag = buchung.betrag
    EKP.betrag = buchung.betrag

    if (GuV.saldo > 0) {
        buchung.buchungssatz = "GuV an Eigenkapital"
        buchung.soll_konto = GUV
        buchung.haben_konto = EKP

    } else if (GuV.saldo < 0) {
        buchung.buchungssatz = "Eigenkapital an GuV"
        buchung.soll_konto = EKP
        buchung.haben_konto = GUV

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
    //console.log("[update_T_Konten...]", SOLL, HABEN);

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

function createPdf() {
    console.log("createPdf...");

    addTitlepage()
    addJournal()
    addBilanz()
    addGuV()
    for (let i = 0; i < konten.length; i++) {
        if (konten[i].name != "GuV") {
            addTKonto(konten[i])
        }
    }

    drawToPaper(dla)

    doc.save("buchhaltung.pdf", { returnPromise: true })
    setTimeout(() => {
        imgWarten.src = "https://static.wixstatic.com/media/42c988_ec7053df7f164f49828d1c6051095c51~mv2.png"
        window.close()
    }, 5000);
}

function addTitlepage() {
    console.log("addTitlepage...");

    dla.push(
        new Text("Buchhaltung", 20, "normal", "center", null, xOffset, 100),
        new Text("Flugschule 'Aufzieh'n frei!'", 30, "normal", "center", null, xOffset, null),
        new Text("Zeitraum", 15, "normal", "center", null, xOffset, 150),
        new Text(header.from_formatted + " - " + header.to_formatted, 15, "normal", "center", null, xOffset, null)
    )


}

function addJournal() {
    console.log("addJournal...", journal);

    const column = [xOffset, 24, 44, 64, 76, 90, (xOffsetRight - 15), xOffsetRight]

    dla.push(
        new Text("\p"),
        new Text("Journal", 20, "normal", "center", null, xOffset, null)
    )

    y = 30
    dla.push(
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
        const fS = 7
        y += 7

        dla.push(
            new Text(i + "", fS, "normal", null, null, column[0], y), // Lfd.Nr
            new Text(e.datum_formatted, fS, "normal", null, null, column[1], y), //Datum
            new Text("ABC-0000", fS, "normal", null, null, column[2], y), //Belegnr
            new Text(e.soll_konto.skr04, fS, "normal", null, null, column[3], y), //Soll
            new Text(e.haben_konto.skr04, fS, "normal", null, null, column[4], y), //Haben
            new Text(wrapText(e.buchungssatz, fS, 190), fS, "normal", null, null, column[5], y), //Buchungssatz
            new Text(e.betrag.toFixed(2) + " €", fS, "normal", "right", null, column[6], y), //Betrag
            e.steuer_konto ? new Text(e.steuer_konto.betrag.toFixed(2) + " €", fS, "normal", "right", null, xOffsetRight, y) : null //dav. Steuer
        )

        if (y >= last_line) {
            dla.push(
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
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 2, xOffsetRight - padding]

    dla.push(
        new Text("\p"),
        new Text("Bilanz", 20, "normal", "center", null, xOffset, null),
        new Text(header.from_formatted + " - " + header.to_formatted, 10, "normal", "center", null, xOffset, null)
    )

    y = 40
    dla.push(
        new Text("Aktiva", 9, "normal", null, null, column_b[0], y),
        new Text("Passiva", 9, "normal", "right", null, column_b[3], y),
    )
    drawLine(column_b[0], 42, column_b[3], 42) // vertical Line

    y = 50
    for (let i = 0; i < bilanz.aktiva.length; i++) {
        const konto = bilanz.aktiva[i];
        //if (konto.saldo < 0.01) { continue }

        dla.push(
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

        dla.push(
            new Text(konto.saldo.toFixed(2) + " €", 10, "normal", null, null, column_b[2], y),
            new Text(konto.name, 10, "normal", "right", null, column_b[3], y)
        )
        y += gap
    }

    const width = column_b[3] - centerLine
    drawNose("RECHTS", last_line, y, width)

    dla.push(
        new Text(bilanz.total_active.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(bilanz.total_passive.toFixed(2) + " €", 10, "normal", null, null, column_b[2], last_line + gap)
    )

}

function addGuV() {
    console.log("addGuV...");
    addTKonto(GuV)
}

function addTKonto(konto) {
    console.log("addTKonto...", konto);

    if (konto.seite != "AKTIV" && konto.seite != "PASSIV" && konto.slug != "GuV") {
        console.log("not GuV, not AKTIV or PASSIV");
        return
    }

    if (!konto.t_konto) {
        return
    }

    const gap = 5
    const padding = 40
    const column_b = [xOffset + padding, centerLine - 2, centerLine + 2, xOffsetRight - padding]
    let last_line = first_line

    dla.push(
        new Text("\p"),
        new Text(konto.name, 16, "normal", "center", null, xOffset, null),
        new Text("SKR04: " + konto.skr04, 12, "normal", "center", null, xOffset, null)
    )

    y = 40
    dla.push(
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
            dla.push(
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
            dla.push(
                new Text(haben.toFixed(2) + " €", 10, "normal", null, null, column_b[2], y),
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

    dla.push(
        new Text(total_soll.toFixed(2) + " €", 10, "normal", "right", null, column_b[1], last_line + gap),
        new Text(total_soll.toFixed(2) + " €", 10, "normal", null, null, column_b[2], last_line + gap)
    )

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
    dla.push(new Text("line=" + JSON.stringify(line)))

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
        console.log("konto", konto);

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

function drawToPaper(dla) {
    console.log("drawToPaper...", dla);

    try {

        let y = first_line

        for (let i = 0; i < dla.length; i++) {

            if (!dla[i]) {
                continue;
            }
            const element = dla[i];

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

function wrapText(text, fontsize, maxWidth) {
    //console.log("wrapText...", text);
    //console.log("maxWidth: " + maxWidth);

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
                //console.log(textWidth + " VS " + maxWidth);
                //console.log("");

                if (textWidth >= maxWidth) {
                    wrappedText += "\n" + tempLine
                    tempLine = ""
                }
            }

            wrappedText += "\n" + tempLine
        }



        //console.log("********** wrappedText:");
        //console.log(wrappedText);
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
(function() {
    Ext.define('CMDBuildUI.locales.sr.Locales', {
        "requires": ["CMDBuildUI.locales.sr.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "sr",
        "administration": CMDBuildUI.locales.sr.LocalesAdministration.administration,
        "attachments": {
            "add": "Dodaj prilog",
            "attachmenthistory": "Istorija priloga",
            "author": "Autor",
            "browse": "Pretraga i pomoć;",
            "category": "Kategorija",
            "code": "Kod",
            "creationdate": "Datum kreiranja",
            "deleteattachment": "Obriši prilog",
            "deleteattachment_confirmation": "Zaista želite da uklonite prilog?",
            "description": "Opis",
            "download": "Preuzmi",
            "dropfiles": "ovde spustite datoteke",
            "editattachment": "Modifikuj prilog",
            "file": "Datoteka",
            "filealreadyinlist": "Datoteka {0} je već u listi.",
            "filename": "Naziv datoteke",
            "fileview": "Pogledaj prilog",
            "invalidfiles": "Ukloni nevalidne datoteke",
            "majorversion": "Glavna verzija",
            "maxsize": "Maksimalno dozvoljena veličina datoteke je {0} MB.",
            "metadata": "<em>Metadata</em>",
            "modificationdate": "Datum izmene",
            "new": "Novi prilog",
            "nocategory": "Nekategorisan",
            "preview": "Pregled",
            "removefile": "Ukloni datoteku",
            "statuses": {
                "empty": "Prazna datoteka",
                "error": "Greška",
                "extensionNotAllowed": "Ekstenzija nije dozvoljena",
                "loaded": "Učitano",
                "ready": "Spreman",
                "toolarge": "Preveliko"
            },
            "successupload": "{0} priloga je poslano.",
            "uploadfile": "Pošalji datoteku…",
            "version": "Verzija",
            "viewhistory": "Prikaži istoriju priloga",
            "warningmessages": {
                "atleast": "Pažnja: učitano je {0} priloga tipa ”{1}”. Najmanje {2} priloga su neophodna za ovu kategoriju.",
                "exactlynumber": "Pažnja: učitano je {0} priloga tipa ”{1}”. {2} priloga su neophodna za ovu kategoriju.",
                "maxnumber": "Pažnja: učitano je {0} priloga tipa ”{1}”. Najviše {2} priloga su dozvoljena za ovu kategoriju."
            },
            "wrongfileextension": "ekstenzija {0} nije dozvoljena"
        },
        "bim": {
            "bimViewer": "Bim prikaz",
            "card": {
                "label": "Kartica"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Dimenzija uokvirujuće zone duž X ose",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Dimenzija uokvirujuče zone duž Y ose",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Dimenzija uokvirujuće zone duž Z ose",
                "LARGEST_FACE_AREA": "Površina najveće strane",
                "LARGEST_FACE_DIRECTION": "Orijentacija najveće stranice",
                "SURFACE_AREA_ALONG_X": "Površina duž X ose",
                "SURFACE_AREA_ALONG_Y": "Površina duž Y ose",
                "SURFACE_AREA_ALONG_Z": "Površina duž Z ose",
                "TOTAL_SHAPE_VOLUME": "Ukupna zapremina",
                "TOTAL_SURFACE_AREA": "Ukupna površina",
                "WALKABLE_SURFACE_AREA": "Površina po kojoj je moguće kretanje",
                "calculated": "Izračunato",
                "description": "Opis",
                "guid": "GUID",
                "label": "Osobine",
                "name": "Naziv",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Slojevi",
                "menu": {
                    "hideAll": "Sakrij sve",
                    "showAll": "Prikaži sve"
                },
                "name": "Naziv",
                "qt": "Qt",
                "visibility": "Vidljivost"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Prikaz spreda",
                "mod": "Kontrole prikaza",
                "orthographic": "Ortografska kamera",
                "pan": "Pomeranje",
                "perspective": "Perspektivna kamera",
                "resetView": "Resetuj prikaz",
                "rotate": "Rotiraj",
                "sideView": "Prikaz sa strane",
                "topView": "Prikaz od gore"
            },
            "showBimCard": "Otvori 3D prikaz",
            "tree": {
                "arrowTooltip": "Izaberi element",
                "columnLabel": "Stablo",
                "label": "Stablo",
                "open_card": "Otvori pripadajuću karticu",
                "root": "Ifc koren"
            }
        },
        "bulkactions": {
            "abort": "Odbaci označene stavke",
            "alertdownloadattachments": "<em>Some attachments will not be downloaded because they have not yet been saved to the server</em>",
            "alertnoattachmentsdownload": "<em>No attachments will not be downloaded because they have not yet been saved to the server</em>",
            "cancelselection": "Poništi izbor",
            "confirmabort": "Prekidate izvršavanje {0} procesnih instanci. Da li ste sigurni da želite da nastavite?",
            "confirmdelete": "Brišete {0} kartica. Da li ste sigurni da želite da nastavite?",
            "confirmdeleteattachements": "Brišete {0} priloga. Da li ste sigurni da želite da nastavite?",
            "confirmedit": "Vršite izmenu na {0} od {1} kartica. Da li ste sigurni da želite da nastavite?",
            "delete": "Obriši označene stavke",
            "download": "Preuzmi označene priloge",
            "downloadall": "<em>Download all attachments</em>",
            "edit": "Izmeni označene stavke",
            "selectall": "Označi sve stavke"
        },
        "calendar": {
            "active_expired": "Aktivno/Isteklo",
            "add": "Dodaj",
            "advancenotification": "Obaveštenje unapred",
            "allcategories": "Sve kategorije",
            "alldates": "Svi datumi",
            "associatedcard": "<em>Associated card</em>",
            "calculated": "Izračunato",
            "calendar": "Kalendar",
            "cancel": "Označi kao otkazano",
            "category": "Kategorija",
            "class": "<em>Class</em>",
            "cm_confirmcancel": "Da li ste sigurni da želite da označite selektovane rasporede kao otkazane?",
            "cm_confirmcomplete": "Da li ste sigurni da želite da označite selektovane rasporede kao završene?",
            "cm_markcancelled": "Označi selektovane rasporede otkazanim",
            "cm_markcomplete": "Označi selektovane rasporede završenim",
            "complete": "Završen",
            "completed": "Završeno",
            "date": "Datum",
            "days": "Dani",
            "delaybeforedeadline": "Odlaganje pre roka",
            "delaybeforedeadlinevalue": "Vrednost odlaganja pre roka",
            "description": "Opis",
            "editevent": "Izmeni događaj",
            "enddate": "Datum završetka",
            "endtype": "Završni tip",
            "event": "Zakaži događaj",
            "executiondate": "Datum izvršavanja",
            "frequency": "Frekvencija",
            "frequencymultiplier": "Množač frekevencije",
            "grid": "Tabela",
            "leftdays": "Preostalo dana",
            "londdescription": "Puni opis",
            "manual": "Ručno",
            "maxactiveevents": "Maksimalan broj aktivnih događaja",
            "messagebodydelete": "Da li želite da uklonite pravilo za planiranje?",
            "messagebodyplural": "Postoji {0} pravila za planiranje",
            "messagebodyrecalculate": "Da li  želite da preračunate pravilo planiranja uzimajući u obzoir novi datum?",
            "messagebodysingular": "Postoji {0} pravila za planiranje",
            "messagetitle": "Prearačunavanje rasporeda",
            "missingdays": "Nedostajući dani",
            "next30days": "Narednih 30 dana",
            "next7days": "Narednih 7 dana",
            "notificationtemplate": "Obrazac korišćen za obaveštenja",
            "notificationtext": "Tekst obaveštenja",
            "occurencies": "Broj ponavljanja",
            "operation": "Operacija",
            "partecipantgroup": "Grupa učesnika",
            "partecipantuser": "Učesnik",
            "priority": "Prioritet",
            "recalculate": "Preračunaj",
            "referent": "Referent",
            "scheduler": "Planer",
            "sequencepaneltitle": "Generiši raspored (plan)",
            "startdate": "Datum početka",
            "status": "Status",
            "today": "Danas",
            "type": "Tip",
            "viewevent": "Prikaži događaj",
            "widgetcriterion": "Kriterijum za kalkulaciju",
            "widgetemails": "Emailovi",
            "widgetsourcecard": "Polazna kartica"
        },
        "classes": {
            "cards": {
                "addcard": "Dodaj karticu",
                "clone": "Kloniraj",
                "clonewithrelations": "Kloniraj karticu i relacije",
                "deletebeaware": "Obratite pažnju na:",
                "deleteblocked": "Brisanje ne može biti nastavljeno jer postoje relacije sa {0}",
                "deletecard": "Ukloni karticu",
                "deleteconfirmation": "Zaista želite da obrišete karticu?",
                "deleterelatedcards": "biće obrisano i {0} povezanih kartica",
                "deleterelations": "relacije sa {0} kartica će biti obrisane",
                "label": "Kartice podataka",
                "modifycard": "Izmeni karticu",
                "opencard": "Otvori karticu",
                "print": "Štampaj karticu"
            },
            "simple": "Jednostavna",
            "standard": "Standardna"
        },
        "common": {
            "actions": {
                "add": "Dodaj",
                "apply": "Primeni",
                "cancel": "Odustani",
                "close": "Zatvori",
                "delete": "Ukloni",
                "edit": "Izmeni",
                "execute": "Izvrši",
                "help": "Pomoć",
                "load": "Učitaj",
                "open": "Otvori",
                "refresh": "Osveži podatke",
                "remove": "Ukloni",
                "save": "Snimi",
                "saveandapply": "Snimi i primeni",
                "saveandclose": "Snimi i zatvori",
                "search": "Pretraga",
                "searchtext": "Pretraga…"
            },
            "attributes": {
                "nogroup": "Osnovni podaci"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Čist HTML",
                "expand": "Proširi editor",
                "reduce": "Smanji editor",
                "signature": "<em>Add signature</em>",
                "unlink": "Ukloni vezu",
                "unlinkmessage": "Konvertuj hiperlink u tekst"
            },
            "grid": {
                "disablemultiselection": "Onemogući višestruko selektovanje",
                "enamblemultiselection": "Omogući višestruko selektovanje",
                "export": "Izvezi podatke",
                "filterremoved": "Trenutni filter je uklonjen",
                "import": "Uvezi podatke",
                "itemnotfound": "Element nije pronađen",
                "list": "Lista",
                "opencontextualmenu": "Otvori kontekstni meni",
                "print": "Štampaj",
                "printcsv": "Štampaj kao CSV",
                "printodt": "Štampaj kao ODT",
                "printpdf": "Štampaj kao PDF",
                "row": "Stavka",
                "rows": "Stavke",
                "subtype": "Podtip"
            },
            "tabs": {
                "activity": "Aktivnost",
                "attachment": "Prilog",
                "attachments": "Prilozi",
                "card": "Kartica",
                "clonerelationmode": "Režim kloniranja relacija",
                "details": "Detalji",
                "emails": "E-mailovi",
                "history": "Istorija",
                "notes": "Napomene",
                "relations": "Relacije",
                "schedules": "Rasporedi"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Grafikon preuzimanja",
                "gridhide": "Sakrij tabelu podataka",
                "gridshow": "Prikaži tabelu podataka",
                "openinpopup": "Otvori u popup prozoru",
                "parametershide": "Sakrij parametre podataka",
                "parametersshow": "Prikaži parametre podataka",
                "reload": "Ponovo učitaj"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Dodaj prilog iz arhive dokumenata",
            "alredyexistfile": "Datoteka s ovim imenom već postoji",
            "archivingdate": "Datum arhiviranja",
            "attachfile": "Priloži datoteku",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Kreiraj e-poštu",
            "composefromtemplate": "Kreiraj iz obrasca",
            "delay": "Odlaganje",
            "delays": {
                "day1": "Za 1 dan",
                "days2": "Za 2 dana",
                "days4": "Za 4 dana",
                "hour1": "1 sat",
                "hours2": "2 sata",
                "hours4": "4 sata",
                "month1": "Za 1 mesec",
                "negativeday1": "1 dan pre",
                "negativedays2": "2 dana pre",
                "negativedays4": "4 dana pre",
                "negativehour1": "1 sat pre",
                "negativehours2": "2 sata pre",
                "negativehours4": "4 sata pre",
                "negativemonth1": "1 mesec pre",
                "negativeweek1": "1 nedelju pre",
                "negativeweeks2": "2 nedelje pre",
                "none": "Bez",
                "week1": "Za 1 nedelju",
                "weeks2": "Za 2 nedelje"
            },
            "dmspaneltitle": "Izaberi prilog iz baze podataka",
            "edit": "Izmeni",
            "from": "Od",
            "gridrefresh": "Osveži mrežu",
            "keepsynchronization": "Održavaj sinhronizovano",
            "message": "Poruka",
            "regenerateallemails": "Generiši sve emailove ponovo",
            "regenerateemail": "Iznova generiši e-poštu",
            "remove": "Ukloni",
            "remove_confirmation": "Zaista želite da uklonite ovaj e-mail?",
            "reply": "Odgovori",
            "replyprefix": "{0}, {1} je napisao",
            "selectaclass": "Izaberi klasu",
            "sendemail": "Pošalji e-poštu",
            "signature": "<em>Signature</em>",
            "statuses": {
                "draft": "Započete",
                "error": "Greška",
                "outgoing": "Za slanje",
                "received": "Primljene",
                "sent": "Poslane"
            },
            "subject": "Subjekat",
            "to": "Za",
            "view": "Prikaz"
        },
        "errors": {
            "autherror": "Pogrešno korisničko ime i/ili lozinka",
            "classnotfound": "Klasa {0} ne postoji",
            "fieldrequired": "Ovo polje je obavezno",
            "invalidfilter": "Nevalidan filter",
            "notfound": "Element nije pronađen"
        },
        "filters": {
            "actions": "Akcije",
            "addfilter": "Dodaj filter",
            "any": "Bilo koji",
            "attachments": "Prillozi",
            "attachmentssearchtext": "Tekst za pretragu priloga",
            "attribute": "Izaberi atribut",
            "attributes": "Atributi",
            "clearfilter": "Očisti filter",
            "clone": "Kloniraj",
            "copyof": "Kopija",
            "currentgroup": "Trenutna grupa",
            "currentuser": "Trenutni korisnik",
            "defaultset": "Postavi kao podrazumevanu",
            "defaultunset": "Ukloni kao podrazumevanuu",
            "description": "Opis",
            "domain": "Relacija",
            "errorname": "<em>Filter name already in use</em>",
            "filterdata": "Filtriraj podatke",
            "fromfilter": "Iz filtera",
            "fromselection": "Iz selekcije",
            "group": "Grupa",
            "ignore": "Ignoriši",
            "migrate": "Premešta",
            "name": "Naziv",
            "newfilter": "Novi filter",
            "noone": "Nijedan",
            "operator": "Operator",
            "operators": {
                "beginswith": "Koji počinju sa",
                "between": "Između",
                "contained": "Sadržan",
                "containedorequal": "Sadržan ili jednak",
                "contains": "Sadrži",
                "containsorequal": "Sadrži ili je jednak",
                "descriptionbegin": "Opis počinje sa",
                "descriptioncontains": "Opis sadrži",
                "descriptionends": "Opis se završava sa",
                "descriptionnotbegin": "Opis ne počinje sa",
                "descriptionnotcontain": "Opis ne sadrži",
                "descriptionnotends": "Opis se ne završava sa",
                "different": "Različite od",
                "doesnotbeginwith": "Koji ne počinju sa",
                "doesnotcontain": "Koji ne sadrže",
                "doesnotendwith": "Ne završava sa",
                "endswith": "Završava sa",
                "equals": "Jednake",
                "greaterthan": "Veće",
                "isnotnull": "Ne može biti null",
                "isnull": "Sa null vrednošću",
                "lessthan": "Manje"
            },
            "relations": "Relacije",
            "type": "Tip",
            "typeinput": "Ulazni parametar",
            "user": "Korisnik",
            "value": "Vrednosti"
        },
        "gis": {
            "card": "Kartica",
            "cardsMenu": "Meni kartica",
            "code": "Kod",
            "description": "Opis",
            "extension": {
                "errorCall": "Greška",
                "noResults": "Nema rezultata"
            },
            "externalServices": "Spoljni servisi",
            "geographicalAttributes": "Geografski atributi",
            "geoserverLayers": "Geoserver slojevi",
            "layers": "Slojevi",
            "list": "Lista",
            "longpresstitle": "Geoelementi u zoni",
            "map": "Mapa",
            "mapServices": "Servisi mapa",
            "position": "Pozicija",
            "root": "Koren",
            "tree": "Stablo navigacije",
            "type": "Tip",
            "view": "Prikaz",
            "zoom": "Uvećanje"
        },
        "history": {
            "activityname": "Naziv aktivnosti",
            "activityperformer": "Izvršilac aktivnosti",
            "begindate": "Datum početka",
            "enddate": "Datum završetka",
            "processstatus": "Status",
            "user": "Korisnik"
        },
        "importexport": {
            "database": {
                "uri": "URI baze podataka",
                "user": "Korisničko ime za bazu podataka"
            },
            "downloadreport": "Preuzmi izveštaj",
            "emailfailure": "Greška prilikom slanja e-maila",
            "emailmessage": "Izveštaj o importovanju datotekte {0} priložen uz datum {1}",
            "emailsubject": "Uvezi izveštaj s podacima",
            "emailsuccess": "E-maili je uspešno poslan",
            "export": "Izvezi",
            "exportalldata": "Sve podatke",
            "exportfiltereddata": "Samo podatke koji odgovaraju filteru tabele",
            "gis": {
                "shapeimportdisabled": "Uvoz oblika nije dozvoljen za ovaj obrazac",
                "shapeimportenabled": "Podešavanje uvoza oblika"
            },
            "ifc": {
                "card": "Kartica",
                "project": "Projekat",
                "sourcetype": "Uvoz iz"
            },
            "import": "Uvezi",
            "importresponse": "Uvezi odgovor",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Greške",
                "linenumber": "Broj linije",
                "message": "Poruka",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Obrađeni redovi",
                "recordnumber": "Broj zapisa",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Pošalji izveštaj",
            "template": "Šablon",
            "templatedefinition": "Definicija šablona"
        },
        "joinviews": {
            "active": "Aktivan",
            "addview": "Dodaj pogled",
            "alias": "Alijas",
            "attribute": "Atribut",
            "attributes": "Atributi",
            "attributesof": "Atributi od {0}",
            "createview": "Kreiraj pogled",
            "datasorting": "Sortiranja podataka",
            "delete": "Obriši",
            "deleteview": "Obriši pogled",
            "deleteviewconfirm": "Da li ste sigurni da želite da uklonite ovaj pogled",
            "description": "Opis",
            "disable": "Onemogući",
            "domainalias": "Alijas relacije",
            "domainsof": "Relacije od {0}",
            "edit": "Izmeni",
            "editview": "Izmeni konfiguraciju pogleda",
            "enable": "Omogući",
            "fieldsets": "Skupovi polja",
            "filters": "Filteri",
            "generalproperties": "Opšte osobine",
            "group": "Grupa",
            "innerjoin": "Unutrašnje spajanje (INNER JOIN)",
            "jointype": "Tip spajanja (JOIN)",
            "joinview": "Pogled kreiran spajanjem (join)",
            "klass": "Klasa",
            "manageview": "Upravljanje pogledom",
            "masterclass": "Osnovna klasa",
            "masterclassalias": "Alijas osnovne klase",
            "name": "Naziv",
            "newjoinview": "Novi pogled na osnovu spajanja (join)",
            "outerjoin": "Spoljašnje spajanje (OUTER JOIN)",
            "pleaseseleceavalidmasterclass": "Izaberite validnu osnovnu klasu",
            "refreshafteredit": "Da li želite da osvežite stranu kako bi videli promene?",
            "selectatleastoneattribute": "Selektujte barem jedan atribut za prikaz u tabeli i u redukovanoj tabeli u koraku 4.",
            "showingrid": "Prikaži u tabeli",
            "showinreducedgrid": "Prikaži u redukovanoj tabeli",
            "targetalias": "Alijas odredišne klase"
        },
        "login": {
            "buttons": {
                "login": "Prijavi se",
                "logout": "Promeni korisnika"
            },
            "fields": {
                "group": "Grupa",
                "language": "Jezik",
                "password": "Lozinka",
                "tenants": "Klijenti",
                "username": "Korisničko ime"
            },
            "loggedin": "Prijavljen",
            "sso": {
                "loginfailure": "<em>Login failure</em>",
                "loginwith": "<em>Login with {0}</em>",
                "or": "<em>or</em>"
            },
            "title": "Prijavi se",
            "welcome": "Dobro došli nazad, {0}"
        },
        "main": {
            "administrationmodule": "Administracioni modul",
            "baseconfiguration": "Osnovna konfiguracija",
            "cardlock": {
                "lockedmessage": "Ne možete menjati ovu karticu jer je trenutno menja {0}",
                "someone": "neko"
            },
            "changegroup": "Promeni grupu",
            "changetenant": "Promeni {0}",
            "confirmchangegroup": "Zaista želite da promenite grupu?",
            "confirmchangetenants": "Zaista želite da promenite aktivnog klijenta?",
            "confirmdisabletenant": "Zaista želite da isključite oznaku „Ignoriši klijente“?",
            "confirmenabletenant": "Zaista želite da uključite oznaku „Ignoriši klijente“?",
            "ignoretenants": "Ignoriši {0}",
            "info": "Informacija",
            "logo": {
                "cmdbuild": "CMDBuild logotip",
                "cmdbuildready2use": "CMDBuild READY2USE logotip",
                "companylogo": "Kompanijski logotip",
                "openmaint": "openMAINT logotip"
            },
            "logout": "Izađi",
            "managementmodule": "Modul za upravljanje podacima",
            "multigroup": "Više grupa",
            "multitenant": "Više {0}",
            "navigation": "Navigacija",
            "pagenotfound": "Stranica nije pronađena",
            "password": {
                "change": "Promeni lozinku",
                "confirm": "Potvrdi lozinku",
                "email": "E-mail dares",
                "err_confirm": "Lozinke se ne poklapaju.",
                "err_diffprevious": "Lozinka ne može biti ista kao prethodna.",
                "err_diffusername": "Lozinka ne može biti ista kao i korisničko ime.",
                "err_length": "Lozinka mora biti duga minimalno {0} karaktera.",
                "err_reqdigit": "Lozinka mora sadržati barem jednu cifru.",
                "err_reqlowercase": "Lozinka mora sadržati baerm jedno malo slovo.",
                "err_requppercase": "Lozinka mora sadržati barem jedno veliko slovo.",
                "expired": "Vaša lozinka je istekla, morate je promeniti.",
                "forgotten": "Zaboravljena lozinka",
                "new": "Nova lozinka",
                "old": "Stara lozinka",
                "recoverysuccess": "Poslali smo vam email sa instrukcijama kako da povratite lozinku.",
                "reset": "Resetuj lozinku",
                "saved": "Loznika je uspešno snimljena!"
            },
            "pleasecorrecterrors": "Molimo korigujte navedene greške!",
            "preferences": {
                "comma": "Zapeta",
                "decimalserror": "Decimalni deo mora postojati",
                "decimalstousandserror": "Decimalni separator i separator hiljada ne smeju biti isti",
                "default": "Podrazumevani",
                "defaultvalue": "Podrazumevana vrednost",
                "firstdayofweek": "Prvi dan u sedmici",
                "gridpreferencesclear": "Poništi podešavanja tabele",
                "gridpreferencescleared": "Podešavanje tabele poništeno!",
                "gridpreferencessave": "Snimi podešavanje tabele",
                "gridpreferencessaved": "Podešavanje tabele snimljeno!",
                "gridpreferencesupdate": "Osveži podešavanje tabele",
                "labelcsvseparator": "CSV separator",
                "labeldateformat": "Format datuma",
                "labeldecimalsseparator": "Decimalni separator",
                "labellanguage": "Jezik",
                "labelthousandsseparator": "Separator hiljada",
                "labeltimeformat": "Format vremena",
                "msoffice": "Microsoft Office",
                "period": "Tačka",
                "preferredfilecharset": "kodna strana CSV datoteke",
                "preferredofficesuite": "Preferirani paket kancelarijskih aplikacija",
                "space": "Razmak",
                "thousandserror": "Hiljade moraju biti prisutne",
                "timezone": "Vremenska zona",
                "twelvehourformat": "12-časovni format",
                "twentyfourhourformat": "24-časovni format"
            },
            "searchinallitems": "Pretraga kroz sve stavke",
            "selectdeselettenants": "Selektuj/deselektuj  sve",
            "treenavcontenttitle": "{0} od {1}",
            "userpreferences": "Podešavanja"
        },
        "menu": {
            "allitems": "Sve stavke",
            "classes": "Klase",
            "custompages": "Posebne stranice",
            "dashboards": "Kontrolne table",
            "processes": "Kartice procesa",
            "reports": "izveštaji",
            "views": "Prikazi"
        },
        "notes": {
            "edit": "Izmeni napomenu"
        },
        "notifier": {
            "attention": "Pažnja",
            "error": "Greška",
            "genericerror": "Generička greška",
            "genericinfo": "Generička informacija",
            "genericwarning": "Generičko upozorenje",
            "info": "Informacija",
            "success": "Uspeh",
            "warning": "Pažnja"
        },
        "patches": {
            "apply": "Primeni ispravke",
            "category": "Kategorija",
            "description": "Opis",
            "name": "Naziv",
            "patches": "Ispravke"
        },
        "processes": {
            "abortconfirmation": "Da li ste sigurni da želite prekinuti proces?",
            "abortprocess": "Prekini proces",
            "action": {
                "advance": "Dalje",
                "label": "Akcija"
            },
            "activeprocesses": "Aktivni procesi",
            "allstatuses": "Sve",
            "editactivity": "Izmeni aktivnost",
            "openactivity": "Otvori aktivnost",
            "startworkflow": "Start",
            "workflow": "Radni procesi"
        },
        "relationGraph": {
            "activity": "aktivnost",
            "allLabelsOnGraph": "sve oznake na grafikonu",
            "card": "Kartica",
            "cardList": "Lista kartica",
            "cardRelations": "Veza",
            "choosenaviagationtree": "Izaberi stablo navigacije",
            "class": "Klasa",
            "classList": "Lista klasa",
            "compoundnode": "Složeni čvor",
            "disable": "Isključi",
            "edges": "Grane",
            "enable": "Uključi",
            "labelsOnGraph": "opis na grafikonu",
            "level": "Nivo",
            "nodes": "Čvorovi",
            "openRelationGraph": "Otvori graf relacija",
            "qt": "Qt",
            "refresh": "Osveži",
            "relation": "Veza",
            "relationGraph": "Graf relacija",
            "reopengraph": "Ponovo otvori graf od ovog čvora"
        },
        "relations": {
            "adddetail": "Dodaj detalje",
            "addrelations": "Dodaj relaciju",
            "attributes": "Atributi",
            "begindate": "Početni datum",
            "code": "Kod",
            "deletedetail": "Ukloni detalj",
            "deleterelation": "Ukloni relaciju",
            "deleterelationconfirm": "Da li ste sigurni da želite da obrišete ovu relaciju?",
            "description": "Opis",
            "editcard": "Izmeni karticu",
            "editdetail": "Izmeni detalje",
            "editrelation": "Izmeni relaciju",
            "extendeddata": "Prošireni podaci",
            "mditems": "stavke",
            "missingattributes": "Nedostaju obavezni atributi",
            "opencard": "Otvori pripadajuću karticu",
            "opendetail": "Prikaži detalje",
            "type": "Tip"
        },
        "reports": {
            "csv": "CSV",
            "download": "Preuzmi",
            "format": "Formatiraj",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Štampaj",
            "reload": "Ponovo učitaj",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Podrazumevano"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Dnevno"
                        },
                        "monthly": {
                            "description": "Mesečno"
                        },
                        "once": {
                            "description": "Jednom"
                        },
                        "weekly": {
                            "description": "Sedmično"
                        },
                        "yearly": {
                            "description": "Godišnje"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Podrazumevano"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Dodaj tematizaciju",
            "analysisType": "Tip analize",
            "attribute": "Atribut",
            "calculateRules": "Generiši pravila stila",
            "clearThematism": "Ukloni tematizaciju",
            "color": "Boja",
            "defineLegend": "Definicija legende",
            "defineThematism": "Definicija tematizacije",
            "function": "Funkcija",
            "generate": "Generiši",
            "geoAttribute": "Geografski atributi",
            "graduated": "Diplomirao",
            "highlightSelected": "Označi selektovanu stavku",
            "intervals": "Intervali",
            "legend": "legenda",
            "name": "naziv",
            "newThematism": "Nova tematizacija",
            "punctual": "Tačan",
            "quantity": "Broj (kvantitet)",
            "segments": "Segmenti",
            "source": "Izvor",
            "table": "Tabela",
            "thematism": "Tematike",
            "value": "Vrednost"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "<em>Exit without saving</em>",
                    "stayinedit": "<em>Back to edit</em>"
                },
                "savebeforeexit": "<em>There are unsaved changes in the attachments. Do you want to save them before you exit?</em>",
                "saveprocessmessage": "<em>Attachments can only be saved in existing cards. Pressing on save, the process instance will be created with the data entered in the form.</em>"
            },
            "customform": {
                "addrow": "Dodaj red",
                "clonerow": "Kloniraj red",
                "datanotvalid": "Nevalidni podaci",
                "deleterow": "Obriši red",
                "editrow": "Izmeni red",
                "export": "Izvezi",
                "import": "Uvezi",
                "importexport": {
                    "expattributes": "Podaci za izvoz",
                    "file": "Datotteka",
                    "filename": "Naziv datoteke",
                    "format": "Format",
                    "importmode": "Način uvoza",
                    "keyattributes": "Ključevi",
                    "missingkeyattr": "Molimo - izaberite bar jedan atribut-ključ",
                    "modeadd": "Dodaj",
                    "modemerge": "Spoji",
                    "modereplace": "Zameni",
                    "separator": "Separator"
                },
                "refresh": "Vrati na podrazumevane vrednosti"
            },
            "linkcards": {
                "checkedonly": "Samo označene",
                "editcard": "Izmeni karticu",
                "opencard": "Otvori karticu",
                "refreshselection": "Primeni podrazumevani izbor",
                "togglefilterdisabled": "Isključi filtriranje tabele",
                "togglefilterenabled": "Uključi filtriranje tabele"
            },
            "required": "Ova komponenta je obavezna"
        }
    });

    function cleardata(obj) {
        for (var key in obj) {
            if (typeof obj[key] === "string") {
                obj[key] = obj[key].replace(/^<em>(.+)<\/em>$/, "$1");
            } else if (typeof obj[key] === "object") {
                cleardata(obj[key]);
            }
        }
    }
    cleardata(CMDBuildUI.locales.Locales);
})();
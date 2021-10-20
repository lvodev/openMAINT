(function() {
    Ext.define('CMDBuildUI.locales.hr.Locales', {
        "requires": ["CMDBuildUI.locales.hr.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "hr",
        "administration": CMDBuildUI.locales.hr.LocalesAdministration.administration,
        "attachments": {
            "add": "Dodaj privitak",
            "attachmenthistory": "Povijest privitaka",
            "author": "Autor",
            "browse": "Pregled & hellip;",
            "category": "Kategorija",
            "code": "Kod",
            "creationdate": "Datum izrade",
            "deleteattachment": "Ukloni privitak",
            "deleteattachment_confirmation": "Sigurno želite izbrisati ovaj privitak?",
            "description": "Opis",
            "download": "Preuzimanje",
            "dropfiles": "Povucite i ispustite datoteke ovdje",
            "editattachment": "Uredi privitak",
            "file": "Datoteka",
            "filealreadyinlist": "Datoteka {0} već je na popisu.",
            "filename": "Naziv datoteke",
            "fileview": "Pogledaj prilog",
            "invalidfiles": "Ukloni neispravne datoteke",
            "majorversion": "Glavna verzija",
            "maxsize": "Najveća dopuštena veličina datoteke je {0} MB.",
            "metadata": "Meta podaci",
            "modificationdate": "Datum promjene",
            "new": "Novi privitak",
            "nocategory": "Nekategorizirano",
            "preview": "Pregled",
            "removefile": "Ukloni datoteku",
            "statuses": {
                "empty": "Prazna datoteka",
                "error": "Greška",
                "extensionNotAllowed": "Ekstenzija datoteke nije dozvoljena",
                "loaded": "Učitano",
                "ready": "Spremno",
                "toolarge": "Preveliko"
            },
            "successupload": "{0} privitaka preuzeto.",
            "uploadfile": "Učitaj datoteku...",
            "version": "Verzija",
            "viewhistory": "Pogledaj povijest privitaka",
            "warningmessages": {
                "atleast": "Upozorenje: učitano je {0} privitaka tipa \" {1}\". Ova kategorija očekuje najmanje {2} privitaka ",
                "exactlynumber": "Upozorenje: učitano je {0} privitaka tipa \" {1}\". Ova kategorija očekuje {2} privitaka",
                "maxnumber": "Upozorenje: privitak {0} tipa \"{1} \" je učitan. Ova kategorija ne očekuje više od {2} privitaka"
            },
            "wrongfileextension": "{0} ekstenzija datoteke nije dopuštena"
        },
        "bim": {
            "bimViewer": "BIM Preglednik",
            "card": {
                "label": "Kartica"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Veličina okvira po X osi",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Veličina okvira po Y osi",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Veličina okvira po Z osi",
                "LARGEST_FACE_AREA": "Područje najveće površine",
                "LARGEST_FACE_DIRECTION": "Smjer najveće površine",
                "SURFACE_AREA_ALONG_X": "Površina uz X os",
                "SURFACE_AREA_ALONG_Y": "Površina uz Y os",
                "SURFACE_AREA_ALONG_Z": "Površina uz Z os",
                "TOTAL_SHAPE_VOLUME": "ukupni obujam oblika",
                "TOTAL_SURFACE_AREA": "Ukupna površina",
                "WALKABLE_SURFACE_AREA": "Prohodna površina",
                "calculated": "Izračunato",
                "description": "Opis",
                "guid": "GUID",
                "label": "Svojstva",
                "name": "Ime",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Slojevi",
                "menu": {
                    "hideAll": "Sakrij Sve",
                    "showAll": "Pokaži sve"
                },
                "name": "Ime",
                "qt": "Kol.",
                "visibility": "Vidljivost"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Pogled sprijeda",
                "mod": "Kontrole preglednika",
                "orthographic": "Ortografska kamera",
                "pan": "Pomiči",
                "perspective": "Kamera za perspektivu",
                "resetView": "Poništi Prikaz",
                "rotate": "Rotiraj",
                "sideView": "Bočni pogled",
                "topView": "Pogled Odozgo"
            },
            "showBimCard": "Open 3D viewer",
            "tree": {
                "arrowTooltip": "Odaberite element",
                "columnLabel": "Stablo",
                "label": "Stablo",
                "open_card": "Otvori povezanu karticu",
                "root": "Ifc Root"
            }
        },
        "bulkactions": {
            "abort": "Prekini odabrane stavke",
            "alertdownloadattachments": "Neki prilozi neće biti preuzeti jer nisu još bili spremljeni na server",
            "alertnoattachmentsdownload": "Prilozi neće biti preuzeti jer nisu još bili spremljeni na server",
            "cancelselection": "Poništi odabir",
            "confirmabort": "Prekidate instance procesa {0}. Sigurno želite nastaviti?",
            "confirmdelete": "Brišete {0} kartica. Sigurno želite nastaviti?",
            "confirmdeleteattachements": "Brišete {0} privitaka. Sigurno želite nastaviti?",
            "confirmedit": "Mijenjate {0} za {1} kartica. Sigurno želite nastaviti?",
            "delete": "Brisanje odabranih stavaka",
            "download": "Preuzimanje odabranih privitaka",
            "downloadall": "Preuzmi sve privitke",
            "edit": "Uredi odabrane stavke",
            "selectall": "Odaberite sve stavke"
        },
        "calendar": {
            "active_expired": "Aktivno / Isteklo",
            "add": "Dodaj raspored",
            "advancenotification": "Unaprijed obavijest za nekoliko dana",
            "allcategories": "Sve kategorije",
            "alldates": "Svi datumi",
            "associatedcard": "Pridružena kartica",
            "calculated": "Izračunato",
            "calendar": "Kalendar",
            "cancel": "Označi kao poništeno",
            "category": "Kategorija",
            "class": "Klasa",
            "cm_confirmcancel": "Sigurno želite označiti kao otkazane odabrane rasporede?",
            "cm_confirmcomplete": "Sigurno želite označiti kao završene odabrane rasporede?",
            "cm_markcancelled": "Označi kao otkazane odabrane rasporede",
            "cm_markcomplete": "Označi kao završene odabrane rasporede",
            "complete": "Označi kao završeno",
            "completed": "Dovršeno",
            "date": "Datum",
            "days": "Dana",
            "delaybeforedeadline": "Kašnjenje prije isteka roka",
            "delaybeforedeadlinevalue": "Vrijednost kašnjenja prije isteka roka",
            "description": "Opis",
            "editevent": "Promijeni raspored",
            "enddate": "Datum završetka",
            "endtype": "Vrsta kraja",
            "event": "Raspored",
            "executiondate": "Datum Izvršenja",
            "frequency": "Učestalost",
            "frequencymultiplier": "Množitelj frekvencije",
            "grid": "Rešetka",
            "leftdays": "Preostalo dana",
            "londdescription": "Puni opis",
            "manual": "Priručnik",
            "maxactiveevents": "Maksimalni broj aktivnih rasporeda",
            "messagebodydelete": "Želite li ukloniti pravilo planera?",
            "messagebodyplural": "Postoji {0} pravila rasporeda",
            "messagebodyrecalculate": "Želite li ponovno izračunati pravilo rasporeda s novim datumom?",
            "messagebodysingular": "Postoji {0} pravilo rasporeda",
            "messagetitle": "Ponovni izračun rasporeda",
            "missingdays": "Nedostaje dana",
            "next30days": "Idućih 30 dana",
            "next7days": "Idućih 7 dana",
            "notificationtemplate": "Predložak koji se koristi za obavijest",
            "notificationtext": "Tekst obavijesti",
            "occurencies": "Broj incidenata",
            "operation": "Radnja",
            "partecipantgroup": "Grupa sudionika",
            "partecipantuser": "Korisnik koji sudjeluje",
            "priority": "Prioritet",
            "recalculate": "Ponovno izračunaj",
            "referent": "Referent",
            "scheduler": "Planer",
            "sequencepaneltitle": "Generirajrasporede",
            "startdate": "Datum početka",
            "status": "Status",
            "today": "Danas",
            "type": "Vrsta",
            "viewevent": "Vidi raspored",
            "widgetcriterion": "Kriterij izračuna",
            "widgetemails": "Poruke e-pošte",
            "widgetsourcecard": "Izvorna kartica"
        },
        "classes": {
            "cards": {
                "addcard": "Dodaj karticu",
                "clone": "Kloniraj",
                "clonewithrelations": "Kloniranje kartice i odnosa",
                "deletebeaware": "Imajte na umu da:",
                "deleteblocked": "Nastavak brisanja nije moguć jer postoji veza s {0}.",
                "deletecard": "Ukloni karticu",
                "deleteconfirmation": "Sigurno želite izbrisati ovu karticu?",
                "deleterelatedcards": "također {0} povezane kartice bit će uklonjene",
                "deleterelations": "veze s karticama {0} bit će uklonjene",
                "label": "Kartice",
                "modifycard": "Uredi karticu",
                "opencard": "Otvori karticu",
                "print": "Ispis kartice"
            },
            "simple": "Jednostavno",
            "standard": "Standard"
        },
        "common": {
            "actions": {
                "add": "Dodaj",
                "apply": "Primijeni",
                "cancel": "Poništi",
                "close": "Zatvori",
                "delete": "Ukloni",
                "edit": "Uredi",
                "execute": "Izvrši",
                "help": "Pomoć",
                "load": "Učitaj",
                "open": "Otvori",
                "refresh": "Osvježi podatke",
                "remove": "Ukloni",
                "save": "Spremi",
                "saveandapply": "Spremi i primijeni",
                "saveandclose": "Spremi i zatvori",
                "search": "Pretraživanje",
                "searchtext": "Traži..."
            },
            "attributes": {
                "nogroup": "Osnovni podaci"
            },
            "dates": {
                "date": "d / m / y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Obriši HTML",
                "expand": "Proširite uređivač",
                "reduce": "Smanji uređivač",
                "signature": "Dodaj potpis",
                "unlink": "Prekini vezu",
                "unlinkmessage": "Pretvori odabranu hipervezu u tekst."
            },
            "grid": {
                "disablemultiselection": "Onemogućite višestruki odabir",
                "enamblemultiselection": "Omogući Višestruki odabir",
                "export": "Izvoz podataka",
                "filterremoved": "Trenutni filtar je uklonjen",
                "import": "Uvoz podataka",
                "itemnotfound": "Stavka nije pronađena",
                "list": "Popis",
                "opencontextualmenu": "Otvori kontekstni izbornik",
                "print": "Ispis",
                "printcsv": "Ispis u CSV formatu",
                "printodt": "Ispis u ODT formatu",
                "printpdf": "Ispis u PDF formatu",
                "row": "Stavka",
                "rows": "Stavke",
                "subtype": "Podtip"
            },
            "tabs": {
                "activity": "Aktivnost",
                "attachment": "Privitak",
                "attachments": "Privitci",
                "card": "Kartica",
                "clonerelationmode": "Način Kloniranja Odnosa",
                "details": "Detalji",
                "emails": "Poruke e-pošte",
                "history": "Povijest",
                "notes": "Bilješke",
                "relations": "Veze",
                "schedules": "Rasporedi"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Preuzmi grafikon",
                "gridhide": "Sakrij podatkovnu rešetku",
                "gridshow": "Prikaži tablicu podataka",
                "openinpopup": "Otvori u skočnom prozoru",
                "parametershide": "Sakrij parametre podataka",
                "parametersshow": "Prikaži parametre podataka",
                "reload": "Ponovo učitaj"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Dodaj privitke iz arhive dokumenata",
            "alredyexistfile": "Već postoji datoteka s tim imenom",
            "archivingdate": "Datum arhiviranja",
            "attachfile": "Priloži datoteku",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Sastavite e-poštu",
            "composefromtemplate": "Izrada iz predloška",
            "delay": "Delay",
            "delays": {
                "day1": "Za 1 dan",
                "days2": "Za 2 dana",
                "days4": "Za 4 dana",
                "hour1": "1 sat",
                "hours2": "2 sata",
                "hours4": "4 sata",
                "month1": "Za 1 mjesec",
                "negativeday1": "1 dan prije",
                "negativedays2": "2 dana prije",
                "negativedays4": "4 dana prije",
                "negativehour1": "1 sat prije",
                "negativehours2": "2 sata ranije",
                "negativehours4": "4 sata ranije",
                "negativemonth1": "1 mjesec prije",
                "negativeweek1": "1 tjedan prije",
                "negativeweeks2": "2 tjedna ranije",
                "none": "Nema",
                "week1": "Za 1 tjedan",
                "weeks2": "Za 2 tjedna"
            },
            "dmspaneltitle": "Odaberite privitke iz baze podataka",
            "edit": "Uredi",
            "from": "Od",
            "gridrefresh": "Ažuriranje rešetke",
            "keepsynchronization": "Zadrži sinkronizaciju",
            "message": "Poruka",
            "regenerateallemails": "Ponovno generiraj sve poruke e-pošte",
            "regenerateemail": "Ponovno generiraj poruku e-pošte",
            "remove": "Ukloni",
            "remove_confirmation": "Sigurno želite izbrisati ovu e-poštu?",
            "reply": "odgovori",
            "replyprefix": "Na {0}, {1} napisano:",
            "selectaclass": "Odaberite klasu",
            "sendemail": "Pošalji e-poštu",
            "signature": "Potpis",
            "statuses": {
                "draft": "Skica",
                "error": "Greška",
                "outgoing": "Odlazni",
                "received": "Primljeno",
                "sent": "Poslano"
            },
            "subject": "Predmet",
            "to": "Za",
            "view": "Pregled"
        },
        "errors": {
            "autherror": "Neispravno korisničko ime ili lozinka",
            "classnotfound": "Klasa {0} nije pronađena",
            "fieldrequired": "Ovo polje je obavezno",
            "invalidfilter": "Neispravan filtar",
            "notfound": "Stavka nije pronađena"
        },
        "filters": {
            "actions": "Radnje",
            "addfilter": "Dodaj filtar",
            "any": "Bilo koji",
            "attachments": "Prilozi",
            "attachmentssearchtext": "Tekst pretrage priloga",
            "attribute": "Odaberi atribut",
            "attributes": "Atributi",
            "clearfilter": "Očisti filtar",
            "clone": "Kloniraj",
            "copyof": "Kopija od",
            "currentgroup": "Trenutna grupa",
            "currentuser": "Trenutni korisnik",
            "defaultset": "Postavi kao zadano",
            "defaultunset": "Poništi od zadanog",
            "description": "Opis",
            "domain": "Domena",
            "errorname": "Ime filtera se već koristi",
            "filterdata": "Filtriranje podataka",
            "fromfilter": "Iz filtra",
            "fromselection": "Iz odabira",
            "group": "Grupa",
            "ignore": "Zanemari",
            "migrate": "Migrira",
            "name": "Ime",
            "newfilter": "Novi filtar",
            "noone": "Nitko.",
            "operator": "Operation",
            "operators": {
                "beginswith": "Počinje sa",
                "between": "Između",
                "contained": "Sadržano",
                "containedorequal": "Sadržan ili jednak",
                "contains": "Sadrži",
                "containsorequal": "Sadrži ili jednako",
                "descriptionbegin": "Opis počinje sa",
                "descriptioncontains": "Opis sadrži",
                "descriptionends": "Opis završava sa",
                "descriptionnotbegin": "Opis ne počinje sa",
                "descriptionnotcontain": "Opis ne sadrži",
                "descriptionnotends": "Opis ne završava sa",
                "different": "Različiti",
                "doesnotbeginwith": "Ne počinje sa",
                "doesnotcontain": "Ne sadrži",
                "doesnotendwith": "Ne završava sa",
                "endswith": "Završava sa",
                "equals": "Jednako",
                "greaterthan": "Veće od",
                "isnotnull": "Nije nula",
                "isnull": "Nula",
                "lessthan": "Manje od"
            },
            "relations": "Veze",
            "type": "Vrsta",
            "typeinput": "Ulazni parametar",
            "user": "Korisnik",
            "value": "Vrijednost"
        },
        "gis": {
            "card": "Kartica",
            "cardsMenu": "Cards Menu",
            "code": "Kod",
            "description": "Opis",
            "extension": {
                "errorCall": "Greška",
                "noResults": "Nema rezultata"
            },
            "externalServices": "Vanjske usluge",
            "geographicalAttributes": "Geo Atributi",
            "geoserverLayers": "Slojevi geoserver poslužitelja",
            "layers": "Slojevi",
            "list": "Popis",
            "longpresstitle": "Geo-elementi u području",
            "map": "Karta",
            "mapServices": "Kartografski servisi",
            "position": "Položaj",
            "root": "Korijen",
            "tree": "Stablo",
            "type": "Vrsta",
            "view": "Pregled",
            "zoom": "Uvećanje"
        },
        "history": {
            "activityname": "Activity name",
            "activityperformer": "Izvršitelj aktivnosti",
            "begindate": "Datum početka",
            "enddate": "Datum završetka",
            "processstatus": "Status",
            "user": "Korisnik"
        },
        "importexport": {
            "database": {
                "uri": "Uri baze podataka",
                "user": "Korisnik baze podataka"
            },
            "downloadreport": "Preuzmi izvješće",
            "emailfailure": "Došlo je do pogreške prilikom slanja e-pošte!",
            "emailmessage": "Priloženo izvješće o uvozu datoteke \"{0} \" u datumu {1}",
            "emailsubject": "Izvješće o uvozu podataka",
            "emailsuccess": "Poruke e-pošte je uspješno poslana!",
            "export": "Export",
            "exportalldata": "Svi podaci",
            "exportfiltereddata": "Samo podaci koji odgovaraju filtru rešetke",
            "gis": {
                "shapeimportdisabled": "Uvoz oblika za ovaj predložak nije uključen",
                "shapeimportenabled": "Konfiguracija uvoza oblika"
            },
            "ifc": {
                "card": "Kartica",
                "project": "Projekt",
                "sourcetype": "Uvezi iz"
            },
            "import": "Uvoz",
            "importresponse": "Odgovor na uvoz",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Pogreške",
                "linenumber": "Broj retka",
                "message": "Poruka",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Obrađene linije",
                "recordnumber": "Broj zapisa",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Pošalji izvješće",
            "template": "Predložak",
            "templatedefinition": "Definicija predloška"
        },
        "joinviews": {
            "active": "Aktivno",
            "addview": "Dodaj pogled",
            "alias": "Alias",
            "attribute": "Atribut",
            "attributes": "Atributi",
            "attributesof": "Atribut od: {0}",
            "createview": "Stvori pregled",
            "datasorting": "Sortiranja podataka",
            "delete": "Ukloni",
            "deleteview": "Ukloni pogled",
            "deleteviewconfirm": "Sigurno želite obrisati ovaj pregled?",
            "description": "Opis",
            "disable": "Onemogući",
            "domainalias": "Alias domene",
            "domainsof": "Domene od {0}",
            "edit": "Uredi",
            "editview": "Uredi postavke pregleda",
            "enable": "Omogući",
            "fieldsets": "Setovi polja",
            "filters": "Filtri",
            "generalproperties": "Opća svojstva",
            "group": "Grupa",
            "innerjoin": "Unutarnji spoj",
            "jointype": "Vrsta spoja",
            "joinview": "Pregled iz spoja",
            "klass": "Klasa",
            "manageview": "Upravljaj pregledom",
            "masterclass": "Glavna klasa",
            "masterclassalias": "Alias glavne klase",
            "name": "Ime",
            "newjoinview": "Novi pregled iz spoja",
            "outerjoin": "Vanjski spoj",
            "pleaseseleceavalidmasterclass": "Odaberite valjanu glavnu klasu",
            "refreshafteredit": "Želite li osvježiti stranicu kako biste vidjeli promjene?",
            "selectatleastoneattribute": "Odaberite najmanje jedan atribut za prikaz u rešetci i smanjenoj rešetci u 4. koraku.",
            "showingrid": "Pokaži detalje",
            "showinreducedgrid": "Pokaži u smanjenoj rešetci",
            "targetalias": "Alias odredišne klase"
        },
        "login": {
            "buttons": {
                "login": "Prijava",
                "logout": "Promijeni korisnika"
            },
            "fields": {
                "group": "Grupa",
                "language": "Jezik",
                "password": "Lozinka",
                "tenants": "Stanari",
                "username": "Korisničko ime"
            },
            "loggedin": "Prijavljen",
            "sso": {
                "loginfailure": "Neuspjela prijava",
                "loginwith": "Prijava sa {0}",
                "or": "ili"
            },
            "title": "Prijava",
            "welcome": "Dobrodošli natrag {0}."
        },
        "main": {
            "administrationmodule": "Administracijski modul",
            "baseconfiguration": "Osnovna konfiguracija",
            "cardlock": {
                "lockedmessage": "Ne možete urediti ovu karticu zato što je {0} uređuje.",
                "someone": "netko"
            },
            "changegroup": "Promijeni grupu",
            "changetenant": "Promjena {0}",
            "confirmchangegroup": "Sigurno želite promijeniti grupu?",
            "confirmchangetenants": "Sigurno želite promijeniti aktivne stanare?",
            "confirmdisabletenant": "Sigurno želite onemogućiti oznaku \"Zanemari stanare\"?",
            "confirmenabletenant": "Sigurno želite uključiti oznaku \"Zanemari stanare\"?",
            "ignoretenants": "Zanemari {0}",
            "info": "Informacije",
            "logo": {
                "cmdbuild": "CMDBuild Logotip",
                "cmdbuildready2use": "CMDBuild READY2USE logotip",
                "companylogo": "Logotip tvrtke",
                "openmaint": "logotip openMAINT"
            },
            "logout": "Odjava",
            "managementmodule": "Upravljački modul podataka",
            "multigroup": "Multigroup",
            "multitenant": "Više {0}",
            "navigation": "Navigacija",
            "pagenotfound": "Stranica nije pronađena",
            "password": {
                "change": "Promijeni lozinku",
                "confirm": "Potvrdite lozinku",
                "email": "Adrese e-pošte",
                "err_confirm": "Lozinka se ne podudara.",
                "err_diffprevious": "Lozinka ne može biti identična prethodnoj.",
                "err_diffusername": "Lozinka se ne može podudarati s korisničkim imenom.",
                "err_length": "Lozinka mora sadržavati najmanje {0} znakova.",
                "err_reqdigit": "Lozinka mora sadržavati barem jednu znamenku.",
                "err_reqlowercase": "Lozinka mora sadržavati barem jedan mali znak.",
                "err_requppercase": "Lozinka mora sadržavati barem jedan veliki znak.",
                "expired": "Vaša lozinka je istekla. Morate ju odmah promijeniti.",
                "forgotten": "Zaboravio/la sam lozinku.",
                "new": "Nova lozinka",
                "old": "Stara lozinka",
                "recoverysuccess": "Poslali smo vam e-poštu s uputama za oporavak zaporke.",
                "reset": "Poništavanje zaporke",
                "saved": "Lozinka je uspješno spremljena!"
            },
            "pleasecorrecterrors": "Ispravite navedene pogreške!",
            "preferences": {
                "comma": "Zarez",
                "decimalserror": "Polje decimalnih mjesta mora biti prisutno",
                "decimalstousandserror": "Razdjelnici decimala i tisućica moraju biti različiti",
                "default": "Default",
                "defaultvalue": "Zadana vrijednost",
                "firstdayofweek": "Prvi dan u tjednu",
                "gridpreferencesclear": "Obriši postavke rešetke",
                "gridpreferencescleared": "Postavke rešetke su izbrisane!",
                "gridpreferencessave": "Spremanje postavki rešetke",
                "gridpreferencessaved": "Postavke rešetke su spremljene!",
                "gridpreferencesupdate": "Ažuriranje postavki rešetke",
                "labelcsvseparator": "CSV separator",
                "labeldateformat": "Format datuma",
                "labeldecimalsseparator": "Decimalni razdjelnik",
                "labellanguage": "Jezik",
                "labelthousandsseparator": "Razdjelnik tisućica",
                "labeltimeformat": "Format vremena",
                "msoffice": "Microsoft Office",
                "period": "Razdoblje",
                "preferredfilecharset": "CSV kodiranje",
                "preferredofficesuite": "Željeni uredski paket",
                "space": "Razmak",
                "thousandserror": "Polje tisućica mora biti prisutno",
                "timezone": "Vremenska zona",
                "twelvehourformat": "12-satni format",
                "twentyfourhourformat": "24-satni format"
            },
            "searchinallitems": "Pretraživanje svih stavki",
            "selectdeselettenants": "Označi/odznači sve",
            "treenavcontenttitle": "{0} od {1}",
            "userpreferences": "Postavke"
        },
        "menu": {
            "allitems": "Sve stavke",
            "classes": "Klase",
            "custompages": "Prilagodljive stranice",
            "dashboards": "Nadzorna ploče",
            "processes": "Procesi",
            "reports": "Izvještaji",
            "views": "Prikazi"
        },
        "notes": {
            "edit": "Uredi bilješke"
        },
        "notifier": {
            "attention": "Pozor",
            "error": "Greška",
            "genericerror": "Opća pogreška",
            "genericinfo": "Opće informacije",
            "genericwarning": "Opće upozorenje",
            "info": "Informacije",
            "success": "Uspjeh",
            "warning": "Upozorenje"
        },
        "patches": {
            "apply": "Primijeni zakrpe",
            "category": "Kategorija",
            "description": "Opis",
            "name": "Ime",
            "patches": "Zakrpe"
        },
        "processes": {
            "abortconfirmation": "Sigurno želite prekinuti taj proces?",
            "abortprocess": "Prekini postupak",
            "action": {
                "advance": "Napredno",
                "label": "Radnja"
            },
            "activeprocesses": "Aktivni procesi",
            "allstatuses": "Sve",
            "editactivity": "Promjena aktivnosti",
            "openactivity": "Otvori događaj",
            "startworkflow": "Započni",
            "workflow": "Tijek rada"
        },
        "relationGraph": {
            "activity": "aktivnost",
            "allLabelsOnGraph": "sve oznake na grafikonu",
            "card": "Kartica",
            "cardList": "Popis Kartica",
            "cardRelations": "Kartične veze",
            "choosenaviagationtree": "Odaberite navigacijsko stablo",
            "class": "Klasa",
            "classList": "Popis klasa",
            "compoundnode": "Čvor Spoja",
            "disable": "Onemogući",
            "edges": "Rubovi",
            "enable": "Omogući",
            "labelsOnGraph": "pop-up savjet na grafikonu",
            "level": "Razina",
            "nodes": "Čvorovi",
            "openRelationGraph": "Otvori Grafikon Veza",
            "qt": "Kol.",
            "refresh": "Osvježi",
            "relation": "veza",
            "relationGraph": "Grafikon veza",
            "reopengraph": "Ponovno otvorite grafikon iz ovog čvora"
        },
        "relations": {
            "adddetail": "Dodaj pojedinosti",
            "addrelations": "Dodaj veze",
            "attributes": "Atributi",
            "begindate": "Datum početka",
            "code": "Kod",
            "deletedetail": "Ukloni detalj",
            "deleterelation": "Ukloni vezu",
            "deleterelationconfirm": "Sigurno želite ukloniti ovu vezu?",
            "description": "Opis",
            "editcard": "Uredi karticu",
            "editdetail": "Uredi detalje",
            "editrelation": "Uredi vezu",
            "extendeddata": "Prošireni podaci",
            "mditems": "stavke",
            "missingattributes": "Nema obaveznih atributa",
            "opencard": "Otvori povezanu karticu",
            "opendetail": "Prikaži pojedinosti",
            "type": "Vrsta"
        },
        "reports": {
            "csv": "CSV",
            "download": "Preuzimanje",
            "format": "Format",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Ispis",
            "reload": "Ponovo učitaj",
            "rtf": "RTF format"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Default"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Dnevno"
                        },
                        "monthly": {
                            "description": "Mjesečno"
                        },
                        "once": {
                            "description": "Jednom"
                        },
                        "weekly": {
                            "description": "Tjedno"
                        },
                        "yearly": {
                            "description": "Godišnje"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Default"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Dodaj Thematism",
            "analysisType": "Vrsta Analize",
            "attribute": "Atribut",
            "calculateRules": "Generiraj stilska pravila",
            "clearThematism": "Obriši Tematizam",
            "color": "Boja",
            "defineLegend": "Definicija legende",
            "defineThematism": "Definicija tematizma",
            "function": "Značajka",
            "generate": "Generiraj",
            "geoAttribute": "Geografski Atribut",
            "graduated": "Slojevito",
            "highlightSelected": "Označi odabranu stavku",
            "intervals": "Intervali",
            "legend": "Legenda",
            "name": "ime",
            "newThematism": "Novi Tematizam",
            "punctual": "Točan",
            "quantity": "Zbroj",
            "segments": "Segmenti",
            "source": "Izvor",
            "table": "Tablica",
            "thematism": "Tematizmi",
            "value": "Vrijednost"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Izađi bez spremanja",
                    "stayinedit": "Povratak na uređivanje"
                },
                "savebeforeexit": "Postoje promjene na prilozima koji nisu spremljene. Želite li ih spremiti prije izlaza?",
                "saveprocessmessage": "Prilogu mogu biti spremljeni samo u postojećim karticama. Pritiskom na Spremi, instanca procesa će biti kreirana sa podacima unešenim na formu."
            },
            "customform": {
                "addrow": "Dodaj redak",
                "clonerow": "Kloniraj red",
                "datanotvalid": "Podaci nisu valjani",
                "deleterow": "Ukloni redak",
                "editrow": "Uredi redak",
                "export": "Export",
                "import": "Uvoz",
                "importexport": {
                    "expattributes": "Podaci za izvoz",
                    "file": "Datoteka",
                    "filename": "Naziv datoteke",
                    "format": "Format",
                    "importmode": "Način uvoza",
                    "keyattributes": "Ključni atributi",
                    "missingkeyattr": "Odaberite barem jedan ključni atribut",
                    "modeadd": "Dodaj",
                    "modemerge": "Spoji",
                    "modereplace": "Zamijeni",
                    "separator": "Razdjelnik"
                },
                "refresh": "Osvježi na zadane postavke"
            },
            "linkcards": {
                "checkedonly": "Samo označene",
                "editcard": "Uredi karticu",
                "opencard": "Otvori karticu",
                "refreshselection": "Primijeni zadani odabir",
                "togglefilterdisabled": "Onemogući filtar rešetke",
                "togglefilterenabled": "Omogući filtar rešetke"
            },
            "required": "Ovaj widget je potreban."
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
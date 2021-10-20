(function() {
    Ext.define('CMDBuildUI.locales.sl.Locales', {
        "requires": ["CMDBuildUI.locales.sl.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "sl",
        "administration": CMDBuildUI.locales.sl.LocalesAdministration.administration,
        "attachments": {
            "add": "Dodaj priponko",
            "attachmenthistory": "Zgodovina priponke",
            "author": "Avtor",
            "browse": "Izberi &hellip",
            "category": "Kategorija",
            "code": "Koda",
            "creationdate": "Datum nastanka",
            "deleteattachment": "Izbriši priponko",
            "deleteattachment_confirmation": "Ali ste prepričani, da želite izbrisati priponko?",
            "description": "Opis",
            "download": "Prenesi",
            "dropfiles": "Spustite datoteke sem",
            "editattachment": "Spremeni priponko",
            "file": "Datoteka",
            "filealreadyinlist": "Datoteka {0} je že na seznamu.",
            "filename": "Ime datoteke",
            "fileview": "Poglej priponko",
            "invalidfiles": "Odstrani poškodovano datoteko",
            "majorversion": "Glavna različica",
            "maxsize": "Največja dovoljena velikost datoteke je {0} MB.",
            "metadata": "Metadata",
            "modificationdate": "Datum spremembe",
            "new": "Nova priponka",
            "nocategory": "Nekategoriziran",
            "preview": "Predogled",
            "removefile": "Odstrani datoteko",
            "statuses": {
                "empty": "Izprazni datoteko",
                "error": "Napaka",
                "extensionNotAllowed": "Pripone datotek niso dovoljene",
                "loaded": "Naloženo",
                "ready": "Pripravljen",
                "toolarge": "Prevelika velikost"
            },
            "successupload": "Naloženih {0} pripong.",
            "uploadfile": "Naloži datoteko…",
            "version": "Različica",
            "viewhistory": "Pokaži zgodovino priponk",
            "warningmessages": {
                "atleast": "Opozorilo: naloženih {0} priponk vrste \"{1}\". Ta kategorija ima lahko najmanj {2} priponk.",
                "exactlynumber": "Opozorilo: naloženih {0} priponk vrste \"{1}\". Ta kategorija ima natanko {2} priponk.",
                "maxnumber": "Opozorilo: naloženih {0} priponk vrste \"{1}\". Ta kategorija ima lahko največ {2} priponk."
            },
            "wrongfileextension": "{0} pripon ni dovoljenih"
        },
        "bim": {
            "bimViewer": "BIM pregledovalnik",
            "card": {
                "label": "Kartica"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Omejevalno polje vzdolž X osi",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Omejevalno polje vzdolž Y osi",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Omejevalno polje vzdolž Z osi",
                "LARGEST_FACE_AREA": "Največja nastopna površina",
                "LARGEST_FACE_DIRECTION": "Največja nastopna smer",
                "SURFACE_AREA_ALONG_X": "Površina vzdolž X osi",
                "SURFACE_AREA_ALONG_Y": "Površina vzdolž Y osi",
                "SURFACE_AREA_ALONG_Z": "Površina vzdolž Z osi",
                "TOTAL_SHAPE_VOLUME": "Skupni volumen ",
                "TOTAL_SURFACE_AREA": "Skupna površina",
                "WALKABLE_SURFACE_AREA": "Pohodna površina",
                "calculated": "Izračunaj",
                "description": "Opis",
                "guid": "GUID",
                "label": "Lastnosti",
                "name": "Ime",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Sloji",
                "menu": {
                    "hideAll": "Skrij vse",
                    "showAll": "Prikaži vse"
                },
                "name": "Ime",
                "qt": "Qt",
                "visibility": "Vidnost"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Pogled od spredaj",
                "mod": "Kontrolnik pogleda",
                "orthographic": "ORTO pogled",
                "pan": "Pomikanje",
                "perspective": "Pogled perspektiva",
                "resetView": "Resetiraj pogled",
                "rotate": "Rotiraj",
                "sideView": "Stranski pogled",
                "topView": "Pogled od zgoraj"
            },
            "showBimCard": "Odpri 3D pregledovalnik",
            "tree": {
                "arrowTooltip": "Izberi element",
                "columnLabel": "Drevo",
                "label": "Drevo",
                "open_card": "Odpri povezane kartice",
                "root": "IFC root"
            }
        },
        "bulkactions": {
            "abort": "Prekliči izbrane elemente",
            "alertdownloadattachments": "Nekatere priloge ne bodo prenesene, ker še niso bile shranjene na strežniku.",
            "alertnoattachmentsdownload": "Nobene od prilog ne bodo prenešene, ker še niso bile shranjene na strežniku.",
            "cancelselection": "Prekliči selekcijo",
            "confirmabort": "Preklicujete {0} procesov. Ali želite nadaljevati?",
            "confirmdelete": "Izbrisali ste {0} kartic. Ali želite nadaljevati?",
            "confirmdeleteattachements": "Izbrisali ste {0} priponk. Ali želite nadaljevati?",
            "confirmedit": "Spremenili ste {0} od {1} kartic. Ali želite nadaljevati?",
            "delete": "Izbriši izbrane elemente",
            "download": "Prenesi izbrane priponke",
            "downloadall": "Prenesi vse priponke",
            "edit": "Uredi izbrane elemente",
            "selectall": "Izberi vse elemente"
        },
        "calendar": {
            "active_expired": "Aktivno/Potečeno",
            "add": "Dodaj",
            "advancenotification": "Napredno obveščanje",
            "allcategories": "Vse kategorije",
            "alldates": "Vsi datumi",
            "associatedcard": "Povezana kartica",
            "calculated": "Izračunaj",
            "calendar": "Koledar",
            "cancel": "Označi kot preklicano",
            "category": "Kategorija",
            "class": "Razred",
            "cm_confirmcancel": "Ali ste prepričani, da želite označiti preklicane razporede?",
            "cm_confirmcomplete": "Ali ste prepričani, da želite označiti končane razporede?",
            "cm_markcancelled": "Označi kot preklican razpored",
            "cm_markcomplete": "Označi kot zaključen razpored",
            "complete": "Dokončaj",
            "completed": "Dokončano",
            "date": "Datum",
            "days": "Dnevi",
            "delaybeforedeadline": "Zakasnitev pred rokom",
            "delaybeforedeadlinevalue": "Zakasnitev pred rokom vrednosti",
            "description": "Opis",
            "editevent": "Uredi razpored",
            "enddate": "Datum zaključka",
            "endtype": "Vrsta zaključka",
            "event": "Razpored",
            "executiondate": "Datum izvedbe",
            "frequency": "Frekvenca",
            "frequencymultiplier": "Frekvenca",
            "grid": "Mreža",
            "leftdays": "Preostanek dni",
            "londdescription": "Poln opis",
            "manual": "Navodilo",
            "maxactiveevents": "Maksimalno št. aktivnih dogodkov",
            "messagebodydelete": "Želite odstraniti planirane razporede?",
            "messagebodyplural": "Obstaja {0} planiranih razporedov",
            "messagebodyrecalculate": "Želite osvežiti planiran razpored z novim datumom?",
            "messagebodysingular": "Obstaja {0} planiran razpored",
            "messagetitle": "Osveži razpored",
            "missingdays": "Manjkajoči dnevi",
            "next30days": "Naslednjih 30 dni",
            "next7days": "Naslednjih 7 dni",
            "notificationtemplate": "Predloga za obveščanje",
            "notificationtext": "Tekst obvestila",
            "occurencies": "Število dogodkov",
            "operation": "Delovanje",
            "partecipantgroup": "Skupina udeležencev",
            "partecipantuser": "Uporabnik udeleženec",
            "priority": "Pomembnost",
            "recalculate": "Preračunaj",
            "referent": "Referent",
            "scheduler": "Razpored",
            "sequencepaneltitle": "Ustvari razpored",
            "startdate": "Datum pričetka",
            "status": "Status",
            "today": "Danes",
            "type": "Vrsta",
            "viewevent": "Poglej razpored",
            "widgetcriterion": "Izračunaj kriterij",
            "widgetemails": "E-pošta",
            "widgetsourcecard": "Izvorna kartica"
        },
        "classes": {
            "cards": {
                "addcard": "Dodaj kartico",
                "clone": "Podvoji",
                "clonewithrelations": "Podvoji kartico in relacije",
                "deletebeaware": "Pozor:",
                "deleteblocked": "Ni mogoče nadaljevati z izbrisom zaradi {0} relacij .",
                "deletecard": "Izbriši kartico",
                "deleteconfirmation": "Ali ste prepričani, da želite izbrisati kartico?",
                "deleterelatedcards": "tudi {0} povezanih kartic bo izbrisanih",
                "deleterelations": "relacije s {0} karticami bodo izbrisane",
                "label": "Kartice",
                "modifycard": "Spremeni kartico",
                "opencard": "Odpri kartico",
                "print": "Natisni kartico"
            },
            "simple": "Enostavno",
            "standard": "Standard"
        },
        "common": {
            "actions": {
                "add": "Dodaj",
                "apply": "Potrdi",
                "cancel": "Prekliči",
                "close": "Zapri",
                "delete": "Izbriši",
                "edit": "Uredi",
                "execute": "Izvrši",
                "help": "Pomoč",
                "load": "Naloži",
                "open": "Odpri",
                "refresh": "Osveži podatke",
                "remove": "Odstrani",
                "save": "Shrani",
                "saveandapply": "Shrani in potrdi",
                "saveandclose": "Shrani in zapri",
                "search": "Iskanje",
                "searchtext": "Iskanje…"
            },
            "attributes": {
                "nogroup": "Osnovni podatki"
            },
            "dates": {
                "date": "d/M/L",
                "datetime": "d/M/L HH:mm:ss",
                "time": "HH:mm:ss"
            },
            "editor": {
                "clearhtml": "Pošisti HTML",
                "expand": "Razširi urejevalnik",
                "reduce": "Zmanjšaj urejevalnik",
                "signature": "Dodaj podpis",
                "unlink": "Prekini povezavo",
                "unlinkmessage": "Pretvori  izbrano hiperpovezavo v besedilo."
            },
            "grid": {
                "disablemultiselection": "Onemogoči multi-izbiro",
                "enamblemultiselection": "Omogoči multi-izbiro",
                "export": "Izvozi podatke",
                "filterremoved": "Trenutni filter je bil odstranjen",
                "import": "Uvozi podatke",
                "itemnotfound": "Predmet ni najden",
                "list": "Seznam",
                "opencontextualmenu": "Odpri kontekstualni meni",
                "print": "Natisni",
                "printcsv": "Natisni kot CSV",
                "printodt": "Natisni kot ODT",
                "printpdf": "Natisni kot PDF",
                "row": "Predmet",
                "rows": "Predmeti",
                "subtype": "Podvrsta"
            },
            "tabs": {
                "activity": "Aktivnost",
                "attachment": "Priponka",
                "attachments": "Priponke",
                "card": "Kartica",
                "clonerelationmode": "Podvoji relacijo povezav",
                "details": "Podrobnosti",
                "emails": "E-pošta",
                "history": "Zgodovina",
                "notes": "Opombe",
                "relations": "Relacija",
                "schedules": "Razporedi"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Prenesi graf",
                "gridhide": "Skrij mrežo podatkov",
                "gridshow": "Prikaži podatke mrež",
                "openinpopup": "Odpri v pojavnem oknu",
                "parametershide": "Skrij parametre podatkov",
                "parametersshow": "Prikaži podatke parametrov",
                "reload": "Ponovno naloži"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Dodaj priponko iz arhivov dokumentov",
            "alredyexistfile": "Datoteka s tem imenom že obstaja",
            "archivingdate": "Datum shranjevanja",
            "attachfile": "Dodaj priponko",
            "bcc": "Skp",
            "cc": "Kp",
            "composeemail": "Ustvari elektronsko sporočilo",
            "composefromtemplate": "Ustvari iz predloge",
            "delay": "Zakasnitev",
            "delays": {
                "day1": "1 dan",
                "days2": "2 dneva",
                "days4": "4 dni",
                "hour1": "1 ura",
                "hours2": "2 uri",
                "hours4": "4 ure",
                "month1": "1 mesec",
                "negativeday1": "1 dan prej",
                "negativedays2": "2 dneva prej",
                "negativedays4": "4 dni prej",
                "negativehour1": "1 uro prej",
                "negativehours2": "2 uri prej",
                "negativehours4": "4 ure prej",
                "negativemonth1": "1 mesec prej",
                "negativeweek1": "1 teden prej",
                "negativeweeks2": "2 tedna prej",
                "none": "Brez",
                "week1": "1 teden",
                "weeks2": "2 tedna"
            },
            "dmspaneltitle": "Izberi priponko iz baze podatkov",
            "edit": "Uredi",
            "from": "Od",
            "gridrefresh": "Osveži mrežo",
            "keepsynchronization": "Obdrži sinhroniziranje",
            "message": "Sporočilo",
            "regenerateallemails": "Obnovi vso e-pošto",
            "regenerateemail": "Obnovi elektronsko sporočilo",
            "remove": "Odstrani",
            "remove_confirmation": "Ali ste prepričani, da želite izbrisati e-sporočilo?",
            "reply": "odgovori",
            "replyprefix": "Na {0}, {1} napiši:",
            "selectaclass": "Izberi razred",
            "sendemail": "Pošlji e-pošto",
            "signature": "Podpis",
            "statuses": {
                "draft": "Osnutek",
                "error": "Napaka",
                "outgoing": "Odhodna",
                "received": "Prejeto",
                "sent": "Pošlji"
            },
            "subject": "Zadeva",
            "to": "Za",
            "view": "Pogled"
        },
        "errors": {
            "autherror": "Napačno uporabniško ime in/ali geslo",
            "classnotfound": "Razreda {0} ni mogoče najti",
            "fieldrequired": "Polje je zahtevano",
            "invalidfilter": "Napačen filter",
            "notfound": "Predmet in najden"
        },
        "filters": {
            "actions": "Dejavnosti",
            "addfilter": "Dodaj filter",
            "any": "Katerikoli",
            "attachments": "Priponke",
            "attachmentssearchtext": "Iskanje po priponkah",
            "attribute": "Izberi atribut",
            "attributes": "Atributi",
            "clearfilter": "Počisti filter",
            "clone": "Podvoji",
            "copyof": "Kopija",
            "currentgroup": "Trenutna skupina",
            "currentuser": "Trenutni uporabnik",
            "defaultset": "Nastavi kot privzeto",
            "defaultunset": "Privzeto deaktivirano",
            "description": "Opis",
            "domain": "Domena",
            "errorname": "Ime datoteke je že v uporabi",
            "filterdata": "Filtriraj podatke",
            "fromfilter": "Od filtra",
            "fromselection": "Izberi od",
            "group": "Skupina",
            "ignore": "Prezri",
            "migrate": "Migriraj",
            "name": "Ime",
            "newfilter": "Nov filter",
            "noone": "Brez izbora",
            "operator": "Operater",
            "operators": {
                "beginswith": "Začni s/z",
                "between": "Med",
                "contained": "Vsebuje",
                "containedorequal": "Vsebuje ali je enako",
                "contains": "Vsebuje",
                "containsorequal": "Vsebuje ali je enako",
                "descriptionbegin": "Opis se začne z",
                "descriptioncontains": "Opis vsebuje",
                "descriptionends": "Opis se konča z",
                "descriptionnotbegin": "Opis se ne začne z",
                "descriptionnotcontain": "Opis ne vsebuje",
                "descriptionnotends": "Opis se ne konča z",
                "different": "Različen",
                "doesnotbeginwith": "Se ne prične s/z",
                "doesnotcontain": "Ne vsebuje",
                "doesnotendwith": "Se ne konča s/z",
                "endswith": "Se konča s/z",
                "equals": "Enako",
                "greaterthan": "Večji kot",
                "isnotnull": "Ni prazen",
                "isnull": "Je prazen",
                "lessthan": "Manj kot"
            },
            "relations": "Relacije",
            "type": "Vrsta",
            "typeinput": "Vnesi parameter",
            "user": "Uporabnik",
            "value": "Vrednost"
        },
        "gis": {
            "card": "Kartica",
            "cardsMenu": "Meni kartic",
            "code": "Koda",
            "description": "Opis",
            "extension": {
                "errorCall": "Napaka",
                "noResults": "Brez rezultata"
            },
            "externalServices": "Zunanje storitve",
            "geographicalAttributes": "GEO atributi",
            "geoserverLayers": "Geoserver sloji",
            "layers": "Sloji",
            "list": "Seznam",
            "longpresstitle": "Geoelementi v področju",
            "map": "Zemljevid",
            "mapServices": "Storitve zemljevidov",
            "position": "Pozicija",
            "root": "Izvorna oblika",
            "tree": "Drevo",
            "type": "Vrsta",
            "view": "Pogled",
            "zoom": "Povečaj"
        },
        "history": {
            "activityname": "Naziv aktivnosti",
            "activityperformer": "Izvajalec aktivnosti",
            "begindate": "Pričetek",
            "enddate": "Datum zaključka",
            "processstatus": "Status",
            "user": "Uporabnik"
        },
        "importexport": {
            "database": {
                "uri": "Podatkovna baza URI",
                "user": "Uporabnik podatkovne baze"
            },
            "downloadreport": "Prenesi poročilo",
            "emailfailure": "Pri pošiljanju e-pošte je prišlo do napake!",
            "emailmessage": "Dodan uvoz poročila datoteke \"{0}\" na  datum {1}",
            "emailsubject": "Uvozi podatke poročila",
            "emailsuccess": "E-pošta je bila uspešno poslana!",
            "export": "Izvozi",
            "exportalldata": "Vsi podatki",
            "exportfiltereddata": "Samo podatki ujemajočih filtrov mrež",
            "gis": {
                "shapeimportdisabled": "Uvoz \"Shape\" ni omogočen v predlogi.",
                "shapeimportenabled": "Konfiguracija uvoza \"Shape\""
            },
            "ifc": {
                "card": "Kartica",
                "project": "Projekt",
                "sourcetype": "Uvozi iz"
            },
            "import": "Uvozi",
            "importresponse": "Uvozi odzive",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Napake",
                "linenumber": "Št.",
                "message": "Sporočilo",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Obdelane vrstice",
                "recordnumber": "ID št.",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Pošlji poročilo",
            "template": "Predloga",
            "templatedefinition": "Definicija predloge"
        },
        "joinviews": {
            "active": "Aktivno",
            "addview": "Dodaj pogled",
            "alias": "Alias",
            "attribute": "Atribut",
            "attributes": "Atributi",
            "attributesof": "Atributov od: {0} ",
            "createview": "Ustvari pogled",
            "datasorting": "Sortiranje podatkov",
            "delete": "Izbriši",
            "deleteview": "Izbriši pogled",
            "deleteviewconfirm": "Ali ste prepričani, da želite izbrisati pogled?",
            "description": "Opis",
            "disable": "Onemogoči",
            "domainalias": "Alias domene",
            "domainsof": "Domene od {0}",
            "edit": "Uredi",
            "editview": "Uredi konfiguracijo pogleda",
            "enable": "Omogoči",
            "fieldsets": "Nastavitev polj",
            "filters": "Filtri",
            "generalproperties": "Glavne lastnosti",
            "group": "Skupina",
            "innerjoin": "Notranji stik",
            "jointype": "Vrsta stika",
            "joinview": "Pogled združitve",
            "klass": "Razred",
            "manageview": "Uredi pogled",
            "masterclass": "Master razred",
            "masterclassalias": "Master razred - alias",
            "name": "Ime",
            "newjoinview": "Nov pogled stika",
            "outerjoin": "Zunanji stik",
            "pleaseseleceavalidmasterclass": "Izberite veljaven master razred",
            "refreshafteredit": "Ali želite osvežiti stran za prikaz sprememb?",
            "selectatleastoneattribute": "Izberite vsaj en atribut za prikaz v mreži in v zmanjšani mreži v koraku 4.",
            "showingrid": "Pokaži v mreži",
            "showinreducedgrid": "Pokaži v zmanjšani mreži",
            "targetalias": "Ciljni razred - alias"
        },
        "login": {
            "buttons": {
                "login": "Prijava",
                "logout": "Spremeni uporabnika"
            },
            "fields": {
                "group": "Skupina",
                "language": "Jezik",
                "password": "Geslo",
                "tenants": "Najemniki",
                "username": "Uporabniško ime"
            },
            "loggedin": "Prijava uspela",
            "sso": {
                "loginfailure": "Napaka prijave",
                "loginwith": "Prijava s/z {0}",
                "or": "ali"
            },
            "title": "Prijava",
            "welcome": "Dobrodošli nazaj {0}"
        },
        "main": {
            "administrationmodule": "Administracijski modul",
            "baseconfiguration": "Osnovna konfiguracija",
            "cardlock": {
                "lockedmessage": "Žal ne morete spremeniti kartice, saj jo ureja {0}.",
                "someone": "nekdo"
            },
            "changegroup": "Spremeni skupino",
            "changetenant": "Spremeni {0}",
            "confirmchangegroup": "Ali ste prepričani, da želite spremeniti skupino?",
            "confirmchangetenants": "Ali ste prepričani, da želite spremeniti aktivne najemnike?",
            "confirmdisabletenant": "Ali ste prepričani, da želite izklopiti obvestilo \"prezri najemnika\"?",
            "confirmenabletenant": "Ali ste prepričani, da želite vklopiti obvestilo \"prezri najemnika\"?",
            "ignoretenants": "Ignoriraj {0}",
            "info": "Informacija",
            "logo": {
                "cmdbuild": "CMDBuild Logo",
                "cmdbuildready2use": "CMDBuild READY2USE Logo",
                "companylogo": "Logotip podjetja",
                "openmaint": "openMAINT Logo"
            },
            "logout": "Odjava",
            "managementmodule": "Podatkovni modul",
            "multigroup": "Več-skupin",
            "multitenant": "Multi {0}",
            "navigation": "Navigacija",
            "pagenotfound": "Strani ni bilo mogoče najti",
            "password": {
                "change": "Spremeni geslo",
                "confirm": "Potrdi geslo",
                "email": "Naslov e-pošte",
                "err_confirm": "Napačno vnešeno geslo.",
                "err_diffprevious": "Geslo ne more biti identično predhodno uporabljenemu geslu.",
                "err_diffusername": "Geslo ne more biti identično uporabniškemu imenu.",
                "err_length": "Geslo mora biti dolžine najmanj {0} znakov.",
                "err_reqdigit": "Geslo mora vsebovati najmanj 1 število.",
                "err_reqlowercase": "Geslo mora vsebovati najmanj 1 črko z malo začetnico.",
                "err_requppercase": "Geslo mora vsebovati najmanj 1 črko z veliko začetnico.",
                "expired": "Vaše geslo je poteklo. Prosim spremenite ga sedaj.",
                "forgotten": "Pozabil sem svoje geslo",
                "new": "Novo geslo",
                "old": "Staro geslo",
                "recoverysuccess": "Poslali smo vam e-pošto z navodili o ponastavitvi gesla.",
                "reset": "Resetiraj geslo",
                "saved": "Geslo pravilno shranjeno!"
            },
            "pleasecorrecterrors": "Prosim popravite označene napake!",
            "preferences": {
                "comma": "Vejica",
                "decimalserror": "Decimalni simbol naj bo aktiviran",
                "decimalstousandserror": "Decimalni simbol in simbol za ločilo tisočic morata biti različna.",
                "default": "Privzeto",
                "defaultvalue": "Privzete nastavitve",
                "firstdayofweek": "Prvi dan v tednu",
                "gridpreferencesclear": "Počisti nadtavitev mreže",
                "gridpreferencescleared": "Mrežna nastavitev počiščena!",
                "gridpreferencessave": "Shrani nastavitve mreže",
                "gridpreferencessaved": "Mrežna nastavitev shranjena!",
                "gridpreferencesupdate": "Posodobi mrežne nastavitve",
                "labelcsvseparator": "CSV ločilo",
                "labeldateformat": "Oblika datuma",
                "labeldecimalsseparator": "Decimalni simbol",
                "labellanguage": "Jezik",
                "labelthousandsseparator": "Ločilo tisočic",
                "labeltimeformat": "Oblika ure",
                "msoffice": "Microsoft Office",
                "period": "Obdobje",
                "preferredfilecharset": "CSV kodiranje",
                "preferredofficesuite": "Priporočeno programsko okolje Office",
                "space": "Prostor",
                "thousandserror": "Ločilo tisočic naj bo vključen",
                "timezone": "Časovni pas",
                "twelvehourformat": "12-urni format",
                "twentyfourhourformat": "24-urni format"
            },
            "searchinallitems": "Iskanje po vseh predmetih",
            "selectdeselettenants": "Izberi/Prekliči vse",
            "treenavcontenttitle": "{0} od {1}",
            "userpreferences": "Nastavitve"
        },
        "menu": {
            "allitems": "Vsi predmeti",
            "classes": "Razredi",
            "custompages": "Stran po meri",
            "dashboards": "Zbirnik",
            "processes": "Procesi",
            "reports": "Poročila",
            "views": "Pogledi"
        },
        "notes": {
            "edit": "Spremeni opombe"
        },
        "notifier": {
            "attention": "Pozor",
            "error": "Napaka",
            "genericerror": "Splošna napaka",
            "genericinfo": "Splošna informacija",
            "genericwarning": "Splošno opozorilo",
            "info": "Informacija",
            "success": "Uspešno",
            "warning": "Opozorilo"
        },
        "patches": {
            "apply": "Uporabi popravke",
            "category": "Kategorija",
            "description": "Opis",
            "name": "Ime",
            "patches": "Popravki"
        },
        "processes": {
            "abortconfirmation": "Ali ste prepričani, da želite prekiniti proces?",
            "abortprocess": "Prekliči proces",
            "action": {
                "advance": "Nadaljuj",
                "label": "Dejavnost"
            },
            "activeprocesses": "Aktivni procesi",
            "allstatuses": "Vsi",
            "editactivity": "Spremeni aktivnost",
            "openactivity": "Odpri aktivnost",
            "startworkflow": "Pričetek",
            "workflow": "Delovni proces"
        },
        "relationGraph": {
            "activity": "aktivnost",
            "allLabelsOnGraph": "vse oznake na grafu",
            "card": "Kartica",
            "cardList": "Lista kartic",
            "cardRelations": "Relacija povezav kartic",
            "choosenaviagationtree": "Izberi drevo navigacije",
            "class": "Razred",
            "classList": "Klasifikacija razredov",
            "compoundnode": "Sestavljeno vozlišče",
            "disable": "Onemogoči",
            "edges": "Robovi",
            "enable": "Omogoči",
            "labelsOnGraph": "opis na grafu",
            "level": "Stopnja",
            "nodes": "Vozlišča",
            "openRelationGraph": "Odpri diagram relacij",
            "qt": "Qt",
            "refresh": "Osveži",
            "relation": "relacija",
            "relationGraph": "Diagram povezav",
            "reopengraph": "Ponovno odpri graf vozlišča"
        },
        "relations": {
            "adddetail": "Dodaj podrobnosti",
            "addrelations": "Dodaj relacijo",
            "attributes": "Atributi",
            "begindate": "Pričetek",
            "code": "Koda",
            "deletedetail": "Izbriši podrobnosti",
            "deleterelation": "Izbriši relacijo",
            "deleterelationconfirm": "Ali ste prepričani, da želite izbrisati relacijo?",
            "description": "Opis",
            "editcard": "Uredi kartico",
            "editdetail": "Uredi podrobnosti",
            "editrelation": "Uredi relacijo",
            "extendeddata": "Razširjeni podatki",
            "mditems": "predmeti",
            "missingattributes": "Manjkajo obvezni atributi",
            "opencard": "Odpri povezane kartice",
            "opendetail": "Pokaži podrobnosti",
            "type": "Vrsta"
        },
        "reports": {
            "csv": "CSV",
            "download": "Prenesi",
            "format": "Formatiraj",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Natisni",
            "reload": "Ponovno naloži",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Privzeto"
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
                            "description": "Enkratno"
                        },
                        "weekly": {
                            "description": "Tedensko"
                        },
                        "yearly": {
                            "description": "Letno"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Privzeto"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Dodaj Tematiko",
            "analysisType": "Vrsta analize",
            "attribute": "Atribut",
            "calculateRules": "Ustvari pravila",
            "clearThematism": "Počisti Tematiko",
            "color": "Barva",
            "defineLegend": "Definicija legende",
            "defineThematism": "Definicija Tematike",
            "function": "Funkcija",
            "generate": "Ustvari",
            "geoAttribute": "Geografski atributi",
            "graduated": "Graduated",
            "highlightSelected": "Poudari izbrane elemente",
            "intervals": "Intervali",
            "legend": "Legenda",
            "name": "ime",
            "newThematism": "Nova Tematika",
            "punctual": "Natančnost",
            "quantity": "Količina",
            "segments": "Segmenti",
            "source": "Izvor",
            "table": "Tabela",
            "thematism": "Tematika",
            "value": "Vrednost"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Izhod brez shranjevanja",
                    "stayinedit": "Nazaj na urejanje"
                },
                "savebeforeexit": "Spremembe niso shranjene. Želite shraniti pred izhodom?",
                "saveprocessmessage": "Priponke so lahko shranjene zgolj v obstoječe kartice. S klikom na Shrani se bo primerek procesa ustvaril s podatki vnesenimi v obrazec."
            },
            "customform": {
                "addrow": "Dodaj vrstico",
                "clonerow": "Podvoji vrstico",
                "datanotvalid": "Podatek ni veljaven",
                "deleterow": "Izbriši vrstico",
                "editrow": "Uredi vrstico",
                "export": "Izvozi",
                "import": "Uvozi",
                "importexport": {
                    "expattributes": "Podatki za izvoz",
                    "file": "Datoteka",
                    "filename": "Ime datoteke",
                    "format": "Formatiraj",
                    "importmode": "Način uvoza",
                    "keyattributes": "Ključni atributi",
                    "missingkeyattr": "Izberite vsaj en ključni atribut",
                    "modeadd": "Dodaj",
                    "modemerge": "Združi",
                    "modereplace": "Nadomesti",
                    "separator": "Ločilo"
                },
                "refresh": "Osveži na privzeto"
            },
            "linkcards": {
                "checkedonly": "Izberi samo",
                "editcard": "Uredi kartico",
                "opencard": "Odpri kartico",
                "refreshselection": "Potrdi privzeto izbiro",
                "togglefilterdisabled": "Onemogoči mrežni filter",
                "togglefilterenabled": "Omogoči mrežni filter"
            },
            "required": "Pripomoček je zahtevan."
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
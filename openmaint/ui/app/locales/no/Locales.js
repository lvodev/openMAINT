(function() {
    Ext.define('CMDBuildUI.locales.no.Locales', {
        "requires": ["CMDBuildUI.locales.no.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "no",
        "administration": CMDBuildUI.locales.no.LocalesAdministration.administration,
        "attachments": {
            "add": "Legg til vedlegg",
            "attachmenthistory": "Vedleggshistorikk",
            "author": "Forfatter",
            "browse": "Bla igjennom",
            "category": "Kategori",
            "code": "Kode",
            "creationdate": "Opprettelsesdato",
            "deleteattachment": "Slett vedlegg",
            "deleteattachment_confirmation": "Er du sikker på at du vil slette vedlegget?",
            "description": "Beskrivelse",
            "download": "Last ned",
            "dropfiles": "Slipp filer hit",
            "editattachment": "Endre vedlegg",
            "file": "Fil",
            "filealreadyinlist": "Filen {0} er allerede i listen.",
            "filename": "Filnavn",
            "fileview": "Vis vedlegg",
            "invalidfiles": "Slett ugyldige filer",
            "majorversion": "Hovedversjon",
            "maxsize": "Maksimum filstørrelse er {0} MB.",
            "metadata": "Metadata",
            "modificationdate": "Endringsdato",
            "new": "Nytt vedlegg",
            "nocategory": "Ukategorisert",
            "preview": "Forhåndsvisning",
            "removefile": "Slett fil",
            "statuses": {
                "empty": "Tom fil",
                "error": "Feil",
                "extensionNotAllowed": "Filendelsen er ikke tillatt",
                "loaded": "Lastet",
                "ready": "Klar",
                "toolarge": "For stor"
            },
            "successupload": "{0} vedlegg lastet opp.",
            "uploadfile": "Last opp fil…",
            "version": "Versjon",
            "viewhistory": "Vis vedleggshistorikk",
            "warningmessages": {
                "atleast": "Advarsel: Det har blitt lastet opp {0} vedlegg av typen \"{1}\". Kategorien forventet minst {2} vedlegg",
                "exactlynumber": "Advarsel: Det har blitt lastet opp {0} vedlegg av typen \"{1}\". Kategorien forventet {2} vedlegg",
                "maxnumber": "Advarsel: Det har blitt lastet opp {0} vedlegg av typen \"{1}\". Kategorien forventet maks {2} vedlegg"
            },
            "wrongfileextension": "{0} filendelsen er ikke tillatt"
        },
        "bim": {
            "bimViewer": "Bim visning",
            "card": {
                "label": "Kort"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Avgrensningsboks langs X aksen",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Avgrensningsboks langs Y aksen",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Avgrensningsboks langs Z aksen",
                "LARGEST_FACE_AREA": "Største fasadeareal",
                "LARGEST_FACE_DIRECTION": "Største fasadelengde",
                "SURFACE_AREA_ALONG_X": "Flateområde langs X aksen",
                "SURFACE_AREA_ALONG_Y": "Flateområde langs Y aksen",
                "SURFACE_AREA_ALONG_Z": "Flateområde langs Z aksen",
                "TOTAL_SHAPE_VOLUME": "Totalt formområde",
                "TOTAL_SURFACE_AREA": "Totalt flateområde",
                "WALKABLE_SURFACE_AREA": "Bruksareal",
                "calculated": "Kalkulert",
                "description": "Beskrivelse",
                "guid": "GUID",
                "label": "Egenskaper",
                "name": "Navn",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Lag",
                "menu": {
                    "hideAll": "Skjul alle",
                    "showAll": "Vis alle"
                },
                "name": "Navn",
                "qt": "Qt",
                "visibility": "Synlighet"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Frontvisning",
                "mod": "Visningskontroller",
                "orthographic": "Ortografisk kamera",
                "pan": "panorer",
                "perspective": "Perspektivkamera",
                "resetView": "Nullstill visning",
                "rotate": "roter",
                "sideView": "Sidevisning",
                "topView": "Toppvisning"
            },
            "showBimCard": "Åpne 3D visning",
            "tree": {
                "arrowTooltip": "Velg element",
                "columnLabel": "Tre",
                "label": "Tre",
                "open_card": "Åpne relatert kort",
                "root": "Ifc Root"
            }
        },
        "bulkactions": {
            "abort": "Avbryt valgte",
            "alertdownloadattachments": "<em>Some attachments will not be downloaded because they have not yet been saved to the server</em>",
            "alertnoattachmentsdownload": "<em>No attachments will not be downloaded because they have not yet been saved to the server</em>",
            "cancelselection": "Avbryt utvalg",
            "confirmabort": "Du avbryter {0} prosesser. Er du sikker på at du vil fortsette?",
            "confirmdelete": "Du sletter {0} kort. Er du sikker på at du vil fortsette?",
            "confirmdeleteattachements": "Du sletter {0} vedlegg. Er du sikker på at du vil fortsette?",
            "confirmedit": "Du endrer {0} av {1} kort. Er du sikker på at du vil fortsette?",
            "delete": "Slett valgte",
            "download": "Last ned valgte vedlegg",
            "downloadall": "Last ned alle vedlegg",
            "edit": "Endre valgte",
            "selectall": "Velg alle"
        },
        "calendar": {
            "active_expired": "Aktiv/Utløpt",
            "add": "Legg til",
            "advancenotification": "Avanserte varslinger",
            "allcategories": "Alle kategorier",
            "alldates": "Alle datoer",
            "associatedcard": "Assosiert kort",
            "calculated": "Kalkulert",
            "calendar": "Kalender",
            "cancel": "Marker som avbrutt",
            "category": "Kategori",
            "class": "Klasse",
            "cm_confirmcancel": "Er du sikker på at du ønsker valgte markert som avbrutt?",
            "cm_confirmcomplete": "Er du sikker på at du ønsker valgte markert som fullført?",
            "cm_markcancelled": "Merk valgte som avbrutt",
            "cm_markcomplete": "Merk valgte som fullført",
            "complete": "Marker som fullført",
            "completed": "Fullført",
            "date": "Dato",
            "days": "Dager",
            "delaybeforedeadline": "Forsinkelse før frist",
            "delaybeforedeadlinevalue": "Forsinkelse før frist verdi",
            "description": "Beskrivelse",
            "editevent": "Endre tidsplan",
            "enddate": "Sluttdato",
            "endtype": "Sluttype",
            "event": "Tidsplan",
            "executiondate": "Kjøringsdato",
            "frequency": "Frekvens",
            "frequencymultiplier": "Frekvens multiplikator",
            "grid": "Grid",
            "leftdays": "Dager igjen",
            "londdescription": "Full beskrivelse",
            "manual": "Manuelt",
            "maxactiveevents": "Maks aktivere hendelser",
            "messagebodydelete": "Ønsker du å fjerne planlagt tidspunkt?",
            "messagebodyplural": "Det er {0} planlagte tidspunkter",
            "messagebodyrecalculate": "Ønsker du å rekalkulere tidsplanen med de nye datoene?",
            "messagebodysingular": "Det er {0} planlagt tidspunkt",
            "messagetitle": "Rekalkulerer tidsplan",
            "missingdays": "Manglende dager",
            "next30days": "Neste 30 dager",
            "next7days": "Neste 7 dager",
            "notificationtemplate": "Mal brukt for varsler",
            "notificationtext": "Varslingstekst",
            "occurencies": "Antall oppføringer",
            "operation": "Operasjon",
            "partecipantgroup": "Deltakergruppe",
            "partecipantuser": "Deltaker",
            "priority": "Prioritet",
            "recalculate": "Rekalkuler",
            "referent": "Referent",
            "scheduler": "Tidsplanlegger",
            "sequencepaneltitle": "Generer tidsplan",
            "startdate": "Startdato",
            "status": "Status",
            "today": "I dag",
            "type": "Type",
            "viewevent": "Vis tidsplan",
            "widgetcriterion": "Kalkulasjonskriterier",
            "widgetemails": "E-poster",
            "widgetsourcecard": "Kildekort"
        },
        "classes": {
            "cards": {
                "addcard": "Legg til kort",
                "clone": "Klone",
                "clonewithrelations": "Klone kort og relasjoner",
                "deletebeaware": "Vær obs på at:",
                "deleteblocked": "Det er ikke mulig å fortsette med slettingen, fordi det finnes relasjoner med {0}.",
                "deletecard": "Slett kort",
                "deleteconfirmation": "Er du sikker på at du vil slette kortet?",
                "deleterelatedcards": "{0} relaterte kort vil også bli slettet",
                "deleterelations": "relasjoner med {0} kort vil bli slettet",
                "label": "Kort",
                "modifycard": "Endre kort",
                "opencard": "Åpne kort",
                "print": "Skriv ut kort"
            },
            "simple": "Simple",
            "standard": "Standard"
        },
        "common": {
            "actions": {
                "add": "Legg til",
                "apply": "Bruk",
                "cancel": "Avbryt",
                "close": "Lukk",
                "delete": "Slett",
                "edit": "Endre",
                "execute": "Kjør",
                "help": "Hjelp",
                "load": "Last inn",
                "open": "Åpne",
                "refresh": "Oppfrisk data",
                "remove": "Fjern",
                "save": "Lagre",
                "saveandapply": "Lagre og bruk",
                "saveandclose": "Lagre og lukk",
                "search": "Søk",
                "searchtext": "Søk…"
            },
            "attributes": {
                "nogroup": "Basisdata"
            },
            "dates": {
                "date": "d.m.Y",
                "datetime": "d.m.Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Rens HTML",
                "expand": "Utvid editor",
                "reduce": "Slå sammen editor",
                "signature": "Legg til signatur",
                "unlink": "Fjern lenke",
                "unlinkmessage": "Endre valgte lenke til vanlig tekst."
            },
            "grid": {
                "disablemultiselection": "Slå av multivalg",
                "enamblemultiselection": "Slå på multivalg",
                "export": "Eksporter data",
                "filterremoved": "Gjeldende filter har blitt fjernet",
                "import": "Importer data",
                "itemnotfound": "Ingen elementer funnet",
                "list": "Liste",
                "opencontextualmenu": "Åpne kontekstmeny",
                "print": "Skriv ut",
                "printcsv": "Skriv ut som CSV",
                "printodt": "Skriv ut som ODT",
                "printpdf": "Skriv ut som PDF",
                "row": "Element",
                "rows": "Elementer",
                "subtype": "Subtype"
            },
            "tabs": {
                "activity": "Aktivitet",
                "attachment": "Vedlegg",
                "attachments": "Vedlegg",
                "card": "Kort",
                "clonerelationmode": "Klone relasjonsmodus",
                "details": "Detaljer",
                "emails": "E-post",
                "history": "Historikk",
                "notes": "Notater",
                "relations": "Relasjoner",
                "schedules": "Tidsplan"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Last ned diagram",
                "gridhide": "Skjul datagrid",
                "gridshow": "Vis datagrid",
                "openinpopup": "Åpne i forgrunnsvindu ",
                "parametershide": "Skjul dataparametre",
                "parametersshow": "Vis dataparametre",
                "reload": "Oppfrisk"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Legg til vedlegg fra dokumentarkiv",
            "alredyexistfile": "Det finnes allerede en fil med dette navnet",
            "archivingdate": "Arkiveringsdato",
            "attachfile": "Legg ved fil",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Skriv e-post",
            "composefromtemplate": "Lag fra mal",
            "delay": "Forsinkelse",
            "delays": {
                "day1": "Om 1 dag",
                "days2": "Om 2 dager",
                "days4": "Om 4 dager",
                "hour1": "1 time",
                "hours2": "2 timer",
                "hours4": "4 timer",
                "month1": "Om 1 måned",
                "negativeday1": "1 dag før",
                "negativedays2": "2 dager før",
                "negativedays4": "4 dager før",
                "negativehour1": "1 time før",
                "negativehours2": "2 timer før",
                "negativehours4": "4 timer før",
                "negativemonth1": "1 måned før",
                "negativeweek1": "1 uke før",
                "negativeweeks2": "2 uker før",
                "none": "Ingen",
                "week1": "Om 1 uke",
                "weeks2": "Om 2 uker"
            },
            "dmspaneltitle": "Velg vedlegg fra database",
            "edit": "Endre",
            "from": "Fra",
            "gridrefresh": "Gridoppdatering",
            "keepsynchronization": "Behold synkronisering",
            "message": "Melding",
            "regenerateallemails": "Regenerer alle e-poster",
            "regenerateemail": "Regenerer e-post",
            "remove": "Slett",
            "remove_confirmation": "Er du sikker på at du vil slette e-posten?",
            "reply": "Svar",
            "replyprefix": "Den {0} skrev {1}:",
            "selectaclass": "Velg en klasse",
            "sendemail": "Send e-post",
            "signature": "Signatur",
            "statuses": {
                "draft": "Kladd",
                "error": "Feil",
                "outgoing": "Utgående",
                "received": "Mottatt",
                "sent": "Sendt"
            },
            "subject": "Emne",
            "to": "Til",
            "view": "Vis"
        },
        "errors": {
            "autherror": "Feil brukernavn eller passord",
            "classnotfound": "Finner ikke klasse {0}",
            "fieldrequired": "Dette feltet er obligatorisk",
            "invalidfilter": "Ugyldig filter",
            "notfound": "Ingen elementer funnet"
        },
        "filters": {
            "actions": "Handlinger",
            "addfilter": "Legg til filter",
            "any": "Alle",
            "attachments": "Vedlegg",
            "attachmentssearchtext": "Vedlegg søketekst",
            "attribute": "Velg et atributt",
            "attributes": "Atributter",
            "clearfilter": "Fjern filter",
            "clone": "Klone",
            "copyof": "Kopi av",
            "currentgroup": "Gjeldende gruppe",
            "currentuser": "Gjeldende bruker",
            "defaultset": "Sett som standard",
            "defaultunset": "Fjern som standard",
            "description": "Beskrivelse",
            "domain": "Domene",
            "errorname": "Filternavn er allerede i bruk",
            "filterdata": "Filtrer data",
            "fromfilter": "Fra filter",
            "fromselection": "Fra seleksjon",
            "group": "Gruppe",
            "ignore": "Ignorer",
            "migrate": "Migrer",
            "name": "Navn",
            "newfilter": "Nytt filter",
            "noone": "Ingen",
            "operator": "Operatør",
            "operators": {
                "beginswith": "Starter med",
                "between": "Mellom",
                "contained": "Innenfor",
                "containedorequal": "Innenfor eller lik",
                "contains": "Inneholder",
                "containsorequal": "Inneholder eller lik",
                "descriptionbegin": "Beskrivelsen begynner med",
                "descriptioncontains": "Beskrivelsen inneholder",
                "descriptionends": "Beskrivelsen slutter med",
                "descriptionnotbegin": "Beskrivelsen begynner ikke med",
                "descriptionnotcontain": "Beskrivelsen inneholder ikke",
                "descriptionnotends": "Beskrivelsen slutter ikke med",
                "different": "Forskjellig fra",
                "doesnotbeginwith": "Starter ikke med",
                "doesnotcontain": "Inneholder ikke",
                "doesnotendwith": "Slutter ikke med",
                "endswith": "Slutter med",
                "equals": "Lik",
                "greaterthan": "Større enn",
                "isnotnull": "Er ikke null",
                "isnull": "Er null",
                "lessthan": "Mindre enn"
            },
            "relations": "Relasjoner",
            "type": "Type",
            "typeinput": "Inndataparameter",
            "user": "Bruker",
            "value": "Verdi"
        },
        "gis": {
            "card": "Kort",
            "cardsMenu": "Kortmeny",
            "code": "Kode",
            "description": "Beskrivelse",
            "extension": {
                "errorCall": "Feil",
                "noResults": "Ingen resultater"
            },
            "externalServices": "Eksterne tjenester",
            "geographicalAttributes": "Geo atributter",
            "geoserverLayers": "Geoserverlag",
            "layers": "Kartlag",
            "list": "Liste",
            "longpresstitle": "Geoelementer i området",
            "map": "Kart",
            "mapServices": "Karttjenester",
            "position": "Posisjon",
            "root": "Rot",
            "tree": "Tre",
            "type": "Type",
            "view": "Visning",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Aktivitetsnavn",
            "activityperformer": "Aktivitetsyter",
            "begindate": "Startdato",
            "enddate": "Sluttdato",
            "processstatus": "Status",
            "user": "Brukerkonto"
        },
        "importexport": {
            "database": {
                "uri": "Database URI",
                "user": "Databasebruker"
            },
            "downloadreport": "Last ned rapport",
            "emailfailure": "En feil oppsto ved sending av e-post!",
            "emailmessage": "Lagt ved importrapport av fil \"{0}\" i dato {1}",
            "emailsubject": "Import datarapport",
            "emailsuccess": "E-posten ble sendt!",
            "export": "Eksport",
            "exportalldata": "Alle data",
            "exportfiltereddata": "Bare data som matcher gridfiler",
            "gis": {
                "shapeimportdisabled": "Import av shapes er ikke slått på for denne malen",
                "shapeimportenabled": "Shapes importkonfigurasjon"
            },
            "ifc": {
                "card": "Kort",
                "project": "Prosjekt",
                "sourcetype": "Importer fra"
            },
            "import": "Import",
            "importresponse": "Importsvar",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Feil",
                "linenumber": "Linjenummer",
                "message": "Melding",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Prosesserte rader",
                "recordnumber": "Antall oppføringer",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Send rapport",
            "template": "Mal",
            "templatedefinition": "Maldefinisjon"
        },
        "joinviews": {
            "active": "Aktiv",
            "addview": "Legg til visning",
            "alias": "Alias",
            "attribute": "Atributt",
            "attributes": "Atributter",
            "attributesof": "Atributter av: {0}",
            "createview": "Lag visning",
            "datasorting": "Datasortering",
            "delete": "Slett",
            "deleteview": "Slett visning",
            "deleteviewconfirm": "Er du sikker på at du vil slette denne visningen?",
            "description": "Beskrivelse",
            "disable": "Slå av",
            "domainalias": "Domenealias",
            "domainsof": "Domener av {0}",
            "edit": "Endre",
            "editview": "Endre visningskonfigurasjon",
            "enable": "Slå på",
            "fieldsets": "Feltsett",
            "filters": "Filtre",
            "generalproperties": "Generelle egenskaper",
            "group": "Gruppe",
            "innerjoin": "Inner join",
            "jointype": "Join type",
            "joinview": "Vis fra join",
            "klass": "Klasse",
            "manageview": "Behandle visning",
            "masterclass": "Mesterklasse",
            "masterclassalias": "Mesterklassealias",
            "name": "Navn",
            "newjoinview": "Ny join visning",
            "outerjoin": "Outer join",
            "pleaseseleceavalidmasterclass": "Vennligst velg en gyldig mesterklasse",
            "refreshafteredit": "Ønsker du å oppdatere siden for se endringene?",
            "selectatleastoneattribute": "Vennligst velg minst ett atributt som skal visese i grid og redusert grid i trinn 4.",
            "showingrid": "Vis i grid",
            "showinreducedgrid": "Vis i redusert grid",
            "targetalias": "Alias for destinasjonsklasse"
        },
        "login": {
            "buttons": {
                "login": "Logg inn",
                "logout": "Bytt konto"
            },
            "fields": {
                "group": "Gruppe",
                "language": "Språk",
                "password": "Passord",
                "tenants": "Tenants",
                "username": "Brukernavn"
            },
            "loggedin": "Logget inn",
            "sso": {
                "loginfailure": "Innlogging feilet",
                "loginwith": "Logg inn med {0}",
                "or": "eller"
            },
            "title": "Logg inn",
            "welcome": "Velkommen tilbake {0}."
        },
        "main": {
            "administrationmodule": "Administrasjonsmodul",
            "baseconfiguration": "Basiskonfigurasjon",
            "cardlock": {
                "lockedmessage": "Du kan ikke endre dette kortet",
                "someone": "noen"
            },
            "changegroup": "Endre gruppe",
            "changetenant": "Endre {0}",
            "confirmchangegroup": "Vil du virkelig endre gruppen?",
            "confirmchangetenants": "Vil du virkelig endre aktiv tenant?",
            "confirmdisabletenant": "Vil du virkelig skru av «Ignorer tenants» statusflagget?",
            "confirmenabletenant": "Vil du virkelig skru på «Ignorer tenants» statusflagget?",
            "ignoretenants": "Ignorer {0}",
            "info": "Info",
            "logo": {
                "cmdbuild": "CMDBuild logo",
                "cmdbuildready2use": "CMDBuild READY2USE logo",
                "companylogo": "Bedriftslogo",
                "openmaint": "openMAINT logo"
            },
            "logout": "Logg ut",
            "managementmodule": "Datahåndteringsmodulen",
            "multigroup": "Multigruppe",
            "multitenant": "Multi {0}",
            "navigation": "Navigasjon",
            "pagenotfound": "Side ikke funnet",
            "password": {
                "change": "Endre passord",
                "confirm": "Gjenta passord",
                "email": "E-postadresse",
                "err_confirm": "Passordene er ikke like.",
                "err_diffprevious": "Passordet kan ikke være likt forrige passord.",
                "err_diffusername": "Passordet kan ikke være identisk med brukernavn.",
                "err_length": "Passordet må være minst {0} tegn langt.",
                "err_reqdigit": "Passordet må inneholde minst ett tall.",
                "err_reqlowercase": "Passordet må inneholde minst én liten bokstav.",
                "err_requppercase": "Passordet må inneholde minst én stor bokstav.",
                "expired": "Passordet har utløpt. Endre det nå.",
                "forgotten": "Jeg har glemt passordet mitt",
                "new": "Nytt passord",
                "old": "Gammel passord",
                "recoverysuccess": "Vi har sendt deg en e-post med instruksjoner for hvordan du endrer passordet ditt.",
                "reset": "Sett nytt passord",
                "saved": "Passordet har blitt lagret!"
            },
            "pleasecorrecterrors": "Vennligs rett merkede feil!",
            "preferences": {
                "comma": "Komma",
                "decimalserror": "Desimalskille må være tilstede",
                "decimalstousandserror": "Desimalskille og tusenskille må være forskjellig",
                "default": "Standard",
                "defaultvalue": "Standardverdi",
                "firstdayofweek": "Første dag i uken",
                "gridpreferencesclear": "Tøm grid-alternativer",
                "gridpreferencescleared": "Grid-alternativer tømt!",
                "gridpreferencessave": "Lagre grid-alternativer",
                "gridpreferencessaved": "Grid-alternativer lagret",
                "gridpreferencesupdate": "Oppdater grid-alternativer",
                "labelcsvseparator": "CSV separator",
                "labeldateformat": "Datoformat",
                "labeldecimalsseparator": "Desimalskille",
                "labellanguage": "Språk",
                "labelthousandsseparator": "Tusenskille",
                "labeltimeformat": "Tidsformat",
                "msoffice": "Microsoft Office",
                "period": "Punktum",
                "preferredfilecharset": "CSV encoding",
                "preferredofficesuite": "Foretrukket Office programpakke",
                "space": "Mellomrom",
                "thousandserror": "Tusenskille må være tilstede",
                "timezone": "Tidssone",
                "twelvehourformat": "12-timers format",
                "twentyfourhourformat": "24-timers format"
            },
            "searchinallitems": "Søk i alle elementer",
            "selectdeselettenants": "Marker/Fjern markering",
            "treenavcontenttitle": "{0} av {1}",
            "userpreferences": "Innstillinger"
        },
        "menu": {
            "allitems": "Alle elementer",
            "classes": "Klasser",
            "custompages": "Tilpassede sider",
            "dashboards": "Dashboards",
            "processes": "Prosesser",
            "reports": "Rapporter",
            "views": "Visninger"
        },
        "notes": {
            "edit": "Endre notater"
        },
        "notifier": {
            "attention": "Attensjon",
            "error": "Feil",
            "genericerror": "Generisk feil",
            "genericinfo": "Generisk info",
            "genericwarning": "Generisk advarsel",
            "info": "Info",
            "success": "Suksess",
            "warning": "Advarsel"
        },
        "patches": {
            "apply": "Legg inn oppdateringer",
            "category": "Kategori",
            "description": "Beskrivelse",
            "name": "Navn",
            "patches": "Oppdateringer"
        },
        "processes": {
            "abortconfirmation": "Er du sikker på at du vil abryte prosessen?",
            "abortprocess": "Avbryt prosess",
            "action": {
                "advance": "Avensert",
                "label": "Handling"
            },
            "activeprocesses": "Aktive prosesser",
            "allstatuses": "Alle",
            "editactivity": "Endre aktivitet",
            "openactivity": "Åpne aktivitet",
            "startworkflow": "Start",
            "workflow": "Arbeidsflyt"
        },
        "relationGraph": {
            "activity": "Aktivitet",
            "allLabelsOnGraph": "Alle merkelapper på graf",
            "card": "Kort",
            "cardList": "Kortliste",
            "cardRelations": "Kortrelasjoner",
            "choosenaviagationtree": "Velg navigasjonstre",
            "class": "Klasse",
            "classList": "Klasseliste",
            "compoundnode": "Sammensatt node",
            "disable": "Slå av",
            "edges": "Kanter",
            "enable": "Slå på",
            "labelsOnGraph": "Infoboble på graf",
            "level": "Nivå",
            "nodes": "Noder",
            "openRelationGraph": "Åpne relasjonsgraf",
            "qt": "Qt",
            "refresh": "Oppfrisk",
            "relation": "relasjon",
            "relationGraph": "Relasjonsgraf",
            "reopengraph": "Gjenåpne grafen fra denne noden"
        },
        "relations": {
            "adddetail": "Legg til detaljer",
            "addrelations": "Legg til relasjoner",
            "attributes": "Atributter",
            "begindate": "Startdato",
            "code": "Kode",
            "deletedetail": "Slett detaljer",
            "deleterelation": "Slett relasjoner",
            "deleterelationconfirm": "Er du sikker på at du vil slette disse relasjonene?",
            "description": "Beskrivelse",
            "editcard": "Endre kort",
            "editdetail": "Endre detaljer",
            "editrelation": "Endre relasjoner",
            "extendeddata": "Utvidede data",
            "mditems": "Elementer",
            "missingattributes": "Manglende obligatorisk atributt",
            "opencard": "Åpne relatert kort",
            "opendetail": "Vis detaljer",
            "type": "Type"
        },
        "reports": {
            "csv": "CSV",
            "download": "Last ned",
            "format": "Format",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Skriv ut",
            "reload": "Oppfrisk",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Standard"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Daglig"
                        },
                        "monthly": {
                            "description": "Månedlig"
                        },
                        "once": {
                            "description": "En gang"
                        },
                        "weekly": {
                            "description": "Ukentlig"
                        },
                        "yearly": {
                            "description": "Årlig"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Standard"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Legg tematikk",
            "analysisType": "Analysetype",
            "attribute": "Atributt",
            "calculateRules": "Generer stilregler",
            "clearThematism": "Tøm tematikk",
            "color": "Farge",
            "defineLegend": "Forklaringsdefinisjon",
            "defineThematism": "Tematikkdefinisjon",
            "function": "Funksjon",
            "generate": "Generer",
            "geoAttribute": "Geo atributt",
            "graduated": "Graduated",
            "highlightSelected": "Marker valgte element",
            "intervals": "Intervaller",
            "legend": "Forklaring",
            "name": "navn",
            "newThematism": "Ny tematikk",
            "punctual": "Punctual",
            "quantity": "Mengde",
            "segments": "Segmenter",
            "source": "Kilde",
            "table": "Tabell",
            "thematism": "Tematikk",
            "value": "Verdi"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Avslutt uten å lagre",
                    "stayinedit": "Tilbake til redigering"
                },
                "savebeforeexit": "<em>There are unsaved changes in the attachments. Do you want to save them before you exit?</em>",
                "saveprocessmessage": "<em>Attachments can only be saved in existing cards. Pressing on save, the process instance will be created with the data entered in the form.</em>"
            },
            "customform": {
                "addrow": "Legg til rad",
                "clonerow": "Klone rad",
                "datanotvalid": "Data ikke gyldig",
                "deleterow": "Slett rad",
                "editrow": "Endre rad",
                "export": "Eksport",
                "import": "Import",
                "importexport": {
                    "expattributes": "Data å eksportere",
                    "file": "Fil",
                    "filename": "Filnavn",
                    "format": "Format",
                    "importmode": "Importmodus",
                    "keyattributes": "Nøkkelatributter",
                    "missingkeyattr": "Vennligst velg minst ett atributt",
                    "modeadd": "Legg til",
                    "modemerge": "Slå sammen",
                    "modereplace": "Erstatt",
                    "separator": "Separator"
                },
                "refresh": "Oppfrisk til standard"
            },
            "linkcards": {
                "checkedonly": "Kun avhuket",
                "editcard": "Endre kort",
                "opencard": "Åpne kort",
                "refreshselection": "Bruk standard seleksjon",
                "togglefilterdisabled": "Slå på gridfilter",
                "togglefilterenabled": "Slå av gridfilter"
            },
            "required": "Denne widgeten er påkrevet."
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
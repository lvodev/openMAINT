(function() {
    Ext.define('CMDBuildUI.locales.nl.Locales', {
        "requires": ["CMDBuildUI.locales.nl.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "nl",
        "administration": CMDBuildUI.locales.nl.LocalesAdministration.administration,
        "attachments": {
            "add": "Bijlage toevoegen",
            "attachmenthistory": "Bijlage geschiedenis",
            "author": "Schrijver",
            "browse": "Bladeren &hellip;",
            "category": "Categorie",
            "code": "Code",
            "creationdate": "Aanmaak datum",
            "deleteattachment": "Verwijder bijlage",
            "deleteattachment_confirmation": "Weet  u zeker dat u deze bijlage wilt verwijderen?",
            "description": "Omschrijving",
            "download": "Ophalen",
            "dropfiles": "Zet bestanden hier neer",
            "editattachment": "Modificeer bijlage",
            "file": "Bestand",
            "filealreadyinlist": "Het bestand {0} bestaat al.",
            "filename": "Bestandsnaam",
            "fileview": "Bekijk bijlage",
            "invalidfiles": "Verwijder ongeldige bestanden",
            "majorversion": "Hoofd versie",
            "maxsize": "De maximum toegestane bestand grootte is {0} MB.",
            "metadata": "Extra gegevens",
            "modificationdate": "Modificatie datum",
            "new": "Nieuwe bijlage",
            "nocategory": "Niet gecategoriseerd",
            "preview": "Voorbeeld",
            "removefile": "Verwijder bestand",
            "statuses": {
                "empty": "Leeg bestand",
                "error": "Fout",
                "extensionNotAllowed": "Bestandsextensie niet toegestaan",
                "loaded": "Geladen",
                "ready": "Klaar",
                "toolarge": "Te groot"
            },
            "successupload": "{0} bijlagen geupload",
            "uploadfile": "Ophalen bestand…",
            "version": "Versie",
            "viewhistory": "Toon bijlage geschiedenis",
            "warningmessages": {
                "atleast": "Waarschuwing: geladen {0} bijlagen van type \"{1}\". Deze categorie verwacht minimaal {2} bijlagen ",
                "exactlynumber": "Waarschuwing: geladen {0} bijlagen van type \"{1}\". Deze categorie verwacht {2} bijlagen ",
                "maxnumber": "Waarschuwing: geladen {0} bijlagen van type \"{1}\". Deze categorie verwacht maximaal {2} bijlagen "
            },
            "wrongfileextension": "{0} bestandsextensie is niet toegestaan"
        },
        "bim": {
            "bimViewer": "Bim afbeeldingsweergave",
            "card": {
                "label": "Kaart"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Begrenzende box afmeting langs X-as",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Begrenzende box afmeting langs Y-as",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Begrenzende box afmeting langs Z-as",
                "LARGEST_FACE_AREA": "Grootste gezichtsgebied",
                "LARGEST_FACE_DIRECTION": "Grootste zicht richting",
                "SURFACE_AREA_ALONG_X": "Oppervlakte gebied langs X-as",
                "SURFACE_AREA_ALONG_Y": "Oppervlakte gebied langs Y-as",
                "SURFACE_AREA_ALONG_Z": "Oppervlakte gebied langs Z-as",
                "TOTAL_SHAPE_VOLUME": "Totale vorm volume",
                "TOTAL_SURFACE_AREA": "Totale oppervlakte",
                "WALKABLE_SURFACE_AREA": "Beloopbaar oppervlakte gebied",
                "calculated": "Berekend",
                "description": "Omschrijving",
                "guid": "GUID",
                "label": "Eigenschappen",
                "name": "Naam",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Lagen",
                "menu": {
                    "hideAll": "Verberg alles",
                    "showAll": "Toon alles"
                },
                "name": "Naam",
                "qt": "Qt",
                "visibility": "Zichtbaarheid"
            },
            "menu": {
                "camera": "Camera",
                "frontView": "Vooraanzicht",
                "mod": "Afbeeldingsweergave instellingen",
                "orthographic": "Orthografische camera",
                "pan": "Schuiven",
                "perspective": "Perspectief camera",
                "resetView": "Reset weergave",
                "rotate": "Draaien",
                "sideView": "Zijaanzicht",
                "topView": "Bovenaanzicht"
            },
            "showBimCard": "Open 3D afbeeldingsweergave",
            "tree": {
                "arrowTooltip": "Selecteer element",
                "columnLabel": "Boom",
                "label": "Boom",
                "open_card": "Open gerelateerde kaart",
                "root": "Ifc Root"
            }
        },
        "bulkactions": {
            "abort": "Afbreken geselecteerde items",
            "alertdownloadattachments": "Sommige bijlage kunnen niet worden opgehaald omdat ze nog niet zijn opgeslagen op de server",
            "alertnoattachmentsdownload": "Geen enkele bijlage wordt opgehaald omdat ze nog niet zijn opgeslagen op de server",
            "cancelselection": "Afbreken selectie",
            "confirmabort": "U stopt {0} proces instanties. Wilt u dat echt?",
            "confirmdelete": "U verwijdert {0} kaarten. Wilt u dat echt?",
            "confirmdeleteattachements": "U verwijdert {0} bijlagen. Wilt u dat echt?",
            "confirmedit": "U wijzigt {0} van {1} kaarten. Wilt u dat echt?",
            "delete": "Verwijder geselecteerde items",
            "download": "Download geselecteerde bijlagen",
            "downloadall": "Haal alle bijlage op",
            "edit": "Wijzig geselecteerde items",
            "selectall": "Selecteer alle items"
        },
        "calendar": {
            "active_expired": "Actief/Verlopen",
            "add": "Toevoegen schema",
            "advancenotification": "Aantal dagen vooraf notificatie",
            "allcategories": "Alle categorieën\n",
            "alldates": "Alle data",
            "associatedcard": "Geassocieerde kaart",
            "calculated": "Berekend",
            "calendar": "Kalender",
            "cancel": "Markeer als afgebroken",
            "category": "Categorie",
            "class": "Klas",
            "cm_confirmcancel": "Weet u zeker dat u het geselecteerde schema als afgebroken wilt markeren?",
            "cm_confirmcomplete": "Weet u zeker dat u het geselecteerde schema als voltooid wilt markeren?",
            "cm_markcancelled": "Markeer geselecteerd schema als afgebroken",
            "cm_markcomplete": "Markeer geselecteerd schema als voltooid",
            "complete": "Markeer als gedaan",
            "completed": "Voltooid",
            "date": "Datum",
            "days": "Dagen",
            "delaybeforedeadline": "Uitstel voor deadline",
            "delaybeforedeadlinevalue": "Uitstel voor deadline waarde",
            "description": "Omschrijving",
            "editevent": "Wijzig schema",
            "enddate": "Einddatum",
            "endtype": "Eindtype",
            "event": "Schema",
            "executiondate": "Uitvoeringsdatum",
            "frequency": "Frequentie",
            "frequencymultiplier": "Frequentie vermenigvuldiger",
            "grid": "Rooster",
            "leftdays": "Dagen te gaan",
            "londdescription": "Uitgebreide omschrijving",
            "manual": "Handmatig",
            "maxactiveevents": "Max actieve schema’s",
            "messagebodydelete": "Wilt u de schemaregel verwijderen?",
            "messagebodyplural": "Er zijn {0} schemaregels",
            "messagebodyrecalculate": "Wilt u de schemaregel herberekenen met de nieuwe datum?",
            "messagebodysingular": "Er is {0} schemaregel",
            "messagetitle": "Schema herberekening",
            "missingdays": "Ontbrekende dagen",
            "next30days": "Volgende 30 dagen",
            "next7days": "Volgende 7 dagen",
            "notificationtemplate": "Sjabloon voor notificatie",
            "notificationtext": "Notificatietekst",
            "occurencies": "Aantal gebeurtenissen",
            "operation": "Operatie",
            "partecipantgroup": "Participant groep",
            "partecipantuser": "Participant gebruiker",
            "priority": "Prioriteit",
            "recalculate": "Herberekenen",
            "referent": "Referent",
            "scheduler": "Planner",
            "sequencepaneltitle": "Genereer schema",
            "startdate": "Startdatum",
            "status": "Status",
            "today": "Vandaag",
            "type": "Type",
            "viewevent": "Toon schema",
            "widgetcriterion": "Berekeningscriterium",
            "widgetemails": "Emails",
            "widgetsourcecard": "Bronkaart"
        },
        "classes": {
            "cards": {
                "addcard": "Kaart toevoegen",
                "clone": "Dupliceer",
                "clonewithrelations": "Dupliceer kaart en relaties",
                "deletebeaware": "Let op dat:",
                "deleteblocked": "Het is niet mogelijk verder te gaan met de verwijdering omdat er relaties zijn met {0}.",
                "deletecard": "Verwijder kaart",
                "deleteconfirmation": "Weet u zeker dat u deze kaart wilt verwijderen?",
                "deleterelatedcards": "ook {0} gerelateerde kaarten zullen verwijderd worden",
                "deleterelations": "relaties met {0} kaarten zullen verwijderd worden",
                "label": "Kaarten",
                "modifycard": "Kaart aanpassen",
                "opencard": "Kaart openen",
                "print": "Kaart afdrukken"
            },
            "simple": "Eenvoudig",
            "standard": "Standaard"
        },
        "common": {
            "actions": {
                "add": "Toevoegen",
                "apply": "Toepassen",
                "cancel": "Annuleren",
                "close": "Sluiten",
                "delete": "Verwijderen",
                "edit": "Modificeer",
                "execute": "Uitvoeren",
                "help": "Help",
                "load": "Laad",
                "open": "Open",
                "refresh": "Ververs gegevens",
                "remove": "Verwijderen",
                "save": "Opslaan",
                "saveandapply": "Opslaan en toepassen",
                "saveandclose": "Opslaan en sluiten",
                "search": "Zoeken",
                "searchtext": "Zoeken…"
            },
            "attributes": {
                "nogroup": "Basis gegevens"
            },
            "dates": {
                "date": "d/m/j",
                "datetime": "d/m/j h:m:s",
                "time": "h:m:s"
            },
            "editor": {
                "clearhtml": "Verwijder HTML",
                "expand": "Expandeer editor",
                "reduce": "Verklein editor",
                "signature": "Handtekening toevoegen",
                "unlink": "Loskoppelen",
                "unlinkmessage": "Zet de geselecteerde hyperlink om in tekst."
            },
            "grid": {
                "disablemultiselection": "Blokkeer meerdere selecties",
                "enamblemultiselection": "Toestaan meerdere selecties",
                "export": "Exporteer gegevens",
                "filterremoved": "Het huidige filter is verwijderd",
                "import": "Importeer gegevens",
                "itemnotfound": "Item niet gevonden",
                "list": "Lijst",
                "opencontextualmenu": "Open context menu",
                "print": "Afdrukken",
                "printcsv": "Afdrukken als CSV",
                "printodt": "Afdrukken als ODT",
                "printpdf": "Afdrukken als PDF",
                "row": "Onderdeel",
                "rows": "Onderdelen",
                "subtype": "Onderliggend Type"
            },
            "tabs": {
                "activity": "Activiteit",
                "attachment": "Bijlage",
                "attachments": "Bijlagen",
                "card": "Kaart",
                "clonerelationmode": "Kloon Relaties Mode",
                "details": "Details",
                "emails": "Emails",
                "history": "Geschiedenis",
                "notes": "Notities",
                "relations": "Relaties",
                "schedules": "Planningen"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Haal kaart op",
                "gridhide": "Verberg data raster",
                "gridshow": "Toon data raster",
                "openinpopup": "Open in pop-up",
                "parametershide": "Verberg data parameters",
                "parametersshow": "Toon data parameters",
                "reload": "Herladen"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Voeg een bijlage toe uit het documentarchief",
            "alredyexistfile": "Er bestaat al een bestand met deze naam",
            "archivingdate": "Archiveringsdatum",
            "attachfile": "Bestand toevoegen",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Samenstellen email",
            "composefromtemplate": "Samenstellen vanaf sjabloon",
            "delay": "Vertraging",
            "delays": {
                "day1": "In 1 dag",
                "days2": "In 2 dagen",
                "days4": "In 4 dagen",
                "hour1": "1 uur",
                "hours2": "2 uren",
                "hours4": "4 uren",
                "month1": "In 1 maand",
                "negativeday1": "1 dag eerder",
                "negativedays2": "2 dagen eerder",
                "negativedays4": "4 dagen eerder",
                "negativehour1": "1 uur eerder",
                "negativehours2": "2 uur eerder",
                "negativehours4": "4 uur eerder",
                "negativemonth1": "1 maand eerder",
                "negativeweek1": "1 week eerder",
                "negativeweeks2": "2 weken eerder",
                "none": "Geen",
                "week1": "In 1 week",
                "weeks2": "In 2 weken"
            },
            "dmspaneltitle": "Kies bijlages uit database",
            "edit": "Modificeer",
            "from": "Van",
            "gridrefresh": "Raster verversen",
            "keepsynchronization": "Behoud synchronisatie",
            "message": "Bericht",
            "regenerateallemails": "Regenereer alle e-mails",
            "regenerateemail": "Regenereer e-mails",
            "remove": "Verwijderen",
            "remove_confirmation": "Weet u zeker dat u deze email wilt verwijderen?",
            "reply": "Reactie",
            "replyprefix": "On {0}, {1} schreef:",
            "selectaclass": "Selecteer een klasse",
            "sendemail": "Zend e-mail",
            "signature": "Handtekening",
            "statuses": {
                "draft": "Klad",
                "error": "Fout",
                "outgoing": "Uitgaand",
                "received": "Ontvangen",
                "sent": "verstuurd"
            },
            "subject": "Onderwerp",
            "to": "Aan",
            "view": "Zicht"
        },
        "errors": {
            "autherror": "Verkeerde gebruikersnaam of wachtwoord",
            "classnotfound": "Klas {0} niet gevonden",
            "fieldrequired": "Dit veld is vereist",
            "invalidfilter": "Ongeldig filter",
            "notfound": "Item niet gevonden"
        },
        "filters": {
            "actions": "Acties",
            "addfilter": "Filter toevoegen",
            "any": "Alle",
            "attachments": "Bijlage",
            "attachmentssearchtext": "Bijlage zoek tekst",
            "attribute": "Kies een attribuut",
            "attributes": "Attributen",
            "clearfilter": "Leegmaken filter",
            "clone": "Dupliceer",
            "copyof": "Kopie van",
            "currentgroup": "Huidige groep",
            "currentuser": "Huidige gebruiker",
            "defaultset": "Instellen als standaard",
            "defaultunset": "De-selecteren als standaard",
            "description": "Omschrijving",
            "domain": "Domein",
            "errorname": "Filternaam bestaat al",
            "filterdata": "Filter gegevens",
            "fromfilter": "Van filter",
            "fromselection": "Van Selectie",
            "group": "Groep",
            "ignore": "Negeer",
            "migrate": "Migreren",
            "name": "Naam",
            "newfilter": "Nieuw filter",
            "noone": "Geen enkele",
            "operator": "Bewerking",
            "operators": {
                "beginswith": "Begin met",
                "between": "Tussen",
                "contained": "Bevat",
                "containedorequal": "Bevat of is gelijk aan",
                "contains": "Bevat",
                "containsorequal": "Bevat of is gelijk aan",
                "descriptionbegin": "Omschrijving begint met",
                "descriptioncontains": "Omschrijving bevat",
                "descriptionends": "Omschrijving eindigt met",
                "descriptionnotbegin": "Omschrijving begint niet met",
                "descriptionnotcontain": "Omschrijving bevat niet",
                "descriptionnotends": "Omschrijving eindigt niet met",
                "different": "Verschillend",
                "doesnotbeginwith": "Begint niet met",
                "doesnotcontain": "Bevat geen",
                "doesnotendwith": "Eindigt niet op",
                "endswith": "Eindigt op",
                "equals": "Gelijk",
                "greaterthan": "Groter dan",
                "isnotnull": "Is niet leeg",
                "isnull": "Is leeg",
                "lessthan": "Kleiner dan"
            },
            "relations": "Relaties",
            "type": "Soort",
            "typeinput": "Input Parameter",
            "user": "Gebruiker",
            "value": "Waarde"
        },
        "gis": {
            "card": "Kaart",
            "cardsMenu": "Kaartenmenu",
            "code": "Code",
            "description": "Omschrijving",
            "extension": {
                "errorCall": "Fout",
                "noResults": "Geen resultaat"
            },
            "externalServices": "Externe Services",
            "geographicalAttributes": "Geografische attributen",
            "geoserverLayers": "Geoserver lagen",
            "layers": "Lagen",
            "list": "Lijst",
            "longpresstitle": "Geo-elementen in het gebied",
            "map": "Kaart",
            "mapServices": "Kaart services",
            "position": "Positie",
            "root": "Begin",
            "tree": "Navigatie boomstructuur",
            "type": "Type",
            "view": "Zicht",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Activiteit naam",
            "activityperformer": "Activiteit uitvoerder",
            "begindate": "Begin datum",
            "enddate": "Eind datum",
            "processstatus": "Status",
            "user": "Gebruiker"
        },
        "importexport": {
            "database": {
                "uri": "Database URI",
                "user": "Database gebruiker"
            },
            "downloadreport": "Download rapport",
            "emailfailure": "Fout opgetreden tijdens verzenden email",
            "emailmessage": "Bijgevoegd importrapport van bestand \"{0}\" op datum {1}",
            "emailsubject": "Importeer data rapport",
            "emailsuccess": "De email is met succes verzonden!",
            "export": "Exporteer",
            "exportalldata": "Alle gegevens",
            "exportfiltereddata": "Alleen gegevens die matchen met het raster filter",
            "gis": {
                "shapeimportdisabled": "Het importeren van vormen is niet ingesteld voor dit sjabloon",
                "shapeimportenabled": "Vorm import configuratie"
            },
            "ifc": {
                "card": "Kaart",
                "project": "Project",
                "sourcetype": "Import van"
            },
            "import": "Importeer",
            "importresponse": "Importeer response",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Fouten",
                "linenumber": "Regelnummer",
                "message": "Melding",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Verwerkte rijen",
                "recordnumber": "Recordnummer",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Verzend rapport",
            "template": "Sjabloon",
            "templatedefinition": "Sjabloon definitie"
        },
        "joinviews": {
            "active": "Actief",
            "addview": "Weergave toevoegen",
            "alias": "Alias",
            "attribute": "Attribuut",
            "attributes": "Attributen",
            "attributesof": "Attributen van: {0}",
            "createview": "Maak weergave",
            "datasorting": "Data sorteringen",
            "delete": "Verwijder",
            "deleteview": "Verwijder weergave",
            "deleteviewconfirm": "Weet u zeker dat u deze weergave wilt verwijderen?",
            "description": "Omschrijving",
            "disable": "Blokkeer",
            "domainalias": "Domein alias",
            "domainsof": "Domeinen van {0}",
            "edit": "Bewerk",
            "editview": "Bewerk weergave configuratie",
            "enable": "Toestaan",
            "fieldsets": "Veldsets",
            "filters": "Filters",
            "generalproperties": "Algemene eigenschappen",
            "group": "Groep",
            "innerjoin": "interne samenvoeging",
            "jointype": "samenvoegingstype",
            "joinview": "Weergave van samenvoeging",
            "klass": "Klas",
            "manageview": "Beheer weergave",
            "masterclass": "Hoofd klas",
            "masterclassalias": "Hoofd klas alias",
            "name": "Naam",
            "newjoinview": "Nieuwe weergave van samenvoeging",
            "outerjoin": "Externe samenvoeging",
            "pleaseseleceavalidmasterclass": "Selecteer AUB een geldige hoofd klas",
            "refreshafteredit": "Wilt u de bladzijde verversen om de wijzigingen te zien?",
            "selectatleastoneattribute": "Selecteer AUB minstens één attribuut om weer te geven in raster en gereduceerd raster bij stap 4",
            "showingrid": "Weergeven in raster",
            "showinreducedgrid": "Weergeven in gereduceerd raster",
            "targetalias": "Doel klas alias"
        },
        "login": {
            "buttons": {
                "login": "Login",
                "logout": "Modificeer gebruiker"
            },
            "fields": {
                "group": "Groep",
                "language": "Taal",
                "password": "Wachtwoord",
                "tenants": "Leden",
                "username": "Gebruikersnaam"
            },
            "loggedin": "Aangemeld",
            "sso": {
                "loginfailure": "Inlog fout",
                "loginwith": "Inloggen met {0}",
                "or": "of"
            },
            "title": "Login",
            "welcome": "Welkom terug {0}."
        },
        "main": {
            "administrationmodule": "Administratie module",
            "baseconfiguration": "Basis configuratie",
            "cardlock": {
                "lockedmessage": "U kunt deze kaart niet aanpassen omdat {0} deze aan het aanpassen is",
                "someone": "iemand"
            },
            "changegroup": "Wijzig groep",
            "changetenant": "Wijzig {0}",
            "confirmchangegroup": "Weet u zeker dat de groep gewijzigd moet worden",
            "confirmchangetenants": "Weet u zeker dat de actieve leden gewijzigd moeten worden",
            "confirmdisabletenant": "Weet u zeker dat de “negeer leden” vlag uitgezet moet worden",
            "confirmenabletenant": "Weet u zeker dat de “negeer leden” vlag aangezet moet worden",
            "ignoretenants": "Negeer {0}",
            "info": "Info",
            "logo": {
                "cmdbuild": "CMDBuild logo",
                "cmdbuildready2use": "CMDBuild READY2USE logo",
                "companylogo": "Bedrijfslogo",
                "openmaint": "openMAINT logo"
            },
            "logout": "Uitloggen",
            "managementmodule": "Gegevens beheer module",
            "multigroup": "Meervoudige groep",
            "multitenant": "Multi {0}",
            "navigation": "Navigatie",
            "pagenotfound": "Pagina niet gevonden",
            "password": {
                "change": "Wachtwoord veranderen",
                "confirm": "Bevestig wachtwoord",
                "email": "Email adres",
                "err_confirm": "Wachtwoord komt niet overeen.",
                "err_diffprevious": "Het wachtwoord kan niet overeenkomen met het vorige.",
                "err_diffusername": "Het wachtwoord kan niet gelijk zijn aan de gebruikersnaam.",
                "err_length": "Het wachtwoord moet minimaal {0} karakters lang zijn.",
                "err_reqdigit": "Het wachtwoord dient minimaal een cijfer te bevatten",
                "err_reqlowercase": "Het wachtwoord dient minimaal een kleine letter te bevatten.",
                "err_requppercase": "Het wachtwoord dient minimaal een hoofdletter te bevatten.",
                "expired": "Uw wachtwoord is verlopen. U moet het nu wijzigen.",
                "forgotten": "Ik ben mijn wachtwoord vergeten",
                "new": "Nieuw wachtwoord",
                "old": "Oud wachtwoord",
                "recoverysuccess": "We hebben u een email gestuurd met instructies voor het instellen van uw wachtwoord.",
                "reset": "Reset wachtwoord",
                "saved": "Wachtwoord correct opgeslagen!"
            },
            "pleasecorrecterrors": "Wijzig aub de aangegeven fouten!",
            "preferences": {
                "comma": "Komma",
                "decimalserror": "Decimaal veld moet aanwezig zijn",
                "decimalstousandserror": "Decimaal en Duizendtal scheidingsteken moeten verschillen",
                "default": "Standaard",
                "defaultvalue": "Standaard waarde",
                "firstdayofweek": "Eerste dag van de week",
                "gridpreferencesclear": "Wis rastervoorkeuren",
                "gridpreferencescleared": "Rastervoorkeuren gewist!",
                "gridpreferencessave": "Opslaan rastervoorkeuren",
                "gridpreferencessaved": "Rastervoorkeuren opgeslagen",
                "gridpreferencesupdate": "Wijzig rastervoorkeuren",
                "labelcsvseparator": "CSV scheidingsteken",
                "labeldateformat": "Datum formaat",
                "labeldecimalsseparator": "Decimaal scheidingsteken",
                "labellanguage": "Taal",
                "labelthousandsseparator": "Duizendtal scheidingsteken",
                "labeltimeformat": "Tijd formaat",
                "msoffice": "Microsoft Office",
                "period": "Punt",
                "preferredfilecharset": "CSV codering",
                "preferredofficesuite": "Voorkeurs Office-suite",
                "space": "Spatie",
                "thousandserror": "Duizendtal veld moet aanwezig zijn",
                "timezone": "Tijdzone",
                "twelvehourformat": "12-uurs formaat",
                "twentyfourhourformat": "24-uurs formaat"
            },
            "searchinallitems": "Zoek in alle onderdelen",
            "selectdeselettenants": "Selecteer / deselecteer alles",
            "treenavcontenttitle": "{0} van {1}",
            "userpreferences": "Voorkeuren"
        },
        "menu": {
            "allitems": "Alle onderdelen",
            "classes": "Klassen",
            "custompages": "Gebruikers bladzijden",
            "dashboards": "Instrumenten paneel",
            "processes": "Processen",
            "reports": "Rapporten",
            "views": "Vensters"
        },
        "notes": {
            "edit": "Notitie aanpassen"
        },
        "notifier": {
            "attention": "Attentie",
            "error": "Fout",
            "genericerror": "Algemene fout",
            "genericinfo": "Algemene informatie",
            "genericwarning": "Algemene waarschuwing",
            "info": "Info",
            "success": "Succes",
            "warning": "Waarschuwing"
        },
        "patches": {
            "apply": "Patches toepassen",
            "category": "Categorie",
            "description": "Omschrijving",
            "name": "Naam",
            "patches": "Patches"
        },
        "processes": {
            "abortconfirmation": "Weet je zeker dat je dit proces wilt afbreken?",
            "abortprocess": "Proces afbreken",
            "action": {
                "advance": "Doorschuiven",
                "label": "Actie"
            },
            "activeprocesses": "Actieve processen",
            "allstatuses": "Alles",
            "editactivity": "Activiteit aanpassen",
            "openactivity": "Activiteit openen",
            "startworkflow": "Start",
            "workflow": "Procesgang"
        },
        "relationGraph": {
            "activity": "activiteit",
            "allLabelsOnGraph": "alle labels op grafiek",
            "card": "Kaart",
            "cardList": "Kaart lijst",
            "cardRelations": "Relatie",
            "choosenaviagationtree": "Kies navigatie boom",
            "class": "Klas",
            "classList": "Klassen lijst",
            "compoundnode": "Samengesteld knooppunt",
            "disable": "Uitschakelen",
            "edges": "Randen",
            "enable": "Inschakelen",
            "labelsOnGraph": "Tooltip op grafiek",
            "level": "Niveau",
            "nodes": "Knooppunten",
            "openRelationGraph": "Open relatie grafiek",
            "qt": "Qt",
            "refresh": "Ververs",
            "relation": "Relatie",
            "relationGraph": "Relatie grafiek",
            "reopengraph": "Heropen de grafiek van dit knooppunt"
        },
        "relations": {
            "adddetail": "Detail toevoegen",
            "addrelations": "Relaties toevoegen",
            "attributes": "Attributen",
            "begindate": "Begin datum",
            "code": "Code",
            "deletedetail": "Detail verwijderen",
            "deleterelation": "Verwijder relatie",
            "deleterelationconfirm": "Weet u zeker dat u deze relatie wilt verwijderen?",
            "description": "Omschrijving",
            "editcard": "Kaart aanpassen",
            "editdetail": "Detail aanpassen",
            "editrelation": "Aanpassen relatie",
            "extendeddata": "Uitgebreide gegevens",
            "mditems": "onderdelen",
            "missingattributes": "Ontbrekende verplichtte attributen",
            "opencard": "Open gerelateerde kaart",
            "opendetail": "Toon detail",
            "type": "Soort"
        },
        "reports": {
            "csv": "CSV",
            "download": "Ophalen",
            "format": "Formaat",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Afdrukken",
            "reload": "Herladen",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Standaard"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Dagelijks"
                        },
                        "monthly": {
                            "description": "Maandelijks"
                        },
                        "once": {
                            "description": "Eenmalig"
                        },
                        "weekly": {
                            "description": "Wekelijks"
                        },
                        "yearly": {
                            "description": "Jaarlijks"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Standaard"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Voeg thematisme toe",
            "analysisType": "Analyse-type",
            "attribute": "Attribuut",
            "calculateRules": "Genereer stijlregels",
            "clearThematism": "Wis thematisme",
            "color": "Kleur",
            "defineLegend": "Legenda definitie",
            "defineThematism": "Thematisme definitie",
            "function": "Functie",
            "generate": "Genereer",
            "geoAttribute": "Geografisch attribuut",
            "graduated": "Geslaagd",
            "highlightSelected": "Markeer het geselecteerde item",
            "intervals": "Intervallen",
            "legend": "Legenda",
            "name": "naam",
            "newThematism": "Nieuw thematisme",
            "punctual": "Punctueel",
            "quantity": "Aantal",
            "segments": "Segmenten",
            "source": "Bron",
            "table": "Tabel",
            "thematism": "Thematismen",
            "value": "Waarde"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Uitloggen zonder op te slaan",
                    "stayinedit": "Terug naar aanpassen"
                },
                "savebeforeexit": "Er zijn niet opgeslagen wijzigingen in de bijlage. Wilt u die opslaan voordat u uitlogd",
                "saveprocessmessage": "Bijlage kunnen alleen in bestaande kaarten worden opgeslagen.  Klik op opslaan, de kaart zal worden gegeneert inclusief de gegevens uit het formulier."
            },
            "customform": {
                "addrow": "Rij toevoegen",
                "clonerow": "Kloon rij",
                "datanotvalid": "Gegevens niet valide",
                "deleterow": "Rij verwijderen",
                "editrow": "Rij aanpassen",
                "export": "Export",
                "import": "Importeer",
                "importexport": {
                    "expattributes": "Te exporteren gegevens",
                    "file": "Bestand",
                    "filename": "Bestandsnaam",
                    "format": "Format",
                    "importmode": "Importeer mode",
                    "keyattributes": "Sleutelattributen",
                    "missingkeyattr": "Kies alstublieft minimaal een sleutelattribuut",
                    "modeadd": "Toevoegen",
                    "modemerge": "Samenvoegen",
                    "modereplace": "Vervangen",
                    "separator": "Scheidingsteken"
                },
                "refresh": "Terug naar standaard"
            },
            "linkcards": {
                "checkedonly": "Alleen aangevinkte",
                "editcard": "Kaart aanpassen",
                "opencard": "Kaart openen",
                "refreshselection": "Standaard selectie toepassen",
                "togglefilterdisabled": "Verwijder raster filter",
                "togglefilterenabled": "Instellen raster filter"
            },
            "required": "Deze widget is verplicht."
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
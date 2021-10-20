(function() {
    Ext.define('CMDBuildUI.locales.de.Locales', {
        "requires": ["CMDBuildUI.locales.de.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "de",
        "administration": CMDBuildUI.locales.de.LocalesAdministration.administration,
        "attachments": {
            "add": "Anlage hinzufügen",
            "attachmenthistory": "Anhangsverlauf",
            "author": "Autor",
            "browse": "Durchsuchen &hellip;",
            "category": "Kategorie",
            "code": "Code",
            "creationdate": "Erstellungsdatum",
            "deleteattachment": "Anlage löschen",
            "deleteattachment_confirmation": "Möchten Sie die Anlage wirklich löschen?",
            "description": "Beschreibung",
            "download": "Herunterladen",
            "dropfiles": "Hier Dateien ziehen",
            "editattachment": "Anlage bearbeiten",
            "file": "Datei",
            "filealreadyinlist": "Die Datei {0} ist schon hier",
            "filename": "File-Name",
            "fileview": "Anlage zeigen",
            "invalidfiles": "ungültige Dateien löschen",
            "majorversion": "Hauptversion",
            "maxsize": "Die maximal zulässige Dateigröße ist {0} MB.",
            "metadata": "Metadaten",
            "modificationdate": "Änderungsdatum",
            "new": "Neue Anlage",
            "nocategory": "Unkategorisiert",
            "preview": "Voransicht",
            "removefile": "Dateien löschen",
            "statuses": {
                "empty": "leere Datei",
                "error": "Fehler",
                "extensionNotAllowed": "Dateierweiterung nicht erlaubt",
                "loaded": "geladen",
                "ready": "Fertig",
                "toolarge": "Zu groß"
            },
            "successupload": "{0} Anlagen hochgeladen",
            "uploadfile": "Datei hochladen",
            "version": "Version",
            "viewhistory": "Anhangsverlauf sehen",
            "warningmessages": {
                "atleast": "Achtung: {0} Anlagen vom Typ \"{1}\" wurden hogeladen. Diese Kategorie akzeptiert zumindest {2} Anlagen",
                "exactlynumber": "Achtung: {0} Anlagen vom Typ \"{1}\" wurden hogeladen. Diese Kategorie akzeptiert {2} Anlagen",
                "maxnumber": "Achtung: {0} Anlagen vom Typ \"{1}\" wurden hogeladen. Diese Kategorie akzeptiert höchstens {2} Anlagen"
            },
            "wrongfileextension": "{0} Erweiterung ist nicht erlaubt"
        },
        "bim": {
            "bimViewer": "Bim Viewer",
            "card": {
                "label": "Karte"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Größe des Begrenzungsrahmens der Achse X entlang",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Größe des Begrenzungsrahmens der Achse Y entlang",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Größe des Begrenzungsrahmens der Achse Z entlang",
                "LARGEST_FACE_AREA": "Größter Gesichtsbereich",
                "LARGEST_FACE_DIRECTION": "Größte Flächerichtung",
                "SURFACE_AREA_ALONG_X": "Oberfläche der X Achse entlang",
                "SURFACE_AREA_ALONG_Y": "Oberfläche der Y Achse entlang",
                "SURFACE_AREA_ALONG_Z": "Oberfläche der Z Achse entlang",
                "TOTAL_SHAPE_VOLUME": "Gesamtvolumen",
                "TOTAL_SURFACE_AREA": "Gesamtoberfläche",
                "WALKABLE_SURFACE_AREA": "Begehbare Fläche",
                "calculated": "Berechnet",
                "description": "Beschreibung",
                "guid": "GUID",
                "label": "Eigenschaften",
                "name": "Name",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Schichten",
                "menu": {
                    "hideAll": "Alle verstecken",
                    "showAll": "Alle zeigen"
                },
                "name": "Name",
                "qt": "Qt",
                "visibility": "Sichtbarkeit"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Vorderansicht",
                "mod": "Viewer-Kontrolle",
                "orthographic": "Orthogonale Kamera",
                "pan": "Schwenken",
                "perspective": "Perspektivenkamera",
                "resetView": "Ansicht zurücksetzen",
                "rotate": "Rotieren",
                "sideView": "Seitenansicht",
                "topView": "Draufsicht"
            },
            "showBimCard": "3D-Viewer aufmachen",
            "tree": {
                "arrowTooltip": "Element auswählen",
                "columnLabel": "Baum",
                "label": "Baum",
                "open_card": "Verbundene Karte öffnen",
                "root": "Ifc-Wurzel"
            }
        },
        "bulkactions": {
            "abort": "ausgewählte Vorgänge abbrechen",
            "alertdownloadattachments": "Manche Anlagen werden nicht herunterladet, weil sie in den Server noch nicht gespeichert wurden.",
            "alertnoattachmentsdownload": "Keine Anlagen werden herunterladet, weil sie in den Server noch nicht gespeichert wurden.",
            "cancelselection": "Auswahl abbrechen",
            "confirmabort": "{0} Prozessinstanze werden unterbrochen. Möchten Sie die Änderungen wirklich vornehmen?",
            "confirmdelete": "{0} Karten werden gelöscht. Möchten Sie die Änderungen wirklich vornehmen?",
            "confirmdeleteattachements": "{0} Anlagen werden gelöscht. Möchten Sie die Änderungen wirklich vornehmen?",
            "confirmedit": "{0} mal {0} Karten werden geändert. Möchten Sie die Änderungen wirklich vornehmen?",
            "delete": "ausgewählte Elemente löschen",
            "download": "ausgewählte Anlagen herunterladen",
            "downloadall": "Anlagen herunterladen",
            "edit": "ausgewählte Elemente bearbeiten",
            "selectall": "Alle Elemente auswählen"
        },
        "calendar": {
            "active_expired": "Aktive/Abgelaufene",
            "add": "Hinzufügen",
            "advancenotification": "Voranmeldung",
            "allcategories": "Alle Kategorien",
            "alldates": "Alle Daten",
            "associatedcard": "Zugehörige Karte",
            "calculated": "Berechnet",
            "calendar": "Kalender",
            "cancel": "Als gelöscht markieren",
            "category": "Kategorie",
            "class": "Klasse",
            "cm_confirmcancel": "Möchten Sie wirklich die ausgewählten Zeitpläne als gelöscht markieren?",
            "cm_confirmcomplete": "Möchten Sie wirklich die ausgewählten Zeitpläne als vollendet markieren?",
            "cm_markcancelled": "Ausgewählte Zeitpläne als gelöscht markieren",
            "cm_markcomplete": "Ausgewählte Zeitpläne als vollendet markieren",
            "complete": "Ausfüllen",
            "completed": "Abgeschlossen",
            "date": "Datum",
            "days": "Tage",
            "delaybeforedeadline": "Verschiebung vor dem Termin",
            "delaybeforedeadlinevalue": "Verschiebung vor dem Terminwert",
            "description": "Beschreibung",
            "editevent": "Zeitplan bearbeiten",
            "enddate": "Enddatum",
            "endtype": "Endtyp",
            "event": "Zeitplan",
            "executiondate": "Ausführungsdatum",
            "frequency": "Häufigkeit",
            "frequencymultiplier": "Frequenzvervielfacher",
            "grid": "Gitter",
            "leftdays": "Tage übrig",
            "londdescription": "Volle Beschreibung",
            "manual": "Manuell",
            "maxactiveevents": "Max. aktive Ereignisse",
            "messagebodydelete": "Möchten Sie die Regeln der Planer entfernen?",
            "messagebodyplural": "Es gibt {0} Planungsregeln",
            "messagebodyrecalculate": "Möchten Sie die Planungsregeln mit dem neuen Datum erneut berechnen?",
            "messagebodysingular": "Es gibt {0} Planungsregel",
            "messagetitle": "Zeitplan erneut berechnen",
            "missingdays": "Fehlende Tage",
            "next30days": "Nächste 30 Tage",
            "next7days": "Nächste 7 Tage",
            "notificationtemplate": "Template als Benachrichtigung benutzt",
            "notificationtext": "Benachrichtigungstext",
            "occurencies": "Anzahl der Ereignisse",
            "operation": "Betrieb",
            "partecipantgroup": "Teilnehmergruppe",
            "partecipantuser": "Teilnehmerbenutzer",
            "priority": "Priorität",
            "recalculate": "Erneut berechnen",
            "referent": "Referent",
            "scheduler": "Planer",
            "sequencepaneltitle": "Zeitpläne erzeugen",
            "startdate": "Startdatum",
            "status": "Status",
            "today": "Heute",
            "type": "Typ",
            "viewevent": "Planung sehen",
            "widgetcriterion": "Berechnungskriterium",
            "widgetemails": "E-mails",
            "widgetsourcecard": "Quellenkarte"
        },
        "classes": {
            "cards": {
                "addcard": "Karte hinzufügen",
                "clone": "Klonen",
                "clonewithrelations": "Karte und entsprechende Beziehungen klonen",
                "deletebeaware": "Beachten Sie dass:",
                "deleteblocked": "Da es keine Beziehungen mit {0} gibt, ist es nicht möglich, mit der Karten-Löschung weiterzugehen.",
                "deletecard": "Karte löschen",
                "deleteconfirmation": "Möchten Sie diese Karte wirklich löschen?",
                "deleterelatedcards": "Auch die zugehörige {0} Karten werden gelöscht",
                "deleterelations": "die Beziehungen mit den Karten {0} werden gelöscht",
                "label": "Datenkarten",
                "modifycard": "Karte bearbeiten",
                "opencard": "Karte offen",
                "print": "Karte ausdrucken"
            },
            "simple": "Einfach",
            "standard": "Standard"
        },
        "common": {
            "actions": {
                "add": "Hinzufügen",
                "apply": "Anwenden",
                "cancel": "Abbrechen",
                "close": "Schließen",
                "delete": "Löschen",
                "edit": "Bearbeiten",
                "execute": "Durchführen",
                "help": "Hilfe",
                "load": "laden",
                "open": "aufmachen",
                "refresh": "Daten aktualisieren",
                "remove": "Löschen",
                "save": "Bestätigen",
                "saveandapply": "Speichern und Anwenden",
                "saveandclose": "Speichern und schließen",
                "search": "Suchen",
                "searchtext": "Suchen..."
            },
            "attributes": {
                "nogroup": "Basisdaten"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "HTML löschen",
                "expand": "Editor erweitern",
                "reduce": "Editor reduzieren",
                "signature": "Unterschrift hinzufügen",
                "unlink": "Link entfernen",
                "unlinkmessage": "Den ausgewählten Link in Text verwandeln"
            },
            "grid": {
                "disablemultiselection": "Mehrfachauswahl deaktivieren",
                "enamblemultiselection": "Mehrfachauswahl aktivieren",
                "export": "Exportieren von Daten",
                "filterremoved": "Dieser Filter wurde entfernt",
                "import": "Importieren von Daten",
                "itemnotfound": "Element nicht gefunden",
                "list": "Liste",
                "opencontextualmenu": "Kontextmenü öffnen",
                "print": "Ausdrucken",
                "printcsv": "als CSV drucken",
                "printodt": "als ODT drucken",
                "printpdf": "als PDF drucken",
                "row": "Element",
                "rows": "Elemente",
                "subtype": "Untertyp"
            },
            "tabs": {
                "activity": "Aktivität",
                "attachment": "Anlage",
                "attachments": "Anlagen",
                "card": "Karte",
                "clonerelationmode": "Beziehung-Modus klonen",
                "details": "Details",
                "emails": "E-mails",
                "history": "Chronologie",
                "notes": "Notizen",
                "relations": "Beziehungen",
                "schedules": "Zeitpläne"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Grafik herunterladen",
                "gridhide": "Dateien-Tabelle verstecken",
                "gridshow": "Datei-Tabelle zeigen",
                "openinpopup": "In Popup öffnen",
                "parametershide": "Parameter verstecken",
                "parametersshow": "Parameter zeigen",
                "reload": "Neu laden"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "vom Archiv hochladen",
            "alredyexistfile": "Eine Datei mit diesem Namen existiert schon",
            "archivingdate": "Archivierungsdatum",
            "attachfile": "File beilegen",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "E-Mail schreiben",
            "composefromtemplate": "Vom Template bilden",
            "delay": "Verzögerung",
            "delays": {
                "day1": "In 1 Tag",
                "days2": "In 2 Tagen",
                "days4": "In 4 Tagen",
                "hour1": "1 Stunde",
                "hours2": "2 Stunden",
                "hours4": "4 Stunden",
                "month1": "In 1 Monat",
                "negativeday1": "1 Tag bevor",
                "negativedays2": "2 Tage bevor",
                "negativedays4": "4 Tage bevor",
                "negativehour1": "1 Stunde bevor",
                "negativehours2": "2 Stunden bevor",
                "negativehours4": "4 Stunden bevor",
                "negativemonth1": "1 Monat bevor",
                "negativeweek1": "1 Woche bevor",
                "negativeweeks2": "2 Wochen bevor",
                "none": "Keine",
                "week1": "In 1 Woche",
                "weeks2": "In 2 Wochen"
            },
            "dmspaneltitle": "Anhang aus Datenbank auswählen",
            "edit": "Bearbeiten",
            "from": "Von",
            "gridrefresh": "Gitter aktualisieren",
            "keepsynchronization": "Sync halten",
            "message": "Meldung",
            "regenerateallemails": "Alle E-mails regenerien",
            "regenerateemail": "E-Mail regenerieren",
            "remove": "Löschen",
            "remove_confirmation": "Möchten Sie diese E-mail wirklich löschen?",
            "reply": "Antworten",
            "replyprefix": "Am {0} schrieb {1}:",
            "selectaclass": "Wählen Sie eine Klasse aus",
            "sendemail": "E-mail senden",
            "signature": "Unterschrift",
            "statuses": {
                "draft": "Entwürfe",
                "error": "Fehler",
                "outgoing": "Ausgehende",
                "received": "Eingehende",
                "sent": "Gesendete"
            },
            "subject": "Betreff",
            "to": "An",
            "view": "Ansichten"
        },
        "errors": {
            "autherror": "ID oder Passwort ungültig",
            "classnotfound": "Keine Klasse {0} gefunden",
            "fieldrequired": "Dieses Feld ist erforderlich",
            "invalidfilter": "Ungültiger Filter",
            "notfound": "Element nicht gefunden"
        },
        "filters": {
            "actions": "Aktionen",
            "addfilter": "Filter hinzufügen",
            "any": "Irgendein",
            "attachments": "Anlagen",
            "attachmentssearchtext": "Anlagen-Suchtext",
            "attribute": "Ein Attribut auswählen",
            "attributes": "Attribute",
            "clearfilter": "Filter leeren",
            "clone": "Klonen",
            "copyof": "Kopien von",
            "currentgroup": "Aktuelle Gruppe",
            "currentuser": "Aktueller Benutzer",
            "defaultset": "Als Standard festlegen",
            "defaultunset": "Standardwert nicht setzen",
            "description": "Beschreibung",
            "domain": "Domain",
            "errorname": "Einen Filter mit demselben Name existiert schon",
            "filterdata": "Datei filtern",
            "fromfilter": "Von Filter",
            "fromselection": "Aus der Auswahl",
            "group": "Gruppe",
            "ignore": "Ignorieren",
            "migrate": "Migrieren",
            "name": "Name",
            "newfilter": "Neu Filter",
            "noone": "Keine",
            "operator": "Operator",
            "operators": {
                "beginswith": "Starten mit",
                "between": "Zwischen",
                "contained": "Enthalten",
                "containedorequal": "Enthalten oder gleich",
                "contains": "Enthält",
                "containsorequal": "Enthält oder gleich",
                "descriptionbegin": "Die Beschreibung beginnt mit",
                "descriptioncontains": "die Beschreibung inkludiert",
                "descriptionends": "Die Beschreibung beendet mit",
                "descriptionnotbegin": "Die Beschreibung beginnt nicht mit",
                "descriptionnotcontain": "Die Beschreibung enthält nicht",
                "descriptionnotends": "Die Beshcreibung beendet nicht mit",
                "different": "Verschieden",
                "doesnotbeginwith": "Es startet nicht mit",
                "doesnotcontain": "Es enthält nicht",
                "doesnotendwith": "Es endet nicht mit",
                "endswith": "Es endet mit",
                "equals": "Gleich",
                "greaterthan": "Höher",
                "isnotnull": "Not null",
                "isnull": "Null",
                "lessthan": "Niedriger"
            },
            "relations": "Beziehungen",
            "type": "Typ",
            "typeinput": "Input Parameter",
            "user": "Benutzer",
            "value": "Wert"
        },
        "gis": {
            "card": "Karte",
            "cardsMenu": "Karten-Menü",
            "code": "Code",
            "description": "Beschreibung",
            "extension": {
                "errorCall": "Fehler",
                "noResults": "Keine Ergebnisse"
            },
            "externalServices": "Externe Dienste",
            "geographicalAttributes": "Geographische Attribute",
            "geoserverLayers": "Ebenen von Geoserver",
            "layers": "Ebenen",
            "list": "Liste",
            "longpresstitle": "Geoelemente im Bereich",
            "map": "Map",
            "mapServices": "Map Services",
            "position": "Stelle",
            "root": "Quelle",
            "tree": "Baumansicht",
            "type": "Typ",
            "view": "Ansichten",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Aktivitätsname",
            "activityperformer": "Ausführende der Aktivität",
            "begindate": "Anfangsdatum",
            "enddate": "Enddatum",
            "processstatus": "Status",
            "user": "Benutzer"
        },
        "importexport": {
            "database": {
                "uri": "URI Database",
                "user": "Benutzer Database"
            },
            "downloadreport": "Bericht vom Download",
            "emailfailure": "Beim Senden der E-Mail ist ein Fehler aufgetreten!",
            "emailmessage": "Im Anhang Importieren von Berichtvorlagen vom File \"{0}\" in Datum {1}",
            "emailsubject": "Datenbericht importieren",
            "emailsuccess": "Die E-Mail wurde erfolgreich gesendet!",
            "export": "Exportieren",
            "exportalldata": "Alle Dateien",
            "exportfiltereddata": "Nur Daten, die dem Netzfilter entsprechen",
            "gis": {
                "shapeimportdisabled": "Der Shape-Import ist nicht für diesen Template aktiviert",
                "shapeimportenabled": "Shape Import Konfiguration"
            },
            "ifc": {
                "card": "Karte",
                "project": "Projekt",
                "sourcetype": "importieren von"
            },
            "import": "Importieren",
            "importresponse": "Einfuhrentscheidung",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Fehler",
                "linenumber": "Zeilennummer",
                "message": "Nachricht",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Verarbeitete Zeilen",
                "recordnumber": "Rekordzahl",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Bericht senden",
            "template": "Template",
            "templatedefinition": "Template-Definition"
        },
        "joinviews": {
            "active": "Aktiv",
            "addview": "Ansicht hinzufügen",
            "alias": "Alias",
            "attribute": "Attribut",
            "attributes": "Attribute",
            "attributesof": "Attribute von: {0}",
            "createview": "Ansicht erzeugen",
            "datasorting": "Datensortierung",
            "delete": "Löschen",
            "deleteview": "Ansicht löschen",
            "deleteviewconfirm": "Möchten Sie diese Ansicht wirklich löschen?",
            "description": "Beschreibung",
            "disable": "Deaktivieren",
            "domainalias": "Domain alias",
            "domainsof": "Domains von {0}",
            "edit": "Bearbeiten",
            "editview": "Ansicht-Konfiguration bearbeiten",
            "enable": "Aktivieren",
            "fieldsets": "Feldgruppen",
            "filters": "Filtern",
            "generalproperties": "Allgemeine Eigenschaften",
            "group": "Gruppe",
            "innerjoin": "Inner join",
            "jointype": "Join-Typ",
            "joinview": "Von join ansehen",
            "klass": "Klasse",
            "manageview": "Ansicht verwalten",
            "masterclass": "Meisterklasse",
            "masterclassalias": "Alias der Meisterklasse",
            "name": "Name",
            "newjoinview": "Neue Ansicht von Join",
            "outerjoin": "Outer join",
            "pleaseseleceavalidmasterclass": "Wählen Sie bitte eine gültige Hauptklasse aus",
            "refreshafteredit": "Möchten Sie die Seite aktualisieren, um die Bearbeitungen zu sehen?",
            "selectatleastoneattribute": "Wählen Sie zumindest ein Attribut aus, das im Raster und im reduzierten Raster in Schritt 4 gezeichnet wird.",
            "showingrid": "Im Raster zeigen",
            "showinreducedgrid": "Im reduzierten Rasten zeigen",
            "targetalias": "Alias der Zielklasse"
        },
        "login": {
            "buttons": {
                "login": "Anmelden",
                "logout": "Benutzer wechseln"
            },
            "fields": {
                "group": "Gruppe",
                "language": "Sprache",
                "password": "Passwort",
                "tenants": "Mandanten",
                "username": "Benutzername"
            },
            "loggedin": "Angemeldet",
            "sso": {
                "loginfailure": "Anmeldefehler",
                "loginwith": "Mit {0} sich anmelden",
                "or": "oder"
            },
            "title": "Anmelden",
            "welcome": "Willkommen zurück {0}."
        },
        "main": {
            "administrationmodule": "Verwaltungsformular",
            "baseconfiguration": "Basiskonfiguration",
            "cardlock": {
                "lockedmessage": "Sie dürfen diese Karte nicht bearbeiten. Sie wird gerade von {0} bearbeitet.",
                "someone": "jemand"
            },
            "changegroup": "Gruppe wechseln",
            "changetenant": "{0} wechseln",
            "confirmchangegroup": "Möchten Sie Gruppe wirklich wechseln?",
            "confirmchangetenants": "Möchten Sie aktive Mandanten wirklich wechseln?",
            "confirmdisabletenant": "Möchten Sie das Flag \"Mandanten ignorieren\" wirklich deaktivieren?",
            "confirmenabletenant": "Möchten Sie das Flag \"Mandanten ignorieren\" wirklich aktivieren?",
            "ignoretenants": "{0} ignorieren",
            "info": "Information",
            "logo": {
                "cmdbuild": "CMDBuild Logo",
                "cmdbuildready2use": "CMDBuild READY2USE Logo",
                "companylogo": "Firmenlogo",
                "openmaint": "openMAINT Logo"
            },
            "logout": "Abmeldung",
            "managementmodule": "Datenmanagement-Modul",
            "multigroup": "Multigruppe",
            "multitenant": "Multi {0}",
            "navigation": "Navigieren",
            "pagenotfound": "Seite nicht gefunden",
            "password": {
                "change": "Passwort ändern",
                "confirm": "Passwort bestätigen",
                "email": "E-Mail Adresse",
                "err_confirm": "Passwort passt nicht dazu.",
                "err_diffprevious": "Das Passwort kann nicht mit dem vorherigen identisch sein.",
                "err_diffusername": "Das Passwort kann nicht mit dem Username identisch sein.",
                "err_length": "Das Passwort muss zumindest {0} Zeichen lang sein.",
                "err_reqdigit": "Das Passwort muss zumindest eine Ziffer enthalten.",
                "err_reqlowercase": "Das Passwort muss zumindest einen Kleinbuchstaben enthalten.",
                "err_requppercase": "Das Passwort muss zumindest einen Großbuchstaben enthalten.",
                "expired": "Ihr Passwort ist abgelaufen. Sie müssen es ändern.",
                "forgotten": "Ich habe mein Passwort vergessen",
                "new": "Neues Passwort",
                "old": "Altes Passwort",
                "recoverysuccess": "Wir haben Ihnen eine E-mail mit der Anweisung geschickt, Ihr Passwort wiederherzustellen",
                "reset": "Passwort ändern",
                "saved": "Passwort korrekt gespeichert!"
            },
            "pleasecorrecterrors": "Bitte korrigieren Sie die angezeigten Fehler!",
            "preferences": {
                "comma": "Komma",
                "decimalserror": "Dezimalfeld muss anwesend sein",
                "decimalstousandserror": "Dezimal- und Tausendertrennzeichen müssen unterschiedlich sein",
                "default": "Standard",
                "defaultvalue": "Default-Wert",
                "firstdayofweek": "Erster Tag der Woche",
                "gridpreferencesclear": "Vorgabendialogfenster Gitter leeren",
                "gridpreferencescleared": "Gitter-Präferenz geleert!",
                "gridpreferencessave": "Gitter-Präferenz speichern",
                "gridpreferencessaved": "Gitter-Präferenz gespeichert!",
                "gridpreferencesupdate": "Gitter-Präferenz aktualisieren",
                "labelcsvseparator": "CSV Trennzeichen",
                "labeldateformat": "Datumsformat",
                "labeldecimalsseparator": "Dezimaltrennzeichen",
                "labellanguage": "Sprache",
                "labelthousandsseparator": "Tausendertrennzeichen",
                "labeltimeformat": "Zeitformat",
                "msoffice": "Microsoft Office",
                "period": "Periode",
                "preferredfilecharset": "CSV Umsetzung",
                "preferredofficesuite": "Bevorzugtes Office Suite",
                "space": "Raum",
                "thousandserror": "Tausendfeld muss anwesend sein",
                "timezone": "Zeitzone",
                "twelvehourformat": "12-Stunden-Format",
                "twentyfourhourformat": "24-Stunden-Format"
            },
            "searchinallitems": "In allen Elementen suchen",
            "selectdeselettenants": "Alle aus-/abwählen",
            "treenavcontenttitle": "{0} von {1}",
            "userpreferences": "Einstellungen"
        },
        "menu": {
            "allitems": "Alle Elemente",
            "classes": "Klassen",
            "custompages": "Maßseiten",
            "dashboards": "Dashboards",
            "processes": "Vorgänge",
            "reports": "Berichte",
            "views": "Sicht"
        },
        "notes": {
            "edit": "Notizen öffnen"
        },
        "notifier": {
            "attention": "Achtung",
            "error": "Fehler",
            "genericerror": "Allgemeiner Fehler",
            "genericinfo": "Allgemeine Info",
            "genericwarning": "Allgemeine Warnmeldung",
            "info": "Information",
            "success": "Erfolg",
            "warning": "Achtung"
        },
        "patches": {
            "apply": "Patches anwenden",
            "category": "Kategorie",
            "description": "Beschreibung",
            "name": "Name",
            "patches": "Patches"
        },
        "processes": {
            "abortconfirmation": "Sind Sie sicher, dass Sie diesen Vorgang abbrechen möchten?",
            "abortprocess": "Vorgang abbrechen",
            "action": {
                "advance": "Weiter",
                "label": "Aktion"
            },
            "activeprocesses": "Aktive Prozesse",
            "allstatuses": "Alle",
            "editactivity": "Aktivität bearbeiten",
            "openactivity": "Aktivität öffnen",
            "startworkflow": "Anlassen",
            "workflow": "Prozesse"
        },
        "relationGraph": {
            "activity": "Aktivität",
            "allLabelsOnGraph": "alle Etiketten",
            "card": "Karte",
            "cardList": "Kartenliste",
            "cardRelations": "Beziehung",
            "choosenaviagationtree": "Navigationsbaum auswählen",
            "class": "Klasse",
            "classList": "Klassenliste",
            "compoundnode": "Knoten-Verbindung",
            "disable": "Deaktivieren",
            "edges": "Kanten",
            "enable": "Aktivieren",
            "labelsOnGraph": "Tooltip auf Graph",
            "level": "Ebene",
            "nodes": "Knoten",
            "openRelationGraph": "Beziehungsgraph öffnen",
            "qt": "Qt",
            "refresh": "Aktualisieren",
            "relation": "Beziehung",
            "relationGraph": "Beziehungsgraph",
            "reopengraph": "Graph von diesem Knoten wieder öffnen"
        },
        "relations": {
            "adddetail": "Detail hinzufügen",
            "addrelations": "Beziehungen hinzufügen",
            "attributes": "Attribute",
            "begindate": "Anfangsdatum",
            "code": "Code",
            "deletedetail": "Detail löschen",
            "deleterelation": "Beziehung löschen",
            "deleterelationconfirm": "Möchten Sie diese Beziehung wirklich löschen?",
            "description": "Beschreibung",
            "editcard": "Karte bearbeiten",
            "editdetail": "Detail bearbeiten",
            "editrelation": "Beziehung bearbeiten",
            "extendeddata": "Erweiterte Daten",
            "mditems": "Elemente",
            "missingattributes": "Fehlende obligatorische Attribute",
            "opencard": "Verbundene Karte öffnen",
            "opendetail": "Ansicht Detail",
            "type": "Typ"
        },
        "reports": {
            "csv": "CSV",
            "download": "Herunterladen",
            "format": "Format",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Ausdrucken",
            "reload": "Neu laden",
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
                            "description": "Täglich"
                        },
                        "monthly": {
                            "description": "Monatlich"
                        },
                        "once": {
                            "description": "Einmal"
                        },
                        "weekly": {
                            "description": "Wöchentlich"
                        },
                        "yearly": {
                            "description": "Jährlich"
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
            "addThematism": "Thematisierung hinzufügen",
            "analysisType": "Analysetyp",
            "attribute": "Attribut",
            "calculateRules": "Stilregel erzeugen",
            "clearThematism": "Thematisierung leeren",
            "color": "Farbe",
            "defineLegend": "Definition der Legende",
            "defineThematism": "Thematisierung-Definition",
            "function": "Funktion",
            "generate": "Erzeugen",
            "geoAttribute": "Geographisches Attribut",
            "graduated": "Graduell",
            "highlightSelected": "Markieren Sie das ausgewählte Element",
            "intervals": "Abständen",
            "legend": "Legende",
            "name": "Name",
            "newThematism": "Neue Thematisierung",
            "punctual": "Pünktlich",
            "quantity": "Menge",
            "segments": "Segment",
            "source": "Quelle",
            "table": "Tabelle",
            "thematism": "Thematisierungen",
            "value": "Wert"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Das Fenster schließen, ohne zu speichern",
                    "stayinedit": "Zurück zur Bearbeitung"
                },
                "savebeforeexit": "Es gibt Bearbeitungen, die in den Anlagen nicht gespeichert wurden. Möchten Sie sie vor dem Beenden speichern?",
                "saveprocessmessage": "Anlagen können nur in bestehenden Karten gespeichert werden. Wenn man auf Speichern klicken, wird die Prozessinstanz mit den im Formular anwesenden Daten erzeugt."
            },
            "customform": {
                "addrow": "Zeile hinzufügen",
                "clonerow": "Zeile klonen",
                "datanotvalid": "nicht gültige Dateien",
                "deleterow": "Zeile löschen",
                "editrow": "Zeile verändern",
                "export": "Exportieren",
                "import": "Importieren",
                "importexport": {
                    "expattributes": "zu exportierenden Daten",
                    "file": "Datei",
                    "filename": "File-Name",
                    "format": "Format",
                    "importmode": "Importmodus",
                    "keyattributes": "Schlüsselattribute",
                    "missingkeyattr": "zumind. Einen Schlüsselattribut auswählen",
                    "modeadd": "Hinzufügen",
                    "modemerge": "Aktualisieren",
                    "modereplace": "ersetzen",
                    "separator": "Trennzeichen"
                },
                "refresh": "Standardeinstellungen wiederherstellen"
            },
            "linkcards": {
                "checkedonly": "Nur ausgewählte",
                "editcard": "Karte bearbeiten",
                "opencard": "Karte öffnen",
                "refreshselection": "Default Auswahl einsetzen",
                "togglefilterdisabled": "Filter des Gitters deaktivieren",
                "togglefilterenabled": "Filter Gitter aktivieren"
            },
            "required": "Dieses Widget ist erforderlich"
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
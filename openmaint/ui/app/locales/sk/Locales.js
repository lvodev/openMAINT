(function() {
    Ext.define('CMDBuildUI.locales.sk.Locales', {
        "requires": ["CMDBuildUI.locales.sk.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "sk",
        "administration": CMDBuildUI.locales.sk.LocalesAdministration.administration,
        "attachments": {
            "add": "Pridať prílohu",
            "attachmenthistory": "História prílohy",
            "author": "Autor",
            "browse": "Prehliadať &hellip;",
            "category": "Kategória",
            "code": "Kód",
            "creationdate": "Dátum vytvorenia",
            "deleteattachment": "Zmazať prílohu",
            "deleteattachment_confirmation": "Naozaj chcete odstrániť túto prílohu?",
            "description": "Popis",
            "download": "Stiahnuť",
            "dropfiles": "Sem presuňte súbory",
            "editattachment": "Upraviť prílohu",
            "file": "Súbor",
            "filealreadyinlist": "Súbor {0} sa už nachádza v zozname.",
            "filename": "Názov súboru",
            "fileview": "Zobraziť prílohu",
            "invalidfiles": "Odstráňte neplatné súbory",
            "majorversion": "Hlavná verzia",
            "maxsize": "Maximálna povolená veľkosť súboru je {0} MB.",
            "metadata": "Metadata",
            "modificationdate": "Dátum zmeny",
            "new": "Nová príloha",
            "nocategory": "Nezaradené",
            "preview": "Náhľad",
            "removefile": "Odstrániť súbor",
            "statuses": {
                "empty": "Prázdny súbor",
                "error": "Chyba",
                "extensionNotAllowed": "Prípona súboru nie je povolená",
                "loaded": "Načítané",
                "ready": "Pripravený",
                "toolarge": "Príliš veľký"
            },
            "successupload": "bolo nahraných {0} príloh.",
            "uploadfile": "Nahrať súbor...",
            "version": "Verzia",
            "viewhistory": "Zobraziť históriu prílohy",
            "warningmessages": {
                "atleast": "Varovanie: boli načítané prílohy {0} typu \"{1}\". Táto kategória očakáva najmenej {2} prílohy",
                "exactlynumber": "Varovanie: boli načítané prílohy {0} typu \"{1}\". Táto kategória očakáva {2} prílohy",
                "maxnumber": "Varovanie: Bola načítaná príloha typu {0} typu \"{1}\". Táto kategória očakáva najviac {2} prílohy"
            },
            "wrongfileextension": "prípona súboru {0} nie je povolená"
        },
        "bim": {
            "bimViewer": "BIM Prehliadač",
            "card": {
                "label": "Karta"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Veľkosť ohraničovaceho boxu pozdĺž osi X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Veľkosť ohraničovaceho boxu pozdĺž osi Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Veľkosť ohraničovaceho boxu pozdĺž osi Z",
                "LARGEST_FACE_AREA": "Najväčšia čelná plocha",
                "LARGEST_FACE_DIRECTION": "Najväčšia čelná oblasť",
                "SURFACE_AREA_ALONG_X": "Povrchová plocha pozdĺž osi X.",
                "SURFACE_AREA_ALONG_Y": "Povrchová plocha pozdĺž osi Y.",
                "SURFACE_AREA_ALONG_Z": "Povrchová plocha pozdĺž osi Z.",
                "TOTAL_SHAPE_VOLUME": "Celkový objem modelu",
                "TOTAL_SURFACE_AREA": "Celková plocha",
                "WALKABLE_SURFACE_AREA": "Pochôdzna plocha",
                "calculated": "Kalkulované",
                "description": "Popis",
                "guid": "GUID",
                "label": "Vlastnosti",
                "name": "Názov",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Vrstvy",
                "menu": {
                    "hideAll": "Skryť všetky",
                    "showAll": "Zobraziť všetky"
                },
                "name": "Názov",
                "qt": "Mn",
                "visibility": "Viditeľnosť"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Pohľad spredu",
                "mod": "Ovládacie prvky prehliadača",
                "orthographic": "Ortografická kamera",
                "pan": "Rolovanie",
                "perspective": "Perspektívna kamera",
                "resetView": "Obnoviť pohľad",
                "rotate": "Otočiť",
                "sideView": "Pohľad z boku",
                "topView": "Pohľad zhora"
            },
            "showBimCard": "Otvoriť 3D prehliadač",
            "tree": {
                "arrowTooltip": "Vyberať prvok",
                "columnLabel": "Strom-Hierarchicky",
                "label": "Strom-Hierarchicky",
                "open_card": "Otvoriť súvisiacu kartu",
                "root": "IFC Root"
            }
        },
        "bulkactions": {
            "abort": "Zrušiť vybrané položky",
            "alertdownloadattachments": "Niektoré prílohy nie je možné stiahnuť, pretože ešte neboli uložené na serveri",
            "alertnoattachmentsdownload": "Nie je možné stiahnuť žianu prílohu, pretože ešte neboli uložené na server",
            "cancelselection": "Zrušiť výber",
            "confirmabort": "Rušíte {0} inštancie procesu. Ste si istý, že chcete pokračovať?",
            "confirmdelete": "Odstraňujete {0} kariet. Ste si istý, že chcete pokračovať?",
            "confirmdeleteattachements": "Odstraňujete prílohy {0}. Ste si istý, že chcete pokračovať?",
            "confirmedit": "Upravujete {0} pre {1} karty. Ste si istý, že chcete pokračovať?",
            "delete": "Odstrániť vybrané položky",
            "download": "Stiahnuť vybrané prílohy",
            "downloadall": "Stiahnuť všetky prílohy",
            "edit": "Upraviť vybrané položky",
            "selectall": "Vyberať všetky položky"
        },
        "calendar": {
            "active_expired": "Aktívne/Omeškané",
            "add": "Pridať",
            "advancenotification": "Predbežné oznámenie",
            "allcategories": "Všetky kategórie",
            "alldates": "Všetky dátumy",
            "associatedcard": "Priradená karta",
            "calculated": "Počítané",
            "calendar": "Kalendár",
            "cancel": "Označiť ako zrušené",
            "category": "Kategória",
            "class": "Trieda",
            "cm_confirmcancel": "Naozaj chcete označiť ako zrušené vybraté plány?",
            "cm_confirmcomplete": "Naozaj chcete označiť ako dokončené vybrané plány?",
            "cm_markcancelled": "Označiť vybrané plány ako zrušené",
            "cm_markcomplete": "Označiť vybrané plány ako dokončené",
            "complete": "Označiť ako vykonané",
            "completed": "Dokončené",
            "date": "Dátum",
            "days": "Dni",
            "delaybeforedeadline": "Oneskorenie pred termínom",
            "delaybeforedeadlinevalue": "Oneskorenie pred termínom - Hodnota",
            "description": "Popis",
            "editevent": "Upraviť plán",
            "enddate": "Dátum ukončenia",
            "endtype": "Typ ukončenia",
            "event": "Plán",
            "executiondate": "Dátum vykonania",
            "frequency": "Frekvencia",
            "frequencymultiplier": "Frekvencia multiplikátor",
            "grid": "Tabuľka",
            "leftdays": "Dní do",
            "londdescription": "Úplný popis",
            "manual": "Ručne",
            "maxactiveevents": "Maximálny počet aktívnych udalostí",
            "messagebodydelete": "Chcete odstrániť pravidlo plánovača?",
            "messagebodyplural": "Existujú {0} pravidlá plánovania",
            "messagebodyrecalculate": "Chcete prepočítať pravidlo plánov s novým dátumom?",
            "messagebodysingular": "Existuje {0} pravidlo plánovania",
            "messagetitle": "Plán prepočítavania",
            "missingdays": "Chýbajúce dni",
            "next30days": "Ďalších 30 dní",
            "next7days": "Ďalších 7 dní",
            "notificationtemplate": "Šablóna použitá na notifikáciu",
            "notificationtext": "Text oznámenia",
            "occurencies": "Počet udalostí",
            "operation": "Prevádzkové",
            "partecipantgroup": "Skupina účastníkov",
            "partecipantuser": "Účastnícky používateľ",
            "priority": "Priorita",
            "recalculate": "Prepočítať",
            "referent": "Referent",
            "scheduler": "Plánovač",
            "sequencepaneltitle": "Generovať plány",
            "startdate": "Dátum začiatku",
            "status": "Status",
            "today": "Dnes",
            "type": "Typ",
            "viewevent": "Zobraziť plán",
            "widgetcriterion": "Výpočtové kritérium",
            "widgetemails": "E-Maily",
            "widgetsourcecard": "Zdrojová karta"
        },
        "classes": {
            "cards": {
                "addcard": "Pridať kartu",
                "clone": "Klonovať",
                "clonewithrelations": "Klonovať kartu a prepojenia",
                "deletebeaware": "Uvedomte si, že:",
                "deleteblocked": "V odstránení nie je možné pokračovať, pretože existujú prepojenia s doménou {0}.",
                "deletecard": "Zmazať kartu",
                "deleteconfirmation": "Naozaj chcete odstrániť túto kartu?",
                "deleterelatedcards": "tiež bude odstránených {0} prepojených kariet",
                "deleterelations": "prepojenia s {0} kartami budú odstránené",
                "label": "Karty",
                "modifycard": "Upraviť kartu",
                "opencard": "Otvoriť kartu",
                "print": "Vytlačiť kartu"
            },
            "simple": "Jednoduchá",
            "standard": "Štandardná"
        },
        "common": {
            "actions": {
                "add": "Pridať",
                "apply": "Použiť",
                "cancel": "Zrušiť",
                "close": "Zavrieť",
                "delete": "Zmazať",
                "edit": "Upraviť",
                "execute": "Vykonať",
                "help": "Pomoc",
                "load": "Načítať",
                "open": "Otvoriť",
                "refresh": "Obnoviť údaje",
                "remove": "Odstrániť",
                "save": "Uložiť",
                "saveandapply": "Uložiť a použiť",
                "saveandclose": "Uložiť a zavrieť",
                "search": "Vyhľadávanie",
                "searchtext": "Vyhľadať..."
            },
            "attributes": {
                "nogroup": "Základné údaje"
            },
            "dates": {
                "date": "d/m/R",
                "datetime": "d/m/R H:m:s",
                "time": "H:m:s"
            },
            "editor": {
                "clearhtml": "Clear HTML",
                "expand": "Rozbaliť editor",
                "reduce": "Zmenšiť editor",
                "signature": "Pridať podpis",
                "unlink": "Odpojiť",
                "unlinkmessage": "Transformujte vybraný hypertextový odkaz na text."
            },
            "grid": {
                "disablemultiselection": "Zakázať výber viacerých položiek",
                "enamblemultiselection": "Povoliť výber viacerých položiek",
                "export": "Exportovať údaje",
                "filterremoved": "Aktuálny filter bol odstránený",
                "import": "Importovať údaje",
                "itemnotfound": "Položka sa nenašla",
                "list": "Zoznam",
                "opencontextualmenu": "Otvoriť kontextové menu",
                "print": "Tlačiť",
                "printcsv": "Tlačiť ako CSV",
                "printodt": "Tlačiť ako ODT",
                "printpdf": "Tlačiť ako PDF",
                "row": "Položka",
                "rows": "Položky",
                "subtype": "Podtyp"
            },
            "tabs": {
                "activity": "Činnosť",
                "attachment": "Príloha",
                "attachments": "Prílohy",
                "card": "Karta",
                "clonerelationmode": "Režim klonovania prepojení",
                "details": "Podrobnosti",
                "emails": "E-Maily",
                "history": "História",
                "notes": "Poznámky",
                "relations": "Prepojenia",
                "schedules": "Plány"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Stiahnuť graf",
                "gridhide": "Skryť tabuľku údajov",
                "gridshow": "Zobraziť tabuľku údajov",
                "openinpopup": "Otvoriť v kontextovom okne",
                "parametershide": "Skryť parametre údajov",
                "parametersshow": "Zobraziť tabuľku parametrov",
                "reload": "Opäť načítať"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Pridať prílohy z archívu dokumentov",
            "alredyexistfile": "Súbor s týmto názvom už existuje",
            "archivingdate": "Dátum archivovania",
            "attachfile": "Priložiť súbor",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Vytvoriť e-mail",
            "composefromtemplate": "Vytvoriť zo šablóny",
            "delay": "Oneskorenie",
            "delays": {
                "day1": "Za 1 deň",
                "days2": "Za 2 dni",
                "days4": "Za 4 dni",
                "hour1": "1 hodinu",
                "hours2": "2 hodiny",
                "hours4": "4 hodiny",
                "month1": "Za 1 mesiac",
                "negativeday1": "1 deň predtým",
                "negativedays2": "2 dni predtým",
                "negativedays4": "4 dni predtým",
                "negativehour1": "1 hodinu predtým",
                "negativehours2": "2 hodiny predtým",
                "negativehours4": "4 hodiny predtým",
                "negativemonth1": "1 mesiac predtým",
                "negativeweek1": "1 týždeň predtým",
                "negativeweeks2": "2 týždne predtým",
                "none": "Žiadne",
                "week1": "Za 1 týždeň",
                "weeks2": "Za 2 týždne"
            },
            "dmspaneltitle": "Vyberte prílohy z databázy",
            "edit": "Upraviť",
            "from": "Od",
            "gridrefresh": "Obnoviť tabuľku",
            "keepsynchronization": "Ponechať synchronizáciu",
            "message": "Správa",
            "regenerateallemails": "Obnoviť všetky E-maily",
            "regenerateemail": "Obnoviť E-mail",
            "remove": "Odstrániť",
            "remove_confirmation": "Naozaj chcete odstrániť tento e-mail?",
            "reply": "odpovedať",
            "replyprefix": "Na {0}, {1} napísal:",
            "selectaclass": "Vyberať triedu",
            "sendemail": "Odoslať E-Mail",
            "signature": "Pospis",
            "statuses": {
                "draft": "Návrh",
                "error": "Chyba",
                "outgoing": "Odosielané",
                "received": "Prijaté",
                "sent": "Odoslané"
            },
            "subject": "Predmet",
            "to": "Komu",
            "view": "Náhľad"
        },
        "errors": {
            "autherror": "Chybné uživateľské meno alebo heslo",
            "classnotfound": "Trieda {0} sa nenašla",
            "fieldrequired": "Toto pole je povinné",
            "invalidfilter": "Neplatný filter",
            "notfound": "Položka nebola nájdená"
        },
        "filters": {
            "actions": "Funkcie",
            "addfilter": "Pridať filter",
            "any": "Ktorý koľvek",
            "attachments": "Prílohy",
            "attachmentssearchtext": "Prílohy text vyhľadávania",
            "attribute": "Zvoliť atribút",
            "attributes": "Atribúty",
            "clearfilter": "Vynulovať filter",
            "clone": "Klonovať",
            "copyof": "Kópia",
            "currentgroup": "Aktuálna skupina",
            "currentuser": "Aktuálny uživateľ",
            "defaultset": "Nastaviť ako predvolenú",
            "defaultunset": "Zrušiť predvolené nastavenie",
            "description": "Popis",
            "domain": "Doména",
            "errorname": "Názov filtra sa už používa",
            "filterdata": "Filtrovať údaje",
            "fromfilter": "Z filtra",
            "fromselection": "Z výberu",
            "group": "Skupina",
            "ignore": "Ignorovať",
            "migrate": "Migrovať",
            "name": "Názov",
            "newfilter": "Nový filter",
            "noone": "Žiadny",
            "operator": "Pravidlá",
            "operators": {
                "beginswith": "Začína s",
                "between": "Medzi",
                "contained": "Obsiahnutý",
                "containedorequal": "Obsiahnutý alebo rovný",
                "contains": "Obsahuje",
                "containsorequal": "Obsahuje alebo rovné",
                "descriptionbegin": "Popis sa začína s",
                "descriptioncontains": "Popis obsahuje",
                "descriptionends": "Popis končí s",
                "descriptionnotbegin": "Popis sa nezačína s",
                "descriptionnotcontain": "Popis neobsahuje",
                "descriptionnotends": "Popis sa nekončí s",
                "different": "Nezhodný",
                "doesnotbeginwith": "Nezačína s",
                "doesnotcontain": "Neobsahuje",
                "doesnotendwith": "Nekončí s",
                "endswith": "Končí s",
                "equals": "Rovná sa",
                "greaterthan": "Väčší než",
                "isnotnull": "Nie je prázdny",
                "isnull": "Je prázdny",
                "lessthan": "Menej než"
            },
            "relations": "Prepojenia",
            "type": "Typ",
            "typeinput": "Vstupný parameter",
            "user": "Uživateľ",
            "value": "Hodnota"
        },
        "gis": {
            "card": "Karta",
            "cardsMenu": "Ponuka kariet",
            "code": "Kód",
            "description": "Popis",
            "extension": {
                "errorCall": "Chyba",
                "noResults": "Žiadne výsledky"
            },
            "externalServices": "Externé služby",
            "geographicalAttributes": "Geografické atribúty",
            "geoserverLayers": "Geoserver vrstvy",
            "layers": "Vrstvy",
            "list": "Zoznam",
            "longpresstitle": "Geografické elementy v oblasti",
            "map": "Mapa",
            "mapServices": "Mapové služby",
            "position": "Miesto",
            "root": "Hlavný",
            "tree": "Strom",
            "type": "Typ",
            "view": "Náhľad",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Činnosť názov",
            "activityperformer": "Činnosť vykonávateľ",
            "begindate": "Dátum začiatku",
            "enddate": "Dátum ukončenia",
            "processstatus": "Status",
            "user": "Uživateľ"
        },
        "importexport": {
            "database": {
                "uri": "Database URI",
                "user": "Database Užívateľ"
            },
            "downloadreport": "Prevziať správu",
            "emailfailure": "Pri odosielaní e-mailu sa vyskytla chyba!",
            "emailmessage": "Priložený prehľad importu súboru \"{0}\" v dátume {1}",
            "emailsubject": "Import údajov správy",
            "emailsuccess": "E-mail bol úspešne odoslaný!",
            "export": "Export",
            "exportalldata": "Všetky údaje",
            "exportfiltereddata": "Iba údaje zodpovedajúce tabuľkovému filtru",
            "gis": {
                "shapeimportdisabled": "Import tvarov nie je pre túto šablónu povolený",
                "shapeimportenabled": "Konfigurácia importu tvarov"
            },
            "ifc": {
                "card": "Karta",
                "project": "Projekt",
                "sourcetype": "Import z"
            },
            "import": "Import",
            "importresponse": "Importovať odpoveď",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Chyby",
                "linenumber": "Číslo riadku",
                "message": "Správa",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Spracované riadky",
                "recordnumber": "Číslo záznamu",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Odoslať správu",
            "template": "Šablóna",
            "templatedefinition": "Definícia šablóny"
        },
        "joinviews": {
            "active": "Aktívny",
            "addview": "Pridať pohľad",
            "alias": "Alias",
            "attribute": "Atribút",
            "attributes": "Atribúty",
            "attributesof": "Atribúty: {0}",
            "createview": "Vytvoriť pohľad",
            "datasorting": "Triedenie údajov",
            "delete": "Odstrániť",
            "deleteview": "Odstrániť zobrazenie",
            "deleteviewconfirm": "Naozaj chcete odstrániť toto zobrazenie?",
            "description": "Popis",
            "disable": "Zakázať",
            "domainalias": "Alias ​​domény",
            "domainsof": "Domén {0}",
            "edit": "Upraviť",
            "editview": "Upraviť konfiguráciu zobrazenia",
            "enable": "Povoliť",
            "fieldsets": "Skupiny polí",
            "filters": "Filtre",
            "generalproperties": "Všeobecné vlastnosti",
            "group": "Skupina",
            "innerjoin": "Vnútorné spojenie",
            "jointype": "Typ spojenia",
            "joinview": "Pohľad zo spojenia",
            "klass": "Trieda",
            "manageview": "Spravovať zobrazenie",
            "masterclass": "Master trieda",
            "masterclassalias": "Master trieda alias",
            "name": "Názov",
            "newjoinview": "Nové zobrazenie zo spojenia",
            "outerjoin": "Vonkajšie spojenie",
            "pleaseseleceavalidmasterclass": "Vyberte platnú master triedu",
            "refreshafteredit": "Chcete obnoviť stránku, aby ste videli zmeny?",
            "selectatleastoneattribute": "Vyberte aspoň jeden atribút, ktorý sa má zobraziť v tabuľke a v zmenšenej tabuľke v kroku 4.",
            "showingrid": "Zobraziť v tabuľke",
            "showinreducedgrid": "Zbraziť v zmenšenej tabuľke",
            "targetalias": "Alias ​​cieľovej triedy"
        },
        "login": {
            "buttons": {
                "login": "Prihlásiť",
                "logout": "Zmeniť uživateľa"
            },
            "fields": {
                "group": "Skupina",
                "language": "Jazyk",
                "password": "Heslo",
                "tenants": "Mandant",
                "username": "Uživateľské meno"
            },
            "loggedin": "Prihlásený",
            "sso": {
                "loginfailure": "Chyba prihlásenia",
                "loginwith": "Prihlásenie s {0}",
                "or": "alebo"
            },
            "title": "Prihlásenie",
            "welcome": "Vitaj späť {0}."
        },
        "main": {
            "administrationmodule": "Administračný modul",
            "baseconfiguration": "Základná konfigurácia",
            "cardlock": {
                "lockedmessage": "Túto kartu nemôžete upraviť, pretože {0} sa práve edituje.",
                "someone": "niekto"
            },
            "changegroup": "Zmeniť skupinu",
            "changetenant": "Zmeniť {0}",
            "confirmchangegroup": "Ste si istí, že chcete zmeniť skupinu?",
            "confirmchangetenants": "Ste si istí, že chcete zmeniť aktívnych Mandantov?",
            "confirmdisabletenant": "Naozaj chcete vypnúť príznak \"Ignorovať Mandantov\"?",
            "confirmenabletenant": "Naozaj chcete zapnúť príznak \"Ignorovať Mandantov\"?",
            "ignoretenants": "Ignorovať {0}",
            "info": "Info",
            "logo": {
                "cmdbuild": "CMDBuild logo",
                "cmdbuildready2use": "CMDBuild READY2USE logo",
                "companylogo": "Logo spoločnosti",
                "openmaint": "openMAINT logo"
            },
            "logout": "Odhlásiť sa",
            "managementmodule": "Modul správy údajov",
            "multigroup": "Multi skupina",
            "multitenant": "Multi {0}",
            "navigation": "Navigácia",
            "pagenotfound": "Stránka nenájdená",
            "password": {
                "change": "Zmeniť heslo",
                "confirm": "Potvrdiť heslo",
                "email": "E-Mailová adresa",
                "err_confirm": "Heslo sa nezhoduje.",
                "err_diffprevious": "Heslo nemôže byť totožné s predchádzajúcim.",
                "err_diffusername": "Heslo nemôže byť totožné s používateľským menom.",
                "err_length": "Heslo musí mať najmenej {0} znakov.",
                "err_reqdigit": "Heslo musí obsahovať najmenej jednu číslicu.",
                "err_reqlowercase": "Heslo musí obsahovať najmenej jeden malý znak.",
                "err_requppercase": "Heslo musí obsahovať najmenej jeden veľký znak.",
                "expired": "Platnosť vášho hesla vypršala. Teraz to musíte zmeniť.",
                "forgotten": "Zabudol som svoje heslo",
                "new": "Nové heslo",
                "old": "Staré heslo",
                "recoverysuccess": "Poslali sme vám e-mail s pokynmi na obnovenie hesla.",
                "reset": "Obnoviť heslo",
                "saved": "Heslo bolo správne uložené!"
            },
            "pleasecorrecterrors": "Opravte uvedené chyby!",
            "preferences": {
                "comma": "Desatinná Čiarka",
                "decimalserror": "Pole desatinných miest musí byť zadané",
                "decimalstousandserror": "Oddeľovač desatinných miest a tisícok musí byť odlišný",
                "default": "Štandardná",
                "defaultvalue": "Štandardná hodnota",
                "firstdayofweek": "Prvý deň v týždni",
                "gridpreferencesclear": "Vymazať predvoľby tabuľky",
                "gridpreferencescleared": "Predvoľby tabuľky boli vymazané!",
                "gridpreferencessave": "Uložte predvoľby tabuľky",
                "gridpreferencessaved": "Predvoľby tabuľky boli uložené!",
                "gridpreferencesupdate": "Aktualizujte predvoľby tabuľky",
                "labelcsvseparator": "Oddeľovač CSV",
                "labeldateformat": "Formát dátumu",
                "labeldecimalsseparator": "Oddeľovač desatinných miest",
                "labellanguage": "Jazyk",
                "labelthousandsseparator": "Oddeľovač tisícok",
                "labeltimeformat": "Formát času",
                "msoffice": "Microsoft Office",
                "period": "Bodka",
                "preferredfilecharset": "Kódovanie CSV",
                "preferredofficesuite": "Preferovaný balík Office",
                "space": "Medzera",
                "thousandserror": "Pole tisícok musí byť zadané",
                "timezone": "Časové pásmo",
                "twelvehourformat": "12-hodinový formát",
                "twentyfourhourformat": "24-hodinový formát"
            },
            "searchinallitems": "Vyhľadávať vo všetkých položkách",
            "selectdeselettenants": "Vybrať/Zrušiť všetko",
            "treenavcontenttitle": "{0} z {1}",
            "userpreferences": "Uživateľské nastavenia"
        },
        "menu": {
            "allitems": "Všetky položky",
            "classes": "Triedy",
            "custompages": "Vlastné stránky",
            "dashboards": "Info Panely",
            "processes": "Procesy",
            "reports": "Reporty",
            "views": "Pohľady"
        },
        "notes": {
            "edit": "Upraviť poznámky"
        },
        "notifier": {
            "attention": "Upozornenie",
            "error": "Chyba",
            "genericerror": "Všeobecná chyba",
            "genericinfo": "Všeobecné info",
            "genericwarning": "Všeobecné upozornenie",
            "info": "Info",
            "success": "Výsledok",
            "warning": "Výstraha"
        },
        "patches": {
            "apply": "Použite opravy",
            "category": "Kategória",
            "description": "Popis",
            "name": "Názov",
            "patches": "Opravy"
        },
        "processes": {
            "abortconfirmation": "Ste si istí, že chcete prerušiť tento proces?",
            "abortprocess": "Prerušiť proces",
            "action": {
                "advance": "Ďalej",
                "label": "Vykonať"
            },
            "activeprocesses": "Aktívne procesy",
            "allstatuses": "Všetky",
            "editactivity": "Upraviť aktivitu",
            "openactivity": "Otvoriť aktivitu",
            "startworkflow": "Štart",
            "workflow": "Workflow"
        },
        "relationGraph": {
            "activity": "činnosť",
            "allLabelsOnGraph": "všetky názvy v grafe",
            "card": "Karta",
            "cardList": "Zoznam kariet",
            "cardRelations": "Karta prepojení",
            "choosenaviagationtree": "Vyberte strom navigácie",
            "class": "Trieda",
            "classList": "Zoznam tried",
            "compoundnode": "Zlúčený uzol",
            "disable": "Deaktivovať",
            "edges": "Okraje",
            "enable": "Aktivovať",
            "labelsOnGraph": "Tooltip na graf",
            "level": "Úroveň",
            "nodes": "Uzly",
            "openRelationGraph": "Otvoriť graf prepojení",
            "qt": "Mn",
            "refresh": "Obnoviť",
            "relation": "prepojenie",
            "relationGraph": "Graf prepojení",
            "reopengraph": "Znovu otvoriť graf z tohto uzla"
        },
        "relations": {
            "adddetail": "Pridať podrobnosti",
            "addrelations": "Pridať prepojenia",
            "attributes": "Atribúty",
            "begindate": "Dátum začiatku",
            "code": "Kód",
            "deletedetail": "Odstrániť podrobnosti",
            "deleterelation": "Odstrániť prepojenie",
            "deleterelationconfirm": "Naozaj chcete odstrániť toto prepojenie?",
            "description": "Popis",
            "editcard": "Upraviť kartu",
            "editdetail": "Upraviť podrobnosti",
            "editrelation": "Upraviť prepojenie",
            "extendeddata": "Rozšírené údaje",
            "mditems": "položky",
            "missingattributes": "Chýbajú povinné atribúty",
            "opencard": "Otvoriť súvisiacu kartu",
            "opendetail": "Zobraziť podrobnosti",
            "type": "Typ"
        },
        "reports": {
            "csv": "CSV",
            "download": "Stiahnuť",
            "format": "Formát",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Tlačiť",
            "reload": "Opäť načítať",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Štandardná"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Denne"
                        },
                        "monthly": {
                            "description": "Mesačne"
                        },
                        "once": {
                            "description": "Raz"
                        },
                        "weekly": {
                            "description": "Týždenne"
                        },
                        "yearly": {
                            "description": "Ročne"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Štandardná"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Pridať Tematický okruh",
            "analysisType": "Typ analýzy",
            "attribute": "Atribút",
            "calculateRules": "Generovať pravidlá štýlu",
            "clearThematism": "Vymazať Tematický okruh",
            "color": "Farba",
            "defineLegend": "Definícia legendy",
            "defineThematism": "Definícia Tematického okruhu",
            "function": "Funkcia",
            "generate": "Generovať",
            "geoAttribute": "Geografický atribút",
            "graduated": "Delená",
            "highlightSelected": "Zvýrazniť vybratú položku",
            "intervals": "Intervaly",
            "legend": "Legenda",
            "name": "názov",
            "newThematism": "Nový Tematický okruh",
            "punctual": "Presné",
            "quantity": "Množstvo",
            "segments": "Segmenty",
            "source": "Zdroj",
            "table": "Tabuľka",
            "thematism": "Tematické okruhy",
            "value": "Hodnota"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Odísť bez uloženia",
                    "stayinedit": "Späť k editácii"
                },
                "savebeforeexit": "V prílohách sú neuložené zmeny. Chcete ich uložiť skôr ako skončíte?",
                "saveprocessmessage": "Prílohy je možné ukladať iba na existujúce karty. Stlačením na uloženie, inštancia procesu sa vytvorí z údajov zadaných vo formulári. "
            },
            "customform": {
                "addrow": "Pridať riadok",
                "clonerow": "Klonovať riadok",
                "datanotvalid": "Údaje nie sú platné",
                "deleterow": "Odstrániť riadok",
                "editrow": "Upraviť riadok",
                "export": "Export",
                "import": "Import",
                "importexport": {
                    "expattributes": "Údaje na export",
                    "file": "Súbor",
                    "filename": "Názov súboru",
                    "format": "Formát",
                    "importmode": "Režim importu",
                    "keyattributes": "Kľúčové atribúty",
                    "missingkeyattr": "Vyberte aspoň jeden kľúčový atribút",
                    "modeadd": "Pridať",
                    "modemerge": "Zlúčiť",
                    "modereplace": "Nahradiť",
                    "separator": "Oddeľovač"
                },
                "refresh": "Obnoviť predvolené hodnoty"
            },
            "linkcards": {
                "checkedonly": "Len kontrolované",
                "editcard": "Upraviť kartu",
                "opencard": "Otvoriť kartu",
                "refreshselection": "Použiť predvolený výber",
                "togglefilterdisabled": "Zapnúť grid filter",
                "togglefilterenabled": "Vypnúť grid filter"
            },
            "required": "Je povinná táto miniaplikácia"
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
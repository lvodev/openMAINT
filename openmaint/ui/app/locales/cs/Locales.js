(function() {
    Ext.define('CMDBuildUI.locales.cs.Locales', {
        "requires": ["CMDBuildUI.locales.cs.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "cs",
        "administration": CMDBuildUI.locales.cs.LocalesAdministration.administration,
        "attachments": {
            "add": "Přidat přílohu",
            "attachmenthistory": "Historie přílohy",
            "author": "Autor",
            "browse": "Prohlížet &hellip;",
            "category": "Kategorie",
            "code": "Kód",
            "creationdate": "Datum vytvoření",
            "deleteattachment": "Smazat přílohu",
            "deleteattachment_confirmation": "Opravdu chcete odstranit tuto přílohu?",
            "description": "Popis",
            "download": "Stáhnout",
            "dropfiles": "Sem přetáhněte soubory",
            "editattachment": "Upravit přílohu",
            "file": "Soubor",
            "filealreadyinlist": "Soubor {0} se již nachází v seznamu.",
            "filename": "Název souboru",
            "fileview": "Zobrazit přílohu",
            "invalidfiles": "Odstraňte neplatné soubory",
            "majorversion": "Hlavní verze",
            "maxsize": "Maximální povolená velikost souboru je {0} MB.",
            "metadata": "Metadata",
            "modificationdate": "Datum změny",
            "new": "Nová příloha",
            "nocategory": "Nezařazené",
            "preview": "Náhled",
            "removefile": "Odstranit soubor",
            "statuses": {
                "empty": "Prázdný soubor",
                "error": "Chyba",
                "extensionNotAllowed": "Přípona souboru není povolena",
                "loaded": "Načteny",
                "ready": "Připraven",
                "toolarge": "Příliš velký"
            },
            "successupload": "bylo nahraných {0} příloh.",
            "uploadfile": "Nahrát soubor ...",
            "version": "Verze",
            "viewhistory": "Zobrazit historii přílohy",
            "warningmessages": {
                "atleast": "Varování: byly načteny přílohy {0} typu \"{1}\". Tato kategorie očekává nejméně {2} přílohy",
                "exactlynumber": "Varování: byly načteny přílohy {0} typu \"{1}\". Tato kategorie očekává {2} přílohy",
                "maxnumber": "Varování: Byla načtena příloha typu {0} typu \"{1}\". Tato kategorie očekává nejvíce {2} přílohy"
            },
            "wrongfileextension": "přípona souboru {0} není povolena"
        },
        "bim": {
            "bimViewer": "BIM Prohlížeč",
            "card": {
                "label": "Karta"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Velikost ohraničeného boxu podél osy X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Velikost ohraničeného boxu podél osy Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Velikost ohraničeného boxu podél osy Z",
                "LARGEST_FACE_AREA": "Největší čelná plocha",
                "LARGEST_FACE_DIRECTION": "Největší čelná oblast",
                "SURFACE_AREA_ALONG_X": "Povrchová plocha podél osy X",
                "SURFACE_AREA_ALONG_Y": "Povrchová plocha podél osy Y",
                "SURFACE_AREA_ALONG_Z": "Povrchová plocha podél osy Z",
                "TOTAL_SHAPE_VOLUME": "Celkový objem modelu",
                "TOTAL_SURFACE_AREA": "Celková plocha",
                "WALKABLE_SURFACE_AREA": "Pochozí plocha povrchu",
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
                    "hideAll": "Skrýt všechny",
                    "showAll": "Zobrazit všechny"
                },
                "name": "Název",
                "qt": "Mn",
                "visibility": "Viditelnost"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Pohled zepředu",
                "mod": "Ovládací prvky prohlížeče",
                "orthographic": "Ortografická kamera",
                "pan": "Rolování",
                "perspective": "Perspektivní kamera",
                "resetView": "Obnovit pohled",
                "rotate": "Otočit",
                "sideView": "Pohled z boku",
                "topView": "Pohled shora"
            },
            "showBimCard": "Otevřít 3D prohlížeč",
            "tree": {
                "arrowTooltip": "Vybírat prvek",
                "columnLabel": "Strom",
                "label": "Strom-Hierarchicky",
                "open_card": "Otevřít související kartu",
                "root": "IFC Root"
            }
        },
        "bulkactions": {
            "abort": "Zrušit vybrané položky",
            "alertdownloadattachments": "Některé přílohy nebudou staženy, protože ještě nebyly uloženy na server",
            "alertnoattachmentsdownload": "Nebudou staženy žádné přílohy, protože ještě nebyly uloženy na server",
            "cancelselection": "Zrušit výběr",
            "confirmabort": "Rušíte {0} instance procesu. Jste si jistý, že chcete pokračovat?",
            "confirmdelete": "Odstraňujete {0} karet. Jste si jistý, že chcete pokračovat?",
            "confirmdeleteattachements": "Odstraňujete přílohy {0}. Jste si jistý, že chcete pokračovat?",
            "confirmedit": "Upravujete {0} pro {1} karty. Jste si jistý, že chcete pokračovat?",
            "delete": "Odstranit vybrané položky",
            "download": "Stáhnout vybrané přílohy",
            "downloadall": "Stáhnout všechny přílohy",
            "edit": "Upravit vybrané položky",
            "selectall": "Vybírat všechny položky"
        },
        "calendar": {
            "active_expired": "Aktivní / prodlením",
            "add": "Přidat",
            "advancenotification": "Předběžné oznámení",
            "allcategories": "Všechny kategorie",
            "alldates": "Všechna data",
            "associatedcard": "Přidružená karta",
            "calculated": "Počítáno",
            "calendar": "Kalendář",
            "cancel": "Označit jako zrušené",
            "category": "Kategorie",
            "class": "Třída",
            "cm_confirmcancel": "Opravdu chcete označit jako zrušené vybrané plány?",
            "cm_confirmcomplete": "Opravdu chcete označit jako dokončené vybrané plány?",
            "cm_markcancelled": "Označit vybrané plány jako zrušené",
            "cm_markcomplete": "Označit vybrané plány jako dokončené",
            "complete": "Označit jako vykonáno",
            "completed": "Dokončené",
            "date": "Datum",
            "days": "Dny",
            "delaybeforedeadline": "Zpoždění před termínem",
            "delaybeforedeadlinevalue": "Zpoždění před termínem - Hodnota",
            "description": "Popis",
            "editevent": "Upravit plán",
            "enddate": "Datum ukončení",
            "endtype": "Typ ukončení",
            "event": "Plán",
            "executiondate": "Datum provedení",
            "frequency": "Frekvence",
            "frequencymultiplier": "Frekvence multiplikátor",
            "grid": "Tabulka",
            "leftdays": "Sní do",
            "londdescription": "Úplný popis",
            "manual": "Ručně",
            "maxactiveevents": "Maximální počet aktivních událostí",
            "messagebodydelete": "Chcete odstranit pravidlo plánovače?",
            "messagebodyplural": "Existují {0} pravidla plánování",
            "messagebodyrecalculate": "Chcete přepočítat pravidlo plánů s novým datem?",
            "messagebodysingular": "Existuje {0} pravidlo plánování",
            "messagetitle": "Plán přepočet",
            "missingdays": "Chybějící dny",
            "next30days": "Dalších 30 dní",
            "next7days": "Dalších 7 dní",
            "notificationtemplate": "Šablona použitá na notifikaci",
            "notificationtext": "Text oznámení",
            "occurencies": "Počet událostí",
            "operation": "Provozní",
            "partecipantgroup": "Skupina účastníků",
            "partecipantuser": "Účastnický uživatel",
            "priority": "Priorita",
            "recalculate": "Přepočítat",
            "referent": "Referent",
            "scheduler": "Plánovač",
            "sequencepaneltitle": "Generovat plány",
            "startdate": "Datum začátku",
            "status": "Status",
            "today": "Dnes",
            "type": "Typ",
            "viewevent": "Zobrazit plán",
            "widgetcriterion": "Výpočtové kritérium",
            "widgetemails": "E-Maily",
            "widgetsourcecard": "Zdrojová karta"
        },
        "classes": {
            "cards": {
                "addcard": "Přidat kartu",
                "clone": "Klonovat",
                "clonewithrelations": "Klonovat kartu a propojení",
                "deletebeaware": "Uvědomte si, že:",
                "deleteblocked": "V odstranění není možné pokračovat, protože existují propojení s doménou {0}.",
                "deletecard": "Smazat kartu",
                "deleteconfirmation": "Opravdu chcete odstranit tuto kartu?",
                "deleterelatedcards": "Také bude odstraněných {0} propojených karet",
                "deleterelations": "propojení s {0} kartami budou odstraněny",
                "label": "Karty",
                "modifycard": "Upravit kartu",
                "opencard": "Otevřít kartu",
                "print": "Vytisknout kartu"
            },
            "simple": "Jednoduchá",
            "standard": "Wtandardní"
        },
        "common": {
            "actions": {
                "add": "Přidat",
                "apply": "Použít",
                "cancel": "Zrušit",
                "close": "Zavřít",
                "delete": "Smazat",
                "edit": "Upravit",
                "execute": "Provést",
                "help": "Pomoc",
                "load": "Načíst",
                "open": "Otevřít",
                "refresh": "Obnovit údaje",
                "remove": "Odstranit",
                "save": "Uložit",
                "saveandapply": "Uložit a použít",
                "saveandclose": "Uložit a zavřít",
                "search": "Vyhledávání",
                "searchtext": "Vyhledat ..."
            },
            "attributes": {
                "nogroup": "Základní údaje"
            },
            "dates": {
                "date": "d/m/R",
                "datetime": "d/m/R H:m:s",
                "time": "H:m:s"
            },
            "editor": {
                "clearhtml": "Clear HTML",
                "expand": "Rozbalit editor",
                "reduce": "Zmenšit editor",
                "signature": "Přidat podpis",
                "unlink": "Odpojit",
                "unlinkmessage": "Transformujte vybraný hypertextový odkaz na text."
            },
            "grid": {
                "disablemultiselection": "Zakázat výběr více položek",
                "enamblemultiselection": "Povolit výběr více položek",
                "export": "Exportovat údaje",
                "filterremoved": "Aktuální filtr byl odstraněn",
                "import": "Importovat údaje",
                "itemnotfound": "Položka nebyla nalezena",
                "list": "Seznam",
                "opencontextualmenu": "Otevřít kontextové menu",
                "print": "Tisknout",
                "printcsv": "Tisk jako CSV",
                "printodt": "Tisk jako ODT",
                "printpdf": "Tisk jako PDF",
                "row": "Položka",
                "rows": "Položky",
                "subtype": "Podtyp"
            },
            "tabs": {
                "activity": "Činnost",
                "attachment": "Příloha",
                "attachments": "Přílohy",
                "card": "Karta",
                "clonerelationmode": "Režim klonování propojení",
                "details": "Podrobnosti",
                "emails": "E-Maily",
                "history": "Historie",
                "notes": "Poznámky",
                "relations": "Propojení",
                "schedules": "Plány"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Stáhnout graf",
                "gridhide": "Skrýt tabulku údajů",
                "gridshow": "Zobrazit tabulku údajů",
                "openinpopup": "Otvřít v popup okně",
                "parametershide": "Skrýt parametry údajů",
                "parametersshow": "Zobrazit tabulku parametrů",
                "reload": "Opět načíst"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Přidat přílohy z archivu dokumentů",
            "alredyexistfile": "Soubor s tímto názvem již existuje",
            "archivingdate": "Datum archivování",
            "attachfile": "Přiložit soubor",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Vytvořit e-mail",
            "composefromtemplate": "Vytvořit ze šablony",
            "delay": "Zpoždění",
            "delays": {
                "day1": "Za 1 den",
                "days2": "Za 2 dny",
                "days4": "Za 4 dny",
                "hour1": "1 hodinu",
                "hours2": "2 hodiny",
                "hours4": "4 hodiny",
                "month1": "Za 1 měsíc",
                "negativeday1": "1 den předtím",
                "negativedays2": "2 dny předtím",
                "negativedays4": "4 dny předtím",
                "negativehour1": "1 hodinu předtím",
                "negativehours2": "2 hodiny předtím",
                "negativehours4": "4 hodiny předtím",
                "negativemonth1": "1 měsíc předtím",
                "negativeweek1": "1 týden předtím",
                "negativeweeks2": "2 týdny předtím",
                "none": "Žádné",
                "week1": "Za 1 týden",
                "weeks2": "Za 2 týdny"
            },
            "dmspaneltitle": "Vyberte přílohy z databáze",
            "edit": "Upravit",
            "from": "Od",
            "gridrefresh": "Obnovit tabulku",
            "keepsynchronization": "Ponechat synchronizaci",
            "message": "Zpráva",
            "regenerateallemails": "Obnovit všechny E-maily",
            "regenerateemail": "Obnovit E-mail",
            "remove": "Odstranit",
            "remove_confirmation": "Opravdu chcete odstranit tento e-mail?",
            "reply": "Odpovědět",
            "replyprefix": "Na {0}, {1} napsal:",
            "selectaclass": "Vybírat třídu",
            "sendemail": "Odeslat E-Mail",
            "signature": "Podpis",
            "statuses": {
                "draft": "Návrh",
                "error": "Chyba",
                "outgoing": "Odesílané",
                "received": "Přijaté",
                "sent": "Odeslané"
            },
            "subject": "Předmět",
            "to": "Komu",
            "view": "Náhled"
        },
        "errors": {
            "autherror": "Chybné uživatelské jméno nebo heslo",
            "classnotfound": "Třída {0} se nenašla",
            "fieldrequired": "Toto pole je povinné",
            "invalidfilter": "Neplatný filtr",
            "notfound": "Položka se nenašla"
        },
        "filters": {
            "actions": "Akce",
            "addfilter": "Přidat filtr",
            "any": "Který koliv",
            "attachments": "Přílohy",
            "attachmentssearchtext": "Přílohy text vyhledávání",
            "attribute": "Zvolit atribut",
            "attributes": "Atributy",
            "clearfilter": "Vynulovat filtr",
            "clone": "Klonovat",
            "copyof": "Kopie",
            "currentgroup": "Aktuální skupina",
            "currentuser": "Aktuální uživatel",
            "defaultset": "Nastavit jako výchozí",
            "defaultunset": "Zrušit výchozí nastavení",
            "description": "Popis",
            "domain": "Doména",
            "errorname": "Název filtru se již používá",
            "filterdata": "Filtrovat údaje",
            "fromfilter": "Z filtru",
            "fromselection": "Z výběru",
            "group": "Skupina",
            "ignore": "Ignorovat",
            "migrate": "Migrovat",
            "name": "Název",
            "newfilter": "Nový filtr",
            "noone": "Žádný",
            "operator": "Pravidla",
            "operators": {
                "beginswith": "Začíná s",
                "between": "Mezi",
                "contained": "Obsažený",
                "containedorequal": "Obsažený nebo rovný",
                "contains": "Obsahuje",
                "containsorequal": "Obsahuje nebo rovné",
                "descriptionbegin": "Popis začíná s",
                "descriptioncontains": "Popis obsahuje",
                "descriptionends": "Popis končí s",
                "descriptionnotbegin": "Popis se nezačíná s",
                "descriptionnotcontain": "Popis neobsahuje",
                "descriptionnotends": "Popis nekončí s",
                "different": "Neshodný",
                "doesnotbeginwith": "Nezačíná s",
                "doesnotcontain": "Neobsahuje",
                "doesnotendwith": "Nekončí s",
                "endswith": "Končí s",
                "equals": "Rovná se",
                "greaterthan": "Větší než",
                "isnotnull": "Není prázdný",
                "isnull": "Je prázdný",
                "lessthan": "Méně než"
            },
            "relations": "Propojení",
            "type": "Typ",
            "typeinput": "Vstupní parametr",
            "user": "Uživatel",
            "value": "Hodnota"
        },
        "gis": {
            "card": "Karta",
            "cardsMenu": "Nabídka karet",
            "code": "Kód",
            "description": "Popis",
            "extension": {
                "errorCall": "Chyba",
                "noResults": "Žádné výsledky"
            },
            "externalServices": "Externí služby",
            "geographicalAttributes": "Geografické atributy",
            "geoserverLayers": "Geoserver vrstvy",
            "layers": "Vrstvy",
            "list": "Seznam",
            "longpresstitle": "Geografické elementy v oblasti",
            "map": "Mapa",
            "mapServices": "Mapové služby",
            "position": "Místo",
            "root": "Hlavní",
            "tree": "Strom-Hierarchicky",
            "type": "Typ",
            "view": "Náhled",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Činnost název",
            "activityperformer": "Činnost vykonavatel",
            "begindate": "Datum začátku",
            "enddate": "Datum ukončení",
            "processstatus": "Status",
            "user": "Uživatel"
        },
        "importexport": {
            "database": {
                "uri": "Database URI",
                "user": "Database Uživatel"
            },
            "downloadreport": "Převzít správu",
            "emailfailure": "Při odesílání e-mailu se vyskytla chyba!",
            "emailmessage": "Přiložený přehled importu souboru \"{0}\" v datu {1}",
            "emailsubject": "Import údajů zprávy",
            "emailsuccess": "E-mail byl úspěšně odeslán!",
            "export": "Export",
            "exportalldata": "Všechny údaje",
            "exportfiltereddata": "Pouze údaje odpovídající tabulkovému filtru",
            "gis": {
                "shapeimportdisabled": "Import tvarů není pro tuto šablonu povolen",
                "shapeimportenabled": "Konfigurace importu tvarů"
            },
            "ifc": {
                "card": "Karta",
                "project": "Projekt",
                "sourcetype": "Import z"
            },
            "import": "Import",
            "importresponse": "Importovat odpověď",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Chyby",
                "linenumber": "Číslo řádku",
                "message": "Zpráva",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Zpracované řádky",
                "recordnumber": "Číslo záznamu",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Odeslat zprávu",
            "template": "Šablona",
            "templatedefinition": "Definice šablony"
        },
        "joinviews": {
            "active": "Aktivní",
            "addview": "Přidat pohled",
            "alias": "Alias",
            "attribute": "Atribut",
            "attributes": "Atributy",
            "attributesof": "Atributy: {0}",
            "createview": "Vytvořit pohled",
            "datasorting": "Setřídit údaje",
            "delete": "Odstranit",
            "deleteview": "Odstranit pohled",
            "deleteviewconfirm": "Opravdu chcete odstranit tento pohled?",
            "description": "Popis",
            "disable": "Zakázat",
            "domainalias": "Alias domény",
            "domainsof": "Domény {0}",
            "edit": "Upravit",
            "editview": "Upravit konfiguraci zobrazení",
            "enable": "Povolit",
            "fieldsets": "Skupiny polí",
            "filters": "Filtry",
            "generalproperties": "Obecné vlastnosti",
            "group": "Skupina",
            "innerjoin": "Vnitřní spojení",
            "jointype": "Typ spojení",
            "joinview": "Pohled ze spojení",
            "klass": "Třída",
            "manageview": "Spravovat pohledy",
            "masterclass": "Master třída",
            "masterclassalias": "Master třída alias",
            "name": "Názov",
            "newjoinview": "Nový pohled ze spojení",
            "outerjoin": "Vnější spojení",
            "pleaseseleceavalidmasterclass": "Vyberte platnou master třídu",
            "refreshafteredit": "Chcete obnovit stránku, abyste viděli změny?",
            "selectatleastoneattribute": "Vyberte alespoň jeden atribut, který se má zobrazit v tabulce a ve zmenšené tabulce v kroku 4.",
            "showingrid": "Zobrazit v tabulce",
            "showinreducedgrid": "Zobrazit v zmenšené tabulce",
            "targetalias": "Alias ​​cílové třídy"
        },
        "login": {
            "buttons": {
                "login": "Přihlásit",
                "logout": "Změnit uživatele"
            },
            "fields": {
                "group": "Skupina",
                "language": "Jazyk",
                "password": "Heslo",
                "tenants": "Mandant",
                "username": "Uživatelské jméno"
            },
            "loggedin": "Přihlášený",
            "sso": {
                "loginfailure": "Selhání přihlášení",
                "loginwith": "Přihlášení se {0}",
                "or": "nebo"
            },
            "title": "Přihlášení",
            "welcome": "Vítej zpět {0}."
        },
        "main": {
            "administrationmodule": "Administrační modul",
            "baseconfiguration": "Základní konfigurace",
            "cardlock": {
                "lockedmessage": "Tuto kartu nemůžete upravit, protože {0} se právě edituje.",
                "someone": "někdo"
            },
            "changegroup": "Změnit skupinu",
            "changetenant": "Změnit {0}",
            "confirmchangegroup": "Jste si jisti, že chcete změnit skupinu?",
            "confirmchangetenants": "Jste si jisti, že chcete změnit aktivních mandanta?",
            "confirmdisabletenant": "Opravdu chcete vypnout příznak \"Ignorovat mandantem\"?",
            "confirmenabletenant": "Opravdu chcete zapnout příznak \"Ignorovat mandantem\"?",
            "ignoretenants": "Ignorovat {0}",
            "info": "Info",
            "logo": {
                "cmdbuild": "CMDBuild logo",
                "cmdbuildready2use": "CMDBuild Ready2Use logo",
                "companylogo": "Logo společnosti",
                "openmaint": "openMAINT logo"
            },
            "logout": "Odhlásit",
            "managementmodule": "Modul správy údajů",
            "multigroup": "Multi skupina",
            "multitenant": "Multi {0}",
            "navigation": "Navigace",
            "pagenotfound": "Stránka nenalezena",
            "password": {
                "change": "Změnit heslo",
                "confirm": "Potvrdit heslo",
                "email": "E-Mailová adresa",
                "err_confirm": "Heslo se neshoduje.",
                "err_diffprevious": "Heslo nemůže být totožné s předchozím.",
                "err_diffusername": "Heslo nemůže být totožné s uživatelským jménem.",
                "err_length": "Heslo musí mít nejméně {0} znaků.",
                "err_reqdigit": "Heslo musí obsahovat nejméně jednu číslici.",
                "err_reqlowercase": "Heslo musí obsahovat nejméně jeden malý znak.",
                "err_requppercase": "Heslo musí obsahovat nejméně jeden velký znak.",
                "expired": "Platnost vašeho hesla vypršela. Nyní to musíte změnit.",
                "forgotten": "Zapomněl jsem své heslo",
                "new": "Nové heslo",
                "old": "Staré heslo",
                "recoverysuccess": "Poslali jsme vám e-mail s pokyny pro obnovení hesla.",
                "reset": "Obnovit heslo",
                "saved": "Heslo bylo správně uloženo!"
            },
            "pleasecorrecterrors": "Opravte uvedené chyby!",
            "preferences": {
                "comma": "Desetinná čárka",
                "decimalserror": "Pole desetinných míst musí být zadáno",
                "decimalstousandserror": "Oddělovač desetinných míst a tisíců musí být odlišný",
                "default": "Standardní",
                "defaultvalue": "Standardní hodnota",
                "firstdayofweek": "První den v týdnu",
                "gridpreferencesclear": "Vymazat předvolby tabulky",
                "gridpreferencescleared": "Předvolby tabulky byly vymazány!",
                "gridpreferencessave": "Uložte předvolby tabulky",
                "gridpreferencessaved": "Předvolby tabulky byly uloženy!",
                "gridpreferencesupdate": "Aktualizujte předvolby tabulky",
                "labelcsvseparator": "Oddělovač CSV",
                "labeldateformat": "Formát data",
                "labeldecimalsseparator": "Oddělovač desetinných míst",
                "labellanguage": "Jazyk",
                "labelthousandsseparator": "Oddělovač tisíců",
                "labeltimeformat": "Formát času",
                "msoffice": "Microsoft Office",
                "period": "Tečka",
                "preferredfilecharset": "Kódování CSV",
                "preferredofficesuite": "Preferovaný balík Office",
                "space": "Mezera",
                "thousandserror": "Pole tisíců musí být zadáno",
                "timezone": "Časové pásmo",
                "twelvehourformat": "12hodinový formát",
                "twentyfourhourformat": "24hodinový formát"
            },
            "searchinallitems": "Vyhledávat ve všech položkách",
            "selectdeselettenants": "Vybrat/Zrušit výběr všech",
            "treenavcontenttitle": "{0} z {1}",
            "userpreferences": "Uživatelské nastavení"
        },
        "menu": {
            "allitems": "Všechny položky",
            "classes": "Třídy",
            "custompages": "Vlastní stránky",
            "dashboards": "Info panely",
            "processes": "Procesy",
            "reports": "Reporty",
            "views": "Pohledy"
        },
        "notes": {
            "edit": "Upravit poznámky"
        },
        "notifier": {
            "attention": "Upozornění",
            "error": "Chyba",
            "genericerror": "Obecná chyba",
            "genericinfo": "Obecné info",
            "genericwarning": "Obecné upozornění",
            "info": "Info",
            "success": "Výsledek",
            "warning": "Výstraha"
        },
        "patches": {
            "apply": "Použijte opravy",
            "category": "Kategorie",
            "description": "Popis",
            "name": "Název",
            "patches": "Opravy"
        },
        "processes": {
            "abortconfirmation": "Jste si jisti, že chcete přerušit tento proces?",
            "abortprocess": "Přerušit proces",
            "action": {
                "advance": "Dále",
                "label": "Provést"
            },
            "activeprocesses": "Aktivní procesy",
            "allstatuses": "Všechny",
            "editactivity": "Upravit aktivitu",
            "openactivity": "Otevřít aktivitu",
            "startworkflow": "Start",
            "workflow": "Workflow"
        },
        "relationGraph": {
            "activity": "činnost",
            "allLabelsOnGraph": "Všechny názvy v grafu",
            "card": "Karta",
            "cardList": "Seznam karet",
            "cardRelations": "Karta propojení",
            "choosenaviagationtree": "Vyberte strom navigace",
            "class": "Třída",
            "classList": "Seznam tříd",
            "compoundnode": "Sloučený uzel",
            "disable": "Deaktivovat",
            "edges": "Okraje",
            "enable": "Aktivovat",
            "labelsOnGraph": "Tooltip na graf",
            "level": "Úroveň",
            "nodes": "Uzly",
            "openRelationGraph": "Otevřít graf propojení",
            "qt": "Mn",
            "refresh": "Obnovit",
            "relation": "propojení",
            "relationGraph": "Graf propojení",
            "reopengraph": "Znovu otevřít graf z tohoto uzlu"
        },
        "relations": {
            "adddetail": "Přidat podrobnosti",
            "addrelations": "Přidat propojení",
            "attributes": "Atributy",
            "begindate": "Datum začátku",
            "code": "Kód",
            "deletedetail": "Odstranit podrobnosti",
            "deleterelation": "Odstranit propojení",
            "deleterelationconfirm": "Opravdu chcete odstranit toto propojení?",
            "description": "Popis",
            "editcard": "Upravit kartu",
            "editdetail": "Upravit podrobnosti",
            "editrelation": "Upravit propojení",
            "extendeddata": "Rozšířené údaje",
            "mditems": "Položky",
            "missingattributes": "Chybí povinné atributy",
            "opencard": "Otevřít související kartu",
            "opendetail": "Zobrazit podrobnosti",
            "type": "Typ"
        },
        "reports": {
            "csv": "CSV",
            "download": "Stáhnout",
            "format": "Formát",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Tisk",
            "reload": "Opět načíst",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Standardní"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Denně"
                        },
                        "monthly": {
                            "description": "Měsíčně"
                        },
                        "once": {
                            "description": "Jednou"
                        },
                        "weekly": {
                            "description": "Týdně"
                        },
                        "yearly": {
                            "description": "Rčně"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Standardní"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Přidat Tématický okruh",
            "analysisType": "Typ analýzy",
            "attribute": "Atribut",
            "calculateRules": "Generovat pravidla stylu",
            "clearThematism": "Vymazat Tématický okruh",
            "color": "Barva",
            "defineLegend": "Definice legendy",
            "defineThematism": "Definice tematického okruhu",
            "function": "Funkce",
            "generate": "Generovat",
            "geoAttribute": "Geografický atribut",
            "graduated": "Dělená",
            "highlightSelected": "Zvýraznit vybranou položku",
            "intervals": "Intervaly",
            "legend": "Legenda",
            "name": "název",
            "newThematism": "Nový Tématický okruh",
            "punctual": "Přesné",
            "quantity": "Množství",
            "segments": "Segmenty",
            "source": "Zdroj",
            "table": "Tabulka",
            "thematism": "Tematické okruhy",
            "value": "Hodnota"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Odejít bez uložení",
                    "stayinedit": "Zpět k úpravám"
                },
                "savebeforeexit": "V přílohách jsou neuložené změny. Chcete je uložit před ukončením?",
                "saveprocessmessage": "Přílohy lze ukládat pouze na stávající karty. Stisknutím tlačítka Uložit bude vytvořena instance procesu s údaji zadanými ve formuláři."
            },
            "customform": {
                "addrow": "Přidat řádek",
                "clonerow": "Klonovat řádek",
                "datanotvalid": "Údaje nejsou platné",
                "deleterow": "Odstranit řádek",
                "editrow": "Upravit řádek",
                "export": "Export",
                "import": "Import",
                "importexport": {
                    "expattributes": "Údaje na export",
                    "file": "Soubor",
                    "filename": "Název souboru",
                    "format": "Formát",
                    "importmode": "Režim importu",
                    "keyattributes": "Klíčové atributy",
                    "missingkeyattr": "Vyberte alespoň jeden klíčový atribut",
                    "modeadd": "Přidat",
                    "modemerge": "Sloučit",
                    "modereplace": "Nahradit",
                    "separator": "Oddělovač"
                },
                "refresh": "Obnovit výchozí hodnoty"
            },
            "linkcards": {
                "checkedonly": "Jen kontrolované",
                "editcard": "Upravit kartu",
                "opencard": "Otevřít kartu",
                "refreshselection": "Použít výchozí výběr",
                "togglefilterdisabled": "Zapnout grid filtr",
                "togglefilterenabled": "Vypnout grid filtr"
            },
            "required": "Je povinna tato miniaplikace"
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
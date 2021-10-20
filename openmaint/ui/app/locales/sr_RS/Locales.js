(function() {
    Ext.define('CMDBuildUI.locales.sr_RS.Locales', {
        "requires": ["CMDBuildUI.locales.sr_RS.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "sr_RS",
        "administration": CMDBuildUI.locales.sr_RS.LocalesAdministration.administration,
        "attachments": {
            "add": "Додај прилог",
            "attachmenthistory": "Историја прилога",
            "author": "Аутор",
            "browse": "Претрага и помоћ;",
            "category": "Категорија",
            "code": "Код",
            "creationdate": "Датум креирања",
            "deleteattachment": "Обриши прилог",
            "deleteattachment_confirmation": "Заиста желите да уклоните прилог?",
            "description": "Опис",
            "download": "Преузми",
            "dropfiles": "овде спустите датотеке",
            "editattachment": "Модификуј прилог",
            "file": "Датотека",
            "filealreadyinlist": "Датотека {0} је већ у листи",
            "filename": "Назив датотеке",
            "fileview": "Погледај прилог",
            "invalidfiles": "Уклони невалидне датотеке",
            "majorversion": "Главна верзија",
            "maxsize": "Максимално дозвољена величина датотеке је {0} МБ",
            "metadata": "<em>Metadata</em>",
            "modificationdate": "Датум измене",
            "new": "Нови прилог",
            "nocategory": "Некатегорисан",
            "preview": "Преглед",
            "removefile": "Уклони датотеку",
            "statuses": {
                "empty": "Празна датотека",
                "error": "Грешка",
                "extensionNotAllowed": "Екстензија није дозвољена",
                "loaded": "Учитано",
                "ready": "Спреман",
                "toolarge": "Превелико"
            },
            "successupload": "{0} прилога је послано",
            "uploadfile": "Пошаљи датотеку…",
            "version": "Верзија",
            "viewhistory": "Прикажи историју прилога",
            "warningmessages": {
                "atleast": "Пажња: учитано је {0} прилога типа ”{1}”. Најмање {2} прилога су неопходна за ову категорију.",
                "exactlynumber": "Пажња: учитано је {0} прилога типа ”{1}”. {2} прилога су неопходна за ову категорију.",
                "maxnumber": "Пажња: учитано је {0} прилога типа ”{1}”. Највише {2} прилога су дозвољена за ову категорију."
            },
            "wrongfileextension": "екстензија {0} није дозвољена"
        },
        "bim": {
            "bimViewer": "Bim приказ",
            "card": {
                "label": "Картица"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Димензија уоквирујуће зоне дуж X осе",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Димензија уоквирујуће зоне дуж Y осе",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Димензија уоквирујуће зоне дуж Z осе",
                "LARGEST_FACE_AREA": "Површина највеће стране",
                "LARGEST_FACE_DIRECTION": "Оријентација највеће странице",
                "SURFACE_AREA_ALONG_X": "Површина дуж X осе",
                "SURFACE_AREA_ALONG_Y": "Површина дуж Y осе",
                "SURFACE_AREA_ALONG_Z": "Површина дуж Z осе",
                "TOTAL_SHAPE_VOLUME": "Укупна запремина",
                "TOTAL_SURFACE_AREA": "Укупна површина",
                "WALKABLE_SURFACE_AREA": "Површина по којој је могуће кретање",
                "calculated": "Израчунато",
                "description": "Опис",
                "guid": "GUID",
                "label": "Особине",
                "name": "Назив",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Слојеви",
                "menu": {
                    "hideAll": "Сакриј све",
                    "showAll": "Прикажи све"
                },
                "name": "Назив",
                "qt": "Qt",
                "visibility": "Видљивост"
            },
            "menu": {
                "camera": "Камера",
                "frontView": "Приказ спреда",
                "mod": "Контроле приказа",
                "orthographic": "Ортографска камера",
                "pan": "Померање",
                "perspective": "Перспективна камера",
                "resetView": "Ресетуј приказ",
                "rotate": "Ротирај",
                "sideView": "Приказ са стране",
                "topView": "Приказ од горе"
            },
            "showBimCard": "Отвори 3Д приказ",
            "tree": {
                "arrowTooltip": "Изабери елемент",
                "columnLabel": "Стабло",
                "label": "Стабло",
                "open_card": "Отвори припадајућу картицу",
                "root": "Ifc корен"
            }
        },
        "bulkactions": {
            "abort": "Одбаци означене ставке",
            "alertdownloadattachments": "<em>Some attachments will not be downloaded because they have not yet been saved to the server</em>",
            "alertnoattachmentsdownload": "<em>No attachments will not be downloaded because they have not yet been saved to the server</em>",
            "cancelselection": "Поништи избор",
            "confirmabort": "Прекидате извршавање {0} инстанци процеса. Да ли сте сигурни да желите да наставите?",
            "confirmdelete": "Бришете {0} картица. Да ли сте сигурни да желите да наставите?",
            "confirmdeleteattachements": "Бришете {0} прилога. Да ли сте сигурни да желите да наставите?",
            "confirmedit": "Вршите измену на {0} од {1} картица. Да ли сте сигурни да желите да наставите?",
            "delete": "Обриши означене ставке",
            "download": "Преузми означене прилоге",
            "downloadall": "<em>Download all attachments</em>",
            "edit": "Измени означене ставке",
            "selectall": "Означи све ставке"
        },
        "calendar": {
            "active_expired": "Активно/Истекло",
            "add": "Додај",
            "advancenotification": "Обавештење унапред",
            "allcategories": "Све категорије",
            "alldates": "Сви датуми",
            "associatedcard": "<em>Associated card</em>",
            "calculated": "Израчунато",
            "calendar": "Календар",
            "cancel": "Означи као отказано",
            "category": "Категорија",
            "class": "<em>Class</em>",
            "cm_confirmcancel": "Да ли сте сигурни да желите да означите селектоване распореде као отказане?",
            "cm_confirmcomplete": "Да ли сте сигурни да желите да означите селектоване распореде као завршене?",
            "cm_markcancelled": "Означи селектоване распореде отказаним",
            "cm_markcomplete": "Означи селектоване распореде завршеним",
            "complete": "Завршен",
            "completed": "Завршено",
            "date": "Датум",
            "days": "Дани",
            "delaybeforedeadline": "Одлагање пре рока",
            "delaybeforedeadlinevalue": "Вредност одлагања пре рока",
            "description": "Опис",
            "editevent": "Измени распоред",
            "enddate": "Датум завршетка",
            "endtype": "Завршни тип",
            "event": "Закажи догађај",
            "executiondate": "Датум извршавања",
            "frequency": "Фреквенција",
            "frequencymultiplier": "Множач фреквенције",
            "grid": "Табела",
            "leftdays": "Преостало дана",
            "londdescription": "Пуни опис",
            "manual": "Ручно",
            "maxactiveevents": "Максималан број активних догађаја",
            "messagebodydelete": "Да ли желите да уклоните правило за планирање?",
            "messagebodyplural": "Постоји {0} правила за планирање",
            "messagebodyrecalculate": "Да ли желите да прерачунате правило планирања узимајући у обзоир нови датум?",
            "messagebodysingular": "Постоји {0} правила за планирање",
            "messagetitle": "Прерачунавање распореда",
            "missingdays": "Недостајући дани",
            "next30days": "Наредних 30 дана",
            "next7days": "Наредних 7 дана",
            "notificationtemplate": "Образац коришћен за обавештења",
            "notificationtext": "Текст обавештења",
            "occurencies": "Број понављања",
            "operation": "Операција",
            "partecipantgroup": "Група учесника",
            "partecipantuser": "Учесник",
            "priority": "Приоритет",
            "recalculate": "Прерачунај",
            "referent": "Референт",
            "scheduler": "Планер",
            "sequencepaneltitle": "Генериши распоред",
            "startdate": "Датум почетка",
            "status": "Статус",
            "today": "Данас",
            "type": "Тип",
            "viewevent": "Прикажи распоред",
            "widgetcriterion": "Критеријум за калкулацију",
            "widgetemails": "е-мејл адресе",
            "widgetsourcecard": "Полазна картица"
        },
        "classes": {
            "cards": {
                "addcard": "Додај картицу",
                "clone": "Клонирај",
                "clonewithrelations": "Клонирај картицу и релације",
                "deletebeaware": "Обратите пажњу на:",
                "deleteblocked": "Брисање не може бити настављено јер постоје релације са {0}",
                "deletecard": "Уклони картицу",
                "deleteconfirmation": "Заиста желите да обришете картицу?",
                "deleterelatedcards": "биће обрисано и {0} повезаних картица",
                "deleterelations": "релације са {0} картица ће бити обрисане",
                "label": "Картице података",
                "modifycard": "Измени картицу",
                "opencard": "Отвори картицу",
                "print": "Штампај картицу"
            },
            "simple": "Једноставна",
            "standard": "Стандардна"
        },
        "common": {
            "actions": {
                "add": "Додај",
                "apply": "Примени",
                "cancel": "Одустани",
                "close": "Затвори",
                "delete": "Уклони",
                "edit": "Измени",
                "execute": "Изврши",
                "help": "Помоћ",
                "load": "Учитај",
                "open": "Отвори",
                "refresh": "Освежи податке",
                "remove": "Уклони",
                "save": "Сними",
                "saveandapply": "Сними и примени",
                "saveandclose": "Сними и затвори",
                "search": "Претрага",
                "searchtext": "Претрага…"
            },
            "attributes": {
                "nogroup": "Основни подаци"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Чист ХТМЛ",
                "expand": "Прошири едитор",
                "reduce": "Смањи едитор",
                "signature": "<em>Add signature</em>",
                "unlink": "Уклони везу",
                "unlinkmessage": "Конвертуј хиперлинк у текст"
            },
            "grid": {
                "disablemultiselection": "Онемугићи вишеструко селектовање",
                "enamblemultiselection": "Омогући вишеструко селектовање",
                "export": "Извези податке",
                "filterremoved": "Тренутни филтер је уклоњен",
                "import": "Увези податке",
                "itemnotfound": "Елемент није пронађен",
                "list": "Листа",
                "opencontextualmenu": "Отвори контекстни мени",
                "print": "Штампај",
                "printcsv": "Штампај као CSV",
                "printodt": "Штампај као ODT",
                "printpdf": "Штампај као PDF",
                "row": "Ставка",
                "rows": "Ставке",
                "subtype": "Подтип"
            },
            "tabs": {
                "activity": "Активност",
                "attachment": "Прилог",
                "attachments": "Прилози",
                "card": "Картица",
                "clonerelationmode": "Режим клонирања релација",
                "details": "Детаљи",
                "emails": "Е-маилови",
                "history": "Историја",
                "notes": "Напомене",
                "relations": "Релације",
                "schedules": "Распореди"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Графикон преузимања",
                "gridhide": "Сакриј табелу података",
                "gridshow": "Прикажи табелу података",
                "openinpopup": "Отвори у popup прозору",
                "parametershide": "Сакриј параметре података",
                "parametersshow": "Прикажи параметре података",
                "reload": "Поново учитај"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Додај прилог из архиве докумената",
            "alredyexistfile": "Датотека с овим именом већ постоји",
            "archivingdate": "Датум архивирања",
            "attachfile": "Приложи датотеку",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Креирај е-пошту",
            "composefromtemplate": "Креирај из обрасца",
            "delay": "Одлагање",
            "delays": {
                "day1": "За 1 дан",
                "days2": "За 2 дана",
                "days4": "За 4 дана",
                "hour1": "1 сат",
                "hours2": "2 сата",
                "hours4": "4 сата",
                "month1": "За 1 месец",
                "negativeday1": "1 дан пре",
                "negativedays2": "2 дана пре",
                "negativedays4": "4 дана прe",
                "negativehour1": "1 сат пре",
                "negativehours2": "2 сата пре",
                "negativehours4": "4 сата пре",
                "negativemonth1": "1 месец пре",
                "negativeweek1": "1 недељу пре",
                "negativeweeks2": "2 недеље пре",
                "none": "Без",
                "week1": "За 1 недељу",
                "weeks2": "За 2 недељу"
            },
            "dmspaneltitle": "Изабери прилог из базе података",
            "edit": "Измени",
            "from": "Од",
            "gridrefresh": "Освежи мрежу",
            "keepsynchronization": "Одржавај синхронизовано",
            "message": "Порука",
            "regenerateallemails": "Генериши све емаилове поново",
            "regenerateemail": "Изнова генериши е-пошту",
            "remove": "Уклони",
            "remove_confirmation": "Заиста желите да уклоните овај е-маил?",
            "reply": "Одговори",
            "replyprefix": "{0}, {1} је написао",
            "selectaclass": "Изабери класу",
            "sendemail": "Пошаљи е-пошту",
            "signature": "<em>Signature</em>",
            "statuses": {
                "draft": "Започете",
                "error": "Грешка",
                "outgoing": "За слање",
                "received": "Примљене",
                "sent": "Послане"
            },
            "subject": "Субјекат",
            "to": "За",
            "view": "Приказ"
        },
        "errors": {
            "autherror": "Погрешно корисничко име и/или лозинка",
            "classnotfound": "Класа {0} не постоји",
            "fieldrequired": "Поље је обавезно",
            "invalidfilter": "Невалидан филтер",
            "notfound": "Елемент није пронађен"
        },
        "filters": {
            "actions": "Акције",
            "addfilter": "Додај филтер",
            "any": "Било који",
            "attachments": "Прилози",
            "attachmentssearchtext": "Текст за претрагу прилога",
            "attribute": "Изабери атрибут",
            "attributes": "Атрибути",
            "clearfilter": "Очисти филтер",
            "clone": "Клонирај",
            "copyof": "Копија",
            "currentgroup": "Тренутна група",
            "currentuser": "Тренутни корисник",
            "defaultset": "Постави као подразумевану",
            "defaultunset": "Уклони као подразумевану",
            "description": "Опис",
            "domain": "Релација",
            "errorname": "<em>Filter name already in use</em>",
            "filterdata": "Филтрирај податке",
            "fromfilter": "Из филтера",
            "fromselection": "Из селекције",
            "group": "Група",
            "ignore": "Игнориши",
            "migrate": "Премешта",
            "name": "Назив",
            "newfilter": "Нови филтер",
            "noone": "Ниједан",
            "operator": "Оператор",
            "operators": {
                "beginswith": "Који почињу са",
                "between": "Између",
                "contained": "Садржан",
                "containedorequal": "Садржан или једнак",
                "contains": "Садржи",
                "containsorequal": "Садржи или је једнак",
                "descriptionbegin": "Опис почиње са",
                "descriptioncontains": "Опис садржи",
                "descriptionends": "Опис завршава са",
                "descriptionnotbegin": "Опис не почиње са",
                "descriptionnotcontain": "Опис не садржи",
                "descriptionnotends": "Опис не завршава са",
                "different": "Различите од",
                "doesnotbeginwith": "Који не почињу са",
                "doesnotcontain": "Који не садрже",
                "doesnotendwith": "Не завршава са",
                "endswith": "Завршава са",
                "equals": "Једнаке",
                "greaterthan": "Веће",
                "isnotnull": "Не може бити null",
                "isnull": "Са null вредношћу",
                "lessthan": "Мање"
            },
            "relations": "Релације",
            "type": "Тип",
            "typeinput": "Улазни параметар",
            "user": "Корисник",
            "value": "Вредности"
        },
        "gis": {
            "card": "Картица",
            "cardsMenu": "Мени картица",
            "code": "Код",
            "description": "Опис",
            "extension": {
                "errorCall": "Грешка",
                "noResults": "Нема резултата"
            },
            "externalServices": "Спољни сервиси",
            "geographicalAttributes": "Географски атрибути",
            "geoserverLayers": "Geoserver слојеви",
            "layers": "Слојеви",
            "list": "Листа",
            "longpresstitle": "Геоелементи у зони",
            "map": "Мапа",
            "mapServices": "Сервиси мапа",
            "position": "Позиција",
            "root": "Корен",
            "tree": "Стабло навигације",
            "type": "Тип",
            "view": "Приказ",
            "zoom": "Увећање"
        },
        "history": {
            "activityname": "Назив активности",
            "activityperformer": "Извршилац активности",
            "begindate": "Датум почетка",
            "enddate": "Датум завршетка",
            "processstatus": "Статус",
            "user": "Корисник"
        },
        "importexport": {
            "database": {
                "uri": "URI базе података",
                "user": "Корисничко име за базу података"
            },
            "downloadreport": "Преузми извештај",
            "emailfailure": "Грешка приликом слања е-маила",
            "emailmessage": "Извештај о импортовању датотекте {0} приложен уз датум {1}",
            "emailsubject": "Увези извештај с подацима",
            "emailsuccess": "Е-маил је успешно послан",
            "export": "Извези",
            "exportalldata": "Све податке",
            "exportfiltereddata": "Само податке који одговарају филтеру у табели",
            "gis": {
                "shapeimportdisabled": "Увоз облика није дозвољен за овај образац",
                "shapeimportenabled": "Подешавање увоза облика"
            },
            "ifc": {
                "card": "Картица",
                "project": "Пројекат",
                "sourcetype": "Увоз из"
            },
            "import": "Увези",
            "importresponse": "Увези одговор",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Грешке",
                "linenumber": "Број линије",
                "message": "Порука",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Обрађени редови",
                "recordnumber": "Број записа",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Пошаљи извештај",
            "template": "Шаблон",
            "templatedefinition": "Дефиниција шаблона"
        },
        "joinviews": {
            "active": "Активан",
            "addview": "Додај поглед",
            "alias": "Алијас",
            "attribute": "Атрибут",
            "attributes": "Атрибути",
            "attributesof": "Атрибути од {0}",
            "createview": "Креирај поглед",
            "datasorting": "Сортирања података",
            "delete": "Обриши",
            "deleteview": "Обриши поглед",
            "deleteviewconfirm": "Да ли сте сигурни да желите да обришете овај поглед?",
            "description": "Опис",
            "disable": "Онемогући",
            "domainalias": "Алијас релације",
            "domainsof": "Релације од {0}",
            "edit": "Измени",
            "editview": "Измени конфигурацију погледа",
            "enable": "Омогући",
            "fieldsets": "Скупови поља",
            "filters": "Филтери",
            "generalproperties": "Опште особине",
            "group": "Група",
            "innerjoin": "Унурташње спајање (INNER JOIN)",
            "jointype": "Тип спајања (JOIN)",
            "joinview": "Поглед креиран спајањем (join)",
            "klass": "Класа",
            "manageview": "Управљање погледом",
            "masterclass": "Основна класа",
            "masterclassalias": "Алијас основне класе",
            "name": "Назив",
            "newjoinview": "Нови поглед на основу спајања (join)",
            "outerjoin": "Спољашње спајање (OUTER JOIN)",
            "pleaseseleceavalidmasterclass": "Изаберите валидну основну класу",
            "refreshafteredit": "Да ли желите да освежите страну како би видели промене?",
            "selectatleastoneattribute": "Селектујте барем један атрибут за приказ у табели и у редукованој табели у кораку 4.",
            "showingrid": "Прикажи у табели",
            "showinreducedgrid": "Прикажи у редукованој табели",
            "targetalias": "Алијас одредишне класе"
        },
        "login": {
            "buttons": {
                "login": "Пријави се",
                "logout": "Промени корисника"
            },
            "fields": {
                "group": "Група",
                "language": "Језик",
                "password": "Лозинка",
                "tenants": "Клијенти",
                "username": "Корисничко име"
            },
            "loggedin": "Пријављен",
            "sso": {
                "loginfailure": "<em>Login failure</em>",
                "loginwith": "<em>Login with {0}</em>",
                "or": "<em>or</em>"
            },
            "title": "Пријави се",
            "welcome": "Добро дошли назад, {0}"
        },
        "main": {
            "administrationmodule": "Администрациони модул",
            "baseconfiguration": "Основна конфигурација",
            "cardlock": {
                "lockedmessage": "Не можете мењати ову картицу јер је тренутно мења {0}",
                "someone": "неко"
            },
            "changegroup": "Промени групу",
            "changetenant": "Промени {0}",
            "confirmchangegroup": "Заиста желите да промените групу?",
            "confirmchangetenants": "Заиста желите да промените активног клијента?",
            "confirmdisabletenant": "Заиста желите да искључите ознаку ”Игнориши клијенте”?",
            "confirmenabletenant": "Заиста желите да укључите ознаку ”Игнориши клијенте”?",
            "ignoretenants": "Игнориши {0}",
            "info": "Информација",
            "logo": {
                "cmdbuild": "CMDBuild логотип",
                "cmdbuildready2use": "CMDBuild READY2USE логотип",
                "companylogo": "Компанијски логотип",
                "openmaint": "openMAINT логотип"
            },
            "logout": "Изађи",
            "managementmodule": "Модул за управљање подацима",
            "multigroup": "Више група",
            "multitenant": "Више {0}",
            "navigation": "Навигација",
            "pagenotfound": "Страница није пронађена",
            "password": {
                "change": "Промени лозинку",
                "confirm": "Потврди лозинку",
                "email": "Е-маил адреса",
                "err_confirm": "Лозинке се не поклапају",
                "err_diffprevious": "Лозинка не може бити иста као претходна.",
                "err_diffusername": "Лозинка не може бити иста као и корисничко име.",
                "err_length": "Лозинка мора бити дуга минимално {0} карактера.",
                "err_reqdigit": "Лозинка мора садржати барем једну цифру.",
                "err_reqlowercase": "Лозинка мора садржати баерм једно мало слово.",
                "err_requppercase": "Лозинка мора садржати баерм једно veljko слово.",
                "expired": "Ваша лозинка је истекла, морате је променити.",
                "forgotten": "Заборављена лозинка",
                "new": "Нова лозинка",
                "old": "Стара лозинка",
                "recoverysuccess": "Послали смо вам емаил са инструкцијама како да повратите лозинку.",
                "reset": "Ресетуј лозинку",
                "saved": "Лозника је успешно снимљена!"
            },
            "pleasecorrecterrors": "Молимо вас коригујте наведене грешке!",
            "preferences": {
                "comma": "Запета",
                "decimalserror": "Децимални део мора постојати",
                "decimalstousandserror": "Децимални сепаратор и сепаратор хиљада не смеју бити исти",
                "default": "Подразумевани",
                "defaultvalue": "Подразумевана вредност",
                "firstdayofweek": "Први дан у седмици",
                "gridpreferencesclear": "Поништи подешавање табеле",
                "gridpreferencescleared": "Подешавање табеле поништено!",
                "gridpreferencessave": "Сними подешавање табеле",
                "gridpreferencessaved": "Подешавање табеле снимљено",
                "gridpreferencesupdate": "Освежи подешавање табеле",
                "labelcsvseparator": "CSV сепаратор",
                "labeldateformat": "Формат датума",
                "labeldecimalsseparator": "Децимални сепаратор",
                "labellanguage": "Језик",
                "labelthousandsseparator": "Сепаратор хиљада",
                "labeltimeformat": "Формат времена",
                "msoffice": "Microsoft Office",
                "period": "Тачка",
                "preferredfilecharset": "кодна страна CSV датотеке",
                "preferredofficesuite": "Преферирани пакет канцеларијских апликација",
                "space": "Размак",
                "thousandserror": "Хиљаде морају бити присутне",
                "timezone": "Временска зона",
                "twelvehourformat": "12-часовни формат",
                "twentyfourhourformat": "24-часовни формат"
            },
            "searchinallitems": "Претрага кроз све ставке",
            "selectdeselettenants": "Селектуј/деселектуј све",
            "treenavcontenttitle": "{0} од {1}",
            "userpreferences": "Подешавања"
        },
        "menu": {
            "allitems": "Све ставке",
            "classes": "Класе",
            "custompages": "Посебне странице",
            "dashboards": "Контролне табле",
            "processes": "Картице процеса",
            "reports": "Извештаји",
            "views": "Прикази"
        },
        "notes": {
            "edit": "Измени напомену"
        },
        "notifier": {
            "attention": "Пажња",
            "error": "Грешка",
            "genericerror": "Генеричка грешка",
            "genericinfo": "Генеричка информација",
            "genericwarning": "Генеричко упозорење",
            "info": "Информација",
            "success": "Успех",
            "warning": "Пажња"
        },
        "patches": {
            "apply": "Примени исправке",
            "category": "Категорија",
            "description": "Опис",
            "name": "Назив",
            "patches": "Исправке"
        },
        "processes": {
            "abortconfirmation": "Да ли сте сигурни да желите прекинути процес?",
            "abortprocess": "Прекини процес",
            "action": {
                "advance": "Даље",
                "label": "Акција"
            },
            "activeprocesses": "Активни процес",
            "allstatuses": "Све",
            "editactivity": "Измени активност",
            "openactivity": "Отвори активност",
            "startworkflow": "Старт",
            "workflow": "Радни процеси"
        },
        "relationGraph": {
            "activity": "активност",
            "allLabelsOnGraph": "све ознаке на графикону",
            "card": "Картица",
            "cardList": "Листа картица",
            "cardRelations": "Веза",
            "choosenaviagationtree": "Изабери стабло навигације",
            "class": "Класа",
            "classList": "Листа класа",
            "compoundnode": "Сложени чвор",
            "disable": "Искључи",
            "edges": "Гране",
            "enable": "Укључи",
            "labelsOnGraph": "опис на графикону",
            "level": "Ниво",
            "nodes": "Чворови",
            "openRelationGraph": "Отвори граф релација",
            "qt": "Qt",
            "refresh": "Освежи",
            "relation": "Веза",
            "relationGraph": "Граф релација",
            "reopengraph": "Поново отоври граф од овог чвора"
        },
        "relations": {
            "adddetail": "Додај детаље",
            "addrelations": "Додај релацију",
            "attributes": "Атрибути",
            "begindate": "Почетни датум",
            "code": "Код",
            "deletedetail": "Уклони детаљ",
            "deleterelation": "Уклони релацију",
            "deleterelationconfirm": "Да ли сте сигурни да желите да обришете ову релацију?",
            "description": "Опис",
            "editcard": "Измени картицу",
            "editdetail": "Измени детаље",
            "editrelation": "Измени релацију",
            "extendeddata": "Проширени подаци",
            "mditems": "ставке",
            "missingattributes": "Недостају обавезни атрибути",
            "opencard": "Отвори припадајућу картицу",
            "opendetail": "Прикажи детаље",
            "type": "Тип"
        },
        "reports": {
            "csv": "CSV",
            "download": "Преузми",
            "format": "Форматирај",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Штампај",
            "reload": "Поново учитај",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Подразумевано"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Дневно"
                        },
                        "monthly": {
                            "description": "Месечно"
                        },
                        "once": {
                            "description": "Једном"
                        },
                        "weekly": {
                            "description": "Седмично"
                        },
                        "yearly": {
                            "description": "Годишње"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Подразумевано"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Додај тематизацију",
            "analysisType": "Тип анализе",
            "attribute": "Атрибут",
            "calculateRules": "Генериши правила стила",
            "clearThematism": "Уклони тематизацију",
            "color": "Боја",
            "defineLegend": "Дефиниција легенде",
            "defineThematism": "Дефиниција тематизације",
            "function": "Функција",
            "generate": "Генериши",
            "geoAttribute": "Географски атрибут",
            "graduated": "Дипломирао",
            "highlightSelected": "Означи изабрану ставку",
            "intervals": "Интервали",
            "legend": "легенда",
            "name": "назив",
            "newThematism": "Нова тематизација",
            "punctual": "Тачан",
            "quantity": "Број (кванитет)",
            "segments": "Сегменти",
            "source": "Извор",
            "table": "Табела",
            "thematism": "Тематике",
            "value": "Вредност"
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
                "addrow": "Додај ред",
                "clonerow": "Клонирај ред",
                "datanotvalid": "Невалидни подаци",
                "deleterow": "Обриши ред",
                "editrow": "Измени ред",
                "export": "Извези",
                "import": "Увези",
                "importexport": {
                    "expattributes": "Подаци за извоз",
                    "file": "Датотека",
                    "filename": "Назив датотеке",
                    "format": "Формат",
                    "importmode": "Начин увоза",
                    "keyattributes": "Кључеви",
                    "missingkeyattr": "Молимо - изаберите бар један атрибут-кључ",
                    "modeadd": "Додај",
                    "modemerge": "Споји",
                    "modereplace": "Замени",
                    "separator": "Сепаратор"
                },
                "refresh": "Врати на подразумеване вредности"
            },
            "linkcards": {
                "checkedonly": "Само означене",
                "editcard": "Измени картицу",
                "opencard": "Отвори картицу",
                "refreshselection": "Примени подразумевани избор",
                "togglefilterdisabled": "Искључи филтрирање табеле",
                "togglefilterenabled": "Укључи филтрирање табеле"
            },
            "required": "Ова компонента је обавезна"
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
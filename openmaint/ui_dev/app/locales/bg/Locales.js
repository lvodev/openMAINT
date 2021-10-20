(function() {
    Ext.define('CMDBuildUI.locales.bg.Locales', {
        "requires": ["CMDBuildUI.locales.bg.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "bg",
        "administration": CMDBuildUI.locales.bg.LocalesAdministration.administration,
        "attachments": {
            "add": "Добавяне на прикачен файл",
            "attachmenthistory": "Хронология на прикачените файлове",
            "author": "Автор",
            "browse": "Преглед &hellip;",
            "category": "Категория",
            "code": "Код",
            "creationdate": "Дата на създаване",
            "deleteattachment": "Изтриване на прикачен файл",
            "deleteattachment_confirmation": "Наистина ли искате да изтриете този прикачен файл?",
            "description": "Описание",
            "download": "Изтегляне",
            "dropfiles": "Пуснете файловете тук",
            "editattachment": "Модифициране на прикачен файл",
            "file": "Файл",
            "filealreadyinlist": "Файлът {0} вече е в списъка.",
            "filename": "Име на файл",
            "fileview": "Преглед на прикачения файл",
            "invalidfiles": "Премахване на невалидни файлове",
            "majorversion": "Основна версия",
            "maxsize": "Максималният позволен размер на файла е {0} МБ.",
            "metadata": "Метаданни",
            "modificationdate": "Дата на модификация",
            "new": "Нов прикачен файл",
            "nocategory": "Не категоризиран",
            "preview": "Преглед",
            "removefile": "Премахване на файл",
            "statuses": {
                "empty": "Празен файл",
                "error": "Грешка",
                "extensionNotAllowed": "Не е разрешено разширение на файл",
                "loaded": "Заредени",
                "ready": "Готови",
                "toolarge": "Твърде голям"
            },
            "successupload": "{0} прикачени файлове.",
            "uploadfile": "Качване на файл...",
            "version": "Версия",
            "viewhistory": "Преглед на хронологията за прикачените файлове",
            "warningmessages": {
                "atleast": "Внимание: е зареден {0} приставки от тип \"{1}\". Тази категория очаква най-малко {2} прикачени файлове ",
                "exactlynumber": "Внимание: е зареден {0} приставки от тип \"{1}\". Тази категория очаква {2} прикачени файлове",
                "maxnumber": "Внимание: е зареден {0} привързаност от тип \"{1}\". Тази категория очаква най-много {2} прикачени файлове"
            },
            "wrongfileextension": "{0} разширение на файла не е позволено"
        },
        "bim": {
            "bimViewer": "Bim Viewer",
            "card": {
                "label": "Карта"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Размер на ограничителната кутия по оста X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Размер на ограничителната кутия по оста Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Размер на ограничителната кутия по оста Z",
                "LARGEST_FACE_AREA": "Най-голяма област на лицето",
                "LARGEST_FACE_DIRECTION": "Най-голяма посока на лицето",
                "SURFACE_AREA_ALONG_X": "Повърхност по оста X",
                "SURFACE_AREA_ALONG_Y": "Повърхност по оста Y",
                "SURFACE_AREA_ALONG_Z": "Повърхност по оста Z",
                "TOTAL_SHAPE_VOLUME": "Общ обем на формата",
                "TOTAL_SURFACE_AREA": "Обща площ",
                "WALKABLE_SURFACE_AREA": "Проходима повърхност",
                "calculated": "Изчислено",
                "description": "Описание",
                "guid": "GUID",
                "label": "Имоти",
                "name": "Име",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Слоеве",
                "menu": {
                    "hideAll": "Скрий всичко",
                    "showAll": "Покажи всичко"
                },
                "name": "Име",
                "qt": "Qt",
                "visibility": "Видимост"
            },
            "menu": {
                "camera": "Камера",
                "frontView": "Изглед отпред",
                "mod": "Контроли на зрителя",
                "orthographic": "Ортографска камера",
                "pan": "Превъртете",
                "perspective": "Перспективна камера",
                "resetView": "Нулиране на изгледа",
                "rotate": "завъртане",
                "sideView": "Страничен изглед",
                "topView": "Изглед отгоре"
            },
            "showBimCard": "Отворете 3D визуализатора",
            "tree": {
                "arrowTooltip": "Изберете елемент",
                "columnLabel": "Дърво",
                "label": "Дърво",
                "open_card": "Отворете свързаната карта",
                "root": "Основен на Ifc"
            }
        },
        "bulkactions": {
            "abort": "Прекъсване на избраните елементи",
            "alertdownloadattachments": "Някои прикачени файлове няма да бъдат изтеглени, защото все още не са запазени на сървъра",
            "alertnoattachmentsdownload": "Няма да бъдат изтеглени прикачени файлове, тъй като те все още не са запазени на сървъра",
            "cancelselection": "Отмяна на селекцията",
            "confirmabort": "Прекратявате {0} процес екземпляри. Наистина ли искате да продължите?",
            "confirmdelete": "Изтривате {0} карти. Наистина ли искате да продължите?",
            "confirmdeleteattachements": "Изтривате {0} прикачени файлове. Наистина ли искате да продължите?",
            "confirmedit": "Модифицирате {0} за {1} карти. Наистина ли искате да продължите?",
            "delete": "Изтриване на избраните елементи",
            "download": "Изтегляне на избраните прикачени файлове",
            "downloadall": "Изтеглете всички прикачени файлове",
            "edit": "Редактиране на избраните елементи",
            "selectall": "Изберете всички елементи"
        },
        "calendar": {
            "active_expired": "Активен/Изтекъл",
            "add": "Добавяне",
            "advancenotification": "Предварително уведомление",
            "allcategories": "Всички категории",
            "alldates": "Всички дати",
            "associatedcard": "Свързана карта",
            "calculated": "Изчислява",
            "calendar": "Календар",
            "cancel": "Маркирай като отменен",
            "category": "Категория",
            "class": "Клас",
            "cm_confirmcancel": "Наистина ли искате да маркирате като отменени избрани графици?",
            "cm_confirmcomplete": "Наистина ли искате да маркирате като компилиран избрани графици?",
            "cm_markcancelled": "Маркиране като отменени избрани графици",
            "cm_markcomplete": "Маркиране като завършени избрани графици",
            "complete": "Пълна",
            "completed": "Завършен",
            "date": "Дата",
            "days": "Дни",
            "delaybeforedeadline": "Забавяне преди крайния срок",
            "delaybeforedeadlinevalue": "Забавяне преди стойността на крайния срок",
            "description": "Описание",
            "editevent": "Редактиране на график",
            "enddate": "Крайна дата",
            "endtype": "Тип на края",
            "event": "График",
            "executiondate": "Дата на изпълнение",
            "frequency": "Честота",
            "frequencymultiplier": "Мултипликатор на честотата",
            "grid": "Мрежа",
            "leftdays": "Оставащи дни",
            "londdescription": "Пълно описание",
            "manual": "Ръководство",
            "maxactiveevents": "Max активни събития",
            "messagebodydelete": "Искате ли да премахнете графика за планиране?",
            "messagebodyplural": "Има {0} правила за график",
            "messagebodyrecalculate": "Искате ли да преизчислите правилото за графика с новата дата?",
            "messagebodysingular": "Има {0} правило за график",
            "messagetitle": "График за преизчисляване",
            "missingdays": "Липсващи дни",
            "next30days": "Следващите 30 дни",
            "next7days": "Следващите 7 дни",
            "notificationtemplate": "Шаблон, използван за уведомяване",
            "notificationtext": "Текст на известие",
            "occurencies": "Брой на професионални фирми",
            "operation": "Операция",
            "partecipantgroup": "Група за разделяне на части",
            "partecipantuser": "Потребител на разделител",
            "priority": "Приоритет",
            "recalculate": "Преизчисляване",
            "referent": "Референтен",
            "scheduler": "Списък",
            "sequencepaneltitle": "Генериране на графици",
            "startdate": "Начална дата",
            "status": "Статус",
            "today": "Днес",
            "type": "Тип",
            "viewevent": "Преглед на графика",
            "widgetcriterion": "Критерий за изчисляване",
            "widgetemails": "Имейли",
            "widgetsourcecard": "Карта източник"
        },
        "classes": {
            "cards": {
                "addcard": "Добавяне на карта",
                "clone": "Клонинг",
                "clonewithrelations": "Клониране на карта и връзки",
                "deletebeaware": "Имайте предвид, че:",
                "deleteblocked": "Не е възможно да се продължи с изтриването, защото има връзки с {0}.",
                "deletecard": "Изтриване на карта",
                "deleteconfirmation": "Наистина ли искате да изтриете тази карта?",
                "deleterelatedcards": "{0} карти ще бъдат изтрити",
                "deleterelations": "връзките с {0} карти ще бъдат изтрити",
                "label": "Карти",
                "modifycard": "Модифициране на карта",
                "opencard": "Отваряне на карта",
                "print": "Печат на карта"
            },
            "simple": "Прост",
            "standard": "Стандартна"
        },
        "common": {
            "actions": {
                "add": "Добавете",
                "apply": "Приложете",
                "cancel": "Отменете",
                "close": "Затваряне",
                "delete": "Изтриване",
                "edit": "Редактиране",
                "execute": "Изпълнение",
                "help": "Помощ",
                "load": "Зареждане",
                "open": "Отваряне",
                "refresh": "Обновяване на данни",
                "remove": "Премахване",
                "save": "Запис",
                "saveandapply": "Запис и прилагане",
                "saveandclose": "Запис и затваряне",
                "search": "Търсене",
                "searchtext": "Търсене..."
            },
            "attributes": {
                "nogroup": "База данни"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i: s",
                "time": "H:i: s"
            },
            "editor": {
                "clearhtml": "Изчистване на HTML",
                "expand": "Разгъване на редактора",
                "reduce": "Намаляване на редактора",
                "signature": "Добавете подпис",
                "unlink": "Премахване на връзката",
                "unlinkmessage": "Преобразувайте избраната хипервръзка в текст."
            },
            "grid": {
                "disablemultiselection": "Забраняване на мулти избор",
                "enamblemultiselection": "Разрешаване на мулти избор",
                "export": "Експортиране на данни",
                "filterremoved": "Текущият филтър е премахнат",
                "import": "Импортиране на данни",
                "itemnotfound": "Елементът не е намерен",
                "list": "Списък",
                "opencontextualmenu": "Отваряне на контекстно меню",
                "print": "Печат",
                "printcsv": "Отпечатване като CSV файл",
                "printodt": "Отпечатване като ODT",
                "printpdf": "Отпечатване като PDF",
                "row": "Елемент",
                "rows": "Елементи",
                "subtype": "Подтип"
            },
            "tabs": {
                "activity": "Активност",
                "attachment": "Прикачен",
                "attachments": "Прикачени",
                "card": "Карта",
                "clonerelationmode": "Режим на Връзки за Клониране",
                "details": "Подробности",
                "emails": "Имейли",
                "history": "История",
                "notes": "Бележки",
                "relations": "Отношения",
                "schedules": "Графици"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Изтегляне на диаграма",
                "gridhide": "Скриване на мрежата от данни",
                "gridshow": "Показване на мрежата от данни",
                "openinpopup": "Отваряне в изскачащ прозорец",
                "parametershide": "Скриване на параметрите на данните",
                "parametersshow": "Показване на параметри на данните",
                "reload": "Презареди"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Добавяне на прикачени файлове от архива на документа",
            "alredyexistfile": "Вече съществува файл с това име",
            "archivingdate": "Дата на архивиране",
            "attachfile": "Прикачване на файл",
            "bcc": "Ск",
            "cc": "Cc",
            "composeemail": "Съставяне на имейл",
            "composefromtemplate": "Композиране от шаблон",
            "delay": "Забавяне",
            "delays": {
                "day1": "За 1 ден",
                "days2": "След 2 дни",
                "days4": "За 4 дни",
                "hour1": "1 час",
                "hours2": "2 часа",
                "hours4": "4 часа",
                "month1": "За 1 месец",
                "negativeday1": "1 ден преди",
                "negativedays2": "2 дни преди",
                "negativedays4": "4 дни преди",
                "negativehour1": "1 час преди",
                "negativehours2": "2 часа преди",
                "negativehours4": "4 часа преди",
                "negativemonth1": "1 месец преди",
                "negativeweek1": "1 седмица преди",
                "negativeweeks2": "2 седмици преди",
                "none": "Никой",
                "week1": "След 1 седмица",
                "weeks2": "След 2 седмици"
            },
            "dmspaneltitle": "Избор на прикачени файлове от база данни",
            "edit": "Редактиране",
            "from": "От",
            "gridrefresh": "Обновяване на мрежата",
            "keepsynchronization": "Запазване синхронизацията",
            "message": "Съобщение",
            "regenerateallemails": "Генерирай всички имейли",
            "regenerateemail": "Генериране на имейл",
            "remove": "Премахнете",
            "remove_confirmation": "Наистина ли искате да изтриете този имейл?",
            "reply": "Отговор",
            "replyprefix": "{1} wrote:",
            "selectaclass": "Избор на клас",
            "sendemail": "Изпращане на имейл",
            "signature": "Подпис",
            "statuses": {
                "draft": "Проект",
                "error": "Грешка",
                "outgoing": "Изходящи",
                "received": "Получени",
                "sent": "Изпратени"
            },
            "subject": "Предмет",
            "to": "До",
            "view": "Разгледай"
        },
        "errors": {
            "autherror": "Грешно потребителско име или парола",
            "classnotfound": "Клас {0} не е намерен",
            "fieldrequired": "Това поле е задължително",
            "invalidfilter": "Невалиден филтър",
            "notfound": "Артикулът не е намерен"
        },
        "filters": {
            "actions": "Действия",
            "addfilter": "Добавяне на филтър",
            "any": "Всички",
            "attachments": "Прикачени файлове",
            "attachmentssearchtext": "Текст за търсене на прикачени файлове",
            "attribute": "Избор на атрибут",
            "attributes": "Атрибути",
            "clearfilter": "Изчистване на филтъра",
            "clone": "Клониране",
            "copyof": "Копие на",
            "currentgroup": "Текуща група",
            "currentuser": "Текущ потребител",
            "defaultset": "Задай по подразбиране",
            "defaultunset": "Изключено от подразбиране",
            "description": "Описание",
            "domain": "Домейн",
            "errorname": "Името на филтъра вече се използва",
            "filterdata": "Филтриране на данни",
            "fromfilter": "От филтъра",
            "fromselection": "От селекцията",
            "group": "Група",
            "ignore": "Игнорира",
            "migrate": "Мигриране",
            "name": "Име",
            "newfilter": "Нов филтър",
            "noone": "Никой",
            "operator": "Оператор",
            "operators": {
                "beginswith": "Започва с",
                "between": "Между",
                "contained": "Съдържа",
                "containedorequal": "Съдържащи се или равни",
                "contains": "Съдържа",
                "containsorequal": "Съдържа или е равно на",
                "descriptionbegin": "Описанието започва с",
                "descriptioncontains": "Описанието съдържа",
                "descriptionends": "Описание завършва с",
                "descriptionnotbegin": "Описанието не започва с",
                "descriptionnotcontain": "Описание не съдържа",
                "descriptionnotends": "Описание не завършва с",
                "different": "Различни",
                "doesnotbeginwith": "Не започва с",
                "doesnotcontain": "Не съдържа",
                "doesnotendwith": "Не свършва с",
                "endswith": "Завършва с",
                "equals": "Равно на",
                "greaterthan": "По-голямо от",
                "isnotnull": "Не е празно",
                "isnull": "Е празно",
                "lessthan": "По-малко от"
            },
            "relations": "Отношения",
            "type": "Тип",
            "typeinput": "Входен Параметър",
            "user": "Потребител",
            "value": "Стойност"
        },
        "gis": {
            "card": "Карта",
            "cardsMenu": "Меню карти",
            "code": "Код",
            "description": "Описание",
            "extension": {
                "errorCall": "Грешка",
                "noResults": "Няма резултати"
            },
            "externalServices": "Външни услуги",
            "geographicalAttributes": "Гео атрибути",
            "geoserverLayers": "Слоеве на Геосървъра",
            "layers": "Слоеве",
            "list": "Списък",
            "longpresstitle": "Геоелементи в областта",
            "map": "Карта",
            "mapServices": "Услуги за карта",
            "position": "Позиция",
            "root": "Основен",
            "tree": "Дърво",
            "type": "Тип",
            "view": "Разглеждане",
            "zoom": "Увеличаване"
        },
        "history": {
            "activityname": "Име на дейност",
            "activityperformer": "Изпълнител на дейността",
            "begindate": "Начална дата",
            "enddate": "Крайна дата",
            "processstatus": "Статут",
            "user": "Потребител"
        },
        "importexport": {
            "database": {
                "uri": "URI на базата данни",
                "user": "Потребител на база данни"
            },
            "downloadreport": "Изтеглете отчет",
            "emailfailure": "Възникна грешка при изпращане на имейл!",
            "emailmessage": "Прикачен отчет за импортиране на файл „{0}“ на дата {1}",
            "emailsubject": "Отчет за импортиране на данни",
            "emailsuccess": "Имейлът е изпратен успешно!",
            "export": "Експорт",
            "exportalldata": "Всички данни",
            "exportfiltereddata": "Само данни, съответстващи на мрежовия филтър",
            "gis": {
                "shapeimportdisabled": "Импорта на фигури не е активиран за този шаблон",
                "shapeimportenabled": "Конфигурация за импортиране на фигури"
            },
            "ifc": {
                "card": "Карта",
                "project": "Проект",
                "sourcetype": "Импорт от"
            },
            "import": "Импорт",
            "importresponse": "Отговор за импортиране",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Грешки",
                "linenumber": "Номер на реда",
                "message": "Съобщение",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Обработени редове",
                "recordnumber": "Номер на записа",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Изпрати отчет",
            "template": "Шаблон",
            "templatedefinition": "Определение на шаблона"
        },
        "joinviews": {
            "active": "Активен",
            "addview": "Добавяне на изглед",
            "alias": "Псевдоним",
            "attribute": "Атрибут",
            "attributes": "Атрибути",
            "attributesof": "Атрибути на: {0}",
            "createview": "Създаване на изглед",
            "datasorting": "Сортиране на данни",
            "delete": "Изтрий",
            "deleteview": "Изтриване на изгледа",
            "deleteviewconfirm": "Наистина ли искате да изтриете този изглед?",
            "description": "Описание",
            "disable": "Деактивирайте",
            "domainalias": "Псевдоним на домейн",
            "domainsof": "Домейни на {0}",
            "edit": "Редактиране",
            "editview": "Редактиране конфигурацията на изгледа",
            "enable": "Активиране",
            "fieldsets": "Полеви набори",
            "filters": "Филтри",
            "generalproperties": "Общи свойства",
            "group": "Група",
            "innerjoin": "Вътрешно присъединяване",
            "jointype": "Тип присъединяване",
            "joinview": "Изглед от присъединяването",
            "klass": "Клас",
            "manageview": "Управление на изгледа",
            "masterclass": "Мастър клас",
            "masterclassalias": "Мастър клас псевдоним",
            "name": "Име",
            "newjoinview": "Нов изглед от присъединяването",
            "outerjoin": "Външно присъединяване",
            "pleaseseleceavalidmasterclass": "Моля, изберете валиден мастър клас",
            "refreshafteredit": "Искате ли да опресните страницата, за да видите промените?",
            "selectatleastoneattribute": "Моля, изберете поне един атрибут за показване в мрежа и в намалена мрежа на стъпка 4.",
            "showingrid": "Показване в мрежа",
            "showinreducedgrid": "Показване в намалена мрежа",
            "targetalias": "Псевдоним на целевия клас"
        },
        "login": {
            "buttons": {
                "login": "Вход",
                "logout": "Промяна на потребител"
            },
            "fields": {
                "group": "Група",
                "language": "Език",
                "password": "Парола",
                "tenants": "Клиенти",
                "username": "Потребител Име"
            },
            "loggedin": "Влизане в системата",
            "sso": {
                "loginfailure": "Неуспешен вход",
                "loginwith": "Влезте с {0}",
                "or": "или"
            },
            "title": "Вход",
            "welcome": "Добре дошли отново {0}."
        },
        "main": {
            "administrationmodule": "Модул за администриране",
            "baseconfiguration": "Базова конфигурация",
            "cardlock": {
                "lockedmessage": "Не можете да редактирате тази карта",
                "someone": "Някой"
            },
            "changegroup": "Промяна на група",
            "changetenant": "Промяна {0}",
            "confirmchangegroup": "Наистина ли искате да промените групата?",
            "confirmchangetenants": "Наистина ли искате да промените активните клиенти?",
            "confirmdisabletenant": "Наистина ли искате да забраните флага Игнорирай клиентите?",
            "confirmenabletenant": "Наистина ли искате да разрешите флага Игнориране на клиентите?",
            "ignoretenants": "Игнорирай {0}",
            "info": "Информация",
            "logo": {
                "cmdbuild": "Лого на CMDbuild",
                "cmdbuildready2use": "Лого на CMDbuild READY2USE",
                "companylogo": "Фирмено лого",
                "openmaint": "Лого на openMAINT"
            },
            "logout": "Изход",
            "managementmodule": "Модул за управление на данни",
            "multigroup": "Мулти група",
            "multitenant": "Мулти {0}",
            "navigation": "Навигация",
            "pagenotfound": "Страницата не е намерена",
            "password": {
                "change": "Промяна на паролата",
                "confirm": "Потвърждаване на паролата",
                "email": "Имейл адрес",
                "err_confirm": "Паролата не съвпада.",
                "err_diffprevious": "Паролата не може да е идентична с предишната.",
                "err_diffusername": "Паролата не може да бъде идентична с потребителското име.",
                "err_length": "Паролата трябва да бъде поне {0} знака.",
                "err_reqdigit": "Паролата трябва да съдържа поне една цифра.",
                "err_reqlowercase": "Паролата трябва да съдържа поне един долен знак.",
                "err_requppercase": "Паролата трябва да съдържа поне един главни знаци.",
                "expired": "Паролата ви е изтекла. Трябва да я промените сега.",
                "forgotten": "Забравих си паролата",
                "new": "Нова парола",
                "old": "Стара парола",
                "recoverysuccess": "Изпратихме ви имейл с инструкция за възстановяване на паролата ви.",
                "reset": "Нулиране на паролата",
                "saved": "Паролата е правилно записана!"
            },
            "pleasecorrecterrors": "Моля, коригирайте посочените грешки!",
            "preferences": {
                "comma": "Запетая",
                "decimalserror": "Полето десетичен знак трябва да присъства",
                "decimalstousandserror": "Десетичен знак и разделител за хиляди трябва да бъдат различни",
                "default": "По подразбиране",
                "defaultvalue": "Стойност по подразбиране",
                "firstdayofweek": "Първи ден от седмицата",
                "gridpreferencesclear": "Изчистване на предпочитанията за мрежата",
                "gridpreferencescleared": "Предпочитанията за мрежата са изчистени!",
                "gridpreferencessave": "Запиши предпочитанията за мрежата",
                "gridpreferencessaved": "Предпочитанията за мрежата са съхранени!",
                "gridpreferencesupdate": "Актуализиране на предпочитанията за мрежата",
                "labelcsvseparator": "CSV разделител",
                "labeldateformat": "Формат на датата",
                "labeldecimalsseparator": "Разделител за десетични числа",
                "labellanguage": "Език",
                "labelthousandsseparator": "Разделител за хиляди",
                "labeltimeformat": "Формат на времето",
                "msoffice": "Microsoft Office",
                "period": "Период",
                "preferredfilecharset": "Кодиране на CSV файла",
                "preferredofficesuite": "Предпочитан Офис пакет",
                "space": "Пространство",
                "thousandserror": "Полето хиляди трябва да присъства",
                "timezone": "Часова зона",
                "twelvehourformat": "12-часов формат",
                "twentyfourhourformat": "24-часов формат"
            },
            "searchinallitems": "Търсене във всички елементи",
            "selectdeselettenants": "Изберете / Отменете избора на всички",
            "treenavcontenttitle": "{0} на {1}",
            "userpreferences": "Предпочитания"
        },
        "menu": {
            "allitems": "Всички елементи",
            "classes": "Класове",
            "custompages": "Персонализирани страници",
            "dashboards": "Табла",
            "processes": "Процеси",
            "reports": "Отчети",
            "views": "Изглед към"
        },
        "notes": {
            "edit": "Модифициране на бележки"
        },
        "notifier": {
            "attention": "Внимание",
            "error": "Грешка",
            "genericerror": "Обща грешка",
            "genericinfo": "Обща информация",
            "genericwarning": "Общо предупреждение",
            "info": "Информация",
            "success": "Успех",
            "warning": "Предупреждение"
        },
        "patches": {
            "apply": "Прилагане на корекции",
            "category": "Категория",
            "description": "Описание",
            "name": "Име",
            "patches": "Патч"
        },
        "processes": {
            "abortconfirmation": "Наистина ли искате да прекратите този процес?",
            "abortprocess": "Прекратяване на процеса",
            "action": {
                "advance": "Предварително",
                "label": "Действие"
            },
            "activeprocesses": "Активни процеси",
            "allstatuses": "Всички",
            "editactivity": "Промяна на активността",
            "openactivity": "Отворена дейност",
            "startworkflow": "Започнете",
            "workflow": "Поток"
        },
        "relationGraph": {
            "activity": "Дейност",
            "allLabelsOnGraph": "всички етикети на графиката",
            "card": "Карта",
            "cardList": "Списък с Карти",
            "cardRelations": "Връзки с Карти",
            "choosenaviagationtree": "Избор на дървовидна лента",
            "class": "Клас",
            "classList": "Списък на Класовете",
            "compoundnode": "Комбиниран Възел",
            "disable": "Забранете",
            "edges": "Ръбове",
            "enable": "Разрешете",
            "labelsOnGraph": "подсказка на графиката",
            "level": "Ниво",
            "nodes": "Възли",
            "openRelationGraph": "Отворена Графика за Връзка",
            "qt": "Qt",
            "refresh": "Обновяване",
            "relation": "Отношение",
            "relationGraph": "Графика за Връзка",
            "reopengraph": "Повторно отваряне на графиката от този възел"
        },
        "relations": {
            "adddetail": "Добавяне на детайл",
            "addrelations": "Добавяне на връзки",
            "attributes": "Атрибути",
            "begindate": "Начална дата",
            "code": "Код",
            "deletedetail": "Изтриване на детайла",
            "deleterelation": "Изтриване на връзка",
            "deleterelationconfirm": "Наистина ли искате да изтриете тази връзка?",
            "description": "Описание",
            "editcard": "Редактиране на карта",
            "editdetail": "Редактиране на детайл",
            "editrelation": "Редактиране на връзка",
            "extendeddata": "Разширени данни",
            "mditems": "Елементи",
            "missingattributes": "Липсващи задължителни атрибути",
            "opencard": "Отваряне на сродна карта",
            "opendetail": "Показване на детайлите",
            "type": "Тип"
        },
        "reports": {
            "csv": "CSV",
            "download": "Изтегли",
            "format": "Формат",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Печат",
            "reload": "Презаредете",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "По подразбиране"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Ежедневно"
                        },
                        "monthly": {
                            "description": "Месечен"
                        },
                        "once": {
                            "description": "Веднъж"
                        },
                        "weekly": {
                            "description": "Седмичен"
                        },
                        "yearly": {
                            "description": "Годишно"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "По подразбиране"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Добавяне Тематичност",
            "analysisType": "Вид Анализ",
            "attribute": "Атрибут",
            "calculateRules": "Генериране на правила за стил",
            "clearThematism": "Изчистване на Тематичност",
            "color": "Цвят",
            "defineLegend": "Дефиниция на легендата",
            "defineThematism": "Дефиниция на Тематичност",
            "function": "Функция",
            "generate": "Генерира",
            "geoAttribute": "Геоатрибут",
            "graduated": "Завършва",
            "highlightSelected": "Осветяване на избрания елемент",
            "intervals": "Интервали",
            "legend": "Легенда",
            "name": "Име",
            "newThematism": "Нова Тематичност",
            "punctual": "Точни",
            "quantity": "Брой",
            "segments": "Сегменти",
            "source": "Източник",
            "table": "Таблица",
            "thematism": "Тематичност",
            "value": "Стойност"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Излезте, без да съхраните",
                    "stayinedit": "Назад за редактиране"
                },
                "savebeforeexit": "Има не запазени промени в прикачените файлове. Искате ли да ги запазите, преди да излезете?",
                "saveprocessmessage": "Прикачените файлове могат да се запазват само в съществуващи карти. При натискане на съхрани, записът на процеса ще бъде създаден с данните, въведени във формуляра."
            },
            "customform": {
                "addrow": "Добавяне на ред",
                "clonerow": "Клониране на ред",
                "datanotvalid": "Данните не са валидни",
                "deleterow": "Изтриване на ред",
                "editrow": "Редактиране на ред",
                "export": "Експортиране на данни",
                "import": "Импорт",
                "importexport": {
                    "expattributes": "Данни за експортиране",
                    "file": "Файл",
                    "filename": "Име на файл",
                    "format": "Формат",
                    "importmode": "Режим на импортиране",
                    "keyattributes": "Ключови атрибути",
                    "missingkeyattr": "Моля, изберете поне един ключ атрибут",
                    "modeadd": "Добавяне",
                    "modemerge": "Обединяване",
                    "modereplace": "Замяна",
                    "separator": "Разделител"
                },
                "refresh": "Обнови по подразбиране"
            },
            "linkcards": {
                "checkedonly": "Само проверени",
                "editcard": "Редактиране на карта",
                "opencard": "Отваряне на карта",
                "refreshselection": "Прилагане на избор по подразбиране",
                "togglefilterdisabled": "Забраняване на филтъра на мрежата",
                "togglefilterenabled": "Разрешаване на филтър на мрежата"
            },
            "required": "Този уиджет е задължителен."
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
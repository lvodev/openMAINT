(function() {
    Ext.define('CMDBuildUI.locales.ua.Locales', {
        "requires": ["CMDBuildUI.locales.ua.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "ua",
        "administration": CMDBuildUI.locales.ua.LocalesAdministration.administration,
        "attachments": {
            "add": "Додати вкладення",
            "attachmenthistory": "Історія вкладень",
            "author": "Автор",
            "browse": "Переглянути &hellip;",
            "category": "Категорія",
            "code": "Код",
            "creationdate": "Дата створення",
            "deleteattachment": "Видалити вкладення",
            "deleteattachment_confirmation": "Ви впевнені, що хочете видалити це вкладення?",
            "description": "Опис",
            "download": "Завантажити",
            "dropfiles": "Перетягніть файл сюди",
            "editattachment": "Змінити вкладення",
            "file": "Файл",
            "filealreadyinlist": "Файл {0} вже є в списку",
            "filename": "Ім'я файла",
            "fileview": "Переглянути вкладення",
            "invalidfiles": "Видаліть некоррекні файли",
            "majorversion": "Основна версія",
            "maxsize": "Максимально допустимий розмір файлу {0} МБ.",
            "metadata": "Метадані",
            "modificationdate": "Дата зміни",
            "new": "Нове вкладення",
            "nocategory": "Без категорії",
            "preview": "Попередній перегляд",
            "removefile": "Видалити файл",
            "statuses": {
                "empty": "Пустий файл",
                "error": "Помилка",
                "extensionNotAllowed": "Розширення файлу не допускається",
                "loaded": "Завантажено",
                "ready": "Готово",
                "toolarge": "Завеликий"
            },
            "successupload": "{0} вкладень оновлено.",
            "uploadfile": "Завантажити файл...",
            "version": "Версія",
            "viewhistory": "Перегляд історії вкладень",
            "warningmessages": {
                "atleast": "Попередження: було завантажено вкладення типу \"{1}\". Ця категорія потребує щонайменше {2} вкладень.",
                "exactlynumber": "Попередження: було завантажено вкладення типу \"{1}\". Ця категорія потребує {2} вкладень.",
                "maxnumber": "Попередження: було завантажено вкладення типу \"{1}\". Ця категорія потребує щонайбільше {2} вкладень."
            },
            "wrongfileextension": "Файл {0} має недозволене розширення"
        },
        "bim": {
            "bimViewer": "Переглядач Bim",
            "card": {
                "label": "Картка"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Розмір охоплюючого куба вздовж вісі X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Розмір охоплюючого куба вздовж вісі Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Розмір охоплюючого куба вздовж вісі Z",
                "LARGEST_FACE_AREA": "Найбільша площа поверхні",
                "LARGEST_FACE_DIRECTION": "Напрямок на найбільшу грань",
                "SURFACE_AREA_ALONG_X": "Площа поверхні вздовж вісі X",
                "SURFACE_AREA_ALONG_Y": "Площа поверхні вздовж вісі Y",
                "SURFACE_AREA_ALONG_Z": "Площа поверхні вздовж вісі Z",
                "TOTAL_SHAPE_VOLUME": "Загальний об’єм фігури",
                "TOTAL_SURFACE_AREA": "Загальна площа поверхні",
                "WALKABLE_SURFACE_AREA": "Прохідна площа поверхні",
                "calculated": "Розраховано",
                "description": "Опис",
                "guid": "GUID",
                "label": "Властивості",
                "name": "Назва",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Шари",
                "menu": {
                    "hideAll": "Приховати все",
                    "showAll": "Показати все"
                },
                "name": "Назва",
                "qt": "Qt",
                "visibility": "Видимість"
            },
            "menu": {
                "camera": "Камера",
                "frontView": "Вид спереду",
                "mod": "елементи керування перегляду",
                "orthographic": "Ортогрфічна камера",
                "pan": "панорамування",
                "perspective": "Камера перспективи",
                "resetView": "Відновити вид",
                "rotate": "повернути",
                "sideView": "Вид збоку",
                "topView": "Вид зверху"
            },
            "showBimCard": "Відкрити 3D-переглядач",
            "tree": {
                "arrowTooltip": "Вибрати елемент",
                "columnLabel": "Дерево",
                "label": "Дерево",
                "open_card": "Відкрити пов'язану картку",
                "root": "Ifc Корінь"
            }
        },
        "bulkactions": {
            "abort": "Відмінити для вибраних елементів",
            "alertdownloadattachments": "Деякі вкладення не будуть завантажені, оскільки вони ще не збереглись на сервер.",
            "alertnoattachmentsdownload": "Вкладення не будуть завантажені, оскільки вони ще не збереглись на сервер.",
            "cancelselection": "Знати виділення",
            "confirmabort": "Ви відміняєте {0} процесів. Ви впевнені, що хочете продовжити?",
            "confirmdelete": "Ви видаляєте {0} карток. Ви впевнені, що хочете продовжити?",
            "confirmdeleteattachements": "Ви видаляєте {0} вкладень. Ви впевнені, що хочете продовжити?",
            "confirmedit": "Ви замінюєте {0} карток на {1}. Ви впевнені, що хочете продовжити?",
            "delete": "Видалити вибрані елементи",
            "download": "Завантажити вибрані вкладення",
            "downloadall": "Завантажити всі вкладення",
            "edit": "Редагувати вибрані елементи",
            "selectall": "Вибрати всі елементи"
        },
        "calendar": {
            "active_expired": "Активні/Прострочені",
            "add": "Додати розклад",
            "advancenotification": "Днів до попередження",
            "allcategories": "Всі категорії",
            "alldates": "Всі дати",
            "associatedcard": "Пов’язана картка",
            "calculated": "Розраховано",
            "calendar": "Календар",
            "cancel": "Позначити як відмінене",
            "category": "Категорія",
            "class": "Клас",
            "cm_confirmcancel": "Ви впевнені, що хочете позначити як відмінені виділені розклади?",
            "cm_confirmcomplete": "Ви впевнені, що хочете позначити як виконані виділені розклади?",
            "cm_markcancelled": "Позначити як відмінені виділені розклади",
            "cm_markcomplete": "Позначити як виконане виділені розклади",
            "complete": "Позначити як виконане",
            "completed": "Завершено",
            "date": "Дата",
            "days": "Дні",
            "delaybeforedeadline": "Затримка перед кінцевим терміном",
            "delaybeforedeadlinevalue": "Значення затримки перед кінцевим терміном",
            "description": "Опис",
            "editevent": "Редагувати розклад",
            "enddate": "Кінцева дата",
            "endtype": "Тип закінчення",
            "event": "Розклад",
            "executiondate": "Дата виконання",
            "frequency": "Частота",
            "frequencymultiplier": "Множник частоти",
            "grid": "Таблиця",
            "leftdays": "Днів до початку",
            "londdescription": "Повний опис",
            "manual": "Вручну",
            "maxactiveevents": "Максимальна кількість активних розкладів",
            "messagebodydelete": "Бажаєте видалити правило розкладу?",
            "messagebodyplural": "Задано {0} правил розкладу",
            "messagebodyrecalculate": "Бажаєте перерозрахувати розклади з новою датою?",
            "messagebodysingular": "Задано {0} правило розкладу",
            "messagetitle": "Перерозрахунок розкладу",
            "missingdays": "Дні що випали",
            "next30days": "Наступні 30 днів",
            "next7days": "Наступні 7 днів",
            "notificationtemplate": "Шаблон для сповіщення",
            "notificationtext": "Текст повідомлення",
            "occurencies": "Кількість випадків",
            "operation": "Операція",
            "partecipantgroup": "Група учасників",
            "partecipantuser": "Користувач-учасник",
            "priority": "Пріорітет",
            "recalculate": "Перерозрахувати",
            "referent": "Референт",
            "scheduler": "Планувальник",
            "sequencepaneltitle": "Згенерувати розклад",
            "startdate": "Початкова дата",
            "status": "Статус",
            "today": "Сьогодні",
            "type": "Тип",
            "viewevent": "Переглянути розклад",
            "widgetcriterion": "Критерій розрахунку",
            "widgetemails": "Emails",
            "widgetsourcecard": "Картка-джерело"
        },
        "classes": {
            "cards": {
                "addcard": "Додати картку",
                "clone": "Клонувати",
                "clonewithrelations": "Клонувати картку та зв'язки",
                "deletebeaware": "Зауважте що:",
                "deleteblocked": "Неможливо видалити оскільки існують зв’язки з {0}",
                "deletecard": "Видалити картку",
                "deleteconfirmation": "Ви впевнені, що хочете видалити цю карту?",
                "deleterelatedcards": "разом з цим буде видалено {0} пов’язаних карток",
                "deleterelations": "зв’язки з {0} картками буде видалено",
                "label": "Картки",
                "modifycard": "Змінити картку",
                "opencard": "Відкрити картку",
                "print": "Друкувати картку"
            },
            "simple": "Простий",
            "standard": "Стандартний"
        },
        "common": {
            "actions": {
                "add": "Додати",
                "apply": "Застосувати",
                "cancel": "Скасувати",
                "close": "Закрити",
                "delete": "Видалити",
                "edit": "Редагувати",
                "execute": "Виконати",
                "help": "Довідка",
                "load": "Завантажити",
                "open": "Відкрити",
                "refresh": "Оновити дані",
                "remove": "Видалити",
                "save": "Зберегти",
                "saveandapply": "Зберегти і застосувати",
                "saveandclose": "Зберегти та закрити",
                "search": "Пошук",
                "searchtext": "Пошук…"
            },
            "attributes": {
                "nogroup": "Базові дані"
            },
            "dates": {
                "date": "д/м/р",
                "datetime": "д/м/р г:х:с",
                "time": "г:х:с"
            },
            "editor": {
                "clearhtml": "Очистити HTML",
                "expand": "Розгорнути редактор",
                "reduce": "Зменшити редактор",
                "signature": "Додати підпис",
                "unlink": "Відв’язати",
                "unlinkmessage": "Перетворити обране посилання на текст"
            },
            "grid": {
                "disablemultiselection": "Вимкнути множинний вибір",
                "enamblemultiselection": "Увімкнути множинний вибір",
                "export": "Експортувати дані",
                "filterremoved": "Поточний фільтр був видалений",
                "import": "Імпортувати дані",
                "itemnotfound": "Елемент не знайдено",
                "list": "Список",
                "opencontextualmenu": "Відкрити контекстне меню",
                "print": "Друк",
                "printcsv": "Друкувати як CSV",
                "printodt": "Друкувати як ODT",
                "printpdf": "Друкувати як PDF",
                "row": "Елемент",
                "rows": "Елементи",
                "subtype": "Підтип"
            },
            "tabs": {
                "activity": "Активність",
                "attachment": "Вкладення",
                "attachments": "Вкладення",
                "card": "Картка",
                "clonerelationmode": "Режим клонування зв’язків",
                "details": "Подробиці",
                "emails": "Електронні листи",
                "history": "Історія",
                "notes": "Замітки",
                "relations": "Зв'язки",
                "schedules": "Розклади"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Завантажити діаграму",
                "gridhide": "Сховати таблицю з даними",
                "gridshow": "Показати таблицю з даними",
                "openinpopup": "Відкрити у вікні",
                "parametershide": "Сховати параметри даних",
                "parametersshow": "Показати параметри даних",
                "reload": "Перезавантажити"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Додати вкладення з архіву документів",
            "alredyexistfile": "Файл з такою назвою вже існує",
            "archivingdate": "Дата архівації",
            "attachfile": "Прикріпити файл",
            "bcc": "Прихована копія",
            "cc": "Копія",
            "composeemail": "Створити електронний лист",
            "composefromtemplate": "Створити з шаблону",
            "delay": "Затримка",
            "delays": {
                "day1": "За 1 день",
                "days2": "За 2 дні",
                "days4": "За 4 дні",
                "hour1": "1 година",
                "hours2": "2 години",
                "hours4": "4 години",
                "month1": "За 1 місяць",
                "negativeday1": "1 день тому",
                "negativedays2": "2 дні тому",
                "negativedays4": "4 дні тому",
                "negativehour1": "1 годину тому",
                "negativehours2": "2 години тому",
                "negativehours4": "4 години тому",
                "negativemonth1": "1 місяць тому",
                "negativeweek1": "1 тиждень тому",
                "negativeweeks2": "2 тижні тому",
                "none": "Ніяка",
                "week1": "За 1 тиждень",
                "weeks2": "За 2 тижні"
            },
            "dmspaneltitle": "Обрати вкладення з бази даних",
            "edit": "Редагувати",
            "from": "Від",
            "gridrefresh": "Оновити таблицю",
            "keepsynchronization": "Постійно синхронізувати",
            "message": "Повідомлення",
            "regenerateallemails": "Відновити всі електронні адреси",
            "regenerateemail": "Відновити електронну адресу",
            "remove": "Видалити",
            "remove_confirmation": "Точно видалити цей електронний лист?",
            "reply": "Відповісти",
            "replyprefix": "{0} {1} писав:",
            "selectaclass": "Виберіть клас",
            "sendemail": "Надіслати електронного листа",
            "signature": "Підпис",
            "statuses": {
                "draft": "Чернетки",
                "error": "Помилки",
                "outgoing": "Вихідні",
                "received": "Отримані",
                "sent": "Відправлені"
            },
            "subject": "Тема",
            "to": "До",
            "view": "Переглянути"
        },
        "errors": {
            "autherror": "Невірне ім'я користувача чи пароль",
            "classnotfound": "Клас {0} не знайдено",
            "fieldrequired": "Це обов'язкове поле",
            "invalidfilter": "Некоректний фільтр",
            "notfound": "Елемент не знайдено"
        },
        "filters": {
            "actions": "Дії",
            "addfilter": "Додати фільтр",
            "any": "Будь-який",
            "attachments": "Вкладення",
            "attachmentssearchtext": "Пошук тексту у владеннях",
            "attribute": "Вибрати атрибут",
            "attributes": "Атрибути",
            "clearfilter": "Очистити фільтр",
            "clone": "Клонувати",
            "copyof": "Копія з",
            "currentgroup": "Поточна група",
            "currentuser": "Поточний користувач",
            "defaultset": "Встановити за замовчуванням",
            "defaultunset": "Відмінити за замовчуванням",
            "description": "Опис",
            "domain": "Домен",
            "errorname": "Назва фільтру вже використовуються",
            "filterdata": "Фільтрувати дані",
            "fromfilter": "З фільтру",
            "fromselection": "Із виділенного",
            "group": "Група",
            "ignore": "Ігнорувати",
            "migrate": "Мігрує",
            "name": "Ім'я",
            "newfilter": "Новый фильтр",
            "noone": "Жодного",
            "operator": "Оператор",
            "operators": {
                "beginswith": "Починається з",
                "between": "Між",
                "contained": "Міститься",
                "containedorequal": "Міститься або рівний",
                "contains": "Містить",
                "containsorequal": "Містить або рівні",
                "descriptionbegin": "Опис починається з",
                "descriptioncontains": "Опис містить",
                "descriptionends": "Опис закінчується на",
                "descriptionnotbegin": "Опис не починається з",
                "descriptionnotcontain": "Опис не містить",
                "descriptionnotends": "Опис не закінчується на",
                "different": "Різний",
                "doesnotbeginwith": "Не починається з",
                "doesnotcontain": "Не містить",
                "doesnotendwith": "Не закінчується на",
                "endswith": "Закінчується на",
                "equals": "Рівний",
                "greaterthan": "Більше ніж",
                "isnotnull": "Не пусте",
                "isnull": "Пусте",
                "lessthan": "Менше ніж"
            },
            "relations": "Зв'язки",
            "type": "Тип",
            "typeinput": "Вхідний параметр",
            "user": "Користувач",
            "value": "Значення"
        },
        "gis": {
            "card": "Картка",
            "cardsMenu": "Меню карток",
            "code": "Код",
            "description": "Опис",
            "extension": {
                "errorCall": "Помилка",
                "noResults": "Немає результатів"
            },
            "externalServices": "Зовнішні сервіси",
            "geographicalAttributes": "Географічні атрибути",
            "geoserverLayers": "Географічні шари",
            "layers": "Шари",
            "list": "Список",
            "longpresstitle": "Геоелемент в області",
            "map": "Карта",
            "mapServices": "Картографічні сервіси",
            "position": "Позиція",
            "root": "Корінь",
            "tree": "Дерево",
            "type": "Тип",
            "view": "Вид",
            "zoom": "Масштаб"
        },
        "history": {
            "activityname": "Назва активності",
            "activityperformer": "Виконавець активності",
            "begindate": "Дата початку",
            "enddate": "Дата закінчення",
            "processstatus": "Статус",
            "user": "Користувач"
        },
        "importexport": {
            "database": {
                "uri": "URI бази даних",
                "user": "Користувач бази даних"
            },
            "downloadreport": "Звіт завантаження",
            "emailfailure": "Виникла помилка під час відправлення email!",
            "emailmessage": "Вкладений звіт імпорту файлу {0} на дату {1}",
            "emailsubject": "Звіт з імпорту даних",
            "emailsuccess": "Email було успішно відправлено!",
            "export": "Експортувати",
            "exportalldata": "Всі дані",
            "exportfiltereddata": "Лише дані, що відповідають фільтру таблиці",
            "gis": {
                "shapeimportdisabled": "Імпорт фігур не передбачено для цього шаблону",
                "shapeimportenabled": "Налаштування імпорту фігур"
            },
            "ifc": {
                "card": "Картка",
                "project": "Проєкт",
                "sourcetype": "Імпортувати з"
            },
            "import": "Імпортувати",
            "importresponse": "Відповідь імпорту",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Помилки",
                "linenumber": "Номер рядка",
                "message": "Повідомлення",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Опрацьовані рядки",
                "recordnumber": "Номер запису",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Відправити звіт",
            "template": "Шаблон",
            "templatedefinition": "Визначення шаблону"
        },
        "joinviews": {
            "active": "Активний",
            "addview": "Додати представлення",
            "alias": "Псевдо",
            "attribute": "Атрибут",
            "attributes": "Атрибути",
            "attributesof": "Атрибути: {0}",
            "createview": "Створити представлення",
            "datasorting": "Сортування даних",
            "delete": "Видалити",
            "deleteview": "Видалити представлення",
            "deleteviewconfirm": "Ви впревнені, що хочете видалити представлення?",
            "description": "Опис",
            "disable": "Відключити",
            "domainalias": "Псевдо домену",
            "domainsof": "Домени {0}",
            "edit": "Редагувати",
            "editview": "Налаштування вікна редагування",
            "enable": "Увімнути",
            "fieldsets": "Набір полів",
            "filters": "Фільтри",
            "generalproperties": "Основні властивості",
            "group": "Група",
            "innerjoin": "Внутрішнє об’єднання",
            "jointype": "Тип об’єднання",
            "joinview": "Представлення з об’єднання",
            "klass": "Клас",
            "manageview": "Керувати представленням",
            "masterclass": "Головний клас",
            "masterclassalias": "Псевдо головного класу",
            "name": "Назва",
            "newjoinview": "Нове представлення з об’єднання",
            "outerjoin": "Зовнішнє об’єднання",
            "pleaseseleceavalidmasterclass": "Будь ласка оберіть коректний головний клас",
            "refreshafteredit": "Бажаєте оновити сторінку щоб побачити зміни?",
            "selectatleastoneattribute": "Будь ласка оберіть принаймні один атрибут для відображення в таблиці і стислій таблиці на кроці 4.",
            "showingrid": "Показуваьи в таблиці",
            "showinreducedgrid": "Показувати в стислій таблиці",
            "targetalias": "Псевдо цільового класу"
        },
        "login": {
            "buttons": {
                "login": "Увійти",
                "logout": "Змінити користувача"
            },
            "fields": {
                "group": "Група",
                "language": "Мова",
                "password": "Пароль",
                "tenants": "Орендарі",
                "username": "Ім'я користувача"
            },
            "loggedin": "Авторизовано",
            "sso": {
                "loginfailure": "Помилка входу в систему",
                "loginwith": "Увійти як {0}",
                "or": "або"
            },
            "title": "Вхід",
            "welcome": "З поверненням, {0}."
        },
        "main": {
            "administrationmodule": "Модуль адміністрування",
            "baseconfiguration": "Базова конфігурація",
            "cardlock": {
                "lockedmessage": "Ви не можете редагувати цю картку, оскільки її редагує {0}.",
                "someone": "хтось"
            },
            "changegroup": "Змінити групу",
            "changetenant": "Змінити {0}",
            "confirmchangegroup": "Ви точно хочете змінити групу?",
            "confirmchangetenants": "Ви точно хочете змінити активних орендарів?",
            "confirmdisabletenant": "Ви точно хочете вимкнути прапорець \"Ігнорувати орендарів\"?",
            "confirmenabletenant": "Ви точно хочете ввімкнути прапорець \"Ігнорувати орендарів\"?",
            "ignoretenants": "Ігнорувати {0}",
            "info": "Інформація",
            "logo": {
                "cmdbuild": "Логотип CMDBuild",
                "cmdbuildready2use": "Логотип CMDBuild READY2USE",
                "companylogo": "Логотип компанії",
                "openmaint": "Логотип openMAINT"
            },
            "logout": "Вийти",
            "managementmodule": "Модуль керування даними",
            "multigroup": "Множинна група",
            "multitenant": "Множинна {0}",
            "navigation": "Навігація",
            "pagenotfound": "Сторінку не знайдено",
            "password": {
                "change": "Змінити пароль",
                "confirm": "Підтвердити пароль",
                "email": "E-mail адреса",
                "err_confirm": "Паролі не збігаються",
                "err_diffprevious": "Пароль не може збігатися з попереднім",
                "err_diffusername": "Пароль не може збігатися з іменем користувача",
                "err_length": "Пароль повинен містити не менше {0} символів",
                "err_reqdigit": "Пароль повинен містити принаймні одну цифру",
                "err_reqlowercase": "Пароль повинен містити принаймні одну малу літеру",
                "err_requppercase": "Пароль повинен містити принаймні одну велику літеру",
                "expired": "Час дії паролю сплив. Ви маєте змінити його зараз",
                "forgotten": "Я забув свій пароль",
                "new": "Новий пароль",
                "old": "Старий пароль",
                "recoverysuccess": "Ми відправили вам email з інструкціями для відновлення паролю.",
                "reset": "Скинути пароль",
                "saved": "Пароль успішно збережено!"
            },
            "pleasecorrecterrors": "Будь ласка, виправте вказані помилки!",
            "preferences": {
                "comma": "Кома",
                "decimalserror": "Поле десяткових знаків має бути присутнім",
                "decimalstousandserror": "Роздільники груп розрядів і десяткового дробу мають відрізнятися",
                "default": "За замовчуванням",
                "defaultvalue": "Значення за замовчанням",
                "firstdayofweek": "Перший день тижня",
                "gridpreferencesclear": "Очистити налаштування таблиці",
                "gridpreferencescleared": "Налаштування таблиці очищено!",
                "gridpreferencessave": "Зберегти налаштування таблиці",
                "gridpreferencessaved": "Налаштування таблиці збережено!",
                "gridpreferencesupdate": "Оновити налаштування таблиці",
                "labelcsvseparator": "CSV розділювач",
                "labeldateformat": "Формат дати",
                "labeldecimalsseparator": "Роздільник десяткового дробу",
                "labellanguage": "Мова",
                "labelthousandsseparator": "Роздільник груп розрядів",
                "labeltimeformat": "Формат часу",
                "msoffice": "Microsoft Office",
                "period": "Крапка",
                "preferredfilecharset": "CSV кодування",
                "preferredofficesuite": "Бажаний офісний пакет",
                "space": "Пробіл",
                "thousandserror": "Поле тисячних знаків має бути присутнім",
                "timezone": "Часовий пояс",
                "twelvehourformat": "12-годинний формат",
                "twentyfourhourformat": "24-годинний формат"
            },
            "searchinallitems": "Пошук в усіх елементах",
            "selectdeselettenants": "Вибрати все/Зняти виділення",
            "treenavcontenttitle": "{0} з {1}",
            "userpreferences": "Налаштування"
        },
        "menu": {
            "allitems": "Всі елементи",
            "classes": "Класи",
            "custompages": "Спеціальні сторінки",
            "dashboards": "Інформаційні панелі",
            "processes": "Процеси",
            "reports": "Звіти",
            "views": "Вигляди"
        },
        "notes": {
            "edit": "Змінити замітку"
        },
        "notifier": {
            "attention": "Увага",
            "error": "Помилка",
            "genericerror": "Загальна помилка",
            "genericinfo": "Загальне повідомлення",
            "genericwarning": "Загальне попередження",
            "info": "Повідомлення",
            "success": "Успіх",
            "warning": "Попередження"
        },
        "patches": {
            "apply": "Застосувати латки",
            "category": "Категорія",
            "description": "Опис",
            "name": "Назва",
            "patches": "Латки"
        },
        "processes": {
            "abortconfirmation": "Ви впевнені, що хочете скасувати цей процес?",
            "abortprocess": "Скасувати процес",
            "action": {
                "advance": "Просування",
                "label": "Дія"
            },
            "activeprocesses": "Активні процеси",
            "allstatuses": "Всі",
            "editactivity": "Змінити активність",
            "openactivity": "Відкрити активність",
            "startworkflow": "Запустити",
            "workflow": "Робочий процес"
        },
        "relationGraph": {
            "activity": "активність",
            "allLabelsOnGraph": "всі підписи на графі",
            "card": "Картка",
            "cardList": "Список карток",
            "cardRelations": "Відношення картки",
            "choosenaviagationtree": "Обрати навігаційне дерево",
            "class": "Клас",
            "classList": "Список класів",
            "compoundnode": "Складений вузол",
            "disable": "Вимкнути",
            "edges": "Грані",
            "enable": "Увімнути",
            "labelsOnGraph": "підказка на графі",
            "level": "Рівень",
            "nodes": "Вузли",
            "openRelationGraph": "Відкрити граф відношень",
            "qt": "Qt",
            "refresh": "Оновити",
            "relation": "відношення",
            "relationGraph": "Граф відношень",
            "reopengraph": "Перевідкрити графік із цього вузла"
        },
        "relations": {
            "adddetail": "Додати детальне",
            "addrelations": "Додати відношення",
            "attributes": "Атрибути",
            "begindate": "Дата початку",
            "code": "Код",
            "deletedetail": "Видалити детальне",
            "deleterelation": "Видалити відношення",
            "deleterelationconfirm": "Ви впевнені, що хочете видалити цей зв’язок?",
            "description": "Опис",
            "editcard": "Редагувати картку",
            "editdetail": "Редагувати детальне",
            "editrelation": "Редагувати відношення",
            "extendeddata": "Розширені дані",
            "mditems": "елементи",
            "missingattributes": "Відсутні обов’язкові атрибути",
            "opencard": "Відкрити пов'язану картку",
            "opendetail": "Показати детальне",
            "type": "Тип"
        },
        "reports": {
            "csv": "CSV",
            "download": "Завантажити",
            "format": "Формат",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Друк",
            "reload": "Перезавантажити",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "За замовчуванням"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Щодня"
                        },
                        "monthly": {
                            "description": "Щомісяця"
                        },
                        "once": {
                            "description": "Один раз"
                        },
                        "weekly": {
                            "description": "Щотижня"
                        },
                        "yearly": {
                            "description": "Щороку"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "За замовчуванням"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Додати тематизм",
            "analysisType": "Тип аналізу",
            "attribute": "Атрибут",
            "calculateRules": "Генерувати правила стилів",
            "clearThematism": "Очистити тематизм",
            "color": "Колір",
            "defineLegend": "Визначення легенди",
            "defineThematism": "Визначення тематизму",
            "function": "Функція",
            "generate": "Генерувати",
            "geoAttribute": "Географічний атрибут",
            "graduated": "Градуйований",
            "highlightSelected": "Підсвітити виділений елемент",
            "intervals": "Інтервальний",
            "legend": "Легенда",
            "name": "Ім'я",
            "newThematism": "Новий тематизм",
            "punctual": "Точковий",
            "quantity": "Кількість",
            "segments": "Сегменти",
            "source": "Джерело",
            "table": "Таблиця",
            "thematism": "Тематизми",
            "value": "Значення"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Вийти без збереження",
                    "stayinedit": "Повернутися до редагування"
                },
                "savebeforeexit": "У вкладеннях є незбережені зміни. Бажаєте зберегти перед виходом?",
                "saveprocessmessage": "Вкладення можна зберегти лише у наявні картки. Натискаючи на зберегти буде створено екземпляр процесу з даними введеними у формі."
            },
            "customform": {
                "addrow": "Додати рядок",
                "clonerow": "Клонувати рядок",
                "datanotvalid": "Некоректні дані",
                "deleterow": "Видалити рядок",
                "editrow": "Редагувати рядок",
                "export": "Експортувати",
                "import": "Імпортувати",
                "importexport": {
                    "expattributes": "Дані для експорту",
                    "file": "Файл",
                    "filename": "Ім'я файлу",
                    "format": "Формат",
                    "importmode": "Режим імпорту",
                    "keyattributes": "Ключові атрибути",
                    "missingkeyattr": "Будь ласка, оберіть щонайменше один ключовий атрибут",
                    "modeadd": "Додати",
                    "modemerge": "Злити",
                    "modereplace": "Замінити",
                    "separator": "Розділювач"
                },
                "refresh": "Оновити до налаштувань за замовчанням"
            },
            "linkcards": {
                "checkedonly": "Лише перевірені",
                "editcard": "Змінити картку",
                "opencard": "Відкрити картку",
                "refreshselection": "Застосувати вибір за замовчуванням",
                "togglefilterdisabled": "Вимкнути фільтр в таблиці",
                "togglefilterenabled": "Увімкнути фільтр в таблиці"
            },
            "required": "Цей віджет потрібний."
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
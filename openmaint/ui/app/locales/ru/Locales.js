(function() {
    Ext.define('CMDBuildUI.locales.ru.Locales', {
        "requires": ["CMDBuildUI.locales.ru.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "ru",
        "administration": CMDBuildUI.locales.ru.LocalesAdministration.administration,
        "attachments": {
            "add": "Вложить файл",
            "attachmenthistory": "История Привязанности",
            "author": "Автор",
            "browse": "Просмотр и ад;",
            "category": "Категория",
            "code": "Код",
            "creationdate": "Дата создания",
            "deleteattachment": "Удаление вложения",
            "deleteattachment_confirmation": "Вы уверены, что хотите удалить это вложение?",
            "description": "Описание",
            "download": "Скачать",
            "dropfiles": "Удаление файлов здесь",
            "editattachment": "Изменить вложение",
            "file": "Файл",
            "filealreadyinlist": "Файл {0} уже в списке.",
            "filename": "Имя файла",
            "fileview": "Просмотреть вложение",
            "invalidfiles": "Удаление недействительных файлов",
            "majorversion": "Основная версия",
            "maxsize": "Максимально допустимый размер файла составляет {0} МБ.",
            "metadata": "Метаданные",
            "modificationdate": "Дата изменения",
            "new": "Новое вложение",
            "nocategory": "Без категории",
            "preview": "Предварительный просмотр",
            "removefile": "Удалить файл",
            "statuses": {
                "empty": "Пустой файл",
                "error": "Ошибка",
                "extensionNotAllowed": "Расширение файла не допускается",
                "loaded": "Загружен",
                "ready": "Готов",
                "toolarge": "Слишком большой"
            },
            "successupload": "{0} загруженных вложений.",
            "uploadfile": "Загрузить файл…",
            "version": "Версия",
            "viewhistory": "Просмотр истории вложений",
            "warningmessages": {
                "atleast": "Предупреждение: был загружен {0} вложения типа \"{1}\". Эта категория ожидает, по крайней мере, {2} вложений",
                "exactlynumber": "Предупреждение: был загружен {0} вложения типа \"{1}\". Эта категория ожидает {2} вложений",
                "maxnumber": "Предупреждение: было загружено {0} вложение типа \"{1}\". Эта категория ожидает в большинстве {2} вложений"
            },
            "wrongfileextension": "{0} расширение файла не допускается"
        },
        "bim": {
            "bimViewer": "Бим Зритель",
            "card": {
                "label": "Карта"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Размер ограничивающей рамки по оси X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Размер ограничивающей рамки по оси Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Размер ограничивающей рамки по оси Z",
                "LARGEST_FACE_AREA": "Самая большая площадь лица",
                "LARGEST_FACE_DIRECTION": "Направление наибольшего лица",
                "SURFACE_AREA_ALONG_X": "Площадь поверхности по оси X",
                "SURFACE_AREA_ALONG_Y": "Площадь поверхности по оси Y",
                "SURFACE_AREA_ALONG_Z": "Площадь поверхности по оси Z",
                "TOTAL_SHAPE_VOLUME": "Общий объем формы",
                "TOTAL_SURFACE_AREA": "Общая площадь поверхности",
                "WALKABLE_SURFACE_AREA": "Проходимая площадь поверхности",
                "calculated": "Рассчитано",
                "description": "Описание",
                "guid": "GUID",
                "label": "Свойства",
                "name": "Имя",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Слои",
                "menu": {
                    "hideAll": "Скрыть все",
                    "showAll": "Показать все"
                },
                "name": "Имя",
                "qt": "Qt",
                "visibility": "Видимость"
            },
            "menu": {
                "camera": "Камера",
                "frontView": "Вид спереди",
                "mod": "Средство просмотра",
                "orthographic": "Ортографическая камера",
                "pan": "Переместить",
                "perspective": "Перспективная камера",
                "resetView": "Сбросить Представление",
                "rotate": "Повернуть",
                "sideView": "Вид сбоку",
                "topView": "Вид сверху"
            },
            "showBimCard": "Открытый 3D-зритель",
            "tree": {
                "arrowTooltip": "Выберите элемент",
                "columnLabel": "Дерево",
                "label": "Дерево",
                "open_card": "Открыть соответствующую карту",
                "root": "Корень Ifc"
            }
        },
        "bulkactions": {
            "abort": "Прерывание выбранных элементов",
            "alertdownloadattachments": "Некоторые вложения не будут загружены, потому что они еще не были сохранены на сервере.",
            "alertnoattachmentsdownload": "Никакие вложения не будут загружены, потому что они еще не были сохранены на сервере",
            "cancelselection": "Отмена выбора",
            "confirmabort": "Вы прерываете {0} экземплярах процесса. Вы уверены, что хотите продолжить?",
            "confirmdelete": "Вы удаляете {0} карты. Вы уверены, что хотите продолжить?",
            "confirmdeleteattachements": "Вы удаляете {0} вложения. Вы уверены, что хотите продолжить?",
            "confirmedit": "Вы изменяете {0} для {1} карт. Вы уверены, что хотите продолжить?",
            "delete": "Удаление выбранных элементов",
            "download": "Скачать выбранные вложения",
            "downloadall": "Скачать все вложения",
            "edit": "Редактировать выбранные элементы",
            "selectall": "Выберите все элементы"
        },
        "calendar": {
            "active_expired": "Активный/Просроченный",
            "add": "Добавить",
            "advancenotification": "Предварительное уведомление",
            "allcategories": "Все категории",
            "alldates": "Все даты",
            "associatedcard": "Связанная карта",
            "calculated": "Рассчитывается",
            "calendar": "Календарь",
            "cancel": "Отметка как отмененная",
            "category": "Категории",
            "class": "Класс",
            "cm_confirmcancel": "Вы уверены, что хотите отметить как отмененные выбранные расписания?",
            "cm_confirmcomplete": "Вы уверены, что хотите отметить как выполненные выбранные графики?",
            "cm_markcancelled": "Отметка как отмененные выбранные расписания",
            "cm_markcomplete": "Отметьте как заполненные выбранные расписания",
            "complete": "Полный",
            "completed": "Завершена",
            "date": "Дата",
            "days": "Дней",
            "delaybeforedeadline": "Задержка до крайнего срока",
            "delaybeforedeadlinevalue": "Задержка до срока значение",
            "description": "Описание",
            "editevent": "Изменить расписание",
            "enddate": "Дата окончания",
            "endtype": "Конечный тип",
            "event": "Расписание",
            "executiondate": "Дата исполнения",
            "frequency": "Частота",
            "frequencymultiplier": "Множитель частоты",
            "grid": "Сетки",
            "leftdays": "Дни, чтобы пойти",
            "londdescription": "Полное описание",
            "manual": "Вручную",
            "maxactiveevents": "Макс активных событий",
            "messagebodydelete": "Хотите удалить правило планировщиков?",
            "messagebodyplural": "Есть правила {0} расписания",
            "messagebodyrecalculate": "Хотите пересчитать правило расписаний с новой датой?",
            "messagebodysingular": "Существует правило {0} расписания",
            "messagetitle": "Перерасчет расписания",
            "missingdays": "Отсутствующие дни",
            "next30days": "Следующие 30 дней",
            "next7days": "Следующие 7 дней",
            "notificationtemplate": "Шаблон, используемый для уведомления",
            "notificationtext": "Текст уведомления",
            "occurencies": "Количество происшествий",
            "operation": "Операции",
            "partecipantgroup": "Группа участников",
            "partecipantuser": "Пользователь-участник",
            "priority": "Приоритет",
            "recalculate": "Пересчитать",
            "referent": "Референт",
            "scheduler": "Планировщик",
            "sequencepaneltitle": "Создание расписаний",
            "startdate": "Дата начала",
            "status": "Статус",
            "today": "Сегодня",
            "type": "Тип",
            "viewevent": "Посмотреть расписание",
            "widgetcriterion": "Критерий расчета",
            "widgetemails": "Электронные письма",
            "widgetsourcecard": "Исходное удостоверение"
        },
        "classes": {
            "cards": {
                "addcard": "Добавить запись",
                "clone": "Дублировать",
                "clonewithrelations": "Карта клонов и отношения",
                "deletebeaware": "Имейте в виду, что:",
                "deleteblocked": "Продолжить удаление невозможно, так как есть отношения с {0}.",
                "deletecard": "Удалить запись",
                "deleteconfirmation": "Вы уверены, что хотите удалить эту карту?",
                "deleterelatedcards": "также {0}, связанные карты будут удалены",
                "deleterelations": "отношения с {0} картами будут удалены",
                "label": "Конфигурационные единицы",
                "modifycard": "Редактировать запись",
                "opencard": "Открыть карты",
                "print": "Печать карты"
            },
            "simple": "Простой",
            "standard": "Стандартный"
        },
        "common": {
            "actions": {
                "add": "Добавить",
                "apply": "Применить",
                "cancel": "Отменить",
                "close": "Закрыть",
                "delete": "Удаление",
                "edit": "Редактировать",
                "execute": "Выполнить",
                "help": "Справка",
                "load": "Нагрузки",
                "open": "Открыть",
                "refresh": "Обновление данных",
                "remove": "Удалить",
                "save": "Сохранить",
                "saveandapply": "Сохранить и применить",
                "saveandclose": "Сохранить и закрыть",
                "search": "Поиск",
                "searchtext": "Поиск..."
            },
            "attributes": {
                "nogroup": "Базовые данные"
            },
            "dates": {
                "date": "д/м/y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Очистить HTML",
                "expand": "Расширить редактор",
                "reduce": "Уменьшить редактор",
                "signature": "Добавить подпись",
                "unlink": "Отменить связь",
                "unlinkmessage": "Преобразуйте выделенную гиперссылку в текст."
            },
            "grid": {
                "disablemultiselection": "Отключить многофункциональный выбор",
                "enamblemultiselection": "Включить многофункциональный выбор",
                "export": "Данные по экспорту",
                "filterremoved": "Текущий фильтр удален",
                "import": "Данные по импорту",
                "itemnotfound": "Элемент не найден",
                "list": "Список",
                "opencontextualmenu": "Открытое контекстное меню",
                "print": "Печати",
                "printcsv": "Печать как CSV",
                "printodt": "Печать как ODT",
                "printpdf": "Печать как PDF",
                "row": "Элемента",
                "rows": "Элементы",
                "subtype": "Подтип"
            },
            "tabs": {
                "activity": "Процесс",
                "attachment": "Вложения",
                "attachments": "Вложенные файлы",
                "card": "Данные",
                "clonerelationmode": "Режим отношений клонов",
                "details": "Подробно",
                "emails": "Электронные письма",
                "history": "История",
                "notes": "Комментарии",
                "relations": "Связи",
                "schedules": "Расписание"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Скачать диаграмму",
                "gridhide": "Скрытие сетки данных",
                "gridshow": "Показать сетку данных",
                "openinpopup": "Открыть во всплывающем окне",
                "parametershide": "Скрыть параметры данных",
                "parametersshow": "Показать параметры данных",
                "reload": "Перезагрузить"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Добавление вложений из архива документов",
            "alredyexistfile": "Уже существует файл с этим именем",
            "archivingdate": "Дата",
            "attachfile": "Вложить файл",
            "bcc": "Скрытая копия",
            "cc": "Копия",
            "composeemail": "Составление сообщения",
            "composefromtemplate": "Составить из шаблона",
            "delay": "Задержка",
            "delays": {
                "day1": "Через 1 день",
                "days2": "Через 2 дня",
                "days4": "Через 4 дня",
                "hour1": "1 час",
                "hours2": "2 часа",
                "hours4": "4 часа",
                "month1": "Через 1 месяц",
                "negativeday1": "1 день до",
                "negativedays2": "За 2 дня до",
                "negativedays4": "За 4 дня до",
                "negativehour1": "1 час до",
                "negativehours2": "2 часа до",
                "negativehours4": "За 4 часа до",
                "negativemonth1": "1 месяц до",
                "negativeweek1": "За 1 неделю до",
                "negativeweeks2": "2 недели до",
                "none": "нисколько",
                "week1": "Через 1 неделю",
                "weeks2": "Через 2 недели"
            },
            "dmspaneltitle": "Выберите вложение из базы данных",
            "edit": "Редактировать",
            "from": "От",
            "gridrefresh": "Обновление сетки",
            "keepsynchronization": "Сохранять синхронизацию",
            "message": "Сообщение",
            "regenerateallemails": "Восстановить все электронные письма",
            "regenerateemail": "Повторить генерацию почтовых сообщений",
            "remove": "Удалить",
            "remove_confirmation": "Вы уверены, что хотите удалить это письмо?",
            "reply": "Ответить",
            "replyprefix": "На {0}, {1} написал:",
            "selectaclass": "Выберите класс",
            "sendemail": "Отправить электронное письмо",
            "signature": "Подпись",
            "statuses": {
                "draft": "Черновики",
                "error": "Ошибка",
                "outgoing": "Исходящие",
                "received": "Входящие",
                "sent": "Отправленные"
            },
            "subject": "Тема",
            "to": "До",
            "view": "Представление данных"
        },
        "errors": {
            "autherror": "Неверное имя пользователя или пароль",
            "classnotfound": "Класс {0} не найден",
            "fieldrequired": "Это поле требуется",
            "invalidfilter": "Недействительный фильтр",
            "notfound": "Элемент не найден"
        },
        "filters": {
            "actions": "Действия",
            "addfilter": "Создать фильтр",
            "any": "Любой",
            "attachments": "Вложения",
            "attachmentssearchtext": "Текст поиска вложений",
            "attribute": "Выберите атрибут",
            "attributes": "Атрибуты",
            "clearfilter": "Сбросить фильтр",
            "clone": "Дублировать",
            "copyof": "Копия",
            "currentgroup": "Текущая группа",
            "currentuser": "Текущий пользователь",
            "defaultset": "Установить по умолчанию",
            "defaultunset": "Выгрузка из дефолта",
            "description": "Описание",
            "domain": "Связь",
            "errorname": "Название фильтра уже используется",
            "filterdata": "Данные о фильтре",
            "fromfilter": "Из фильтра",
            "fromselection": "Из отбора",
            "group": "Группы",
            "ignore": "Игнорировать",
            "migrate": "Переносит",
            "name": "Имя",
            "newfilter": "Новый фильтр",
            "noone": "Ни один из",
            "operator": "Оператор",
            "operators": {
                "beginswith": "Начинается с",
                "between": "Между",
                "contained": "Содержится",
                "containedorequal": "Содержится или равен",
                "contains": "Содержит",
                "containsorequal": "Содержит или равно",
                "descriptionbegin": "Описание начинается с",
                "descriptioncontains": "Описание содержит",
                "descriptionends": "Описание заканчивается на",
                "descriptionnotbegin": "Описание не начинается с",
                "descriptionnotcontain": "Описание не содержит",
                "descriptionnotends": "Описание не заканчивается на",
                "different": "Различных",
                "doesnotbeginwith": "Не начинается с",
                "doesnotcontain": "Не содержит",
                "doesnotendwith": "Не заканчивается",
                "endswith": "Окончание с",
                "equals": "Равно",
                "greaterthan": "Больше",
                "isnotnull": "Не является недействительным",
                "isnull": "Является недействительным",
                "lessthan": "Менее"
            },
            "relations": "Связи",
            "type": "Тип",
            "typeinput": "Переменный параметр",
            "user": "Пользователя",
            "value": "Значение"
        },
        "gis": {
            "card": "Данные",
            "cardsMenu": "Меню карт",
            "code": "Код",
            "description": "Описание",
            "extension": {
                "errorCall": "Ошибка",
                "noResults": "Нет результатов"
            },
            "externalServices": "Внешние сервисы",
            "geographicalAttributes": "Гео. атрибуты",
            "geoserverLayers": "Слои Geoserver",
            "layers": "Слои",
            "list": "Список",
            "longpresstitle": "Геоэлементы в районе",
            "map": "Карта",
            "mapServices": "Картографические услуги",
            "position": "Положение",
            "root": "Корень",
            "tree": "Навигационное дерево",
            "type": "Тип",
            "view": "Представление данных",
            "zoom": "Масштабировать"
        },
        "history": {
            "activityname": "Действие",
            "activityperformer": "Исполнитель",
            "begindate": "Начальная дата",
            "enddate": "Конечная дата",
            "processstatus": "Состояние",
            "user": "Пользователь"
        },
        "importexport": {
            "database": {
                "uri": "База данных URI",
                "user": "Пользователь базы данных"
            },
            "downloadreport": "Скачать отчет",
            "emailfailure": "Ошибка произошла при отправке электронной почты!",
            "emailmessage": "Приложенный отчет об импорте файла \"{0}\" в {1}",
            "emailsubject": "Отчет об данных об импорте",
            "emailsuccess": "Письмо было отправлено успешно!",
            "export": "Экспорт",
            "exportalldata": "Все данные",
            "exportfiltereddata": "Только данные, соответствующие фильтру сетки",
            "gis": {
                "shapeimportdisabled": "Импорт форм не включен для этого шаблона",
                "shapeimportenabled": "Конфигурация импорта форм"
            },
            "ifc": {
                "card": "Карта",
                "project": "Проекта",
                "sourcetype": "Импорт из"
            },
            "import": "Импорт",
            "importresponse": "Реакция на импорт",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Ошибки",
                "linenumber": "Номер строки",
                "message": "Сообщение",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Обработанные строки",
                "recordnumber": "Номер записи",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Отправить отчет",
            "template": "Шаблон",
            "templatedefinition": "Определение шаблона"
        },
        "joinviews": {
            "active": "Активный",
            "addview": "Добавить вид",
            "alias": "Псевдоним",
            "attribute": "Атрибут",
            "attributes": "Атрибуты",
            "attributesof": "Атрибуты: {0}",
            "createview": "Создать представление",
            "datasorting": "Сортировка данных",
            "delete": "Удалять",
            "deleteview": "Удалить представление",
            "deleteviewconfirm": "Вы уверены, что хотите удалить это представление?",
            "description": "Описание",
            "disable": "Отключить",
            "domainalias": "Псевдоним домена",
            "domainsof": "Домены {0}",
            "edit": "Редактировать",
            "editview": "Изменить конфигурацию просмотра",
            "enable": "Включить",
            "fieldsets": "Наборы полей",
            "filters": "Фильтры",
            "generalproperties": "Общие свойства",
            "group": "Группа",
            "innerjoin": "Внутреннее соединение",
            "jointype": "Тип соединения",
            "joinview": "Вид из присоединения",
            "klass": "Класс",
            "manageview": "Управление просмотром",
            "masterclass": "Мастер класс",
            "masterclassalias": "Псевдоним мастер-класса",
            "name": "Имя",
            "newjoinview": "Новый вид из присоединения",
            "outerjoin": "Внешнее соединение",
            "pleaseseleceavalidmasterclass": "Выберите действующий мастер-класс",
            "refreshafteredit": "Вы хотите обновить страницу, чтобы увидеть изменения?",
            "selectatleastoneattribute": "Выберите хотя бы один атрибут для отображения в сетке и в уменьшенной сетке на шаге 4.",
            "showingrid": "Показать в сетке",
            "showinreducedgrid": "Показать в уменьшенной сетке",
            "targetalias": "Псевдоним целевого класса"
        },
        "login": {
            "buttons": {
                "login": "Вход в систему",
                "logout": "Сменить пользователя"
            },
            "fields": {
                "group": "Группы",
                "language": "Язык",
                "password": "Пароль",
                "tenants": "Арендаторов",
                "username": "Имя пользователя"
            },
            "loggedin": "Зарегистрирован в",
            "sso": {
                "loginfailure": "Ошибка входа",
                "loginwith": "Войти с {0}",
                "or": "или же"
            },
            "title": "Вход в систему",
            "welcome": "С возвращением {0}."
        },
        "main": {
            "administrationmodule": "Администрирование",
            "baseconfiguration": "Базовая конфигурация",
            "cardlock": {
                "lockedmessage": "Вы не можете редактировать эту карту, потому что она редактируется.",
                "someone": "кто-нибудь"
            },
            "changegroup": "Группа изменений",
            "changetenant": "Изменить {0}",
            "confirmchangegroup": "Вы уверены, что хотите изменить группу?",
            "confirmchangetenants": "Вы уверены, что хотите сменить активных арендаторов?",
            "confirmdisabletenant": "Вы уверены, что хотите отключить флаг \"Игнорировать жильцов\"?",
            "confirmenabletenant": "Вы уверены, что хотите включить флаг \"Игнорировать арендаторов\"?",
            "ignoretenants": "Игнорировать {0}",
            "info": "Информация",
            "logo": {
                "cmdbuild": "Логотип CMDBuild",
                "cmdbuildready2use": "Логотип CMDBuild READY2USE",
                "companylogo": "Логотип компании",
                "openmaint": "Логотип OpenMAINT"
            },
            "logout": "Выход",
            "managementmodule": "Управление данными",
            "multigroup": "Несколько групп",
            "multitenant": "Мульти {0}",
            "navigation": "Навигация",
            "pagenotfound": "Страница не найдена",
            "password": {
                "change": "Изменить пароль",
                "confirm": "Подтверждение пароля",
                "email": "Адрес электронной почты",
                "err_confirm": "Пароль не совпадает.",
                "err_diffprevious": "Пароль не может быть идентичен предыдущему.",
                "err_diffusername": "Пароль не может быть идентичен имени пользователя.",
                "err_length": "Пароль должен быть не менее {0} символов долго.",
                "err_reqdigit": "Пароль должен содержать по крайней мере одну цифру.",
                "err_reqlowercase": "Пароль должен содержать по крайней мере один символ нижнего регистра.",
                "err_requppercase": "Пароль должен содержать по крайней мере один символ верхнего регистра.",
                "expired": "Срок действия пароля истек. Вы должны изменить его сейчас.",
                "forgotten": "Я забыл свой пароль",
                "new": "Новый пароль",
                "old": "Старый пароль",
                "recoverysuccess": "Мы отправили вам электронное письмо с инструкцией по восстановлению вашего пароля.",
                "reset": "Сбросить пароль",
                "saved": "Пароль правильно сохранен!"
            },
            "pleasecorrecterrors": "Пожалуйста, исправьте указанные ошибки!",
            "preferences": {
                "comma": "Запятой",
                "decimalserror": "Десятичные поля должны присутствовать",
                "decimalstousandserror": "Десятичные и тысячи сепаратор должны быть разными",
                "default": "По умолчанию",
                "defaultvalue": "Значение по умолчанию",
                "firstdayofweek": "Первый день недели",
                "gridpreferencesclear": "Четкие предпочтения сетки",
                "gridpreferencescleared": "Сетка предпочтения очищены!",
                "gridpreferencessave": "Сохранение предпочтений сетки",
                "gridpreferencessaved": "Сетка предпочтения сохранены!",
                "gridpreferencesupdate": "Обновление предпочтений сетки",
                "labelcsvseparator": "Сепаратор CSV",
                "labeldateformat": "Формат даты",
                "labeldecimalsseparator": "Сепаратор десятичных знаков",
                "labellanguage": "Язык",
                "labelthousandsseparator": "Тысячи сепараторов",
                "labeltimeformat": "Формат времени",
                "msoffice": "Офис Майкрософт",
                "period": "Период",
                "preferredfilecharset": "Кодирование CSV",
                "preferredofficesuite": "Предпочтительный офисный пакет",
                "space": "Пространство",
                "thousandserror": "Тысячи полей должны присутствовать",
                "timezone": "Часовой пояс",
                "twelvehourformat": "12-часовой формат",
                "twentyfourhourformat": "24-часовой формат"
            },
            "searchinallitems": "Поиск по всем элементам",
            "selectdeselettenants": "Выбрать / Отменить выбор всех",
            "treenavcontenttitle": "{0} от {1}",
            "userpreferences": "Предпочтения"
        },
        "menu": {
            "allitems": "Все предметы",
            "classes": "Классы",
            "custompages": "Пользовательские страницы",
            "dashboards": "Панели мониторинга",
            "processes": "Рабочие процессы",
            "reports": "Отчеты",
            "views": "Представления"
        },
        "notes": {
            "edit": "Редактировать комментарий"
        },
        "notifier": {
            "attention": "Внимание",
            "error": "Ошибка",
            "genericerror": "Общая ошибка",
            "genericinfo": "Общая информация",
            "genericwarning": "Общее предупреждение",
            "info": "Информация",
            "success": "Успешно выполнено",
            "warning": "Предупреждение"
        },
        "patches": {
            "apply": "Применить патчи",
            "category": "Категории",
            "description": "Описание",
            "name": "Имя",
            "patches": "Патчи"
        },
        "processes": {
            "abortconfirmation": "Действительно удалить процесс?",
            "abortprocess": "Прервать процесс",
            "action": {
                "advance": "Продолжить",
                "label": "Действий"
            },
            "activeprocesses": "Активные процессы",
            "allstatuses": "Все",
            "editactivity": "Редактировать процесс",
            "openactivity": "Открытая деятельность",
            "startworkflow": "Начало",
            "workflow": "Процесс"
        },
        "relationGraph": {
            "activity": "Деятельности",
            "allLabelsOnGraph": "все этикетки на графике",
            "card": "Данные",
            "cardList": "Список Карт",
            "cardRelations": "Связь",
            "choosenaviagationtree": "Выберите навигационное дерево",
            "class": "Класса",
            "classList": "Список Классов",
            "compoundnode": "Соединение узла",
            "disable": "Отключить",
            "edges": "Края",
            "enable": "Включить",
            "labelsOnGraph": "инструмент на графике",
            "level": "Уровень",
            "nodes": "Узлы",
            "openRelationGraph": "Показать диаграмму связей",
            "qt": "Qt",
            "refresh": "Обновить",
            "relation": "Связь",
            "relationGraph": "Отображение связей",
            "reopengraph": "Повторное открытие графика из этого узла"
        },
        "relations": {
            "adddetail": "Добавить элемент",
            "addrelations": "Добавить связь",
            "attributes": "Атрибуты",
            "begindate": "Дата начала",
            "code": "Код",
            "deletedetail": "Удалить элемент",
            "deleterelation": "Удалить связь",
            "deleterelationconfirm": "Вы уверены, что хотите удалить это отношение?",
            "description": "Описание",
            "editcard": "Редактировать запись",
            "editdetail": "Редактировать элемент",
            "editrelation": "Редактировать связь",
            "extendeddata": "Расширенные данные",
            "mditems": "Элементы",
            "missingattributes": "Отсутствующие обязательные атрибуты",
            "opencard": "Открыть связанную запись",
            "opendetail": "Показать элемент",
            "type": "Тип"
        },
        "reports": {
            "csv": "CSV",
            "download": "Скачать",
            "format": "Формат",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Распечатать",
            "reload": "Обновить",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "По умолчанию"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Ежедневно"
                        },
                        "monthly": {
                            "description": "Ежемесячно"
                        },
                        "once": {
                            "description": "Раз"
                        },
                        "weekly": {
                            "description": "Еженедельно"
                        },
                        "yearly": {
                            "description": "Годовой"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "По умолчанию"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Добавить тематизм",
            "analysisType": "Тип анализа",
            "attribute": "Атрибут",
            "calculateRules": "Создание правил стиля",
            "clearThematism": "Очистить тематизм",
            "color": "Цвет",
            "defineLegend": "Определение легенды",
            "defineThematism": "Определение фематизма",
            "function": "Функции",
            "generate": "Создать",
            "geoAttribute": "Географический атрибут",
            "graduated": "Окончил",
            "highlightSelected": "Выделение выбранного элемента",
            "intervals": "Интервалы",
            "legend": "Легенда",
            "name": "Имя",
            "newThematism": "Новый тематизм",
            "punctual": "Пунктуальны",
            "quantity": "Рассчитывать",
            "segments": "Сегментов",
            "source": "Источник",
            "table": "Таблице",
            "thematism": "Тематизмы",
            "value": "Значение"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Выход без сохранения",
                    "stayinedit": "Назад к редактированию"
                },
                "savebeforeexit": "Во вложениях есть несохраненные изменения. Вы хотите сохранить их перед выходом?",
                "saveprocessmessage": "Вложения могут быть сохранены только в существующих карточках. При нажатии на кнопку «Сохранить» будет создан экземпляр процесса с данными, введенными в форму."
            },
            "customform": {
                "addrow": "Добавить строку",
                "clonerow": "Строка клонов",
                "datanotvalid": "Данные недействительны",
                "deleterow": "Удалить строку",
                "editrow": "Редактировать строку",
                "export": "Экспорт",
                "import": "Импортировать",
                "importexport": {
                    "expattributes": "Данные для экспорта",
                    "file": "Файл",
                    "filename": "Имя файла",
                    "format": "Формат",
                    "importmode": "Режим импорта",
                    "keyattributes": "Ключевые атрибуты",
                    "missingkeyattr": "Пожалуйста, выберите по крайней мере один ключевой атрибут",
                    "modeadd": "Добавить",
                    "modemerge": "Объединить",
                    "modereplace": "Заменить",
                    "separator": "Разделитель"
                },
                "refresh": "Обновление по умолчании"
            },
            "linkcards": {
                "checkedonly": "Только проверено",
                "editcard": "Редактировать карту",
                "opencard": "Открыт карту",
                "refreshselection": "Применить выбор по умолчанию",
                "togglefilterdisabled": "Отключить фильтр сетки",
                "togglefilterenabled": "Включить фильтр сетки"
            },
            "required": "Этот виджет требуется."
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
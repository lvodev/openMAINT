(function() {
    Ext.define('CMDBuildUI.locales.mn.Locales', {
        "requires": ["CMDBuildUI.locales.mn.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "mn",
        "administration": CMDBuildUI.locales.mn.LocalesAdministration.administration,
        "attachments": {
            "add": "Хавсралт нэмэх",
            "attachmenthistory": "Хавсралтын түүх",
            "author": "Үүсгэгч",
            "browse": "Хайх & hellip;",
            "category": "Ангилал",
            "code": "Код",
            "creationdate": "Үүсгэсэн огноо",
            "deleteattachment": "Хавсралтыг устгах",
            "deleteattachment_confirmation": "Та энэ хавсралтыг устгахдаа итгэлтэй байна уу?",
            "description": "Тодорхойлолт",
            "download": "Татаж авах",
            "dropfiles": "Файлуудыг энд буулгах",
            "editattachment": "Хавсралтыг өөрчлөх",
            "file": "Файл",
            "filealreadyinlist": "{0} файл аль хэдийн жагсаалтад орсон байна.",
            "filename": "Файлын нэр",
            "fileview": "Хавсралтыг харах",
            "invalidfiles": "Хүчингүй файлуудыг устгах",
            "majorversion": "Гол хувилбар",
            "maxsize": "Зөвшөөрөгдсөн файлын хэмжээ хамгийн ихдээ {0} МБ байна.",
            "metadata": "<em>Metadata</em>",
            "modificationdate": "Өөрчлөлтийн огноо",
            "new": "Шинэ хавсралт",
            "nocategory": "Ангилалгүй",
            "preview": "Урьдчилан харах",
            "removefile": "Файлыг устгах",
            "statuses": {
                "empty": "Хоосон файл",
                "error": "Алдаа",
                "extensionNotAllowed": "Файлын өргөтгөлийг зөвшөөрөөгүй байна",
                "loaded": "Ачаалагдсан",
                "ready": "Бэлэн",
                "toolarge": "Хэт том"
            },
            "successupload": "{0} хавсралтыг байршуулсан.",
            "uploadfile": "Файлыг байршуулах ...",
            "version": "Хувилбар",
            "viewhistory": "Хавсралтын түүхийг харах",
            "warningmessages": {
                "atleast": "Анхааруулга: \"{1}\" төрлийн {0} хавсралтыг ачаалав. Энэ ангилалд дор хаяж {2} хавсралт байх ёстой.",
                "exactlynumber": "Анхааруулга: \"{1}\" төрлийн {0} хавсралтыг ачаалав. Энэ ангилалд {2} хавсралтыг хүлээж байна.",
                "maxnumber": "Анхааруулга: \"{1}\" төрлийн {0} хавсралтыг ачаалав. Энэ ангилалд хамгийн ихдээ {2} хавсралт байх ёстой."
            },
            "wrongfileextension": "{0} файлын өргөтгөл зөвшөөрөгдөөгүй байна"
        },
        "bim": {
            "bimViewer": "Bim үзүүлэгч",
            "card": {
                "label": "Карт"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Х тэнхлэгийн дагуух хайрцагны хэмжээ",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Y тэнхлэгийн дагуух хайрцагны хэмжээ",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Z тэнхлэгийн дагуух хайрцагны хэмжээ",
                "LARGEST_FACE_AREA": "Хамгийн том нүүрний хэсэг",
                "LARGEST_FACE_DIRECTION": "Хамгийн том нүүрний чиглэл",
                "SURFACE_AREA_ALONG_X": "X тэнхлэгийн дагуух гадаргуугийн талбай",
                "SURFACE_AREA_ALONG_Y": "Y тэнхлэгийн дагуух гадаргуугийн талбай",
                "SURFACE_AREA_ALONG_Z": "Z тэнхлэгийн дагуух гадаргуугийн талбай",
                "TOTAL_SHAPE_VOLUME": "Нийт дүрсийн хэмжээ",
                "TOTAL_SURFACE_AREA": "Нийт гадаргуугийн талбай",
                "WALKABLE_SURFACE_AREA": "Алхах гадаргуугийн талбай",
                "calculated": "Тооцоолсон",
                "description": "Тодорхойлолт",
                "guid": "GUID",
                "label": "Шинж чанар",
                "name": "Нэр",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Давхарга",
                "menu": {
                    "hideAll": "Бүгдийг нуух",
                    "showAll": "Бүгдийг харуулах"
                },
                "name": "Нэр",
                "qt": "Qt",
                "visibility": "Харагдац"
            },
            "menu": {
                "camera": "Камер",
                "frontView": "Урд талыг харах",
                "mod": "Үзэгчийн хяналт",
                "orthographic": "Орфографийн камер",
                "pan": "Гүйлгэх",
                "perspective": "Алсын камер",
                "resetView": "Харах байдлыг сэргээх",
                "rotate": "эргүүлэх",
                "sideView": "Талын харах",
                "topView": "Шилдгийг харах"
            },
            "showBimCard": "3D үзүүлэгчийг нээх",
            "tree": {
                "arrowTooltip": "Элемент сонгох",
                "columnLabel": "Бүтэц",
                "label": "Бүтэц",
                "open_card": "Холбогдох картыг нээх",
                "root": "Ifc Root"
            }
        },
        "bulkactions": {
            "abort": "Сонгосон зүйлийг цуцлах",
            "alertdownloadattachments": "<em>Some attachments will not be downloaded because they have not yet been saved to the server</em>",
            "alertnoattachmentsdownload": "<em>No attachments will not be downloaded because they have not yet been saved to the server</em>",
            "cancelselection": "Сонголтыг цуцлах",
            "confirmabort": "Та процессын {0} инстанцийг цуцалж байна. Та үргэлжлүүлэхийг хүсэж байгаадаа итгэлтэй байна уу?",
            "confirmdelete": "Та {0} картыг устгаж байна. Та үргэлжлүүлэхийг хүсэж байгаадаа итгэлтэй байна уу?",
            "confirmdeleteattachements": "Та {0} хавсралтыг устгаж байна. Та үргэлжлүүлэхдээ итгэлтэй байна уу?",
            "confirmedit": "Та {0} -г {1} картанд өөрчилж байна. Та үргэлжлүүлэхдээ итгэлтэй байна уу?",
            "delete": "Сонгосон зүйлийг устгах",
            "download": "Сонгосон хавсралтыг татаж авах",
            "downloadall": "<em>Download all attachments</em>",
            "edit": "Сонгосон зүйлийг засах",
            "selectall": "Бүгдийг сонгох"
        },
        "calendar": {
            "active_expired": "Идэвхтэй / хугацаа дууссан",
            "add": "Хуваарь нэмэх",
            "advancenotification": "Өдрийн урьдчилсан мэдэгдэл",
            "allcategories": "Бүх ангилал",
            "alldates": "Бүх огноо",
            "associatedcard": "<em>Associated card</em>",
            "calculated": "Тооцоолсон",
            "calendar": "Календар",
            "cancel": "Цуцалсан гэж тэмдэглэх",
            "category": "Ангилал",
            "class": "<em>Class</em>",
            "cm_confirmcancel": "Та цуцлагдсан хуваарийг тэмдэглэхдээ итгэлтэй байна уу?",
            "cm_confirmcomplete": "Хуваарийг дууссан гэж тэмдэглэхдээ итгэлтэй байна уу?",
            "cm_markcancelled": "Сонгосон хуваарийг цуцалсан гэж тэмдэглэх",
            "cm_markcomplete": "Сонгосон хуваарь дууссан гэж тэмдэглэх",
            "complete": "Дууссан гэж тэмдэглэх",
            "completed": "Дууссан",
            "date": "Огноо",
            "days": "Өдөр",
            "delaybeforedeadline": "Хугацаа дуусахаас өмнө хойшлуулах",
            "delaybeforedeadlinevalue": "Хугацаа дуусахаас өмнө хойшлуулах утга",
            "description": "Тодорхойлолт",
            "editevent": "Хуваарийг засах",
            "enddate": "Дуусах огноо",
            "endtype": "Дуусах төрөл",
            "event": "Хуваарь",
            "executiondate": "Гүйцэтгэх огноо",
            "frequency": "Давтамж",
            "frequencymultiplier": "Давтамжийн үржүүлэгч",
            "grid": "Сүлжээ",
            "leftdays": "Үлдэх хоногууд байна",
            "londdescription": "Бүрэн тодорхойлолт",
            "manual": "Гар ажиллагаатай",
            "maxactiveevents": "Хамгийн их идэвхтэй хуваарь",
            "messagebodydelete": "Та хуваарь гаргагчийн дүрмийг хасмаар байна уу?",
            "messagebodyplural": "{0} хуваарийн дүрэм байна",
            "messagebodyrecalculate": "Та хуваарийн дүрмийг шинэ огноонд дахин тооцоолохыг хүсэж байна уу?",
            "messagebodysingular": "{0} хуваарийн дүрэм байна",
            "messagetitle": "Хуваарийг дахин тооцоолох",
            "missingdays": "Байхгүй өдрүүд",
            "next30days": "Дараагийн 30 хоног",
            "next7days": "Дараагийн 7 хоног",
            "notificationtemplate": "Мэдэгдэл өгөхөд ашиглах загвар",
            "notificationtext": "Мэдэгдлийн текст",
            "occurencies": "Үйл явдлын тоо",
            "operation": "Үйл ажиллагаа",
            "partecipantgroup": "Оролцогчийн групп",
            "partecipantuser": "Оролцогч хэрэглэгч",
            "priority": "Түвшин",
            "recalculate": "Дахин тооцоолох",
            "referent": "Лавлагаа",
            "scheduler": "Хуваарь гаргагч",
            "sequencepaneltitle": "Хуваарь гаргах",
            "startdate": "Эхлэх огноо",
            "status": "Төлөв",
            "today": "Өнөөдөр",
            "type": "Төрөл",
            "viewevent": "Хуваарийг харах",
            "widgetcriterion": "Тооцооллын шалгуур",
            "widgetemails": "Имэйл",
            "widgetsourcecard": "Эх карт"
        },
        "classes": {
            "cards": {
                "addcard": "Карт нэмэх",
                "clone": "Клон",
                "clonewithrelations": "Клон карт ба харилцаа холбоо",
                "deletebeaware": "Үүнийг анхаарах хэрэгтэй:",
                "deleteblocked": "{0} -тай холбоотой тул устгах боломжгүй байна.",
                "deletecard": "Картыг устгах",
                "deleteconfirmation": "Та энэ картыг устгахдаа итгэлтэй байна уу?",
                "deleterelatedcards": "{0} холбоотой картыг устгах болно",
                "deleterelations": "{0} картын холбоог устгах болно",
                "label": "Карт",
                "modifycard": "Картыг өөрчлөх",
                "opencard": "Нээлттэй карт",
                "print": "Картыг хэвлэх"
            },
            "simple": "Энгийн",
            "standard": "Стандарт"
        },
        "common": {
            "actions": {
                "add": "Нэмэх",
                "apply": "Хэрэгжүүлэх",
                "cancel": "Цуцлах",
                "close": "Хаах",
                "delete": "Устгах",
                "edit": "Засах",
                "execute": "Гүйцэтгэх",
                "help": "Тусламж",
                "load": "Ачаалал",
                "open": "Нээлттэй",
                "refresh": "Өгөгдлийг шинэчлэх",
                "remove": "Устгах",
                "save": "Хадгалах",
                "saveandapply": "Хадгалж хэрэгжүүлэх",
                "saveandclose": "Хадгалж хаах",
                "search": "Хайх",
                "searchtext": "Хайх ..."
            },
            "attributes": {
                "nogroup": "Үндсэн өгөгдөл"
            },
            "dates": {
                "date": "ө/с/Ж",
                "datetime": "ө/с/Ж Ц:м:с",
                "time": "Ц:м:с"
            },
            "editor": {
                "clearhtml": "HTML-г арилгах",
                "expand": "Редакторыг өргөжүүлэх",
                "reduce": "Редакторыг багасгах",
                "signature": "<em>Add signature</em>",
                "unlink": "Холбоосгүй",
                "unlinkmessage": "Сонгосон холбоосыг текст болгон хувиргана уу."
            },
            "grid": {
                "disablemultiselection": "Олон сонголтыг идэвхгүй болгох",
                "enamblemultiselection": "Олон сонголтыг идэвхжүүлэх",
                "export": "Өгөгдлийг экспортлох",
                "filterremoved": "Одоогийн шүүлтүүрийг устгасан",
                "import": "Мэдээллийг импортлох",
                "itemnotfound": "Юу ч олдсонгүй",
                "list": "Жагсаалт",
                "opencontextualmenu": "Цэсийн агуулгыг нээх",
                "print": "Хэвлэх",
                "printcsv": "CSV хэлбэрээр хэвлэх",
                "printodt": "ODT хэлбэрээр хэвлэх",
                "printpdf": "PDF хэлбэрээр хэвлэх",
                "row": "Зүйл",
                "rows": "Эд зүйлс",
                "subtype": "Дэд төрөл"
            },
            "tabs": {
                "activity": "Үйл ажиллагаа",
                "attachment": "Хавсралт",
                "attachments": "Хавсралтууд",
                "card": "Карт",
                "clonerelationmode": "Клон харилцааны горим",
                "details": "Дэлгэрэнгүй мэдээлэл",
                "emails": "Имэйл",
                "history": "Түүх",
                "notes": "Тэмдэглэл",
                "relations": "Харилцаа холбоо",
                "schedules": "Хуваарь"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Диаграммыг татаж авах",
                "gridhide": "Өгөгдлийн сүлжээг нуух",
                "gridshow": "Өгөгдлийн сүлжээг харуулах",
                "openinpopup": "Попап дээр нээх",
                "parametershide": "Өгөгдлийн параметрийг нуух",
                "parametersshow": "Өгөгдлийн параметрийг харуулах",
                "reload": "Дахин ачаалах"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Баримт бичгийн архиваас хавсралт нэмэх",
            "alredyexistfile": "Ийм нэртэй файл аль хэдийн байна",
            "archivingdate": "Архивлах огноо",
            "attachfile": "Файл хавсаргах",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Имэйл бичих",
            "composefromtemplate": "Загвараас бичих",
            "delay": "Саатал",
            "delays": {
                "day1": "1 өдрийн дараа",
                "days2": "2 хоногийн дараа",
                "days4": "4 хоногийн дараа",
                "hour1": "1 цаг",
                "hours2": "2 цаг",
                "hours4": "4 цаг",
                "month1": "1 сарын дараа",
                "negativeday1": "1 өдрийн өмнө",
                "negativedays2": "2 хоногийн өмнө",
                "negativedays4": "4 хоногийн өмнө",
                "negativehour1": "1 цагийн өмнө",
                "negativehours2": "2 цагийн өмнө",
                "negativehours4": "4 цагийн өмнө",
                "negativemonth1": "1 сарын өмнө",
                "negativeweek1": "1 долоо хоногийн өмнө",
                "negativeweeks2": "2 долоо хоногийн өмнө",
                "none": "Аль нь ч биш",
                "week1": "1 долоо хоногт",
                "weeks2": "2 долоо хоногийн дараа"
            },
            "dmspaneltitle": "Мэдээллийн сангаас хавсралтыг сонгох",
            "edit": "Засах",
            "from": "Хаанаас",
            "gridrefresh": "Сүлжээний шинэчлэлт",
            "keepsynchronization": "Синхрончлолыг үргэлжлүүлэх",
            "message": "Мессеж",
            "regenerateallemails": "Бүх имэйлийг сэргээх",
            "regenerateemail": "И-мэйлийг сэргээх",
            "remove": "Устгах",
            "remove_confirmation": "Та энэ имэйлийг устгахдаа итгэлтэй байна уу?",
            "reply": "хариу",
            "replyprefix": "{0} дээр {1} бичсэн:",
            "selectaclass": "Класс сонгох",
            "sendemail": "И-мэйл илгээх",
            "signature": "<em>Signature</em>",
            "statuses": {
                "draft": "Ноорог",
                "error": "Алдаа",
                "outgoing": "Гарах",
                "received": "Хүлээн авсан",
                "sent": "Илгээсэн"
            },
            "subject": "Сэдэв",
            "to": "Хэнд",
            "view": "Харах"
        },
        "errors": {
            "autherror": "Хэрэглэгчийн нэр эсвэл нууц үг буруу байна",
            "classnotfound": "Класс {0} олдсонгүй",
            "fieldrequired": "Энэ талбар заавал шаардлагатай",
            "invalidfilter": "Буруу шүүлтүүр",
            "notfound": "Олдсонгүй"
        },
        "filters": {
            "actions": "Үйлдэл",
            "addfilter": "Шүүлтүүр нэмэх",
            "any": "Ямар ч",
            "attachments": "<em>Attachments</em>",
            "attachmentssearchtext": "Хавсралт текст хайх",
            "attribute": "Шинж чанарыг өөрчлөх",
            "attributes": "Шинж чанар",
            "clearfilter": "Классын шүүлтүүр",
            "clone": "Клон",
            "copyof": "Хуулбар",
            "currentgroup": "Одоогийн групп",
            "currentuser": "Одоогийн хэрэглэгч",
            "defaultset": "Анхдагчаар тохируулах",
            "defaultunset": "Анхдагчаас тохируулах",
            "description": "Тодорхойлолт",
            "domain": "Домэйн",
            "errorname": "<em>Filter name already in use</em>",
            "filterdata": "Өгөгдлийг шүүх",
            "fromfilter": "Шүүлтүүрээс",
            "fromselection": "Сонголтоос",
            "group": "Групп",
            "ignore": "Алгасах",
            "migrate": "Шилжин суурьших",
            "name": "Нэр",
            "newfilter": "Шинэ шүүлтүүр",
            "noone": "Хэн ч биш",
            "operator": "Оператор",
            "operators": {
                "beginswith": "Эхэлдэг",
                "between": "Хооронд",
                "contained": "Агуулсан",
                "containedorequal": "Агуулсан эсвэл тэнцүү",
                "contains": "Агуулсан",
                "containsorequal": "Агуулсан эсвэл тэнцүү",
                "descriptionbegin": "Тодорхойлолт нь эхэлнэ",
                "descriptioncontains": "Тодорхойлолтыг агуулна",
                "descriptionends": "Тодорхойлолт дуусна",
                "descriptionnotbegin": "Тодорхойлолт эхлэхгүй",
                "descriptionnotcontain": "Тодорхойлолт агуулаагүй байна",
                "descriptionnotends": "Тодорхойлолт үүгээр дуусахгүй",
                "different": "Өөр",
                "doesnotbeginwith": "Эхлээгүй",
                "doesnotcontain": "Агуулаагүй байна",
                "doesnotendwith": "Үүгээр дуусахгүй",
                "endswith": "Дуусах",
                "equals": "Тэнцүү",
                "greaterthan": "Үүнээс их",
                "isnotnull": "Хүчингүй байна",
                "isnull": "Хоосон байна",
                "lessthan": "Түүнээс бага"
            },
            "relations": "Харилцаа холбоо",
            "type": "Төрөл",
            "typeinput": "Оролтын параметр",
            "user": "Хэрэглэгч",
            "value": "Утга"
        },
        "gis": {
            "card": "Карт",
            "cardsMenu": "Картын цэг",
            "code": "Код",
            "description": "Тодорхойлолт",
            "extension": {
                "errorCall": "Алдаа",
                "noResults": "Үр дүнгүй"
            },
            "externalServices": "Гадаад үйлчилгээ",
            "geographicalAttributes": "Гео шинж чанарууд",
            "geoserverLayers": "Геосерверийн давхаргууд",
            "layers": "Давхарга",
            "list": "Жагсаалт",
            "longpresstitle": "Талбай дахь геоэлементүүд",
            "map": "Газрын зураг",
            "mapServices": "Газрын зургийн үйлчилгээ",
            "position": "Байрлал",
            "root": "Root",
            "tree": "Бүтэц",
            "type": "Төрөл",
            "view": "Харах",
            "zoom": "Томруулах"
        },
        "history": {
            "activityname": "Үйл ажиллагааны нэр",
            "activityperformer": "Үйл ажиллагаа гүйцэтгэгч",
            "begindate": "Эхлэх огноо",
            "enddate": "Дуусах огноо",
            "processstatus": "Төлөв",
            "user": "Хэрэглэгч"
        },
        "importexport": {
            "database": {
                "uri": "Мэдээллийн сангийн URI",
                "user": "Мэдээллийн сангийн хэрэглэгч"
            },
            "downloadreport": "Тайланг татаж авах",
            "emailfailure": "Имэйл илгээх явцад алдаа гарлаа!",
            "emailmessage": "{0} файлын {1} огноонд импортын тайланг хавсаргав",
            "emailsubject": "Мэдээллийн тайланг импортлох",
            "emailsuccess": "Имэйлийг амжилттай илгээв!",
            "export": "Экспортлох",
            "exportalldata": "Бүх өгөгдөл",
            "exportfiltereddata": "Зөвхөн сүлжээний шүүлтүүрт тохирох өгөгдөл",
            "gis": {
                "shapeimportdisabled": "Энэ загварт дүрс импортлох идэвхгүй байна",
                "shapeimportenabled": "Импортын тохиргоог хэлбэржүүлэх"
            },
            "ifc": {
                "card": "Карт",
                "project": "Төсөл",
                "sourcetype": "Импортлох"
            },
            "import": "Импорт",
            "importresponse": "Импортын хариу",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Алдаа",
                "linenumber": "Шугамын дугаар",
                "message": "Мессеж",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Боловсруулсан мөр",
                "recordnumber": "Бичлэгийн дугаар",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Тайлан илгээх",
            "template": "Загвар",
            "templatedefinition": "Загварын тодорхойлолт"
        },
        "joinviews": {
            "active": "Идэвхтэй",
            "addview": "Үзэлт нэмэх",
            "alias": "Алиас",
            "attribute": "Шинж чанар",
            "attributes": "Шинж чанар",
            "attributesof": "Шинж чанарууд: {0}",
            "createview": "Үзэгдэл үүсгэх",
            "datasorting": "Мэдээллийн ангилал",
            "delete": "Устгах",
            "deleteview": "Үзэлтийг устгах",
            "deleteviewconfirm": "Та энэ харагдацыг устгахдаа итгэлтэй байна уу?",
            "description": "Тодорхойлолт",
            "disable": "Идэвхгүй болгох",
            "domainalias": "Домэйн алиас",
            "domainsof": " {0}-н домэйн",
            "edit": "Засах",
            "editview": "Харах тохиргоог засах",
            "enable": "Идэвхжүүлэх",
            "fieldsets": "Талбайнууд",
            "filters": "Шүүлтүүр",
            "generalproperties": "Ерөнхий шинж чанар",
            "group": "Групп",
            "innerjoin": "Дотоод нэгдэл",
            "jointype": "Нэгдэх төрөл",
            "joinview": "Нэгдэлээс харах",
            "klass": "Класс",
            "manageview": "Үзэлтийг удирдах",
            "masterclass": "Мастер класс",
            "masterclassalias": "Мастер класс алиас",
            "name": "Нэр",
            "newjoinview": "Нэгдэх шинэ харагдац",
            "outerjoin": "Гадаад нэгдэл",
            "pleaseseleceavalidmasterclass": "Зөв мастер класс сонгоно уу",
            "refreshafteredit": "Өөрчлөлтийг харахын тулд хуудсыг дахин шинэчлэхийг хүсч байна уу?",
            "selectatleastoneattribute": "4-р алхам дээр дор хаяж нэг шинж чанарыг сүлжээнд болон багасгасан сүлжээнд харуулна уу.",
            "showingrid": "Сүлжээнд харуулах",
            "showinreducedgrid": "Багасгасан сүлжээнд харуулах",
            "targetalias": "Зорилтот классын нэр"
        },
        "login": {
            "buttons": {
                "login": "Нэвтрэх",
                "logout": "Хэрэглэгч өөрчлөх"
            },
            "fields": {
                "group": "Групп",
                "language": "Хэл",
                "password": "Нууц үг",
                "tenants": "Түрээслэгчид",
                "username": "Хэрэглэгчийн нэр"
            },
            "loggedin": "Нэвтэрсэн",
            "sso": {
                "loginfailure": "<em>Login failure</em>",
                "loginwith": "<em>Login with {0}</em>",
                "or": "<em>or</em>"
            },
            "title": "Нэвтрэх",
            "welcome": "Эргээд тавтай морилно уу {0}."
        },
        "main": {
            "administrationmodule": "Удирдлагын модул",
            "baseconfiguration": "Үндсэн тохиргоо",
            "cardlock": {
                "lockedmessage": "{0} үүнийг засаж байгаа тул та энэ картыг засах боломжгүй.",
                "someone": "хэн нэгэн"
            },
            "changegroup": "Группийг өөрчлөх",
            "changetenant": "Өөрчлөх {0}",
            "confirmchangegroup": "Та группээ өөрчлөхдөө итгэлтэй байна уу?",
            "confirmchangetenants": "Та идэвхтэй түрээслэгчдийг солихдоо итгэлтэй байна уу?",
            "confirmdisabletenant": "Та \"Түрээслэгчээс татгалзах\" флагийг идэвхгүй болгохдоо итгэлтэй байна уу?",
            "confirmenabletenant": "Та \"Түрээслэгчээс татгалзах\" флагийг идэвхжүүлэхдээ итгэлтэй байна уу?",
            "ignoretenants": "{0} -г алгасах",
            "info": "Мэдээлэл",
            "logo": {
                "cmdbuild": "CMDBuild лого",
                "cmdbuildready2use": "CMDBuild READY2USE лого",
                "companylogo": "Компаний лого",
                "openmaint": "openMAINT лого"
            },
            "logout": "Гарах",
            "managementmodule": "Өгөгдлийн менежментийн модул",
            "multigroup": "Олон групп",
            "multitenant": "Олон {0}",
            "navigation": "Навигаци",
            "pagenotfound": "Хуудас олдсонгүй",
            "password": {
                "change": "Нууц үг солих",
                "confirm": "Нууц үгээ баталгаажуулна уу",
                "email": "Имэйл хаяг",
                "err_confirm": "Нууц үг таарахгүй байна.",
                "err_diffprevious": "Нууц үг өмнөх үгтэй ижил байж болохгүй.",
                "err_diffusername": "Нууц үг нь хэрэглэгчийн нэртэй ижил байж болохгүй.",
                "err_length": "Нууц үг нь дор хаяж {0} тэмдэгт байх ёстой.",
                "err_reqdigit": "Нууц үг дор хаяж нэг оронтой байх ёстой.",
                "err_reqlowercase": "Нууц үгэнд дор хаяж нэг жижиг үсэг байх ёстой.",
                "err_requppercase": "Нууц үгэнд дор хаяж нэг том үсэг байх ёстой.",
                "expired": "Таны нууц үгийн хугацаа дууссан. Та одоо нууц үгээ өөрчлөх шаардлагатай.",
                "forgotten": "Нууц үгээ мартсан",
                "new": "Шинэ нууц үг",
                "old": "Хуучин нууц үг",
                "recoverysuccess": "Бид танд нууц үгээ сэргээх заавар бүхий имэйл илгээсэн.",
                "reset": "Нууц үгээ сэргээх",
                "saved": "Нууц үгийг зөв хадгалсан!"
            },
            "pleasecorrecterrors": "Заасан алдааг засна уу!",
            "preferences": {
                "comma": "Таслал",
                "decimalserror": "Аравтын бутархайн талбар заавал байх ёстой",
                "decimalstousandserror": "Аравтын бутархай ба мянгатын тусгаарлагч нь ялгаатай байх ёстой",
                "default": "Анхдагч",
                "defaultvalue": "Анхдагч утга",
                "firstdayofweek": "7 хоногийн эхний өдөр",
                "gridpreferencesclear": "Сүлжээний тохиргоог арилгах",
                "gridpreferencescleared": "Сүлжээний тохиргоог арилгасан!",
                "gridpreferencessave": "Сүлжээний тохиргоог хадгалах",
                "gridpreferencessaved": "Сүлжээний тохиргоог хадгаллаа!",
                "gridpreferencesupdate": "Сүлжээний тохиргоог шинэчлэх",
                "labelcsvseparator": "CSV тусгаарлагч",
                "labeldateformat": "Огнооны формат",
                "labeldecimalsseparator": "Аравтын бутархай",
                "labellanguage": "Хэл",
                "labelthousandsseparator": "Мянгатын тусгаарлагч",
                "labeltimeformat": "Цагийн формат",
                "msoffice": "Microsoft Office",
                "period": "Хугацаа",
                "preferredfilecharset": "CSV кодчилол",
                "preferredofficesuite": "Сонгосон Office багц",
                "space": "Орон зай",
                "thousandserror": "Мянгатын талбар байх ёстой",
                "timezone": "Цагийн бүс",
                "twelvehourformat": "12 цагийн формат",
                "twentyfourhourformat": "24 цагийн формат"
            },
            "searchinallitems": "Бүх зүйлийг хайх",
            "selectdeselettenants": "Бүгдийг сонгох/сонгохгүй байх",
            "treenavcontenttitle": "{1} -с {0}",
            "userpreferences": "Тохиргоо"
        },
        "menu": {
            "allitems": "Бүх зүйл",
            "classes": "Класс",
            "custompages": "Захиалгат хуудаснууд",
            "dashboards": "Хяналтын самбар",
            "processes": "Үйл явц",
            "reports": "Тайлан",
            "views": "Үзсэн тоо"
        },
        "notes": {
            "edit": "Тэмдэглэлийг өөрчлөх"
        },
        "notifier": {
            "attention": "Анхаар",
            "error": "Алдаа",
            "genericerror": "Ерөнхий алдаа",
            "genericinfo": "Ерөнхий мэдээлэл",
            "genericwarning": "Ерөнхий анхааруулга",
            "info": "Мэдээлэл",
            "success": "Амжилт",
            "warning": "Анхааруулга"
        },
        "patches": {
            "apply": "Хэрэгжүүлэх хэсэг",
            "category": "Ангилал",
            "description": "Тодорхойлолт",
            "name": "Нэр",
            "patches": "Хэсэг"
        },
        "processes": {
            "abortconfirmation": "Та энэ процессыг цуцлахдаа итгэлтэй байна уу?",
            "abortprocess": "Зогсоох үйл явц",
            "action": {
                "advance": "Урьдчилгаа",
                "label": "Үйлдэл"
            },
            "activeprocesses": "Идэвхтэй процессууд",
            "allstatuses": "Бүгд",
            "editactivity": "Үйл ажиллагааг өөрчлөх",
            "openactivity": "Нээлттэй үйл ажиллагаа",
            "startworkflow": "Эхлэх",
            "workflow": "Ажлын урсгал"
        },
        "relationGraph": {
            "activity": "үйл ажиллагаа",
            "allLabelsOnGraph": "график дээрх бүх шошго",
            "card": "Карт",
            "cardList": "Картын жагсаалт",
            "cardRelations": "Картын холбоо",
            "choosenaviagationtree": "Навигацийн бүтцийг сонгоно уу",
            "class": "Класс",
            "classList": "Классын жагсаалт",
            "compoundnode": "Нийлмэл хэсэг",
            "disable": "Идэвхгүй болгох",
            "edges": "Ирмэгүүд",
            "enable": "Идэвхжүүлэх",
            "labelsOnGraph": "график дээрх зөвлөмж",
            "level": "Түвшин",
            "nodes": "Гол хэсэг",
            "openRelationGraph": "Нээлттэй харилцааны график",
            "qt": "Qt",
            "refresh": "Сэргээх",
            "relation": "харилцаа",
            "relationGraph": "Харилцааны график",
            "reopengraph": "Гол хэсгээс графикийг дахин нээх"
        },
        "relations": {
            "adddetail": "Тайлбар нэмэх",
            "addrelations": "Холбоос нэмэх",
            "attributes": "Шинж чанар",
            "begindate": "Эхлэх огноо",
            "code": "Код",
            "deletedetail": "Дэлгэрэнгүйг устгах",
            "deleterelation": "Харилцаа холбоог устгах",
            "deleterelationconfirm": "Та энэ холболтыг устгахдаа итгэлтэй байна уу?",
            "description": "Тодорхойлолт",
            "editcard": "Картыг засах",
            "editdetail": "Дэлгэрэнгүйг засах",
            "editrelation": "Холбоосыг засах",
            "extendeddata": "Өргөтгөсөн мэдээлэл",
            "mditems": "Эд зүйлс",
            "missingattributes": "Шаардлагатай шинж чанарууд алга байна",
            "opencard": "Холбогдох картыг нээх",
            "opendetail": "Дэлгэрэнгүйг харуулах",
            "type": "Төрөл"
        },
        "reports": {
            "csv": "CSV",
            "download": "Татаж авах",
            "format": "Формат",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Хэвлэх",
            "reload": "Дахин ачаалах",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Анхдагч"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Өдөр бүр"
                        },
                        "monthly": {
                            "description": "Сар бүр"
                        },
                        "once": {
                            "description": "Нэг удаа"
                        },
                        "weekly": {
                            "description": "Долоо хоног бүр"
                        },
                        "yearly": {
                            "description": "Жил бүр"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Анхдагч"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Thematism нэмэх",
            "analysisType": "Шинжилгээний төрөл",
            "attribute": "Шинж чанар",
            "calculateRules": "Загварын дүрмийг бий болгох",
            "clearThematism": " Thematism-г арилгах",
            "color": "Өнгө",
            "defineLegend": "Домогт тодорхойлолт",
            "defineThematism": " Thematism-н тодорхойлолт",
            "function": "Чиг үүрэг",
            "generate": "Үүсгэх",
            "geoAttribute": "Газарзүйн шинж чанар",
            "graduated": "Төгссөн",
            "highlightSelected": "Сонгосон зүйлийг тодруулах",
            "intervals": "Завсарлага",
            "legend": "Домог",
            "name": "нэр",
            "newThematism": "Шинэ thematism",
            "punctual": "Тогтмол",
            "quantity": "Тооцох",
            "segments": "Сегментүүд",
            "source": "Эх үүсвэр",
            "table": "Хүснэгт",
            "thematism": "Сэдэвчилсэн байдал",
            "value": "Утга"
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
                "addrow": "Мөр нэмэх",
                "clonerow": "Клоны мар",
                "datanotvalid": "Өгөгдөл буруу байна",
                "deleterow": "Мөрийг устгах",
                "editrow": "Мөрийг засах",
                "export": "Экспортлох",
                "import": "Импорт",
                "importexport": {
                    "expattributes": "Экспортлох өгөгдөл",
                    "file": "Файл",
                    "filename": "Файлын нэр",
                    "format": "Формат",
                    "importmode": "Импортын горим",
                    "keyattributes": "Гол шинж чанарууд",
                    "missingkeyattr": "Нэг гол шинж чанарыг сонгоно уу",
                    "modeadd": "Нэмэх",
                    "modemerge": "Нэгдэх",
                    "modereplace": "Солих",
                    "separator": "Тусгаарлагч"
                },
                "refresh": "Анхдагчаар сэргээх"
            },
            "linkcards": {
                "checkedonly": "Нэгийг л шалгах",
                "editcard": "Картыг засах",
                "opencard": "Нээлттэй карт",
                "refreshselection": "Анхны сонголтыг хэрэгжүүлэх",
                "togglefilterdisabled": "Сүлжээний шүүлтүүрийг идэвхгүй болгох",
                "togglefilterenabled": "Сүлжээний шүүлтүүрийг идэвхжүүлэх"
            },
            "required": "Энэ виджет шаардлагатай."
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
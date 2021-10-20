(function() {
    Ext.define('CMDBuildUI.locales.ar.Locales', {
        "requires": ["CMDBuildUI.locales.ar.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "ar",
        "administration": CMDBuildUI.locales.ar.LocalesAdministration.administration,
        "attachments": {
            "add": "أضف مرفق",
            "attachmenthistory": "تاريخ المرفق",
            "author": "المؤلف",
            "browse": "تصفح &hellip;",
            "category": "الفئة",
            "code": "الكود",
            "creationdate": "تاريخ الإنشاء",
            "deleteattachment": "حذف المرفق",
            "deleteattachment_confirmation": "هل أنت متأكد من حذف المرفق؟",
            "description": "الوصف",
            "download": "تنزيل",
            "dropfiles": "ارمي الملفات هنا",
            "editattachment": "تعديل المرفق",
            "file": "ملف",
            "filealreadyinlist": "الملف {0} موجود في القائمة أصلا",
            "filename": "اسم الملف",
            "fileview": "عرض المرفق",
            "invalidfiles": "احذف الملفات غير الصحيحة",
            "majorversion": "الإصدار الرئيسي",
            "maxsize": "أقصى حجم للملف هو {0} ميجابايت",
            "metadata": "البيانات الوصفية",
            "modificationdate": "تاريخ التعديل",
            "new": "مرفق جديد",
            "nocategory": "غير مصنف",
            "preview": "عرض أولي",
            "removefile": "احذف الملف",
            "statuses": {
                "empty": "ملف فاضي",
                "error": "خطأ",
                "extensionNotAllowed": "امتداد الملف غير مسموح",
                "loaded": "محمل",
                "ready": "جاهز",
                "toolarge": "كبير جدًا"
            },
            "successupload": "تم رفع {0} مرفق.",
            "uploadfile": "رفع ملف...",
            "version": "الإصدار",
            "viewhistory": "عرض تاريخ المرفق",
            "warningmessages": {
                "atleast": "تنبيه: المرفقات {0} من النوع {1} قد تم تحميلها. هذه الفئة ما عدا {2} من المرفقات على الأقل.",
                "exactlynumber": "تنبيه: المرفقات {0} من النوع {1} قد تم تحميلها. ما عدا {2} من المرفقات ",
                "maxnumber": "تنبيه: المرفقات {0} من النوع {1} قد تم تحميلها. هذه الفئة ما عدا {2} من المرفقات كحد أقصى."
            },
            "wrongfileextension": "امتداد الملف {0} غير مسموح به"
        },
        "bim": {
            "bimViewer": "عارض نمذجة معلومات البناء",
            "card": {
                "label": "البطاقة"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "حجم الصندوق المقيد على طول محور السينات",
                "BOUNDING_BOX_SIZE_ALONG_Y": "حجم الصندوق المقيد على طول محور الصادات",
                "BOUNDING_BOX_SIZE_ALONG_Z": "حجم الصندوق المقيد على طول محور العينات",
                "LARGEST_FACE_AREA": "مساحة الوجه الأكبر",
                "LARGEST_FACE_DIRECTION": "اتجاه الوجه الأكبر",
                "SURFACE_AREA_ALONG_X": "مساحة السطح على طول محور السينات",
                "SURFACE_AREA_ALONG_Y": "مساحة السطح على طول محور الصادات",
                "SURFACE_AREA_ALONG_Z": "مساحة السطح على طول محور العينات",
                "TOTAL_SHAPE_VOLUME": "إجمالي حجم الشكل",
                "TOTAL_SURFACE_AREA": "إجمالي مساحة السطح",
                "WALKABLE_SURFACE_AREA": "مساحة السطح القابلة للمشي",
                "calculated": "المحسوب",
                "description": "الوصف",
                "guid": "معرف المجموعة",
                "label": "الخواص",
                "name": "الاسم",
                "uuid": "معرف المستخدم"
            },
            "layers": {
                "label": "الطبقات",
                "menu": {
                    "hideAll": "إخفاء الكل",
                    "showAll": "عرض الكل"
                },
                "name": "الاسم",
                "qt": "الكم",
                "visibility": "المرئية"
            },
            "menu": {
                "camera": "الكاميرا",
                "frontView": "عرض أمامي",
                "mod": "متحكمات العارض",
                "orthographic": "الكاميرا التصويرية",
                "pan": "تمرير",
                "perspective": "الكاميرا المنظورية",
                "resetView": "عرض طبيعي",
                "rotate": "تدوير",
                "sideView": "عرض جانبي",
                "topView": "عرض علوي"
            },
            "showBimCard": "فتح العارض الثلاثي الأبعاد",
            "tree": {
                "arrowTooltip": "ما يجب عمله",
                "columnLabel": "الشجرة",
                "label": "الشجرة",
                "open_card": "فتح البطاقة ذات الصلة",
                "root": "جذر IFC"
            }
        },
        "bulkactions": {
            "abort": "إجهاض العناصر المختارة",
            "alertdownloadattachments": "لا يمكن تنزيل بعض المرفقات لأنها غير محفوظة في الخادم",
            "alertnoattachmentsdownload": "لا يمكن تنزيل أي من المرفقات لأنها غير محفوظة في الخادم",
            "cancelselection": "الغ الاختيار",
            "confirmabort": "أنت تجهض {0} كائنًا لعملية. هلى تريد المواصلة؟",
            "confirmdelete": "أنت تحذف {0} بطاقة. هل تريد المواصلة؟",
            "confirmdeleteattachements": "أنت تحذف {0} مرفقا. هل تريد المواصلة؟",
            "confirmedit": "أنت تعدل {0} من {1} بطاقة. هل تريد المواصلة؟",
            "delete": "حذف العناصر المختارة",
            "download": "تنزيل العناصر المختارة",
            "downloadall": "نزّل جميع المرفقات",
            "edit": "تحرير العناصر المختارة",
            "selectall": "اختر جميع العناصر"
        },
        "calendar": {
            "active_expired": "نشط/منتهي",
            "add": "أضف",
            "advancenotification": "الاشعارات المتقدمة",
            "allcategories": "كل الفئات",
            "alldates": "كل التواريخ",
            "associatedcard": "البطاقة المنوطة",
            "calculated": "المحسوب",
            "calendar": "التقويم",
            "cancel": "تحديد كملغي",
            "category": "الفئة",
            "class": "الصنف",
            "cm_confirmcancel": "هل أنت متأكد من أنك تريد التحديد كجداول مختارة ملغاة؟",
            "cm_confirmcomplete": "هل أنت متأكد من أنك تريد التحديد كجداول مختارة مكتملة؟",
            "cm_markcancelled": "حدد كجداول مختارة ملغاة",
            "cm_markcomplete": "حدد كجداول مختارة مكتملة",
            "complete": "المكتمل",
            "completed": "المكتمل",
            "date": "التاريح",
            "days": "الأيام",
            "delaybeforedeadline": "التأخير قبل الموعد النهائي",
            "delaybeforedeadlinevalue": "التأخير قبل قيمة الموعد النهائي",
            "description": "الوصف",
            "editevent": "تحرير الجدول",
            "enddate": "تاريخ الانتهاء",
            "endtype": "نوع النهاية",
            "event": "الجدول",
            "executiondate": "تاريخ التنفيذ",
            "frequency": "الوتيرة",
            "frequencymultiplier": "مضاعف الوتيرة",
            "grid": "الشبكة",
            "leftdays": "باقي الأيام",
            "londdescription": "كامل الوصف",
            "manual": "الدليل",
            "maxactiveevents": "أقصى عدد للفعاليات النشطة",
            "messagebodydelete": "هل تود إزالة قاعدة الجداول؟",
            "messagebodyplural": "هناك عدد {0} قاعدة للجدول",
            "messagebodyrecalculate": "هل تود إعادة حساب قاعدة الجداول بالتاريخ الجديد؟",
            "messagebodysingular": "هناك قاعدة {0} للجدول",
            "messagetitle": "إعادة حساب الجدول",
            "missingdays": "الأيام المفقودة",
            "next30days": "الأيام الثلاثين التالية",
            "next7days": "الأيام السبعة التالية",
            "notificationtemplate": "القالب المستخدم للإشعارات",
            "notificationtext": "نص الإشعار",
            "occurencies": "عدد التكرار",
            "operation": "العملية",
            "partecipantgroup": "المجموعة المشاركة",
            "partecipantuser": "المستخدم المشارك",
            "priority": "الأولوية",
            "recalculate": "إعادة الحساب",
            "referent": "المرجع",
            "scheduler": "المجدول",
            "sequencepaneltitle": "توليد الجداول",
            "startdate": "تاريخ البدء",
            "status": "الحالة",
            "today": "اليوم",
            "type": "النوع",
            "viewevent": "عرض الجدول",
            "widgetcriterion": "معيار الحساب",
            "widgetemails": "البريد الإلكتروني",
            "widgetsourcecard": "بطاقة المصدر"
        },
        "classes": {
            "cards": {
                "addcard": "أضف بطاقة",
                "clone": "نسخ",
                "clonewithrelations": "نسخ البطاقة والعلاقات",
                "deletebeaware": "اعلم بأن:",
                "deleteblocked": "لا يمكن المواصلة بالحذف لأنه ثمة علاقات ما زالت مع {0}",
                "deletecard": "حذف بطاقة",
                "deleteconfirmation": "هل أنت متأكد من حذف هذه البطاقة؟",
                "deleterelatedcards": "وكذلك البطاقات ذات العلاقة بـ {0} ستُحذف",
                "deleterelations": "العلاقات ببطاقات {0} ستُحذف",
                "label": "البطاقات",
                "modifycard": "تعديل البطاقة",
                "opencard": "فتح البطاقة",
                "print": "طباعة البطاقة"
            },
            "simple": "بسيط",
            "standard": "قياسي"
        },
        "common": {
            "actions": {
                "add": "أضف",
                "apply": "تطبيق",
                "cancel": "إلغاء",
                "close": "غلق",
                "delete": "حذف",
                "edit": "تحرير",
                "execute": "تنفيذ",
                "help": "مساعدة",
                "load": "رفع",
                "open": "فتح",
                "refresh": "تحديث البيانات",
                "remove": "حذف",
                "save": "حفظ",
                "saveandapply": "حفظ وإعمال",
                "saveandclose": "حفظ وغلق",
                "search": "بحث",
                "searchtext": "بحث..."
            },
            "attributes": {
                "nogroup": "البيانات الأساسية"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "تصفية الـ HTML",
                "expand": "توسيع المحرر",
                "reduce": "تضييق المحرر",
                "signature": "أضف توقيع",
                "unlink": "إلغاء الربط",
                "unlinkmessage": "اجعل الروابط نصوصًا"
            },
            "grid": {
                "disablemultiselection": "تعطيل التحديد المتعدد",
                "enamblemultiselection": "تفعيل التحديد المتعدد",
                "export": "تصدير البيانات",
                "filterremoved": "تم حذف الفرز الحالي",
                "import": "استيراد البيانات",
                "itemnotfound": "العنصر غير موجود",
                "list": "القائمة",
                "opencontextualmenu": "فتح قائمة السياق",
                "print": "طباعة",
                "printcsv": "طباعة كـ CSV",
                "printodt": "طباعة كـ ODT",
                "printpdf": "طباعة كـ PDF",
                "row": "عنصر",
                "rows": "عناصر",
                "subtype": "نوع فرعي"
            },
            "tabs": {
                "activity": "النشاط",
                "attachment": "المرفق",
                "attachments": "المرفقات",
                "card": "البطاقة",
                "clonerelationmode": "استنسخ وضع العلاقات",
                "details": "التفاصيل",
                "emails": "الرسائل",
                "history": "التاريخ",
                "notes": "الملاحظات",
                "relations": "العلاقات",
                "schedules": "الجداول"
            }
        },
        "dashboards": {
            "tools": {
                "download": "تنزيل الرسم البياني",
                "gridhide": "إخفاء شبكة البيانات",
                "gridshow": "إظهار شبكة البيانات",
                "openinpopup": "فتح في نافذة",
                "parametershide": "إخفاء عوامل البيانات",
                "parametersshow": "إظهار عوامل البيانات",
                "reload": "إعادة الرفع"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "إضافة ملف من أرشيف الوثائق",
            "alredyexistfile": "هناك ملف موجود يحمل نفس الاسم",
            "archivingdate": "تاريخ الأرشفة",
            "attachfile": "أرفق ملف",
            "bcc": "نسخة كبرونية عمياء",
            "cc": "نسخة كربونية",
            "composeemail": "أنشئ بريد إلكتروني",
            "composefromtemplate": "أنشئ من قالب",
            "delay": "التأخير",
            "delays": {
                "day1": "في يوم واحد",
                "days2": "في يومين",
                "days4": "في أربعة أيام",
                "hour1": "ساعة واحدة",
                "hours2": "ساعتان",
                "hours4": "أربع ساعات",
                "month1": "في شهر واحد",
                "negativeday1": "قبل يوم",
                "negativedays2": "قبل يومين",
                "negativedays4": "قبل أربعة أيام",
                "negativehour1": "قبل ساعة",
                "negativehours2": "قبل ساعتين",
                "negativehours4": "قبل أربعة ساعات",
                "negativemonth1": "قبل شهر",
                "negativeweek1": "قبل اسبوع",
                "negativeweeks2": "قبل اسبوعين",
                "none": "بلا",
                "week1": "في اسبوع",
                "weeks2": "في اسبوعان"
            },
            "dmspaneltitle": "اختر مرفقات من قاعدة البيانات",
            "edit": "تحرير",
            "from": "من",
            "gridrefresh": "إعادة تحميل لائحة البطافات",
            "keepsynchronization": "أبقي متزامن",
            "message": "الرسالة",
            "regenerateallemails": "إعادة تجديد كل الرسائل الإلكترونية",
            "regenerateemail": "إعادة تجديد الرسالة الإلكترونية",
            "remove": "حذف",
            "remove_confirmation": "هل أنت متأكد من حذف هذه الرسائل؟",
            "reply": "الرد",
            "replyprefix": "على {0}, {1} كتب:",
            "selectaclass": "اختر صنف",
            "sendemail": "أرسل رسالة",
            "signature": "التوقيع",
            "statuses": {
                "draft": "مسودة",
                "error": "خطأ",
                "outgoing": "صادر",
                "received": "مستلم",
                "sent": "مرسل"
            },
            "subject": "العنوان",
            "to": "إلى",
            "view": "عرض"
        },
        "errors": {
            "autherror": "اسم مستخدم وكلمة سر غير صحيحة",
            "classnotfound": "الصنف {0} لا يوجد",
            "fieldrequired": "هذا الحقل مطلوب",
            "invalidfilter": "تصفية غير صحيحة",
            "notfound": "العنصر غير موجود"
        },
        "filters": {
            "actions": "الأفعال",
            "addfilter": "أضف فرز",
            "any": "أي",
            "attachments": "المرفقات",
            "attachmentssearchtext": "نص بحث المرفقات",
            "attribute": "اختر سمة",
            "attributes": "السمات",
            "clearfilter": "مسح الفرز",
            "clone": "نسخ",
            "copyof": "نسخة من",
            "currentgroup": "المجموعة الحالية",
            "currentuser": "المستخدم الحالي",
            "defaultset": "تعيين كافتراضي",
            "defaultunset": "ألغ تعيينه كافتراضي",
            "description": "الوصف",
            "domain": "العلاقة",
            "errorname": "اسم الفرز مستخدم أصلا",
            "filterdata": "بيانات الفرز",
            "fromfilter": "من الفرز",
            "fromselection": "من المُختار",
            "group": "المجموعة",
            "ignore": "إهمال",
            "migrate": "ترحيل",
            "name": "اسم",
            "newfilter": "فرز جديد",
            "noone": "لا أحد",
            "operator": "العملية",
            "operators": {
                "beginswith": "يبدأ بـ",
                "between": "بين",
                "contained": "تتضمن",
                "containedorequal": "تتضمن أو تساوي",
                "contains": "تحتوي",
                "containsorequal": "تحتوي أو تساوي",
                "descriptionbegin": "الوصف يبدأ بـ",
                "descriptioncontains": "الوصف يحتوي",
                "descriptionends": "الوصف ينتهي بـ",
                "descriptionnotbegin": "الوصف لا يبدأ بـ",
                "descriptionnotcontain": "الوصف لا يحتوي",
                "descriptionnotends": "الوصف لا ينتهي بـ",
                "different": "مختلف",
                "doesnotbeginwith": "لا يبدأ بـ ",
                "doesnotcontain": "لا يحتوي على",
                "doesnotendwith": "لا ينتهي بـ",
                "endswith": "ينتهي بـ",
                "equals": "يساوي",
                "greaterthan": "أكبر من",
                "isnotnull": "ليس بفارغ",
                "isnull": "فارغ",
                "lessthan": "أصغر من"
            },
            "relations": "العلاقات",
            "type": "النوع",
            "typeinput": "المعامل المدخل",
            "user": "المستخدم",
            "value": "القيمة"
        },
        "gis": {
            "card": "البطاقة",
            "cardsMenu": "قائمة البطاقات",
            "code": "الرمز",
            "description": "الوصف",
            "extension": {
                "errorCall": "خطأ",
                "noResults": "لا نتائج"
            },
            "externalServices": "الخدمات الخارجية",
            "geographicalAttributes": "السمات الجغرافية",
            "geoserverLayers": "طبقات الـ Geoserver",
            "layers": "الطبقات",
            "list": "اللائحة",
            "longpresstitle": "عناصر الجيو في المساحة",
            "map": "الخريطة",
            "mapServices": "خدمات الخريطة",
            "position": "الموضع",
            "root": "الجذر",
            "tree": "شجرة الملاحة",
            "type": "النوغ",
            "view": "عرض",
            "zoom": "تكبير"
        },
        "history": {
            "activityname": "اسم النشاط",
            "activityperformer": "منجز النشاط",
            "begindate": "تاريخ البداية",
            "enddate": "تاريخ النهاية",
            "processstatus": "الحالة",
            "user": "المستخدم"
        },
        "importexport": {
            "database": {
                "uri": "رابط قاعدة البيانات",
                "user": "اسم المستخدم لقاعدة البيانات"
            },
            "downloadreport": "تنزيل التقرير",
            "emailfailure": "حدث خطأ أثناء إرسال البريد!",
            "emailmessage": "المرفق تقرير الاستيراد من ملف \"{0}\" في تاريخ {1}",
            "emailsubject": "استيراد تقرير البيانات",
            "emailsuccess": "تم إرسال البريد بنجاح!",
            "export": "تصدير",
            "exportalldata": "جميع البيانات",
            "exportfiltereddata": "فقط البيانات المطابقة لفرز الشبكة",
            "gis": {
                "shapeimportdisabled": "استيراد الأشكال ليس ممكنًا لهذا القالب",
                "shapeimportenabled": "إعدادات استيراد الأشكال"
            },
            "ifc": {
                "card": "البطاقة",
                "project": "المشروع",
                "sourcetype": "استيراد من"
            },
            "import": "استيراد",
            "importresponse": "استيراد الرد",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "الأخطاء",
                "linenumber": "رقم السطر",
                "message": "الرسالة",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "الصفوف المعالجة",
                "recordnumber": "رقم السجل",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "إرسال التقرير",
            "template": "قالب",
            "templatedefinition": "تعريف القالب"
        },
        "joinviews": {
            "active": "نشطة",
            "addview": "اضف العرض",
            "alias": "اسم مستعار",
            "attribute": "السمة",
            "attributes": "السمات",
            "attributesof": "السمات لـ {0}",
            "createview": "إنشاء عرض",
            "datasorting": "ترتيب الييانات",
            "delete": "حذف",
            "deleteview": "حذف العرض",
            "deleteviewconfirm": "هل أنت متأكد من أنك تريد حذف العرض؟",
            "description": "الوصف",
            "disable": "تعطيل",
            "domainalias": "اسم مستعار المجال",
            "domainsof": "المجالات من {0}",
            "edit": "تحرير",
            "editview": "تحرير إعدادات العرض",
            "enable": "تمكين",
            "fieldsets": "الفِرَز",
            "filters": "الفِرَز",
            "generalproperties": "الخواص العامة",
            "group": "المجموعة",
            "innerjoin": "الانضمام الداخلي",
            "jointype": "نوع الانضمام الداخلي",
            "joinview": "عرض من الانضمام",
            "klass": "الفئة",
            "manageview": "عرض الإدارة",
            "masterclass": "الفئة الرئيسية",
            "masterclassalias": "اسم مستعار الفئة الرئيسية",
            "name": "الاسم",
            "newjoinview": "عرض جديد من الانضمام",
            "outerjoin": "انضمام داخلي",
            "pleaseseleceavalidmasterclass": "رجاءًا اختر اسم فئة رئيسية صحيحة",
            "refreshafteredit": "هل تريد إعادة تحديث الصفحة لرؤية التغييرات؟",
            "selectatleastoneattribute": "رجاءًا اختر على الأقل سمة واحدة لعرضها على الشبمة و تقليل عددها في الخطوة الرابعة.",
            "showingrid": "اظهر الشبكة",
            "showinreducedgrid": "عرض في شبكة مقللة",
            "targetalias": "استهدف اسم الفئة المستعار"
        },
        "login": {
            "buttons": {
                "login": "الدخول",
                "logout": "تغيير المستخدم"
            },
            "fields": {
                "group": "المجموعة",
                "language": "اللغة",
                "password": "كلمة السر",
                "tenants": "المستأجرين",
                "username": "اسم المستخدم"
            },
            "loggedin": "مسجل الدخول",
            "sso": {
                "loginfailure": "فشل الدخول",
                "loginwith": "ادخل بـ {0}",
                "or": "أو"
            },
            "title": "الدخول",
            "welcome": "مرحبا {0}."
        },
        "main": {
            "administrationmodule": "لوحة الإدارة",
            "baseconfiguration": "الإعدادات الأساسية",
            "cardlock": {
                "lockedmessage": "لا يمكنك تحرير هذه البطاقة لأن {0} قاعد يحررها.",
                "someone": "شخص ما"
            },
            "changegroup": "تغيير المجموعة",
            "changetenant": "تغيير {0}",
            "confirmchangegroup": "هل أنت متأكد من أنك تريد تغيير هذه المجموعة؟",
            "confirmchangetenants": "هل أنت متأكد من تغيير المستأجرين النشطين؟",
            "confirmdisabletenant": "هل أنت متأكد من تعطيل خيار \"تجاهل المستأجرين\"?",
            "confirmenabletenant": "هل أنت متأكد من أنك تريد تنشيط خيار \"تجاهل المستأجرين\"?",
            "ignoretenants": "إهمال {0}",
            "info": "معلومات",
            "logo": {
                "cmdbuild": "CMDBuild شعار",
                "cmdbuildready2use": "CMDBuild READY2USE شعار",
                "companylogo": "شعار الشركة",
                "openmaint": "openMAINT شعار"
            },
            "logout": "خروج",
            "managementmodule": "وحدة إدارة البيانات",
            "multigroup": "متعدد المجموعة",
            "multitenant": "عَدّد {0}",
            "navigation": "الملاحة",
            "pagenotfound": "الصفحة غير موجودة",
            "password": {
                "change": "تغيير كلمة السر",
                "confirm": "تأكيد كلمة السر",
                "email": "عنوان البريد الإلكتروني",
                "err_confirm": "كلمتا السر ليستا متطابقتان",
                "err_diffprevious": "لا يمكن استعمال كلمات سر سابقة",
                "err_diffusername": "لا يمكن أن تكون كلمة السر نفس اسم المستخدم",
                "err_length": "يجب أن لا يقل طول كلمة السر عن {0} حرفًا",
                "err_reqdigit": "يجب أن تحتوي كلمة السر على رقما واحدًا على الأقل.",
                "err_reqlowercase": "يجب أن تحتوي كلمة السر على حرفًا صغيرًا واحدًا على الأقل.",
                "err_requppercase": "يجب أن تحتوي كلمة السر على حرفًا كبيرًا واحدًا على الأقل.",
                "expired": "لقد انتهت صلاحية كلمة سرك. لابد من تغييرها الآن.",
                "forgotten": "أنا لا أذكر كلمة السر",
                "new": "كلمة السر الجديدة",
                "old": "كلمة السر القديمة",
                "recoverysuccess": "لقد بعثنا لك بريدًا إلكترونيًا في تعليمات عن كيفية إرجاع كلمة سرك.",
                "reset": "إعادة تعيين كلمة السر",
                "saved": "تم حفظ كلمة السر بنجاح!"
            },
            "pleasecorrecterrors": "رجاءً، صحح الأخطاء المشار إليها!",
            "preferences": {
                "comma": "فاصلة",
                "decimalserror": "حقل عشري يجب أن يكون حاضر",
                "decimalstousandserror": "يجب أن تكونا الفاصلة العشرية والألفية مختلفتان",
                "default": "الافتراضي",
                "defaultvalue": "القيمة الأساسية",
                "firstdayofweek": "أول أيام الاسبوع",
                "gridpreferencesclear": "محو شبكة التفضيلات",
                "gridpreferencescleared": "تم محو شبكة التفضيلات",
                "gridpreferencessave": "حفظ شبكة التفضيلات",
                "gridpreferencessaved": "تم حفظ شبكة التفضيلات",
                "gridpreferencesupdate": "تحديث شبكة التفضيلات",
                "labelcsvseparator": "فيصل الـ CSV",
                "labeldateformat": "نسق التاريخ",
                "labeldecimalsseparator": "الفاصلة العشرية",
                "labellanguage": "اللغة",
                "labelthousandsseparator": "الفاصلة الألفية",
                "labeltimeformat": "نسق الوقت",
                "msoffice": "مايكروسوفت أوفيس",
                "period": "الفترة",
                "preferredfilecharset": "ترميز الـ CSV",
                "preferredofficesuite": "حزمة الأوفيس المفضلة",
                "space": "مسافة",
                "thousandserror": "حقل ألفي يجب أن يكون حاضر",
                "timezone": "المنطقة الزمنية",
                "twelvehourformat": "نظام الـ 12 ساعة",
                "twentyfourhourformat": "نظام الـ 24 ساعة"
            },
            "searchinallitems": "بحث في كل العناصر",
            "selectdeselettenants": "انتقاء/إلغاء انتقاء الكل",
            "treenavcontenttitle": "{0} من {1}",
            "userpreferences": "التفضيلات"
        },
        "menu": {
            "allitems": "كل العناصر",
            "classes": "الأصناف",
            "custompages": "الصفحات الخيارية",
            "dashboards": "لوح المعلومات",
            "processes": "الآليات",
            "reports": "التقارير",
            "views": "الاشتقاقات"
        },
        "notes": {
            "edit": "تعديل الملاحظة"
        },
        "notifier": {
            "attention": "انتباه",
            "error": "خطأ",
            "genericerror": "خطأ عام",
            "genericinfo": "معلومة عامة",
            "genericwarning": "تنبيه عام",
            "info": "معلومات",
            "success": "نجاح",
            "warning": "تنبيه"
        },
        "patches": {
            "apply": "تطبيق التغييرات",
            "category": "الفئة",
            "description": "الوصف",
            "name": "الاسم",
            "patches": "التغييرات"
        },
        "processes": {
            "abortconfirmation": "هل أنت متأكد من أنك تريد أن تجهض هذه الآلية؟",
            "abortprocess": "إجهاض الآلية",
            "action": {
                "advance": "تقدم",
                "label": "فعل"
            },
            "activeprocesses": "العمليات النشطة",
            "allstatuses": "الكل",
            "editactivity": "تحرير النشاط",
            "openactivity": "فتح نشاط",
            "startworkflow": "بدء",
            "workflow": "الآلية"
        },
        "relationGraph": {
            "activity": "النشاط",
            "allLabelsOnGraph": "كل العناوين على الرسمة",
            "card": "البطاقة",
            "cardList": "قائمة البطاقة",
            "cardRelations": "العلاقة",
            "choosenaviagationtree": "اختر شجرة التنقل",
            "class": "الصنف",
            "classList": "قائمة الصنف",
            "compoundnode": "العقدة المركبة",
            "disable": "تعطيل",
            "edges": "الحواف",
            "enable": "تمكين",
            "labelsOnGraph": "التلميح على الرسمة",
            "level": "المستوى",
            "nodes": "العُقَد",
            "openRelationGraph": "فتح مخطوطة العلاقات",
            "qt": "كم",
            "refresh": "تحديث",
            "relation": "العلاقة",
            "relationGraph": "رسمة العلاقات",
            "reopengraph": "فتح الرسمة من هذه العقدة"
        },
        "relations": {
            "adddetail": "أضف تفصيل",
            "addrelations": "أضف علاقات",
            "attributes": "السمات",
            "begindate": "تاريخ البدء",
            "code": "الرمز",
            "deletedetail": "حذف تفصيل",
            "deleterelation": "حذف علاقة",
            "deleterelationconfirm": "هل أنت متأكد من حذف هذه العلاقة؟",
            "description": "الوصف",
            "editcard": "تعديل البطاقة",
            "editdetail": "تحرير تفصيل",
            "editrelation": "تحرير العلاقة",
            "extendeddata": "التاريخ الممدد",
            "mditems": "العناصر",
            "missingattributes": "سمات إجبارية مفقودة",
            "opencard": "فتح البطاقة ذات الصلة",
            "opendetail": "أظهر التفصيل",
            "type": "النوع"
        },
        "reports": {
            "csv": "CSV",
            "download": "تنزيل",
            "format": "تنسيق",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "طباعة",
            "reload": "إعادة تحميل",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "الافتراضي"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "يوميًا"
                        },
                        "monthly": {
                            "description": "شهريًا"
                        },
                        "once": {
                            "description": "مرة واحدة"
                        },
                        "weekly": {
                            "description": "اسبوعيًا"
                        },
                        "yearly": {
                            "description": "سنويًا"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "الافتراضي"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "إضافة موضوع",
            "analysisType": "نوع التحليل",
            "attribute": "سمة",
            "calculateRules": "توليد قواعد النمط",
            "clearThematism": "محو الموضوع",
            "color": "لون",
            "defineLegend": "تعريف المفاتيح",
            "defineThematism": "تعريف الموضوع",
            "function": "وظيفة",
            "generate": "توليد",
            "geoAttribute": "السمات الجغرافية",
            "graduated": "متدرج",
            "highlightSelected": "حدد العناصر المختارة",
            "intervals": "المراحل",
            "legend": "المفاتيح",
            "name": "الاسم",
            "newThematism": "موضوع جديد",
            "punctual": "دقيق",
            "quantity": "كمية",
            "segments": "القطاعات",
            "source": "المصدر",
            "table": "جدول",
            "thematism": "المواضيع",
            "value": "قيمة"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "الخروج بدون حفظ",
                    "stayinedit": "الرجوع للتحرير"
                },
                "savebeforeexit": "ثمة تغييرات في المرفقات. هل تريد حفظها قبل الخروج؟",
                "saveprocessmessage": "لا يمكن حفظ المرفقات إلا في البطاقات الموجودة. اضغط على حفظ، فسيتم إنشاء كائن العملية بالبيانات المدخلة."
            },
            "customform": {
                "addrow": "أضف صف",
                "clonerow": "انسخ صف",
                "datanotvalid": "البيانات غير صحيحة",
                "deleterow": "حذف صف",
                "editrow": "تحرير صف",
                "export": "تصدير",
                "import": "استيراد",
                "importexport": {
                    "expattributes": "البيانات للتصدير",
                    "file": "الملف",
                    "filename": "اسم الملف",
                    "format": "التنسيق",
                    "importmode": "وضع الاستيراد",
                    "keyattributes": "سمات المفتاح",
                    "missingkeyattr": "اختر سمة مفتاح واحدة على الأقل رجاءً",
                    "modeadd": "أضف",
                    "modemerge": "ادمج",
                    "modereplace": "استبدل",
                    "separator": "الفيصل"
                },
                "refresh": "ارجع القيم الافتراضية"
            },
            "linkcards": {
                "checkedonly": "فقط المختار",
                "editcard": "تحرير البطاقة",
                "opencard": "فتح البطاقة",
                "refreshselection": "إعمال الخيارات الأساسية",
                "togglefilterdisabled": "تعطيل الفرز على لائحة البطاقات",
                "togglefilterenabled": "تمكين الفرز على لائحة البطاقات"
            },
            "required": "هذه القطعة مطلوبة"
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
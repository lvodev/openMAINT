(function() {
    Ext.define('CMDBuildUI.locales.ms.Locales', {
        "requires": ["CMDBuildUI.locales.ms.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "ms",
        "administration": CMDBuildUI.locales.ms.LocalesAdministration.administration,
        "attachments": {
            "add": "Tambah lampiran",
            "attachmenthistory": "Sejarah lampiran",
            "author": "Pengarang",
            "browse": "Layari &hellip;",
            "category": "Kategori",
            "code": "Kod",
            "creationdate": "Tarikh Dibuat",
            "deleteattachment": "Padam lampiran",
            "deleteattachment_confirmation": "Adakah anda pasti mahu memadamkan lampiran ini?",
            "description": "Keterangan",
            "download": "Muat turun",
            "dropfiles": "Letakkan fail di sini",
            "editattachment": "Ubat suai lampiran",
            "file": "Fail",
            "filealreadyinlist": "Fail {0} sudah ada dalam senarai.",
            "filename": "Nama fail",
            "fileview": "Lihat lampiran",
            "invalidfiles": "Buang fail yang tidak sah",
            "majorversion": "Versi utama",
            "maxsize": "Saiz fail maksimum yang dibenarkan ialah {0} MB.",
            "metadata": "Metadata",
            "modificationdate": "Tarikh ubah suai",
            "new": "Lampuran baru",
            "nocategory": "Tidak dikategorikan",
            "preview": "Pratonton",
            "removefile": "Buang fail",
            "statuses": {
                "empty": "Fail kosong",
                "error": "Ralat",
                "extensionNotAllowed": "Fail lanjutan tidak dibenarkan",
                "loaded": "Dimuatkan",
                "ready": "Sedia",
                "toolarge": "Terlalu besar"
            },
            "successupload": "{0} lampiran dimuat naik.",
            "uploadfile": "Muatnaik fail...",
            "version": "Versi",
            "viewhistory": "Lihat sejarah lampiran",
            "warningmessages": {
                "atleast": "Amaran: {0} lampiran jenis \"{1}\" telah dimuatkan. Kategori ini mengharapkan sekurang-kurangnya {2} lampiran.",
                "exactlynumber": "Amaran: {0} lampiran jenis \"{1}\" ada",
                "maxnumber": "Amaran: {0} lampiran jenis \"{1}\" telah dimuatkan. Kategori ini menjangkakan paling banyak {2} lampiran."
            },
            "wrongfileextension": "{0} lanjutan fail tidak dibenarkan"
        },
        "bim": {
            "bimViewer": "Paparan Bim",
            "card": {
                "label": "Kad"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Saiz kotak terikat sepanjang paksi X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Saiz kotak terikat sepanjang paksi Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Saiz kotak terikat sepanjang paksi Z",
                "LARGEST_FACE_AREA": "Kawasan permukaan paling besar",
                "LARGEST_FACE_DIRECTION": "Arah permukaan paling besar",
                "SURFACE_AREA_ALONG_X": "Luas permukaan sepanjang paksi X",
                "SURFACE_AREA_ALONG_Y": "Luas permukaan sepanjang paksi Y",
                "SURFACE_AREA_ALONG_Z": "Luas permukaan sepanjang paksi Z",
                "TOTAL_SHAPE_VOLUME": "Isipadu bentuk keseluruhan",
                "TOTAL_SURFACE_AREA": "Jumlah luas permukaan",
                "WALKABLE_SURFACE_AREA": "Kawasan permukaan yang boleh dilalui",
                "calculated": "Dikira",
                "description": "Penerangan",
                "guid": "GUID",
                "label": "Ciri-ciri",
                "name": "Nama",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Lapisan-lapisan",
                "menu": {
                    "hideAll": "Sembunyi Semua",
                    "showAll": "Tunjuk Semua"
                },
                "name": "Nama",
                "qt": "Qt",
                "visibility": "Keterlihatan"
            },
            "menu": {
                "camera": "Kamera",
                "frontView": "Padangan Depan",
                "mod": "Kawalan pandangan",
                "orthographic": "Kamera Ortografi",
                "pan": "Tatal",
                "perspective": "Kamera Perspektif",
                "resetView": "Tetapan semula pandangan",
                "rotate": "putar",
                "sideView": "Padangan Sisi",
                "topView": "Padangan Atas"
            },
            "showBimCard": "Buka paparan 3D",
            "tree": {
                "arrowTooltip": "Pilih elemen",
                "columnLabel": "Cabang",
                "label": "Cabang",
                "open_card": "Buka kad berkaitan",
                "root": "Akar Ifc"
            }
        },
        "bulkactions": {
            "abort": "Batalkan item yang dipilih",
            "alertdownloadattachments": "Beberapa lampiran tidak akan dimuat turun kerana masih belum disimpan ke pelayan",
            "alertnoattachmentsdownload": "Tidak ada lampiran yang tidak akan dimuat turun kerana belum disimpan ke pelayan",
            "cancelselection": "Batalkan pilihan",
            "confirmabort": "Anda membatalkan {0} contoh proses.",
            "confirmdelete": "Anda memadamkan {0} kad. Adakah anda pasti mahu meneruskan?",
            "confirmdeleteattachements": "Anda memadamkan {0} lampiran. Adakah anda pasti mahu meneruskan?",
            "confirmedit": "Anda mengubah suai kad {0} pada {1}. Adakah anda pasti mahu meneruskan?",
            "delete": "Padamkan item yang dipilih",
            "download": "Muat turun lampiran terpilih",
            "downloadall": "Muat turun semua lampiran",
            "edit": "Ubah item yang dipilih",
            "selectall": "Pilih semua item"
        },
        "calendar": {
            "active_expired": "Aktif / Tamat Tempoh",
            "add": "Tambah",
            "advancenotification": "Pemberitahuan Awal",
            "allcategories": "Semua kategori",
            "alldates": "Semua Tarikh",
            "associatedcard": "Kad bersekutu",
            "calculated": "Dikira",
            "calendar": "Kalendar",
            "cancel": "Tandakan sebagai dibatalkan",
            "category": "Kategori",
            "class": "Kelas",
            "cm_confirmcancel": "Adakah anda pasti mahu menandakan sebagai jadual terpilih yang dibatalkan?",
            "cm_confirmcomplete": "Adakah anda pasti mahu menandakan sebagai jadual terpilih yang telah selesai?",
            "cm_markcancelled": "Tandakan sebagai jadual terpilih yang dibatalkan",
            "cm_markcomplete": "Tandakan sebagai jadual terpilih yang telah siap",
            "complete": "Lengkap",
            "completed": "Selesai",
            "date": "Tarikh",
            "days": "Hari",
            "delaybeforedeadline": "Kelewatan sebelum tarikh akhir",
            "delaybeforedeadlinevalue": "Kelewatan sebelum nilai tarikh akhir",
            "description": "Keterangan",
            "editevent": "Ubah jadual",
            "enddate": "Tarikh Akhir",
            "endtype": "Jenis akhir",
            "event": "Jadual",
            "executiondate": "Tarikh Pelaksanaan",
            "frequency": "Kekerapan",
            "frequencymultiplier": "Pengganda frekuensi",
            "grid": "Grid",
            "leftdays": "Beberapa hari lagi",
            "londdescription": "Keterangan Penuh",
            "manual": "manual",
            "maxactiveevents": "Acara aktif Maxima",
            "messagebodydelete": "Adakah anda mahu mengalih keluar peraturan penjadual?",
            "messagebodyplural": "Terdapat {0} peraturan jadual",
            "messagebodyrecalculate": "Adakah anda ingin mengira semula peraturan jadual dengan tarikh baru?",
            "messagebodysingular": "Terdapat {0} peraturan jadual",
            "messagetitle": "Jadual semula",
            "missingdays": "Hari-hari yang hilang",
            "next30days": "30 hari seterusnya",
            "next7days": "7 hari seterusnya",
            "notificationtemplate": "Templat digunakan untuk pemberitahuan",
            "notificationtext": "Teks pemberitahuan",
            "occurencies": "Bilangan kejadian",
            "operation": "Operasi",
            "partecipantgroup": "Kumpulan peserta",
            "partecipantuser": "Pengguna peserta",
            "priority": "Keutamaan",
            "recalculate": "Kiraan semula",
            "referent": "Rujukan",
            "scheduler": "Penjadual",
            "sequencepaneltitle": "Menjana jadual",
            "startdate": "Tarikh Mula",
            "status": "Taraf",
            "today": "Hari ini",
            "type": "Jenis",
            "viewevent": "Lihat jadual",
            "widgetcriterion": "Kriteria pengiraan",
            "widgetemails": "Emel",
            "widgetsourcecard": "Sumber kad"
        },
        "classes": {
            "cards": {
                "addcard": "Tambah kad",
                "clone": "Klon",
                "clonewithrelations": "Klon Kad dan hubungan",
                "deletebeaware": "Ketahuilah bahawa:",
                "deleteblocked": "Tidak mungkin untuk meneruskan penghapusan kerana terdapat hubungan dengan {0}.",
                "deletecard": "Padam kad",
                "deleteconfirmation": "Adakah anda pasti mahu padamkan kad ini?",
                "deleterelatedcards": "juga {0} kad yang berkaitan akan dipadamkan",
                "deleterelations": "hubungan dengan {0} kad akan dipadamkan",
                "label": "Kad",
                "modifycard": "Ubah suai kad",
                "opencard": "Buka kad",
                "print": "Cetak kad"
            },
            "simple": "Mudah",
            "standard": "Piawaian"
        },
        "common": {
            "actions": {
                "add": "Tambah",
                "apply": "Guna",
                "cancel": "Batal",
                "close": "Tutup",
                "delete": "Padam",
                "edit": "Ubah",
                "execute": "Laksana",
                "help": "Bantuan",
                "load": "Muatnaik",
                "open": "Buka",
                "refresh": "Pembaharuan Data",
                "remove": "Buang",
                "save": "Simpan",
                "saveandapply": "Simpan dan guna",
                "saveandclose": "Simpan dan tutup",
                "search": "Cari",
                "searchtext": "Cari..."
            },
            "attributes": {
                "nogroup": "Data Asal"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Kosongkan HTML",
                "expand": "Buka Editor",
                "reduce": "Tutup Editor",
                "signature": "Tambah tanda tangan",
                "unlink": "Nyahpaut",
                "unlinkmessage": "Ubah pautan terpilih menjadi"
            },
            "grid": {
                "disablemultiselection": "Nyahaktifkan pelbagai pilihan",
                "enamblemultiselection": "Aktifkan pelbagai pemilihan",
                "export": "Eksport Data",
                "filterremoved": "Penapis semasa telah dikeluarkan",
                "import": "Import data",
                "itemnotfound": "Item tidak dijumpai",
                "list": "Senarai",
                "opencontextualmenu": "Buka menu kontekstual",
                "print": "Cetak",
                "printcsv": "Cetak sebagai CSV",
                "printodt": "Cetak sebagai ODT",
                "printpdf": "Cetak sebagai PDF",
                "row": "Item",
                "rows": "Item-item",
                "subtype": "Subjenis"
            },
            "tabs": {
                "activity": "Aktiviti",
                "attachment": "Lampiran",
                "attachments": "Lampiran-lampiran",
                "card": "Kad",
                "clonerelationmode": "Mod Hubungan Klon",
                "details": "Perincian",
                "emails": "Emel",
                "history": "Sejarah",
                "notes": "Nota",
                "relations": "Hubungan",
                "schedules": "Jadual-jadual"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Muat turun carta",
                "gridhide": "Sembunyikan grid data",
                "gridshow": "Tunjukkan grid data",
                "openinpopup": "Buka dalam pop-timbul",
                "parametershide": "Sembunyikan tetapan-tetapan data",
                "parametersshow": "Tunjukkan tetapan data",
                "reload": "Tambah semula"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Tambahkan lampiran dari arkib dokumen",
            "alredyexistfile": "Sudah ada fail dengan nama ini",
            "archivingdate": "Tarikh pengarkiban",
            "attachfile": "Lampirkan fail",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Karang e-mel",
            "composefromtemplate": "Karang daripada templat",
            "delay": "Tangguh",
            "delays": {
                "day1": "Dalam masa 1 hari",
                "days2": "Dalam masa 2 hari",
                "days4": "Dalam masa 4 hari",
                "hour1": "1 jam",
                "hours2": "2 jam",
                "hours4": "4 jam",
                "month1": "Dalam masa 1 bulan",
                "negativeday1": "1 hari sebelum",
                "negativedays2": "2 hari sebelum",
                "negativedays4": "4 hari sebelum",
                "negativehour1": "1 jam sebelum",
                "negativehours2": "2 jam sebelum",
                "negativehours4": "4 jam sebelum",
                "negativemonth1": "1 bulan sebelum",
                "negativeweek1": "1 minggu sebelum",
                "negativeweeks2": "2 minggu sebelum",
                "none": "Tiada",
                "week1": "Dalam masa 1 minggu",
                "weeks2": "Dalam masa 2 minggu"
            },
            "dmspaneltitle": "Pilih lampiran dari Pangkalan Data",
            "edit": "Ubah",
            "from": "Dari",
            "gridrefresh": "Memulihkan grid",
            "keepsynchronization": "Simpan penyegerakan",
            "message": "Pesanan",
            "regenerateallemails": "Menjana semula semua e-mel",
            "regenerateemail": "Menjana semula e-mel",
            "remove": "Buang",
            "remove_confirmation": "Adakah anda pasti mahu memadam e-mel ini?",
            "reply": "balas",
            "replyprefix": "On {0}, {1} wrote:",
            "selectaclass": "Pilih kelas",
            "sendemail": "Hantar e-mel",
            "signature": "<em>Signature</em>",
            "statuses": {
                "draft": "Rangka",
                "error": "Ralat",
                "outgoing": "Menghantar",
                "received": "Diterima",
                "sent": "Dihantar"
            },
            "subject": "Tajuk",
            "to": "Kepada",
            "view": "Lihat"
        },
        "errors": {
            "autherror": "Nama pengguna atau kata laluan salah",
            "classnotfound": "Kelas {0} tidak dijumpai",
            "fieldrequired": "Ruang ini perlu diisi",
            "invalidfilter": "Penapis tidak sah",
            "notfound": "Item tidak dijumpai"
        },
        "filters": {
            "actions": "Tindakan",
            "addfilter": "tambah penapis",
            "any": "Mana-mana",
            "attachments": "Lampiran",
            "attachmentssearchtext": "Teks carian lampiran",
            "attribute": "Pilih sifat",
            "attributes": "Sifat",
            "clearfilter": "Kosongkan penapis",
            "clone": "Klon",
            "copyof": "Salinan dari",
            "currentgroup": "Kumpulan Sedia ada",
            "currentuser": "Pengguna Sedia ada",
            "defaultset": "Tetapkan ke asal",
            "defaultunset": "Ubah dari asal",
            "description": "Keterangan",
            "domain": "Domain",
            "errorname": "Nama penapis sudah digunakan",
            "filterdata": "Tapis data",
            "fromfilter": "Dari penapis",
            "fromselection": "Pilih dari",
            "group": "Kumpulan",
            "ignore": "Abai",
            "migrate": "Pindah",
            "name": "Nama",
            "newfilter": "Penapis baru",
            "noone": "Tiada sesiapa",
            "operator": "Pengendali",
            "operators": {
                "beginswith": "Mula dengan",
                "between": "Antara",
                "contained": "Terkawal",
                "containedorequal": "Terkawal atau sama",
                "contains": "Mengandungi",
                "containsorequal": "Mengandungi atau sama",
                "descriptionbegin": "Penerangan bermula dengan",
                "descriptioncontains": "Penerangan mengandungi",
                "descriptionends": "Penerangan berakhir dengan",
                "descriptionnotbegin": "Penerangan tidak bermula dengan",
                "descriptionnotcontain": "Penerangan tidak mengandungi",
                "descriptionnotends": "Penerangan tidak berakhir dengan",
                "different": "Berbeza",
                "doesnotbeginwith": "Tidak bermula dengan",
                "doesnotcontain": "Tidak mengandungi",
                "doesnotendwith": "Tidak berakhir dengan",
                "endswith": "Berakhir dengan",
                "equals": "Sama",
                "greaterthan": "Lebih besar dari",
                "isnotnull": "Bukan nol",
                "isnull": "Nol",
                "lessthan": "Lebih kecil dari"
            },
            "relations": "Hubungan",
            "type": "Jenis",
            "typeinput": "Masukkan tetapan",
            "user": "Pengguna",
            "value": "Nilai"
        },
        "gis": {
            "card": "Kad",
            "cardsMenu": "Menu Kad",
            "code": "Kod",
            "description": "Keterangan",
            "extension": {
                "errorCall": "Ralat",
                "noResults": "Tiada keputusan"
            },
            "externalServices": "Khidmat luaran",
            "geographicalAttributes": "Sifat Geo",
            "geoserverLayers": "Lapisan Geoserver",
            "layers": "Lapisan",
            "list": "Senarai",
            "longpresstitle": "Geoelements di kawasan",
            "map": "Peta",
            "mapServices": "Khidmat Peta",
            "position": "Kedudukan",
            "root": "Akar",
            "tree": "Cabang",
            "type": "Jenis",
            "view": "Lihat",
            "zoom": "Zum"
        },
        "history": {
            "activityname": "Nama aktiviti",
            "activityperformer": "Pelaku aktiviti",
            "begindate": "Tarikh mula",
            "enddate": "Tarikh akhir",
            "processstatus": "Taraf",
            "user": "Pengguna"
        },
        "importexport": {
            "database": {
                "uri": "Pangkalan data URI",
                "user": "Pangkalan data pengguna"
            },
            "downloadreport": "Muat turun laporan",
            "emailfailure": "Ralat berlaku semasa menghantar e-mel!",
            "emailmessage": "Melampirkan laporan import fail \"{0}\" dalam tarikh {1}",
            "emailsubject": "Import laporan data",
            "emailsuccess": "E-mel telah berjaya dihantar!",
            "export": "Eksport",
            "exportalldata": "Semua maklumat",
            "exportfiltereddata": "Hanya data yang sepadan dengan penapis grid",
            "gis": {
                "shapeimportdisabled": "Import bentuk tidak diaktifkan untuk templat ini",
                "shapeimportenabled": "Konfigurasi bentuk import"
            },
            "ifc": {
                "card": "Kad",
                "project": "Projek",
                "sourcetype": "Impot dari"
            },
            "import": "Import",
            "importresponse": "Maklum balas import",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Ralat",
                "linenumber": "nombor baris",
                "message": "Pesanan",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Baris diproses",
                "recordnumber": "nombor rekod",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Hantar laporan",
            "template": "Templat",
            "templatedefinition": "Definisi templat"
        },
        "joinviews": {
            "active": "Aktif",
            "addview": "Tambah paparan",
            "alias": "Nama samaran",
            "attribute": "Ciri",
            "attributes": "Ciri-ciri",
            "attributesof": "Ciri-ciri dari: {0}",
            "createview": "Buat paparan",
            "datasorting": "Penyusun data",
            "delete": "Padam",
            "deleteview": "Padam paparan",
            "deleteviewconfirm": "Adakah anda pasti mahu memadamkan paparan ini?",
            "description": "Keterangan",
            "disable": "Nyahaktifkan",
            "domainalias": "Nama samaran Domain",
            "domainsof": "Kawasan dari {0}",
            "edit": "Ubah",
            "editview": "Ubah konfigurasi paparan",
            "enable": "Aktifkan",
            "fieldsets": "Kumpulan medan",
            "filters": "Tapisan",
            "generalproperties": "Ciri-ciri umum",
            "group": "Kumpulan",
            "innerjoin": "Bergabung dalaman",
            "jointype": "Jenis Gabungan",
            "joinview": "Paparan dari gabungan",
            "klass": "Kelas",
            "manageview": "Urus paparan",
            "masterclass": "Kelas induk",
            "masterclassalias": "Nama samaran kelas induk",
            "name": "Nama",
            "newjoinview": "Paparan baru dari gabungan",
            "outerjoin": "Gabungan Luaran",
            "pleaseseleceavalidmasterclass": "Sila pilih kelas induk yang sah",
            "refreshafteredit": "Adakah anda mahu memuat semula halaman untuk melihat perubahannya?",
            "selectatleastoneattribute": "Pilih sekurang-kurangnya satu ciri untuk dipaparkan dalam grid dan grid yang dikurangkan pada langkah 4.",
            "showingrid": "Tunjukkan dalam grid",
            "showinreducedgrid": "Tunjukkan dalam grid yang dikurangkan",
            "targetalias": "Nama samaran kelas sasaran"
        },
        "login": {
            "buttons": {
                "login": "Log masuk",
                "logout": "Tukar pengguna"
            },
            "fields": {
                "group": "Kumpulan",
                "language": "Bahasa",
                "password": "Kata laluan",
                "tenants": "Penyewa",
                "username": "Nama pengguna"
            },
            "loggedin": "telah log masuk",
            "sso": {
                "loginfailure": "Log masuk gagal",
                "loginwith": "Log masuk dengan (0)",
                "or": "atau"
            },
            "title": "Log masuk",
            "welcome": "Selamat kembali {0}."
        },
        "main": {
            "administrationmodule": "Modul Pentadbiran",
            "baseconfiguration": "Konfigurasi Asas",
            "cardlock": {
                "lockedmessage": "Anda tidak boleh mengedit kad ini kerana {0} sedang mengeditnya.",
                "someone": "seseorang"
            },
            "changegroup": "Tukar Kumpulan",
            "changetenant": "Tukar {0}",
            "confirmchangegroup": "Adakah anda pasti mahu menukar kumpulan itu?",
            "confirmchangetenants": "Adakah anda pasti mahu menukar penyewa aktif?",
            "confirmdisabletenant": "Adakah anda pasti mahu menyahaktifkan tanda \"Abaikan penyewa\"?",
            "confirmenabletenant": "Adakah anda pasti mahu mengaktifkan tanda \"Abaikan penyewa\"?",
            "ignoretenants": "Abaikan {0}",
            "info": "Maklumat",
            "logo": {
                "cmdbuild": "logo CMDBuild",
                "cmdbuildready2use": "logo CMDBuild READY2USE",
                "companylogo": "logo Syarikat",
                "openmaint": "logo openMAINT"
            },
            "logout": "Log keluar",
            "managementmodule": "Modul pengurusan data",
            "multigroup": "Pelbagai kumpulan",
            "multitenant": "Pelbagai {0}",
            "navigation": "Kemudi",
            "pagenotfound": "Laman tidak dijumpai",
            "password": {
                "change": "Tukar kata laluan",
                "confirm": "Sahkan kata laluan",
                "email": "Alamat emel",
                "err_confirm": "Kata laluan tidak sepadan.",
                "err_diffprevious": "Kata laluan tidak boleh sama dengan yang sebelumnya.",
                "err_diffusername": "Kata laluan tidak boleh sama dengan nama pengguna.",
                "err_length": "Kata laluan mestilah sekurang-kurangnya {0}",
                "err_reqdigit": "Kata laluan mesti mengandungi sekurang-kurangnya satu digit.",
                "err_reqlowercase": "Kata laluan mesti mengandungi sekurang-kurangnya satu huruf kecil.",
                "err_requppercase": "Kata laluan mesti mengandungi sekurang-kurangnya satu aksara huruf besar.",
                "expired": "Kata laluan anda telah tamat tempoh. Anda mesti mengubahnya sekarang.",
                "forgotten": "Saya terlupa kata laluan saya",
                "new": "Kata laluan baharu",
                "old": "Kata laluan lama",
                "recoverysuccess": "Kami telah menghantar e-mel kepada anda untuk mendapatkan semula kata laluan anda.",
                "reset": "Menetapkan semula kata laluan",
                "saved": "Kata laluan disimpan dengan betul!"
            },
            "pleasecorrecterrors": "Sila betulkan ralat yang ditunjukkan!",
            "preferences": {
                "comma": "Koma",
                "decimalserror": "Medan perpuluhan mesti ada",
                "decimalstousandserror": "Perpuluhan dan pemisah Ribuan mestilah berbeza",
                "default": "Asal",
                "defaultvalue": "Nilai tetapan asal",
                "firstdayofweek": "Hari pertama dalam seminggu",
                "gridpreferencesclear": "Kosongkan grid pilihan",
                "gridpreferencescleared": "Grid Keutamaan dikosongkan!",
                "gridpreferencessave": "Simpan pilihan grid",
                "gridpreferencessaved": "Grid Keutamaan disimpan!",
                "gridpreferencesupdate": "Kemas kini grid pilihan",
                "labelcsvseparator": "Pembahagi CSV",
                "labeldateformat": "Format tarikh",
                "labeldecimalsseparator": "Pemisah perpuluhan",
                "labellanguage": "Bahasa",
                "labelthousandsseparator": "Pemisah ribu",
                "labeltimeformat": "Format masa",
                "msoffice": "Microsoft Office",
                "period": "Titik",
                "preferredfilecharset": "pengekodan CSV",
                "preferredofficesuite": "Pilihan Office suite",
                "space": "Ruang",
                "thousandserror": "Medan seribu mesti ada",
                "timezone": "Zone Masa",
                "twelvehourformat": "format 12-jam",
                "twentyfourhourformat": "format 24-jam"
            },
            "searchinallitems": "Cari dalam semua item",
            "selectdeselettenants": "Pilih / Nyahpilih semua",
            "treenavcontenttitle": "{0} daripada {1}",
            "userpreferences": "Keutamaan"
        },
        "menu": {
            "allitems": "Semua items",
            "classes": "Kelas",
            "custompages": "Laman Boleh ubah",
            "dashboards": "Papan pemuka",
            "processes": "Proses",
            "reports": "Laporan",
            "views": "Lihat"
        },
        "notes": {
            "edit": "Ubah suai nota"
        },
        "notifier": {
            "attention": "Perhatian",
            "error": "Ralat",
            "genericerror": "Ralat umum",
            "genericinfo": "Maklumat umum",
            "genericwarning": "Amaran umum",
            "info": "Maklumat",
            "success": "Berjaya",
            "warning": "Amaran"
        },
        "patches": {
            "apply": "Guna pembaikan",
            "category": "Kategori",
            "description": "Keterangan",
            "name": "Nama",
            "patches": "Pembaikan"
        },
        "processes": {
            "abortconfirmation": "Adakah anda pasti mahu membatalkan proses ini?",
            "abortprocess": "Batalkan proses",
            "action": {
                "advance": "Maju",
                "label": "Tindakan"
            },
            "activeprocesses": "Proses aktif",
            "allstatuses": "Semua",
            "editactivity": "Ubah suai aktiviti",
            "openactivity": "Buka aktiviti",
            "startworkflow": "Mula",
            "workflow": "Aliran Kerja"
        },
        "relationGraph": {
            "activity": "aktiviti",
            "allLabelsOnGraph": "semua label pada grafik",
            "card": "Kad",
            "cardList": "Senarai Kad",
            "cardRelations": "Kad Hubungan",
            "choosenaviagationtree": "Pilih cabang kemudi",
            "class": "Kelas",
            "classList": "Senarai Kelas",
            "compoundnode": "Nod Kompaun",
            "disable": "Nyahaktifkan",
            "edges": "Sudut Tepi",
            "enable": "Aktifkan",
            "labelsOnGraph": "maklumat tambahan pada grafik",
            "level": "Tahap",
            "nodes": "Nod-nod",
            "openRelationGraph": "Buka Graf Perhubungan",
            "qt": "Qt",
            "refresh": "Tetapan semula",
            "relation": "hubungan",
            "relationGraph": "Graf Hubungan",
            "reopengraph": "Buka semula grafik dari nod ini"
        },
        "relations": {
            "adddetail": "Tambah perincian",
            "addrelations": "Tambah hubungan",
            "attributes": "Sifat",
            "begindate": "Tarikh Mula",
            "code": "Kod",
            "deletedetail": "Padam perincian",
            "deleterelation": "Padam hubungan",
            "deleterelationconfirm": "Adakah anda pasti mahu memadamkan hubungan ini?",
            "description": "Keterangan",
            "editcard": "Ubah kad",
            "editdetail": "Ubah perincian",
            "editrelation": "Ubah hubungan",
            "extendeddata": "Data lanjutan",
            "mditems": "items",
            "missingattributes": "Hilang sifat wajib",
            "opencard": "Buka kad hubungan",
            "opendetail": "Tunjuk perincian",
            "type": "Jenis"
        },
        "reports": {
            "csv": "CSV",
            "download": "Muat turun",
            "format": "Format",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Cetak",
            "reload": "Tambah semula",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Tetapan Asal"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Harian"
                        },
                        "monthly": {
                            "description": "Bulanan"
                        },
                        "once": {
                            "description": "Sekali"
                        },
                        "weekly": {
                            "description": "Mingguan"
                        },
                        "yearly": {
                            "description": "Tahunan"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Tetapan Asal"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Tambah Thematism",
            "analysisType": "Jenis Analisis",
            "attribute": "Sifat",
            "calculateRules": "Jana gaya peraturan",
            "clearThematism": "Kosongkan Thematism",
            "color": "Warna",
            "defineLegend": "Takrifan lejen",
            "defineThematism": "Takrifan Thematism",
            "function": "Fungsi",
            "generate": "Jana",
            "geoAttribute": "Sifat Geographic",
            "graduated": "Layak",
            "highlightSelected": "Serlahkan item yang dipilih",
            "intervals": "selang masa",
            "legend": "Lejen",
            "name": "nama",
            "newThematism": "Thematism baru",
            "punctual": "Tepat masa",
            "quantity": "Kira",
            "segments": "Bahagian",
            "source": "Sumber",
            "table": "Jadual",
            "thematism": "Thematisms",
            "value": "Nilai"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Keluar tanpa menyimpan",
                    "stayinedit": "Kembali untuk mengedit"
                },
                "savebeforeexit": "Terdapat perubahan yang tidak disimpan dalam lampiran. Adakah anda mahu menyimpan mereka",
                "saveprocessmessage": "Lampiran hanya dapat disimpan dalam kad yang ada. Menekan pada simpan, contoh proses akan dibuat dengan data yang dimasukkan dalam borang."
            },
            "customform": {
                "addrow": "Tambah baris",
                "clonerow": "Klon baris",
                "datanotvalid": "Data tidak sah",
                "deleterow": "Padam baris",
                "editrow": "Ubah baris",
                "export": "Eksport",
                "import": "Import",
                "importexport": {
                    "expattributes": "Data untuk dieksport",
                    "file": "Fail",
                    "filename": "Nama fail",
                    "format": "format",
                    "importmode": "Mod import",
                    "keyattributes": "Sifat utama",
                    "missingkeyattr": "Pilih sekurang-kurangnya satu sifat utama",
                    "modeadd": "Tambah",
                    "modemerge": "Gabung",
                    "modereplace": "Tukar",
                    "separator": "Pembahagi"
                },
                "refresh": "Tetapkan ke asal"
            },
            "linkcards": {
                "checkedonly": "Periksa sahaja",
                "editcard": "Ubah kad",
                "opencard": "Buka kad",
                "refreshselection": "Guna pilihan asal",
                "togglefilterdisabled": "Nyahaktifkan penapisan grid",
                "togglefilterenabled": "Aktifkan penapis grid"
            },
            "required": "Wijet ini diperlukan."
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
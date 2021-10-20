(function() {
    Ext.define('CMDBuildUI.locales.es.Locales', {
        "requires": ["CMDBuildUI.locales.es.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "es",
        "administration": CMDBuildUI.locales.es.LocalesAdministration.administration,
        "attachments": {
            "add": "Agregar adjunto",
            "attachmenthistory": "Historia adjunto",
            "author": "Autor",
            "browse": "Navegar &hellip;",
            "category": "Categoria",
            "code": "Código",
            "creationdate": "Fecha de creación",
            "deleteattachment": "Eliminar adjunto",
            "deleteattachment_confirmation": "¿Estás seguro de que quieres eliminar este adjunto?",
            "description": "Descripción",
            "download": "Descargar",
            "dropfiles": "Suelta los archivos aquí",
            "editattachment": "Modificar adjunto",
            "file": "Archivo",
            "filealreadyinlist": "El archivo {0} ya está en la lista.",
            "filename": "Nombre archivo",
            "fileview": "Ver adjunto",
            "invalidfiles": "Eliminar archivos inválidos",
            "majorversion": "Versión principal",
            "maxsize": "El tamaño de archivo máximo permitido es {0} MB.",
            "metadata": "Metadatos",
            "modificationdate": "Fecha de modificación",
            "new": "Nuevo adjunto",
            "nocategory": "Sin categorizar",
            "preview": "Avance",
            "removefile": "Eliminar archivo",
            "statuses": {
                "empty": "Archivo vacío",
                "error": "Error",
                "extensionNotAllowed": "Extensión de archivo no permitida",
                "loaded": "Cargado",
                "ready": "Listo",
                "toolarge": "Demasiado grande"
            },
            "successupload": "{0} adjuntos cargados.",
            "uploadfile": "Cargar archivio…",
            "version": "Versión",
            "viewhistory": "Ver historia adjunto",
            "warningmessages": {
                "atleast": "Advertencia: se han cargado {0} adjuntos de tipo \"{1}\". Esta categoría espera al menos {2} adjuntos",
                "exactlynumber": "Advertencia: se han cargado {0} adjuntos de tipo \"{1}\". Esta categoría espera {2} adjuntos",
                "maxnumber": "Advertencia: se han cargado {0} adjunto de tipo \"{1}\". Esta categoría espera como máximo {2} adjuntos."
            },
            "wrongfileextension": "La extensión de archivo {0} no está permitida"
        },
        "bim": {
            "bimViewer": "Visor BIM",
            "card": {
                "label": "Tarjeta"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Tamaño del cuadro delimitador a lo largo del eje X",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Tamaño del cuadro delimitador a lo largo del eje Y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Tamaño del cuadro delimitador a lo largo del eje Z",
                "LARGEST_FACE_AREA": "Mayor superficie",
                "LARGEST_FACE_DIRECTION": "Dirección de la mayor superficie",
                "SURFACE_AREA_ALONG_X": "Área de superficie a lo largo del eje X",
                "SURFACE_AREA_ALONG_Y": "Área de superficie a lo largo del eje Y",
                "SURFACE_AREA_ALONG_Z": "Área de superficie a lo largo del eje Z",
                "TOTAL_SHAPE_VOLUME": "Volumen total",
                "TOTAL_SURFACE_AREA": "Área total",
                "WALKABLE_SURFACE_AREA": "Superficie transitable",
                "calculated": "Calculado",
                "description": "Descripción",
                "guid": "GUID",
                "label": "Propiedades",
                "name": "Nombre",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Capas",
                "menu": {
                    "hideAll": "Ocultar todo",
                    "showAll": "Mostrar todos"
                },
                "name": "Nombre",
                "qt": "Cantidad",
                "visibility": "Visibilidad"
            },
            "menu": {
                "camera": "Cámara",
                "frontView": "Vista frontal",
                "mod": "Controles de visor",
                "orthographic": "Camara ortografica",
                "pan": "Desplazar",
                "perspective": "Cámara de perspectiva",
                "resetView": "Reestablecer vista",
                "rotate": "Rota",
                "sideView": "Vista lateral",
                "topView": "Vista superior"
            },
            "showBimCard": "Abrir visualizador 3D",
            "tree": {
                "arrowTooltip": "Seleccionar elemento",
                "columnLabel": "Vista de árbol",
                "label": "Vista de árbol",
                "open_card": "Abrir tarjeta relacionada",
                "root": "Raíz de IFC"
            }
        },
        "bulkactions": {
            "abort": "Interrumpir procesos seleccionados",
            "alertdownloadattachments": "Algunos archivos adjuntos no se descargarán porque aún no se han guardado en el servidor.",
            "alertnoattachmentsdownload": "No se descargarán archivos adjuntos porque aún no se han guardado en el servidor",
            "cancelselection": "Cancelar selección",
            "confirmabort": "Está abortando {0} instancias de proceso. ¿Estás seguro de que quieres continuar?",
            "confirmdelete": "Está eliminando {0} tarjetas. ¿Estás seguro de que quieres continuar?",
            "confirmdeleteattachements": "Está eliminando {0} adjuntos. ¿Estás seguro de que quieres continuar?",
            "confirmedit": "Está modificando {0} por {1} tarjetas. ¿Estás seguro de que quieres continuar?",
            "delete": "Eliminar elementos seleccionados",
            "download": "Descargar adjuntos seleccionados",
            "downloadall": "Descarga todos los adjuntos",
            "edit": "Editar elementos seleccionados",
            "selectall": "Seleccionar todos los elementos"
        },
        "calendar": {
            "active_expired": "Activo/Caducado",
            "add": "Agregar",
            "advancenotification": "Notificación anticipada",
            "allcategories": "Todas las categorias",
            "alldates": "Todas las fechas",
            "associatedcard": "Tarjeta asociada",
            "calculated": "Calculado",
            "calendar": "Calendario",
            "cancel": "Marcar como cancelado",
            "category": "Categoria",
            "class": "Clase",
            "cm_confirmcancel": "¿Estás seguro de que quieres marcar como cancelados los horarios seleccionados?",
            "cm_confirmcomplete": "¿Estás seguro de que quieres marcar como cumplidos los horarios seleccionados?",
            "cm_markcancelled": "Marcar como cancelados los horarios seleccionados",
            "cm_markcomplete": "Marcar como completos los horarios seleccionados",
            "complete": "Completo",
            "completed": "Terminado",
            "date": "Fecha",
            "days": "Dias",
            "delaybeforedeadline": "Retraso antes de la fecha límite",
            "delaybeforedeadlinevalue": "Retraso antes del valor límite",
            "description": "Descripción",
            "editevent": "Editar calendario",
            "enddate": "Fecha de finalización",
            "endtype": "Tipo final",
            "event": "Calendario",
            "executiondate": "Fecha de ejecución",
            "frequency": "Frecuencia",
            "frequencymultiplier": "Multiplicador de frecuencia",
            "grid": "Cuadrícula",
            "leftdays": "Días para ir",
            "londdescription": "Descripción completa",
            "manual": "Manual",
            "maxactiveevents": "Max eventos activos",
            "messagebodydelete": "¿Desea eliminar la regla de calendario?",
            "messagebodyplural": "Hay {0} reglas de calendario",
            "messagebodyrecalculate": "¿Desea volver a calcular la regla del calendario con la nueva fecha?",
            "messagebodysingular": "Hay {0} regla de calendario",
            "messagetitle": "Recalcular calendario",
            "missingdays": "Días que faltan",
            "next30days": "Próximos 30 días",
            "next7days": "Próximos 7 días",
            "notificationtemplate": "Plantilla utilizada para notificación",
            "notificationtext": "Texto de notificación",
            "occurencies": "Numero de incidentes",
            "operation": "Operador",
            "partecipantgroup": "Grupo de participantes",
            "partecipantuser": "Usuario participante",
            "priority": "Prioridad",
            "recalculate": "Recalcular",
            "referent": "Referente",
            "scheduler": "Programador",
            "sequencepaneltitle": "Generar calendarios",
            "startdate": "Fecha de inicio",
            "status": "Estado",
            "today": "Hoy",
            "type": "Tipo",
            "viewevent": "Ver calendario",
            "widgetcriterion": "Criterio de cálculo",
            "widgetemails": "Emails",
            "widgetsourcecard": "Tarjeta fuente"
        },
        "classes": {
            "cards": {
                "addcard": "Agregar tarjeta",
                "clone": "Clonar",
                "clonewithrelations": "Clonar tarjeta y relaciones",
                "deletebeaware": "Tenga en cuenta que:",
                "deleteblocked": "No es posible continuar con la eliminación porque existen relaciones con {0}.",
                "deletecard": "Eliminar tarjeta",
                "deleteconfirmation": "¿Estás seguro de que quieres eliminar esta tarjeta?",
                "deleterelatedcards": "también se eliminarán {0} tarjetas relacionadas",
                "deleterelations": "Se eliminarán las relaciones con {0} tarjetas.",
                "label": "Tarjetas de datos",
                "modifycard": "Modificar tarjeta",
                "opencard": "Abrir tarjeta",
                "print": "Imprimir tarjeta"
            },
            "simple": "Simple",
            "standard": "Estándar"
        },
        "common": {
            "actions": {
                "add": "Agregar",
                "apply": "Aplicar",
                "cancel": "Cancelar",
                "close": "Cerrar",
                "delete": "Eliminar",
                "edit": "Editar",
                "execute": "Ejecutar",
                "help": "Ayuda",
                "load": "Carga",
                "open": "Abrir",
                "refresh": "Actualizar datos",
                "remove": "Eliminar",
                "save": "Guardar",
                "saveandapply": "Guardar y aplicar",
                "saveandclose": "Guardar y cerrar",
                "search": "Buscar",
                "searchtext": "Buscar..."
            },
            "attributes": {
                "nogroup": "Base de datos"
            },
            "dates": {
                "date": "d/m/Y",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Limpiar HTML",
                "expand": "Expandir editor",
                "reduce": "Reducir editor",
                "signature": "Agregar firma",
                "unlink": "Remover enlace",
                "unlinkmessage": "Convierte el enlace seleccionado en texto."
            },
            "grid": {
                "disablemultiselection": "Deshabilitar selección múltiple",
                "enamblemultiselection": "Habilitar selección múltiple",
                "export": "Exportar datos",
                "filterremoved": "El filtro actual ha sido eliminado",
                "import": "Importar datos",
                "itemnotfound": "Elemento no encontrado",
                "list": "Lista",
                "opencontextualmenu": "Abrir menú contextual",
                "print": "Imprimir",
                "printcsv": "Imprimir como CSV",
                "printodt": "Imprimir como ODT",
                "printpdf": "Imprimir como PDF",
                "row": "Elemento",
                "rows": "Elementos",
                "subtype": "Subtipo"
            },
            "tabs": {
                "activity": "Actividad",
                "attachment": "Adjunto",
                "attachments": "Adjuntos",
                "card": "Tarjeta",
                "clonerelationmode": "Clonar modo de relaciones",
                "details": "Detalles",
                "emails": "Emails",
                "history": "Historia",
                "notes": "Notas",
                "relations": "Relaciones",
                "schedules": "Calendarios"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Descargar gráfico",
                "gridhide": "Ocultar cuadrícula de datos",
                "gridshow": "Mostrar cuadrícula de datos",
                "openinpopup": "Abrir en ventana emergente",
                "parametershide": "Ocultar los parámetros",
                "parametersshow": "Mostrar parámetros de datos",
                "reload": "Recargar"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Agregar adjuntos del archivo de documentos",
            "alredyexistfile": "Ya existe un archivo con este nombre",
            "archivingdate": "Fecha de archivo",
            "attachfile": "Adjunta archivo",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Crear email",
            "composefromtemplate": "Crear email desde plantilla",
            "delay": "Retrasar",
            "delays": {
                "day1": "En 1 día",
                "days2": "En 2 días",
                "days4": "En 4 días",
                "hour1": "1 hora",
                "hours2": "2 horas",
                "hours4": "4 horas",
                "month1": "En 1 mes",
                "negativeday1": "1 día antes",
                "negativedays2": "2 días antes",
                "negativedays4": "4 días antes",
                "negativehour1": "1 hora antes",
                "negativehours2": "2 horas antes",
                "negativehours4": "4 horas antes",
                "negativemonth1": "1 mes antes",
                "negativeweek1": "1 semana antes",
                "negativeweeks2": "2 semanas antes",
                "none": "Ninguno",
                "week1": "En 1 semana",
                "weeks2": "En 2 semanas"
            },
            "dmspaneltitle": "Elegir adjuntos desde la base de datos",
            "edit": "Editar",
            "from": "De",
            "gridrefresh": "Recargar cuadrícula",
            "keepsynchronization": "Mantener sincronizado",
            "message": "Mensaje",
            "regenerateallemails": "Regenerar todos los correos",
            "regenerateemail": "Regenerar email",
            "remove": "Eliminar",
            "remove_confirmation": "¿Estás seguro de que quieres eliminar este email?",
            "reply": "Contestar",
            "replyprefix": "En {0}, {1} escribió:",
            "selectaclass": "Seleccionar clase",
            "sendemail": "Enviar correo electrónico",
            "signature": "Firma",
            "statuses": {
                "draft": "Borradores",
                "error": "Error",
                "outgoing": "Salida",
                "received": "Recibidos",
                "sent": "Enviados"
            },
            "subject": "Subjeto",
            "to": "A",
            "view": "Vista"
        },
        "errors": {
            "autherror": "Nombre de usuario o contraseña incorrectos",
            "classnotfound": "Clase {0} no encontrada",
            "fieldrequired": "Este campo es requerido",
            "invalidfilter": "Filtro inválido",
            "notfound": "Elemento no encontrado"
        },
        "filters": {
            "actions": "Comportamiento",
            "addfilter": "Agregar filtro",
            "any": "Uno cualquiera",
            "attachments": "Adjuntos",
            "attachmentssearchtext": "Texto de búsqueda de adjuntos",
            "attribute": "Elegir un atributo",
            "attributes": "Atributos",
            "clearfilter": "Limpiar filtro",
            "clone": "Clonar",
            "copyof": "Copia de",
            "currentgroup": "Grupo actual",
            "currentuser": "Usuario actual",
            "defaultset": "Establecer por defecto",
            "defaultunset": "Desarmado por defecto",
            "description": "Descripción",
            "domain": "Dominio",
            "errorname": "Ya existe un filtro con el mismo nombre",
            "filterdata": "Filtrar datos",
            "fromfilter": "Desde filtro",
            "fromselection": "Desde la selección",
            "group": "Grupo",
            "ignore": "Ignorar",
            "migrate": "Emigrar",
            "name": "Nombre",
            "newfilter": "Nuevo filtro",
            "noone": "Ninguno",
            "operator": "Operador",
            "operators": {
                "beginswith": "Inicia con",
                "between": "Entre",
                "contained": "Contenido",
                "containedorequal": "Contenido o igual",
                "contains": "Contiene",
                "containsorequal": "Contiene o igual",
                "descriptionbegin": "La descripción comienza con",
                "descriptioncontains": "La descripción contiene",
                "descriptionends": "La descripción termina con",
                "descriptionnotbegin": "La descripción no comienza con",
                "descriptionnotcontain": "La descripción no contiene",
                "descriptionnotends": "La descripción no termina con",
                "different": "Diferente",
                "doesnotbeginwith": "No inicia con",
                "doesnotcontain": "No contiene",
                "doesnotendwith": "No termina con",
                "endswith": "Termina con",
                "equals": "Iguales",
                "greaterthan": "Mayor",
                "isnotnull": "No es nulo",
                "isnull": "Es nulo",
                "lessthan": "Menor"
            },
            "relations": "Relaciones",
            "type": "Tipo",
            "typeinput": "Parámetro de input",
            "user": "Usuario",
            "value": "Valor"
        },
        "gis": {
            "card": "Tarjeta",
            "cardsMenu": "Menú de tarjetas",
            "code": "Código",
            "description": "Descripción",
            "extension": {
                "errorCall": "Error",
                "noResults": "No hay resultados"
            },
            "externalServices": "Servicios externos",
            "geographicalAttributes": "Atributos geográficos",
            "geoserverLayers": "Capas del Geoserver",
            "layers": "Capas",
            "list": "Lista",
            "longpresstitle": "Geoelementos en el área",
            "map": "Mapa",
            "mapServices": "Servicios de mapas",
            "position": "Posición",
            "root": "Raíz",
            "tree": "Vista de árbol",
            "type": "Tipo",
            "view": "Vista",
            "zoom": "Zoom"
        },
        "history": {
            "activityname": "Nombre actividad",
            "activityperformer": "Ejecutor actividades",
            "begindate": "Fecha de inicio",
            "enddate": "Fecha de finalización",
            "processstatus": "Estado",
            "user": "Usuario"
        },
        "importexport": {
            "database": {
                "uri": "Base de datos URI",
                "user": "Usuario de la base de datos"
            },
            "downloadreport": "Descargar informe",
            "emailfailure": "¡Se produjo un error al enviar un correo electrónico!",
            "emailmessage": "Se adjunta el informe de importación del archivo \"{0}\" en la fecha {1}",
            "emailsubject": "Importar informe de datos",
            "emailsuccess": "¡El correo electrónico ha sido enviado con éxito!",
            "export": "Exportar",
            "exportalldata": "Toda la información",
            "exportfiltereddata": "Solo datos que coinciden con el filtro de cuadrícula",
            "gis": {
                "shapeimportdisabled": "La importación de formas no está habilitada para esta plantilla",
                "shapeimportenabled": "Configuración de importación de formas"
            },
            "ifc": {
                "card": "Tarjeta",
                "project": "Proyecto",
                "sourcetype": "Importar de"
            },
            "import": "Importar",
            "importresponse": "Importar respuesta",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "Errores",
                "linenumber": "Número de línea",
                "message": "Mensaje",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Filas procesadas",
                "recordnumber": "Número de registro",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Enviar informe",
            "template": "Plantilla",
            "templatedefinition": "Definición de plantilla"
        },
        "joinviews": {
            "active": "Activa",
            "addview": "Agregar vista",
            "alias": "Alias",
            "attribute": "Atributo",
            "attributes": "Atributos",
            "attributesof": "Atributos de: {0}",
            "createview": "Crear vista",
            "datasorting": "Clasificación de datos",
            "delete": "Eliminar",
            "deleteview": "Eliminar vista",
            "deleteviewconfirm": "¿Estás seguro de que quieres eliminar esta vista?",
            "description": "Descripción",
            "disable": "Deshabilitar",
            "domainalias": "Alias de dominio",
            "domainsof": "Dominios de {0}",
            "edit": "Editar",
            "editview": "Editar configuración de vista",
            "enable": "Habilitar",
            "fieldsets": "Fieldsets",
            "filters": "Filtros",
            "generalproperties": "Propiedades generales",
            "group": "Grupo",
            "innerjoin": "Inner join",
            "jointype": "Tipo de join",
            "joinview": "Vista de join",
            "klass": "Clase",
            "manageview": "Administrar vista",
            "masterclass": "Clase principal",
            "masterclassalias": "Alias ​​de la clase principal",
            "name": "Nombre",
            "newjoinview": "Nueva vista de join",
            "outerjoin": "Outer join",
            "pleaseseleceavalidmasterclass": "Seleccione una clase principal válida",
            "refreshafteredit": "¿Quieres actualizar la página para ver los cambios?",
            "selectatleastoneattribute": "Seleccione al menos un atributo para mostrar en la cuadrícula y en la cuadrícula reducida en el paso 4.",
            "showingrid": "Mostrar en cuadrícula",
            "showinreducedgrid": "Mostrar en cuadrícula reducida",
            "targetalias": "Alias ​​de clase de destino"
        },
        "login": {
            "buttons": {
                "login": "Iniciar sesión",
                "logout": "Cambiar usuario"
            },
            "fields": {
                "group": "Grupo",
                "language": "Idioma",
                "password": "Contraseña",
                "tenants": "'Tenants'",
                "username": "Nombre de usuario"
            },
            "loggedin": "Registrado",
            "sso": {
                "loginfailure": "Error de autenticación",
                "loginwith": "Iniciar sesión con {0}",
                "or": "o"
            },
            "title": "Iniciar sesión",
            "welcome": "Bienvenido de nuevo {0}."
        },
        "main": {
            "administrationmodule": "Módulo de Administración",
            "baseconfiguration": "Base de configuracion",
            "cardlock": {
                "lockedmessage": "No puedes editar esta tarjeta porque {0} lo está editando.",
                "someone": "Alguien"
            },
            "changegroup": "Cambiar grupo",
            "changetenant": "Cambiar {0}",
            "confirmchangegroup": "¿Estás seguro de que quieres cambiar el grupo?",
            "confirmchangetenants": "¿Estás seguro de que quieres cambiar 'tenant' activo?",
            "confirmdisabletenant": "¿Estás seguro de que quieres deshabilitar la marca \"Ignorar 'tenants'\"?",
            "confirmenabletenant": "¿Estás seguro de que quieres habilitar la marca \"Ignorar 'tenants'\"?",
            "ignoretenants": "Ignorar {0}",
            "info": "Información",
            "logo": {
                "cmdbuild": "CMDBuild logo",
                "cmdbuildready2use": "CMDBuild READY2USE logo",
                "companylogo": "Logo de la compañía",
                "openmaint": "openMAINT logo"
            },
            "logout": "Cerrar sesión",
            "managementmodule": "Módulo gestión de datos",
            "multigroup": "Multi grupo",
            "multitenant": "Multi {0}",
            "navigation": "Navegación",
            "pagenotfound": "Página no encontrada",
            "password": {
                "change": "Cambiar clave",
                "confirm": "Confirmar clave",
                "email": "Dirección de correo electrónico",
                "err_confirm": "La contraseña no coincide.",
                "err_diffprevious": "La contraseña no puede ser idéntica a la anterior.",
                "err_diffusername": "La contraseña no puede ser idéntica al nombre de usuario.",
                "err_length": "La contraseña debe tener al menos {0} caracteres de longitud.",
                "err_reqdigit": "La contraseña debe contener al menos un dígito.",
                "err_reqlowercase": "La contraseña debe contener al menos un carácter en minúscula.",
                "err_requppercase": "La contraseña debe contener al menos un carácter en mayúscula.",
                "expired": "Tu contraseña ha expirado. Debes cambiarlo ahora.",
                "forgotten": "Olvidé mi contraseña",
                "new": "Nueva contraseña",
                "old": "Contraseña anterior",
                "recoverysuccess": "Le hemos enviado un correo electrónico con instrucciones para recuperar su contraseña.",
                "reset": "Restablecer la contraseña",
                "saved": "Contraseña guardada correctamente!"
            },
            "pleasecorrecterrors": "Por favor, corrija los errores indicados!",
            "preferences": {
                "comma": "Coma",
                "decimalserror": "Campo decimales debe estar presente",
                "decimalstousandserror": "Decimales y miles deben ser diferentes",
                "default": "Por defecto",
                "defaultvalue": "Valor por defecto",
                "firstdayofweek": "Primer dia de la semana",
                "gridpreferencesclear": "Limpiar las preferencias de la cuadrícula",
                "gridpreferencescleared": "¡Preferencias de cuadrícula borradas!",
                "gridpreferencessave": "Guardar preferencias de cuadrícula",
                "gridpreferencessaved": "¡Preferencias de cuadrícula guardadas!",
                "gridpreferencesupdate": "Actualizar preferencias de cuadrícula",
                "labelcsvseparator": "Separador CSV",
                "labeldateformat": "Formato de fecha",
                "labeldecimalsseparator": "Separador de decimales",
                "labellanguage": "Idioma",
                "labelthousandsseparator": "Separador de miles",
                "labeltimeformat": "Formato de tiempo",
                "msoffice": "Microsoft Office",
                "period": "Período",
                "preferredfilecharset": "Codificación CSV",
                "preferredofficesuite": "Office suite preferida",
                "space": "Espacio",
                "thousandserror": "Campo miles debe estar presente",
                "timezone": "Zona horaria",
                "twelvehourformat": "Formato de 12 horas",
                "twentyfourhourformat": "Formato de 24 horas"
            },
            "searchinallitems": "Buscar en todos los artículos",
            "selectdeselettenants": "Seleccionar/Deseleccionar todo",
            "treenavcontenttitle": "{0} de {1}",
            "userpreferences": "Preferencias"
        },
        "menu": {
            "allitems": "Todos los artículos",
            "classes": "Clases",
            "custompages": "Páginas personalizadas",
            "dashboards": "Tableros",
            "processes": "Procesos",
            "reports": "Informes",
            "views": "Vistas"
        },
        "notes": {
            "edit": "Modifica nota"
        },
        "notifier": {
            "attention": "Atención",
            "error": "Error",
            "genericerror": "Error generico",
            "genericinfo": "Información genérica",
            "genericwarning": "Advertencia genérica",
            "info": "Información",
            "success": "Éxito",
            "warning": "Atención"
        },
        "patches": {
            "apply": "Aplicar parches",
            "category": "Categoria",
            "description": "Descripción",
            "name": "Nombre",
            "patches": "Parches"
        },
        "processes": {
            "abortconfirmation": "¿Estás seguro de que quieres interrumpir este proceso?",
            "abortprocess": "Interrumpir proceso",
            "action": {
                "advance": "Continúa",
                "label": "Acción"
            },
            "activeprocesses": "Procesos activos",
            "allstatuses": "Todos",
            "editactivity": "Modificar actividad",
            "openactivity": "Actividad abierta",
            "startworkflow": "Inicio",
            "workflow": "Flujo de trabajo"
        },
        "relationGraph": {
            "activity": "Actividad",
            "allLabelsOnGraph": "todas las etiquetas en el gráfico",
            "card": "Tarjeta",
            "cardList": "Lista de tarjetas",
            "cardRelations": "Relaciones de tarjeta",
            "choosenaviagationtree": "Elegir el árbol de navegación",
            "class": "Clase",
            "classList": "Lista de clase",
            "compoundnode": "Nodo Compuesto",
            "disable": "Deshabilitar",
            "edges": "Arcos",
            "enable": "Habilitar",
            "labelsOnGraph": "Descripción en el gráfico",
            "level": "Nivel",
            "nodes": "Nodos",
            "openRelationGraph": "Abrir gráfico de las relaciones",
            "qt": "Cantidad",
            "refresh": "Actualizar",
            "relation": "Relación",
            "relationGraph": "Gráfico de las relaciones",
            "reopengraph": "Reabrir el grafico desde este nodo"
        },
        "relations": {
            "adddetail": "Agregar detalle",
            "addrelations": "Agregar relaciones",
            "attributes": "Atributos",
            "begindate": "Fecha de inicio",
            "code": "Código",
            "deletedetail": "Eliminar detalle",
            "deleterelation": "Eliminar relación",
            "deleterelationconfirm": "¿Estás seguro de que quieres eliminar esta relación?",
            "description": "Descripción",
            "editcard": "Editar tarjeta",
            "editdetail": "Editar detalle",
            "editrelation": "Editar relación",
            "extendeddata": "Datos extendidos",
            "mditems": "Elementos",
            "missingattributes": "Faltan atributos obligatorios",
            "opencard": "Abrir tarjeta relacionada",
            "opendetail": "Mostrar detalle",
            "type": "Tipo"
        },
        "reports": {
            "csv": "CSV",
            "download": "Descargar",
            "format": "Formato",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Imprimir",
            "reload": "Recargar",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Por defecto"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Diario"
                        },
                        "monthly": {
                            "description": "Mensual"
                        },
                        "once": {
                            "description": "Una vez"
                        },
                        "weekly": {
                            "description": "Semanal"
                        },
                        "yearly": {
                            "description": "Anual"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "Por defecto"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Agregar tematismo",
            "analysisType": "Tipo de analisis",
            "attribute": "Atributo",
            "calculateRules": "Generar reglas de estilo",
            "clearThematism": "Limpiar tematismo",
            "color": "Color",
            "defineLegend": "Definición de leyenda",
            "defineThematism": "Definición de tematismo",
            "function": "Función",
            "generate": "Generar",
            "geoAttribute": "Atributo geográfico",
            "graduated": "Graduado",
            "highlightSelected": "Resaltar el elemento seleccionado",
            "intervals": "Intervalos",
            "legend": "Leyenda",
            "name": "Nombre",
            "newThematism": "Nuevo tematismo",
            "punctual": "Puntual",
            "quantity": "Cantidad",
            "segments": "Segmentos",
            "source": "Fuente",
            "table": "Mesa",
            "thematism": "Tematismos",
            "value": "Valor"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Salir sin guardar",
                    "stayinedit": "Volver a editar"
                },
                "savebeforeexit": "Hay cambios sin guardar en los archivos adjuntos. ¿Quieres guardarlos antes de irte?",
                "saveprocessmessage": "Los archivos adjuntos solo se pueden guardar en tarjetas existentes. Al presionar en guardar, la instancia de proceso se creará con los datos presentes en el formulario."
            },
            "customform": {
                "addrow": "Agregar fila",
                "clonerow": "Clonar fila",
                "datanotvalid": "Datos no validos",
                "deleterow": "Eliminar fila",
                "editrow": "Editar fila",
                "export": "Exportar",
                "import": "Importar",
                "importexport": {
                    "expattributes": "Datos para exportar",
                    "file": "Archivo",
                    "filename": "Nombre archivo",
                    "format": "Formato",
                    "importmode": "Modo de importación",
                    "keyattributes": "Atributos claves",
                    "missingkeyattr": "Elija al menos un atributo clave",
                    "modeadd": "Agregar",
                    "modemerge": "Fusionar",
                    "modereplace": "Reemplazar",
                    "separator": "Separador"
                },
                "refresh": "Actualizar a los valores predeterminados"
            },
            "linkcards": {
                "checkedonly": "Solo marcado",
                "editcard": "Editar tarjeta",
                "opencard": "Abrir tarjeta",
                "refreshselection": "Aplicar selección por defecto",
                "togglefilterdisabled": "Deshabilitar filtro de cuadrícula",
                "togglefilterenabled": "Habilitar filtro de cuadrícula"
            },
            "required": "Este widget es obligatorio."
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
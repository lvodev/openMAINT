(function() {
    Ext.define('CMDBuildUI.locales.pt_PT.Locales', {
        "requires": ["CMDBuildUI.locales.pt_PT.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "pt_PT",
        "administration": CMDBuildUI.locales.pt_PT.LocalesAdministration.administration,
        "attachments": {
            "add": "Adicionar anexo",
            "attachmenthistory": "Histórico de anexos",
            "author": "Autor",
            "browse": "Navegar no &hellip;",
            "category": "Categoria",
            "code": "Código",
            "creationdate": "Data de criação",
            "deleteattachment": "Apagar Anexo",
            "deleteattachment_confirmation": "Tem a certeza que deseja apagar este anexo?",
            "description": "Descrição",
            "download": "Descarregar",
            "dropfiles": "Solte os arquivos aqui",
            "editattachment": "Editar anexos",
            "file": "Ficheiro",
            "filealreadyinlist": "O arquivo {0} já está na lista.",
            "filename": "Nome do ficheiro",
            "fileview": "Ver anexo",
            "invalidfiles": "Remover arquivos inválidos",
            "majorversion": "Versão principal",
            "maxsize": "O tamanho máximo de ficheiro permitido é {0} MB.",
            "metadata": "Metadados",
            "modificationdate": "Data de modificação",
            "new": "Novo anexo",
            "nocategory": "Sem categoria",
            "preview": "Antevisão",
            "removefile": "Remover arquivo",
            "statuses": {
                "empty": "Arquivo vazio",
                "error": "Erro",
                "extensionNotAllowed": "Extensão de arquivo não permitida",
                "loaded": "Carregado",
                "ready": "Pronto",
                "toolarge": "Demasiado grande"
            },
            "successupload": "{0} anexos enviados.",
            "uploadfile": "Transferir ficheiro",
            "version": "Versão",
            "viewhistory": "Visualizar histórico de anexos",
            "warningmessages": {
                "atleast": "Aviso: foram carregados {0} anexos do tipo \"{1}\". Esta categoria espera pelo menos {2} anexos",
                "exactlynumber": "Aviso: foram carregados {0} anexos do tipo \"{1}\". Esta categoria espera {2} anexos",
                "maxnumber": "Aviso: foi carregado {0} anexo do tipo \"{1}\". Esta categoria espera no máximo {2} anexos"
            },
            "wrongfileextension": "A extensão de arquivo {0} não é permitida"
        },
        "bim": {
            "bimViewer": "Visualizador BIM",
            "card": {
                "label": "Cartão"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "Tamanho da caixa de encadernação ao longo do eixo x",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Tamanho da caixa de encadernação ao longo do eixo y",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Tamanho da caixa de encadernação ao longo do eixo Z",
                "LARGEST_FACE_AREA": "Maior superfície facial",
                "LARGEST_FACE_DIRECTION": "Maior direcção facial",
                "SURFACE_AREA_ALONG_X": "Superfície ao longo do eixo X",
                "SURFACE_AREA_ALONG_Y": "Superfície ao longo do eixo Y",
                "SURFACE_AREA_ALONG_Z": "Superfície ao longo do eixo Z",
                "TOTAL_SHAPE_VOLUME": "Volume total da forma",
                "TOTAL_SURFACE_AREA": "Superfície total",
                "WALKABLE_SURFACE_AREA": "Área de superfície caminhável",
                "calculated": "Calculado",
                "description": "Descrição",
                "guid": "GUID",
                "label": "Propriedades",
                "name": "Nome",
                "uuid": "UUID"
            },
            "layers": {
                "label": "Camadas",
                "menu": {
                    "hideAll": "Esconder tudo",
                    "showAll": "Mostrar tudo"
                },
                "name": "Nome",
                "qt": "Qt",
                "visibility": "Visibilidade"
            },
            "menu": {
                "camera": "Câmara",
                "frontView": "Vista Frontal",
                "mod": "Controlos de visualização",
                "orthographic": "Camara Ortográfica",
                "pan": "Deslocar",
                "perspective": "Camara perspectiva",
                "resetView": "Restabelecer vista",
                "rotate": "Rodar",
                "sideView": "Vista lateral",
                "topView": "Vista de Topo"
            },
            "showBimCard": "Abrir visualizador 3D",
            "tree": {
                "arrowTooltip": "Selecionar elemento",
                "columnLabel": "Árvore",
                "label": "Árvore",
                "open_card": "Abrir cartão relacionado",
                "root": "Raiz ifc"
            }
        },
        "bulkactions": {
            "abort": "Abortar itens selecionados",
            "alertdownloadattachments": "Alguns anexos não serão descarregados por ainda não terem sido guardados no servidor",
            "alertnoattachmentsdownload": "Nenhum anexo não será descarregado porque ainda não foi guardado no servidor",
            "cancelselection": "Cancelar seleção",
            "confirmabort": "Você está abortando {0} instâncias de processo. Tem certeza de que deseja continuar?",
            "confirmdelete": "Você está excluindo {0} cartões. Tem certeza de que deseja continuar?",
            "confirmdeleteattachements": "Você está excluindo {0} anexos. Tem certeza de que deseja continuar?",
            "confirmedit": "Está modificado de {0} para {1} cartões. Tem certeza de que deseja continuar?",
            "delete": "Excluir itens selecionados",
            "download": "Baixar anexos selecionados",
            "downloadall": "Download de todos os anexos",
            "edit": "Editar itens selecionados",
            "selectall": "Selecionar todos os itens"
        },
        "calendar": {
            "active_expired": "Ativo / Expirado",
            "add": "Adicionar programação",
            "advancenotification": "Notificação antecipada dos dias",
            "allcategories": "Todas as categorias",
            "alldates": "Todas as datas",
            "associatedcard": "Cartão associado",
            "calculated": "Calculado",
            "calendar": "Calendário",
            "cancel": "Marcar como cancelado",
            "category": "Categoria",
            "class": "Classe",
            "cm_confirmcancel": "Tem certeza que deseja marcar como programações selecionadas canceladas?",
            "cm_confirmcomplete": "Tem certeza de que deseja marcar as programações selecionadas como concluídas?",
            "cm_markcancelled": "Marcar como programações selecionadas e canceladas",
            "cm_markcomplete": "Marcar como programações selecionadas e concluídas",
            "complete": "Marcar como concluído",
            "completed": "Concluído",
            "date": "Data",
            "days": "Dias",
            "delaybeforedeadline": "Atraso antes do prazo",
            "delaybeforedeadlinevalue": "Atraso antes do valor do prazo",
            "description": "Descrição",
            "editevent": "Editar programação",
            "enddate": "Data final",
            "endtype": "Tipo final",
            "event": "Cronograma",
            "executiondate": "Data de execução",
            "frequency": "Frequência",
            "frequencymultiplier": "Multiplicador de frequência",
            "grid": "Rede",
            "leftdays": "Dias que faltam",
            "londdescription": "Descrição completa",
            "manual": "Manual",
            "maxactiveevents": "Máx Programações ativas",
            "messagebodydelete": "Você gostaria de remover a regra planejada?",
            "messagebodyplural": "Existem {0} regras de programação",
            "messagebodyrecalculate": "Você gostaria de recalcular a regra de horários com a nova data?",
            "messagebodysingular": "Existe {0} regra de programação",
            "messagetitle": "Cronograma recalculado",
            "missingdays": "Dias faltados",
            "next30days": "Próximos 30 dias",
            "next7days": "Próximos 7 dias",
            "notificationtemplate": "Modelo usado para notificação",
            "notificationtext": "Texto de Notificação",
            "occurencies": "Número de ocorrências",
            "operation": "Operação",
            "partecipantgroup": "Grupo participante",
            "partecipantuser": "Usuário participante",
            "priority": "Priority",
            "recalculate": "Recalcular",
            "referent": "Referente",
            "scheduler": "Agendador",
            "sequencepaneltitle": "Gerar horários",
            "startdate": "Data de início",
            "status": "Status",
            "today": "Hoje",
            "type": "Tipo",
            "viewevent": "Ver programação",
            "widgetcriterion": "Critério de cálculo",
            "widgetemails": "Emails",
            "widgetsourcecard": "Cartão de origem"
        },
        "classes": {
            "cards": {
                "addcard": "Adicionar cartão",
                "clone": "Clonar",
                "clonewithrelations": "Clonar cartão e relações",
                "deletebeaware": "Esteja ciente que:",
                "deleteblocked": "Não é possível prosseguir com a exclusão porque há relações com {0}.",
                "deletecard": "Apagar cartão",
                "deleteconfirmation": "Tem a certeza que deseja apagar este cartão?",
                "deleterelatedcards": "{0} cartões relacionados serão excluídos",
                "deleterelations": "relações com {0} cartões serão excluídas",
                "label": "Cartões",
                "modifycard": "Editar cartão",
                "opencard": "Abrir cartão",
                "print": "Imprimir cartão"
            },
            "simple": "Simples",
            "standard": "Standard"
        },
        "common": {
            "actions": {
                "add": "Adicionar",
                "apply": "Aplicar",
                "cancel": "Cancelar",
                "close": "Fechar",
                "delete": "Apagar",
                "edit": "Editar",
                "execute": "Executar",
                "help": "Ajuda",
                "load": "Carregar",
                "open": "Abrir",
                "refresh": "Atualizar dados",
                "remove": "Apagar",
                "save": "Gravar",
                "saveandapply": "Guardar e aplicar",
                "saveandclose": "Guardar e fechar",
                "search": "Pesquisar",
                "searchtext": "Pesquisar…."
            },
            "attributes": {
                "nogroup": "Dados base"
            },
            "dates": {
                "date": "dd/mm/yyyy",
                "datetime": "d/m/Y H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "Limpar HTML",
                "expand": "Editor de expansão",
                "reduce": "Reduzir editor",
                "signature": "Acrescentar assinatura",
                "unlink": "Desbloqueio",
                "unlinkmessage": "Transformar o hyperlink selecionado em texto"
            },
            "grid": {
                "disablemultiselection": "Desativar seleção múltipla",
                "enamblemultiselection": "Ativar seleção múltipla",
                "export": "Exportar dados",
                "filterremoved": "O filtro atual foi removido",
                "import": "Importar dados",
                "itemnotfound": "Item não localizado",
                "list": "Lista",
                "opencontextualmenu": "Abrir menu de contexto",
                "print": "Imprimir",
                "printcsv": "Imprimir como CSV",
                "printodt": "Imprimir como ODT",
                "printpdf": "Imprimir como PDF",
                "row": "Item",
                "rows": "Itens",
                "subtype": "Sub Tipo"
            },
            "tabs": {
                "activity": "Atividade",
                "attachment": "Anexo",
                "attachments": "Anexos",
                "card": "Cartão",
                "clonerelationmode": "Modo de relações clone",
                "details": "Detalhes",
                "emails": "Emails",
                "history": "Histórico",
                "notes": "Notas",
                "relations": "Relações",
                "schedules": "Horários"
            }
        },
        "dashboards": {
            "tools": {
                "download": "Descarregar gráfico",
                "gridhide": "Ocultar rede de dados",
                "gridshow": "Mostrar rede de dados",
                "openinpopup": "Aberto em popup",
                "parametershide": "Ocultar parâmetros de dados",
                "parametersshow": "Mostrar parâmetros de dados",
                "reload": "Recarregar"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "Adicionar anexos no arquivo do documento",
            "alredyexistfile": "Já existe um ficheiro com este nome",
            "archivingdate": "Data de arquivo",
            "attachfile": "Anexar ficheiro",
            "bcc": "Bcc",
            "cc": "Cc",
            "composeemail": "Compor e-mail",
            "composefromtemplate": "Compor a partir de modelo",
            "delay": "Atraso",
            "delays": {
                "day1": "Em 1 dia",
                "days2": "Em 2 dias",
                "days4": "Em 4 dias",
                "hour1": "1 hora",
                "hours2": "2 horas",
                "hours4": "4 horas",
                "month1": "Em 1 mês",
                "negativeday1": "1 dia antes",
                "negativedays2": "2 dias antes",
                "negativedays4": "4 dias antes",
                "negativehour1": "1 hora antes",
                "negativehours2": "2 horas antes",
                "negativehours4": "4 horas antes",
                "negativemonth1": "1 mês antes",
                "negativeweek1": "1 semana antes",
                "negativeweeks2": "2 semanas antes",
                "none": "Nenhum",
                "week1": "Em 1 semana",
                "weeks2": "Em 2 semanas"
            },
            "dmspaneltitle": "Selecionar anexos via base de dados",
            "edit": "Editar",
            "from": "De",
            "gridrefresh": "Atualizar grelha",
            "keepsynchronization": "Manter sincronizado",
            "message": "Mensagem",
            "regenerateallemails": "Recriar todos os e-mails",
            "regenerateemail": "Recriar e-mail",
            "remove": "Apagar",
            "remove_confirmation": "Tem a certeza que deseja apagar este email?",
            "reply": "Responder",
            "replyprefix": "{1} wrote:",
            "selectaclass": "Selecionar uma classe",
            "sendemail": "Enviar email",
            "signature": "Assinatura",
            "statuses": {
                "draft": "Rascunho",
                "error": "Erro",
                "outgoing": "A Enviar",
                "received": "Recebido",
                "sent": "Enviado"
            },
            "subject": "Assunto",
            "to": "Para",
            "view": "Vista"
        },
        "errors": {
            "autherror": "Utilizador ou password incorretos",
            "classnotfound": "Classe {0} não localizada",
            "fieldrequired": "Este campo é obrigatório",
            "invalidfilter": "Filtro inválido",
            "notfound": "Item não localizado"
        },
        "filters": {
            "actions": "Ações",
            "addfilter": "Adicionar filtro",
            "any": "Qualquer",
            "attachments": "Anexos",
            "attachmentssearchtext": "Texto de pesquisa de anexos",
            "attribute": "Escolher um atributo",
            "attributes": "Atributos",
            "clearfilter": "Limpar filtro",
            "clone": "Clonar",
            "copyof": "Cópia de",
            "currentgroup": "Grupo atual",
            "currentuser": "Usuário atual",
            "defaultset": "Definir como padrão",
            "defaultunset": "Desativado do padrão",
            "description": "Descrição",
            "domain": "Domínio",
            "errorname": "Nome do filtro já em uso",
            "filterdata": "Filtrar data",
            "fromfilter": "Do filtro",
            "fromselection": "A partir da seleção",
            "group": "Grupo",
            "ignore": "Ignorar",
            "migrate": "Migrar",
            "name": "Nome",
            "newfilter": "Novo filtro",
            "noone": "Ninguém",
            "operator": "Operador",
            "operators": {
                "beginswith": "Inicia com",
                "between": "Entre",
                "contained": "Contido",
                "containedorequal": "Contido ou igual",
                "contains": "Contêm",
                "containsorequal": "Contêm ou igual",
                "descriptionbegin": "Descrição começa com",
                "descriptioncontains": "Descrição contém",
                "descriptionends": "A descrição termina com",
                "descriptionnotbegin": "A descrição não começa com",
                "descriptionnotcontain": "Descrição não contém",
                "descriptionnotends": "A descrição não termina com",
                "different": "Diferente",
                "doesnotbeginwith": "Não inicia com",
                "doesnotcontain": "Não contém",
                "doesnotendwith": "Não finaliza com",
                "endswith": "Finaliza com",
                "equals": "É igual a",
                "greaterthan": "Maior que",
                "isnotnull": "Não é nulo",
                "isnull": "É nulo",
                "lessthan": "Menor do que"
            },
            "relations": "Relações",
            "type": "Tipo",
            "typeinput": "Parâmetro de entrada",
            "user": "Utilizador",
            "value": "Valor"
        },
        "gis": {
            "card": "Cartão",
            "cardsMenu": "Menu de cartas",
            "code": "Código",
            "description": "Descrição",
            "extension": {
                "errorCall": "Erro",
                "noResults": "Sem resultados"
            },
            "externalServices": "Serviços externos",
            "geographicalAttributes": "Atributos Geo",
            "geoserverLayers": "Camadas Geoserver",
            "layers": "Camadas",
            "list": "Lista",
            "longpresstitle": "Geoelementos na área",
            "map": "Mapa",
            "mapServices": "Serviços de mapa",
            "position": "Posição",
            "root": "Raiz",
            "tree": "Árvore",
            "type": "Tipo",
            "view": "Vista",
            "zoom": "Ampliação"
        },
        "history": {
            "activityname": "Nome da atividade",
            "activityperformer": "Executante da atividade",
            "begindate": "Data de início",
            "enddate": "Data de fim",
            "processstatus": "Estado",
            "user": "Utilizador"
        },
        "importexport": {
            "database": {
                "uri": "URI do banco de dados",
                "user": "Usuário do banco de dados"
            },
            "downloadreport": "Descarregar relatório",
            "emailfailure": "Ocorreu um erro ao enviar o email",
            "emailmessage": "Relatório de importação anexado do arquivo \"{0}\" na data {1}",
            "emailsubject": "Importar relatório de dados",
            "emailsuccess": "O email foi enviado com sucesso",
            "export": "Exportar",
            "exportalldata": "Todos os dados",
            "exportfiltereddata": "Apenas dados que correspondem ao filtro da rede",
            "gis": {
                "shapeimportdisabled": "A importação de formas não está habilitada para este modelo",
                "shapeimportenabled": "Configuração de importação de formas"
            },
            "ifc": {
                "card": "Cartão",
                "project": "Projeto",
                "sourcetype": "Importado de"
            },
            "import": "Importar",
            "importresponse": "Importar resposta",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "erros",
                "linenumber": "Numero da linha",
                "message": "Mensagem",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "Linhas processadas",
                "recordnumber": "Número do Registo",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "Enviar relatório",
            "template": "Modelo",
            "templatedefinition": "Definição de modelo"
        },
        "joinviews": {
            "active": "Activo",
            "addview": "Adicionar vista",
            "alias": "Nome comum",
            "attribute": "Atributo",
            "attributes": "Atributos",
            "attributesof": "Atributos de: {0}",
            "createview": "Criar vista",
            "datasorting": "Classificações de dados",
            "delete": "Eliminar",
            "deleteview": "Apagar vista",
            "deleteviewconfirm": "Tem a certeza de que quer apagar esta vista?",
            "description": "Descrição",
            "disable": "Desativar",
            "domainalias": "Nome comum do domínio",
            "domainsof": "Domínios de {0}",
            "edit": "Editar",
            "editview": "Editar configuração da vista",
            "enable": "Habilitar",
            "fieldsets": "Conjuntos de campos",
            "filters": "Filtros",
            "generalproperties": "Propriedades gerais",
            "group": "Grupo",
            "innerjoin": "Junção interna",
            "jointype": "Tipo de adesão",
            "joinview": "Vista da adesão",
            "klass": "Classe",
            "manageview": "Gerir vista",
            "masterclass": "Classe mestre",
            "masterclassalias": "Nome comum da classe mestre",
            "name": "Nome",
            "newjoinview": "Nova visão da adesão",
            "outerjoin": "Adesão externa",
            "pleaseseleceavalidmasterclass": "Por favor selecione uma master class válida",
            "refreshafteredit": "Quer refrescar a página para ver as alterações?",
            "selectatleastoneattribute": "Por favor selecione pelo menos um atributo para exibir em grelha e em grelha reduzida no passo 4.",
            "showingrid": "Mostrar em grelha",
            "showinreducedgrid": "Mostrar em grelha reduzida",
            "targetalias": "Nome comum do target"
        },
        "login": {
            "buttons": {
                "login": "Autenticar",
                "logout": "Alterar utilizador"
            },
            "fields": {
                "group": "Grupo",
                "language": "Idioma",
                "password": "Password",
                "tenants": "Tenants",
                "username": "Nome de utilizador"
            },
            "loggedin": "Autenticado",
            "sso": {
                "loginfailure": "Falha de login",
                "loginwith": "Login com {0}",
                "or": "ou"
            },
            "title": "Autenticar",
            "welcome": "Bem vindo de volta"
        },
        "main": {
            "administrationmodule": "Módulo de Administração",
            "baseconfiguration": "Configuração base",
            "cardlock": {
                "lockedmessage": "Não é possível editar este cartão pois está a ser editado por {0}",
                "someone": "Alguém"
            },
            "changegroup": "Alterar grupo",
            "changetenant": "Alterar {0}",
            "confirmchangegroup": "Tem a certeza que deseja alterar o grupo?",
            "confirmchangetenants": "Tem a certeza que deseja alterar os tenants ativos?",
            "confirmdisabletenant": "Tem a certeza que deseja desabilitar a flag \"ignorar tenants\"?",
            "confirmenabletenant": "Tem a certeza que deseja habilitar a flag \"ignorar tenants\"?",
            "ignoretenants": "Ignorar {0}",
            "info": "Informação",
            "logo": {
                "cmdbuild": "Logótipo CMDBBuild",
                "cmdbuildready2use": "Logótipo CMDBBuild READY2USE",
                "companylogo": "Logótipo da empresa",
                "openmaint": "logótipo openMAINT"
            },
            "logout": "Sair",
            "managementmodule": "Módulo de Gestão de Dados",
            "multigroup": "Multi grupo",
            "multitenant": "Multi {0}",
            "navigation": "Navegação",
            "pagenotfound": "Página não encontrada",
            "password": {
                "change": "Alterar password",
                "confirm": "Confirmar password",
                "email": "Endereço de e-mail",
                "err_confirm": "Senha não correspondida.",
                "err_diffprevious": "A senha não pode ser idêntica à anterior.",
                "err_diffusername": "A senha não pode ser idêntica ao nome de usuário.",
                "err_length": "A senha deve ter pelo menos {0} caracteres.",
                "err_reqdigit": "A senha deve conter pelo menos um dígito.",
                "err_reqlowercase": "A senha deve conter pelo menos um caractere minúsculo.",
                "err_requppercase": "A senha deve conter pelo menos um caractere maiúsculo.",
                "expired": "Sua senha expirou. Você deve mudar agora.",
                "forgotten": "Esqueci a minha senha",
                "new": "Nova password",
                "old": "Password Antiga",
                "recoverysuccess": "Enviamos a você um e-mail com instruções para recuperar sua senha.",
                "reset": "Redefinir senha",
                "saved": "Senha salva corretamente!"
            },
            "pleasecorrecterrors": "Por favor corrigir erros indicados",
            "preferences": {
                "comma": "Vírgula",
                "decimalserror": "O campo de decimais tem de estar presente",
                "decimalstousandserror": "Os separadores de decimais e milhares tem de ser diferentes",
                "default": "Por Defeito",
                "defaultvalue": "Valor Padrão",
                "firstdayofweek": "Primeiro dia da semana",
                "gridpreferencesclear": "Limpar preferências de rede",
                "gridpreferencescleared": "Preferências de rede apagadas!",
                "gridpreferencessave": "Salvar preferências de rede",
                "gridpreferencessaved": "Preferências de rede salvas!",
                "gridpreferencesupdate": "Atualizar preferências de rede",
                "labelcsvseparator": "Separador CSV",
                "labeldateformat": "Formato da data",
                "labeldecimalsseparator": "Separador de decimais",
                "labellanguage": "Idioma",
                "labelthousandsseparator": "Separador de milhares",
                "labeltimeformat": "formato de tempo",
                "msoffice": "Microsoft Office",
                "period": "Período",
                "preferredfilecharset": "Codificação CSV",
                "preferredofficesuite": "Suite Office preferida",
                "space": "Espaço",
                "thousandserror": "O campo de milhares tem de estar presente",
                "timezone": "Fuso horário",
                "twelvehourformat": "Formato 12 horas",
                "twentyfourhourformat": "Formato 24 horas"
            },
            "searchinallitems": "Pesquisar em todos os itens",
            "selectdeselettenants": "Selecionar/Desmarcar tudo",
            "treenavcontenttitle": "{0} de {1}",
            "userpreferences": "Preferências"
        },
        "menu": {
            "allitems": "Todos os itens",
            "classes": "Classes",
            "custompages": "Páginas personalizadas",
            "dashboards": "Dashboards",
            "processes": "Processos",
            "reports": "Relatórios",
            "views": "Visualizações"
        },
        "notes": {
            "edit": "Editar nota"
        },
        "notifier": {
            "attention": "Atenção",
            "error": "Erro",
            "genericerror": "Erro Genérico",
            "genericinfo": "Informação Genérica",
            "genericwarning": "Aviso Genérico",
            "info": "Informação",
            "success": "Sucesso",
            "warning": "Aviso"
        },
        "patches": {
            "apply": "Aplicar Patches",
            "category": "Categoria",
            "description": "Descrição",
            "name": "Nome",
            "patches": "Patches"
        },
        "processes": {
            "abortconfirmation": "Tem a certeza que deseja abortar este processo?",
            "abortprocess": "Abortar processo",
            "action": {
                "advance": "Avançar",
                "label": "Ação"
            },
            "activeprocesses": "Processos ativos",
            "allstatuses": "Todos",
            "editactivity": "Editar atividade",
            "openactivity": "Abrir atividade",
            "startworkflow": "Iniciar",
            "workflow": "Fluxo de trabalho"
        },
        "relationGraph": {
            "activity": "Atividade",
            "allLabelsOnGraph": "Todos os rótulos no gráfico",
            "card": "Cartão",
            "cardList": "Lista de cartões",
            "cardRelations": "Relação entre Cartões",
            "choosenaviagationtree": "Alterar árvore de navegação",
            "class": "Classe",
            "classList": "Lista de Classes",
            "compoundnode": "Nó composto",
            "disable": "Desabilitar",
            "edges": "Edges",
            "enable": "Habilitar",
            "labelsOnGraph": "Dica no gráfico",
            "level": "Nível",
            "nodes": "Nodes",
            "openRelationGraph": "Abrir gráfico de relacionamentos",
            "qt": "Qt",
            "refresh": "Atualizar",
            "relation": "Relação",
            "relationGraph": "Gráfico de relacionamento",
            "reopengraph": "Reabrir o gráfico deste nó"
        },
        "relations": {
            "adddetail": "Adicionar detalhe",
            "addrelations": "Adicionar relacionamentos",
            "attributes": "Atributos",
            "begindate": "Data de início",
            "code": "Código",
            "deletedetail": "Apagar detalhe",
            "deleterelation": "Apagar relacionamento",
            "deleterelationconfirm": "Tem certeza que deseja excluir esta relação?",
            "description": "Descrição",
            "editcard": "Editar cartão",
            "editdetail": "Editar Detalhe",
            "editrelation": "Editar relacionamento",
            "extendeddata": "Dados estendidos",
            "mditems": "Itens",
            "missingattributes": "Atributos obrigatórios ausentes",
            "opencard": "Abrir cartão relacionado",
            "opendetail": "mostrar detalhe",
            "type": "Tipo"
        },
        "reports": {
            "csv": "CSV",
            "download": "Descarregar",
            "format": "Formato",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "Imprimir",
            "reload": "Recarregar",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "Padrão"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "Diário"
                        },
                        "monthly": {
                            "description": "Por mês"
                        },
                        "once": {
                            "description": "Uma vez"
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
                            "description": "Padrão"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "Adicionar Tematismo",
            "analysisType": "Tipo de análise",
            "attribute": "Atributo",
            "calculateRules": "Gerar regras de estilo",
            "clearThematism": "Clear Thematism",
            "color": "Cor",
            "defineLegend": "Definição de legenda",
            "defineThematism": "Definição de tematismo",
            "function": "Função",
            "generate": "Gerar",
            "geoAttribute": "Atributo Geográfico",
            "graduated": "Graduação",
            "highlightSelected": "Iluminar Item selecionado",
            "intervals": "intervalos",
            "legend": "Legenda",
            "name": "nome",
            "newThematism": "Novo Tematismo",
            "punctual": "Pontual",
            "quantity": "Quantidade",
            "segments": "Segmentos",
            "source": "Fonte",
            "table": "Tabela",
            "thematism": "Temas",
            "value": "Valor"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "Sair sem guardar",
                    "stayinedit": "Voltar para editar"
                },
                "savebeforeexit": "Há alterações não guardadas nos anexos. Quer salvá-las antes de sair?",
                "saveprocessmessage": "Os anexos só podem ser guardados em cartões existentes. Ao pressionar em guardar, a instância do processo será criada com os dados introduzidos no formulário."
            },
            "customform": {
                "addrow": "Adicionar linha",
                "clonerow": "Clonar linha",
                "datanotvalid": "Dados não válidos",
                "deleterow": "Apagar linha",
                "editrow": "Editar linha",
                "export": "Exportar",
                "import": "Importar",
                "importexport": {
                    "expattributes": "Dados para exportar",
                    "file": "Arquivo",
                    "filename": "Nome do arquivo",
                    "format": "Formato",
                    "importmode": "Modo de importação",
                    "keyattributes": "Chaves de atributo",
                    "missingkeyattr": "Escolha pelo menos um atributo-chave",
                    "modeadd": "Adicionar",
                    "modemerge": "Unir",
                    "modereplace": "Substituir",
                    "separator": "Separador"
                },
                "refresh": "Atualizar para dados padrão"
            },
            "linkcards": {
                "checkedonly": "Verificado apenas",
                "editcard": "Editar cartão",
                "opencard": "Abrir cartão",
                "refreshselection": "Aplicar seleção padrão",
                "togglefilterdisabled": "Ativar filtro de grelha",
                "togglefilterenabled": "Ativar filtro de grelha"
            },
            "required": "Esta ferramenta é obrigatória."
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
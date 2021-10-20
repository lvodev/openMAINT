(function() {
    Ext.define('CMDBuildUI.locales.ja.Locales', {
        "requires": ["CMDBuildUI.locales.ja.LocalesAdministration"],
        "override": "CMDBuildUI.locales.Locales",
        "singleton": true,
        "localization": "ja",
        "administration": CMDBuildUI.locales.ja.LocalesAdministration.administration,
        "attachments": {
            "add": "添付追加",
            "attachmenthistory": "添付履歴",
            "author": "作成者",
            "browse": "ブラウズ・・・",
            "category": "カテゴリー",
            "code": "コード",
            "creationdate": "作成日",
            "deleteattachment": "添付削除",
            "deleteattachment_confirmation": "本当にこの添付を削除しますか?",
            "description": "説明",
            "download": "ダウンロード",
            "dropfiles": "ファイルをここにドロップ",
            "editattachment": "添付変更",
            "file": "ファイル",
            "filealreadyinlist": "{0}は既にリストにあります",
            "filename": "ファイル名",
            "fileview": "添付表示",
            "invalidfiles": "無効なファイル削除",
            "majorversion": "メジャーバージョン",
            "maxsize": "許容最大ファイル容量は {0} MBです",
            "metadata": "メタデータ",
            "modificationdate": "更新日",
            "new": "新規添付",
            "nocategory": "未分類",
            "preview": "プレビュー",
            "removefile": "ファイル削除",
            "statuses": {
                "empty": "ファイルが空です",
                "error": "エラー",
                "extensionNotAllowed": "ファイル拡張子は許可されません",
                "loaded": "ロード完了",
                "ready": "準備完了",
                "toolarge": "許容最大ファイル容量を超過"
            },
            "successupload": "{0}をアップロードしました",
            "uploadfile": "アップロード中...",
            "version": "バージョン",
            "viewhistory": "添付履歴表示",
            "warningmessages": {
                "atleast": "警告:\"{1}\"タイプの{0}の添付ファイルがロードされました。このカテゴリは少なくとも {2} の添付ファイルを期待しています",
                "exactlynumber": "警告:\"{1}\"タイプの{0}の添付ファイルがロードされました。このカテゴリは {2} の添付ファイルを期待しています",
                "maxnumber": "警告:\"{1}\" タイプの {0} 添付ファイルがロードされました。このカテゴリは、最大でも {2} の添付ファイルを期待しています。"
            },
            "wrongfileextension": "{0}ファイル拡張子は許可されません"
        },
        "bim": {
            "bimViewer": "BIMビューワー",
            "card": {
                "label": "カード"
            },
            "ifcproperties": {
                "BOUNDING_BOX_SIZE_ALONG_X": "X軸の境界ボックスのサイズ",
                "BOUNDING_BOX_SIZE_ALONG_Y": "Y軸の境界ボックスのサイズ",
                "BOUNDING_BOX_SIZE_ALONG_Z": "Z軸の境界ボックスのサイズ",
                "LARGEST_FACE_AREA": "最大フェイスエリア",
                "LARGEST_FACE_DIRECTION": "最大フェイス方向",
                "SURFACE_AREA_ALONG_X": "X軸の表面積",
                "SURFACE_AREA_ALONG_Y": "Y軸の表面積",
                "SURFACE_AREA_ALONG_Z": "Z軸の表面積",
                "TOTAL_SHAPE_VOLUME": "総形状量",
                "TOTAL_SURFACE_AREA": "総表面積",
                "WALKABLE_SURFACE_AREA": "歩行可能な表面積",
                "calculated": "計算済",
                "description": "説明",
                "guid": "GUID",
                "label": "プロパティ",
                "name": "名称",
                "uuid": "UUID"
            },
            "layers": {
                "label": "レイヤー",
                "menu": {
                    "hideAll": "全て隠す",
                    "showAll": "全て表示"
                },
                "name": "名称",
                "qt": "数",
                "visibility": "表示"
            },
            "menu": {
                "camera": "カメラ",
                "frontView": "フロントビュー",
                "mod": "ビューワーコントロール",
                "orthographic": "正射",
                "pan": "スクロール",
                "perspective": "投射",
                "resetView": "リセットビュー",
                "rotate": "回転",
                "sideView": "サイドビュー",
                "topView": "トップビュー"
            },
            "showBimCard": "BIM 3D表示",
            "tree": {
                "arrowTooltip": "選択",
                "columnLabel": "ツリー",
                "label": "ツリー",
                "open_card": "関連するカードを開く",
                "root": "IFCルート"
            }
        },
        "bulkactions": {
            "abort": "選択したアイテムを中止",
            "alertdownloadattachments": "一部の添付ファイルは、まだサーバーに保存されていないため、ダウンロードできません。",
            "alertnoattachmentsdownload": "添付ファイルがまだサーバーに保存されていないため、ダウンロードされません",
            "cancelselection": "選択キャンセル",
            "confirmabort": "本当に{0}プロセスインスタンスを中止してよろしいですか？",
            "confirmdelete": "本当に{0}カードを削除してよろしいですか？",
            "confirmdeleteattachements": "本当に{0}添付ファイルを削除してよろしいですか？",
            "confirmedit": "本当に{0}を{1}のカードに変更してよろしいですか？",
            "delete": "選択したアイテムを削除",
            "download": "選択した添付ファイルをダウンロード",
            "downloadall": "全ての添付ファイルをダウンロード",
            "edit": "選択したアイテムを編集",
            "selectall": "全アイテムを選択"
        },
        "calendar": {
            "active_expired": "有効/失効",
            "add": "カレンダー追加",
            "advancenotification": "事前通知日数",
            "allcategories": "全カテゴリー",
            "alldates": "全日付",
            "associatedcard": "関連するカード",
            "calculated": "計算済",
            "calendar": "カレンダー表示",
            "cancel": "キャンセル済",
            "category": "カテゴリー",
            "class": "クラス",
            "cm_confirmcancel": "本当にこのスケジュールをキャンセル済にしますか?",
            "cm_confirmcomplete": "本当にこのスケジュールを完了済にしますか?",
            "cm_markcancelled": "スケジュールをキャンセル済にします",
            "cm_markcomplete": "スケジュールを完了済にします",
            "complete": "完了",
            "completed": "完了済",
            "date": "日",
            "days": "日",
            "delaybeforedeadline": "期限前計算",
            "delaybeforedeadlinevalue": "期限前計算値",
            "description": "説明",
            "editevent": "スケジュール編集",
            "enddate": "終了日",
            "endtype": "終了タイプ",
            "event": "スケジュール",
            "executiondate": "実行日",
            "frequency": "頻度",
            "frequencymultiplier": "回数",
            "grid": "一覧表示",
            "leftdays": "予定日",
            "londdescription": "詳細説明",
            "manual": "マニュアル",
            "maxactiveevents": "最大有効イベント",
            "messagebodydelete": "本当にこのスケジュールを削除しますか？",
            "messagebodyplural": "{0} スケジュールがあります",
            "messagebodyrecalculate": "スケジュール再計算しますか？",
            "messagebodysingular": "{0} スケジュールがあります",
            "messagetitle": "スケジュール再計算しますか？",
            "missingdays": "残日数",
            "next30days": "30日間",
            "next7days": "7日間",
            "notificationtemplate": "通知メールテンプレート",
            "notificationtext": "通知内容",
            "occurencies": "実行回数",
            "operation": "ステータス",
            "partecipantgroup": "表示グループ",
            "partecipantuser": "表示ユーザー",
            "priority": "優先度",
            "recalculate": "再計算",
            "referent": "対象",
            "scheduler": "スケジューラー",
            "sequencepaneltitle": "スケジュール作成",
            "startdate": "開始日",
            "status": "ステータス",
            "today": "本日",
            "type": "タイプ",
            "viewevent": "スケジュール表示",
            "widgetcriterion": "ルール",
            "widgetemails": "メール",
            "widgetsourcecard": "対象カード"
        },
        "classes": {
            "cards": {
                "addcard": "カード追加",
                "clone": "複製",
                "clonewithrelations": "カードとリレーションを複製",
                "deletebeaware": "注意：",
                "deleteblocked": "{0}とのリレーションがあるので削除できません",
                "deletecard": "カード削除",
                "deleteconfirmation": "本当にこのカードを削除しますか?",
                "deleterelatedcards": "関連する{0}カードも削除されます",
                "deleterelations": "{0}カードとリレーションが削除されます",
                "label": "カード",
                "modifycard": "カード更新",
                "opencard": "カード表示",
                "print": "カード印刷"
            },
            "simple": "シンプルクラス",
            "standard": "標準クラス"
        },
        "common": {
            "actions": {
                "add": "追加",
                "apply": "適用",
                "cancel": "キャンセル",
                "close": "閉じる",
                "delete": "削除",
                "edit": "編集",
                "execute": "実行",
                "help": "ヘルプ",
                "load": "ロード",
                "open": "開く",
                "refresh": "リフレッシュ",
                "remove": "削除",
                "save": "保存",
                "saveandapply": "保存",
                "saveandclose": "保存して閉じる",
                "search": "検索",
                "searchtext": "検索中..."
            },
            "attributes": {
                "nogroup": "基本データ"
            },
            "dates": {
                "date": "Y/m/d",
                "datetime": "Y/m/d H:i:s",
                "time": "H:i:s"
            },
            "editor": {
                "clearhtml": "HTMLクリア",
                "expand": "エディターを広げる",
                "reduce": "エディターを狭める",
                "signature": "署名追加",
                "unlink": "リンク解除",
                "unlinkmessage": "ハイパーリンクをテキストに変換"
            },
            "grid": {
                "disablemultiselection": "複数選択無効",
                "enamblemultiselection": "複数選択有効",
                "export": "エキスポート",
                "filterremoved": "フィルターは削除されました",
                "import": "インポート",
                "itemnotfound": "アイテムが見つかりません",
                "list": "リスト",
                "opencontextualmenu": "コンテキストメニュー",
                "print": "印刷",
                "printcsv": "CSV出力",
                "printodt": "ODT出力",
                "printpdf": "PDF出力",
                "row": "アイテム",
                "rows": "アイテム",
                "subtype": "サブタイプ"
            },
            "tabs": {
                "activity": "アクティビティ",
                "attachment": "添付",
                "attachments": "添付",
                "card": "カード",
                "clonerelationmode": "リレーションクローンモード",
                "details": "詳細",
                "emails": "Eメール",
                "history": "履歴",
                "notes": "ノート",
                "relations": "リレーション",
                "schedules": "スケジュール"
            }
        },
        "dashboards": {
            "tools": {
                "download": "ダウンロードグラフ",
                "gridhide": "データ一覧を閉じる",
                "gridshow": "データ一覧表示",
                "openinpopup": "ポップアップで開く",
                "parametershide": "データパラメータを閉じる",
                "parametersshow": "データパラメータ表示",
                "reload": "再ロード"
            }
        },
        "emails": {
            "addattachmentsfromdocumentarchive": "ドキュメントから添付追加",
            "alredyexistfile": "この名前のファイルは既に存在します",
            "archivingdate": "アーカイブ日",
            "attachfile": "ファイルを添付",
            "bcc": "Bcc",
            "cc": "cc",
            "composeemail": "メール作成",
            "composefromtemplate": "テンプレートから作成",
            "delay": "後で送信",
            "delays": {
                "day1": "1日後",
                "days2": "2日後",
                "days4": "4日後",
                "hour1": "1時間後",
                "hours2": "２時間後",
                "hours4": "4時間後",
                "month1": "1カ月後",
                "negativeday1": "1日前",
                "negativedays2": "2日前",
                "negativedays4": "4日前",
                "negativehour1": "1時間前",
                "negativehours2": "2時間前",
                "negativehours4": "4時間前",
                "negativemonth1": "1ヶ月前",
                "negativeweek1": "1週間前",
                "negativeweeks2": "2週間前",
                "none": "なし",
                "week1": "1週間後",
                "weeks2": "2週間後"
            },
            "dmspaneltitle": "データベースから添付選択",
            "edit": "編集",
            "from": "差出人",
            "gridrefresh": "リフレッシュ",
            "keepsynchronization": "同期を維持",
            "message": "本文",
            "regenerateallemails": "全メールを再作成",
            "regenerateemail": "メール再作成",
            "remove": "削除",
            "remove_confirmation": "本当にこのメールを削除しますか?",
            "reply": "返信",
            "replyprefix": "{0}, {1}が書きました:",
            "selectaclass": "クラス選択",
            "sendemail": "メール送信",
            "signature": "署名",
            "statuses": {
                "draft": "下書き",
                "error": "エラー",
                "outgoing": "送信中",
                "received": "受信",
                "sent": "送信"
            },
            "subject": "件名",
            "to": "宛先",
            "view": "ビュー"
        },
        "errors": {
            "autherror": "ユーザー名またはパスワードに誤りがあります",
            "classnotfound": "クラス{0} は見つかりません",
            "fieldrequired": "必須入力",
            "invalidfilter": "無効なフィルター",
            "notfound": "アイテムが見つかりません"
        },
        "filters": {
            "actions": "アクション",
            "addfilter": "フィルター追加",
            "any": "すべての",
            "attachments": "添付",
            "attachmentssearchtext": "添付全文検索",
            "attribute": "属性選択",
            "attributes": "属性",
            "clearfilter": "フィルタークリア",
            "clone": "複製",
            "copyof": "コピー",
            "currentgroup": "現在グループ",
            "currentuser": "現在ユーザー",
            "defaultset": "デフォルトに設定",
            "defaultunset": "デフォルト設定から削除",
            "description": "説明",
            "domain": "ドメイン",
            "errorname": "ファイル名は既にあります",
            "filterdata": "フィルター",
            "fromfilter": "フィルターから",
            "fromselection": "選択から",
            "group": "グループ",
            "ignore": "除外",
            "migrate": "移行",
            "name": "名称",
            "newfilter": "新規フィルター",
            "noone": "何もない",
            "operator": "演算子",
            "operators": {
                "beginswith": "開始する",
                "between": "間",
                "contained": "含む",
                "containedorequal": "含むまたは同じ",
                "contains": "含む",
                "containsorequal": "含むまたは同じ",
                "descriptionbegin": "説明が開始する",
                "descriptioncontains": "説明に含まれる",
                "descriptionends": "説明が終了する",
                "descriptionnotbegin": "説明が開始しない",
                "descriptionnotcontain": "説明に含まない",
                "descriptionnotends": "説明が終了しない",
                "different": "異なる",
                "doesnotbeginwith": "開始しない",
                "doesnotcontain": "含まない",
                "doesnotendwith": "終了しない",
                "endswith": "終了する",
                "equals": "同じ",
                "greaterthan": "大きい",
                "isnotnull": "null値でない",
                "isnull": "null値",
                "lessthan": "小さい"
            },
            "relations": "リレーション",
            "type": "タイプ",
            "typeinput": "入力パラメータ",
            "user": "ユーザー",
            "value": "値"
        },
        "gis": {
            "card": "カード",
            "cardsMenu": "メニュー",
            "code": "コード",
            "description": "説明",
            "extension": {
                "errorCall": "エラー",
                "noResults": "結果がありません"
            },
            "externalServices": "外部サービス",
            "geographicalAttributes": "地理属性",
            "geoserverLayers": "Geoサーバレイヤー",
            "layers": "レイヤー",
            "list": "リスト",
            "longpresstitle": "エリア内ジオエレメント",
            "map": "マップ",
            "mapServices": "地図サービス",
            "position": "位置",
            "root": "ルート",
            "tree": "ナビゲーションツリー",
            "type": "タイプ",
            "view": "ビュー",
            "zoom": "ズーム"
        },
        "history": {
            "activityname": "アクティビティ名",
            "activityperformer": "アクティビティの実施者",
            "begindate": "開始日",
            "enddate": "終了日",
            "processstatus": "ステータス",
            "user": "ユーザー"
        },
        "importexport": {
            "database": {
                "uri": "データベースURI",
                "user": "データベースユーザー"
            },
            "downloadreport": "ダウンロードレポート",
            "emailfailure": "送信エラー",
            "emailmessage": "{1}のインポートレポート\"{0}\" ファイル添付",
            "emailsubject": "インポートレポート",
            "emailsuccess": "送信されました",
            "export": "エキスポート",
            "exportalldata": "全データ",
            "exportfiltereddata": "フィルターに一致のみ",
            "gis": {
                "shapeimportdisabled": "このテンプレートはシェープインポートできません",
                "shapeimportenabled": "シェープインポート設定"
            },
            "ifc": {
                "card": "カード",
                "project": "プロジェクト",
                "sourcetype": "インポート元"
            },
            "import": "インポート",
            "importresponse": "インポート応答",
            "response": {
                "created": "<em>Created cards</em>",
                "deleted": "<em>Deleted cards</em>",
                "errors": "エラー",
                "linenumber": "行番号",
                "message": "メッセージ",
                "modified": "<em>Modified cards</em>",
                "notprocessed": "<em>Unprocessed cards</em>",
                "processed": "処理行数",
                "recordnumber": "レコード数",
                "unchanged": "<em>Unchanged cards</em>"
            },
            "sendreport": "レポート送信",
            "template": "テンプレート",
            "templatedefinition": "テンプレート定義"
        },
        "joinviews": {
            "active": "有効",
            "addview": "ビュー追加",
            "alias": "エイリアス",
            "attribute": "属性",
            "attributes": "属性",
            "attributesof": "{0}の属性",
            "createview": "ビュー作成",
            "datasorting": "並び替え",
            "delete": "削除",
            "deleteview": "ビュー削除",
            "deleteviewconfirm": "本当のこのビューを削除しますか？",
            "description": "説明",
            "disable": "無効化",
            "domainalias": "ドメインエイリアス",
            "domainsof": "{0}のドメイン",
            "edit": "編集",
            "editview": "ビュー定義編集",
            "enable": "有効化",
            "fieldsets": "フィールドセット",
            "filters": "フィルター",
            "generalproperties": "一般属性",
            "group": "グループ",
            "innerjoin": "インナージョイン",
            "jointype": "ジョインタイプ",
            "joinview": "ジョインからのビュー",
            "klass": "クラス",
            "manageview": "ビュー管理",
            "masterclass": "マスタークラス",
            "masterclassalias": "マスタークラスエイリアス",
            "name": "名称",
            "newjoinview": "ジョインからの新規ビュー",
            "outerjoin": "アウタージョイン",
            "pleaseseleceavalidmasterclass": "有効なマスタークラスを選択してください",
            "refreshafteredit": "変更をページに反映しますか？",
            "selectatleastoneattribute": "ステップ4で、グリッド表示と縮小表示を行う属性を1つ以上選択してください。",
            "showingrid": "グリッド表示",
            "showinreducedgrid": "縮小表示",
            "targetalias": "ターゲットクラスエイリアス"
        },
        "login": {
            "buttons": {
                "login": "ログイン",
                "logout": "ユーザー変更"
            },
            "fields": {
                "group": "グループ",
                "language": "言語",
                "password": "パスワード",
                "tenants": "テナント",
                "username": "ユーザー名"
            },
            "loggedin": "ログイン",
            "sso": {
                "loginfailure": "ログイン失敗",
                "loginwith": "{0}でログイン",
                "or": "または"
            },
            "title": "ログイン",
            "welcome": "おかえりなさい {0}"
        },
        "main": {
            "administrationmodule": "管理モジュール",
            "baseconfiguration": "基本設定",
            "cardlock": {
                "lockedmessage": "このカードは{0}が編集しているため、編集できません。",
                "someone": "誰か"
            },
            "changegroup": "グループ変更",
            "changetenant": "{0}に変更",
            "confirmchangegroup": "本当にこのグループを変更しますか?",
            "confirmchangetenants": "本当に有効なテナントを変更しますか?",
            "confirmdisabletenant": "本当に\"テナント無視\"フラグを無効にしますか?",
            "confirmenabletenant": "本当に\"テナント無視\"フラグを有効にしますか??</em>",
            "ignoretenants": "{0}を除外",
            "info": "情報",
            "logo": {
                "cmdbuild": "CMDBuild ロゴ",
                "cmdbuildready2use": "CMDBuild READY2USE ロゴ",
                "companylogo": "ユーザーロゴ",
                "openmaint": "openMAINT ロゴ"
            },
            "logout": "ログアウト",
            "managementmodule": "データモジュール",
            "multigroup": "マルチグループ",
            "multitenant": "マルチ{0}",
            "navigation": "ナビゲーション",
            "pagenotfound": "ページがありません",
            "password": {
                "change": "パスワード変更",
                "confirm": "パスワード確認",
                "email": "メールアドレス",
                "err_confirm": "パスワードに誤りがあります",
                "err_diffprevious": "以前のパスワードと同じものは使えません",
                "err_diffusername": "ユーザー名と同じパスワードは使えません",
                "err_length": "{0}字以上のパスワードが必要です",
                "err_reqdigit": "パスワードには少なくとも1桁の数字が含まれている必要があります",
                "err_reqlowercase": "パスワードには少なくとも1字の小文字が含まれている必要があります",
                "err_requppercase": "パスワードには少なくとも1字の大文字が含まれている必要があります",
                "expired": "パスワードの有効期限が切れました、変更してください",
                "forgotten": "パスワードを忘れました",
                "new": "新パスワード",
                "old": "旧パスワード",
                "recoverysuccess": "パスワードリセット案内メールを送信しました",
                "reset": "パスワードリセット案内メールを送信しました",
                "saved": "パスワードが保存されました"
            },
            "pleasecorrecterrors": "エラーを修正してください",
            "preferences": {
                "comma": "カンマ",
                "decimalserror": "小数点の項目が必要です",
                "decimalstousandserror": "小数点と桁区切りは異なる必要があります",
                "default": "デフォルト",
                "defaultvalue": "デフォルト",
                "firstdayofweek": "週の開始日",
                "gridpreferencesclear": "グリッド設定クリア",
                "gridpreferencescleared": "グリッド設定クリアされました",
                "gridpreferencessave": "グリッド設定保存",
                "gridpreferencessaved": "グリッド設定保存されました",
                "gridpreferencesupdate": "グリッド設定更新",
                "labelcsvseparator": "CSVセパレータ",
                "labeldateformat": "日付表示",
                "labeldecimalsseparator": "小数点記号",
                "labellanguage": "言語",
                "labelthousandsseparator": "桁区切り記号",
                "labeltimeformat": "時刻表示",
                "msoffice": "Microsoft Office",
                "period": "ピリオド",
                "preferredfilecharset": "CSVエンコーディング",
                "preferredofficesuite": "使用Officeプログラム",
                "space": "スペース",
                "thousandserror": "整数の項目が必要です",
                "timezone": "タイムゾーン",
                "twelvehourformat": "12時間表示",
                "twentyfourhourformat": "24時間表示"
            },
            "searchinallitems": "全アイテム検索",
            "selectdeselettenants": "選択/選択解除",
            "treenavcontenttitle": "{1}の{0}",
            "userpreferences": "表示設定"
        },
        "menu": {
            "allitems": "全アイテム",
            "classes": "クラス",
            "custompages": "カスタムページ",
            "dashboards": "ダッシュボード",
            "processes": "プロセス",
            "reports": "レポート",
            "views": "ビュー"
        },
        "notes": {
            "edit": "ノート編集"
        },
        "notifier": {
            "attention": "注意",
            "error": "エラー",
            "genericerror": "エラー",
            "genericinfo": "一般的情報",
            "genericwarning": "一般的警告",
            "info": "情報",
            "success": "成功",
            "warning": "警告"
        },
        "patches": {
            "apply": "パッチ適用",
            "category": "カテゴリー",
            "description": "説明",
            "name": "名称",
            "patches": "パッチ"
        },
        "processes": {
            "abortconfirmation": "本当にこのプロセスを中止しますか?",
            "abortprocess": "プロセスを中止",
            "action": {
                "advance": "次へ",
                "label": "アクション"
            },
            "activeprocesses": "有効プロセス",
            "allstatuses": "全て",
            "editactivity": "アクティビティ変更",
            "openactivity": "アクティビティ表示",
            "startworkflow": "開始",
            "workflow": "ワークフロー"
        },
        "relationGraph": {
            "activity": "アクティビティ",
            "allLabelsOnGraph": "全ラベル",
            "card": "カード",
            "cardList": "カード一覧",
            "cardRelations": "リレーション",
            "choosenaviagationtree": "ナビゲーション選択",
            "class": "クラス",
            "classList": "クラス一覧",
            "compoundnode": "複合ノード",
            "disable": "無効化",
            "edges": "辺",
            "enable": "有効化",
            "labelsOnGraph": "ツールチップ",
            "level": "レベル",
            "nodes": "ノード",
            "openRelationGraph": "リレーショングラフを開く",
            "qt": "数",
            "refresh": "リフレッシュ",
            "relation": "リレーション",
            "relationGraph": "リレーショングラフ",
            "reopengraph": "このノードから再表示"
        },
        "relations": {
            "adddetail": "詳細追加",
            "addrelations": "リレーション追加",
            "attributes": "属性",
            "begindate": "開始日",
            "code": "コード",
            "deletedetail": "詳細削除",
            "deleterelation": "リレーション削除",
            "deleterelationconfirm": "本当にこのリレーションを削除しますか?",
            "description": "説明",
            "editcard": "カード編集",
            "editdetail": "詳細編集",
            "editrelation": "リレーション編集",
            "extendeddata": "拡張データ",
            "mditems": "アイテム",
            "missingattributes": "必須属性がありません",
            "opencard": "関連するカードを開く",
            "opendetail": "詳細表示",
            "type": "タイプ"
        },
        "reports": {
            "csv": "CSV",
            "download": "ダウンロード",
            "format": "フォーマット",
            "odt": "ODT",
            "pdf": "PDF",
            "print": "印刷",
            "reload": "再ロード",
            "rtf": "RTF"
        },
        "system": {
            "data": {
                "lookup": {
                    "CalendarCategory": {
                        "default": {
                            "description": "デフォルト"
                        }
                    },
                    "CalendarFrequency": {
                        "daily": {
                            "description": "毎日"
                        },
                        "monthly": {
                            "description": "毎月"
                        },
                        "once": {
                            "description": "一回"
                        },
                        "weekly": {
                            "description": "毎週"
                        },
                        "yearly": {
                            "description": "毎年"
                        }
                    },
                    "CalendarPriority": {
                        "default": {
                            "description": "デフォルト"
                        }
                    }
                }
            }
        },
        "thematism": {
            "addThematism": "テーマ追加",
            "analysisType": "表示タイプ",
            "attribute": "属性",
            "calculateRules": "スタイルルール作成",
            "clearThematism": "テーマ消去",
            "color": "色",
            "defineLegend": "凡例定義",
            "defineThematism": "テーマ定義",
            "function": "ファンクション",
            "generate": "作成",
            "geoAttribute": "地理属性",
            "graduated": "段階",
            "highlightSelected": "ハイライト",
            "intervals": "間隔",
            "legend": "凡例",
            "name": "名称",
            "newThematism": "新テーマ",
            "punctual": "点",
            "quantity": "数",
            "segments": "セグメント",
            "source": "ソース",
            "table": "テーブル",
            "thematism": "テーマ",
            "value": "値"
        },
        "widgets": {
            "attachment": {
                "actions": {
                    "exitwithoutsave": "保存しないで終了",
                    "stayinedit": "編集に戻る"
                },
                "savebeforeexit": "添付ファイルに保存されていない変更があります。終了する前に、それらを保存しますか？",
                "saveprocessmessage": "添付ファイルは既存のカードにしか保存できません。保存を押すと、フォームに入力されたデータでプロセスインスタンスが作成されます。"
            },
            "customform": {
                "addrow": "行追加",
                "clonerow": "行を複製",
                "datanotvalid": "無効なデータ",
                "deleterow": "行削除",
                "editrow": "行編集",
                "export": "エキスポート",
                "import": "インポート",
                "importexport": {
                    "expattributes": "エキスポートデータ",
                    "file": "ファイル",
                    "filename": "ファイル名",
                    "format": "フォーマット",
                    "importmode": "インポートモード",
                    "keyattributes": "キー属性",
                    "missingkeyattr": "一つ以上のキー属性を選択してください",
                    "modeadd": "追加",
                    "modemerge": "マージ",
                    "modereplace": "置き換え",
                    "separator": "セパレータ"
                },
                "refresh": "初期設定に戻す"
            },
            "linkcards": {
                "checkedonly": "確認のみ",
                "editcard": "カード編集",
                "opencard": "カード表示",
                "refreshselection": "デフォルトを適用",
                "togglefilterdisabled": "フィルター無効化",
                "togglefilterenabled": "フィルター有効化"
            },
            "required": "このウィジェットは必要です"
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
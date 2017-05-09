function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var mapHome = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "74.19%",
        "id": "mapHome",
        "isVisible": true,
        "left": "0%",
        "onBoundsChanged": AS_Map_h1249d587f4a4614ba3edb4298332bad,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 4
    });
    var btnRemovePin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "37dp",
        "id": "btnRemovePin",
        "isVisible": true,
        "left": "187dp",
        "onClick": AS_Button_eef020b6bf87471c8d295656e9135f15,
        "skin": "slButtonGlossBlue",
        "text": "Remove Pin",
        "top": "525dp",
        "width": "140dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAddPin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "35dp",
        "id": "btnAddPin",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_e46aaa69e99844478b15ecec24d70151,
        "skin": "slButtonGlossBlue",
        "text": "Add Pin",
        "top": "526dp",
        "width": "110dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAddPins = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "35dp",
        "id": "btnAddPins",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_c76ea3bbfc6a42b8acddfd793b6660c9,
        "skin": "slButtonGlossBlue",
        "text": "Add Pins",
        "top": "586dp",
        "width": "110dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnRemovePins = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "37dp",
        "id": "btnRemovePins",
        "isVisible": true,
        "left": "188dp",
        "onClick": AS_Button_cdb4cba5b4274797b6f722d0acba10cf,
        "skin": "slButtonGlossBlue",
        "text": "Remove Pins",
        "top": "585dp",
        "width": "140dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAction = new kony.ui.Label({
        "id": "lblAction",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ha3120a1e24842",
        "text": "Event execution:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "480dp",
        "width": "100.05%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblOnBoundsChanged = new kony.ui.Label({
        "id": "lblOnBoundsChanged",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ha3120a1e24842",
        "text": "onBoundsChanged Event fired ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "500dp",
        "width": "100.05%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmHome.add(mapHome, btnRemovePin, btnAddPin, btnAddPins, btnRemovePins, lblAction, lblOnBoundsChanged);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};
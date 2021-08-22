sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("pro.project1.controller.View", {
            onInit: function () {

            },
            handlePopoverPress: function (oEvent) {
                MessageBox.information("Execute Order 66");

            }
        });
    });

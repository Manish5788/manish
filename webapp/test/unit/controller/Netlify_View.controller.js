/*global QUnit*/

sap.ui.define([
	"netlify/Netlify_App/controller/Netlify_View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Netlify_View Controller");

	QUnit.test("I should test the Netlify_View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
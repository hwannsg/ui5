sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller,MessageToast) {
   "use strict";
   return Controller.extend("hwang.controller.Login", {
	   onInit: function() {

		},
		onLogin : function(){
			var usrId = this.byId("idInput").getValue();
			var usrPwd = this.byId("passwordInput").getValue();
			
		},
		onSearch : function(){
			
		},
		onClearPwd : function(){
			
		},
   });
});
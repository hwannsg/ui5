sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller,MessageToast) {
   "use strict";
   return Controller.extend("hwang.controller.App", {
	   
	   onInit: function() {
		    //MessageToast.show("testsetes");
			var that = this;
			// Create Model Instance of the oData service
			var oModel = new sap.ui.model.odata.v2.ODataModel("http://sapserver.atsg.co.kr:8070/sap/opu/odata/sap/ZODATA_SRV");
			sap.ui.getCore().setModel(oModel, "myModel");
		},
       onPress : function(oData, oResponse){
    	  var myModel = sap.ui.getCore().getModel("myModel");
  		  myModel.setHeaders({
			"X-Requested-With" : "X"
		  });
  		  var that = this;
    	    var readurl = "/TempHeaderSet";
			myModel.read(readurl, {
				success : function(oData, oResponse) {
					debugger;
					var userdata = new sap.ui.model.json.JSONModel({
						"Result" : oData.results
					});
					var tab = that.getView().byId("userdatatable");
					tab.setModel(userdata);
					sap.ui.getCore().setModel(userdata);
					var i = 0;
					var  oFilters = null;
					var template = new sap.m.ColumnListItem({
			              id: "first_template",
			              type: "Navigation",
			              visible: true,

			              cells: [
			              new sap.m.Label("ID", {
			               text: "{Ebeln}"
		                 }),
			              new sap.m.Label({
			               text:  "{Bukrs}"
                         }),
			              new sap.m.Label({
			               text:  "{Bstyp}"
	                         }),
			              new sap.m.Label({
			               text:  "{Bsart}"
	                         }),
			              new sap.m.Label({
			               text:  "{Bukrs}"
	                         }),
			              new sap.m.Label({
			               text:  "{Lifnr}"
	                         }),
			              new sap.m.Label({
			               text:  "{Zterm}"
	                         }),
			                ]      

			});
					tab.bindItems("/Result",template, null, oFilters);     
				},
				error : function(err) {
					debugger;
				}
			});

      }
   });
});
sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("hwang.Component", {

    metadata:{
     manifest: "json" //Component가 읽어들어진 후 manifest/json이 실행
    },
    init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         
         var oRouter = this.getRouter();
         if(oRouter){
        	 oRouter.initialize();
         }

      }
     
   });
});

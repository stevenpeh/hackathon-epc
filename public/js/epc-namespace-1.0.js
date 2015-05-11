var epc = {
			    evtBus : {
			        subscribe : function(label, data, evtHandler) {
			            $(epc).on(label, null, data, evtHandler);
			        },

			        publish : function(label, data) {
			            $(epc).trigger(label, data);
			        },
			        event : {
			        	APP_START: "appStart",
			        	PAYMENTTAB_LOADED: "paymentTabLoaded",
			        	PAYMENTLIST_SELECTED: "paymentListSelected",
			        	NEW_PAYMENT: "newPayment"
			        },
			    }

};
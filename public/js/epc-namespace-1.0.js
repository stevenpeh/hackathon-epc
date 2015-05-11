var epc = {
	aggregatePromises: function() {
		return $.when(arguments);
	},

	createPromise: function() {
		return $.Deferred();
	},

	waitOnPromise: function(promise) {
		return $.when(promise);
	},

	lookup: function(selector) {
		return $(selector);
	},

	ajax: function(args) {
		return $.ajax(args);
	},

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
        	NEW_PAYMENT: "newPayment",
        	MAIN_DETAILS_STARTED: "mainDetailsStarted",
        	MAIN_FORM_STARTED: "mainFormStarted"
        },
    }

};
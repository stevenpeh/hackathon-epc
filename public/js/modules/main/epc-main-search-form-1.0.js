epc.main = epc.main || {};

epc.main.searchForm = {
	_name: "searchForm",
	
	applyWidgets: function() {
		$('#paymentDate').datepicker();
		$('#autoRefreshSpinner').spinner({min: 1});
		$('#newPaymentButton').button().click(function(event) {
			epc.evtBus.publish(epc.evtBus.event.NEW_PAYMENT);
		});		
	},

	initUI: function() {
		epc.common.utils.loadTemplate('templates/main-search-form.html', 'mainSearchForm')
			.done(function() {
				epc.common.utils.loadTemplate('templates/payment-entry-dialog.html', 'paymentEntryDialogContainer'); 
				})
			.done(this.applyWidgets.bind(this));
			

	}
	
};

epc.evtBus.subscribe(epc.evtBus.event.APP_START, null, epc.main.searchForm.initUI.bind(epc.main.searchForm));
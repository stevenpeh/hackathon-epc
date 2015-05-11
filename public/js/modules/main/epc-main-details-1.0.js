epc.main = epc.main || {};

epc.main.detailForm = {
	_name: "detailForm",

    applyWidgets: function() {
		$('#mainDetailTab').tabs();

		epc.evtBus.subscribe(epc.evtBus.event.PAYMENTTAB_LOADED, null, function() {
			// we're only done when payment list is done
			epc.evtBus.publish(epc.evtBus.event.MAIN_DETAILS_STARTED);
		});

    },
    
	initUI: function() {
	    this.applyWidgets();
	    
	    epc.payment.list.initUI();
	}
	
};

epc.evtBus.subscribe(epc.evtBus.event.APP_START, null, epc.main.detailForm.initUI.bind(epc.main.detailForm));
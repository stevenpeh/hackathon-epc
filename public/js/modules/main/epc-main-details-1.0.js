epc.main = epc.main || {};

epc.main.detailForm = {
	_name: "detailForm",

    applyWidgets: function() {
		$('#mainDetailTab').tabs();
		
		var paymentPromise = epc.createPromise();
		var authPromise = epc.createPromise();
		var authorisedPromise = epc.createPromise();

		epc.evtBus.subscribe(epc.evtBus.event.PAYMENTTAB_LOADED, null, function() {
			// we're only done when payment list is done
			//epc.evtBus.publish(epc.evtBus.event.MAIN_DETAILS_STARTED);
			paymentPromise.resolve();			
		});

		epc.evtBus.subscribe(epc.evtBus.event.AUTHTAB_LOADED, null, function() {
			// we're only done when payment list is done
			//epc.evtBus.publish(epc.evtBus.event.MAIN_DETAILS_STARTED);
			authPromise.resolve();			
		});

		epc.evtBus.subscribe(epc.evtBus.event.AUTHORISEDTAB_LOADED, null, function() {
			// we're only done when payment list is done
			authorisedPromise.resolve();			
		});

		epc.aggregatePromises2(paymentPromise, authPromise, authorisedPromise).then(function() {
			epc.evtBus.publish(epc.evtBus.event.MAIN_DETAILS_STARTED);
		});

		epc.evtBus.publish(epc.evtBus.event.MAIN_DETAILS_STARTING);
    },
    
	initUI: function() {
	    this.applyWidgets();


	    // epc.payment.list.initUI();
	    // epc.payment.auth.initUI();
	   	// epc.payment.authorised.initUI();




	}
	
};

epc.evtBus.subscribe(epc.evtBus.event.APP_START, null, epc.main.detailForm.initUI.bind(epc.main.detailForm));
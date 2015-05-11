epc.main = epc.main || {};

epc.main.dashboard = {
	pages: {"main":0, "newPayment": 1},

	initUI: function() {
		var loadPromise = epc.createPromise();
		epc.common.uiWizard.init("dashboardWiz", this.pages["main"], loadPromise);

		var mainFormPromise = epc.createPromise();
		var mainDetailPromise = epc.createPromise();

		epc.evtBus.subscribe(epc.evtBus.event.MAIN_FORM_STARTED, null, function() {
			mainFormPromise.resolve();
		});
		epc.evtBus.subscribe(epc.evtBus.event.MAIN_DETAILS_STARTED, null, function() {
			mainDetailPromise.resolve();
		});

		epc.aggregatePromises(mainFormPromise, mainDetailPromise).then(function() {
			loadPromise.resolve();
		})
	},
};

epc.evtBus.subscribe(epc.evtBus.event.APP_START, null, epc.main.dashboard.initUI.bind(epc.main.dashboard));
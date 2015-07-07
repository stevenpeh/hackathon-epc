epc.payment = epc.payment || {};

epc.payment.auth = Object.create(epc.payment.list);
epc.payment.auth._tableID = "authPaymentListTable";
epc.payment.auth._name = "authPaymentList";
epc.payment.auth._containerID = "authPendingTab";
epc.payment.auth._completedEventId = epc.evtBus.event.AUTHTAB_LOADED;
epc.payment.auth._dataEvent = epc.evtBus.event.DATA_MODEL_CREATED_UPDATED;

epc.evtBus.subscribe(epc.evtBus.event.MAIN_DETAILS_STARTING, null, epc.payment.auth.initUI.bind(epc.payment.auth));



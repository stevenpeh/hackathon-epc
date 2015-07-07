epc.payment = epc.payment || {};

    
epc.payment.authorised = Object.create(epc.payment.list);
epc.payment.authorised._tableID = "authorisedPaymentListTable";
epc.payment.authorised._name = "authorisedPaymentList";
epc.payment.authorised._containerID = "authPaymentsTab";
epc.payment.authorised._completedEventId = epc.evtBus.event.AUTHORISEDTAB_LOADED;
epc.payment.authorised._dataEvent = epc.evtBus.event.DATA_MODEL_AUTHORISED_UPDATED;

epc.evtBus.subscribe(epc.evtBus.event.MAIN_DETAILS_STARTING, null, epc.payment.authorised.initUI.bind(epc.payment.authorised));
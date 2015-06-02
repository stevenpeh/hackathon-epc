epc.payment = epc.payment || {};

epc.payment.auth = Object.create(epc.payment.list);
epc.payment.auth._tableID = "authPaymentListTable";
epc.payment.auth._name = "authPaymentList";
epc.payment.auth._containerID = "authPendingTab";

epc.evtBus.subscribe(epc.evtBus.event.DATA_MODEL_CREATED_UPDATED, null, 
    epc.payment.auth.updateTable.bind(epc.payment.auth));
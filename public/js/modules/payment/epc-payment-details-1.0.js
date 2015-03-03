$.epc.payment = $.epc.payment || {};

$.epc.payment.details = {
    myDialog: undefined,
    applyWidgets: function() {
        this.myDialog = $('#paymentDetails').dialog({
            autoOpen: false,
            modal: true
        });
    },
    initUI: function() {
        this.applyWidgets();
    },
    show: function(evt, data) {
        data.selected;
        data.tableData;
        this.myDialog.dialog("open");
    }
};

$.epc.evtBus.subscribe($.epc.evtBus.event.PAYMENTTAB_LOADED, $.epc.payment.details.initUI.bind($.epc.payment.details));
$.epc.evtBus.subscribe($.epc.evtBus.event.PAYMENTLIST_SELECTED, null, $.epc.payment.details.show.bind($.epc.payment.details));
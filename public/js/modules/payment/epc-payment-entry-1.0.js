$.epc.payment = $.epc.payment || {};

$.epc.payment.entry = {
    close: function() {
        
    },
    submit: function() {
        console.log("Submitting");
        $("#paymentEntry input").attr("disabled", "disabled");
    },
    initUI: function() {
        $("#paymentEntry").dialog({modal: true, width: 1024});
        $("#close").button().click(this.close.bind(this));
        $("#submit").button().click(this.submit.bind(this));
    }
};

$.epc.evtBus.subscribe($.epc.evtBus.event.NEW_PAYMENT, null, $.epc.payment.entry.initUI.bind($.epc.payment.entry));
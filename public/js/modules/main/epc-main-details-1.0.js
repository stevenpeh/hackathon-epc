$.epc.main = $.epc.main || {};

$.epc.main.detailForm = {
	_name: "detailForm",

    applyWidgets: function() {
		$('#mainDetailTab').tabs();
    },
    
	initUI: function() {
	    this.applyWidgets();
	    
	    $.epc.payment.list.initUI();
	}
	
};

$.epc.evtBus.subscribe($.epc.evtBus.event.APP_START, null, $.epc.main.detailForm.initUI.bind($.epc.main.detailForm));
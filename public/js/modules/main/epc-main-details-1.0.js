$.epc.main = $.epc.main || {};

$.epc.main.detailForm = {
	_name: "detailForm",

    applyWidgets: function() {
		$('#mainDetailTab').tabs();
    },
    
	initUI: function() {
	    this.applyWidgets();
		$.epc.common.utils.loadTemplate('templates/main-paymentListTab.html', 'paymentListTab');
	}
	
};
$.epc.main = $.epc.main || {};

$.epc.main.searchForm = {
	_name: "searchForm",
	
	applyWidgets: function() {
		$('#paymentdate').datepicker();
		$('#autoRefreshSpinner').spinner({min: 1});
	},

	initUI: function() {
		$.epc.common.utils.loadTemplate('templates/main-search-form.html', 'mainSearchForm')
			.done(this.applyWidgets.bind(this));
	}
	
};
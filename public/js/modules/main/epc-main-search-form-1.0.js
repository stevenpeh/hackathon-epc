$.epc.main = $.epc.main || {};

$.epc.main.searchForm = {
	_name: "searchForm",

	initUI: function() {
		$('#paymentDate').datepicker();
		$('#autoRefreshSpinner').spinner({min: 1});

		//$('#todayButton').on('click', $.epc.main.searchController.doSearchForToday());
	}
};
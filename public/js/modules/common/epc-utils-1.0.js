$.epc.common = {};

$.epc.common.utils = {
    loadTemplate: function(url, id) {
		return $.ajax({
			url: url,
			success: function(data) {
				var template = Handlebars.compile(data);
				$('#' + id).html(template());
			}
		});
    }
};
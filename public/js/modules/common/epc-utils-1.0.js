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
    },
    
    initUIFields: function(uiFields, fieldNames) {
        for(var i=0; i<fieldNames.length; i++) {
            uiFields[ fieldNames[i] ] = $('#' + fieldNames[i]); 
        }
    },
    
    populateUIFields: function(uiFields, fieldNames, data) {
        for(var i=0; i<fieldNames.length; i++) {
            uiFields[fieldNames[i]].text( data[fieldNames[i]]);
        }
    }
};
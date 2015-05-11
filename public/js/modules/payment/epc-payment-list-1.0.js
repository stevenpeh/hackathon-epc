epc.payment = epc.payment || {};

epc.payment.list = {
    _name: "paymentList",
    
    applyWidgets: function() {
        //epc.payment.details.initUI();
        var paymentListTable = $('#paymentListTable').dataTable({
            "ajax": "../testdata/paymentList.json",
            "columns": [
                    {"data": "from"},
                    {"data": "fromBSB"},
                    {"data": "fromAccount"},
                    {"data": "to"},
                    {"data": "toBSB"},
                    {"data": "toAccount"},
                    {"data": "amount"},
                    {"data": "status"},
                    {"data": "entitySource"},
                    {"data": "createdOn"},
                    {"data": "createdBy"},
                    {"data": "lastUpdatedOn"},
                    {"data": "lastUpdatedBy"},
                    {"data": "comments"}
                ] 
        });
        $('#paymentListTable').on('init.dt', function() {
            console.log("init complete");
            $('#paymentListTable tbody tr').on('click', function(event) {
                
                // console.log(paymentListTable.row().data());
                var rowObj = $('#paymentListTable').DataTable().row(this).data();
                var rows = $('#paymentListTable').DataTable().rows().data();
                
                // epc.payment.details.show();
                epc.evtBus.publish(epc.evtBus.event.PAYMENTLIST_SELECTED, {selected: rowObj, tableData: rows});
                console.log(rowObj.from);
            })
        });

        epc.evtBus.publish(epc.evtBus.event.PAYMENTTAB_LOADED);
    },
    
    initUI: function() {
        epc.common.utils.loadTemplate('templates/main-paymentListTab.html', 'paymentListTab')
            .success(
                this.applyWidgets.bind(this)
            );
    }
}
epc.payment = epc.payment || {};

epc.payment.list = {
    _tableRef: undefined,
    _name: "paymentList",
    
    updateTable: function(evt, data) {
        epc.common.utils.table.repopulate(this._tableRef, data.data);       
        epc.common.utils.table.addRowSelectionHandler(this._tableRef, this.handleRowSelected.bind(this));
    },

    handleRowSelected: function(event) {
        var rowObj = epc.common.utils.table.getSelectedRow(this._tableRef, event.currentTarget); 
        var rows = epc.common.utils.table.getAllRowData(this._tableRef);
        
        epc.evtBus.publish(epc.evtBus.event.PAYMENTLIST_SELECTED, {selected: rowObj, tableData: rows});
    },

    applyWidgets: function() {
        this._tableRef = $('#paymentListTable');

        //epc.payment.details.initUI();
        var paymentListTable = this._tableRef.dataTable({
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
        epc.evtBus.publish(epc.evtBus.event.PAYMENTTAB_LOADED);
    },
    
    initUI: function() {
        epc.common.utils.loadTemplate('templates/main-paymentListTab.html', 'paymentListTab')
            .success(
                this.applyWidgets.bind(this)
            );
    }
};


epc.evtBus.subscribe(epc.evtBus.event.DATA_MODEL_ALL_UPDATED, null, 
    epc.payment.list.updateTable.bind(epc.payment.list));
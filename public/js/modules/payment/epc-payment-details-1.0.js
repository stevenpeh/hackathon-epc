epc.payment = epc.payment || {};

epc.payment.details = {
    myDialog: undefined,
    fieldNames : ["from", "fromBSB", "fromAccount", "to", "toBSB", "toAccount", "amount", "status", "entitySource", "createdOn", 
                    "createdBy", "lastUpdatedOn", "lastUpdatedBy", "comments"],
    uiFields : {},
    rows: undefined,
    currentIndex : 0,
    applyWidgets: function() {
        this.myDialog = $('#paymentDetails').dialog({
            autoOpen: false,
            modal: true,
            width: 600
        });
        epc.common.utils.initUIFields(this.uiFields, this.fieldNames);
        $('#paymentDetailsNextButton').on("click", (function() {
            epc.common.utils.populateUIFields(this.uiFields, this.fieldNames, this.rows[this.currentIndex++]);
        }).bind(this));
    },
    initUI: function() {
        this.applyWidgets();
    },
    show: function(evt, data) {
        // data.selected;
        // data.tableData;
        this.rows = data.tableData;
        epc.common.utils.populateUIFields(this.uiFields, this.fieldNames, data.selected);
        this.myDialog.dialog("open");
    }
};

epc.evtBus.subscribe(epc.evtBus.event.PAYMENTTAB_LOADED, epc.payment.details.initUI.bind(epc.payment.details));
epc.evtBus.subscribe(epc.evtBus.event.PAYMENTLIST_SELECTED, null, epc.payment.details.show.bind(epc.payment.details));
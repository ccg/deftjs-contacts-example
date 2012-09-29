Ext.define('App.controller.ContactGridViewController', {
    extend: 'Deft.mvc.ViewController',
    requires: ['App.view.ContactEditor'],

    control: {
        view: {
            itemdblclick: 'onDblClick'
        }
    },

    onDblClick: function (rowModel, record, index, eOpts) {
        console.log('ContactGridViewController->onDblClick');
        var editWindow = Ext.create('App.view.ContactEditor');
        //editWindow.getController().setRecord(record);
        editWindow.show();
    }
});

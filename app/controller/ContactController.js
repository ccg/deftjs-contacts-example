Ext.define('App.controller.ContactController', {
    extend: 'Ext.app.Controller',

    init: function () {
        console.log('ContactController#init');
        /*
        this.control({
            '#contactGrid': {
                itemdblclick: function (rowModel, record, index, eOpts) {
                    console.log('ContactController->itemdblclick');
                    console.log('index:');
                    console.log(index);
                }
            }
        });
        */
    }
});

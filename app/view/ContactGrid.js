Ext.define('App.view.ContactGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactgrid',
    mixins: ['Deft.mixin.Injectable', 'Deft.mixin.Controllable'],
    inject: ['contactStore'],
    controller: 'App.controller.ContactGridViewController',
    //requires: ['App.store.Contacts'], //

    //store: Ext.data.StoreManager.lookup('App.store.Contacts'), //

    id: 'contactGrid',

    initComponent: function () {
        var thisView = this;
        console.log('ContactGrid#initComponent');
        this.store = this.contactStore;
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'hello',
                        handler: function () {
                             console.log('ContactGrid->ViewController:');
                             //console.log(thisView.getController());
                        }
                    }
                ]
            }
        ]
        return this.callParent(arguments);
    },

    columns: [
        {header: 'First Name', dataIndex: 'firstName', width: 150},
        {header: 'Last Name', dataIndex: 'lastName', width: 150},
        {header: 'Occupation', dataIndex: 'occupation', width: 150}
    ]

});

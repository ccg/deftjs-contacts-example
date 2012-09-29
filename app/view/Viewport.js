Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['App.view.ContactGrid'],

    items: [
        {
            xtype: 'contactgrid',
            region: 'center',
            title: 'Contacts'
        }
    ]
});

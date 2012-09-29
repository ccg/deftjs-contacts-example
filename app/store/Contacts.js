Ext.define('App.store.Contacts', {
    extend: 'Ext.data.Store',
    model: 'App.model.Contact',
    storeId: 'contacts',
    /*
    data: [
        {firstName: 'Sterling', lastName: 'Archer', occupation: 'ISIS agent'},
        {firstName: 'Lana', lastName: 'Kane', occupation: 'ISIS agent'}
    ]
    */
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'data/contacts.json',
        reader: {
            type: 'json',
            idProperty: 'id',
            root: 'data'
        }
    }
});

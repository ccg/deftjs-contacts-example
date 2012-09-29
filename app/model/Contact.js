Ext.define('App.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'occupation', type: 'string'}
    ]
});

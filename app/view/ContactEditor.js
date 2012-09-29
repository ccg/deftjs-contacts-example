Ext.define('App.view.ContactEditor', {
    extend: 'Ext.window.Window',
    mixins: ['Deft.mixin.Controllable'],
    controller: 'App.controller.ContactEditorViewController',

    title: 'Edit Contact',
    height: 200,
    width: 400,
    layout: 'fit',
    items: [
        {
            xtype: 'form',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'First Name',
                    name: 'firstName',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Last Name',
                    name: 'lastName',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Occupation',
                    name: 'occupation',
                    allowBlank: true
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'saveButton'
                },
                {
                    text: 'Cancel',
                    itemId: 'cancelButton'
                }
            ]
        }
    ]
});

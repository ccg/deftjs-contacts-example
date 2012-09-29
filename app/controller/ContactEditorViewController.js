Ext.define('App.controller.ContactEditorViewController', {
    extend: 'Deft.mvc.ViewController',
    mixins: ['Deft.mixin.Injectable'],
    inject: ['contactStore'],

    config: {
        contactStore: null
    },

    control: {
        saveButton: {
            click: 'onSave'
        },
        cancelButton: {
            click: 'onCancel'
        }
    },

    onSave: function () {
        console.log('ContactEditorViewController#onSave');
        console.log(arguments);
        console.log('record to update:');
        console.log(this.getRecord());
        /* TODO: need to change this now that all the methods are attached
         * to the ViewController instead of the View.
        var newValues = this.getView().getFormValues(),
            record = this.getView().getRecord();
        record.set(newValues);
        */
    },

    onCancel: function () {
        // button, event, ?
        console.log('ContactEditorViewController#onCancel');
        console.log(arguments);
    },

    getForm: function () {
        // TODO: use itemId to select?
        return this.getView().items.getAt(0);
    },

    setRecord: function (record) {
        return this.getForm().loadRecord(record);
    },

    getRecord: function () {
        return this.getForm().getRecord();
    }
});

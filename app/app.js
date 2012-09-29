Ext.Loader.setConfig({
    enabled: true/*,
    // probably don't need anything like this if using deft-debug.js
    paths: {
        'Deft': 'https://github.com/deftjs/DeftJS/tree/v0.6.7/src/js/Deft'
    }
    */
});

Ext.application({
    name: 'App',
    autoCreateViewport: true,
    //controllers: ['App.controller.ContactController'],
    //models: ['App.model.Contact'],
    //stores: ['App.store.Contacts'],

    launch: function () {
        console.log("hello application");
    }
});

Ext.onReady(function () {
    Deft.Injector.configure({
        contactStore: 'App.store.Contacts'
    });
});

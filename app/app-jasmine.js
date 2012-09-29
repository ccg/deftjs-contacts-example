Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'App',
    autoCreateViewport: false, //diff for test
    // specifying these things here breaks the window.Application tests...
    //controllers: ['App.controller.ContactController'],
    //models: ['App.model.Contact'],
    //stores: ['App.store.Contacts'],

    launch: function () {
        console.log("application#launch");
        // Create a reference to the Ext JS application object so we can
        // perform tests against it.
        return window.Application = this;
    }
});

Ext.onReady(function () {
    Deft.Injector.configure({
        contactStore: 'App.store.Contacts'
    });
    // Don't initiate the Jasmine spec runner until Ext JS is ready.
    return execJasmine();
});

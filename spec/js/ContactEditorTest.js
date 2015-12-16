describe('Contact Editor Window', function () {
    var view = null,
        viewController = null,
        // A hidden div where we can add UI components to test them and their
        // dependencies.
        createComponentTestArea = function () {
            if (Ext.get('componentTestArea') != null) {
                Ext.removeNode(Ext.get('componentTestArea').dom);
            }
            Ext.DomHelper.append(Ext.getBody(),
                '<div id="componentTestArea" style="visibility:hidden"></div>');
        };

    beforeEach(function () {
        createComponentTestArea();

        // For each test, creata a ContactEditor instance and render it.
        view = Ext.create('App.view.ContactEditor', {
            renderTo: 'componentTestArea'
        });

        // Grab a reference to the ViewController for the MainTabPanel.
        viewController = view.getController();
    });

    afterEach(function () {
        // After each test, destroy the view and clean up.
        view.destroy();
        view = null;
        viewController = null;
    });

    describe('During successful startup, the contact editor', function () {
        it('has a view and a view controller', function () {
            expect(view).toBeDefined();
            expect(view.rendered).toBeTruthy();
            expect(view instanceof App.view.ContactEditor).toBeTruthy();
            expect(viewController).toBeDefined();
            expect(viewController instanceof App.controller.ContactEditorViewController).toBeTruthy();
            expect(viewController.getView() === view).toBeTruthy();
        });
    });

    describe('ViewController#getForm', function () {
        it('returns Ext.form.Panel object', function () {
            var form = viewController.getForm();
            expect(form).toBeDefined();
            expect(form instanceof Ext.form.Panel).toBeTruthy();
        });
    });

    describe('ViewController#getRecord', function () {
        it('returns App.model.Contact instance', function () {
            var newContact = Ext.create('App.model.Contact'),
                record;
            newContact.set({
                firstName: 'John',
                lastName: 'Doe',
                occupation: 'hobo'
            });
            viewController.setRecord(newContact);
            record = viewController.getRecord();
            expect(record).toBeDefined();
            expect(record instanceof App.model.Contact).toBeTruthy();
            expect(record.get('firstName')).toEqual('John');
            expect(record.get('lastName')).toEqual('Doe');
            expect(record.get('occupation')).toEqual('hobo');
        });
    });

    describe('when responding to setRecord(), the contact form', function () {
        it('shows the new values in the fields', function () {
            var Contact = Ext.ModelMgr.getModel('Contact'),
                newContact = Ext.create('App.model.Contact', {
                    firstName: 'John',
                    lastName: 'Doe',
                    occupation: 'hobo'
                }),
                form = viewController.getForm(),
                formValues = form.getValues();
            expect(formValues.firstName).not.toEqual('John');
            viewController.setRecord(newContact);
            formValues = form.getValues();
            expect(formValues.firstName).toEqual('John');
        });
    });
});

describe('During init and setup, the application', function () {
    it('has loaded Ext JS', function () {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
        expect(Ext.getVersion().minor).toEqual(1);
    });

    it('has loaded app with the expected name', function () {
        expect(window.Application).toBeDefined();
        expect(window.Application.name).toEqual('App');
    });

    it('has created DeftJS IoC items', function () {
        expect(Deft.ioc.Injector.canResolve('contactStore')).toBeTruthy();
        expect(Deft.ioc.Injector.canResolve('some_$unknown$_alias')).toBeFalsy();
    });

    it('can inject dependencies into a target object', function () {
        target = {
            contactStore: null,
            someOtherProperty: null,
            config: {}
        };

        Deft.ioc.Injector.inject('contactStore', target);
        expect(target.contactStore).toBeTruthy();
        expect(target.someOtherProperty).toBeFalsy();
    });
});

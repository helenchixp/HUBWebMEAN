describe('[Spec.js] contactController', function () {

    describe(' >> Show ', function () {

        beforeEach(module('HUBWebApp.contact'));

       

     
        var $httpBackend, ctrl;

        beforeEach( inject(function ($componentController, _$httpBackend_) {
            //var ctrl = $componentController('contactList');

            //expect(ctrl.orderProp).toBe('no');

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/users.json')
                .respond([{ no: '01' }, { no: '02' }, { no: '03' }]);
                //.respond([{ name: 'Osomatsu' }, { name: 'Todomatsu' }]);

            ctrl = $componentController('contactList');

            expect(ctrl.orderProp).toBe('no');
        }));

        it('should create a `brothers` property with 2 brothers fetched with `$http`', function () {
            //expect(ctrl.userlist).toBeUndefined();

            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.userlist).toEqual([]);

            $httpBackend.flush();
            // expect(ctrl.userlist).toEqual([{ name: 'Osomatsu' }, { name: 'Todomatsu' }]);
            expect(ctrl.userlist).toEqual([{ no: '01' }, { no: '02' }, { no: '03' }]);
            expect(ctrl.userlist.length).toBe(3);
        });

        
        it('Component User List ', inject(function ($componentController) {
           // var ctrl = $componentController('contactList');
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.userlist).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.userlist.length).toBe(3);
        }));
        

    });

    /*

    describe(' JSON >> from JSON file ', function ($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('data/users.json')
            .respond([{ name: 'Osomatsu' }, { name: 'Todomatsu' }]);

        ctrl = $componentController('contactList');
    });
    */

    /*
    describe(' >> Action ', function () {
        beforeEach(function () {
            browser.get('contact');
        });

        it('Should filter the user list by search textbox', function () {
            var list = element.all(by.repeater('user in $ctrl.userlist'));
            var query = element(by.module('$ctrl.search'));

            expect(list.count()).toBe(6);

            query.sendKey('5');
            expect(list.count()).toBe(1);

        });

    });
    */
});

/*
https://docs.angularjs.org/api/ngMock/service

*/
describe('[Spec.js] aboutController', function () {

    beforeEach(module('HUBWebApp.about'));

    it('About Controller ^s list', inject(function ($controller) {
        var scope = {};
        var ctrl = $controller('AboutController', {
            $scope: scope
        });

        expect(scope.list.length).toBe(2);
    }));

    it('About Controller 2 ^s list', inject(function ($controller) {
        var scope = {};
        var ctrl = $controller('About2Controller', {
            $scope: scope
        });

        expect(scope.list.length).toBe(3);
    }));


    it('Encrypt Component List ', inject(function ($componentController) {
        var ctrl = $componentController('encryptList');

        expect(ctrl.list.length).toBe(2);
    }));
});
'use strict';

describe('[Service] Brother Service', function () {
    var $httpBackend;
    var Brothers;
    var brothers = [
        { name: 'Osomatsu' },
        { name: 'Karamatsu' },
        { name: 'Choromatsu' },
        { name: 'Ichimatsu' },
        { name: 'Jushimatsu' },
        { name: 'Todomatsu' },
    ];


    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('HUBWebApp.contact.service'));


    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function (_$httpBackend_, _Brothers_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('data/users.json').respond(brothers);

        Brothers = _Brothers_;
      
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the brothers data from JSON file', function () {
        var users = Brothers.query();

        expect(users).toEqual([]);
        $httpBackend.flush();
        expect(users).toEqual(brothers);
        expect(users.length).toBe(6);



    });


    /*
    it('should fetch the OSOMATSU data from JSON file', function () {

        var user = Brothers.get({no:'01'});

   
        $httpBackend.flush();

        expect(user).toEqual(brothers[0]);
        //var osomatsu = Brothers.search();
        //expect(osomatsu.name).toBe(brothers[0].name);
    });
    */
});
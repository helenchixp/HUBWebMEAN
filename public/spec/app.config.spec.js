//var assert = require('assert');

describe('[Common] HUBWebApp.app', function () {

    beforeEach(module('HUBWebApp.app'));

    it('Result Mark Test: will be [v] when input is true', inject(function (resultmarkFilter) {
        expect(resultmarkFilter(true)).toBe('\u2713');
    })
    );
    it('Result Mark Test: will be [x] when input is false', inject(function (resultmarkFilter) {
        expect(resultmarkFilter(false)).toBe('\u2718');
    })
    );
   
})

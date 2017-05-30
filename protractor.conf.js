// An example configuration file.
//exports.config = {
//    directConnect: true,


//    seleniumAddress: 'http://localhost:4444/wd/hub',

//    // Capabilities to be passed to the webdriver instance.
//    capabilities: {
//        'browserName': 'Chrome'
//    },

//    // Framework to use. Jasmine is recommended.
//    framework: 'jasmine',

//    // Spec patterns are relative to the current working directory when
//    // protractor is called.
//    specs: ['./public/controller/*.e2e.spec.js'],

//    // Options to be passed to Jasmine.
//    jasmineNodeOpts: {
//        defaultTimeoutInterval: 30000
//    },

//    baseUrl: 'http://localhost:1337/index.html',

//    // Selector for the element housing the angular app - this defaults to
//    // body, but is necessary if ng-app is on a descendant of 
//    rootElement: 'body',

//};
// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    baseUrl: 'http://localhost:1337/',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./public/e2e/*.e2e.spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
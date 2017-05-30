angular.module('HUBWebApp.app', [])
    //共通化
    .filter('resultmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    });



/*'use strict';

angular.module('HUBWebApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/contact', {
                    template: '<contact-list></contact-list>'
                }).
                when('/contact/:no', {
                    template: '<contact-detail></contact-detail>'
                }).
                otherwise('/contact');
        }
    ]);
*/
/*
angular.module('HUBWebApp', [
    //'ngRoute',
    'ui.router',
    'HUBWebApp.contact',
    'HUBWebApp.contact.detail',
])
   .config(['$stateProvider', '$urlRouterProvider',
       function config($stateProvider, $urlRouterProvider) {

           $urlRouterProvider.otherwise('/'); // .otherwise({ redirectTo: '/'});

           $stateProvider
               .state('contact', {
                   url: "/contact",
                   template: '<contact-list></contact-list>'
               })
               .state('detail', { // 状態の名前を定義する
                   url: "/detail/:no", // URL
                   template: '<contact-detail></contact-detail>' // テンプレート
               })
;
       }
        ]);

*/

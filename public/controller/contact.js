/*
contact画面用Controller
*/

//define the controller on this module
angular.module('HUBWebApp.contact', [
    'ui.router',
    'HUBWebApp.app',
    'HUBWebApp.contact.service',
    // 'HUBWebApp.contact.detail'
])
    .config(['$stateProvider', '$urlRouterProvider',
        function config($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/contact'); // .otherwise({ redirectTo: '/'});

            $stateProvider
                .state('list', {
                    url: "/contact",
                    template: '<contact-list></contact-list>'
                })
                .state('detail', { // 状態の名前を定義する
                    url: "/detail/:no", // URL
                    template: '<contact-detail></contact-detail>' // テンプレート
                })
                ;
        }
    ])
    .component('contactList', {
        //The URL is relative to our `index.html` file
        templateUrl: 'templates/contact_user.html',
        /*
       controller: ['$http', function ContractListController($http) {
           var self = this;
           self.orderProp = 'no';

           $http.get('data/users.json').then(function (response) {
               self.userlist = response.data;
           });
       }]
        */
        controller: ['Brothers',
            function ContractListController(Brothers) {
                this.userlist = Brothers.query();
                this.orderProp = 'no';
                console.log('userlist length:' + this.userlist.length);
            }
        ]

    })
    .component('contactDetail', {

        templateUrl: 'templates/contact_detail.html',

    

        controller: ['$stateParams', 'Brothers',
            function ContactDetailController($stateParams, Brothers) {
                var self = this;

                console.log("$stateParams.no :" + $stateParams.no);

                self.reset = function () {

                    console.log("[reset()] $stateParams.no" + $stateParams.no);

                    self.user = Brothers.get({
                        no: $stateParams.no
                    }, function (user) {
                        self.main_image(user.images[0]);
                    });
                };

                self.main_image = function main_image(imgurl) {
                    self.main_imageURL = imgurl;
                };


                self.reset();
          }
        ]
      
    

        /*
        controller: ['$http', '$stateParams', '$filter','Brothers',
            function ContactDetailController($http, $stateParams, $filter, Brothers) {
                var self = this;

                //the main image
                self.main_image = function main_image(imgurl) {
                    self.main_imageURL = imgurl;
                };


               
                //set the detail info
                $http.get('data/users.json').then(function (response) {
                    console.log("$stateParams.no :" + $stateParams.no);
                    self.user = $filter('filter')(response.data, { no: $stateParams.no })[0];
                    self.main_image(self.user.images[0]);
                    console.log("JSON USER :" + self.user.name);
                });
            }
        ] */

       
    });
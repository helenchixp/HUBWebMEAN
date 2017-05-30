/*
about画面用Controller
*/

//define the module
//var hubWebApp = angular.module('HUBWebApp.about', []);

//define the controller on this module
angular.module('HUBWebApp.about', [])
    .controller('AboutController', function AboutController($scope) {

        $scope.list = [
            {
                name: 'Hulft-Hub(Client) Web Connect Demo',
                version: '0.0.1.A',
                comment: '接続許可ライセンス',
            }, {
                name: 'Hulft-Hub(Client)  Manager Web版 Demo',
                versio: '0.0.1.B',
                comment: 'Web試用版',
            }
        ];
    })
    .controller('About2Controller', function AboutController($scope) {

        $scope.list = [
            {
                name: 'Hulft-Hub2(Server) Web Connect Demo',
                version: '0.0.1.A',
                comment: '接続許可ライセンス',
            }, {
                name: 'Hulft-Hub2(Server)  Manager Web版 Demo',
                version: '0.0.1.B',
                comment: 'Web試用版',
            }, {
                name: 'Hulft-Hub2(Server)  Manager Web版 Demo',
                version: '0.0.1.C',
                comment: 'Test試用版',
            }
        ];
    })
    .component('encryptList', {
        template: 
        //can use HTML file in this.survey it after.
    '<ul>' +
    '   <li ng-repeat="encrypt in $ctrl.list">' +
    '       <i>{{encrypt.no}}</i>' +
    '       <b>{{encrypt.ciphertype}}</b>' +
    '   </li>' +
    '</ul>',
        controller: function EncryptListController() {
            this.list = [
                {
                    no: '1',
                    ciphertype:'AES'
                }, {
                    no: '2',
                    ciphertype:'RSA'
                }
            ];
        }
    });

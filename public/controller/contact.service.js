
angular.module('HUBWebApp.contact.service', ['ngResource'])
    .factory('Brothers', ['$resource',
        function ($resource) {
            return $resource('data/:no.json', {}, {
                query: {
                    method: 'GET',
                    params: { no: 'users' },
                    isArray: true,
                },
              
                get: {
                    method: 'GET',
                }
            });
            /*
            return $resource('data/:no.json', {}, {
                query: {
                    method: 'GET',
                    params: { no: 'users' },
                    isArray: true,
                },
                get: {
                    method: 'GET',
                }
            
            });
            */
        }
    ])
    /*
    .factory('Nito', ['$resource',
        function ($resource) {
            return $resource('/detail/:no', {}, {
                get: { cache: true, method: 'get' }
            });
        }
    ])*/
    /*
    .factory('Nito', function ($cacheFactory, $resource) {
        var User = $resource('/detail/:no', {}, {
            get: { cache: true, method: 'get' }
        });
        return User;
    })
    */
    ;
    
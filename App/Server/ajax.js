app.factory('ajax', function ($q, $http) {
    return {
        getajax: function (url, type) {
            var def = $q.defer();
            $http({
                url: url,
                method: 'get'||type
            }).then(function (result) {
                def.resolve(result);
            }, function (error) {
                def.reject(error);
            });
            return def.promise;
        }
    }
});
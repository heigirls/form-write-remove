var con = function (ajax) {
    return {
        getjson: function () {
            return ajax.getajax('http://localhost:8008/index');
        }
    }
};
con.$inject = ['ajax']
app.factory('json', con);
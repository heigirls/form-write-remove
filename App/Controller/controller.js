app.controller('controller', function (json, $scope, $state) {
    json.getjson().then(function (result) {
        $scope.data = result.data;
        // 初始化操作
        $scope.data[0].flag = true;
        $scope.pages = Math.ceil($scope.data.length  / $scope.num);
    });
    //每页个数
    $scope.num = 3;
    // 每页开始的下标
    $scope.index = 0;
    // 前往n页
    $scope.pageChange =  function (page) {
        $scope.index = (page - 1) * $scope.num
        $scope.data.forEach(function (item, index) {
            item.flag = false;
        });
        $scope.data[page - 1].flag = true;
    }
    // 复选框
    $scope.inpCheck = function (index) {
        $scope.data[index].inpflag = !$scope.data[index].inpflag;
        $('tbody :checkbox').eq(index).prop('checked', $scope.data[index].inpflag);
    }
    // 编辑
    $scope.write = function (index) {
        if ($scope.data[index].inpflag) {
            $('tbody tr').eq(index).find('input[type="text"]').eq(0).trigger('focus');
        }
    }
    // 保存
    $scope.cun = function (index) {
        var inp = $('tbody tr').eq(index).find('input[type="text"]');
        $scope.data[index].loginname = inp.eq(0).val();
        $scope.data[index].name = inp.eq(1).val();
        $scope.data[index].status = inp.eq(2).val();
        $scope.data[index].QQ = inp.eq(3).val();
        $scope.data[index].ji = inp.eq(4).val();
    }
    // 删除
    $scope.remove = function (index) {
        if ($scope.data[index].inpflag) {
            $scope.data.splice(index, 1);
            $scope.pages = Math.ceil($scope.data.length  / $scope.num);
            $scope.data[0].flag = true;
        }
    }
    // 分页器发生改变
    $scope.change =  function (ind) {
        $scope.index = ind * $scope.num;
        $scope.data.forEach(function (item, index) {
            item.flag = false;
        });
        $scope.data[ind].flag = true;
    }
});
/**
 * Created by Master on 2016/11/30.
 */
var app2=angular.module("app2",[]);
app2.controller("secondCtrl",["$scope",function($scope){
    $scope.name="xiaoming2";
}])
app2.controller("thirdCtrl",["$scope",function($scope){
    $scope.name="xiaoming3";
}])
/*global angular*/
'use strict';

angular.module('testModule', ['ui.colorpicker'])
     .controller('testController', ['$scope', function ($scope) {
        $scope.colors = [{
            'name' : 'red',
            'hex' : '#ff0000'
        }, {
            'name' : 'green',
            'hex' : '#CC0066'
        }, {
            'name' : 'green',
            'hex' : '#66FF66'
        }, {
            'name' : 'green',
            'hex' : '#66CCFF'
        }, {
            'name' : 'green',
            'hex' : '#FFCC99'
        }, {
            'name' : 'green',
            'hex' : '#CC00FF'
        }, {
            'name' : 'green',
            'hex' : '#FF9933'
        }, {
            'name' : 'green',
            'hex' : '#99FF99'
        }, {
            'name' : 'green',
            'hex' : '#00FFFF'
        }];

        $scope.color = $scope.colors[0];
    }]);
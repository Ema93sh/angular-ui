/*global angular*/
'use strict';

angular.module('ui.colorpicker', [])
    .controller('ColorPickerControlller', ['$scope', function ($scope) {
        $scope.addColor = function (color) {
            $scope.availableColors.push(color);
        };

        $scope.removeColor = function (color) {
            var index = $scope.availableColors.indexOf(color);
            $scope.availableColors.splice(index, 1);
        };

        $scope.isSelected = function (color) {
            if (color === $scope.selectedColor) {
                return true;
            }
            return false;
        };

        $scope.changeColor = function (color) {
            $scope.selectedColor = color;
            $scope.isOpen = false;
        };

        $scope.otherColors = function () {
            var result = [];
            angular.forEach($scope.availableColors, function (color) {
                if (color !== $scope.selectedColor) {
                    result.push(color);
                }
            });
            return result;
        };
    }])
    .directive('colorPicker', function () {
        return {
            restrict: 'E',
            scope: {
                availableColors: '=availableColors',
                selectedColor: '=selectedColor'
            },
            templateUrl: 'partials/colorpicker.html',
            controller: 'ColorPickerControlller'
        };
    });
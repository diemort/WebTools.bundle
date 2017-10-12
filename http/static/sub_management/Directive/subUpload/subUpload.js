﻿angular.module('webtools').directive('subUpload', ['webtoolsService', 'DialogFactory', 'subService', function (webtoolsService, DialogFactory, subService) {
    return {
        restrict: 'E',
        scope: { detail: '=', show: '='},
        template: '<div class="fa fa-upload"></div>',
        link: function (scope, element, attr) {
            var src = "static/sub_management/Directive/subUpload/subUpload.html";
            var dialog = new DialogFactory();
            dialog.create(src, "subUploadController", scope);

            element.on('click', function (event) {
                event.preventDefault();
                dialog.show();
            });
        }
    };
}]);
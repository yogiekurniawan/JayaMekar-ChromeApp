'use strict';

angular.module('appDirective', [])

.directive('ykWindow', ['$window',
    function($window) {
        return function($scope) {
            $scope.initializeWindowSize = function() {
                $scope.windowWidth = $window.innerWidth;
                $scope.windowHeight = $window.innerHeight;
            };
            angular.element($window).bind('resize', function() {
                $scope.initializeWindowSize();
                $scope.$apply();
            });
            $scope.initializeWindowSize();
        };
    }
])

// Referensi :
// http://microblog.anthonyestebe.com/2013-11-30/window-resize-event-with-angular/

.directive('ykNavbar', function() {

    function ykNavbarLinkFn(scope, element, attrs) {
        if (angular.isDefined(attrs.fixedTop)) element.addClass('navbar-fixed-top');
        if (angular.isDefined(attrs.fixedBottom)) element.addClass('navbar-fixed-bottom');
    }

    return {
        templateUrl: 'template/navbar/yk-navbar.html',
        restrict: 'E',
        scope: {
            brand: '='
        },
        replace: true,
        transclude: true,
        controller: function($scope) {
            var listMenu = $scope.listMenu = [];
            this.menu = function(menu) {
                listMenu.push(menu);
            };
        },
        link: ykNavbarLinkFn
    };
})

.directive('ykMenuList', function() {

    function ykMenuListLinkFn(scope, element, attrs, ykNavbarCtrl) {
        if (angular.isDefined(attrs.nav)) element.addClass("navbar-nav");
        if (angular.isDefined(attrs.right)) element.addClass("navbar-right");

        // ykNavbarCtrl.menu(scope.menu);
    }

    return {
        templateUrl: 'template/menu/yk-menu-list.html',
        restrict: 'E',
        scope: {
            menu: '='
        },
        replace: true,
        require: '^ykNavbar',
        link: ykMenuListLinkFn
    };
})

.directive('ykSidebar', function() {

    function ykSidebarLinkFn(scope, element, attrs) {

        // menjalankan mentis menu untuk sidebar
        // membutuhkan src : jquery.js, bootstrap.js, mentisMenu.js
        $(function() {
            $('#side-menu').metisMenu();
        });
    }

    return {
        templateUrl: 'template/sidebar/yk-sidebar.html',
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            filter: "="
        },
        link: ykSidebarLinkFn
    };
})

.directive('ykWrapper', function() {

    function ykWrapperLink(scope, element, attrs) {

        // binding perubahan ukuran window
        attrs.$observe('windowWidth', function(newValue) {
            if (newValue < 925) {
                element.removeClass('with-sidebar');
                scope.ykToggleSidebar = false;
            } else {
                element.addClass('with-sidebar');
                scope.ykToggleSidebar = true;
            }
        });

        scope.$watch('ykToggleSidebar', function(newValue) {
            if (newValue) {
                element.addClass('with-sidebar');
            } else {
                element.removeClass('with-sidebar');
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: 'template/wrapper/yk-wrapper.html',
        transclude: true,
        replace: true,
        scope: {
            ykToggleSidebar: '='
        },
        link: ykWrapperLink
    };
})

.directive('ykWrapperContent', function(){

    return {
        scope: {},
        restrict: 'E',
        templateUrl: 'template/wrapper/yk-wrapper-content.html',
        replace: true,
        transclude: true,
    };
});

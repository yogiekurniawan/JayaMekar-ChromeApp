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
        link: function ykNavbarLinkFn(scope, element, attrs) {
            if (angular.isDefined(attrs.fixedTop)) element.addClass('navbar-fixed-top');
            if (angular.isDefined(attrs.fixedBottom)) element.addClass('navbar-fixed-bottom');
        }
    };
})

.directive('ykMenuList', function() {
    return {
        templateUrl: 'template/menu/yk-menu-list.html',
        restrict: 'E',
        scope: {
            menu: '='
        },
        replace: true,
        require: '^ykNavbar',
        link: function(scope, element, attrs, ykNavbarCtrl) {
            if (angular.isDefined(attrs.nav)) element.addClass("navbar-nav");
            if (angular.isDefined(attrs.right)) element.addClass("navbar-right");

            // ykNavbarCtrl.menu(scope.menu);
        }
    };
})

.directive('ykSidebar', function() {
    return {
        templateUrl: 'template/sidebar/yk-sidebar.html',
        restrict: 'E',
        replace: true,
        link: function(scope, element, attrs) {

            // menjalankan mentis menu untuk sidebar
            // membutuhkan src : jquery.js, bootstrap.js, mentisMenu.js
            $(function() {
                $('#side-menu').metisMenu();
            });

        }
    };
})

.directive('ykToggleSidebar', function() {

    function ykToggleSidebarLink(scope, element, attrs) {

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
        restrict: 'A',
        scope: {
            ykToggleSidebar: '='
        },
        link: ykToggleSidebarLink
    };
});

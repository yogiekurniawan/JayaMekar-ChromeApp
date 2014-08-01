'use strict';

angular.module('appCtrl', [])

// RootCtrl as root
.controller('RootCtrl', ['brandVal', 'menuNavLeftVal', 'menuNavRightVal',
    function(brandVal, menuNavLeftVal, menuNavRightVal) {
        this.brand = brandVal;
        this.menuNavLeft = menuNavLeftVal;
        this.menuNavRight = menuNavRightVal;
    }
])

// HomeCtrl as home
.controller('HomeCtrl', function() {
    this.withSidebar = true;
    this.toggleSidebar = function() {
        this.withSidebar = !this.withSidebar;
    };
});

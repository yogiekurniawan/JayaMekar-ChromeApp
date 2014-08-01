'use strict';

angular.module('appValue', [])

.value('brandVal', {
    nama: 'Nama Aplikasi',
    icon: 'Icon Aplikasi'
})

.value('menuNavLeftVal', [{
    href: 'main',
    menu: 'Home',
    ngClass: 'fa fa-home'
}, {
    href: 'eksperimen',
    menu: 'Eksperimen',
    ngClassD: 'caret',
    dropdown: true,
    submenu: [{
        href: 'eksperimen.yk-table',
        submenu: 'yk-table',
        ngClass: 'glyphicon glyphicon-wrench'
    }]
}])

.value('menuNavRightVal', [{
    href: 'main',
    menu: 'Home',
    ngClass: 'fa fa-home'
}]);

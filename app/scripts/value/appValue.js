'use strict';

angular.module('appValue', [])

.value('brandVal', {
    nama: 'Nama Aplikasi',
    icon: 'Icon Aplikasi'
})

.value('menuNavLeftVal', [{
    href: 'home',
    menu: 'Home',
    ngClass: 'fa fa-home'
}, {
    href: 'jabatan',
    menu: 'Jabatan',
    ngClass: ''
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

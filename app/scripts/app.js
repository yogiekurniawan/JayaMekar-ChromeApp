'use strict';

angular.module('jayamekar', [
    'ui.bootstrap',
    'ui.router',
    'appCtrl',
    'appDirective',
    'appValue'
])

.config([
    '$compileProvider',
    function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
        // http://stackoverflow.com/questions/15606751/angular-changes-urls-to-unsafe-in-extension-page
    }
])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl as home'
            })
            .state('jabatan', {
                url: '/jabatan',
                templateUrl: 'views/jabatan.html',
                controller: 'JabatanCtrl as jabatan'
            })
            .state('karyawan', {
                url: '/karyawan',
                templateUrl: 'views/karyawan/karyawan.html',
                controller: 'KaryawanCtrl as karyawan'
            })
            .state('rumus-gaji', {
                url: '/rumus-gaji',
                templateUrl: 'views/rumus-gaji/rumus-gaji.html',
                controller: 'RumusGajiCtrl as rg'
            })
            .state('rumus-gaji.karyawan-tenun', {
                url: '/karyawan-tenun',
                templateUrl: 'views/rumus-gaji/rumus-gaji-karyawan-tenun.html',
                controller: 'RumusGajiKaryawanTenunCtrl as rgKaryawanTenun'
            })
            .state('rumus-gaji.karyawan-harian', {
                url: '/karyawan-harian',
                templateUrl: 'views/rumus-gaji/rumus-gaji-karyawan-harian.html',
                controller: 'RumusGajiKaryawanHarianCtrl as rgKaryawanHarian'
            })
            .state('transaksi', {
                url: '/transaksi',
                templateUrl: 'views/transaksi/transaksi.html',
                controller: 'TransaksiCtrl as transaksi'
            })
            .state('transaksi.karyawan-tenun', {
                templateUrl: 'views/transaksi/karyawan-borongan/transaksi-karyawan-tenun.html',
                controller: 'TransaksiKaryawanTenunCtrl'
            })
            .state('transaksi.karyawan-harian', {
                url: '/karyawan-harian',
                templateUrl: 'views/transaksi/karyawan-harian/transaksi-karyawan-harian.html',
                controller: 'TransaksiKaryawanHarianCtrl'
            })
            .state('info', {
                url: '/info',
                templateUrl: 'views/info.html',
                controller: 'InfoCtrl'
            })
            .state('info.recycle', {
                url: '/recycle',
                templateUrl: 'views/recycle.html',
                controller: 'RecycleCtrl'
            })
            .state('info.about-me', {
                url: '/about-me',
                templateUrl: 'views/about-me.html',
                controller: 'AboutMeCtrl'
            })
            .state('info.about-app', {
                url: '/about-app',
                templateUrl: 'views/about-app.html',
                controller: 'AboutAppCtrl'
            })
            .state('template', {
                url: '/template',
                templateUrl: 'views/template.html',
                controller: 'TemplateCtrl as template'
            })
            .state('template.tables', {
                url: '/tables',
                templateUrl: 'views/template/tables.html',
                controller: 'TablesCtrl as tables'
            });
    }
]);

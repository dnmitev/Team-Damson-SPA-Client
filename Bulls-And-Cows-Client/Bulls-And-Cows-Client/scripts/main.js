/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        // stop caching js files
        //urlArgs: "bust=" + (new Date()).getTime(),
        waitSeconds: 10,
        paths: {
            // libs
            'jquery': '../libs/jquery-2.1.1',
            'q': '../libs/q',
            'mustache': '../libs/mustache',
            'sammy': '../libs/sammy-0.7.4',
            'underscore': '../libs/underscore',
            'mocha': '../libs/mocha.js',
            'chai': '../libs/chai.js',
            'cryptojs': '../libs/sha1',

            // modules
            'requester': '../modules/http-requester',
            'templater': '../modules/template-engine',
            'view': '../modules/view-loader',
            'storage': '../modules/storage-module',
            'user': '../modules/user-module',

            // controllers
            'get-posts': '../controllers/get-posts-controller',
            'login': '../controllers/login-controller',
            'register': '../controllers/register-controller',

            // helpers
            'modules': 'module-loader',
            'config': 'config'
        }
    });

    require(['jquery'], function () {
        require(['sammy', 'config', 'view', 'templater'], function (sammy, config, view) {
            var app = sammy(config.mainCointainer, function () {
                //this.get('#/', function () {
                //    require(['get-posts'], function (posts) {
                //        posts.getAll();
                //        // TODO : sorting!!!!
                //    });
                //});

                this.get('#/login', function () {
                    require(['login'], function (login) {
                        login.login();
                    });
                });

                this.get('#/register', function () {
                    require(['register'], function (register) {
                        register.register();
                    });
                });
            });

            app.run('#/');
        });
    });
}());
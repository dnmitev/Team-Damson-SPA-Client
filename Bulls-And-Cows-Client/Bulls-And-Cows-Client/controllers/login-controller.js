/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    function loginUser() {
        modules.view.load('login')
            .then(function () {
                $('#login-form').on('click', '#login-btn', function (ev) {
                    ev.preventDefault();

                    var $this = $(this),
                        username = $('#login-username').val(),
                        password = $('#login-password').val();

                    modules.user.login(username, password)
                        .then(function () {
                            getUserInfo();
                        });
                });
            });
    }

    function getUserInfo() {
        $('#user-data').show();
    }

    return {
        login: loginUser
    };
});
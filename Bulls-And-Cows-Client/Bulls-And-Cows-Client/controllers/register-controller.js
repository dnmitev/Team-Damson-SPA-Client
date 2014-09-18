/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {

    "use strict";    

    function registerUser() {
        modules.view.load('register')
            .then(function () {
                $('#register-form').on('click', '#register-btn', function (ev) {
                    ev.preventDefault();

                    var $this = $(this),
                        username = $('#register-username').val(),
                        password = $('#register-password').val();

                    if (!isValidUsername(username)) {
                        alert('Invalid username.');
                        return;
                    }

                    modules.user.register(username, password)
                        .then(function () {
                            getUserInfo();
                        });
                });
            });
    }

    function isValidUsername(username) {
        if (!username) {
            return false;
        } else if (typeof (username).toLowerCase() !== 'string') {
            return false;
        } else if (6 > username.length || username.length > 40) {
            return false;
        }

        return true;
    }

    function getUserInfo() {
        $('#user-data').show();
    }

    return {
        register: registerUser
    };
});
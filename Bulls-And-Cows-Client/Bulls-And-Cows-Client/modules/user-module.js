/// <reference path="../scripts/_references.js" />
define(['requester', 'config', 'storage', 'cryptojs'], function (requester, config, storager) {

    "use strict";

    var url = config.apiURL;

    function login(email, password) {
        var data = {
            username: email,
            password: CryptoJS.SHA1(password).toString(),
            grant_type: 'password'
        };

        return requester.postJSON(url + "Token", data, 'application/x-www-form-urlencoded')
            .then(function (result) {
                console.log(result);
                storager.set('token', result.data.access_token);
                storager.set('username', username);
            });
    }

//"Email": "sample string 1",
//"Password": "sample string 2",
//"ConfirmPassword": "sample string 3",
//"FirstName": "sample string 4",
//"LastName": "sample string 5",
//"AvatarUrl": "sample string 6"

    function register(email, password, firstName, lastName, avatarUrl) {
        var data = {
            email: email,
            password: CryptoJS.SHA1(password).toString(),
            confirmPassword: CryptoJS.SHA1(password).toString(),
            FirstName: firstName,
            LastName: lastName,
            AvatarUrl: avatarUrl
        };

        return requester.postJSON(url + 'api/Account/Register', data)
            .then(function () {
                alert('Successful registration!');
            }, function (err) {
                console.log(err);
            });
    }

    function logout() {
        return requester.put(url + "api/Account/Logout", storager.get("token"))
            .then(function () {
                storager.remove("token");
                storager.remove("username");
            });
    }

    function isLoggedIn() {
        return storager.get("username") !== null;
    }

    function getCurrentUser() {
        return {
            username: storager.get("username"),
            sessionKey: storager.get("token")
        };
    }

    return {
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getCurrent: getCurrentUser
    };
});
/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    var url = modules.config.apiURL + 'post',
        messages = [];

    function getAllPosts() {
        modules.view.load('home')
            .then(function () {
                modules.request.getJSON(url)
                    .then(function (data) {
                        messages = data.data;
                        $('#posts-container').executeTemplate(messages);
                    });
            });
    }

    return {
        getAll: getAllPosts
    };
});
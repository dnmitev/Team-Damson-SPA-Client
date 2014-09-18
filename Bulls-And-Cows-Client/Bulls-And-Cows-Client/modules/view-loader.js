/// <reference path="../scripts/_references.js" />
define(['jquery', 'q', 'config'], function ($, Q, config) {
    "use strict";

    function load(file) {
        var deferred = Q.defer();

        $(config.mainCointainer).load(config.templatesPath + file + '.html', function () {
            deferred.resolve();
        });

        return deferred.promise;
    }

    return {
        load: load
    };
});
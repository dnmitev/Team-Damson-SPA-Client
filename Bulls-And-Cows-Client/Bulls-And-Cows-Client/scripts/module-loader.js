/// <reference path="_references.js" />
define(['requester', 'templater', 'view', 'config', 'storage','user'], function (requester, templater, viewEngine, configuration, storager, user) {
    "use strict";

    return {
        request: requester,
        template: templater,
        view: viewEngine,
        config: configuration,
        storager: storager,
        user: user,
        redirect: function (newLocation) {
            window.location.hash = newLocation;
        }
    };
});
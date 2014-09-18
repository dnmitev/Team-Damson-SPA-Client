/// <reference path="../scripts/_references.js" />
define(['jquery', 'mustache'], function ($, Mustache) {
    "use strict";

    return $.fn.executeTemplate = function (data) {
        var $this = $(this),
            templateId = $this.data('template'),
            templateCode = $('#' + templateId),
            templateHtml = templateCode.html(),
            rendered,
            i, len;

        Mustache.parse(templateHtml);

        for (i = 0, len = data.length; i < len; i += 1) {
            rendered = Mustache.render(templateHtml, data[i]);
            $this.append(rendered);
        }

        return $this;
    };
});
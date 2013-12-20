require.config({
    // baseUrl: '',

    paths: {
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
            '../bower_components/jquery/jquery'
        ],
        paginator: '../bower_components/backbone.paginator/lib/backbone.paginator',
        modernizr: '../bower_components/modernizr/modernizr.js',

        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs.text/text',

        foundation: '../bower_components/foundation/js/foundation/foundation',
        "foundation.abide": "../bower_components/foundation/js/foundation/foundation.abide",
        "foundation.accordion": "../bower_components/foundation/js/foundation/foundation.accordion",
        "foundation.alert": "../bower_components/foundation/js/foundation/foundation.alert",
        "foundation.clearing": "../bower_components/foundation/js/foundation/foundation.clearing",
        "foundation.dropdown": "../bower_components/foundation/js/foundation/foundation.dropdown",
        "foundation.interchange": "../bower_components/foundation/js/foundation/foundation.interchange",
        "foundation.joyride": "../bower_components/foundation/js/foundation/foundation.joyride",
        "foundation.magellan": "../bower_components/foundation/js/foundation/foundation.magellan",
        "foundation.offcanvas": "../bower_components/foundation/js/foundation/foundation.offcanvas",
        "foundation.orbit": "../bower_components/foundation/js/foundation/foundation.orbit",
        "foundation.reveal": "../bower_components/foundation/js/foundation/foundation.reveal",
        "foundation.tab": "../bower_components/foundation/js/foundation/foundation.tab",
        "foundation.tooltip": "../bower_components/foundation/js/foundation/foundation.tooltip",
        "foundation.topbar": "../bower_components/foundation/js/foundation/foundation.topbar"
    },

    shim: {
        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        paginator: {
            exports: 'Backbone.Paginator',
            deps: ['backbone']
        },

        handlebars: {
            exports: "Handlebars"
        },

        foundation: {
            deps: ["jquery"]
        },
        "foundation.abide": {
            deps: ["foundation"]
        },
        "foundation.accordion": {
            deps: ["foundation"]
        },
        "foundation.alert": {
            deps: ["foundation"]
        },
        "foundation.clearing": {
            deps: ["foundation"]
        },
        "foundation.dropdown": {
            deps: ["foundation"]
        },
        "foundation.interchange": {
            deps: ["foundation"]
        },
        "foundation.joyride": {
            deps: ["foundation"]
        },
        "foundation.magellan": {
            deps: ["foundation"]
        },
        "foundation.offcanvas": {
            deps: ["foundation"]
        },
        "foundation.orbit": {
            deps: ["foundation"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
        "foundation.tab": {
            deps: ["foundation"]
        },
        "foundation.tooltip": {
            deps: ["foundation"]
        },
        "foundation.topbar": {
            deps: ["foundation"]
        }
    },

    deps: ['jquery', 'underscore']
});

require([
    'app',
    'jquery',
    'underscore',
    'backbone',
    "foundation.abide",
    "foundation.accordion",
    "foundation.alert",
    "foundation.clearing",
    "foundation.dropdown",
    "foundation.interchange",
    "foundation.joyride",
    "foundation.magellan",
    "foundation.offcanvas",
    "foundation.orbit",
    "foundation.reveal",
    "foundation.tab",
    "foundation.tooltip",
    "foundation.topbar"
], function (app, $, _, Backbone) {
    'use strict';

    // new Router({
    //     controller: Controller
    // });

    Backbone.history.start();

    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation();
});

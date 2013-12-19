/*global Backbone */
'use strict';

var app = new Backbone.Marionette.Application();

app.addRegions({
    main: '#main',
    pagination: '#pagination'
});

app.on('initialize:after', function () {
    Backbone.history.start();
});

$(function () {
    // start the TodoMVC app (defined in js/TodoMVC.js)
    app.start();
});

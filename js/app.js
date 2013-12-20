//Top-level namespaces for our code
define([
    'collections/PaginatedCollection',
    'views/AppView',
    'views/PaginationView'
], function (PaginatedCollection, AppView, PaginationView) {

    var app = {};
    app.collections = {};
    app.models = {};
    app.views = {};
    app.mixins = {};

    app.collections.paginatedItems = new PaginatedCollection();
    app.views.app = new AppView({
        collection: app.collections.paginatedItems
    });
    app.views.pagination = new PaginationView({
        collection: app.collections.paginatedItems
    });

    return app;
});

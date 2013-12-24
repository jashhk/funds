//Top-level namespaces for our code
define([
    'collections/PaginatedCollection',
    'views/AppView',
    'views/PaginationView',
    'views/ModalView'
], function (PaginatedCollection, AppView, PaginationView, ModalView) {
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
    app.views.modal = new ModalView();

    window.app = app;
    return app;
});

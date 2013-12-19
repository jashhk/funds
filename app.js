/*global define */

define([
    'marionette',
    'collections/TodoList',
    'views/Header',
    'views/TodoListCompositeView',
    'views/Pagination'
], function (Marionette, TodoList, Header, TodoListCompositeView, Pagination) {
    'use strict';

    var app = new Marionette.Application();
    var todoList = new App.Todos.PaginatedCollection();

    var viewOptions = {
        collection: todoList
    };

    var main = new TodoListCompositeView(viewOptions);
    var pagination = new Pagination(viewOptions);

    app.addRegions({
        main: '#main',
        pagination: '#pagination'
    });

    app.addInitializer(function () {
        app.main.show(main);
        app.pagination.show(pagination);

        todoList.fetch();
    });

    app.listenTo(todoList, 'all', function () {
        app.main.$el.toggle(todoList.length > 0);
        app.pagination.$el.toggle(todoList.length > 0);
    });

    app.vent.on('todoList:filter', function (filter) {
        pagination.updateFilterSelection(filter);

        document.getElementById('todoapp').className = 'filter-' + (filter === '' ? 'all' : filter);
    });

    app.vent.on('todoList:clear:completed', function () {
        todoList.getCompleted().forEach(function (todo) {
            todo.destroy();
        });
    });

    return window.app = app;
});

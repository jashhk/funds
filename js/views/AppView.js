/*global TodoMVC */
'use strict';

app.module('TodoList', function (TodoList, App, Backbone, Marionette, $, _) {
    // TodoList Router
    // ---------------
    //
    // Handle routes to show the active vs complete todo items
    TodoList.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '*filter': 'filterItems'
        }
    });

    // TodoList Controller (Mediator)
    // ------------------------------
    //
    // Control the workflow and logic that exists at the application
    // level, above the implementation detail of views and models
    TodoList.Controller = function () {
        this.todoList = new App.Todos.PaginatedCollection();
    };

    _.extend(TodoList.Controller.prototype, {
        // Start the app by showing the appropriate views
        // and fetching the list of todo items, if there are any
        start: function () {
            this.showPagination(this.todoList);
            this.showTodoList(this.todoList);
            this.todoList.fetch();
        },

        showPagination: function (todoList) {
            var pagination = new App.Layout.PaginatedView({
                collection: todoList
            });

            App.pagination.show(pagination);
        },

        showTodoList: function (todoList) {
            App.main.show(new TodoList.Views.AppView({
                collection: todoList
            }));
        },

        // Set the filter to show complete or all items
        filterItems: function (filter) {
            App.vent.trigger('todoList:filter', (filter && filter.trim()) || '');
        }
    });

    // TodoList Initializer
    // --------------------
    //
    // Get the TodoList up and running by initializing the mediator
    // when the the application is started, pulling in all of the
    // existing Todo items and displaying them.
    TodoList.addInitializer(function () {
        var controller = new TodoList.Controller();
        controller.router = new TodoList.Router({
            controller: controller
        });

        controller.start();
    });
});

/*global TodoMVC */
'use strict';

app.module('TodoList.Views', function (Views, App, Backbone, Marionette, $) {
    // Todo List Item View
    // -------------------
    //
    // Display an individual todo item, and respond to changes
    // that are made to the item, including marking completed.
    Views.ResultView = Marionette.ItemView.extend({
        tagName: 'li',
        template: '#resultItemTemplate',

        // ui: {
        //     edit: '.edit'
        // },

        // events: {
        //     'click .destroy': 'destroy',
        //     'dblclick label': 'onEditClick',
        //     'keydown .edit': 'onEditKeypress',
        //     'focusout .edit': 'onEditFocusout',
        //     'click .toggle': 'toggle'
        // },

        modelEvents: {
            'change': 'render',
            'remove': 'remove'
        },

        // onRender: function () {
        //     this.$el.removeClass('active completed');

        //     if (this.model.get('completed')) {
        //         this.$el.addClass('completed');
        //     } else {
        //         this.$el.addClass('active');
        //     }
        // },
    });

    // Item List View
    // --------------
    //
    // Controls the rendering of the list of items, including the
    // filtering of activs vs completed items for display.
    Views.AppView = Backbone.Marionette.CompositeView.extend({
        template: '#template-todoListCompositeView',
        itemView: Views.ResultView,
        itemViewContainer: '#content',

        // ui: {
        //     toggle: '#toggle-all'
        // },

        // events: {
        //     'click #toggle-all': 'onToggleAllClick'
        // },

        collectionEvents: {
            'all': 'render'
        },

        // onRender: function () {
        //     this.update();
        // },

    });

    // Application Event Handlers
    // --------------------------
    //
    // Handler for filtering the list of items by showing and
    // hiding through the use of various CSS classes
    App.vent.on('todoList:filter', function (filter) {
        filter = filter || 'all';
        $('#todoapp').attr('class', 'filter-' + filter);
    });
});

/*global define */

define([
    'marionette',
    'templates'
    // 'views/ActiveCount',
    // 'views/CompletedCount'
// ], function (Marionette, templates, ActiveCount, CompletedCount) {
], function (Marionette, templates) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'aside',

        template: templates.pagination,

        // UI bindings create cached attributes that
        // point to jQuery selected objects
        ui: {
            filters: '#filters a'
        },

        events: {
            'click a.servernext': 'nextResultPage',
            'click a.serverprevious': 'previousResultPage',
            'click a.orderUpdate': 'updateSortBy',
            'click a.serverlast': 'gotoLast',
            'click a.page': 'gotoPage',
            'click a.serverfirst': 'gotoFirst',
            'click a.serverpage': 'gotoPage',
            'click .serverhowmany a': 'changeCount'
        },

        collectionEvents: {
            'reset': 'render',
            'sync': 'render'
        },

        templateHelpers: {
            activeCountLabel: function () {
                return (this.activeCount === 1 ? 'item' : 'items') + ' left';
            }
        },

        initialize: function () {
            // this.listenTo(window.app.vent, 'todoList:reset', this.render, this);
            // this.listenTo(window.app.vent, 'todoList:sync', this.render, this);
        },

        serializeData: function () {
            return this.collection.info();
        },

        // onRender: function () {
        //     this.$el.parent().toggle(this.collection.length > 0);
        //     this.updateFilterSelection();
        // },

        updateSortBy: function (e) {
            e.preventDefault();
            var currentSort = $('#sortByField').val();
            this.collection.updateOrder(currentSort);
        },

        nextResultPage: function (e) {
            e.preventDefault();
            this.collection.requestNextPage();
        },

        previousResultPage: function (e) {
            e.preventDefault();
            this.collection.requestPreviousPage();
        },

        gotoFirst: function (e) {
            e.preventDefault();
            this.collection.goTo(this.collection.information.firstPage);
        },

        gotoLast: function (e) {
            e.preventDefault();
            this.collection.goTo(this.collection.information.lastPage);
        },

        gotoPage: function (e) {
            e.preventDefault();
            var page = $(e.target).text();
            this.collection.goTo(page);
        },

        changeCount: function (e) {
            e.preventDefault();
            var per = $(e.target).text();
            this.collection.howManyPer(per);
        }

    });
});

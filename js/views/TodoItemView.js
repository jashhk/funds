/*global define */

define([
	'marionette',
	'templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({
        tagName: 'li',
        template: templates.todoItemView,

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
});

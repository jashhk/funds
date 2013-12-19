/*global define */

define([
	'marionette',
	'templates',
	'views/TodoItemView'
], function (Marionette, templates, ItemView) {
	'use strict';

	return Marionette.CompositeView.extend({
        template: templates.todosCompositeView,
        itemView: ItemView,
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
});

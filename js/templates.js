/*global define */

define(function (require) {
    'use strict';

    return {
        todoItemView: require('tpl!templates/todoItemView.tmpl'),
        todosCompositeView: require('tpl!templates/todoListCompositeView.tmpl'),
        pagination: require('tpl!templates/pagination.tmpl')
    };
});

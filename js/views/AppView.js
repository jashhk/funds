define([
    'jquery',
    'backbone',
    'views/ResultView'
], function ($, Backbone, ResultView) {

    return Backbone.View.extend({
        el: '#content',

        initialize: function () {

            var tags = this.collection;

            tags.on('add', this.addOne, this);
            tags.on('all', this.render, this);

            tags.pager();
        },

        addOne: function (item) {
            var view = new ResultView({
                model: item
            });
            $('#content').append(view.render().el);
        },

        render: function () {}
    });

});

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#resultItemTemplate').html()),

        initialize: function () {
            this.model.bind('change', this.render, this);
            this.model.bind('remove', this.remove, this);
        },

        render: function () {
            var data = _.defaults({
                id: this.model.cid
            }, this.model.toJSON());
            this.$el.html(this.template(data));
            return this;
        }
    });

});

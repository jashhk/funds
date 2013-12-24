define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone, app) {

    return Backbone.View.extend({
        className: 'content',
        template: _.template($('#modalTemplate').html()),
        model: new Backbone.Model(),

        initialize: function () {
            this.model.bind('reset', this.render, this);
            this.model.bind('change', this.render, this);

            this.$el.appendTo('#modal');
            this.modal = $('#modal');
        },

        render: function () {
            var data = {};
            if (!_.isUndefined(this.model)) {
                data = _.defaults({
                    id: this.model.cid
                }, this.model.toJSON());
            }
            this.$el.html(this.template(data));
            // this.$el.data('id', data.id);
            // this.fadeIn(this.$el);
            // this.$el.hide().fadeIn().slideDown();

            return this;
        },

        close: function () {
            this.modal.foundation('reveal', 'close');
        },

        open: function () {
            this.modal.foundation('reveal', 'open');
        }
        // fadeIn: function (wrapper) {
        //     wrapper.is(':hidden') ?
        //         wrapper.show('slow') :
        //         wrapper.hide('slow', function () {
        //             wrapper.show('slow')
        //         });
        // }
    });

});

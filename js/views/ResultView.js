define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({
        events: {
            'click .result': 'viewDetail',
        },
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
            // this.$el.data('id', data.id);
            // this.fadeIn(this.$el);
            this.$el.hide().fadeIn().slideDown();
            return this;
        },

        // fadeIn: function (wrapper) {
        //     wrapper.is(':hidden') ?
        //         wrapper.show('slow') :
        //         wrapper.hide('slow', function () {
        //             wrapper.show('slow')
        //         });
        // }

        viewDetail: function (e) {
            e.preventDefault();
            var self = $(e.currentTarget),
                id = self.data('id'),
                modal = window.app.views.modal;

            modal.model = this.model;
            
            // console.log(this.model.cid);
            modal.render().open();
        }
    });

});

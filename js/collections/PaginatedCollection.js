define(['paginator', 'models/Item'], function (Paginator, Item) {

    // Create a new collection using one of Backbone.Paginator's
    // pagers. We're going to begin using the requestPager first.

    return Paginator.requestPager.extend({

        // As usual, let's specify the model to be used
        // with this collection
        model: Item,

        // We're going to map the parameters supported by
        // your API or backend data service back to attributes
        // that are internally used by Backbone.Paginator. 

        // e.g the GitHub API refers to it's parameter for 
        // stating how many results to skip ahead by as $skip
        // and it's number of items to return per page as $top

        // We simply map these to the relevant Paginator equivalents

        // Note that you can define support for new custom attributes
        // adding them with any name you want

        paginator_core: {
            // the type of the request (GET by default)
            type: 'GET',

            // the type of reply (jsonp by default)
            dataType: 'json',

            // the URL (or base URL) for the service
            // url: 'https://api.github.com/repos/twbs/bootstrap/issues?'
            url: 'http://fundraising.one.gov.hk/fundraise_query/webservice/psi/json?'
        },

        paginator_ui: {
            // the lowest page index your API allows to be accessed
            firstPage: 1,

            // which page should the paginator start from 
            // (also, the actual page the paginator is on)
            currentPage: 1,

            // how many items per page should be shown
            perPage: 3,

            // a default number of total pages to query in case the API or 
            // service you are using does not support providing the total 
            // number of pages for us.
            // 10 as a default in case your service doesn't return the total
            totalPages: 10,

            totalRecords: 1
        },

        server_api: {
            // number of items to return per request/page
            'itemperpage': function () {
                return this.perPage
            },

            // how many results the request should skip ahead to
            'page': function () {
                return this.currentPage
            },

            // field to sort by
            'orderby': function () {
                if (this.sortField === undefined)
                    return 'created';
                return this.sortField;
            },

            // custom parameters
            // 'callback': '?'
        },

        parse: function (response) {
            // Normally this would be parsed from the response,
            // but GitHub doesn't make this readily available
            // this.totalRecords = this.totalPages * this.perPage;
            this.totalRecords = parseInt(response.totalRecordsSearched);
            this.currentPage = parseInt(response.currentPage);

            // Be sure to change this based on how your results
            // are structured (e.g response.data is GitHub specific)
            return response.activities;
        }

    });

});

define("collection", ["underscore", "backbone", "model", "note", "localstorage"], function(_, Backbone, m, viewNote) {	
	
	var Notes = Backbone.Collection.extend({
	    model: m.Note,
	    localStorage: new Backbone.LocalStorage("notes"),
	    initialize: function() {
        	this.on('add', this.updateNotes, this);
        	this.sortField = "name";
       		this.sortDirection = "ASC";
    	},
		setSortField: function (field, direction) {
		       this.sortField = field;
		       this.sortDirection = direction;
		},
		
		comparator: function (m) {
		       return m.get(this.sortField);
		},
		   // Overriding sortBy (copied from underscore and just swapping left and right for reverse sort)
		sortBy: function (iterator, context) {
		       var obj = this.models,
		           direction = this.sortDirection;
		
		       return _.pluck(_.map(obj, function (value, index, list) {
		           return {
		               value: value,
		               index: index,
		               criteria: iterator.call(context, value, index, list)
		           };
		       }).sort(function (left, right) {
		           // swap a and b for reverse sort
		           var a = direction === "ASC" ? left.criteria : right.criteria,
		               b = direction === "ASC" ? right.criteria : left.criteria;

           if (a !== b) {
               if (a > b || a === void 0) return 1;
               if (a < b || b === void 0) return -1;
           }
           return left.index < right.index ? -1 : 1;
       }), 'value');
   		},   	
    	updateNotes: function() {   	
    		new viewNote();
    		
    	},
		close: function() {
			this.undelegateEvents();
		}
	});

	return {
		Notes: Notes
	}

});
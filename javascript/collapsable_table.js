(function($){
	var methods = {
		init: function(options) {
			return this.each(
				function() {
					var $this = $(this);
					$('.children', $this).each(
						function() {
							var row = $(this);
							row.addClass('indent_' + (row.parents('.children').length + 1));
							row.children(':first-child').css('padding', '0').css('border', 'none');
							$('table tr td:first-child', row).addClass('indent');
							row.prev().children("tr > td:first-child").prepend("<a class='expandable arrow collapsed' style='cursor:pointer'>+</a>");
							row.find(":first-child table").css('margin', '0').addClass('collapsed_table').hide();
						}
					);
					$('a.expandable.arrow', $this).click(function() {
						$(this).toggleClass('expanded').toggleClass('collapsed');
						$(this).closest('tr').next('.children').find(".collapsed_table").toggle();
					});
				}
			);
		}
	};
	$.fn.collapsableTable = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.collapsableTable' );
		}
	}
})(jQuery);
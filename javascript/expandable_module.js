/* initial verison of an expandable module */
(function($) {
	var methods = {
		init : function(options) {
			return this.each(
				function () {
					var $this = $(this);
					data = $this.data('expandableModule');
					if (options && options['title']) {
						title = options['title'];
					} else {
						title = $this.data('title');
					}
					if(!data) {
						$this.data('expandableModule',true);
						$this.html(function(idx, old_html) {
							return "<strong><a class='expandable arrow'>+</a> <a class='toggle'>"+title+"</a></strong>"+"<div class='expand_data' style='display:none;'>"+old_html+"</div><div class='clear'></div>"
						});
						$('a.toggle, a.expandable.arrow',this).css('cursor','pointer').click(function () {$this.expandableModule('toggle');});
					}
				}
			);
		},
		toggle : function() {
			return this.each(
				function() {
					var $this = $(this);
					if($this.data('toggle') == 'true') {
						$('a.arrow, a.toggle', this).removeClass('expanded');
						$('div.expand_data', this).slideUp('normal');
						$this.data('toggle', 'false');
					} else {
						$('a.arrow, a.toggle', this).addClass('expanded');
						$('div.expand_data', this).slideDown('normal');
						$this.data('toggle', 'true');
					}
				}
			);
		}
	}
	$.fn.expandableModule = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.expandableModule' );
		}
	}
})(jQuery);
/**
 * @fileoverview
 * 
 * The jqueryExterns were taken from the closure code-base:
 * http://code.google.com/p/closure-compiler/source/browse/trunk/contrib/externs/
 */

goog.provide("com.github.ClosureFrameworkJQueryExample");
goog.require("com.github.ClosureFrameworkLibraryExample");
goog.require("goog.color.names");
goog.require('goog.object');

/**
 * This function will find the color in the current google names list and increment to 
 * the next key in the hash.  The fact that this has the export on this function tells
 * google not to rename this particular function.
 * 
 * @export
 */
com.github.ClosureFrameworkJQueryExample.rotateColorFunction = function(obj) {
	//find current color in list - don't ever do this, as it's a bad algorithm.  It's just an example.
	var colors = goog.object.getValues(goog.color.names);
	var rgb2hex = com.github.ClosureFrameworkLibraryExample.rgb2hex;
	for (var i = 0; i < colors.length; i=i+1) {
		var cssColor = (/**@type {string} */ $(this).css("color"));
		if (colors[i]===rgb2hex(cssColor)) {
			if ((i+1) === colors.length) {
				$(this).css({'color' : colors[0]});				
			} else {
				$(this).css({'color' : colors[i+1]});
			}
			break;
		}
	}
};


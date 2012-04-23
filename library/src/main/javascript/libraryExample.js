goog.provide("com.github.ClosureFrameworkLibraryExample");

/**
 * An array of characters to be referenced.  Based off of the annotations, closure
 * will guarantee that this is an array of strings and that it cannot be changed.
 * @type {Array.<string>} 
 * @const
 */
com.github.ClosureFrameworkLibraryExample.hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; 

/**
 * Function to convert hex format to a rgb color.  Note that this cannot have a private annotation, otherwise 
 * this cannot be used outside of this file.
 * @param {string} rgb the rgb string provided by Library.  Closure will guarantee that this is a string
 * 
 */
com.github.ClosureFrameworkLibraryExample.rgb2hex = function(rgb) {
	var matchedRGB = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	var hex = com.github.ClosureFrameworkLibraryExample.hex;
	return "#" + hex(matchedRGB[1]) + hex(matchedRGB[2]) + hex(matchedRGB[3]);
}

/**
 * Function to convert digits to hexDigits.  Note that this cannot have a private annotation, otherwise 
 * this cannot be used outside of this file.
 * @param {string} x The digits to convert to hex digits.  Closure will guarantee that this is a string.
 * @private
 */
com.github.ClosureFrameworkLibraryExample.hex = function (x) {
	var hexDigits = com.github.ClosureFrameworkLibraryExample.hexDigits;
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
/**
 * @fileoverview very basic externs for Dojo 1.7.2.  This will need to be flushed out significantly for use.
 *
 * @externs
 */

/**
 * @constructor
 * @return {!dojo}
 */
function dojo() {};

/**
 * @constructor
 * @param {function()} cb
 */
dojo.ready = function(cb) {};

/**
 * @param {*} node
 * @param {string} propName
 * @return {string}
 */
dojo.getStyle = function(node, propName) {};

/**
 * @param {*} node
 * @param {string} propName
 * @param {string} value
 * @return {string}
 */
dojo.setStyle = function(node, propName, value) {};

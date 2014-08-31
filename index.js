
/**
 * Module exports.
 */

module.exports = prependChild;

/**
 * The inverse of `Element#appendChild`.
 *
 * @public
 */

function prependChild (element, child) {
  return element.insertBefore(child, element.firstChild || null)
}

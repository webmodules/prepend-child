
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
  var first = element.firstChild;
  if (first) {
    return element.insertBefore(child, first);
  } else {
    return element.appendChild(child);
  }
}

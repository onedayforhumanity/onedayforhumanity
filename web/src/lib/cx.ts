/**
 * Join class names, dropping anything falsy.
 *
 * CSS module lookups are typed `string | undefined` under
 * `noUncheckedIndexedAccess`, so building class lists with template literals
 * would silently write the text "undefined" into a class attribute if a rule
 * were ever renamed in the stylesheet. This drops it instead.
 */
export function cx(...parts: (string | false | undefined)[]): string {
  return parts.filter((part) => typeof part === 'string' && part.length > 0).join(' ')
}

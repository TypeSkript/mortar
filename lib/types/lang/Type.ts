import Expression from "./Expression";
import Variable from "./Variable";

/**
 * A basic value/pattern for a type, e.g. projectile, left mouse button, green
 */
export type TypePattern = string; // PLACEHOLDER

/**
 * A value for the type, e.g. clicked button, {_clickType}, left mouse button
 */
export type TypeValue = Expression | Variable | TypePattern;

export default interface Type {
  type: 'Type',
  name: string, // PLACEHOLDER
  value: TypeValue
}
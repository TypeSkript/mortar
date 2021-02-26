import Type from "./Type";

/**
 * Used to denote what parameter (out of an expression's possible parameters) to replace, in case part of the expression's pattern is not required.
 */
export type ExpressionParameterIndex = number;

export default interface ExpressionParameter {
  type: 'ExpressionParameter',
  parameter: ExpressionParameterIndex,
  value: Type
}
import ExpressionParameter from "./ExpressionParameter";

/**
 * Used in case an expression has multiple patterns that mean different things, i.e. size of %objects% vs. recursive size of %objects%.
 * An expression's possible patterns is not defined here.
 */
export type ExpressionPatternIndex = number;

export default interface Expression {
  type: 'Expression',
  name: string, // PLACEHOLDER
  pattern?: ExpressionPatternIndex,
  parameters: ExpressionParameter[]
}
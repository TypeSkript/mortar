import Type from "./Type";

/**
 * Used to denote what parameter (out of an effect/expression's possible parameters) to replace, in case part of the effect/expression's pattern is not required.
 */
export type ParameterIndex = number;

export default interface Parameter {
    type: 'Parameter',
    parameter: ParameterIndex,
    value: Type
}
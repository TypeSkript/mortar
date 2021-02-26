import Type from "./Type";

/**
 * Used to denote what parameter (out of an effect's possible parameters) to replace, in case part of the effect's pattern is not required.
 */
export type EffectParameterIndex = number;

export default interface EffectParameter {
  type: 'EffectParameter',
  parameter: EffectParameterIndex,
  value: Type
}
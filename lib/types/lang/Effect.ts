import Parameter from "./Parameter";

/**
 * Used in case an effect has multiple patterns that mean different things, i.e. ban %players% vs. ban %players% by IP
 * An effect's possible patterns is not defined here.
 */
export type EffectPatternIndex = number;

export default interface Effect {
  type: 'Effect',
  name: string, // PLACEHOLDER
  pattern?: EffectPatternIndex,
  parameters: Parameter[]
}
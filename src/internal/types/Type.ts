/**
 * Skript represents data with various 'types'; types contain various patterns
 * which represent all their different possible states. All classes which extend
 * this class will act as a JS/TS wrapper for the Skript value.
 */

export default abstract class Type {

    protected raw: string;
    private patterns: string[];
    private since: string;

    /**
     * @param raw The raw value that is to be passed to the generator. This is how the value would be represented in Skript.
     * @param patterns An array of all valid patterns of a given type.
     * @param since The version the type was implemented. 
     */
    constructor(raw: string, patterns: string[], since: string) {
        this.raw = raw;
        this.patterns = patterns;
        this.since = since;
    }

    /**
      * @method generate Returns a boolean denoting if the provided raw value is an instance of a valid pattern.
      * @returns the raw value if it's a valid instance of an accepted pattern; returns 'undefined' if the given raw value is NOT a valid pattern instance (This SHOULD throw compile/ generator error).
      */
    abstract generate(): string | undefined;

    /** @method getVersion Returns the version of Skript that the type was implemented.*/
    getVersion = (): string => this.since;

    /** @method isValid Returns a boolean denoting if the provided raw value is an instance of a valid pattern. */
    isValid = (): boolean => this.patterns.includes(this.raw);

}

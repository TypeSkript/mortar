export default abstract class SyntaxElement {

    private _patterns: string[] = [];

    /**
     * @todo Implement pattern validation on all listed patterns.
     * @param patterns Valid patterns of this element
     */
    constructor(patterns?: string[]) {
        if (patterns) this._patterns = patterns;
    }

    /**
     * @todo Implement pattern validation/ parsing
     * @param pattern A valid pattern of a syntax element
     */
    registerPattern = (pattern: string) => this._patterns.push(pattern);

    /**
     * @todo Validate pattern is valid before comparing against internal patterns
     * @param pattern The raw pattern you would like to validate.
     * @returns Returns true if the provided pattern is a valid instance of a registered one.
     */
    evaluatePattern = (pattern: string): boolean => true;

    /**
     * @returns The value of the generated element, as it it would be in Skript
     */
    public abstract generate(): string;

}
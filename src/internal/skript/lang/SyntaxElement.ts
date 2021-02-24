/**
 * As the name may suggest, this is a base class for which any element
 * of the Skript syntax is to be built off of.
 */
export default abstract class SyntaxElement {

    /**
     * @param parent The parent syntax element, none if no parent or if global (ie. event trigger/ command)
     */
    constructor(private parent?: SyntaxElement) {

    }

    /**
     * @method getValue Generates the Skript equivalent code.
     */
    public abstract generate(): string;

}
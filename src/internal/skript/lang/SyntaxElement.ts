/**
 * As the name may suggest, this is a base class for which any element
 * of the Skript syntax is to be built off of.
 */
export default abstract class SyntaxElement {

    private children: SyntaxElement[] = [];

    /**
     * @param parent The parent syntax element, none if no parent or if global (ie. event trigger/ command)
     */
    constructor(private parent?: SyntaxElement, children?: SyntaxElement[]) {
        if (children) this.children = children;
    }

    public addChild = (child: SyntaxElement) => this.children.push(child);

    public getChildren = () => this.children;

    /**
     * @method getValue Generates the Skript equivalent code.
     */
    public abstract generate(): string;

}
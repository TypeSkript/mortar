import Literal, { LiteralType } from "../lang/Literal";
import SyntaxElement from "../lang/SyntaxElement";

/**
 * Number literal type.
 */
export default class NumberLiteral extends Literal<number> {
    /**
     * @param num The value of the number literal.
     */
    constructor(num: number, parent: SyntaxElement) {
        super(LiteralType.NUMBER, num, parent);
    }

    public generate = (): string => this.getRaw().toString();
}
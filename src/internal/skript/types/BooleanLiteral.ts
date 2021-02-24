import Literal, { LiteralType } from "../lang/Literal";
import SyntaxElement from "../lang/SyntaxElement";

/**
 * Boolean literal type.
 */
export default class BooleanLiteral extends Literal<boolean> {
    /**
     * @param bool Boolean, true of false.
     */
    constructor(bool: boolean, parent: SyntaxElement) {
        super(LiteralType.BOOLEAN, bool, parent);
    }

    public generate = (): string => (this.getRaw()) ? 'true' : 'false';
}
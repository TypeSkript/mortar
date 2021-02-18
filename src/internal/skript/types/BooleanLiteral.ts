import Literal, { LiteralType } from "../lang/Literal";

export default class BooleanLiteral extends Literal<boolean> {
    constructor(bool: boolean) {
        super(LiteralType.BOOLEAN, bool);
    }

    getValue = (): string => (this.getRaw()) ? 'true' : 'false';
}
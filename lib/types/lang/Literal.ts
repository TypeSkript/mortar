export enum LiteralType {
    String = "StringLiteral",
    Number = "NumberLiteral",
    Boolean = "BooleanLiteral"
}

export default interface Literal {
    type: LiteralType
    value: string | number | boolean
}
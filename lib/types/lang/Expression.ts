import Parameter from "./Parameter";

export default interface Expression {
    type: 'Expression',
    pattern: string,
    parameters: Parameter[]
}
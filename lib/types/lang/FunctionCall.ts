import FunctionArgument from "./FunctionArgument";

export default interface FunctionCall {
    type: 'FunctionCall',
    name: string
    arguments: FunctionArgument[]
}
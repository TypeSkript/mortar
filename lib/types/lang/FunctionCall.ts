import FunctionArgument from "./FunctionArgument";
import Literal from "./Literal";

export default interface FunctionCall {
    type: 'FunctionCall',
    name: string
    arguments: FunctionArgument[]
}
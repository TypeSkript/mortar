import FunctionCall from "./FunctionCall";

export default interface EventTrigger {
    type: 'EventTrigger'
    pattern: string
    body: FunctionCall[]
}
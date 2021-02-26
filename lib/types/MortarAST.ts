import EventTrigger from "./lang/EventTrigger";

export default interface MortarAST {
    type: string
    version: string
    body: EventTrigger[]
}
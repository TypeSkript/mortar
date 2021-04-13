import Parameter from "./Parameter";

export default interface Effect {
    type: 'Effect',
    pattern: string,
    parameters: Parameter[]
}
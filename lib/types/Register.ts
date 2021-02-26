import SyntaxElement from "./skript/SyntaxElement";

export default class Register<T extends SyntaxElement> {

    private _elements: T[];

    constructor(elements: T[]) {
        this._elements = elements;
    }

    registerElement = (element: T) => this._elements.push(element);

}
import { MortarOutput } from "..";
import MortarAST from "./MortarAST";

export default class Generator {
    private _ast: MortarAST;

    constructor(ast: MortarAST) {
        this._ast = ast;
    }

    generate(): MortarOutput {
        return {
            script: 'log "Mortar isn\'t functional yet!"',
            data: { version: '2.5.3' }
        }
    }
}
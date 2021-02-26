import Generator from "./types/Generator";
import MortarAST from "./types/MortarAST";

/**
 * Important data for a MortarOutput, including the Skript source code version etc.
 */
interface MortarOutputData {
    version: string
}

/**
 * Includes useable Skript source code and MortarOutputData.
 */
export interface MortarOutput {
    script: string
    data: MortarOutputData
}

/**
 * Similar to @babel/generator, keeping the Generator class as part of the Private API and only exporting 
 * the MortarGenerator class with public methods.
 */
export class MortarGenerator {
    private _generator: Generator;

    constructor(ast: MortarAST) {
        this._generator = new Generator(ast);
    }

    generate = (): MortarOutput => this._generator.generate();
}

/**
 * Turns an AST into a MortarOutput, from which the Skript code can be grabbed.
 * @param ast - the abstract syntax tree from which to generate a MortarOutput
 */
export default function generate(ast: MortarAST): MortarOutput{
    const gen = new MortarGenerator(ast);
    return gen.generate();
}
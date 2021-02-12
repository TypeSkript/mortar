import Type from "./Type";

/**
 * Skript Game Mode type.
 */

export default class GameModeType extends Type {

    /** @param raw The value which is to be evaluated & passed along to the generator. */
    constructor(raw: string) {
        const patterns: string[] = ['creative', 'survival', 'adventure', 'spectator'];
        super(raw, patterns, '1.0');
    }

    generate() {
        return (this.isValid()) ? this.raw : undefined;
    }

}
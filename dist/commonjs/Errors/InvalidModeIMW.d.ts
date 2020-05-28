export default class InvalidModeIMW extends Error {
    message: string;
    static DEFAULT_MESSAGE: string;
    constructor(message: string);
}

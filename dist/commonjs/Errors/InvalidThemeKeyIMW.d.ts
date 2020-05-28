export default class InvalidThemeKeyIMW extends Error {
    message: string;
    static DEFAULT_MESSAGE: string;
    constructor(message: string);
}

/**
 * Enum of supported error codes
 */
export enum ErrorCode {
    // Note that the value of the enum is in camelCase while
    // the enum key is in Pascal casing
    Unknown = 'unknown',
    GenericRenderError = 'genericRenderError',
    OverloadedKeyBinding = 'overloadedKeyBinding',
}

export interface IAppError {
    errorCode: ErrorCode;
    message: any;
    title?: string;
}

export class AppError extends Error implements IAppError {
    public errorCode: ErrorCode;
    public message: string;
    public title?: string;

    constructor(errorCode: ErrorCode, message: string, title: string = null) {
        super(message);
        this.errorCode = errorCode;
        this.message = message;
        this.title = title;
    }
}

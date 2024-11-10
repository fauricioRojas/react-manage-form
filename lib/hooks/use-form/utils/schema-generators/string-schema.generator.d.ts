import * as Yup from 'yup';
import { type Error, type Ref } from '..';
export declare const stringSchemaGenerator: () => {
    required(required?: boolean | string): any;
    min(min?: number | Error): any;
    max(max?: number | Error): any;
    email(invalidMessage?: string): any;
    phoneNumber(invalidMessage?: string): any;
    confirm<T>(ref: keyof T | Ref<T>): any;
    numbers(numbers?: number | Error): any;
    lowercases(lowercases?: number | Error): any;
    uppercases(uppercases?: number | Error): any;
    specialCharacters(specialCharacters?: number | Error): any;
    alphanumeric(alphanumeric?: boolean | string): any;
    get(): Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">;
};

import * as Yup from 'yup';
import { type Error } from '..';
export declare const numberSchemaGenerator: () => {
    required(required?: boolean | string): any;
    min(min?: number | Error): any;
    max(max?: number | Error): any;
    get(): Yup.NumberSchema<number | undefined, Yup.AnyObject, undefined, "">;
};

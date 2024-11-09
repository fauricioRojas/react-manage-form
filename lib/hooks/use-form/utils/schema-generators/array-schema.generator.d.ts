import * as Yup from 'yup';
import { type Error } from '..';
export declare const arraySchemaGenerator: () => {
    required(required?: boolean | string): any;
    min(min?: number | Error): any;
    get(): Yup.ArraySchema<any[] | undefined, Yup.AnyObject, undefined, "">;
};

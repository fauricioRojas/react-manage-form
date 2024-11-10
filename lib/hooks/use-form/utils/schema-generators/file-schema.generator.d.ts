import * as Yup from 'yup';
import { type Accept, type FileExtension } from '..';
export declare const fileSchemaGenerator: () => {
    required(required?: boolean | string): any;
    accept(accept?: FileExtension[] | Accept): any;
    get(): Yup.MixedSchema<{} | undefined, Yup.AnyObject, undefined, "">;
};

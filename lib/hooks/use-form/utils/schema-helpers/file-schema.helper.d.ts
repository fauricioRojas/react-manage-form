import * as Yup from 'yup';
import { type FileField, type Name } from '..';
export declare const generateFileSchema: <T>({ name, accept, required, }: Name<T> & FileField) => {
    [x: string]: Yup.MixedSchema<{} | undefined, Yup.AnyObject, undefined, "">;
};
export declare const generateConditionalFileSchema: <T>(fieldName: string, value: string, { name, accept, required }: Name<T> & FileField) => {
    [x: string]: Yup.MixedSchema<{} | undefined, Yup.AnyObject, undefined, "">;
};

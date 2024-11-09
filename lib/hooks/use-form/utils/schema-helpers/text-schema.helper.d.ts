import * as Yup from 'yup';
import { type Name, type TextField } from '..';
export declare const generateTextSchema: <T>({ name, required, min, max, alphanumeric, }: Name<T> & TextField) => {
    [x: string]: Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">;
};
export declare const generateConditionalTextSchema: <T>(fieldName: string, value: string, { name, required, min, max, alphanumeric }: Name<T> & TextField) => {
    [x: string]: Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">;
};

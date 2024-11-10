import * as Yup from 'yup';
import { type Name, type NumberField } from '..';
export declare const generateNumberSchema: <T>({ name, min, max, required, }: Name<T> & NumberField) => {
    [x: string]: Yup.NumberSchema<number | undefined, Yup.AnyObject, undefined, "">;
};
export declare const generateConditionalNumberSchema: <T>(fieldName: string, value: string, { name, min, max, required }: Name<T> & NumberField) => {
    [x: string]: Yup.NumberSchema<number | undefined, Yup.AnyObject, undefined, "">;
};

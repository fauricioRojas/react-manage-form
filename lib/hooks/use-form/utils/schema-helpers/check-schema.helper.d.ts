import { type CheckField, type Name } from '..';
export declare const generateCheckSchema: <T>({ name, required, }: Name<T> & CheckField) => {
    [x: string]: import("yup").BooleanSchema<boolean | undefined, import("yup").AnyObject, undefined, "">;
};

import { type ConfirmField, type Name } from '..';
export declare const generateConfirmSchema: <T>({ name, ref, required, }: Name<T> & ConfirmField<T>) => {
    [x: string]: import("yup").StringSchema<string | undefined, import("yup").AnyObject, undefined, "">;
};

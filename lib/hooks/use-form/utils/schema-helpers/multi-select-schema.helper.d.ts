import { type MultiSelectField, type Name } from '..';
export declare const generateMultiSelectSchema: <T>({ name, required, }: Name<T> & MultiSelectField) => {
    [x: string]: import("yup").ArraySchema<any[] | undefined, import("yup").AnyObject, undefined, "">;
};

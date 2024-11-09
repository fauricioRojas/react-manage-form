import { type Name, type RegexField } from '..';
export declare const generateEmailSchema: <T>({ name, required, invalidMessage, }: Name<T> & RegexField) => {
    [x: string]: import("yup").StringSchema<string | undefined, import("yup").AnyObject, undefined, "">;
};

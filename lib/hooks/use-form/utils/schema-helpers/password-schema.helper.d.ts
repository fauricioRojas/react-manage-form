import { type Name, type PasswordField } from '..';
export declare const generatePasswordSchema: <T>({ name, required, min, max, numbers, lowercases, uppercases, specialCharacters, }: Name<T> & PasswordField) => {
    [x: string]: import("yup").StringSchema<string | undefined, import("yup").AnyObject, undefined, "">;
};

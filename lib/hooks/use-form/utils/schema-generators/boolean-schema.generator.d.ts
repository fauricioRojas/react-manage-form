import * as Yup from 'yup';
export declare const booleanSchemaGenerator: () => {
    isTrue(required?: boolean | string): any;
    get(): Yup.BooleanSchema<boolean | undefined, Yup.AnyObject, undefined, "">;
};

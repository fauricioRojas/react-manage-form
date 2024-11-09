export type Error = {
    value: number;
    errorMessage: string;
};
export type Accept = {
    value: FileExtension[];
    errorMessage: string;
};
export type When<T> = {
    value: string;
    fields: WhenField<T>[];
};
export type Ref<T> = {
    value: keyof T;
    errorMessage: string;
};
export type FileExtension = '.pdf' | '.csv' | '.xls' | '.txt' | '.png' | '.jpg' | '.jpeg' | '.pst' | '.msg' | '.zip' | '.nsf';
export type Name<T> = {
    name: keyof T;
};
export type TextField = {
    type: 'text';
    required?: boolean | string;
    min?: number | Error;
    max?: number | Error;
    alphanumeric?: boolean | string;
};
export type NumberField = {
    type: 'number';
    required?: boolean | string;
    min?: number | Error;
    max?: number | Error;
};
export type PasswordField = {
    type: 'password';
    required?: boolean | string;
    min?: number | Error;
    max?: number | Error;
    numbers?: number | Error;
    lowercases?: number | Error;
    uppercases?: number | Error;
    specialCharacters?: number | Error;
};
export type RegexField = {
    type: 'email' | 'phone-number';
    required?: boolean | string;
    invalidMessage?: string;
};
export type SingleSelectField<T> = {
    type: 'select' | 'radio';
    required?: boolean | string;
    when?: When<T>[];
};
export type GroupField<T> = {
    type: 'checkbox-group';
    min?: number | Error;
    when?: When<T>[];
};
export type MultiSelectField = {
    type: 'multi-select';
    required?: boolean | string;
};
export type CheckField = {
    type: 'check';
    required?: boolean | string;
};
export type ConfirmField<T> = {
    type: 'confirm';
    required?: boolean | string;
    ref: keyof T | Ref<T>;
};
export type FileField = {
    type: 'file';
    required?: boolean | string;
    accept?: FileExtension[] | Accept;
};
export type WhenField<T> = Name<T> & (TextField | NumberField | FileField);
export type Field<T> = Name<T> & (TextField | NumberField | PasswordField | RegexField | SingleSelectField<T> | GroupField<T> | MultiSelectField | CheckField | ConfirmField<T> | FileField);

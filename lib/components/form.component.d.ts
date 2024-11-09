import React, { type PropsWithChildren } from 'react';
import { type DefaultValues, type FieldValues } from 'react-hook-form';
import { type Field } from '../hooks';
interface IFormProps<T> extends PropsWithChildren {
    fields: Field<T>[];
    defaultValues?: DefaultValues<T>;
    id?: string;
    resetAfterSubmit?: boolean;
    gap?: number;
    onSubmit: (data: T) => void;
    watchValues?: (values: T) => void;
}
export declare const Form: <T extends FieldValues>({ fields, defaultValues, id, resetAfterSubmit, gap, onSubmit, watchValues, children, }: IFormProps<T>) => React.JSX.Element;
export {};

import { type PropsWithChildren } from 'react';
import { type DefaultValues, type FieldValues } from 'react-hook-form';
import { type Field } from '../hooks';
type FormProps<T> = PropsWithChildren & {
    fields: Field<T>[];
    defaultValues?: DefaultValues<T>;
    id?: string;
    resetAfterSubmit?: boolean;
    gap?: number;
    onSubmit: (data: T) => void;
    watchValues?: (values: T) => void;
};
export declare const Form: <T extends FieldValues>({ fields, defaultValues, id, resetAfterSubmit, gap, onSubmit, watchValues, children, }: FormProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};

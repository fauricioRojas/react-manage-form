import { type DefaultValues } from 'react-hook-form';
import { type Field } from './utils';
interface IUseForm<T> {
    fields: Field<T>[];
    defaultValues?: DefaultValues<T>;
}
declare const useForm: <T>({ fields, defaultValues }: IUseForm<T>) => import("react-hook-form").UseFormReturn<T, any, undefined>;
export { useForm, type Field };

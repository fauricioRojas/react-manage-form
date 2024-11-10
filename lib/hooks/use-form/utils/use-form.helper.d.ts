import * as Yup from 'yup';
import { type Field } from '.';
export declare const generateSchema: <T>(fields: Field<T>[]) => Yup.ObjectSchema<{}, Yup.AnyObject, {}, "">;

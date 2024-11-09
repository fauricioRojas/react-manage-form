import * as Yup from 'yup';

import { fileSchemaGenerator, type FileField, type Name } from '..';

export const generateFileSchema = <T>({
  name,
  accept,
  required,
}: Name<T> & FileField) => ({
  [name]: fileSchemaGenerator().required(required).accept(accept).get(),
});

export const generateConditionalFileSchema = <T>(
  fieldName: string,
  value: string,
  { name, accept, required }: Name<T> & FileField,
) => ({
  [name]: Yup.mixed().when(fieldName, {
    is: (fieldValue: string | string[]) =>
      Array.isArray(fieldValue)
        ? fieldValue.includes(value)
        : fieldValue === value,
    then: () => fileSchemaGenerator().required(required).accept(accept).get(),
  }),
});

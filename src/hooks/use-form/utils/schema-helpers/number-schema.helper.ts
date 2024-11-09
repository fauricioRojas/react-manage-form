import * as Yup from 'yup';

import { numberSchemaGenerator, type Name, type NumberField } from '..';

export const generateNumberSchema = <T>({
  name,
  min,
  max,
  required,
}: Name<T> & NumberField) => ({
  [name]: numberSchemaGenerator().required(required).min(min).max(max).get(),
});

export const generateConditionalNumberSchema = <T>(
  fieldName: string,
  value: string,
  { name, min, max, required }: Name<T> & NumberField,
) => ({
  [name]: Yup.number().when(fieldName, {
    is: (fieldValue: string | string[]) =>
      Array.isArray(fieldValue)
        ? fieldValue.includes(value)
        : fieldValue === value,
    then: () =>
      numberSchemaGenerator().required(required).min(min).max(max).get(),
  }),
});

import * as Yup from 'yup';

import { stringSchemaGenerator, type Name, type TextField } from '..';

export const generateTextSchema = <T>({
  name,
  required,
  min,
  max,
  alphanumeric,
}: Name<T> & TextField) => ({
  [name]: stringSchemaGenerator()
    .required(required)
    .min(min)
    .max(max)
    .alphanumeric(alphanumeric)
    .get(),
});

export const generateConditionalTextSchema = <T>(
  fieldName: string,
  value: string,
  { name, required, min, max, alphanumeric }: Name<T> & TextField,
) => ({
  [name]: Yup.string().when(fieldName, {
    is: (fieldValue: string | string[]) =>
      Array.isArray(fieldValue)
        ? fieldValue.includes(value)
        : fieldValue === value,
    then: () =>
      stringSchemaGenerator()
        .required(required)
        .min(min)
        .max(max)
        .alphanumeric(alphanumeric)
        .get(),
  }),
});

import * as Yup from 'yup';

import {
  generateCheckSchema,
  generateCheckboxGroupSchema,
  generateConfirmSchema,
  generateEmailSchema,
  generateFileSchema,
  generateMultiSelectSchema,
  generateNumberSchema,
  generatePasswordSchema,
  generatePhoneNumberSchema,
  generateSingleSelectSchema,
  generateTextSchema,
  type Field,
} from '.';

const FIELD_MAP = {
  text: generateTextSchema,
  number: generateNumberSchema,
  email: generateEmailSchema,
  check: generateCheckSchema,
  'phone-number': generatePhoneNumberSchema,
  confirm: generateConfirmSchema,
  file: generateFileSchema,
  select: generateSingleSelectSchema,
  radio: generateSingleSelectSchema,
  'checkbox-group': generateCheckboxGroupSchema,
  'multi-select': generateMultiSelectSchema,
  password: generatePasswordSchema,
};

export const generateSchema = <T>(fields: Field<T>[]) => {
  const schema = fields.reduce(
    (schema, field) => ({
      ...schema,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...FIELD_MAP[field.type](field as any),
    }),
    {},
  );

  return Yup.object().shape(schema);
};

import {
  generateConditionalFileSchema,
  generateConditionalNumberSchema,
  generateConditionalTextSchema,
  type When,
} from '..';

const generateConditionalSchema = <T>(
  fieldName: string,
  { value, fields }: When<T>,
) => {
  const fieldMap = {
    text: generateConditionalTextSchema,
    number: generateConditionalNumberSchema,
    file: generateConditionalFileSchema,
  };

  return fields.reduce(
    (schema, field) => ({
      ...schema,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...fieldMap[field.type](fieldName, value, field as any),
    }),
    {},
  );
};

export const generateWhenSchema = <T>(name: keyof T, when?: When<T>[]) =>
  when
    ? when.reduce(
        (conditionalSchema, whenField) => ({
          ...conditionalSchema,
          ...generateConditionalSchema(name as string, whenField),
        }),
        {},
      )
    : {};

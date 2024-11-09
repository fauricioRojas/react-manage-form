import { stringSchemaGenerator, type Name, type RegexField } from '..';

export const generateEmailSchema = <T>({
  name,
  required,
  invalidMessage,
}: Name<T> & RegexField) => ({
  [name]: stringSchemaGenerator()
    .required(required)
    .email(invalidMessage)
    .get(),
});

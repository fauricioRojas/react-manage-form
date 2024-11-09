import { stringSchemaGenerator, type Name, type RegexField } from '..';

export const generatePhoneNumberSchema = <T>({
  name,
  required,
  invalidMessage,
}: Name<T> & RegexField) => ({
  [name]: stringSchemaGenerator()
    .required(required)
    .phoneNumber(invalidMessage)
    .get(),
});

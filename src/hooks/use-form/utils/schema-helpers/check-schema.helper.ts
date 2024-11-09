import { booleanSchemaGenerator, type CheckField, type Name } from '..';

export const generateCheckSchema = <T>({
  name,
  required = true,
}: Name<T> & CheckField) => ({
  [name]: booleanSchemaGenerator().isTrue(required).get(),
});

import { arraySchemaGenerator, type MultiSelectField, type Name } from '..';

export const generateMultiSelectSchema = <T>({
  name,
  required,
}: Name<T> & MultiSelectField) => ({
  [name]: arraySchemaGenerator().required(required).get(),
});

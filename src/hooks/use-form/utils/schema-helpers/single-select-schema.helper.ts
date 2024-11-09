import {
  generateWhenSchema,
  stringSchemaGenerator,
  type Name,
  type SingleSelectField,
} from '..';

export const generateSingleSelectSchema = <T>({
  name,
  required,
  when,
}: Name<T> & SingleSelectField<T>) => ({
  [name]: stringSchemaGenerator().required(required).get(),
  ...generateWhenSchema(name, when),
});

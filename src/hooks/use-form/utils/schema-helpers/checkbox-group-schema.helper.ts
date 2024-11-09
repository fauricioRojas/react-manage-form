import {
  arraySchemaGenerator,
  generateWhenSchema,
  type GroupField,
  type Name,
} from '..';

export const generateCheckboxGroupSchema = <T>({
  name,
  min,
  when,
}: Name<T> & GroupField<T>) => ({
  [name]: arraySchemaGenerator().min(min).get(),
  ...generateWhenSchema(name, when),
});

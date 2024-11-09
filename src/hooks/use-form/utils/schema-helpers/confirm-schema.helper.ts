import { stringSchemaGenerator, type ConfirmField, type Name } from '..';

export const generateConfirmSchema = <T>({
  name,
  ref,
  required,
}: Name<T> & ConfirmField<T>) => ({
  [name]: stringSchemaGenerator().required(required).confirm(ref).get(),
});

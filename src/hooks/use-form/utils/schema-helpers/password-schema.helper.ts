import { stringSchemaGenerator, type Name, type PasswordField } from '..';

export const generatePasswordSchema = <T>({
  name,
  required,
  min,
  max,
  numbers,
  lowercases,
  uppercases,
  specialCharacters,
}: Name<T> & PasswordField) => ({
  [name]: stringSchemaGenerator()
    .required(required)
    .numbers(numbers)
    .lowercases(lowercases)
    .uppercases(uppercases)
    .specialCharacters(specialCharacters)
    .min(min)
    .max(max)
    .get(),
});

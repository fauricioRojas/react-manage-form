import { stringSchemaGenerator } from '..';
export const generatePasswordSchema = ({ name, required, min, max, numbers, lowercases, uppercases, specialCharacters, }) => ({
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
//# sourceMappingURL=password-schema.helper.js.map
import * as Yup from 'yup';
import { stringSchemaGenerator } from '..';
export const generateTextSchema = ({ name, required, min, max, alphanumeric, }) => ({
    [name]: stringSchemaGenerator()
        .required(required)
        .min(min)
        .max(max)
        .alphanumeric(alphanumeric)
        .get(),
});
export const generateConditionalTextSchema = (fieldName, value, { name, required, min, max, alphanumeric }) => ({
    [name]: Yup.string().when(fieldName, {
        is: (fieldValue) => Array.isArray(fieldValue)
            ? fieldValue.includes(value)
            : fieldValue === value,
        then: () => stringSchemaGenerator()
            .required(required)
            .min(min)
            .max(max)
            .alphanumeric(alphanumeric)
            .get(),
    }),
});
//# sourceMappingURL=text-schema.helper.js.map
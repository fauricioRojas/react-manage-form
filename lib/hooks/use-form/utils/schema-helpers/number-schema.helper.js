import * as Yup from 'yup';
import { numberSchemaGenerator } from '..';
export const generateNumberSchema = ({ name, min, max, required, }) => ({
    [name]: numberSchemaGenerator().required(required).min(min).max(max).get(),
});
export const generateConditionalNumberSchema = (fieldName, value, { name, min, max, required }) => ({
    [name]: Yup.number().when(fieldName, {
        is: (fieldValue) => Array.isArray(fieldValue)
            ? fieldValue.includes(value)
            : fieldValue === value,
        then: () => numberSchemaGenerator().required(required).min(min).max(max).get(),
    }),
});
//# sourceMappingURL=number-schema.helper.js.map
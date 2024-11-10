import * as Yup from 'yup';
import { fileSchemaGenerator } from '..';
export const generateFileSchema = ({ name, accept, required, }) => ({
    [name]: fileSchemaGenerator().required(required).accept(accept).get(),
});
export const generateConditionalFileSchema = (fieldName, value, { name, accept, required }) => ({
    [name]: Yup.mixed().when(fieldName, {
        is: (fieldValue) => Array.isArray(fieldValue)
            ? fieldValue.includes(value)
            : fieldValue === value,
        then: () => fileSchemaGenerator().required(required).accept(accept).get(),
    }),
});
//# sourceMappingURL=file-schema.helper.js.map
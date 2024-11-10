import * as Yup from 'yup';
import { generateCheckSchema, generateCheckboxGroupSchema, generateConfirmSchema, generateEmailSchema, generateFileSchema, generateMultiSelectSchema, generateNumberSchema, generatePasswordSchema, generatePhoneNumberSchema, generateSingleSelectSchema, generateTextSchema, } from '.';
const FIELD_MAP = {
    text: generateTextSchema,
    number: generateNumberSchema,
    email: generateEmailSchema,
    check: generateCheckSchema,
    'phone-number': generatePhoneNumberSchema,
    confirm: generateConfirmSchema,
    file: generateFileSchema,
    select: generateSingleSelectSchema,
    radio: generateSingleSelectSchema,
    'checkbox-group': generateCheckboxGroupSchema,
    'multi-select': generateMultiSelectSchema,
    password: generatePasswordSchema,
};
export const generateSchema = (fields) => {
    const schema = fields.reduce((schema, field) => (Object.assign(Object.assign({}, schema), FIELD_MAP[field.type](field))), {});
    return Yup.object().shape(schema);
};
//# sourceMappingURL=use-form.helper.js.map
import { generateConditionalFileSchema, generateConditionalNumberSchema, generateConditionalTextSchema, } from '..';
const generateConditionalSchema = (fieldName, { value, fields }) => {
    const fieldMap = {
        text: generateConditionalTextSchema,
        number: generateConditionalNumberSchema,
        file: generateConditionalFileSchema,
    };
    return fields.reduce((schema, field) => ({
        ...schema,
         
        ...fieldMap[field.type](fieldName, value, field),
    }), {});
};
export const generateWhenSchema = (name, when) => when
    ? when.reduce((conditionalSchema, whenField) => ({
        ...conditionalSchema,
        ...generateConditionalSchema(name, whenField),
    }), {})
    : {};
//# sourceMappingURL=when-schema.helper.js.map
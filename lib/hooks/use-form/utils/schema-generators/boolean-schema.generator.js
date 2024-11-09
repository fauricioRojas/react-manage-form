import * as Yup from 'yup';
import { DEFAULT_REQUIRED } from '..';
export const booleanSchemaGenerator = () => {
    let schema = Yup.bool();
    const generator = {
        isTrue(required) {
            if (required) {
                const errorMessage = typeof required === 'string' ? required : DEFAULT_REQUIRED;
                schema = schema.test('isTrue', errorMessage, (value) => !!value);
            }
            return generator;
        },
        get() {
            return schema;
        },
    };
    return generator;
};
//# sourceMappingURL=boolean-schema.generator.js.map
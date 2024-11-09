import * as Yup from 'yup';
import { DEFAULT_REQUIRED } from '..';
export const numberSchemaGenerator = () => {
    let schema = Yup.number();
    const generator = {
        required(required) {
            if (required) {
                const requiredMessage = typeof required === 'string' ? required : DEFAULT_REQUIRED;
                schema = schema.typeError(requiredMessage);
            }
            else {
                schema = schema.transform((value) => isNaN(value) ? undefined : value);
            }
            return generator;
        },
        min(min) {
            if (min) {
                const isMinANumber = typeof min === 'number';
                const minMessage = isMinANumber
                    ? `Minimum value is ${min}`
                    : min.errorMessage;
                const minValue = isMinANumber ? min : min.value;
                schema = schema.min(minValue, minMessage);
            }
            return generator;
        },
        max(max) {
            if (max) {
                const isMaxANumber = typeof max === 'number';
                const maxMessage = isMaxANumber
                    ? `Maximum value is ${max}`
                    : max.errorMessage;
                const maxValue = isMaxANumber ? max : max.value;
                schema = schema.max(maxValue, maxMessage);
            }
            return generator;
        },
        get() {
            return schema;
        },
    };
    return generator;
};
//# sourceMappingURL=number-schema.generator.js.map
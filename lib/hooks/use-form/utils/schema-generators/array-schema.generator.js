import * as Yup from 'yup';
import { DEFAULT_REQUIRED } from '..';
export const arraySchemaGenerator = () => {
    let schema = Yup.array();
    const generator = {
        required(required) {
            if (required) {
                const requiredMessage = typeof required === 'string' ? required : DEFAULT_REQUIRED;
                schema = schema.min(1, requiredMessage);
            }
            return generator;
        },
        min(min) {
            if (min) {
                const isMinANumber = typeof min === 'number';
                const minMessage = isMinANumber
                    ? `Must select at least ${min} option${min > 1 ? 's' : ''}`
                    : min.errorMessage;
                schema = schema.min(isMinANumber ? min : min.value, minMessage);
            }
            return generator;
        },
        get() {
            return schema;
        },
    };
    return generator;
};
//# sourceMappingURL=array-schema.generator.js.map
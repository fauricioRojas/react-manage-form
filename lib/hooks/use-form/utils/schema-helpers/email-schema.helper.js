import { stringSchemaGenerator } from '..';
export const generateEmailSchema = ({ name, required, invalidMessage, }) => ({
    [name]: stringSchemaGenerator()
        .required(required)
        .email(invalidMessage)
        .get(),
});
//# sourceMappingURL=email-schema.helper.js.map
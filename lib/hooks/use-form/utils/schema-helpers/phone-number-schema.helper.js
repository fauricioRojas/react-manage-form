import { stringSchemaGenerator } from '..';
export const generatePhoneNumberSchema = ({ name, required, invalidMessage, }) => ({
    [name]: stringSchemaGenerator()
        .required(required)
        .phoneNumber(invalidMessage)
        .get(),
});
//# sourceMappingURL=phone-number-schema.helper.js.map
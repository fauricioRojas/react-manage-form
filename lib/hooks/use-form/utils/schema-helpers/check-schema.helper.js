import { booleanSchemaGenerator } from '..';
export const generateCheckSchema = ({ name, required = true, }) => ({
    [name]: booleanSchemaGenerator().isTrue(required).get(),
});
//# sourceMappingURL=check-schema.helper.js.map
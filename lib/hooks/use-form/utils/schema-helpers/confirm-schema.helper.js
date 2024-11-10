import { stringSchemaGenerator } from '..';
export const generateConfirmSchema = ({ name, ref, required, }) => ({
    [name]: stringSchemaGenerator().required(required).confirm(ref).get(),
});
//# sourceMappingURL=confirm-schema.helper.js.map
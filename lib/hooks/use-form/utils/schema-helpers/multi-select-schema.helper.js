import { arraySchemaGenerator } from '..';
export const generateMultiSelectSchema = ({ name, required, }) => ({
    [name]: arraySchemaGenerator().required(required).get(),
});
//# sourceMappingURL=multi-select-schema.helper.js.map
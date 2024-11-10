import { generateWhenSchema, stringSchemaGenerator, } from '..';
export const generateSingleSelectSchema = ({ name, required, when, }) => (Object.assign({ [name]: stringSchemaGenerator().required(required).get() }, generateWhenSchema(name, when)));
//# sourceMappingURL=single-select-schema.helper.js.map
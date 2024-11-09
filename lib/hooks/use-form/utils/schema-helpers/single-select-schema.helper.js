import { generateWhenSchema, stringSchemaGenerator, } from '..';
export const generateSingleSelectSchema = ({ name, required, when, }) => ({
    [name]: stringSchemaGenerator().required(required).get(),
    ...generateWhenSchema(name, when),
});
//# sourceMappingURL=single-select-schema.helper.js.map
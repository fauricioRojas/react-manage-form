import { arraySchemaGenerator, generateWhenSchema, } from '..';
export const generateCheckboxGroupSchema = ({ name, min, when, }) => (Object.assign({ [name]: arraySchemaGenerator().min(min).get() }, generateWhenSchema(name, when)));
//# sourceMappingURL=checkbox-group-schema.helper.js.map
### react-manage-form

Implementation of [react-hook-form](https://www.npmjs.com/package/react-hook-form) and [yup](https://www.npmjs.com/package/yup) to manage forms in an easy-to-use way based on array of fields. It is written in [TypeScript](https://www.typescriptlang.org/).

### Install

```
npm install react-manage-form --save
yarn add react-manage-form
```

```ts
import { type Field, Form, useFormContext } from 'react-manage-form';
```

### Interfaces

`Field`

It is a conditional object based on the `type` prop, other props changed based on the value you set for `type`. Receives a generic type to typed the prop `name`.

```ts
type Field<T> = Name<T> &
  (
    | TextField
    | NumberField
    | PasswordField
    | RegexField
    | SingleSelectField<T>
    | GroupField<T>
    | MultiSelectField
    | CheckField
    | ConfirmField<T>
    | FileField
  );
```

#### Text field

| Prop            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| `type`          | `'text'`           | It is for text fields                         |
| `name`          | `string`           | Used to link the schema validation to a field |
| `required?`     | `boolean` `string` | Make it required                              |
| `min?`          | `number` `Error`   | Set a min of n characters                     |
| `max?`          | `number` `Error`   | Set a max of n characters                     |
| `alphanumeric?` | `boolean` `string` | Allow only alphanumeric characters            |

#### Number field

| Prop        | Type               | Description                                   |
| ----------- | ------------------ | --------------------------------------------- |
| `type`      | `'number'`         | It is for number fields                       |
| `name`      | `string`           | Used to link the schema validation to a field |
| `required?` | `boolean` `string` | Make it required                              |
| `min?`      | `number` `Error`   | Set the min possible value                    |
| `max?`      | `number` `Error`   | Set the max possible value                    |

#### Password field

| Prop                 | Type               | Description                                   |
| -------------------- | ------------------ | --------------------------------------------- |
| `type`               | `'password'`       | It is for password fields                     |
| `name`               | `string`           | Used to link the schema validation to a field |
| `required?`          | `boolean` `string` | Make it required                              |
| `min?`               | `number` `Error`   | Set a min of n characters                     |
| `max?`               | `number` `Error`   | Set a max of n characters                     |
| `numbers?`           | `number` `Error`   | Set a min of n numbers characters             |
| `lowercases?`        | `number` `Error`   | Set a min of n lowercases characters          |
| `uppercases?`        | `number` `Error`   | Set a min of n uppercases characters          |
| `specialCharacters?` | `number` `Error`   | Set a min of n special characters             |

#### Regex field

| Prop              | Type                       | Description                                   |
| ----------------- | -------------------------- | --------------------------------------------- |
| `type`            | `'email'` `'phone-number'` | It is for regex fields                        |
| `name`            | `string`                   | Used to link the schema validation to a field |
| `required?`       | `boolean` `string`         | Make it required                              |
| `invalidMessage?` | `string`                   | Change the default invalid message            |

#### Single selection field

| Prop        | Type                 | Description                                   |
| ----------- | -------------------- | --------------------------------------------- |
| `type`      | `'select'` `'radio'` | It is for single selection fields             |
| `name`      | `string`             | Used to link the schema validation to a field |
| `required?` | `boolean` `string`   | Make it required                              |
| `when?`     | `When<T>[]`          | Allow conditional fields                      |

#### Group selection field

| Prop    | Type               | Description                                   |
| ------- | ------------------ | --------------------------------------------- |
| `type`  | `'checkbox-group'` | It is for group selection fields              |
| `name`  | `string`           | Used to link the schema validation to a field |
| `min?`  | `number` `Error`   | Set a min of selected options                 |
| `when?` | `When<T>[]`        | Allow conditional fields                      |

#### Multiple selection field

| Prop        | Type               | Description                                   |
| ----------- | ------------------ | --------------------------------------------- |
| `type`      | `'multi-select'`   | It is for multiple selection fields           |
| `name`      | `string`           | Used to link the schema validation to a field |
| `required?` | `boolean` `string` | Make it required                              |

#### Check field

| Prop        | Type               | Description                                   |
| ----------- | ------------------ | --------------------------------------------- |
| `type`      | `'check'`          | It is for check fields like accept terms      |
| `name`      | `string`           | Used to link the schema validation to a field |
| `required?` | `boolean` `string` | Make it required                              |

#### Confirm field

| Prop        | Type               | Description                                    |
| ----------- | ------------------ | ---------------------------------------------- |
| `type`      | `'confirm'`        | It is for confirm fields like confirm password |
| `name`      | `string`           | Used to link the schema validation to a field  |
| `required?` | `boolean` `string` | Make it required                               |
| `ref`       | `string` `Ref`     | Field name to match its value                  |

#### File field

| Prop        | Type                       | Description                                   |
| ----------- | -------------------------- | --------------------------------------------- |
| `type`      | `'file'`                   | It is for file fields                         |
| `name`      | `string`                   | Used to link the schema validation to a field |
| `required?` | `boolean` `string`         | Make it required                              |
| `accept`    | `FileExtension[]` `Accept` | File extensions to accept                     |

### Components

`<Form />`

A component that is in charge of run based on array of fields all the the schema validations.

| Prop                | Type                  | Description                                                                                                  |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `fields`            | `Field<T>[]`          | Array of fields to use to create a schema to validate the form fields                                        |
| `defaultValues`     | `DefaultValues<T>`    | Optional partial object with default values                                                                  |
| `id?`               | `string`              | Use to submit the form using a button out of the form                                                        |
| `resetAfterSubmit?` | `boolean`             | To reset all the form fields after submit                                                                    |
| `gap? = 4`          | `number`              | Space between form's children                                                                                |
| `onSubmit`          | `(data: T) => void`   | Function to be called on submit once the form is valid                                                       |
| `watchValues?`      | `(values: T) => void` | Function to receive updates anytime a value of a field changed, commonly used to handle fields conditionally |

### Contexts

`useFormContext`

It is the context from `react-hook-form`.

### Quickstart

```tsx
import { type Field, Form } from 'react-manage-form';

type LoginForm = {
  username: string;
  password: string;
};

const fields: Field<LoginForm>[] = [
  {
    name: 'username',
    type: 'text',
    min: 4,
    max: 11,
    required: true,
  },
  {
    name: 'password',
    type: 'text',
    min: 4,
    required: true,
  },
];

const DataForm = Form<ILoginForm>;

const Login = () => {
  const handleLogin = (data: ILoginForm) => {
    console.log('data', data);
  };

  const watchValues = (values: Partial<ILoginForm>) => {
    console.log('watching values:', values);
  };

  return (
    <DataForm fields={fields} watchValues={watchValues} onSubmit={handleLogin}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit" formNoValidate>
        Sign In
      </button>
    </DataForm>
  );
};
```

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

### Fields implementation

This is a recommendation of how to implement the `useFormContext` with an input.
- Use the context.
- Register the field using the `name` prop.
- Use `lodash.get` to access to the error message based on the `name` prop.
- Pass all props returned by the register function to the input.

#### `<ErrorMessage />` component

This is a recommendation of how to show up error messages in an easy way.

```tsx
import type { FC, PropsWithChildren } from 'react';

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) =>
  !!children && <p style={{ color: 'red', marginTop: 3 }}>{children}</p>;
```

#### `<Input />` component
```tsx
import get from 'lodash.get';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-manage-form';

import { ErrorMessage } from '@shared/components';

type InputProps = Omit<ComponentProps<'input'>, 'name'> & {
  name: string;
}

export const Input: FC<InputProps> = ({
  name,
  type = 'text',
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const registered = register(name);
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
     <div style={{ display: 'flex', flexDirection: 'column', }}>
      <input
        type={type}
        {...rest}
        {...registered}
        style={{ borderColor: errorMessage ? 'red' : undefined }}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
```

#### `<Checkbox />` component
```tsx
import get from 'lodash.get';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-manage-form';

import { ErrorMessage } from '@shared/components';

type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & {
  label: string;
  name: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const registered = register(name);
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
     <div style={{ display: 'flex', flexDirection: 'column', }}>
      <input
        type="checkbox"
        {...rest}
        id={name}
        title={title}
        {...registered}
      />
      <label
        htmlFor={name}
        className="form-check-label"
        style={{ marginLeft: '0.5rem' }}
      >
        {label}
      </label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
```

#### `<RadioGroup />` component
```tsx
import get from 'lodash.get';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '@shared/components';

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = Pick<ComponentProps<'input'>, 'placeholder' | 'type'> & {
  label?: string;
  name: string;
  options: RadioOption[];
};

export const RadioGroup: FC<RadioGroupProps> = ({ label, name, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const registered = register(name, { value: '' });
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <label style={{ marginBottom: '0.5rem' }}>{label}</Label>}
      <fieldset style={{ display: 'flex', gap: '0.5rem' }} {...rest}>
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={`radio-${option.value}`}
            style={{ marginBottom: 0 }}
          >
            <input
              type="radio"
              value={option.value}
              id={`radio-${option.value}`}
              {...registered}
            />{' '}
            {option.label}
          </label>
        ))}
      </fieldset>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
```

#### `<Select />` component
```tsx
import get from 'lodash.get';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '@shared/components';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = ComponentProps<'select'> & {
  label?: string;
  name: string;
  options: SelectOption[];
};

export const Select: FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const registered = register(name);
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <label style={{ marginBottom: '0.5rem' }}>{label}</label>}
      <select {...rest} {...registered} style={{ borderColor: errorMessage ? 'red' : undefined }}>
        <option value="">Please choose one option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

```

### Quickstart

```tsx
import { type Field, Form } from 'react-manage-form';

import { Input } from '@shared/components';

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
      <Input type="text" name="username" />
      <Input type="password" name="password" />
      <button type="submit" formNoValidate>
        Sign In
      </button>
    </DataForm>
  );
};
```

### Fields example

See how fields can look and choose whichever work fir your projects.

```tsx
import { type Field } from 'react-manage-form';

type Favorite = {
  name: string;
  tShirtSize: string;
  favoriteShoes: string[];
  resume: File;
};

const fields: Field<Favorite>[] = [
  {
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    name: 'tShirtSize',
    type: 'radio',
    required: true,
  },
  {
    name: 'favoriteShoes',
    type: 'checkbox-group',
  },
  {
    name: 'resume',
    type: 'file',
    required: true,
    accept: ['.pdf', '.txt'],
  },
];

```
### Conditional fields example

See how conditional fields can look and choose whichever work fir your projects.

```tsx
import { type Field } from 'react-manage-form';

type FileForm {
  fileType: string;
  fileUrl?: string;
  file?: File;
}

const fields: Field<FileForm>[] = [
  {
    name: 'fileType',
    type: 'radio',
    when: [
      {
        value: 'url',
        fields: [
          {
            name: 'fileUrl',
            type: 'text',
            required: true,
          },
        ],
      },
      {
        value: 'upload',
        fields: [
          {
            name: 'file',
            type: 'file',
            required: true,
          },
        ],
      },
    ],
  },
];
```
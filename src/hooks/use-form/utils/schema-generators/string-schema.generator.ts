import * as Yup from 'yup';

import { DEFAULT_REQUIRED, REGEX, type Error, type Ref } from '..';

export const stringSchemaGenerator = () => {
  let schema = Yup.string();

  const generator = {
    required(required?: boolean | string) {
      if (required) {
        const requiredMessage =
          typeof required === 'string' ? required : DEFAULT_REQUIRED;
        schema = schema.required(requiredMessage);
      }

      return generator;
    },
    min(min?: number | Error) {
      if (min) {
        const isMinANumber = typeof min === 'number';
        const minMessage = isMinANumber
          ? `Must be at least ${min} characters`
          : min.errorMessage;
        const minValue = isMinANumber ? min : min.value;
        schema = schema.min(minValue, minMessage);
      }

      return generator;
    },
    max(max?: number | Error) {
      if (max) {
        const isMaxANumber = typeof max === 'number';
        const maxMessage = isMaxANumber
          ? `Must not exceed ${max} characters`
          : max.errorMessage;
        const maxValue = isMaxANumber ? max : max.value;
        schema = schema.max(maxValue, maxMessage);
      }

      return generator;
    },
    email(invalidMessage = 'Email is not valid') {
      schema = schema.matches(REGEX.EMAIL, invalidMessage);

      return generator;
    },
    phoneNumber(invalidMessage = 'Phone number is not valid') {
      schema = schema.matches(REGEX.PHONE_NUMBER, invalidMessage);

      return generator;
    },
    confirm<T>(ref: keyof T | Ref<T>) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isRef = (val: any): val is Ref<T> => val.value;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isStringRef = (val: any): val is keyof T => !val.value;
      let refValue;
      let refMessage;

      if (isStringRef(ref)) {
        refValue = ref;
        refMessage = `Field does not match ${ref as string}`;
      }
      if (isRef(ref)) {
        refValue = ref.value;
        refMessage = ref.errorMessage;
      }
      schema = schema.oneOf(
        [Yup.ref(refValue as string), undefined],
        refMessage,
      );

      return generator;
    },
    numbers(numbers?: number | Error) {
      if (numbers) {
        const isNumbersANumber = typeof numbers === 'number';
        const numbersMessage = isNumbersANumber
          ? `Must contain ${numbers} number${numbers > 1 ? 's' : ''}`
          : numbers.errorMessage;
        const digits = isNumbersANumber ? numbers : numbers.value;

        schema = schema.test('numbers', numbersMessage, (value = '') => {
          const justNumbers = value
            .replace(REGEX.NUMBERS, '')
            .replace(REGEX.SPACES, '');
          return justNumbers.length >= digits;
        });
      }

      return generator;
    },
    lowercases(lowercases?: number | Error) {
      if (lowercases) {
        const isLowercasesANumber = typeof lowercases === 'number';
        const lowercasesMessage = isLowercasesANumber
          ? `Must contain ${lowercases} lowercase${lowercases > 1 ? 's' : ''}`
          : lowercases.errorMessage;
        const digits = isLowercasesANumber ? lowercases : lowercases.value;

        schema = schema.test('lowercases', lowercasesMessage, (value = '') => {
          const justLowercases = value
            .replace(REGEX.LOWERCASES, '')
            .replace(REGEX.SPACES, '');
          return justLowercases.length >= digits;
        });
      }

      return generator;
    },
    uppercases(uppercases?: number | Error) {
      if (uppercases) {
        const isUppercasesANumber = typeof uppercases === 'number';
        const uppercasesMessage = isUppercasesANumber
          ? `Must contain ${uppercases} uppercase${uppercases > 1 ? 's' : ''}`
          : uppercases.errorMessage;
        const digits = isUppercasesANumber ? uppercases : uppercases.value;

        schema = schema.test('uppercases', uppercasesMessage, (value = '') => {
          const justUppercases = value
            .replace(REGEX.UPPERCASES, '')
            .replace(REGEX.SPACES, '');
          return justUppercases.length >= digits;
        });
      }

      return generator;
    },
    specialCharacters(specialCharacters?: number | Error) {
      if (specialCharacters) {
        const isSpecialCharactersANumber =
          typeof specialCharacters === 'number';
        const uppercasesMessage = isSpecialCharactersANumber
          ? `Must contain ${specialCharacters} special character${specialCharacters > 1 ? 's' : ''}`
          : specialCharacters.errorMessage;
        const digits = isSpecialCharactersANumber
          ? specialCharacters
          : specialCharacters.value;

        schema = schema.test('uppercases', uppercasesMessage, (value = '') => {
          const justSpecialCharacters = value
            .replace(REGEX.SPECIAL_CHARACTERS, '')
            .replace(REGEX.SPACES, '');
          return justSpecialCharacters.length >= digits;
        });
      }

      return generator;
    },
    alphanumeric(alphanumeric?: boolean | string) {
      if (alphanumeric) {
        const alphanumericMessage =
          typeof alphanumeric === 'string'
            ? alphanumeric
            : 'Only alphanumeric characters are allowed';
        schema = schema.test(
          'alphanumeric',
          alphanumericMessage,
          (value = '') => {
            const justAlphanumerics = value.replace(REGEX.ALPHANUMERIC, '');
            return !justAlphanumerics;
          },
        );
      }

      return generator;
    },
    get() {
      return schema;
    },
  };

  return generator;
};

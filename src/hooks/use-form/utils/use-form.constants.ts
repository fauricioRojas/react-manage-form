export const REGEX = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE_NUMBER:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  NUMBERS: /\D+/g,
  LOWERCASES: /[^a-z]+/g,
  UPPERCASES: /[^A-Z]+/g,
  SPECIAL_CHARACTERS: /[^`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/g,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  SPACES: /\s/g,
};

export const DEFAULT_REQUIRED = 'Required';

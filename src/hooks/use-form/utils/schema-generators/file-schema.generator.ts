import * as Yup from 'yup';

import { DEFAULT_REQUIRED, type Accept, type FileExtension } from '..';

export const fileSchemaGenerator = () => {
  let schema = Yup.mixed();

  const generator = {
    required(required?: boolean | string) {
      if (required) {
        const requiredMessage =
          typeof required === 'string' ? required : DEFAULT_REQUIRED;
        schema = schema.test(
          'required',
          requiredMessage,
          // @ts-expect-error use FileList to type the parameter
          (fileList: FileList | undefined) =>
            fileList ? fileList.length : false,
        );
      }

      return generator;
    },
    accept(accept?: FileExtension[] | Accept) {
      if (accept) {
        const isAcceptAnArray = Array.isArray(accept);
        const formatter = new Intl.ListFormat('en', {
          style: 'long',
          type: 'conjunction',
        });
        const extensions = formatter.format(
          isAcceptAnArray ? accept : accept.value,
        );
        const acceptMessage = isAcceptAnArray
          ? `Only ${extensions} files are allowed`
          : accept.errorMessage;
        schema = schema.test(
          'fileExtension',
          acceptMessage,
          (fileList?: FileList) => {
            if (fileList && fileList.length) {
              const fileExtension = `.${fileList[0].name.split('.').pop()}`;
              return (isAcceptAnArray ? accept : accept.value).includes(
                fileExtension as FileExtension,
              );
            }
            return true;
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

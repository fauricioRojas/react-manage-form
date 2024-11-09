import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm as useFormRHF, type DefaultValues } from 'react-hook-form';

import { generateSchema, type Field } from './utils';

interface IUseForm<T> {
  fields: Field<T>[];
  defaultValues?: DefaultValues<T>;
}

const useForm = <T>({ fields, defaultValues }: IUseForm<T>) => {
  const schema = useMemo(
    () => generateSchema(fields),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fields],
  );

  // @ts-expect-error Need passing T to type which values can be registered
  return useFormRHF<T>({
    resolver: yupResolver(schema),
    defaultValues,
  });
};

export { useForm, type Field };

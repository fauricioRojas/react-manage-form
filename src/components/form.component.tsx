import { type FormEvent, type PropsWithChildren } from 'react';
import {
  FormProvider,
  type DefaultValues,
  type FieldValues,
} from 'react-hook-form';

import { useDidUpdate, useForm, type Field } from '../hooks';

type FormProps<T> = PropsWithChildren & {
  fields: Field<T>[];
  defaultValues?: DefaultValues<T>;
  id?: string;
  resetAfterSubmit?: boolean;
  gap?: number;
  onSubmit: (data: T) => void;
  watchValues?: (values: T) => void;
};

export const Form = <T extends FieldValues>({
  fields,
  defaultValues,
  id,
  resetAfterSubmit,
  gap = 4,
  onSubmit,
  watchValues,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({ fields, defaultValues });
  const { handleSubmit, reset, watch } = methods;
  const watchedValues = watchValues ? watch() : null;
  console.log('watchedValues: ', watchedValues);

  const handleReset = () => reset();

  const localSubmit = (event: FormEvent<HTMLFormElement>) => {
    handleSubmit(onSubmit)(event);
    if (resetAfterSubmit) handleReset();
  };

  useDidUpdate(() => {
    if (watchValues && watchedValues) {
      watchValues(watchedValues);
    }
  }, [watchValues, watchedValues]);

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={localSubmit}
        onReset={handleReset}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: gap > 0 ? `${gap * 0.25}rem` : undefined,
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm as useFormRHF } from 'react-hook-form';
import { generateSchema } from './utils';
const useForm = ({ fields, defaultValues }) => {
    const schema = useMemo(() => generateSchema(fields), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fields]);
    // @ts-expect-error Need passing T to type which values can be registered
    return useFormRHF({
        resolver: yupResolver(schema),
        defaultValues,
    });
};
export { useForm };
//# sourceMappingURL=use-form.hook.js.map
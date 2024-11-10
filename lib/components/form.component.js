import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, } from 'react-hook-form';
import { useDidUpdate, useForm } from '../hooks';
export const Form = ({ fields, defaultValues, id, resetAfterSubmit, gap = 4, onSubmit, watchValues, children, }) => {
    const methods = useForm({ fields, defaultValues });
    const { handleSubmit, reset, watch } = methods;
    const watchedValues = watchValues ? watch() : null;
    const handleReset = () => reset();
    const localSubmit = (event) => {
        handleSubmit(onSubmit)(event);
        if (resetAfterSubmit)
            handleReset();
    };
    useDidUpdate(() => {
        if (watchValues && watchedValues) {
            watchValues(watchedValues);
        }
    }, [watchValues, watchedValues]);
    return (_jsx(FormProvider, Object.assign({}, methods, { children: _jsx("form", { id: id, onSubmit: localSubmit, onReset: handleReset, style: {
                display: 'flex',
                flexDirection: 'column',
                gap: gap > 0 ? `${gap * 0.25}rem` : undefined,
            }, children: children }) })));
};
//# sourceMappingURL=form.component.js.map
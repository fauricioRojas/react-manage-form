import { useEffect, useRef } from 'react';
export function useDidUpdate(callback, props) {
    const mountedRef = useRef(false);
    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true;
            return;
        }
        callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, props);
}
//# sourceMappingURL=use-did-update.hook.js.map
import { useEffect, useRef } from 'react';

export function useDidUpdate<T>(callback: () => void, props: T[]) {
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, props);
}

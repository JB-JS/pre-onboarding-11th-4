import { useState, useEffect, useRef } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef<null | ReturnType<typeof setTimeout>>(null);

  const initDebounce = () => {
    setDebouncedValue('');
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, [value, delay, timer]);

  return { debouncedValue, timer, initDebounce };
}

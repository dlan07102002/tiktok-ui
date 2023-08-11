import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
    const [debouncedValue, setDeboucedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay)

        return () => clearTimeout(handler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
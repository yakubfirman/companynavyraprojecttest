import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-sm border-gray-200 bg-gray-50 focus:bg-white px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 transition-colors w-full ' +
                className
            }
            ref={localRef}
        />
    );
});

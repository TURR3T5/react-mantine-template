import { useEffect, useRef } from 'react';

interface NuiMessage<T = unknown> {
  action: string;
  data: T;
}

/**
 * Adds a message event listener for a specific NUI action.
 * Automatically updates the handler without re-registering the event.
 *
 * @param action - The event type to listen for.
 * @param handler - The callback to execute when the event is received.
 */
export function useNuiEvent<T>(action: string, handler: (data: T) => void) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: MessageEvent<NuiMessage<T>>) => {
      if (event.data?.action === action) {
        handlerRef.current(event.data.data);
      }
    };

    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, [action]);
}

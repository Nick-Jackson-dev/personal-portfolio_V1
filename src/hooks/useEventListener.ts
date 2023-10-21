import { useEffect, useRef } from "react"

type useEventListenerType = {
  eventType: string
  callback: Function
  target?: EventTarget | MediaQueryList | null
}

export default function useEventListener({
  eventType,
  callback,
  target = window,
}: useEventListenerType) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (target == null) return
    const handler = (e: Event): void => callbackRef.current(e)
    target.addEventListener(eventType, handler)

    return () => target.removeEventListener(eventType, handler)
  }, [eventType, target])
}

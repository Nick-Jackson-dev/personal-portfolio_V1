import { useState, useEffect, RefObject, MutableRefObject } from "react"

export default function useSize(
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>
): {} {
  const [size, setSize] = useState({})

  useEffect(() => {
    if (ref.current == null) return
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return size
}

import { useEffect, useRef } from "react"

//FIXME: doesn't work with react@18
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}

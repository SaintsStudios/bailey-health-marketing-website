import { useEffect, useState } from 'react'

interface ScreenDimensions {
  width: number
  height: number
}

/**
 * Hook to get the screen dimensions
 * @returns {ScreenDimensions} - The screen dimensions
 * @constructor
 * @example
 * import useScreenDimensions from '@/lib/hooks/useDimensions'
 *
 * const Component = (): JSX.Element => {
 *  const { width, height } = useScreenDimensions()
 *
 * return (
 *  <div>
 *   <p>Width: {width}</p>
 *   <p>Height: {height}</p>
 *  </div>
 * )
 */
const useScreenDimensions = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = (): void => {
      const { innerWidth, innerHeight } = window ?? {
        innerWidth: 0,
        innerHeight: 0,
      }

      setScreenDimensions({
        width: innerWidth,
        height: innerHeight,
      })
    }

    if (typeof window !== 'undefined') {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenDimensions
}

export default useScreenDimensions

'use client'
import { useCallback, useEffect, useState } from 'react';

const isClientSide = typeof window !== 'undefined'

export function useWindowWidth() {
  const [width, setWidth] = useState(isClientSide ? window.innerWidth : 1080)

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return width;
}
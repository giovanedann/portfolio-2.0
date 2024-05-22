'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useEffectText } from './useEffectText';

type EffectTextProps = {
  words: string;
  className?: string;
  textSize?: string;
  startDelay?: number;
}

export function EffectText({
  words,
  className,
  textSize,
  startDelay
}: EffectTextProps) {
  const { renderWords } = useEffectText({ words, startDelay })

  return (
    <div className={cn('font-bold', className)}>
      <div className='mt-4'>
        <div
          className={
            cn(
              'text-white leading-snug tracking-wide',
              textSize
            )
          }>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
'use client'

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export function useEffectText({ words, startDelay }: { words: string, startDelay?: number }) {
  const [scope, animate] = useAnimate();

  let wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.4, { startDelay: startDelay }),
      }
    );
  }, [scope.current]); // eslint-disable-line

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return (
            <motion.span
              key={word + index}
              className="text-white opacity-0"
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return { renderWords }
}
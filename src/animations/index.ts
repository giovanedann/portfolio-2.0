import { IAnimation } from "./interface";

export const slideLeft: IAnimation = {
  initial: { x: -2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 2000, opacity: 0 },
  transition: { x: { duration: 1.3 }, opacity: { duration: 1.3 } },
};

export const slideUp: IAnimation = {
  initial: { y: -2000, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -2000, opacity: 0 },
  transition: { duration: 0.8 },
};

export const slideRight: IAnimation = {
  initial: { x: 2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 2000, opacity: 0 },
  transition: { x: { duration: 0.7 }, opacity: { duration: 0.8 } },
};

export const fade: IAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { opacity: { duration: 0.4 } },
};

export const popOut: IAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { scale: { duration: 0.5 }, opacity: { duration: 0.5 } },
};

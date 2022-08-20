interface IDuration {
  duration: number;
}
interface IDelay {
  delay: number;
}
interface IAnimationTransition extends IDuration, IDelay {
  x: IDuration;
  opacity: IDuration;
  y: IDuration;
  scale: IDuration;
  delayTime: IDelay;
}

interface IAnimationSteps {
  x: number | string;
  y: number | string;
  opacity: number | string;
  scale: number | string;
}

export interface IAnimation {
  initial: Partial<IAnimationSteps>;
  animate: Partial<IAnimationSteps>;
  exit: Partial<IAnimationSteps>;
  transition: Partial<IAnimationTransition>;
}

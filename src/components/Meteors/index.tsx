import { cn } from "@/utils/cn";

type MeteorProps = {
  number?: number;
  className?: string;
  left?: number
}
 
export function Meteors({ number, className, left = 400 }: MeteorProps) {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((_, index) => (
        <span
          key={"meteor" + index}
          className={cn(
            "animate-meteor-effect absolute top-0 left-0 h-[3px] w-[3px] rounded-full bg-sky-300 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-0 before:transform before:-translate-y-[50%] before:w-[36px] before:h-[1px] before:bg-sky-500/20 before:from-[#a7ecee] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (left - -left) + -left) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (100 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
declare module "framer-motion" {
  import type { ComponentType, HTMLAttributes } from "react";

  type MotionProps = HTMLAttributes<HTMLElement> & {
    initial?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
  };

  export const motion: {
    section: ComponentType<MotionProps>;
  };
}

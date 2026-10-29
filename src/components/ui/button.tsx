import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-[#061211] shadow-glow hover:bg-[#73f7e7] hover:-translate-y-0.5",
      secondary: "border border-white/10 bg-white/[0.045] text-foreground hover:border-primary/40 hover:bg-white/[0.08]",
      ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground",
      outline: "border border-primary/35 text-primary hover:bg-primary/10"
    },
    size: { default: "h-11 px-5", sm: "h-9 px-4 text-xs", lg: "h-12 px-7", icon: "h-10 w-10" }
  },
  defaultVariants: { variant: "default", size: "default" }
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";
export { Button, buttonVariants };
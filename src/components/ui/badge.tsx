import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        evenement: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
        commerce: "border-transparent bg-[hsl(45,90%,55%)] text-white hover:bg-[hsl(45,90%,45%)]",
        urbanisme: "border-transparent bg-[hsl(25,75%,55%)] text-white hover:bg-[hsl(25,75%,45%)]",
        education: "border-transparent bg-[hsl(220,85%,60%)] text-white hover:bg-[hsl(220,85%,50%)]",
        culture: "border-transparent bg-[hsl(280,70%,60%)] text-white hover:bg-[hsl(280,70%,50%)]",
        environnement: "border-transparent bg-[hsl(140,60%,45%)] text-white hover:bg-[hsl(140,60%,35%)]",
        mairie: "border-transparent bg-[hsl(200,60%,50%)] text-white hover:bg-[hsl(200,60%,40%)]",
        information: "border-transparent bg-[hsl(0,0%,50%)] text-white hover:bg-[hsl(0,0%,40%)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

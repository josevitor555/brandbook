import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  intent?: "primary" | "secondary" | "success" | "warning" | "info" | "destructive"
}

export function CustomButton({
  intent,
  className,
  variant,
  ...props
}: CustomButtonProps) {
  // Map our custom intents to specific classes using the design tokens
  const intentClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    success: "bg-success text-success-foreground hover:bg-success/90",
    warning: "bg-warning text-warning-foreground hover:bg-warning/90",
    info: "bg-info text-info-foreground hover:bg-info/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  }

  return (
    <Button
      variant={variant}
      className={cn(
        intent && !variant && intentClasses[intent],
        className
      )}
      {...props}
    />
  )
}

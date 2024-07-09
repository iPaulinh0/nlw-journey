import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx";

type Variants = "primary" | "secondary"
type ButtonProps = TouchableOpacityProps & {
  variant?: Variants
  isLoading?: boolean
}

function Button({
  variant = "primary",
  children,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx("w=full h-11 flex-row items-center justify-center rounded-lg gap-2", {
        "bg-lime-300": variant === "primary",
        "bg-zinc-800": variant === "secondary"
      })}
      activeOpacity={.7}
    {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  return <Text>{ children }</Text>
}

Button.Title = Title

export { Button }


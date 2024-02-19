import { TouchableOpacity } from "react-native"
import React, { ReactNode } from "react"
import { colors, spacing } from "app/theme"

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps): React.ReactElement => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.surfaceBrand,
        borderRadius: spacing.xs,
        gap: spacing.xxs,
        flex: 1,
        overflow: "hidden",
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Card
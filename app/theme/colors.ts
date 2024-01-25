// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  grey50: "#F1F1F1",
  grey200: "#D3D3D3",
  grey400: "#AFAFAF",
  grey600: "#7C7C7C",
  grey800: "#343434",
  grey900: "#202020",

  neutral50: "#FBF8F3",
  neutral100: "#d3d4d7",
  neutral150: "#CCCCC3",
  neutral200: "#a7a8b0",
  neutral300: "#7b7d88",
  neutral400: "#4f5161",
  neutral500: "#232639",
  neutral600: "#1c1e2e",
  neutral700: "#151722",
  neutral800: "#0e0f17",
  neutral900: "#07080b",
  neutralOverlay: "#4c4d67",

  primary50: "#dc878d",
  primary200: "#d15f67",
  primary400: "#c53741",
  primary600: "#762127",
  primary800: "#4f161a",
  primary900: "#270b0d",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  secondary50: "#E5C3A6",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * A helper for making something white.
   */
  white: "white",
  whiteTransparent: "rgba(255, 255, 255, 0.3)",
  dimTransparent: "rgba(0, 0, 0, 0.3)",
  /**
   * Text color in many components.
   */
  textPrimary: palette.grey900,
  textSecondary: palette.grey600,
  textBrand: palette.primary400,
  textBrandSecondary: palette.neutral500,
  textBrandSecondaryDark: palette.neutral600,
  textInvert: palette.grey50,
  textDim: palette.grey400,

  secondaryTextPrimary: palette.secondary50,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary600,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  /**
   * Surface
   */
  surfaceDark: palette.neutralOverlay,
  surfacePrimary: palette.neutral800,
  surfaceSecondaryPlus: palette.neutral150,
  surfaceSecondary: palette.neutral100,
  surfaceInvert: palette.neutral700,
  surfaceBrand: palette.neutral500,
  /**
   * Icon
   */
  iconPrimary: palette.secondary50,
  iconSecondary: palette.primary600,
  iconInvert: palette.primary200,
  /**
   * Border
   */
  borderPrimary: palette.grey900,
  borderBrand: palette.primary600,
  borderSecondary: palette.neutral500,
  /**
   * App
   */
  ayahShadow: "#0000FF",
  cardShadow: "#000000",
}

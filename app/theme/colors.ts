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
  neutral200: "#a6acbb",
  neutral300: "#7a8298",
  neutral400: "#4d5976",
  neutral500: "#212f54",
  neutral600: "#1a2643",
  neutral700: "#141c32",
  neutral800: "#0d1322",
  neutral900: "#070911",
  neutralOverlay: "#4c4d67",

  primary100: "#fdf4cc",
  primary200: "#fbea9a",
  primary300: "#f9df67",
  primary400: "#f7d535",
  primary500: "#f5ca02",
  primary600: "#c4a202",
  primary700: "#937901",
  primary800: "#625101",
  primary900: "#312800",


  angry100: "#F2D6CD",
  angry500: "#C03403",

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
  textPrimary: palette.primary500,
  textSecondary: palette.neutral500,

  textBrand: palette.neutral50,
  textBrandSecondary: palette.neutral500,
  textBrandSecondaryDark: palette.neutral600,

  textInvert: palette.grey50,
  textDim: palette.grey400,

  secondaryTextPrimary: palette.primary500,
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
  surfaceDark: palette.neutral900,
  surfacePrimary: palette.neutral900,
  surfaceSecondary: palette.neutral100,
  surfaceSecondaryPlus: palette.neutral150,
  surfaceInvert: palette.neutral800,
  surfaceBrand: palette.neutral500,
  /**
   * Icon
   */
  iconPrimary: palette.primary500,
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

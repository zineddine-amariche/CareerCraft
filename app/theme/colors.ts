// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#D8E4F6",
  primary200: "#B4C8ED",
  primary300: "#819ACB",
  primary400: "#536898",
  primary500: "#212F54",
  primary600: "#182348",
  primary700: "#101A3C",
  primary800: "#0A1130",
  primary900: "#060B28",
  primary900CC: "#060B28CC",

  secondary100: "#fff4c7",
  secondary200: "#ffefc2",
  secondary300: "#f9e4b7",
  secondary400: "#d5c296",
  secondary500: "#b6a379",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  white: "#FFFFFF",
  black: "#000000",

  color_success_100: "#DFF8D1",
  color_success_200: "#BAF2A5",
  color_success_300: "#85DA72",
  color_success_400: "#54B549",
  color_success_500: "#1D841B",
  color_success_600: "#137119",
  color_success_700: "#0D5F19",
  color_success_800: "#084C18",
  color_success_900: "#053F17",

  color_info_100: "#C7F8EC",
  color_info_200: "#91F2E2",
  color_info_300: "#57DACF",
  color_info_400: "#2DB5B5",
  color_info_500: "#007984",
  color_info_600: "#005E71",
  color_info_700: "#00475F",
  color_info_800: "#00334C",
  color_info_900: "#00253F",

  color_warning_100: "#FAF8CA",
  color_warning_200: "#F6F198",
  color_warning_300: "#E4DD62",
  color_warning_400: "#CAC139",
  color_warning_500: "#A89D08",
  color_warning_600: "#908505",
  color_warning_700: "#786F04",
  color_warning_800: "#615802",
  color_warning_900: "#504801",

  color_danger_100: "#FADCD0",
  color_danger_200: "#F5B4A2",
  color_danger_300: "#E27E6F",
  color_danger_400: "#C54D48",
  color_danger_500: "#A01920",
  color_danger_600: "#891223",
  color_danger_700: "#730C24",
  color_danger_800: "#5C0723",
  color_danger_900: "#4C0422",
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
  whiteTransparent: "rgba(255, 255, 255, 0.3)",
  dimTransparent: "rgba(0, 0, 0, 0.3)",
  /**
   * Text color in many components.
   */
  textPrimary: palette.neutral100,
  textSecondary: palette.neutral900,

  textBrand: palette.primary600,
  textBrandSecondary: palette.secondary400,

  textInvert: palette.primary900,
  textInvertSecondary: palette.secondary500,

  textDim: palette.neutral200,
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * The default color of the screen background.
   */
  background: palette.primary900,
  /**
   * The main tinting color.
   */
  tint: palette.neutral800,
  /**
   * A subtle color used for lines.
   */
  separator: palette.secondary500,
  /**
   * Error messages.
   */
  error: palette.color_danger_600,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.color_danger_500,

  /**
   * Surface
   */
  surfaceDark: palette.black,
  surfaceWhite: palette.white,
  surfacePrimary: palette.primary900,
  surfaceSecondary: palette.secondary400,
  surfaceInvert: palette.primary700,
  surfaceInvertSecondary: palette.secondary100,
  surfaceBrand: palette.primary600,
  surfaceBrandSecondary: palette.secondary400,
  surfaceDim: palette.primary900CC,

  /**
   * Icon
   */
  iconPrimary: palette.white,
  iconSecondary: palette.black,
  iconInvert: palette.primary900,
  iconInvertSecondary: palette.secondary500,

  iconBrandSecondary: palette.secondary400,
  iconBrand: palette.primary600,
  /**
   * Border
   */
  borderPrimary: palette.primary500,
  borderSecondary: palette.secondary500,
  borderBrand: palette.primary600,
  /**
   * App
   */
  ayahShadow: "#0000FF",
  cardShadow: "#000000",
}

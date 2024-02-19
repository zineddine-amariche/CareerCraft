import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing } from "app/theme"
import { View } from "react-native"
import Constants from "expo-constants"
import { faker } from "@faker-js/faker"
import { withTiming, useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated"

import { height } from "app/theme/dimensions"
import HeadHome from "./components/HeadHome"
import HeadList from "./components/HeadList"
import InfoList from "./components/InfoList"
import { Screen } from "../Screen"

faker.seed(10)

export interface HomePageViewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const HomePageView = observer(function HomePageView(props: HomePageViewProps) {
  const scrollY = useSharedValue(0)
  const headerAnim = useSharedValue(0)
  const headerHeight = useSharedValue(height)

  const onScroll = useAnimatedScrollHandler((event) => {
    const { y } = event.contentOffset
    scrollY.value = y
    headerAnim.value = y
  })

  return (
    <Screen>
      <View
        style={$header}
        onLayout={(ev) => {
          if (headerHeight.value === ev.nativeEvent.layout.height) {
            return
          }
          headerHeight.value = withTiming(ev.nativeEvent.layout.height, {
            duration: 0,
          })
        }}
      >
        <HeadHome headerHeight={headerHeight} headerAnim={headerAnim} />
        <HeadList headerAnim={headerAnim} />
      </View>
      <InfoList onScroll={onScroll} headerHeight={headerHeight} />
    </Screen>
  )
})

const $header: ViewStyle = {
  top: Constants.statusBarHeight,
  left: spacing.sm,
  position: "absolute",
  zIndex: 1,
}

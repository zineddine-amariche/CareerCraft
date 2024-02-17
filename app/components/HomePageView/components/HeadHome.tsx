import { Pressable, StyleSheet, View } from "react-native"
import React from "react"
import { Text } from "app/components/Text"
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { sideNavigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import { width } from "app/theme/dimensions"
import { Icon } from "app/components/Icon"
import Constants from "expo-constants"

const HeadHome = ({ headerHeight, headerAnim }) => {
  const _itemSize = width * 0.35

  const balanceStylez = useAnimatedStyle(() => {
    const _extraSectionHeaderSpacing = spacing.sm * 3
    return {
      opacity: interpolate(
        headerAnim.value,
        [0, _itemSize, _itemSize + _extraSectionHeaderSpacing, headerHeight.value],
        [1, 1, 1, 0],
      ),
      transform: [
        {
          translateY: interpolate(
            headerAnim.value,
            [
              0,
              _itemSize,
              _itemSize + _extraSectionHeaderSpacing,
              _itemSize + _extraSectionHeaderSpacing + 1,
            ],
            [0, 0, 0, -1],
          ),
        },
      ],
    }
  })
  return (
    <Animated.View
      style={[{ paddingVertical: spacing.sm, marginBottom: spacing.sm }, balanceStylez]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.sm }}>
        <Pressable
          onPress={() => {
            sideNavigate()
          }}
          style={[
            {
              width: 48,
              height: 48,
              borderRadius: 52,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: colors.secondaryTextPrimary,
            },
          ]}
        >
          <Icon icon="profileImage" size={spacing.xl} />
        </Pressable>
        <View style={{}}>
          <Text
            style={
              [
                // styles.regular,
                // { fontSize: 23, color: colors.secondaryTextPrimary, textTransform: "uppercase" },
              ]
            }
            numberOfLines={1}
            preset={"heading"}
            size="lg"
          >
            Amariche Zineddine
          </Text>
          <Text style={[{}]} preset={"subheading"} size="sm">
            Full Stack Mobile Developer (MERN stack)
          </Text>
        </View>
      </View>
    </Animated.View>
  )
}

export default HeadHome

const styles = StyleSheet.create({
  bold: {
    fontFamily: "LatoBold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.surfacePrimary,
    padding: spacing.sm,
  },
  header: {
    top: Constants.statusBarHeight,
    left: spacing.sm,
  },
})

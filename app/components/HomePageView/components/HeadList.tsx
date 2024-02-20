import { View, FlatList } from "react-native"
import React from "react"
import Animated, { useAnimatedStyle, Extrapolate, interpolate } from "react-native-reanimated"
import { width } from "app/theme/dimensions"
import Card from "./Card"
import { colors, metrics, spacing } from "app/theme"
import { Icon } from "app/components/Icon"
import { Text } from "app/components/Text"
import { TxKeyPath } from "app/i18n"

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

const _headerData = require("assets/db/Home/HeadList.json")

const HeadList = ({ headerAnim }: { headerAnim: Animated.SharedValue<number> }) => {
  const _itemSize = width * 0.35

  const headerStylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          perspective: _itemSize * 5,
        },
        {
          translateY: interpolate(
            headerAnim.value,
            [0, _itemSize],
            [0, -_itemSize / 2],
            Extrapolate.CLAMP,
          ),
        },
        {
          rotateX: `${interpolate(
            headerAnim.value,
            [0, _itemSize],
            [0, 90],
            Extrapolate.CLAMP,
          )}deg`,
        },
      ],
      opacity: interpolate(
        headerAnim.value,
        [0, _itemSize / 2, _itemSize],
        [1, 1, 0],
        Extrapolate.CLAMP,
      ),
    }
  })

  return (
    <AnimatedFlatlist
      data={_headerData}
      keyExtractor={(item) => item.key}
      horizontal
      style={[{ flexGrow: 0 }, headerStylez]}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: spacing.sm }} />}
      contentContainerStyle={{ paddingEnd: spacing.lg }}
      renderItem={({ item, index }) => {
        return (
          <Card>
            <View
              style={{
                flexDirection: "row",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <View
                style={{
                  paddingVertical: spacing.sm,
                  paddingHorizontal: spacing.md,
                  overflow: "hidden",
                  width: width * 0.5,
                  gap: spacing.xxs,
                }}
              >
                <Text
                  preset={"subheading"}
                  size="sm"
                  numberOfLines={1}
                  style={{ color: colors.textPrimary }}
                  tx={item.tx as TxKeyPath}
                />

                <Text
                  tx={item.projectName as TxKeyPath}
                  size="md"
                  style={{ color: colors.textBrandSecondary }}
                  preset="heading"
                  numberOfLines={1}
                ></Text>
                <Text style={[{ fontSize: 10, opacity: 0.6 }]}>{"From : 10/2023"}</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  backgroundColor: colors.surfaceBrandSecondary,
                  borderTopRightRadius: metrics.roundedMedium,
                  borderBottomRightRadius: metrics.roundedMedium,
                  paddingHorizontal: spacing.xs,
                }}
              >
                <Icon icon={item.icon} size={34} color={colors.iconBrand} />
              </View>
            </View>
          </Card>
        )
      }}
    />
  )
}

export default HeadList

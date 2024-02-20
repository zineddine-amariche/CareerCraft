import { View, ViewStyle } from "react-native"
import React from "react"
import Card from "./Card"
import { Text } from "app/components/Text"
import { Icon } from "app/components/Icon"
import { TxKeyPath } from "app/i18n"
import { colors, spacing } from "app/theme"

const InnerFList = ({ items }) => {
  return (
    <Card>
      <View style={$container}>
        <Text
          preset={"subheading"}
          style={[
            {
              opacity: 0.6,
            },
          ]}
        >
          {items.date}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: spacing.xs,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: colors.surfaceBrandSecondary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon="react" size={spacing.xl} color={colors.iconBrand} />
          </View>
          <View style={{}}>
            <Text
              preset={"title"}
              numberOfLines={1}
              size="lg"
              style={{ color: colors.textBrandSecondary }}
              tx={`${items.type}.${items.name}.name` as TxKeyPath}
            />

            <Text tx={`${items.type}.${items.name}.job` as TxKeyPath} />
          </View>
        </View>

        <View style={{ flex: 1, gap: spacing.sm }}>
          <Text
            style={{ fontSize: 12, opacity: 0.8 }}
            preset={"subtitle"}
            numberOfLines={2}
            tx={`${items.type}.${items.name}.description` as TxKeyPath}
          ></Text>
        </View>
      </View>
    </Card>
  )
}

export default InnerFList


const $container: ViewStyle = {
  padding: spacing.sm,
  gap: spacing.xxs,
}

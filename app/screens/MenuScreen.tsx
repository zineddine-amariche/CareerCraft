import React, { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon, Text } from "app/components"
import { colors, metrics, spacing } from "app/theme"
import { TxKeyPath } from "app/i18n"
import { useSideHeader } from "app/utils/useSideHeader"
import { SideStackScreenProps } from "app/navigators/SideNavigator"
import { navigate } from "app/navigators"

interface MenuScreenProps extends SideStackScreenProps<"Menu"> {}

const drawerList = [
  { name: "menus.index", icon: "index", navigateTo: "Home", inSideMenu: true },
  { name: "menus.masahif", icon: "mushaf", navigateTo: "Details", inSideMenu: true },
  { name: "menus.settings", icon: "cog", navigateTo: "OnBoarding", inSideMenu: true },
  { name: "menus.prejcts", icon: "cog", navigateTo: "Languages", inSideMenu: false },
]

export const MenuScreen: FC<MenuScreenProps> = function MenuScreen(_props) {
  useSideHeader({ titleTx: "menus.home" })
  const { navigation } = _props

  return (
    <View style={$container}>
      {drawerList.map((item) => {
        return (
          <TouchableOpacity
            key={item.name}
            style={$itemContainer}
            onPress={() => {
              if (item.inSideMenu) {
                navigate(item.navigateTo)
              } else {
                navigation.navigate(item.navigateTo)
              }
            }}
          >
            <Icon size={30} icon={item.icon} color={colors.iconPrimary} />
            <Text tx={item.name as TxKeyPath} style={$itemText} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.md,
  flex: 1,
  backgroundColor: colors.surfaceSecondary,
  borderBottomRightRadius: metrics.roundedLarge,
}
const $itemContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 10,
  paddingHorizontal: 20,
}
const $itemText: TextStyle = {
  marginLeft: 20,
  fontSize: 18,
}

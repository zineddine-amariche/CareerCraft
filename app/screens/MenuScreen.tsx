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
  { name: "menus.home", icon: "home", navigateTo: "Home", inSideMenu: true },
  { name: "menus.services", icon: "services", navigateTo: "Services", inSideMenu: true },
  { name: "menus.about", icon: "about", navigateTo: "About", inSideMenu: true },
  { name: "menus.skills", icon: "skills", navigateTo: "Skills", inSideMenu: false },
  { name: "menus.portfolio", icon: "portfolio", navigateTo: "Portfolio", inSideMenu: false },
  { name: "menus.contact", icon: "contact", navigateTo: "Contact", inSideMenu: false },
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

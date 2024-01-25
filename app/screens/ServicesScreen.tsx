import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useSideHeader } from "app/utils/useSideHeader"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ServicesScreenProps extends AppStackScreenProps<"Services"> {}

export const ServicesScreen: FC<ServicesScreenProps> = observer(function ServicesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useSideHeader({ titleTx: "menus.services" })
  return (
    <Screen style={$root} preset="scroll">
      <Text text="services" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.textBrandSecondaryDark,

}

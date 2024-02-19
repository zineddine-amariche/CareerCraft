import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useSideHeader } from "app/utils/useSideHeader"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AboutScreenProps extends AppStackScreenProps<"About"> {}

export const AboutScreen: FC<AboutScreenProps> = observer(function AboutScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useSideHeader({ titleTx: "menus.about" })

  const $containerInsets = useSafeAreaInsetsStyle(["bottom"])
  return (
    <Screen style={$root} preset="scroll">
      <Text text="about" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.surfaceBrand,

}

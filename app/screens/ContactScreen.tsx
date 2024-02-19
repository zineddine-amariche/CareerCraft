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

interface ContactScreenProps extends AppStackScreenProps<"Contact"> {}

export const ContactScreen: FC<ContactScreenProps> = observer(function ContactScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useSideHeader({ titleTx: "menus.contact" })

  const $containerInsets = useSafeAreaInsetsStyle(["bottom"])
  return (
    <Screen style={$root} preset="scroll">
      <Text text="contact" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.surfaceBrand,
}

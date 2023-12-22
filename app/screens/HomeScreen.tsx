import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HomePageView } from "app/components"
import { StatusBar } from "expo-status-bar"
import { colors } from "app/theme"
import { useSharedValue, withTiming } from "react-native-reanimated"
import { useStores } from "app/models"
interface HomeScreenProps extends AppStackScreenProps<"HomeScreen"> {}
const { height } = Dimensions.get("screen")

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const {
    uiStore: { setShadowModalShow },
  } = useStores()
  const [show, setShow] = useState(true)

  const headerHeight = useSharedValue(0) // Initialiser à 0
  const showHeader = () => {
    headerHeight.value = withTiming(height) // La hauteur finale du header
  }

  const hideHeader = () => {
    headerHeight.value = withTiming(height - 100) // La hauteur finale du header
  }

  useEffect(() => {
    if (show) {
      hideHeader() // Afficher le header au montage du composant
    } else {
      showHeader() // Afficher le header au montage du composant
    }
  }, [show])

  return (
    <View style={[$root]}>
      <StatusBar translucent={true} />
      <View
        style={$container}
        onTouchStart={(e) => setShadowModalShow(false)}
        pointerEvents={"box-none"}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <HomePageView />
        </View>
      </View>
    </View>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
}

const $container: ViewStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: colors.surfaceSecondary,
}


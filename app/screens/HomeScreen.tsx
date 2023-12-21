import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HackerText } from "app/components"
import { StatusBar } from "expo-status-bar"
import HomeHeader from "app/components/HomeHeader"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { colors, spacing } from "app/theme"
import { runOnJS } from "react-native-reanimated"
import { useStores } from "app/models"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"

interface HomeScreenProps extends AppStackScreenProps<"HomeScreen"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const {
    uiStore: { setShadowModalShow },
  } = useStores()
  const [show, setShow] = useState(true)
  const gesture = Gesture.Tap().onEnd(() => {
    runOnJS(setShow)(!show)
  })

  const [index, setIndex] = React.useState(0)
  const timer = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    const changeSentence = () => {
      timer.current = setTimeout(() => {
        setIndex((index) => {
          return (index + 1) % sentence.length
        })
        changeSentence()
      }, 3000)
    }

    changeSentence()

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={[$root,$bottomContainerInsets]}>
      <StatusBar translucent={true} />
      <View
        style={$container}
        onTouchStart={(e) => setShadowModalShow(false)}
        pointerEvents={"box-none"}
      >
        <HomeHeader show={show} />
        <GestureDetector gesture={gesture}>
          
          <View style={{flex:1,justifyContent:"flex-end",padding:spacing.md}}>
          <HackerText
            text={sentence[index] as string}
            style={{
              fontSize: 20,
              fontFamily: "Menlo",
              fontWeight: "bold",
            }}
            uppercase
          />

          <HackerText
            text={subtitles[index] as string}
            style={{
              marginTop: 10,
              fontSize: 14,
              fontFamily: "Menlo",
              opacity: 0.7,
            }}
            // uppercase
          />
          </View>

        </GestureDetector>
        {/* <MediaControlBar show={show} /> */}
      </View>
      {/* <DetailsSelectedAyahModal /> */}
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

const sentence = [
  // 'Be yourself; everyone else is already taken.',
  `So many books, so little time.`,
  // `A room without books is like a body without a soul.`,
  `Made with love by @zineddine`,
  `Using Expo and Reanimated`,
]
const subtitles = [
  // 'Be yourself; everyone else is already taken.',
  `- _ - _ - _ -`,
  // `A room without books is like a body without a soul.`,
  `Follow me on Twitter for more`,
  `. . . . . . . . . . . . . . .`,
]

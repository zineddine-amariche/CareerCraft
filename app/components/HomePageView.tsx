import * as React from "react"
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import {
  StatusBar,
  SafeAreaView,
  SectionList,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native"
import Constants from "expo-constants"
import { faker } from "@faker-js/faker"
import Animated, {
  Extrapolate,
  interpolate,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated"
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato"
import { Icon } from "./Icon"
import { sideNavigate } from "app/navigators"

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)

const { width, height } = Dimensions.get("screen")

faker.seed(10)
const emojis = ["😃", "🧘🏻‍♂️", "🌍", "🍞", "🚗", "🎉", "🍆", "react", "🍔"]

const _months = ["Experience", "Education", "Certificates"]

const _headerData = [...Array(5).keys()].map((i) => ({
  key: faker.number.int(),
  amount: faker.finance.amount(500, 8500, 0, "$"),
  department: faker.commerce.department(),
  emoji: emojis[Math.floor(Math.random() * emojis.length)],
}))

const experienceData = [
  {
    key: "Experience",
    date: "2020-01",
    Company: "DjeelTech Company | Blida ‚algeria",
    job: "Mobile developer (ios / android )",
    type: "inbound",
    department: "Mobile",
    productName: "React Native",
    emoji: "react",
  },
  {
    key: "Experience",
    date: "2019-01",
    Company: "Another Company | Location",
    job: "Another Job",
    type: "inbound",
    department: "Another Department",
    productName: "Another Product",
    emoji: "react",
  },
  {
    key: "Experience",
    date: "2019-01",
    Company: "Another Company | Location",
    job: "Another Job",
    type: "inbound",
    department: "Another Department",
    productName: "Another Product",
    emoji: "react",
  },
]

const educationData = [
  {
    key: "Education",
    date: "2018-01",
    Company: "University of Algeria | Algiers, Algeria",
    job: "Student",
    type: "inbound",
    department: "Computer Science",
    productName: "Bachelor's Degree",
    emoji: "graduation-cap",
  },
  {
    key: "Education",
    date: "2018-01",
    Company: "University of Algeria | Algiers, Algeria",
    job: "Student",
    type: "inbound",
    department: "Computer Science",
    productName: "Bachelor's Degree",
    emoji: "graduation-cap",
  },
  {
    key: "Education",
    date: "2018-01",
    Company: "University of Algeria | Algiers, Algeria",
    job: "Student",
    type: "inbound",
    department: "Computer Science",
    productName: "Bachelor's Degree",
    emoji: "graduation-cap",
  },
]

const certificatesData = [
  {
    key: "Certificates",
    date: "2021-01",
    Company: "Certificate Provider",
    job: "Certificate Name",
    type: "inbound",
    department: "Certificate Department",
    productName: "Certificate Product",
    emoji: "certificate",
  },
  {
    key: "Certificates",
    date: "2021-01",
    Company: "Certificate Provider",
    job: "Certificate Name",
    type: "inbound",
    department: "Certificate Department",
    productName: "Certificate Product",
    emoji: "certificate",
  },
]
const _data = _months.map((month) => ({
  title: month,
  key: month,
  data:
    month === "Experience"
      ? experienceData
      : month === "Education"
      ? educationData
      : certificatesData,
}))

console.log("_data", _data)

const _colors = {
  bg: "#030303",
  text: "#EAE9EE",
}
const _spacing = 10
const _itemSize = width * 0.35
const _otherSize = width * 0.35

export interface HomePageViewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const HomePageView = observer(function HomePageView(props: HomePageViewProps) {
  const { style } = props
  const $styles = [$container, style]

  let [fontsLoaded] = useFonts({
    LatoRegular: Lato_400Regular,
    LatoBold: Lato_700Bold,
  })
  const headerAnim = useSharedValue(0)
  const scrollY = useSharedValue(0)
  const headerHeight = useSharedValue(height)
  const onScroll = useAnimatedScrollHandler((event) => {
    const { y } = event.contentOffset
    scrollY.value = y
    // if (y < _itemSize) {
    headerAnim.value = y
    // }
  })
  const dummyHeaderStylez = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    }
  })
  const balanceStylez = useAnimatedStyle(() => {
    const _extraSectionHeaderSpacing = _spacing * 3
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
  // React.useEffect(() => {
  //   headerAnim.value = withRepeat(withTiming(_itemSize, {duration: 2000}), Infinity, true)
  // })

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.header, { position: "absolute", zIndex: 1 }]}
        onLayout={(ev) => {
          if (headerHeight.value === ev.nativeEvent.layout.height) {
            return
          }
          headerHeight.value = withTiming(ev.nativeEvent.layout.height, {
            duration: 0,
          })
        }}
      >
        <Animated.View
          style={[{ paddingVertical: _spacing, marginBottom: _spacing }, balanceStylez]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.xs }}>
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
                style={[
                  styles.regular,
                  { fontSize: 25, color: colors.secondaryTextPrimary, textTransform: "uppercase" },
                ]}
                numberOfLines={1}
              >
                Amariche Zineddine
              </Text>
              <Text style={[styles.regular, { color: _colors.text, opacity: 0.6 }]}>
                Full Stack Developer (MERN)
              </Text>
            </View>
          </View>
        </Animated.View>
        <AnimatedFlatList
          data={_headerData}
          keyExtractor={(item) => item.key}
          horizontal
          style={[{ flexGrow: 0 }, headerStylez]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  backgroundColor: colors.surfacePrimary,
                  marginRight: _spacing,
                  borderRadius: 8,
                  flexDirection: "row",
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ padding: spacing.md, gap: spacing.xs - 2 }}>
                  <Text style={[styles.bold, { fontSize: 12, color: _colors.text }]}>
                    currently working on
                  </Text>
                  <Text style={[styles.bold, { fontSize: 16, color: colors.secondaryTextPrimary }]}>
                    {"MushafApp"}
                  </Text>
                  <Text
                    style={[
                      styles.regular,
                      { fontSize: 10, opacity: 0.6, color: colors.secondaryTextPrimary },
                    ]}
                  >
                    {"From : 10/2023"}
                  </Text>
                </View>
                <View
                  style={{
                    width: 1,
                    height: "100%",
                    opacity: 0.1,
                    backgroundColor: colors.secondaryTextPrimary,
                  }}
                />
                <View style={{ padding: spacing.md }}>
                  <Icon icon="react" size={34} color={colors.secondaryTextPrimary} />
                </View>
              </View>
            )
          }}
        />
      </View>
      <AnimatedSectionList
        sections={_data}
        keyExtractor={(item) => item.key}
        onScroll={onScroll}
        ListHeaderComponent={<Animated.View style={dummyHeaderStylez} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ backgroundColor: `${_colors.bg}cc` }}>
            <Text
              style={[
                styles.bold,
                {
                  fontSize: 24,
                  color: _colors.text,
                  padding: _spacing,
                  marginVertical: _spacing,
                },
              ]}
            >
              {title}
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginBottom: _spacing,
                margin: _spacing,
                backgroundColor: colors.surfacePrimary,
                paddingVertical: spacing.sm,
                gap: spacing.sm,
              }}
            >
              <View style={{ paddingHorizontal: spacing.sm }}>
                <Text
                  style={[
                    styles.bold,
                    {
                      color: colors.textInvert,
                      fontSize: 10,
                      opacity: 0.6,
                    },
                  ]}
                >
                  {item.date} - Today ..
                </Text>
              </View>

              <View style={{ flexDirection: "row", paddingHorizontal: _spacing + 2 }}>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: `${_colors.text}16`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon icon="react" color={colors.secondaryTextPrimary} size={spacing.xl} />
                </View>
                <View style={{ paddingHorizontal: spacing.xs }}>
                  <Text
                    style={[
                      styles.bold,
                      {
                        color: colors.secondaryTextPrimary,
                        fontSize: 16,
                      },
                    ]}
                  >
                    {item.Company}
                  </Text>
                  <Text style={[styles.regular, { color: colors.textInvert, opacity: 0.6 }]}>
                    {item.job}
                  </Text>
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                ></View>
              </View>

              <View style={{ flex: 1, paddingHorizontal: _spacing + 2, gap: spacing.sm }}>
                <Text style={{ fontSize: 12, color: "#FFF3" }} numberOfLines={2}>
                  In order to embark on a new experience and enhance my skills, I started here in
                  developing phone applications through React Native. I ma currently working on Mac,
                  aiming to develop phone applications and upload them to the App Store. So far, I
                  have learned new things and gained years of experience after my interaction with
                  developers who have over 15 years of expertise ni the field. Iwas able to quickly
                  adapt ot hte team.
                </Text>
              </View>
            </View>
          )
        }}
      />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "LatoRegular",
  },
  bold: {
    fontFamily: "LatoBold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: _colors.bg,
    padding: _spacing,
  },
  header: {
    top: Constants.statusBarHeight,
    left: _spacing,
  },
})

const $shadow: ViewStyle = {
  shadowColor: colors.white,
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
}

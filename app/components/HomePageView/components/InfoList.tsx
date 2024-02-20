import { SectionList, View } from "react-native"
import React from "react"
import Animated, { useAnimatedStyle } from "react-native-reanimated"
import { colors, spacing } from "app/theme"
import { width } from "app/theme/dimensions"
import Constants from "expo-constants"
import { Text } from "app/components/Text"
import InnerFList from "./InnerFList"

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)

const experienceData = require("assets/db/Home/Experiences.json")
const educationData = require("assets/db/Home/Educations.json")
const certificatesData = require("assets/db/Home/Certificates.json")

const InfoListData = [
  {
    title: "Home.experience",
    data: experienceData,
  },
  {
    title: "Home.education",
    data: educationData,
  },
  {
    title: "Home.certificates",
    data: certificatesData,
  },
]

const InfoList = ({ onScroll, headerHeight }) => {
  const dummyHeaderStylez = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    }
  })
  return (
    <AnimatedSectionList
      sections={InfoListData}
      keyExtractor={(item, index) => item + index}
      onScroll={onScroll}
      contentContainerStyle={{
        gap: spacing.sm,
        width: width - spacing.sm * 2,
        alignSelf: "center",
        paddingTop: Constants.statusBarHeight,
      }}
      ListHeaderComponent={<Animated.View style={dummyHeaderStylez} />}
      ListFooterComponent={<View style={{ height: 100 }} />}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: `${colors.background}` }}>
          <Text
            style={[
              {
                paddingVertical: spacing.sm,
                marginVertical: spacing.sm,
              },
            ]}
            preset={"heading"}
            tx={title}
          />
        </View>
      )}
      renderItem={({ item }) => {
        return <InnerFList items={item} />
      }}
    />
  )
}

export default InfoList

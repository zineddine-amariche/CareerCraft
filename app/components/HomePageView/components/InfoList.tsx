import { SectionList, View, ViewStyle } from "react-native"
import React from "react"
import Animated, { useAnimatedStyle } from "react-native-reanimated"
import { Text } from "app/components/Text"
import { colors, spacing } from "app/theme"
import { width } from "app/theme/dimensions"
import { Icon } from "app/components/Icon"
import Constants from "expo-constants"
import Card from "./Card"

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)

const experienceData = require("assets/db/Home/ProgressInformation.json")
const educationData = require("assets/db/Home/Experiences.json")
const certificatesData = require("assets/db/Home/Certificates.json")

const _months = ["Experience", "Education", "Certificates"]
 

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

const InfoList = ({ onScroll, headerHeight }) => {
  const dummyHeaderStylez = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    }
  })
  return (
    <AnimatedSectionList
      sections={_data}
      keyExtractor={(item) => item.key}
      onScroll={onScroll}
      contentContainerStyle={{
        gap: spacing.sm,
        width: width - spacing.sm * 2,
        alignSelf: "center",
        paddingTop: Constants.statusBarHeight,
      }}
      ListHeaderComponent={<Animated.View style={dummyHeaderStylez} />}
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
          >
            {title}
          </Text>
        </View>
      )}
      renderItem={({ item }) => {
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
                {item.date} - Today ..
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
                  >
                    {item.Company}
                  </Text>
                  <Text>{item.job}</Text>
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                ></View>
              </View>

              <View style={{ flex: 1, gap: spacing.sm }}>
                <Text style={{ fontSize: 12, opacity: 0.8 }} preset={"subtitle"} numberOfLines={2}>
                  In order to embark on a new experience and enhance my skills, I started here in
                  developing phone applications through React Native. I ma currently working on Mac,
                  aiming to develop phone applications and upload them to the App Store. So far, I
                  have learned new things and gained years of experience after my interaction with
                  developers who have over 15 years of expertise ni the field. Iwas able to quickly
                  adapt ot hte team.
                </Text>
              </View>
            </View>
          </Card>
        )
      }}
    />
  )
}

export default InfoList

const $container: ViewStyle = {
  padding: spacing.sm,
  gap: spacing.xxs,
}

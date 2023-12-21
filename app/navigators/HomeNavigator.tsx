import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { DetailsScreen, HomeScreen, OnBoardingScreen } from "app/screens"
import { metrics } from "app/theme"
import { SideNavigator } from "./SideNavigator"

const MainDrawer = createDrawerNavigator()

const MainDrawerContent = ({ navigation }: { navigation: any }) => {
  React.useEffect(() =>
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault()
    }),
  )

  return <SideNavigator independent={true} />
}
export function HomeNavigator() {
  return (
    <MainDrawer.Navigator
      id="MainDrawer"
      drawerContent={(props) => <MainDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          width: "90%",
          overflow: "hidden",
          borderBottomRightRadius: metrics.roundedLarge,
          borderTopRightRadius: metrics.roundedLarge,
        },
      }}
    >
      <MainDrawer.Screen name="Home" component={HomeScreen} />
      <MainDrawer.Screen name="Details" component={DetailsScreen} />
      <MainDrawer.Screen name="OnBoarding" component={OnBoardingScreen} />

    </MainDrawer.Navigator>
  )
}

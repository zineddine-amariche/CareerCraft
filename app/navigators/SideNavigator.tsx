import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import * as Screens from "app/screens"
import { colors } from "app/theme"
import { subNavigationRef } from "./navigationUtilities"

export type SideStackParamList = {
  Menu: undefined
  details: undefined
  Languages: undefined
}

export type SideStackScreenProps<T extends keyof SideStackParamList> = NativeStackScreenProps<
  SideStackParamList,
  T
>

const Stack = createNativeStackNavigator<SideStackParamList>()

interface SideNavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const SideNavigator = observer(function SideNavigator(props: SideNavigationProps) {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer
      ref={subNavigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: colors.transparent,
          animation: "flip",
        }}
        initialRouteName={"Menu"}
      >
        <Stack.Screen name="Menu" component={Screens.MenuScreen} />
        <Stack.Screen name="Languages" component={Screens.LanguagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
})

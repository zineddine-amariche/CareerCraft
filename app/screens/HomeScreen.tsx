import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { HomePageView } from "app/components"
interface HomeScreenProps extends AppStackScreenProps<"HomeScreen"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  return <HomePageView />
})

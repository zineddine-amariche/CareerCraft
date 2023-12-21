import RNRestart from "react-native-restart"

const restartApp = () => {
  setTimeout(() => {
    if (RNRestart) {
      RNRestart.restart()
    }
  })
}

export default restartApp

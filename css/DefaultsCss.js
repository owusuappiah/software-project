import { StyleSheet, Dimensions } from 'react-native'

const c = {
    white: "white",
    black: "black"
    , color: "#5F5F5F",
    lightColor: "gray",
    facebookColor: "#2D4880",
    red: "#DD4B39",
    blue: "rgb(0,122,255)", //"#00B3E2",
    darkBlue: "#02556a",
    deepBlue: "rgb(10, 56, 107)",
    gradientBlue: "linear-gradient(90deg, rgba(50,69,74,1) 0%, rgba(19,135,166,1) 60%, rgba(2,85,106,1) 100%)",
    green: "#219653",
    themeBlack: "#232222",
    lightGray: "#eee",
    gray: "#ccc",
    shadowColor: "rgba(0,0,0,0.25)",
    lightGrey: "#dedede", // #dedede
    twitter: "rgb(29, 161, 242)",
    yellow: "#ffcc00",
    gold: "#bf9b30",
    lightGreen: "#2196530d",
    lightRed: "#dd4b391a",
    lightGold: "#bf9b3038",
    lightBlue: "rgba(0, 122, 255, 0.1)",
    rgba: ({ transparency = "0.1", colors = "0, 0, 0" }) => `rgba(${colors}, ${transparency})`,
}

const s = {
    icon_default_size: 24,
    icon_small_size: 20,
    headerMaxHeight: 80,
    headerMinHeight: 70,
    headerTitleLargeSize: 35,
    headerTitleSmallSize: 22,
    paddingHorizontal: 15,
    paddingRight: 15,
    paddingLeft: 15,
    buttonPaddingHorizontal: 25,
    buttonPaddingVeritical: 15,
    rounded: 30,
    checkboxSize: 30,
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
    logIconSize: 40,
}

const DefaultCss = StyleSheet.create({
   
})


export var Colors = c

export const Sizes = s

export default DefaultCss;
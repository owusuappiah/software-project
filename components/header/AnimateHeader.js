import React from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Sizes, Colors } from '../../css/DefaultsCss';

const { headerMaxHeight, headerMinHeight, headerTitleLargeSize, headerTitleSmallSize, paddingHorizontal, paddingLeft } = Sizes;
const c = Colors;

/**
 * 
 * @param {*} scrollY: Animated Value (eg: Animated.value(2))
 * @param {String} headerTitleText: Header title text
 */
export const AnimateHeader = (scrollY = new Animated.Value(0)) => {
    const headerInputRange = [1, headerMaxHeight - 60, 60];
    /**
     * @description Fade in the Header View on Scroll
     */
    const HeaderOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [0, 0, 1],
        extrapolate: "clamp"
    })

    /**
     * @description Fade in the Header Title on Scroll
     */
    const HeaderTitleOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [0, 0, 1],
        extrapolate: "clamp"
    })


    return {
        headerOpacity: HeaderOpacity,
        headerTitleOpacity: HeaderTitleOpacity,
        callAnimation: Animated.event([
            {
                nativeEvent: { contentOffset: { y: scrollY } }
            }
        ])
    }

}

export const FlexView = ({ component, style }) => {
    return (
        <View style={[styles.collapsable, style]}>
            {component}
        </View>
    )
}

export const AnimatedHeaderTitle = ({ title, headerTitleBoldStyle }) => {
    return (
        <Animated.View style={[styles.collapse, styles.h]}>
            <Animated.Text allowFontScaling={true} style={[styles.largeTitle, headerTitleBoldStyle]}>{title}</Animated.Text>
        </Animated.View>
    )
}
export const NavButton = ({ component, onPress, buttonStyle, disabled }) => {
    return (
        <Animated.View style={styles.collapse}>
            <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.navButton, buttonStyle]}>
                {component}
            </TouchableOpacity>
        </Animated.View>
    )
}

export const Header = ({ titleOpacity, headerOpacity, headerStyle, headerTitleStyle, headerTitle, headerRight, headerRightStyle }) => {
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { opacity: headerOpacity }, headerStyle]}>
                <Animated.View style={styles.navView}>
                    <SafeAreaView>
                        <Animated.Text style={[styles.title, { opacity: titleOpacity }, headerTitleStyle]}>
                            {headerTitle}
                        </Animated.Text>
                        <Animated.View style={[styles.right, { opacity: titleOpacity }, headerRightStyle]}>
                            {headerRight}
                        </Animated.View>
                    </SafeAreaView>
                </Animated.View>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: c.white,
        // height: headerMaxHeight,
        
    },
    header: {
        // position: "absolute",
        width: "100%",
        height: headerMaxHeight,
        backgroundColor: c.white,
        paddingHorizontal: paddingHorizontal,
        shadowColor: c.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        // zIndex: 1000,
        alignItems: "center",
        justifyContent: "center",
    },
    collapse: {
        paddingHorizontal: paddingHorizontal,
        // height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    h: {
        // flexWrap: "wrap",
        // height: "auto"
    },
    largeTitle: {
        fontSize: headerTitleLargeSize,
        fontWeight: "800",
        color: c.themeBlack,
        width: Dimensions.get("window").width / 1.5,
    },
    navView: {
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: c.green,
        // flexDirection: "row"
    },
    right: {
        // flexDirection: "row"
        // alignSelf: "baseline"
    },
    title: {
        alignSelf: "center",
        fontSize: headerTitleSmallSize,
        fontWeight: "bold",
    },
    collapsable: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },
    navButton: {
        borderRadius: 100,
        padding: 12,
        backgroundColor: c.lightBlue
    }
    // safeArea - alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: "100%"
})


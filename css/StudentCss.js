import { Dimensions, StyleSheet } from 'react-native'
import  { Colors, Sizes } from './DefaultsCss'

const c = Colors;
const s = Sizes
const StudentCss = StyleSheet.create({
    container: {
        flex: 1
    },
    smartComponent: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom:20
    },
    smartList: {
        height: 200,
        width: 120,
        backgroundColor: "white",
        borderRadius: 16,
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        // overflow: "hidden",
        marginRight: 10,
    },
    smartImage: {
        width:"100%",
        height: 120,
        padding: 4,
        borderRadius: 16,
        overflow:"hidden"
    },

    smartDetail: {
        padding: 10
    },
    smartImg: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow:"hidden",
    },
    smartBold: {
        fontWeight:"800",
        marginBottom: 5,
        fontSize: 15,
        height: 30
    },
    smartLight: {
        color: c.lightColor,fontSize: 14
    },
    collapsible:{
        marginBottom: 10
    },
    SubTitle: {
        fontSize: 16,
        color: c.lightColor,
        textTransform: "uppercase"
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 15 
    },
    otherList: {
        width: (Dimensions.get("window").width / 2) - 20,
        marginBottom: 15,
        marginRight: 10
    },

})


export default StudentCss
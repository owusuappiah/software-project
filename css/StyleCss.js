import { Dimensions, StyleSheet } from 'react-native'
import  { Colors, Sizes } from './DefaultsCss'

const c = Colors;
const s = Sizes
const StyleCss = StyleSheet.create({
    container: {
        flex: 1
    },
    listTitle: {
        fontWeight: "800"
    },
    listSubTitle: {
        color: c.lightColor
    },
    jj: {
        fontWeight: "800",
        marginTop: 4,
        color: c.lightColor
    }
})


export default StyleCss
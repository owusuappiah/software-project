import React, { useState } from 'react'
import { FlatList, View, RefreshControl, Text, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Header, AnimatedHeaderTitle, AnimateHeader, NavButton, FlexView } from '../components/header/AnimateHeader';
import { NavigationURI } from '../models/Vars';
import { IconAdd, IconClassRoom } from '../components/Icons';
import { Colors } from '../css/DefaultsCss';
import StudentCss from '../css/StudentCss';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StudentCss
const c = Colors;
const URI = NavigationURI
let ScreenTitle = 'Students';
const StudentsScreen = () => {
    const AH = new AnimateHeader()
    return (
        <View style={styles.container}>
            <Header titleOpacity={AH.titleOpacity} headerOpacity={AH.headerOpacity} headerTitle={ScreenTitle} />
            <ListClasses callAnimation={AH.callAnimation} scrollEventThrottle={16} />
        </View>
    )
}

const ListClasses = ({ callAnimation, scrollEventThrottle }) => {

    const [data, setData] = useState([
        {
            name: "Owusu Appiah",
            id: "1711531223",
            profileImage: require('../assets/images/owusu.jpg')
        },
        {
            name: "Tatty Yann Exauce",
            id: "1811561103",
            profileImage: require('../assets/images/owusu.jpg')
        },
        {
            name: "Brook Mabrejs Agonafir",
            id: "1711531108",
            profileImage: ""
        },
        {
            name: "Patrick Ali Saidi",
            id: "1811561101",
            profileImage: ""
        },
    ])

    const [refreshing, setrefreshing] = useState(false)
    const onRefresh = () => {
        setrefreshing(true)
        setTimeout(() => {
            setrefreshing(false)
        }, 1000);
    }
    return (
        <>
            <ScrollView scrollEventThrottle={scrollEventThrottle} onScroll={callAnimation}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />}>
                <FlexView style={styles.collapsible}
                    component={
                        <React.Fragment>
                            <AnimatedHeaderTitle title={ScreenTitle} />
                        </React.Fragment>
                    }
                />
                <SubTitle text="Smart ones" />
                <SmartComponent />
                <SubTitle text="Others" />
                <Others />
            </ScrollView>
        </>
    )
}

const SmartComponent = () => {
    const [data, setData] = useState([
        {
            name: "Owusu Appiah",
            id: "1711531223",
            profileImage: require('../assets/images/owusu.jpg')
        },
        {
            name: "Tatty Yann Exauce",
            id: "1811561103",
            profileImage: require('../assets/images/yann.jpg')
        },
       
        {
            name: "Patrick Ali Saidi",
            id: "1811561101",
            profileImage: require('../assets/images/patrick.jpg')
        },
        {
            name: "Ndion Bertinand Freshnele",
            id: "1811561102",
            profileImage: require('../assets/images/nel.jpg')
        },
        {
            name: "Nuuyoma Moses Tangeni",
            id: "1711551104",
            profileImage: require('../assets/images/moses.jpg')
        },
        {
            name: "Chindondi Ossiah Kundai",
            id: "1711531219",
            profileImage: require('../assets/images/kun.png')
        },
        {
            name: "Brook Mabrejs Agonafir",
            id: "1711531108",
            profileImage: ""
        },
        {
            name: "Machanzi Taponeswa",
            id: "1711531213",
            profileImage: ""
        },

    ])
    return (
        <ScrollView style={styles.smartComponent} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                data.map((a, i) => {
                    return (
                        <SmartList data={a} key={i} />
                    )
                })
            }
            <View style={{ padding: 20 }}></View>
        </ScrollView>
    )
}

const Others = () => {
    const [data, setData] = useState([
        {
            name: "Others ",
            id: "1711531223",
            profileImage: ""
        },
        {
            name: "Tatty Yann Exauce",
            id: "1811561103",
            profileImage: ""
        },
        {
            name: "Brook Mabrejs Agonafir",
            id: "1711531108",
            profileImage: ""
        },
        {
            name: "Patrick Ali Saidi",
            id: "1811561101",
            profileImage: ""
        },
        {
            name: "Ndion Bertinand Freshnele",
            id: "1811561102",
            profileImage: ""
        },
        {
            name: "Chindondi Ossiah Kundai",
            id: "1711531219",
            profileImage: ""
        },
        {
            name: "Nuuyoma Moses Tangeni",
            id: "1711551104",
            profileImage: ""
        },
        {
            name: "Machanzi Taponeswa",
            id: "1711531213",
            profileImage: ""
        },
    ])
    return (
        <View style={styles.grid}>
            {
                data.map((a, i) => {
                    return (
                        <OtherList pos={i} data={a} key={i} />
                    )
                })
            }
        </View>
    )
}

const SmartList = ({ data, style }) => {
    const {
        name, id, profileImage
    } = data
    return (
        <View style={[styles.smartList, style]}>
            <View style={styles.smartImage}>
                <Image resizeMethod="resize" resizeMode={profileImage  === "" ? "contain" : "cover"} source={profileImage || require('../assets/images/user.png')} style={styles.smartImg} />
            </View>
            <View style={styles.smartDetail}>
                <View>
                    <Text numberOfLines={2} style={styles.smartBold}>{name}</Text>
                    <Text style={styles.smartLight}>{id}</Text>
                </View>
            </View>
        </View>
    )
}

const OtherList = ({ data, pos }) => {
    data.name = "John Amendi B. Doe " + (pos + 1)
    return (
        <SmartList data={data} style={styles.otherList} />
    )
}

const SubTitle = ({ text }) => <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}><Text style={styles.SubTitle}>{text}</Text></View>

export default StudentsScreen

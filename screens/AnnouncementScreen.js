import React, { useState } from 'react'
import { FlatList, View, RefreshControl, Text, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Header, AnimatedHeaderTitle, AnimateHeader, NavButton, FlexView } from '../components/header/AnimateHeader';
import { IconAnnouncement, IconBell, IconBell2 } from '../components/Icons';
import { Colors } from '../css/DefaultsCss';
import StyleCss from '../css/StyleCss';

const styles = StyleCss
const c = Colors;
let ScreenTitle = 'Announcements';
const AnnouncementScreen = () => {
    const AH = new AnimateHeader()
    return (
        <View style={styles.container}>
            <Header titleOpacity={AH.titleOpacity} headerOpacity={AH.headerOpacity} headerTitle={ScreenTitle} />
            <Announcements callAnimation={AH.callAnimation} scrollEventThrottle={16} />
        </View>
    )
}

const Announcements = ({ callAnimation, scrollEventThrottle }) => {
    const [data, setData] = useState([
        {
            text: "Please submit the Software project on the 20th of December. Students who fail to do so will not pass.",
            id: "adsfads-f-as-d-f-asd",
            title: "Software project submission date",
            read: false
        },
        {
            text: "Please submit the Titanic project on the last day of January. Students who fail to do so will not pass.",
            id: "dsfasd-f-sad-f-ds",
            title: "Submit your paper",
            read: false
        },
        {
            text: "Please submit the Software project on the 20th of December. Students who fail to do so will not pass.",
            id: "adsfads-f-as-dsdsdsd-f-asd",
            title: "Come to Building 8 - Room 20",
            read: true
        },
        {
            text: "Please submit the Titanic project on the last day of January. Students who fail to do so will not pass.",
            id: "dsdssfasd-f-sad-f-ds",
            title: "Complete your practicals in class",
            read: false
        },
        {
            text: "Please submit the Software project on the 20th of December. Students who fail to do so will not pass.",
            id: "adsssssfads-f-as-d-f-asd",
            title: "Excursion to Microsoft",
            read: true
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
        <FlatList style={styles.listContainer} scrollEventThrottle={scrollEventThrottle} onScroll={callAnimation}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => {
                return (
                    <List data={item} />
                )
            }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />}
            ListHeaderComponent={() =>
                <React.Fragment>
                    <FlexView style={styles.collapsible}
                        component={
                            <React.Fragment>
                                <AnimatedHeaderTitle title={ScreenTitle} />
                            </React.Fragment>
                        }
                    />
                </React.Fragment>
            }
        />
    )
}

const List = ({ data }) => {
    const {
        title, text, id, read
    } = data
    return (
        <ListItem
            leftIcon={read ? <IconBell2 size={18} color={Colors.blue} /> : <IconBell />}
            title={title}
            titleStyle={styles.listTitle}
            subtitle={text} subtitleStyle={styles.listSubTitle}
            subtitleProps={{ numberOfLines: 2 }}
            bottomDivider={true}
        />
    )
}



export default AnnouncementScreen

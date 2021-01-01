import React, { useState } from 'react'
import { FlatList, View, RefreshControl, Text, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Header, AnimatedHeaderTitle, AnimateHeader, NavButton, FlexView } from '../components/header/AnimateHeader';
import { IconAccount, IconAnnouncement, IconBell, IconBell2 } from '../components/Icons';
import { Colors } from '../css/DefaultsCss';
import StyleCss from '../css/StyleCss';

const styles = StyleCss
const c = Colors;
let ScreenTitle = 'Projects';
const ProjectsScreen = () => {
    const AH = new AnimateHeader()
    return (
        <View style={styles.container}>
            <Header titleOpacity={AH.titleOpacity} headerOpacity={AH.headerOpacity} headerTitle={ScreenTitle} />
            <Projects callAnimation={AH.callAnimation} scrollEventThrottle={16} />
        </View>
    )
}

const Projects = ({ callAnimation, scrollEventThrottle }) => {
    const [data, setData] = useState([
        {
            text: "Build a software and that lists all students in a class. The software should have a project and announcement system",
            id: "awrwrwrwrwrdsfads-f-as-d-f-asd",
            title: "Build mobile app",
            score: 100,
            date: "December 20, 2020"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            id: "adsssrwrwrfads-f-as-d-f-asd",
            title: "Design a game",
            score: 100,
            date: "February 20, 2020"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco",
            id: "adsfads-f-as-d-f-asd",
            title: "Build a e-commerce website",
            score: 100,
            date: "June 20, 2020"
        },
        {
            text: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            id: "adsfads-fdsfd-as-d-f-asd",
            title: "Use Java to crawl wikipedia ",
            score: 100,
            date: "March 20, 2020"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            id: "adsfaddsfsdfdss-f-as-d-f-asd",
            title: "Design a simple chat app",
            score: 100,
            date: "April 20, 2020"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            id: "adsfasdsds-f-as-d-f-asd",
            title: "Practice Dev",
            score: 100,
            date: "December 20, 2020"
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
        title, text, id, score, date
    } = data
    return (
        <ListItem
            leftIcon={<IconAccount />}
            containerStyle={{alignItems: "flex-start"}}
            title={title}
            titleStyle={styles.listTitle}
            subtitle={
                <View>
                    <Text>{text}</Text>
                    <Text style={styles.jj}>Score:  {score}</Text>
                    <Text style={styles.jj}>DeadLine:  {date}</Text>
                </View>
            } 
            subtitleStyle={styles.listSubTitle}
            subtitleProps={{ numberOfLines: 2 }}
            bottomDivider={true}
        />
    )
}


export default ProjectsScreen


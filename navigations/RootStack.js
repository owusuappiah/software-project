import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Colors } from '../css/DefaultsCss';

import { IconAccount, IconStudent, IconAnnouncement } from '../components/Icons';
import { NavigationURI } from '../models/Vars';
import ProjectsScreen from '../screens/ProjectsScreen';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import StudentsScreen from '../screens/StudentsScreen';


 
const Tab = createBottomTabNavigator()
const iconSize = 24;
const URI = NavigationURI;
const { blue, lightGray } = Colors;

const mainTabOptions = {
    activeTintColor: blue,
    labelStyle: {
        fontSize: 13,
    },
    style: {
        backgroundColor: lightGray
    },
    // showLabel: false
}

function MainAppTabBar() {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={mainTabOptions}
        >
            <Tab.Screen
                name={URI.studentsScreen}
                component={StudentsScreen}
                options={{
                    tabBarLabel: "Students",
                    tabBarIcon: ({ color, size }) => (
                        <IconStudent size={iconSize} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={URI.announcementScreen}
                component={AnnouncementScreen}
                options={{
                    tabBarLabel: "Announcements",
                    tabBarIcon: ({ color, size }) => (
                        <IconAnnouncement size={iconSize} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={URI.feedScreen}
                component={ProjectsScreen}
                options={{
                    tabBarLabel: "Projects",
                    tabBarIcon: ({ color, size }) => (
                        <IconAccount size={iconSize} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
    
}



export default MainAppTabBar;
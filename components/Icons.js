import React from 'react'
import { Ionicons, FontAwesome, MaterialCommunityIcons, 
    Feather, Fontisto, MaterialIcons, AntDesign, FontAwesome5,
    EvilIcons
 } from '@expo/vector-icons';
import { Colors, Sizes } from '../css/DefaultsCss';

const cl = Colors.lightColor
const sz = Sizes.icon_default_size

// Tab bar Icons
// export const IconClasses = ({color = cl, size = sz})=> <MaterialCommunityIcons name="layers-outline" size={size} color={color} />
export const IconAccount = ({color = cl, size = sz})=> <Feather name="book" size={24} color={color} />
export const IconStudent = ({color = cl, size = sz})=> <FontAwesome5 name="user-graduate" size={size} color={color} />
export const IconAnnouncement = ({color = cl, size = sz})=> <AntDesign  name="notification" size={24} color={color} />
export const IconBell = ({color = cl, size = sz})=> <EvilIcons name="bell" size={size} color={color} />
export const IconBell2 = ({color = cl, size = sz})=> <FontAwesome name="bell" size={size} color={color} />
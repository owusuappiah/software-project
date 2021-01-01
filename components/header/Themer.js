import React, {useContext} from 'react'
import {DarkThemeContext} from './Context'
export const Themer = (params)=> {
    const theme = useContext(DarkThemeContext)
    return (
        theme
    )
}
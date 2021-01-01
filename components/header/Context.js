import React from 'react'


/**
 * @description Context to check if user is logged in or not
 * @description TRUE -- if logged in
 * @description FALSE -- if not logged in
 * 
 */
export const AuthenStateContext = React.createContext()
export const UserAuthToken = React.createContext("test")
export const DarkThemeContext = React.createContext(true)
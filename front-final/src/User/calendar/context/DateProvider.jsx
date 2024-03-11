import React, { useState } from 'react'
import { DateContext } from './DateContext'

export const DateProvider = ({ children }) => {

    const [stateStart, setStateStart] = useState(new Date())
    const [stateEnd, setStateEnd] = useState(new Date())

    const [stateStartSub, setStateStartSub] = useState(new Date())
    const [stateEndSub, setStateEndSub] = useState(new Date())

    return (

        <DateContext.Provider value={{stateStart,setStateStart,stateEnd,setStateEnd,stateStartSub, setStateStartSub,stateEndSub, setStateEndSub }}>
            {children}
        </DateContext.Provider>
    )
}


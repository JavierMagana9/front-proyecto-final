import React, { useState } from 'react'
import { DateContext } from './DateContext'

export const DateProvider = ({ children }) => {

    const [stateStart, setStateStart] = useState(new Date())
    const [stateEnd, setStateEnd] = useState(new Date())


    return (

        <DateContext.Provider value={{ msg: "=========aca toy",stateStart,setStateStart,stateEnd,setStateEnd }}>
            {children}
        </DateContext.Provider>
    )
}


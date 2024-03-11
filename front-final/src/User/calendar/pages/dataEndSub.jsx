import React from 'react'

export const dataEndSub = () => {
   // const [stateStart, setStateStart] = useState(new Date())
    // const [start, setStart] = useState('')

   
const {stateEndSub, setStateEndSub}=useContext(DateContext)


const handleDateChangeStart = (date) => {
   
    setStateStartSub(date)

}

// const dateStart=()=>{


// }

return (
    <div>
          {/* <p>DATA PICKER START</p>
        <pre>{JSON.stringify(stateStart, null, 3)}</pre> */}
        {/* <pre>{JSON.stringify(start, null, 3)}</pre> */}
        {/* <DataPicker
            selected={state}
            onChange={date => setState(date)}
            minDate={new Date()}
        /> */}
        <DataPicker
            selected={stateStartSub}
            onChange={handleDateChangeStart}
            minDate={new Date()}
            locale={es}
        />
{/* <input type="button" value="fecha inicio" onClick={dateStart}  />
        <hr /> */}
    </div>
)
}


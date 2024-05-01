import React, {useState} from 'react'

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (e)=> setColor(e.target.value)
    return(
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <p>Selected color: {color}</p>
            <label htmlFor="">Select a color:</label>
            <input onChange={(e)=> handleColorChange(e)} value={color} type="color" />
        </div>
    )
}

export default ColorPicker;
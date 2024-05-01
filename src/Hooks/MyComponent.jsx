import React, {useState} from 'react'

function MyComponent(){
    let [text, setText] = useState("");
    let [quantity, setQuantity] = useState(0);
    let [comment, setComment] = useState("")
    // let []
    const getText = (e) => setText(e.target.value)
    const getQuantity = (e) => setQuantity(e.target.value)
    const handleComment = (e) => setComment(e.target.value)

    return(
        <div>            
            <input type="text" onChange={(e)=> getText(e)} />
            <p>Text: {text} </p>

            <input type="number" onChange={(e)=> getQuantity(e)} />
            <p>Quantity: {quantity} </p>

            <textarea placeholder='enter your delivery instructions' onChange={(e)=> handleComment(e)}></textarea>
            <p>Comment: {comment}</p>
        </div>
    )
}

export default MyComponent;
import React,{useState} from "react";

function FruitsApp(){
    const [fruits, setFruits] = useState(["Apple", "Mango", "banana"])

    function addFruit(){
        const fruit = document.getElementById("fruit").value
        setFruits([...fruits, fruit])
        document.getElementById("fruit").value = ""
    }

    function removeFruit(index){
        const updatedList = fruits.filter((_, i)=> i !== index)
        setFruits(updatedList)
    }

    return(
        <div>
            <h1>Fruit list</h1>
            <ol>
                {fruits.map((fruit, index) => <li onClick={()=> removeFruit(index)} key={index}>{fruit}</li>)}
            </ol>
            <label htmlFor="">Fruit name</label>
            <input type="text" id="fruit"/>
            <button onClick={addFruit}>Add fruit</button>
        </div>
    )
}

export default FruitsApp
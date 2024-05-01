import React,{useState} from "react";

function Cars(){
    const [cars, setCars] = useState([])
    const [year, setYear] = useState(2024)
    const [name, setName] = useState("")

    function handleYearChange(event){
        setYear(event.target.value)
    }

    function handleNameChange(event){
        setName(event.target.value)
    }

    function addCar(){
        const newCar = {
            year: year,
            name: name
        }

        setCars([...cars, newCar])

        setYear(2024)
        setName("")
    }

    return(
        <div>
            <h1>Cars app</h1>
            <ul>
                {cars.map((car, index) => <li key={index}> {car.year} {car.name}</li>)}
            </ul>
            <input onChange={handleYearChange} type="number" placeholder="Enter year" value={year}/>
            <input onChange={handleNameChange} type="text" placeholder="Enter name of car" value={name}/>
            <button onClick={addCar}>Add Car</button>

        </div>
    )

}

export  default Cars
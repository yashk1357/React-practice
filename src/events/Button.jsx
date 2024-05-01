// OnClick event

function Button(){
    let a= 10
    let b=20
    const handleClick = (e,a,b) =>  e.target.innerText = (a+b)

    return(
        <button onClick={(e)=> handleClick(e,a,b)}>click me!</button>
    )
}

export default Button;

// for passing parameter
// const handleClick = (e) => e.target.innerText = "clicked"

//     return(
//         <button onClick={ (e) => *handleClick(e)}>click me!</button>
//     )
// * - start
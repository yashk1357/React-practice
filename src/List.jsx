import PropTypes from "prop-types"
function List(props){
    const itemList = props.items
    const category = props.category
    const listItems = itemList.map(item => <li key={item.id}>
                                              {item.name}:&nbsp;{item.cal}
                                          </li>)
    return(
            <>
            <h3>Category: {category}</h3>
            <ul>
             {listItems}
           </ul>
           </>
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            cal: PropTypes.number }))
}
export default List;


    // const fruits = [{id: 1, name: "apple", cal: 90},
    //                 {id:2, name: "mango", cal: 67}, 
    //                 {id:3, name: "banana", cal: 170}, 
    //                 {id:4, name: "grapes", cal: 10}, 
    //                 {id:5, name: "watermalen", cal: 120}]  ---> passing it as props

    // fruits.sort
    // fruits.sort((a,b) => a.name.localeCompare(b.name))   ----> sorting by name a to z
    // fruits.sort((a,b) => b.name.localeCompare(a.name))   ----> reverse order z to a 
    // fruits.sort((a,b) => a.cal - b.cal )  -----> numeric
    // fruits.sort((a,b) => b.cal - a.cal )  -----> reverse numeric

    // // filter items
    // const lowCalFruits = fruits.filter(fruit => fruit.cal < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.cal >= 100)
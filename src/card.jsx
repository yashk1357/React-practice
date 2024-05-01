import ProfilePic from "./assets/react.svg"
import PropTypes from "prop-types"
function Card(props){
  const name = props.name
    return(
        <div className="card">
            <img className="profile-pic" src={ProfilePic} alt="Profile pic" />
            <h4 className="card-title">{name}</h4>
            <p className="card-para">I'm a ROR developer and now learning react.</p>
            <h5>Graduated: {props.isGraduated ? "yes" : "no"}</h5>
        </div>
    )
}
Card.propTypes = {
    name: PropTypes.string,
    isGraduated: PropTypes.bool
}

Card.defaultProps = {
    name: "Guest",
    isGraduated: false
}

export default Card;

// props  : read- only properties that are shared between components
// a parent component can share data to child component
// <component_name key=value />
// propsTypes
// defaultProps
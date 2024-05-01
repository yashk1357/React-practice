import PropTypes from "prop-types"

function UserGreeting(props){
    const welcomeMessage = <h1> Welcome {props.userName} </h1>
    const loginMessage = <h1>Please login to continue</h1>
    return(props.isLogged ? welcomeMessage : loginMessage)
}

UserGreeting.propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool
}

export default UserGreeting
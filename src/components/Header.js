import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/dashboard">Home page</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help page</NavLink>
        <button onClick={startLogout()}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout)
    }
}

export default connect(undefined, mapDispatchToProps)(Header)
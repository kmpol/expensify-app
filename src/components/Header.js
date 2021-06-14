import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home page</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help page</NavLink>
    </header>
);

export default Header;
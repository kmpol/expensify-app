const Info = (props) => (
    <div>
        <p>The info is: {props.info}</p>
    </div>
)

const SecretInfoForAdmin = (WrappedComponent) => {
    return (props) => (
        <div>
            Admin Info: don't share!
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <WrappedComponent info="You are not authenticated" />}
        </div>
    )
}

const AdminInfo = SecretInfoForAdmin(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo info="Secret info" isAdmin={false}></AdminInfo>, document.getElementById('root'));

ReactDOM.render(<AuthInfo isAuthenticated={false} info="You are authenticated!"></AuthInfo>, document.getElementById('root'));
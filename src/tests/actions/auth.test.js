import { login, logout } from '../../actions/auth'

test('should log in user', () => {
    const action = login('123')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: action.uid
    })
})

test('should log out user', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
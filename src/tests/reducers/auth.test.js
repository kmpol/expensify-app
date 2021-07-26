import authReducer from "../../reducers/auth";

test('Should set uid when login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid: action.uid
    })
})

test('Should remove uid when logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({})
})
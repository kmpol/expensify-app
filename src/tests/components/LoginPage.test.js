import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJSON from 'enzyme-to-json'

import { LoginPage } from '../../components/LoginPage'

configure({ adapter: new Adapter() });
test('Should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should call startLogin on button click', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})
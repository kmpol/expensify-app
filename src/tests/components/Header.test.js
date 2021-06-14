import React from 'react'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
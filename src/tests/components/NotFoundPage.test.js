import React from 'react'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NotFoundPage from '../../components/NotFoundPage'

configure({ adapter: new Adapter() })

test("Shoudl render NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
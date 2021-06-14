import React from 'react'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

configure({ adapter: new Adapter() })

test("Shoudl render ExpenseDashboardPage", () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
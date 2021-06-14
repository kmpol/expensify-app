import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json'

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

configure({ adapter: new Adapter() });
test('Should render expenses list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render expenses list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
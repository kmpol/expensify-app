import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json'

import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

configure({ adapter: new Adapter() })

test('Should render ExpenseListItem with one item from fixtured expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
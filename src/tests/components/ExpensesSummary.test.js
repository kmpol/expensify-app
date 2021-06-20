import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

test('Should render singular expense summary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesInTotal={1} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render multiple expenses summary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesInTotal={500000} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: '1',
    amount: 123,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '2',
    amount: 123123,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: '3',
    amount: 9999,
    createdAt: moment(0).add(4, 'days').valueOf()
}]
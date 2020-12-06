import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import EditPage from './EditPage';

configure({adapter: new Adapter()});

describe('render FilterDirection', () => {
    const obj = {
        name: 'Max',
        surname: 'Kortelov',
        company: '',
        unique: 123
    };

    const props = {
        element: obj,
        closeEdit: jest.fn(),
        saveEdit: jest.fn()
    };

    const wrapper = shallow(<EditPage {...props} />);

    it('renders successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
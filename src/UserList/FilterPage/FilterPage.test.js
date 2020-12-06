import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FilterPage from './FilterPage';

configure({adapter: new Adapter()});

describe('render FilterDirection', () => {
    const arr= [{
        name: 'Max',
        surname: 'Kortelov',
        company: '',
        unique: 123
    }];

    const props = {
        workList: arr,
        primaryList: arr,
        onChangeCompany: jest.fn(),
        filterList: jest.fn(),
        editor: jest.fn()
    };

    const wrapper = shallow(<FilterPage {...props} />);

    it('renders successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
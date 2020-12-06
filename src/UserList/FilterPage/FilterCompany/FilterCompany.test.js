import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FilterCompany from './FilterCompany';

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
        onChangeCompany: jest.fn()
    };

    const wrapper = shallow(<FilterCompany {...props} />);

    it('renders successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
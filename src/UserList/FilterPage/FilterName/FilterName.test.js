import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FilterName from './FilterName';

configure({adapter: new Adapter()});

describe('render FilterDirection', () => {
    const props = {
        onChangeVector: jest.fn(),
        onChangeName: jest.fn()
    };

    const wrapper = shallow(<FilterName {...props} />);

    it('renders successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
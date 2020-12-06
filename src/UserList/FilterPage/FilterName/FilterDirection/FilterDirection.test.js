import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FilterDirection from './FilterDirection';

configure({adapter: new Adapter()});

describe('render FilterDirection', () => {

    const wrapper = shallow(<FilterDirection />);

    it('renders successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

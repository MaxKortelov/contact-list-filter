import React from 'react';
import renderer from 'react-test-renderer';
import Users from './Users';

test('Users displays correctly', () => {
    let workList= [{
        name: 'Max',
        surname: 'Kortelov',
        company: '',
        unique: 123
    }];
    let deleteUser= {...workList[0]};
    let editor={...workList[0]};

    const component = renderer.create(
        <Users workList={workList}
               deleteUser={deleteUser}
               editor={editor}
        />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
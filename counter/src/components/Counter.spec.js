import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fu()
  };

  // `shallow` は enzyme のメソッド
  // react のコンポーネントをレンダリングし、DOM検証のメソッドを持つオブジェクト(ShallowWrapper)を返す
  // shallow というだけあって浅いレンダリングになっており、深い階層のコンポーネントのイベントが発火しない、などの制約がある
  const component = shallow(
    <Counter value={value} {...actions} />
  );

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  };
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  });
});
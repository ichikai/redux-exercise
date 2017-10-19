import React, { Component, PropTypes } from 'react';

// `class` はES6で導入された糖衣構文 JSはあくまで prototype ベース
class Counter extends Component {

  // prop のバリデーション
  // エラーがある場合は、コンドールにwarningとして出力される
  // ただし、productionモードではチェックされない (？)
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

  incrementIfOdd = () => {
    if (this.props.value % 2 !==0) {
      this.props.onIncrement();
    }
  };

  incrementAsync  = () => {
    setTimeout(this.props.onIncrement, 1000);
  };

  render() {
    // `const` は ES6 の構文で immutable な定数を定義する
    // `{ hoge, fuga } = {hoge:1 fuga:2}`は分割代入 `{ hoge:foo, fuga:bar } = {hoge:1 fuga:2}` として、別名の変数で受け取ることも可能
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

// `import XXX from 'Counter.js'` としたとき、XXXに Counter が入る
export default Counter;

// 'react'モジュールから `default export された値` を'React'という名前で読み込む
// ES6の機能
import React from 'react';
import ReactDOM from 'react-dom';
// 'redux'モジュールから `createStore という名前で export された値` を'createStore'という名前で読み込む
import { createStore } from 'redux';

// プロジェクト固有のモジュールも読み込める、ここでは相対パスでファイルパス (拡張子は不要) を指定している
import Counter from './components/Counter';
// ディレクトリパスだけ指定した場合は index.js が読み込まれる
import counter from './reducers';

// * JSはステートメント末尾にセミコロンがなくても動作する (ASIという機能で、自動的に補完される)
// render(ここでは、 counter = ./reducers/index.js で default export された function)を指定して、reduxのstoreを作成
// 第2引数に初期ステートを渡すことも可能
// store はアプリケーションに1つだけ
const store = createStore(counter);
const rootEL = document.getElementById('root');

// * `() =>`は arrow function `()` には引数を記述する `=>` の後は関数の本体
// `ReactDOM.render()` には、JSXとcontainer(DOM node)を渡す
const render = () => ReactDOM.render(
  <Counter
    // JSXでは、`{}` で囲まれた部分は JS として処理される
    // component のprop,value に store の stare をセット (このサンプルでは state は単一の数値)
    value={store.getState()}
    // component の prop.onIncrement に 'INCREMENT' action を store に dispatch する function をセット
    // dispatch された action は render に渡される
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEL
);

render();

// store の state が更新されるたびに subscribe に指定した function が実行される
store.subscribe(render);

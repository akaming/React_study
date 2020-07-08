import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/*주석처리*/}
      <Hello 
        // 이런식으로 주석처리 가능
      />
      <div 
        // 이렇게 주석처리도 가능
      style={style }>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;

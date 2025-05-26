import React from 'react';

class TestClass extends React.Component {
  state = {};
  testFunction = () => {};
  render() {
    return <></>;
  }
}

export default function TestFunctionList() {
    return (
      <ul>
        <TestClass key="1" id="1" price="12"/>
      </ul>
    );
  }
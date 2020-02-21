// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Used to build a context spy for our Store context
// so components can access mock state in tests
global.buildContextSpy = (mockAppState) => {
  return jest
    .spyOn(React, 'useContext')
    .mockImplementation(() => {
      return {state: mockAppState, dispatch: () => true}
    });
}

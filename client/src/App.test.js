import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import ClassComponent from './components/ClassComponent';
import PlayerCard from './components/PlayerCard';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const appText = wrapper.queryByText(/women's world cup/i);
  expect(appText).toBeInTheDocument();
});

test('renders without crashing', () => {
  const classcomponent = rtl.render(<ClassComponent />)
  const element2 = classcomponent.queryAllByTestId();
  expect(element2).toBeTruthy();
})

test('renders without crashing', () => {
  const playercard = rtl.render(<PlayerCard player="player" />)
  const element3 = playercard.queryAllByTestId();
  expect(element3).toBeTruthy();
})
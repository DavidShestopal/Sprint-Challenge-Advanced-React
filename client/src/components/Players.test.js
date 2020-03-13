import React from 'react';
import ReactDOM from 'react-dom';
import * as rt1 from '@testing-library/react';
import { render, fireEvent } from '@testing-library/react';

import { Player } from './Players';

test('renders correctly', () => {
  render(<Player />);
});

afterEach(rt1.cleanup);

test(' players appear', () => {
  const { getByTestId } = rt1.render(<Player />);
  getByTestId('players');
});

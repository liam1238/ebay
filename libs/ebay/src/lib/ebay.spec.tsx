import { render } from '@testing-library/react';

import Ebay from './ebay';

describe('Ebay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ebay />);
    expect(baseElement).toBeTruthy();
  });
});

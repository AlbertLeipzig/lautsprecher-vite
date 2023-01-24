import { render, screen, clean } from '@testing-library/react';

import Footer from '../Footer.jsx';

test('should render a footer', () => {
  render(<Footer />);
    const footer = screen.getByRole('contentinfo');
});

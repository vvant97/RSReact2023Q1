import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders the expected text', () => {
    render(<Avatar />);
    const avatarElement = screen.getByText('T');
    expect(avatarElement).toBeInTheDocument();
  });
});

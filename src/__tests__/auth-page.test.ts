import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Component from '../routes/index.svelte';

describe('Auth Page', () => {
  it('should render properly', () => {
    render(Component);
    expect(screen.getByText(/welcome to my favorite albums/i)).toBeInTheDocument();
  });

  it('should navigate when token is present', () => {
    const mockAssign = jest.fn();
    const mockSetItem = jest.fn();

    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://fakehost:3000/#access_token=fake-token',
        assign: mockAssign
      },
      writable: true
    });

    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem
      },
      writable: true
    });

    render(Component);

    const element = screen.getByRole('link');
    userEvent.click(element);

    expect(mockAssign).toHaveBeenCalled();
    expect(mockSetItem).toHaveBeenCalledWith('spotify-access-token-svelte', 'fake-token');
    expect(global.mockGoto).toHaveBeenCalled();
  });
});

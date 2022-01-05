import { render, screen } from '@testing-library/svelte';
import Index from '../routes/index.svelte';

describe('Welcome Page', () => {
  it('should render properly', () => {
    render(Index);
    expect(screen.getByText(/welcome to my favorite albums/i)).toBeInTheDocument();
  });
});

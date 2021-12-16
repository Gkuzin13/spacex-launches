import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import defaultOptions from '../lib/queryDefaults';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

export const renderWithRouter = (history) => {
  const queryClient = new QueryClient(defaultOptions);

  return render(
    <QueryClientProvider client={queryClient}>
      <Router location={history.location} navigator={history}>
        <App></App>
      </Router>
    </QueryClientProvider>
  );
};

describe('App', () => {
  test('render next launch page', async () => {
    const history = createMemoryHistory();
    renderWithRouter(history);

    expect(await screen.findByText('next test mission')).toBeInTheDocument();
    expect(
      await screen.findByText(
        /These are the details for the next test mission./i
      )
    ).toBeInTheDocument();

    expect(await screen.findByRole('timer')).toBeDefined();
  });

  test('render latest launch page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/latest'] });
    renderWithRouter(history);

    expect(await screen.findByText(/latest test mission/)).toBeInTheDocument();
    expect(
      await screen.findByRole('button', { name: /WATCH WEBCAST/ })
    ).toBeInTheDocument();
  });

  test('render all launches page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/stats'] });
    renderWithRouter(history);

    expect(await screen.findAllByRole('meter')).toHaveLength(4);
    expect(await screen.findByRole('table')).toBeInTheDocument();
  });
});

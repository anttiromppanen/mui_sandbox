import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const todoTestData = [
  {
    userId: 1,
    id: 1,
    title: 'test title1',
    completed: false,
  },
  {
    userId: 2,
    id: 5,
    title: 'test title2',
    completed: true,
  },
];

export const handlers = [
  rest.get(
    '*/todos',
    (req, res, ctx) => res(
      ctx.status(200),
      ctx.json(todoTestData),
    ),
  ),
];

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi) => rerender(
      <QueryClientProvider client={testQueryClient}>
        {rerenderUi}
      </QueryClientProvider>,
    ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  // eslint-disable-next-line react/prop-types
  return function ({ children }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    );
  };
}

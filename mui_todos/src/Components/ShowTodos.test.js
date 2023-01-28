import React from 'react';
import { rest } from 'msw';
import { renderWithClient } from '../utils/testUtils';
import ShowTodos from './ShowTodos';
import { server } from '../setupTests';

describe('<ShowTodos />', () => {
  test('should render todos', async () => {
    const result = renderWithClient(<ShowTodos />);

    expect(await result.findByText(/test title1/i)).toBeInTheDocument();
  });

  test('should render error message when error occurs', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => res(ctx.status(404))),
    );

    const result = renderWithClient(<ShowTodos />);

    expect(await result.findByText(/an error has occurred/i)).toBeInTheDocument();
  });
});

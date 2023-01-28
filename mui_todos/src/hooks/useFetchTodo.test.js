import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { server } from '../setupTests';
import { createWrapper } from '../utils/testUtils';
import useFetchTodo from './useFetchTodo';

describe('useFetchTodo.js', () => {
  test('should succeed with valid api', async () => {
    const { result } = renderHook(() => useFetchTodo(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data[0].title).toBe('test title1');
  });

  test('should throw error when api error occurs', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => res(ctx.status(500))),
    );

    const { result } = renderHook(() => useFetchTodo(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

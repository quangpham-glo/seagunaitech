import { createLogger } from '../src/core';
import { createHttpLogger } from '../src/http';
import { describe, expect, it } from 'vitest';

describe('logger', () => {
  it('creates a pino logger instance', () => {
    const log = createLogger({ name: 'test' });
    expect(typeof log.info).toBe('function');
  });

  it('creates a pino-http logger', () => {
    const httpLogger = createHttpLogger();
    expect(typeof httpLogger).toBe('function');
  });
});

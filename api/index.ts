import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';

export const config = {
  runtime: 'edge',
};

export const app = new Hono({ strict: false }).basePath('/api');

app.use('*', cors());

app.get('/whoami',
  (c) => {
    return c.json({
      ipaddress: c.req.header('x-forwarded-for'),
      language: c.req.header('accept-language'),
      software: c.req.header('user-agent'),
    });
  }
);

export default handle(app);

import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1';
import { loggingTable } from './db/schema';

type Bindings = {
  MY_DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {

  const db = drizzle(c.env.MY_DB);
  const headers = c.req.raw.headers.entries()
  console.log(JSON.stringify(headers))

  db.insert(loggingTable).values({
    headers: JSON.stringify(headers),
    name: 'test',
    timestamp: new Date(),
  })

  const result = await db.insert(loggingTable).values({
    headers: JSON.stringify(headers),
    name: 'test',
    timestamp: new Date(),
  })

  return c.json({ headers, result });
})

export default app

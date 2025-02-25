import { column, defineDb, defineTable } from "astro:db";

const accounts = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: crypto.randomUUID() }),
    email: column.text(),
    password: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { accounts },
});

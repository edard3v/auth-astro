import { accounts, db } from "astro:db";
import { ACCOUNTS } from "./drafts/accounts";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(accounts).values(ACCOUNTS);
}

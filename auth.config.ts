import { defineConfig } from "auth-astro";
import Credencials from "@auth/core/providers/credentials";
import { accounts, and, db, eq } from "astro:db";

export default defineConfig({
  providers: [
    // GitHub({
    //   clientId: import.meta.env.GITHUB_CLIENT_ID,
    //   clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    // }),

    Credencials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize({ email, password }, request) {
        const [account] = await db
          .select()
          .from(accounts)
          .where(and(eq(accounts.email, String(email)), eq(accounts.password, String(password))));

        if (!account) throw new Error("Credenciales invalidas.");
        return { email: account.email };
      },
    }),
  ],
});

import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((_context, next) => {
  console.log("middleware");

  return next();
});

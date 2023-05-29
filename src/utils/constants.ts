export const apiBaseUrl = "https://jsonplaceholder.typicode.com/";
export const appUrl =
  process.env.NODE_ENV === `development`
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

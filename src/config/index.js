export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://telect-app.herokuapp.com'
    : 'http://localhost:8080';

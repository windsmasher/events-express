export const apiUrl = id =>
  id
    ? `http://localhost:4000/participant/${id}`
    : "http://localhost:4000/participant";
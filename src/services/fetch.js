import { google } from "../config";

export const searchByTitle = async (keyword, options) => {
  const res = await fetch(
    `${google.bookUrl}/volumes?q=${keyword}&key=${google.key}`,
    options
  );
  const data = await res.json();
  return data;
};

export const searchById = async (id, options) => {
  const res = await fetch(
    `${google.bookUrl}/volumes/${id}?key=${google.key}`,
    options
  );
  return await res.json();
};

export const searchUserBookshelves = async user => {
  const options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  const res = await fetch(`${google.bookUrl}/mylibrary/bookshelves`, options);
  return await res.json();
};

export const searchBookshelve = async (bookshelveId, options) => {
  const res = await fetch(
    `${google.bookUrl}/mylibrary/bookshelves/${bookshelveId}/volumes`,
    options
  );
  return await res.json();
};

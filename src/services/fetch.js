import { google } from "../config";

export const searchByTitle = async (keyword, options) => {
  const res = await fetch(
    `${google.bookUrl}/volumes?q=${keyword}&key=${google.key}&maxResults=40`,
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
    `${google.bookUrl}/mylibrary/bookshelves/${bookshelveId}/volumes?maxResults=40`,
    options
  );
  return await res.json();
};

export const bookshelvesIdList = async (shelve, token) => {
  const action = {
    FAVORITES: 0,
    TOREAD: 2,
    READING: 3,
    FINISHED: 4,
  };
  const url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${action[shelve]}/volumes?fields=items.id`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};

export const addToBookshelve = async (shelve, id, token) => {
  const action = {
    FAVORITE: 0,
    TOREAD: 2,
    READING: 3,
    FINISHED: 4,
  };

  const options = {
    method: "post",
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json",
  };

  const res = await fetch(
    `${google.bookUrl}/mylibrary/bookshelves/${action[shelve]}/addVolume?volumeId=${id}&key=${google.key}`,
    options
  );
  return await res.status;
};

export const removeFromBookshelve = async (shelve, id, token) => {
  const action = {
    FAVORITE: 0,
    TOREAD: 2,
    READING: 3,
    FINISHED: 4,
  };

  const options = {
    method: "post",
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json",
  };

  const res = await fetch(
    `${google.bookUrl}/mylibrary/bookshelves/${action[shelve]}/removeVolume?volumeId=${id}&key=${google.key}`,
    options
  );
  return res.status;
};

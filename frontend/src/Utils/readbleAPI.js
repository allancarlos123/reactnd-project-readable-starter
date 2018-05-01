const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(function(data) {
      return data;
    });

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(function(data) {
      return data;
    });

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(function(data) {
      return data;
    });

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

export const fetchPosts = () => fetch(`${api}/posts`, {headers})
  .then(res => res.json())
  .then(function (data) {
    return data;
  });

export const fetchPost = id => fetch(`${api}/posts/${id}`, {headers})
  .then(res => res.json())
  .then(function (data) {
    return data;
  });

export const fetchCategories = () => fetch(`${api}/categories`, {headers})
  .then(res => res.json())
  .then(function (data) {
    return data;
  });

export const fetchComments = id => fetch(`${api}/posts/${id}/comments`, {headers})
  .then(res => res.json())
  .then(function (data) {
    return data;
  })

export const votePost = (id, option) => fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({option})
  })
  .then(res => res.json())
  .then(function (data) {
    return data;
  });

export const createPost = (values, callback) =>
fetch(`${api}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(values)
  })
  .then(res => res.json())
  .then(function (data) {
    return data;
  });

export const deleteCommentPost = id => fetch(`${api}/comments/${id}`, {
  method: "DELETE",
  headers
})
.then(res => res.json())
.then(function (data) {
  return data;
});

export const voteCommentPost = (id, option) => fetch(`${api}/comments/${id}`, {
  method: "POST",
  headers,
  body: JSON.stringify({option})
})
.then(res => res.json())
.then(function (data) {
  return data;
});
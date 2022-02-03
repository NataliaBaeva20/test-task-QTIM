export function getPosts() {
  return fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function getPost(postId) {
  return fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}
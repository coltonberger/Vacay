const API_ROOT = "http://localhost:3000";
const token = localStorage.getItem("token");


const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json",
  Authorization: `Bearer ${token}`
};

export const login = (email, password) => {
  return fetch(`${API_ROOT}/login/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json())
  .then(({ token }) => {
    localStorage.setItem('token', token);
    console.log('token', token)
  })
  .catch(err => console.log(err));
};

export const signup = ({ firstName, lastName, email, password }) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ firstName, lastName, email, password })
  }).then(res => res.json())
    .then(({ data, token }) => {
      localStorage.setItem('token', token);
      return data
    })
  .catch(err => console.log(err));
};

export const logout = () => {
  localStorage.removeItem('token');
}

import swal from 'sweetalert';


const API_ROOT = 'http://localhost:3000'
const token = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).token : '';

const headers = {
  'Content-Type': 'application/json',
  Acccepts: 'application/json',
  Authorization: `Bearer ${token}`
}

export const login = (email, password) => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json())

    .then(({ token, data }) => {
      window.sessionStorage.setItem('user', JSON.stringify({ data, token }))
      console.log('token', token)
    })
    .catch(err => console.log(err))
}

export const signup = ({ firstName, lastName, email, password }) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ firstName, lastName, email, password })
  }).then(res => res.json())
    .then(({ data, token }) => {
      console.log('token', token);
      //window.sessionStorage.setItem('token', token)
      window.sessionStorage.setItem('user', JSON.stringify({ data, token }))
      return data
    })
    .then(() => {
      swal({
      title: "User created",
      text: "Welcome to vā kā!",
      icon: "success",
      button: "Aww yiss!"
    })
    })
    .catch((err) => {
      console.log(err)
      swal({
        title: "This email already exists",
        icon: "warning",
        button: "ok"
      })
    })
}



export const logout = () => {
  window.sessionStorage.removeItem('token')
}

export const createSchedule = (EventList) => {
  const user = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).data : null;
  if(!user) {
    return false;
  }
  return fetch(`${API_ROOT}/schedules/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({events: EventList, userId:user.id})
  })
  .catch(err => console.log(err))
}

export const deleteSingleEvent = (savedEventsid, scheduleId) => {
  return fetch(`${API_ROOT}/savedEvents/${savedEventsid}/${scheduleId}`, {
    method: 'DELETE',
    headers: headers
  })
  .catch(err => console.log(err))
}

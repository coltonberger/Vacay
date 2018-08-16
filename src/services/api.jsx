import swal from 'sweetalert';

const API_ROOT = 'https://vaca-backend.herokuapp.com'
//const API_ROOT = 'http://localhost:3000'

const getHeaders = () => {
  const token = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).token : '';
  return  {
    'Content-Type': 'application/json',
    Acccepts: 'application/json',
    Authorization: `Bearer ${token}`
  }
}

export const login = (email, password) => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email, password })
  }).then(res => res.json())

    .then(({ token, data, error }) => {
      if (error) {
        swal({
          title: "email and password don't match",
          icon: "warning",
          button: "ok"
        })
      }
      window.sessionStorage.setItem('user', JSON.stringify({ data, token }))
      console.log('token', token)
    })
    .catch((error) => {
      console.log(error)
  })
}

export const getEvents = async () => {
  const messagesJson = await fetch(`${API_ROOT}/events`, {
    method: 'GET',
    headers: getHeaders(),
  })

  let response = await messagesJson.json()
  if (response["data"]) {
    let events = response["data"]
    return events
  }
  return []
}

export const isLoggedIn = () => {
  if (JSON.parse(sessionStorage.getItem("user")).token) {
    return true;
  } else {
    return false;
  }
}

export const signup = ({ firstName, lastName, email, password }) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: getHeaders(),
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
        text: "Welcome to vā kā! Please sign in to verify account",
        icon: "success",
        button: "ok"
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
  window.sessionStorage.removeItem('user')
}

export const createSchedule = (EventList) => {
  const user = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).data : null;
  if(!user) {
    return false;
  }
  return fetch(`${API_ROOT}/schedules/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({events: EventList, userId:user.id})
  })
  .then(() => {
      swal({
      title: "Schedule Saved!",
      text: "check saved schedules to review",
      icon: "success",
      button: "ok"
    })
  })
  .catch((err) => {
    console.log(err)
    swal({
      title: "Make sure you are logged in",
      icon: "warning",
      button: "ok"
    })
  })
}

export const deleteSingleEvent = (savedEventsid, scheduleId) => {
  return fetch(`${API_ROOT}/savedEvents/${savedEventsid}/${scheduleId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
  .catch(err => console.log(err))
}

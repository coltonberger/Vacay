// fecth makes a network request
const apiUrl = 'http://localhost:3000/users'
let hashed = bcrypt.hashSync(password)

fetch(apiUrl, {
  method: 'POST', // post HTTP method
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashed
  })
})
.then(response => {
  if (!response.ok){
    throw new Error('request failed')
  }
  return response.json()
})
.then(() => {
  swal({
    title: "User created",
    text: "Welcome to CheapTix!",
    icon: "success",
    button: "Aww yiss!"
  })
  console.log('CLEAR ME!')
  document.getElementById("create_user_form").reset();
})
.catch((error) => {
  console.log(error)
  swal({
    title: "This email already exists",
    icon: "warning",
    button: "ok"
  })
})
}
}

export default DashBoardPage;

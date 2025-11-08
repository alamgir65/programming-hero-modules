import './App.css'
import Users from './components/Users'
import UserForm from './components/UserForm'


const usersPromise = fetch('http://localhost:5000/users').then(res => res.json());
function App() {

  return (
    <>
      <h1>Simple CRUD client</h1>
      <UserForm usersPromise={usersPromise}></UserForm>
    </>
  )
}

export default App

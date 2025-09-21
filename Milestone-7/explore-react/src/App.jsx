import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello! React JS.</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Student name="Alamgir Hossain" dept="CSE"></Student>
      <Student name="Ayat Rohman" dept="Mathmatics"></Student>
    </>
  )
}


function Student(props) {
  const style = {
    border : '2px solid white',
    borderRadius : '10px',
    marginBottom : '5px'

  }
  return (
    <>
      <div style={style}>
        <h3>Name : {props.name}</h3>
        <p>Dept : {props.dept}</p>
      </div>
    </>
  )
}

export default App

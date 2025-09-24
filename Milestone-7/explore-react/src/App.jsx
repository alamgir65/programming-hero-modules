
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Counter from './Counter'
import { Suspense } from 'react'
import User from './User'
import Single from './Single'

function App() {

  const actors = [
    {id : 1, name : 'Salman Khan', age : 57},
    {id : 2, name : 'Sahrukh Khan', age : 57},
    {id : 3, name : 'Captain Jack Sparo', age : 57},
    {id : 4, name : 'Pata Kisto', age : 57}
  ];

  // const userFetch = fetch('https://jsonplaceholder.typicode.com/users')
  //                       .then(res => res.json())

  const users = async () => {
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }
  const userFetch = users();

  const handleClick = () => {
    alert('Clicked button');
  }

  const handleClick2 = (name) => {
    alert(`Button Clicked by ${name}`);
  }

  return (
    <>
      <div>
        <h1>Hello! React JS.</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Suspense fallback={<h4>Loading....</h4>}>
        <User userFetch = {userFetch}></User>
      </Suspense>
      
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2('Alamgir')}>Click me 2</button>

      {/* <Student name="Alamgir Hossain" dept="CSE"></Student>
      <Student name="Ayat Rohman" dept="Mathmatics"></Student>

      <div>
        <h3>Todo List : </h3>
        <Todo task="Learn React" isDone={true}></Todo>
        <Todo task="Learn Bussiness Fundamental" isDone={false}></Todo>
      </div>

      <div>
        <h4>Actors list : </h4>
        {
          actors.map(actor => <Actor key={actor.id} actor={actor}></Actor>)
        }
      </div> */}
    </>
  )
}


function Student(props) {
  const style = {
    border: '2px solid white',
    borderRadius: '10px',
    marginBottom: '5px'

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

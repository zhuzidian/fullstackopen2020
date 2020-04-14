import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Hello = ({ name, age }) => {

//   // component helper functions
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         你好 {name}, 你 {age} 岁
//       </p>
//       <p>你出生于 {bornYear()} 年</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = '张三'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
      
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

const App = () => {
  // state
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({ left: 0, right: 0 })

  // handler
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    }
    setClicks(newClicks)
  }
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

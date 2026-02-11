import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}
const anotherElement =(
  <a href="http://google.com "target='_
  blank'>Visit Google</a>
)

const reactElement =React.createElement(
  'a',
  {href:"http://google.com" ,target:'_blank'},
  'Click me to visit google'
)

ReactDom.createRoot(document.getElementById('root')).
render(
 
    // anotherElement 
    // reactElement
    <App/>
)

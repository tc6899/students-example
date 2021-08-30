import Header from './Header'
import Students from './Students'
import StudentDetails from './StudentDetails'
import { BrowserRouter, Route } from 'react-router-dom'

export default function App () {
  function click () {
    console.log('Clicked test!')
  }

  return (
    <BrowserRouter>
      <main onClick={click}> {/* <main onClick="function click () {}" */}
        <Route path='/' exact component={Header} />
        <Route path='/students' component={Students} />
        <Route path='/student/:id' component={StudentDetails} />
      </main>
    </BrowserRouter>
  )
}

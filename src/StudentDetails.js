import studentData from './studentData'
import { useParams } from 'react-router-dom'

export default function StudentDetails () {
  const { id } = useParams() 

  console.log('studentData test:', studentData)
  console.log('id test:', id)
  const integer = parseInt(id)

  const student = studentData.find(student => student.id === integer)
  console.log('student test:', student)
  return (
    <main>
      <h1>{student.name} [{id}]</h1>
      <p>Physics: {student.physics}</p>
      <p>Chemistry: {student.chemistry}</p>
      <p>Mathematics: {student.mathematics}</p>
    </main>
  )
}
import StudentItem from './StudentItem'
import studentData from './studentData'

export default function Students () {
  const items = studentData.map(student => {
    return (
      <StudentItem
        key={student.id}
        name={student.name}
        physics={student.physics}
        chemistry={student.chemistry}
        mathematics={student.mathematics}
        id={student.id}
      />
    )
  })

  return (
    <>
      <h2>Students</h2>

      <ul>
        {items}
      </ul>
    </>
  )
}
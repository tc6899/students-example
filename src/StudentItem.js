import { Link } from 'react-router-dom'

export default function StudentItem (
  { id, name, physics, chemistry, mathematics }
) {
  // const { name, physics, chemistry, mathematics } = props

  const url = `/student/${id}`

  return (
    <li>
      <Link to={url}>
        {name} [{id}]
      </Link>
    </li>
  )
}
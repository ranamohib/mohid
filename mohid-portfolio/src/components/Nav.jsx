import { NavLink } from "react-router-dom"


export default function Nav() {
  return (
		<nav className="uppercase flex font-medium">
      <NavLink to={'/'} className=" py-4">
        {({ isActive }) => (
          <span 
            className={ isActive ? 'border-b-2 p-1' : ''
            }
          >
            work
          </span>
        )}

			</NavLink>
      <NavLink to={'/contact'} className="ml-12 py-4">
        {({ isActive }) => (
          <span 
            className={ isActive ? 'border-b-2 p-1' : ''
            }
          >
            contact
          </span>
        )}

			</NavLink>
		</nav>
  )
}

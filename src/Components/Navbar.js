import { Link } from 'react-router-dom'
const AppNavBar = () => {
  return (
    <div className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h1 className='title is-3 kanit'> TDC</h1>
        </Link>

        <button
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>

          <Link className='navbar-item' to='/about'>
            About
          </Link>

          <div className='navbar-item has-dropdown is-hoverable'>
            <Link className='navbar-link'>Menu</Link>

            <div className='navbar-dropdown'>
              <Link className='navbar-item'>Tin</Link>
              <Link className='navbar-item'>Jobs</Link>
              <Link className='navbar-item'>Contact</Link>
              <hr className='navbar-divider' />
              <Link className='navbar-item'>Report an issue</Link>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link className='button is-primary'>
                <strong>Sign up</strong>
              </Link>
              <Link className='button is-light'>Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppNavBar
import businessLogo from '../assets/businessLogo.png'
import { FlatButton } from './FlatButton'
import { handleRequest } from './handleRequest'


export const Navbar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark" data-bs-theme='dark' >
      <div className="container-fluid">
        <img className='navbar-brand' src={businessLogo} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">

            {/* <li className="nav-item">
              <a href={`/`} className="nav-link active">
                    Home
              </a>
            </li> */}

            <li className="nav-item">
              <a href={`/#courses`} className="nav-link active">
                   German Courses
              </a>
            </li>
            <li className="nav-item">
              <a href={`#expectation`} className="nav-link active">
                    How it Works
              </a>
            </li>
            <li className="nav-item">
              <a href={`#courses`} className="nav-link active">
                    Pricing
              </a>
            </li>
            
            
            <li className="nav-item">
           
                <FlatButton
                title="Start Learning Today"
                className="btn btnPrimary"
                onClick={() =>
                  handleRequest(
                    "Hello! I'm interested in learning German with Bilinguaschule. I'd like to know more about your classes."
                  )
                }
              />
             
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
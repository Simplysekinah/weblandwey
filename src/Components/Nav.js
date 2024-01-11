import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary h-50 section-nav px-5">
              <div className="container-fluid d-flex ">
                <Link className="navbar-brand" to="/">
                  <img src={require('../images/landway_logo-removebg-preview.png')} alt="" className='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/one">OUR PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/two">SCHEDULE AN INSPECTION</Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </nav>
    </>
  )
}

export default Nav